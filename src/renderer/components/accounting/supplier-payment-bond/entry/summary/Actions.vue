<template>
  <div
    class="justify-center mt-2 action-buttons-nonGrown ml-6 align-center align-baseline"
  >
    <NuxtLink :to="localePath('/accounting/supplier-payment-bond/new')">
      <el-button size="mini" class="mb-1" type="primary">{{
        $t("new-f2")
      }}</el-button>
    </NuxtLink>
    <NuxtLink
      :to="
        localePath(
          '/reports-and-statements/public-statements/supplier-payment-bond'
        )
      "
    >
      <el-button size="mini" class="mb-1 btn-violet-faded">{{
        $t("search-f7")
      }}</el-button>
    </NuxtLink>
    <NuxtLink to="../../report-management">
      <el-button
      size="mini"
      class="btn-grey"
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
        reportPath: reportsPaths["report-voucher-supplier"],
        headerPath: reportsPaths["headerCompany"],
        dataSet: `uri=${this.$config.axios.baseURL}accounting/supplier-vouchers/list?pageSize=${this.$store.state.Accounting.supplierPaymentBond.paginationConfig.pageSize};jpath=$;Header$Authorization=bearer${" "+localStorage.getItem("accessToken")}`,
        connString: `endpoint=${this.$config.axios.baseURL}accounting/supplier-vouchers/list?pageSize=${this.$store.state.Accounting.supplierPaymentBond.paginationConfig.pageSize};Header$Authorization=bearer${" "+localStorage.getItem("accessToken")}`,
      }
    }
  },
};
</script>
