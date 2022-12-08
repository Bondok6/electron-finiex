<template>
  <div class="mb-8">
    <invoice />
    <Loading v-if="isLoading"></Loading>
    <invoice-table :data="[...records]" v-else />
    <invoice-summary />
    <div class="text-center mt-4">
      <el-pagination
        :background="true"
        :current-page="paginationConfig.pageNumber"
        layout="jumper, prev, pager, next, total ,sizes"
        :total="paginationConfig.totalRecords"
        :page-sizes="[10, 20, 30, 40, 100]"
        @current-change="handleCurrentChange"
        @size-change="handleSizeChange"
        :page-size="paginationConfig.pageSize"
      >
      </el-pagination>
    </div>
  </div>
</template>
<script>
import Invoice from "~/components/accounting/the-opening-balance/Invoice.vue";
import InvoiceTable from "~/components/accounting/the-opening-balance/InvoiceTable.vue";
import InvoiceSummary from "~/components/accounting/the-opening-balance/summary/Summary.vue";
import { mapState, mapMutations } from "vuex";
export default {
  components: { Invoice, InvoiceTable, InvoiceSummary },
  data(){
    return {
      differenceOfWillEdit: 0
    }
  },
  async created() {
    await Promise.all([
      this.$store.dispatch("Accounting/openingBalance/fetchRecords", {
        pageNumber: 1,
        rpType:0,
        showZeros:false,
        accLvl:1
      }),
      this.$store.dispatch("lists/getAccountTypes"),
      this.$store.dispatch("Accounting/accountingDailyJournal/fetchSubAccountsList", {
        mainOrSub: false
      }),
      this.$store.dispatch("lists/getAccountNatures"),
      this.$store.dispatch("lists/getBranchesList"),
      this.$store.dispatch("General/getFinancialYear"),
      this.$store.dispatch("lists/getMaxLevel")
    ]).catch(err => {
      this.$message.error(err.message);
    });
  },
  computed: {
    ...mapState({
      isLoading: state => state.isLoading,
      paginationConfig: state =>
        state.Accounting.openingBalance.paginationConfig,
      records: state => state.Accounting.openingBalance.records,
      recordsWillEdit: state => state.Accounting.openingBalance.recordsWillEdit,
      RecordDetails: state => state.Accounting.openingBalance.RecordDetails
    })
  },

  methods: {
    ...mapMutations({
      setRecordsWillEdit: "Accounting/openingBalance/setRecordsWillEdit",
      setEdit: "Accounting/openingBalance/setEdit"
    }),
    calcDifferenceOfWillEdit() {
      console.log(this.recordsWillEdit);
      this.differenceOfWillEdit = this.recordsWillEdit.reduce( (diff, item) => diff + (item.startDebit - item.oldDebit + item.startCredit - item.oldCredit), 0)
    },
    async handleCurrentChange(val) {
      if (this.recordsWillEdit.length > 0) {
        event.preventDefault();
        this.calcDifferenceOfWillEdit();
        // alert avoid user loss changes
        // id confirm => save date and load new data
        this.$confirm(
          "you will lose changes , Do you want to save the changes ?"
          +`\n ${this.$t("total-difference")}: ${this.$numberWithCommas(this.differenceOfWillEdit)}`,
          {
            confirmButtonText: this.$t("ok"),
            showCancelButton: true,
            type: "warning",
            center: true,
            customClass: "confirmBox"
          }
        )
          .then(() => {
            this.$store
              .dispatch("Accounting/openingBalance/update")
              .then(() => {
                this.$notify({
                  group: "actions",
                  type: "scuccess",
                  title: "Done"
                });
              })
              .catch(e => {
                  
                this.$notify({
                  group: "actions",
                  type: "error",
                  title: e.response.data.message
                });
              });
            this.$store.dispatch("Accounting/openingBalance/fetchRecords", {
              pageNumber: val,
              pageSize: this.paginationConfig.pageSize,
              ...this.RecordDetails
            });

            // if (
            //   this.recordsWillEdit.every(el => el.startCredit == el.startDebit)
            // ) {
            //   this.$store
            //     .dispatch("Accounting/openingBalance/update")
            //     .then(() => {
            //       this.$notify({
            //         group: "actions",
            //         type: "scuccess",
            //         title: "Done"
            //       });
            //     })
            //     .catch(e => {
                   
            //       this.$notify({
            //         group: "actions",
            //         type: "error",
            //         title: e.response.data.message
            //       });
            //     });
            //   this.$store.dispatch("Accounting/openingBalance/fetchRecords", {
            //     pageNumber: val,
            //     pageSize: this.paginationConfig.pageSize,
            //     ...this.RecordDetails
            //   });
            //   this.setEdit(false);
            // } else {
            //   this.$confirm("debit not equal cedit Review your changes", {
            //     confirmButtonText: this.$t("ok"),
            //     showCancelButton: true,
            //     type: "warning",
            //     center: true,
            //     customClass: "confirmBox"
            //   })
            //     .then(() => {
            //       this.$store
            //         .dispatch("Accounting/openingBalance/update")
            //         .then(() => {
            //           this.$notify({
            //             group: "actions",
            //             type: "scuccess",
            //             title: "Done"
            //           });
            //         })
            //         .catch(e => {
                       
            //           this.$notify({
            //             group: "actions",
            //             type: "error",
            //             title: e.response.data.message
            //           });
            //         });
            //       this.$store.dispatch(
            //         "Accounting/openingBalance/fetchRecords",
            //         {
            //           pageNumber: val,
            //           ...this.RecordDetails,
            //           pageSize: this.paginationConfig.pageSize
            //         }
            //       );
            //       this.setRecordsWillEdit({});
            //       this.setEdit(false);
            //     })
            //     .catch(() => {
            //       this.$store.dispatch(
            //         "Accounting/openingBalance/fetchRecords",
            //         {
            //           pageSize: this.paginationConfig.pageSize,
            //           pageNumber: 1
            //         }
            //       );
            //     });
            // }
          })
          .catch(() => {
            this.$store.dispatch("Accounting/openingBalance/fetchRecords", {
              pageNumber: val,
              pageSize: this.paginationConfig.pageSize,
              ...this.RecordDetails
            });
            this.setRecordsWillEdit({});
            this.setEdit(false);
          });
      } else {
        if (this.RecordDetails.rpType != 1) {
          // this.setEdit(false);
          await this.$store.dispatch("Accounting/openingBalance/fetchRecords", {
            pageNumber: val,
            pageSize: this.paginationConfig.pageSize,
            ...this.RecordDetails
          });
        } else {
          await this.$store.dispatch("Accounting/openingBalance/fetchRecords", {
            pageNumber: val,
            pageSize: this.paginationConfig.pageSize,
            ...this.RecordDetails
          });
        }
      }
    },
    // handle select that user can change number of records per page
    async handleSizeChange(val) {
      if (this.recordsWillEdit.length > 0) {
        event.preventDefault();
        this.calcDifferenceOfWillEdit()
        // alert avoid user loss changes
        // id confirm => save date and load new data
        this.$confirm(
          "you will lose changes, Do you want to save the changes?"
          +`\n ${$t("total-difference")}: ${$numberWithCommas(this.differenceOfWillEdit)}`,
          {
            confirmButtonText: this.$t("ok"),
            showCancelButton: true,
            type: "warning",
            center: true,
            customClass: "confirmBox"
          }
        )
          .then(() => {
            if (
              this.recordsWillEdit.every(el => el.startCredit == el.startDebit)
            ) {
              this.$store
                .dispatch("Accounting/openingBalance/update")
                .then(() => {
                  this.$notify({
                    group: "actions",
                    type: "scuccess",
                    title: "Done"
                  });
                })
                .catch(e => {
                   
                  this.$notify({
                    group: "actions",
                    type: "error",
                    title: e.response.data.message
                  });
                });
              this.$store.dispatch("Accounting/openingBalance/fetchRecords", {
                pageNumber: 1,
                pageSize: val
              });
              this.setEdit(false);
              this.setRecordsWillEdit({});
            } else {
              this.$confirm("debit not equal cedit Review your changes", {
                confirmButtonText: this.$t("ok"),
                showCancelButton: true,
                type: "warning",
                center: true,
                customClass: "confirmBox"
              })
                .then(() => {
                  this.$store
                    .dispatch("Accounting/openingBalance/update")
                    .then(() => {
                      this.$notify({
                        group: "actions",
                        type: "scuccess",
                        title: "Done"
                      });
                    })
                    .catch(e => {
                       
                      this.$notify({
                        group: "actions",
                        type: "error",
                        title: e.response.data.message
                      });
                    });
                  this.$store.dispatch(
                    "Accounting/openingBalance/fetchRecords",
                    {
                      pageNumber: 1,
                      pageSize: val
                    }
                  );
                  this.setRecordsWillEdit({});
                  this.setEdit(false);
                })
                .catch(() => {
                  this.$store.dispatch(
                    "Accounting/openingBalance/fetchRecords",
                    {
                      pageSize: 10,
                      pageNumber: 1
                    }
                  );
                });
            }
          })
          .catch(() => {
            this.$store.dispatch("Accounting/openingBalance/fetchRecords", {
              pageNumber: 1,
              pageSize: val
            });
            this.setRecordsWillEdit({});
            this.setEdit(false);
          });
      } else {
        if (this.RecordDetails.rpType != 1) {
            await this.$store.dispatch(
              "Accounting/openingBalance/fetchRecords",
              {
                pageNumber: 1,
                pageSize: val,
                ...this.RecordDetails
              }
            );
        } else {
          await this.$store.dispatch("Accounting/openingBalance/fetchRecords", {
            pageNumber: 1,
            pageSize: val,
            ...this.RecordDetails
          });
        }
      }
    }
  }
};
</script>
