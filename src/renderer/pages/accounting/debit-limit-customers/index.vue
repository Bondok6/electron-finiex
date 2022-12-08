<template>
  <div class="mb-8">
    <invoice />
    <Loading v-if="isLoading"></Loading>
    <invoice-table :data="[...records]" v-else />
    <div class="text-center mt-4">
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
import Invoice from "~/components/accounting/debit-limit-customers/Invoice.vue";
import InvoiceTable from "~/components/accounting/debit-limit-customers/InvoiceTable.vue";
import InvoiceSummary from "~/components/accounting/debit-limit-customers/summary/Summary.vue";
import { mapState, mapMutations } from "vuex";

export default {
  components: { Invoice, InvoiceTable, InvoiceSummary },
  computed: {
    ...mapState({
      records: state => state.debitLimitCustomers.records,
      searchForm: state => state.debitLimitCustomers.searchForm,
      recordsWillEdit: state => state.debitLimitCustomers.recordsWillEdit,
      paginationConfig: state => state.debitLimitCustomers.paginationConfig,

      isLoading: state => state.isLoading
    })
  },
  async created() {
    // load first data on table
    await this.$store.dispatch("debitLimitCustomers/fetchRecords", {
      pageNumber: 1,
      pageSize: 10,
      ...this.searchForm
    });
  },
  methods: {
    ...mapMutations({
      setRecordsPerPage: "debitLimitCustomers/setRecordsPerPage"
    }),
    // handle input that user can change page number to any number
    async handleCurrentChange(val) {
      // await this.$store.dispatch("debitLimitCustomers/fetchRecords", {
      //   pageNumber: val
      // });

      if (this.recordsWillEdit.length > 0) {
        event.preventDefault();
        // alert avoid user loss changes
        // id confirm => save date and load new data
        this.$confirm(
          "you will lose changes , Do you want to save the changes ?",
          {
            confirmButtonText: this.$t("ok"),
            showCancelButton: true,
            type: "warning",
            center: true,
            customClass: "confirmBox"
          }
        )
          .then(() => { // if ok => save edited data, then load table again
            // save
            this.$store
              .dispatch("debitLimitCustomers/update")
              .then(() => {
                this.$notify({
                  group: "actions",
                  type: "scuccess",
                  title: "Done"
                });
                // load
                this.$store.dispatch(
                  "debitLimitCustomers/fetchRecords",
                  {
                    pageSize: 10,
                    pageNumber: 1,
                    ...this.searchForm
                  }
                );
                this.setRecordsWillEdit({});
                this.setEdit(false);
              })
              .catch(e => {
                this.$notify({
                  group: "actions",
                  type: "error",
                  title: e.response.data.Message
                });
              });
          })
          .catch(() => {
            this.$store.dispatch("debitLimitCustomers/fetchRecords", {
              pageNumber: val,
              pageSize: 10,
              ...this.searchForm
            });
            this.setRecordsWillEdit({});
            this.setEdit(false);
          });
      } else {
        await this.$store.dispatch("debitLimitCustomers/fetchRecords", {
          pageNumber: val,
          pageSize: this.paginationConfig.pageSize,
          ...this.searchForm
        });
      }
    },
    
    // handle select that user can change number of records per page
    async handleSizeChange(val) {
      if (this.recordsWillEdit.length > 0) {
        event.preventDefault();
        // alert avoid user loss changes
        // id confirm => save date and load new data
        this.$confirm(
          "you will lose changes , Do you want to save the changes ?",
          {
            confirmButtonText: this.$t("ok"),
            showCancelButton: true,
            type: "warning",
            center: true,
            customClass: "confirmBox"
          }
        )
          .then(() => { // if ok => save edited data and load table again
            // save
            this.$store
              .dispatch("debitLimitCustomers/update")
              .then(() => {
                this.$notify({
                  group: "actions",
                  type: "scuccess",
                  title: "Done"
                });
                // load
                this.setRecordsPerPage(val);
                this.$store.dispatch(
                  "debitLimitCustomers/fetchRecords",
                  {
                    pageSize: 10,
                    pageNumber: 1,
                    ...this.searchForm
                  }
                );
                this.setRecordsWillEdit({});
                this.setEdit(false);
              })
              .catch(e => {
                this.$notify({
                  group: "actions",
                  type: "error",
                  title: e.response.data.Message
                });
              });
          })
          .catch(() => {
            this.$store.dispatch("debitLimitCustomers/fetchRecords", {
              pageNumber: 1,
              pageSize: 10,
              ...this.searchForm
            });
            this.setRecordsWillEdit({});
            this.setEdit(false);
          });
      } else {
        this.setRecordsPerPage(val);
        await this.$store.dispatch("debitLimitCustomers/fetchRecords", {
          pageNumber: 1,
          pageSize: this.paginationConfig.pageSize,
          ...this.searchForm
        });
      }
    }
  }
};
</script>
