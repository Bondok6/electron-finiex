<template>
  <div class="text-center container ma-4  py-2 mt-0 invoice-summary">
    <div
      class="justify-center mt-2 action-buttons-nonGrown align-center align-baseline"
    >
      <el-button
        size="mini"
        class="mb-1"
        type="primary"
        @click="openDialog()"
        >{{ $t("new-f2") }}</el-button
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
  </div>
</template>
<script>
import reportsPaths from "~/paths.json";
import report from "~/components/report-managment/report-managment";
import Insert from "~/components/accounting/assets-group/new/Invoice";
import InvoiceSummary from "~/components/accounting/assets-group/new/summary/Summary";
import { mapMutations } from "vuex";
export default {
  name: "summary-section",
  components: {
    Insert,
    InvoiceSummary,
    report,
  },
  data: function() {
    return {
      dialogTableVisible: false,
      suggestCode: 0,
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
        reportPath: reportsPaths["assets-group-entry"],
        headerPath: reportsPaths["headerCompany"],
        dataSet: `uri=${this.$config.axios.baseURL}general/fixed-assets-groups/list?PageSize=${this.$store.state.Accounting.assetsGroup.paginationConfig.pageSize};jpath=$;Header$Authorization=bearer${" "+localStorage.getItem("accessToken")}`,
        connString: `endpoint=${this.$config.axios.baseURL}general/fixed-assets-groups/list?PageSize=${this.$store.state.Accounting.assetsGroup.paginationConfig.pageSize};Header$Authorization=bearer${" "+localStorage.getItem("accessToken")}`,
      }
    }
  },
  methods: {
    ...mapMutations({
      setRecordDetails: "Accounting/assetsGroup/setRecordDetails"
    }),
    openDialog() {
      this.dialogTableVisible = true;
      this.$store
        .dispatch("Accounting/assetsGroup/suggestCode")
        .then(response => {
          this.suggestCode = response.data.data;
        });
    },
    closeDialog() {
      this.dialogTableVisible = false;
      // clear recordDetails in vuex because We watch in invoice cmp to clear form when close dialog
      // to avoid duplicate data when create new record
      this.setRecordDetails({});
       
    }
  }
};
</script>
