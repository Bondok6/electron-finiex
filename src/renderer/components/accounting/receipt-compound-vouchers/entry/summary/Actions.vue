<template>
  <div
    class="justify-center mt-2 action-buttons-nonGrown align-center align-baseline"
  >
    <NuxtLink :to="localePath('/accounting/receipt-compound-vouchers/new')">
      <el-button size="mini" class="mb-1" type="primary">{{
        $t("new-f2")
      }}</el-button>
    </NuxtLink>
    <NuxtLink :to="localePath('/reports-and-statements/public-statements/receipt-vouchers-statements-report-total')">
      <el-button size="mini" class="mb-1 btn-violet-faded mx-1">{{
        $t("search-f7")
      }}</el-button>
    </NuxtLink>
    <NuxtLink to="../../report-management">
    <el-button
      size="mini"
      class="mb-1 btn-grey"
      @click="$refs.reportInstance.openReport(reportData);"
      >{{ $t("print-f4") }}</el-button>
    </NuxtLink>
    <report ref="reportInstance"></report>
  </div>
</template>

<script>
  import reportsPaths from "~/paths.json";
import report from "~/components/report-managment/report-managment";
export default {
  components: {
    report,
  },
  data() {
    return {
      data: null,
      token: "bearer " + localStorage.getItem("accessToken"),
      form: {
        pageSize: null,
      },
    };
  },
  computed: {
    reportData(){
      return {
        reportPath: reportsPaths["report-voucher-receipt"],
        headerPath: reportsPaths["headerCompany"],
        dataSet: `uri=${this.$config.axios.baseURL}accounting/receipt-vouchers/list?PageSize=${this.$store.state.Accounting.receiptCompoundVouchers.paginationConfig.pageSize};jpath=$;Header$Authorization=bearer${" "+localStorage.getItem("accessToken")}`,
        connString: `endpoint=${this.$config.axios.baseURL}accounting/receipt-vouchers/list?PageSize=${this.$store.state.Accounting.receiptCompoundVouchers.paginationConfig.pageSize};Header$Authorization=bearer${" "+localStorage.getItem("accessToken")}`,
      }
    }
  },
};
</script>
