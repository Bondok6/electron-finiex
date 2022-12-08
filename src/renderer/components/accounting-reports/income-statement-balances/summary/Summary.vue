<template>
  <div class="invoice-summary-top">
    <el-button
      size="mini"
      class="mb-1 btn-primary px-3"
      @click="displayRecord"
      >{{ $t("display") }}</el-button
    >
    <NuxtLink to="../../report-management">
      <el-button
        size="mini"
        class="btn-grey"
        @click="$refs.reportInstance.openReport(reportData)"
        >{{ $t("print-f4") }}</el-button
      >
    </NuxtLink>

    <report ref="reportInstance"></report>
  </div>
</template>

<script>
import reportsPaths from "~/paths.json";
import report from "~/components/report-managment/report-managment";

export default {
  components: {
    report
  },
  data() {
    return {
      data: null,
      token: "bearer " + localStorage.getItem("accessToken"),
      form: {
        pageSize: null
      }
    };
  },
  computed: {
    reportData() {
      return {
        reportPath: reportsPaths["income-statement-balances"],
        headerPath: reportsPaths["headerCompany"],
        dataSet: `uri=${
          this.$config.axios.baseURL
        }accounting/reports/income-statement-balances;jpath=$;Header$Authorization=bearer${" " +
          localStorage.getItem("accessToken")}`,
        connString:
          this.data != null
            ? "jsondata=" + JSON.stringify(this.data.data)
            : JSON.stringify(
                this.$store.state.Accounting.Reports.incomeStatementBalances
                  .records
              )
      };
    }
  },
  methods: {
    async displayRecord() {
      let response = this.$store.dispatch(
        "Accounting/Reports/incomeStatementBalances/fetchRecords"
      );
      let data = await response;
      this.data = data;
    }
  },
  mounted() {},
  name: "summary-section"
};
</script>
