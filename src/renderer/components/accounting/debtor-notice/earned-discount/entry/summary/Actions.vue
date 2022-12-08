<template>
  <div
    class="justify-center mt-2 action-buttons-nonGrown ml-6 align-center align-baseline"
  >
    <NuxtLink :to="localePath('/accounting/debtor-notice/earned-discount/new')">
      <el-button size="mini" class="mb-1" type="primary">{{
        $t("new-f2")
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
        reportPath: reportsPaths["earned-discount-entry"],
        headerPath: reportsPaths["headerCompany"],
        dataSet: `uri=${this.$config.axios.baseURL}accounting/debit-vouchers/list?pageSize=${this.$store.state.Accounting.debtorNotice.earnedDiscount.paginationConfig.pageSize};jpath=$;Header$Authorization=bearer${" "+localStorage.getItem("accessToken")}`,
        connString: `endpoint=${this.$config.axios.baseURL}accounting/debit-vouchers/lis?pageSize=${this.$store.state.Accounting.debtorNotice.earnedDiscount.paginationConfig.pageSize}t;Header$Authorization=bearer${" "+localStorage.getItem("accessToken")}`,
      }
    }
  },
  };
  </script>
