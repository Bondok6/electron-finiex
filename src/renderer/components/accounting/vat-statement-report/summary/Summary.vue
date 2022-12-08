<template>
  <div class="container ma-4 py-2 mt-0 invoice-summary">
    <el-row :gutter="20" class="px-2">
      <el-col :sm="24" :md="12" :lg="12">
        <div class="text-unbold d-flex flex-wrap">
          <span class="d-flex flex-wrap mt-2 align-baseline justify-center">
            <span class="mx-1">
              {{ $t("total-tax") }}
            </span>
            <span class="input-style mt-2">


              {{ $numberWithCommas(totalTax) }}
            </span>
          </span>
        </div>
        <br />
      </el-col>

      <el-col :sm="24" :md="12" :lg="12">
        <div class="mt-2 action-buttons-nonGrown align-baseline">
          <el-button
            size="mini"
            class="mb-1 btn-primary px-3"
            @click="displayRecord"
            >{{ $t("display") }}</el-button
          >
          <NuxtLink to="../../report-management">
            <el-button
            size="mini"
            class="mb-1 btn-grey"
            @click="$refs.reportInstance.openReport(reportData);"
            >{{ $t("print-f4") }}</el-button>
          </NuxtLink>
            <report ref="reportInstance"></report>
        </div>
      </el-col>
    </el-row>
  </div>
</template>


<script>
import { mapState } from "vuex";
import reportsPaths from "~/paths.json";
import report from "~/components/report-managment/report-managment";

export default {
  name: "summary-section",
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
    ...mapState({
      totalTax: state => state.Accounting.vatStatementReport.totalTax
    }),
    reportData(){
      return {
        reportPath: reportsPaths["vat-statement-report"],
        headerPath: reportsPaths["headerCompany"],
        dataSet: `uri=${this.$config.axios.baseURL}accounting/reports/vat-statement-report;jpath=$;Header$Authorization=bearer${" "+localStorage.getItem("accessToken")}`,
        connString:this.data!= null ? "jsondata=" + JSON.stringify(this.data.data):`endpoint=${this.$config.axios.baseURL}accounting/reports/vat-statement-report;jpath=$;Header$Authorization=bearer${" "+localStorage.getItem("accessToken")}`,
      };
    },
  },
  methods: {
    async displayRecord() {
      let response = this.$store
        .dispatch("Accounting/vatStatementReport/fetchRecords")
        .catch(err => {
          this.$message.error(err.message);
        });
        let data = await response;
        this.data = data;
    }
  },
  
};
</script>