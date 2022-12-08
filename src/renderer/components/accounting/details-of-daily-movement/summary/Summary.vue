<template>
  <div class="container ma-4 mx-8 py-2 mt-0 invoice-summary">
    <div style="display: flex; justify-content: flex-end">
      <!-- <span class="mx-2">
        <span class="mb-1 d-inline-block">
          {{ $t("sum") }}
        </span>
        <span class="input-style d-inline-block"> 10000 </span>
      </span> -->
      <el-input
        class="notes-summary mx-2"
        type="textarea"
        :rows="7"
        :placeholder="$t('statement')"
        style="width: auto !important"
      >
      </el-input>
    </div>
    <div
      class="
        justify-center
        mt-2
        action-buttons-nonGrown
        align-center align-baseline
      "
    >
      <el-button size="mini" class="mb-1 btn-violet-faded" @click="displayRecord()">{{
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
      let filter =this.$store.state.Accounting.detailsOfDailyMovement.RecordDetails;
      let movementTypeName = null;
      if(filter.mvTypeID){
        let movementTypesList = this.$store.state.lists.movementTypesList
        console.log( movementTypesList ,filter.mvTypeID )
        let movementType = movementTypesList.find(movementType => movementType.mddCode === filter.mvTypeID)
        console.log(movementType)
        movementTypeName = movementType.mddname
      }
      return {
        reportPath: reportsPaths["details-of-daily-movement"],
        headerPath: reportsPaths["headerCompany"],
        dataSet: `uri=${this.$config.axios.baseURL}general/data-default/movements-types?pageSize=${this.$store.state.Accounting.detailsOfDailyMovement.paginationConfig.pageSize};jpath=$;Header$Authorization=bearer${" "+localStorage.getItem("accessToken")}`,
        connString:this.data!= null ? "jsondata=" + JSON.stringify(this.data.data):JSON.stringify(this.$store.state.Accounting.detailsOfDailyMovement.records),
        movementTypeName:movementTypeName,
      }
    }
  },
  methods: {
    async displayRecord() {
      let response = this.$store
        .dispatch("Accounting/detailsOfDailyMovement/fetchRecords")
        .catch(err => {
          this.$message.error(err.message);
        });
        let data = await response;
        this.data = data;
    }
  }
};
</script>
