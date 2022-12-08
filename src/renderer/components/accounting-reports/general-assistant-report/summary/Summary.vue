<template>
  <div class="invoice-summary-top">
    <div>
      <el-button size="mini" class="btn-primary" @click="displayRecord">{{
        $t("display")
      }}</el-button>
      <el-dropdown
        class="mx-3"
        split-button
        type="primary"
        style="direction: ltr"
      >
        خيارات الطباعه
        <el-dropdown-menu slot="dropdown">
          <!-- <NuxtLink to="../../report-management"> -->
            <el-dropdown-item @click="$refs.reportInstance.openReport(reportData);">A4</el-dropdown-item>
          <!-- </NuxtLink> -->
          <NuxtLink to="../../report-management">
            <el-dropdown-item @click="$refs.reportInstance.openReport(reportDataChart);">CHART</el-dropdown-item>
          </NuxtLink>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <!-- <el-dialog fullscreen append-to-body :visible="outerVisible">
      <div slot="footer" class="dialog-footer">
        <div
          v-if="diagramType === 'chart'"
          id="chart-host"
          style="direction: ltr"
        ></div>
        <div
          v-if="diagramType === 'A4'"
          id="viewer-host"
          style="direction: ltr"
        ></div>
        <el-button class="my-3" @click="outerVisible = false">{{
          $t("cancel")
        }}</el-button>
      </div>
    </el-dialog> -->
    <report ref="reportInstance"></report>
  </div>
</template>

<script>
import reportsPaths from "~/paths.json";
import report from "~/components/report-managment/report-managment";
export default {
  methods: {
    async displayRecord() {
      let response = this.$store.dispatch(
        "Accounting/Reports/generalAssistantReport/fetchRecords"
      );
      let data = await response;
      this.data = data;
    },
  },
  components: {
    report,
  },
  mounted() {},
  name: "summary-section",
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
    reportDataChart(){
      console.log(this.data)
      return {
        reportPath: reportsPaths["chart"],
        headerPath: reportsPaths["headerCompany"],
        dataSet: `uri=${this.$config.axios.baseURL}accounting/reports/acc-ledger;jpath=$;Header$Authorization=bearer${" "+localStorage.getItem("accessToken")};Header$Accept-Language=ar-SA`,
        connString:this.data!= null ? "jsondata=" + JSON.stringify(this.data.data):JSON.stringify(this.$store.state.Accounting.Reports.generalAssistantReport.records),
      }
    },
    reportData(){
      console.log(this.data)
      return {
        reportPath: reportsPaths["General-assistant-report"],
        headerPath: reportsPaths["headerCompany"],
        dataSet: `uri=${this.$config.axios.baseURL}accounting/reports/acc-ledger;jpath=$;Header$Authorization=bearer${" "+localStorage.getItem("accessToken")};Header$Accept-Language=ar-SA`,
        connString:this.data!= null ? "jsondata=" + JSON.stringify(this.data.data):JSON.stringify(this.$store.state.Accounting.Reports.generalAssistantReport.records),
      }
    }
  },
};
</script>
