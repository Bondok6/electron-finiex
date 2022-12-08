<template>
  <div class="mb-8">
    <invoice :total="advancedPaginationConfig.totalRecords" />
    <Loading v-if="isLoading"></Loading>
    <invoice-table :data="[...advancedRecords]" v-else />
    <invoice-summary />
    <div class="text-center">
      <el-pagination
        :background="true"
        :current-page="advancedPaginationConfig.pageNumber"
        layout="jumper, prev, pager, next, total ,sizes"
        :total="advancedPaginationConfig.totalRecords"
        :page-sizes="[10, 20, 30, 40]"
        @current-change="handleCurrentChange"
        @size-change="handleSizeChange"
        :page-size="advancedPaginationConfig.pageSize"
      >
      </el-pagination>
    </div>
  </div>
</template>
<script>
import Invoice from "~/components/accounting/search-journal-entry/Invoice.vue";
import InvoiceTable from "~/components/accounting/search-journal-entry/InvoiceTable.vue";
import InvoiceSummary from "~/components/accounting/search-journal-entry/summary/Summary";
import { mapState, mapMutations } from "vuex";
export default {
  components: { Invoice, InvoiceTable, InvoiceSummary },
  name: "Home",
  async created() {
    // load first data on table
    await this.$store.dispatch("Accounting/accountingDailyJournal/fetchAdvancedRecords", {
      pageNumber: 1
    });
  },
  computed: {
    ...mapState({
      advancedRecords: state => state.Accounting.accountingDailyJournal.advancedRecords,
      advancedPaginationConfig: state =>
        state.Accounting.accountingDailyJournal.advancedPaginationConfig,

      isLoading: state => state.isLoading
    })
  },
  methods: {
    async handleCurrentChange(val) {
      await this.$store.dispatch(
        "Accounting/accountingDailyJournal/fetchAdvancedRecords",
        {
          pageNumber: val
        }
      );
    },
    ...mapMutations({
      setRecordsPerPage: "Accounting/accountingDailyJournal/setAdvancedRecordsPerPage"
    }),
    // handle select that user can change number of records per page
    async handleSizeChange(val) {
      this.setRecordsPerPage(val);
      await this.$store.dispatch(
        "Accounting/accountingDailyJournal/fetchAdvancedRecords",
        {
          pageNumber: 1
        }
      );
    }
  }
};
</script>
