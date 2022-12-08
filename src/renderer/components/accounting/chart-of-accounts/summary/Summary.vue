<template>
  <div class="container ma-4 mx-8 py-2 mt-0 invoice-summary">
     <el-input
      class="notes-summary"
      type="textarea"
      :rows="7"
      :placeholder="$t('statement')"
    >
    </el-input>
    <div
      class="
        justify-center
        mt-2
        action-buttons-nonGrown
        align-center align-baseline
      "
    >
      <el-button size="mini" class="mb-1 btn-violet-faded" @click="displayRecord">{{
        $t("display-f7")
      }}</el-button>
      <NuxtLink to="../../report-management">
        <el-button
        size="mini"
        class="mb-1 btn-grey"
        @click="$refs.reportInstance.openReport(reportData);"
        >{{ $t("print-f4") }}</el-button>
      </NuxtLink>
    <report ref="reportInstance"></report>
    </div>
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
      let filter =this.$store.state.Accounting.chartOfAccounts.RecordDetails;
      let branchName = null;
      if(filter.branchID){
        let branchesList = this.$store.state.lists.branchesList;
        let branch = branchesList.find((item) => {
          return item.id === filter.branchID
        })
        branchName = branch.name
      }
      return {
        reportPath: reportsPaths["chart-of-accounts"],
        headerPath: reportsPaths["headerCompany"],
        dataSet: `uri=${this.$config.axios.baseURL}accounting/reports/view-chart-accounts;jpath=$;Header$Authorization=bearer${" "+localStorage.getItem("accessToken")};Header$Accept-Language=ar-SA`,
        connString:this.data!= null ? "jsondata=" + JSON.stringify(this.data.data):JSON.stringify(this.$store.state.Accounting.chartOfAccounts.records),
        branchName: branchName,
      }
    }
  },
    methods:{
       async displayRecord() {
        let response = this.$store
        .dispatch("Accounting/chartOfAccounts/fetchRecords")
        .catch(err => {
          this.$message.error(err.message);
        });
        let data = await response;
        this.data = data;
    }
  }
};
</script>
