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
  name: "summary-section",
  components: {
    report
  },
  mounted() {},
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
    reportData(){
      let filter =this.$store.state.Accounting.Reports.referenceBalanceReportMovementBalance.RecordDetails;
      let branchName = null;
      let costCenterName= null;
      if(filter.costCenterID){
        let costCentersList = this.$store.state.lists.costCentersList
        let costCenters = costCentersList.find(costCenters=> costCenters.mdcode === filter.costCenterID)
        costCenterName= costCenters.mname
      }
      if(filter.branchID){
        let branchesList = this.$store.state.lists.branchesList;
        let branch = branchesList.find((item) => {
          return item.id === filter.branchID
        })
        branchName = branch.name
      }
      return {
        reportPath: reportsPaths["reference-balance-report-movement-balance"],
        headerPath: reportsPaths["headerCompany"],
        dataSet: `uri=${this.$config.axios.baseURL}general/data/cost-centers-list;jpath=$;Header$Authorization=bearer${" "+localStorage.getItem("accessToken")}`,
        connString:this.data!= null ? "jsondata=" + JSON.stringify(this.data.data):JSON.stringify(this.$store.state.Accounting.Reports.referenceBalanceReportMovementBalance.records),
        branchName: branchName,
        costCenterName:costCenterName,
      }
    }
  },
  methods: {
    async displayRecord() {
      let response = this.$store
        .dispatch(
          "Accounting/Reports/referenceBalanceReportMovementBalance/fetchRecords"
        )
        .catch(err => {
          this.$message.error(err.message);
        });
      let data = await response;
      this.data = data;
    }
  }
};
</script>
