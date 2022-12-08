<template>
  <div class="mt-2 action-buttons-nonGrown justify-center align-baseline">
    <el-button size="mini" class="mb-1" type="info" @click="update()">{{
      $t("save-f5")
    }}</el-button>
    <el-button size="mini" class="mb-1 btn-red" @click="deleteRecord()">{{
      $t("delete-f8")
    }}</el-button>
    <NuxtLink :to="localePath('/accounting/client-payment-bond')">
      <el-button size="mini" class="mb-1 btn-violet">{{
        $t("back-f6")
      }}</el-button>
    </NuxtLink>
    <NuxtLink
      :to="
        localePath(
          '/reports-and-statements/public-statements/client-payment-bond'
        )
      "
    >
      <el-button size="mini" class="mb-1 btn-violet-faded">{{
        $t("search-f7")
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
    <el-button size="mini" class="mb-1 btn-green-lighter">{{
      $t("archive-f11")
    }}</el-button>
    <el-button size="mini" class="mb-1 btn-grey">{{
      $t("attach-file")
    }}</el-button>
    <el-button size="mini" class="mb-1 btn-cyan">{{
      $t("deferred-bond")
    }}</el-button>
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
        reportPath: reportsPaths["customer-voucher"],
        headerPath: reportsPaths["headerCompany"],
        dataSet: `uri=${this.$config.axios.baseURL}accounting/customer-vouchers/${this.$route.params.id};jpath=$;Header$Authorization=bearer${" "+localStorage.getItem("accessToken")}`,
        connString: `endpoint=${this.$config.axios.baseURL}accounting/customer-vouchers/${this.$route.params.id};Header$Authorization=bearer${" " + localStorage.getItem("accessToken")}`,
      };
    }
  },
  methods: {
    deleteRecord() {
      this.$confirm(this.$t("message-when-delete-record"), "Warning", {
        confirmButtonText: this.$t("delete"),
        cancelButtonText: this.$t("cancel"),
        type: "warning",
        center: true,
        customClass: "confirmBox"
      })
        .then(() => {
          return this.$store.dispatch("Accounting/clientPaymentBond/delete", {
            id: this.$route.params.id
          });
        })
        .then(() => {
          this.$router.push("/accounting/client-payment-bond");
          this.$message({
            type: "success",
            message: "Delete completed"
          });
        })
        .catch(er => {
          this.$message({
            type: "info",
            message: "Delete canceled"
          });
        });
    },
    update() {
      this.$store
        .dispatch("Accounting/clientPaymentBond/update")
        .then(() => {
          this.$notify({
            title: "Success",
            message: "payment client payment bond Update",
            type: "success"
          });
          this.$router.push("/accounting/client-payment-bond");
        })
        .catch(er => {
          this.$notify({
            title: "Error",
            message: "Error payment client payment bond NOT Update",
            type: "error"
          });
        });
    },
  },
}
</script>
