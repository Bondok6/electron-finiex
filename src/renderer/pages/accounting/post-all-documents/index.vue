<template>
  <div class="mb-8">
    <invoice />
    <Loading v-if="isLoading"></Loading>
    <invoice-table :data="[...records]" v-else />
    <invoice-summary />
    <div class="text-center">
      <el-pagination
        :background="true"
        :current-page="paginationConfig.pageNumber"
        layout="jumper, prev, pager, next, total ,sizes"
        :total="paginationConfig.totalRecords"
        :page-sizes="[10, 20, 30, 40]"
        @current-change="handleCurrentChange"
        @size-change="handleSizeChange"
        :page-size="paginationConfig.pageSize"
      >
      </el-pagination>
    </div>
  </div>
</template>
<script>
import Invoice from "~/components/accounting/post-all-documents/Invoice";
import InvoiceTable from "~/components/accounting/post-all-documents/InvoiceTable";
import InvoiceSummary from "~/components/accounting/post-all-documents/summary/Summary";
import { mapState, mapMutations } from "vuex";
export default {
  components: { Invoice, InvoiceTable, InvoiceSummary },
  async created() {
    await this.$store.dispatch("Accounting/postAllDocus/fetchRecords");
  },
  computed: {
    ...mapState({
      isLoading: state => state.isLoading,
      paginationConfig: state => state.Accounting.postAllDocus.paginationConfig,
      records: state => state.Accounting.postAllDocus.records,
      rowsSelection: state => state.Accounting.postAllDocus.rowsSelection
    })
  },
  methods: {
    ...mapMutations({
      setRecordDetails: "Accounting/postAllDocus/setRecordDetails",
      clearSelections: "Accounting/postAllDocus/clearSelections"
    }),
    async handleCurrentChange(val) {
      event.preventDefault();
      if (this.rowsSelection.length > 0) {
        this.$confirm(
          "you will lose the selected doucs , Do you want to post the selected documents ? ",
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
              .dispatch("Accounting/postAllDocus/postDocus")
              .then(() => {
                this.$notify({
                  group: "actions",
                  type: "scuccess",
                  title: "posted"
                });
              })
              .catch(e => {
                 
                this.$notify({
                  group: "actions",
                  type: "error",
                  title: e.response.data.message
                });
              });

            this.setRecordDetails({
              pageNumber: val
            });
            this.$store.dispatch("Accounting/postAllDocus/fetchRecords");
          })
          .catch(() => {
            this.clearSelections();
            this.setRecordDetails({
              pageNumber: val
            });
            this.$store.dispatch("Accounting/postAllDocus/fetchRecords");
          });
      } else {
        this.setRecordDetails({
          pageNumber: val
        });
        await this.$store.dispatch("Accounting/postAllDocus/fetchRecords");
      }
    },
    // handle select that user can change number of records per page
    async handleSizeChange(val) {
      if (this.rowsSelection.length > 0) {
        this.$confirm(
          "you will lose the selected doucs , Do you want to post the selected documents ? ",
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
              .dispatch("Accounting/postAllDocus/postDocus")
              .then(() => {
                this.$notify({
                  group: "actions",
                  type: "scuccess",
                  title: "posted"
                });
              })
              .catch(e => {
                 
                this.$notify({
                  group: "actions",
                  type: "error",
                  title: e.response.data.message
                });
              });

            this.setRecordDetails({
              pageSize: val,
              pageNumber: 1
            });
            this.$store.dispatch("Accounting/postAllDocus/fetchRecords");
          })
          .catch(() => {
            this.clearSelections();
            this.setRecordDetails({
              pageSize: val,
              pageNumber: 1
            });
            this.$store.dispatch("Accounting/postAllDocus/fetchRecords");
          });
      } else {
        this.setRecordDetails({
          pageSize: val,
          pageNumber: 1
        });
        await this.$store.dispatch("Accounting/postAllDocus/fetchRecords");
      }
    }
  }
  /*
   display() {
      if (this.rowsSelection.length > 0) {
        this.$confirm("your data will be lost", {
          confirmButtonText: this.$t("ok"),
          showCancelButton: true,
          type: "warning",
          center: true,
          customClass: "confirmBox"
        })
          .then(() => {
            this.clearSelections();
            this.$store.dispatch("Accounting/postAllDocus/fetchRecords");
          })
          .catch(() => {
            this.$message({
              type: "info",
              message: "navigation canceled"
            });
          });
      }else{
        this.$store.dispatch("Accounting/postAllDocus/fetchRecords");
      }
    },

  */
};
</script>
