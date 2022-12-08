<template>
  <div class="mb-8">
    <invoice />
    <Loading v-if="isLoading"></Loading>
    <invoice-table v-else :data="records" />
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
import Invoice from "~/components/accounting/the-virtual-balance/Invoice.vue";
import InvoiceTable from "~/components/accounting/the-virtual-balance/InvoiceTable.vue";
import InvoiceSummary from "~/components/accounting/the-virtual-balance/summary/Summary.vue";
import { mapState } from "vuex";
export default {
  components: { Invoice, InvoiceTable, InvoiceSummary },
  async created() {
    await Promise.all([
      this.$store.dispatch("Accounting/virtualBalance/fetchRecords", {
        pageNumber: 1
      }),
      this.$store.dispatch("lists/getAccountTypes"),
      this.$store.dispatch(
        "Accounting/accountingDailyJournal/fetchSubAccountsList"
      ),
      this.$store.dispatch("lists/getAccountNatures"),
      this.$store.dispatch("lists/getMaxLevel"),
      this.$store.dispatch("lists/getBranchesList")
    ]).catch(err => {
      this.$message.error(err.message);
    });
  },
  computed: {
    ...mapState({
      isLoading: state => state.isLoading,
      paginationConfig: state =>
        state.Accounting.virtualBalance.paginationConfig,
      records: state => state.Accounting.virtualBalance.records
    })
  },
  methods: {
    async handleCurrentChange(val) {
      await this.$store.dispatch("Accounting/virtualBalance/fetchRecords", {
        pageNumber: val
      });
    },
    // handle select that user can change number of records per page
    async handleSizeChange(val) {
      await this.$store.dispatch("Accounting/virtualBalance/fetchRecords", {
        pageNumber: 1,
        pageSize: val
      });
    }
  }
};
</script>
