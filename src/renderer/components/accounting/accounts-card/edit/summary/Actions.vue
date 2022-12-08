<template>
  <div
    class="
      justify-center
      mt-2
      action-buttons-nonGrown
      align-center align-baseline
    "
  >
      <el-button size="mini" class="mb-1 btn-blue" @click="update">{{
        $t("save-f5")
      }}</el-button>
    <el-button size="mini" class="mb-1 btn-red" @click="deleteRecord">{{
      $t("delete-f8")
    }}</el-button>

    <NuxtLink :to="localePath('/accounting/accounts-card')">
      <el-button size="mini" class="mb-1 btn-violet">{{
        $t("back-f6")
      }}</el-button>
    </NuxtLink>
    <NuxtLink to="../../../report-management">
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
        reportPath: reportsPaths["accounts-card-edit"],
        headerPath: reportsPaths["headerCompany"],
        dataSet: `uri=${this.$config.axios.baseURL}accounting/account-card/${this.$route.params.id};jpath=$;Header$Authorization=bearer${" "+localStorage.getItem("accessToken")}`,
        connString: `endpoint=${this.$config.axios.baseURL}accounting/account-card/${this.$route.params.id};Header$Authorization=bearer${" "+localStorage.getItem("accessToken")}`,
      }
    }
  },
  methods: {
    update() {
      this.$store.dispatch("Accounting/accountingCard/updateAccount").then(()=>{
        this.$notify({
          title: "Success",
          message: "edit successfully",
          type: "success"
        })
        this.$router.push("/accounting/accounts-card");
      }).catch(({response}) => {
          this.$notify({
            title: "Error",
            message: response.data.Message,
            type: "error"
          })
        });
    },
      deleteRecord() {
      this.$confirm(this.$t("message-when-delete-record"), "Warning", {
        confirmButtonText: this.$t("delete"),
        cancelButtonText: this.$t("cancel"),
        type: "warning",
        center: true,
        customClass: "confirmBox"
      })
        .then(() => {
          return this.$store.dispatch("Accounting/accountingCard/delete");
        })
        .then(() => {
          this.$message({
            type: "success",
            message: "Delete completed"
          });
        this.$router.push("/accounting/accounts-card");
      
        })
        .catch(er => {
          this.$message({
            type: "info",
            message: er.response.data.Message
          });
        });
    }
  }
};
</script>
