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
  computed: {
    reportData() {
      return {
        reportPath: reportsPaths["balance-sheet-report-horizontal"],
        headerPath: reportsPaths["headerCompany"],
        dataSet: `uri=${
          this.$config.axios.baseURL
        }accounting/reports/balance-sheet-report-horizontal;jpath=$;Header$Authorization=bearer${" " +
          localStorage.getItem("accessToken")}`,
        connString:
          this.data != null
            ? "jsondata=" + JSON.stringify(this.data.data)
            : JSON.stringify(
                this.$store.state.Accounting.Reports
                  .balanceSheetReportHorizontal.records
              )
      };
    }
  },
  methods: {
    async displayRecord() {
      let response = this.$store
        .dispatch(
          "Accounting/Reports/balanceSheetReportHorizontal/fetchRecords"
        )
        .catch(err => {
          this.$message.error(err.message);
        });
      let data = await response;
      this.data = data;
    }
  },
  name: "summary-section",
  mounted() {},
  data() {
    return {
      data: null,
      token: "bearer " + localStorage.getItem("accessToken"),
      form: {
        pageSize: null
      }
    };
  }
};
</script>
