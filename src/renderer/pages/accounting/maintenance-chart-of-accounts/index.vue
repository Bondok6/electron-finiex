<template>
  <div class="mb-8 background-form">
    <Loading v-if="isLoading"></Loading>
    <invoice-table :data="[...records]" v-else />
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
    <invoice-summary />
  </div>
</template>
<script>
import InvoiceTable from "~/components/accounting/maintenance-chart-of-accounts/InvoiceTable.vue";
import InvoiceSummary from "~/components/accounting/maintenance-chart-of-accounts/summary/Summary.vue";
import { mapState } from "vuex";
export default {
  components: { InvoiceTable, InvoiceSummary },
  async created() {
    await Promise.all([
      this.$store.dispatch(
        "Accounting/maintenanceChartOfAccounts/fetchRecords",
        {
          pageNumber: 1
        }
      )
    ]).catch(err => {
      this.$message.error(err.message);
    });
  },
  computed: {
    ...mapState({
      records: state => state.Accounting.maintenanceChartOfAccounts.records,
      paginationConfig: state =>
        state.Accounting.maintenanceChartOfAccounts.paginationConfig,
      isLoading: state => state.isLoading
    })
  },
  methods: {
    async handleCurrentChange(val) {
      await this.$store.dispatch(
        "Accounting/maintenanceChartOfAccounts/fetchRecords",
        {
          pageNumber: val
        }
      );
    },
    // handle select that user can change number of records per page
    async handleSizeChange(val) {
      await this.$store.dispatch(
        "Accounting/maintenanceChartOfAccounts/fetchRecords",
        {
          pageNumber: 1,
          pageSize: val
        }
      );
    }
  }
};
</script>
