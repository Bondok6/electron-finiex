<template>
  <div class="text-center container ma-4 mx-8 py-2 mt-0 invoice-summary">
    <div class="text-center mt-2 action-buttons-nonGrown justify-center">
      <el-button
        size="mini"
        class="mb-1 px-3 btn-primary"
        @click="displayRecord"
        >{{ $t("display") }}</el-button
      >
      <NuxtLink to="../../report-management">
        <el-button
        size="mini"
        class="btn-grey"
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
    reportData(){
      let filter =this.$store.state.Accounting.vatReturnFiling.RecordDetails;
      let branchName = null;
      if(filter.brID){
        let branchesList = this.$store.state.lists.branchesList;
        let branch = branchesList.find((item) => {
          return item.id === filter.brID
        })
        branchName = branch.name
      }
      return {
        reportPath: reportsPaths["vat-return-filing"],
        headerPath: reportsPaths["headerCompany"],
        dataSet: `uri=${this.$config.axios.baseURL}accounting/reports/vat-return-filing;jpath=$;Header$Authorization=bearer${" "+localStorage.getItem("accessToken")}`,
        connString:this.data!= null ? "jsondata=" + JSON.stringify(this.data.data):JSON.stringify(this.$store.state.Accounting.vatReturnFiling.records),
        branchName :branchName 
      };
    },
  },
  methods: {
    async displayRecord() {
      let response = this.$store
        .dispatch("Accounting/vatReturnFiling/fetchRecords")
        .catch(err => {
          this.$message.error(err.message);
        });
        let data = await response;
        this.data = data;
    }
  }
};
</script>
