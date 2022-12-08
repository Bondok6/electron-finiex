<template>
  <div
    class="justify-center mt-2 action-buttons-nonGrown align-center align-baseline"
  >
    <!-- <NuxtLink :to="localePath('/accounting/payment-compound-vouchers')"> -->
    <el-button size="mini" class="mb-1 btn-blue" @click="update()">{{
      $t("save-f5")
    }}</el-button>
    <NuxtLink :to="localePath('/accounting/payment-compound-vouchers')">
      <el-button size="mini" class="mb-1 btn-violet-faded mx-1">{{
        $t("search-f7")
      }}</el-button>
    </NuxtLink>
    <el-button size="mini" class="mb-1 btn-red" @click="deleteRecord()">{{
      $t("delete-f8")
    }}</el-button>
    <NuxtLink :to="localePath('/accounting/payment-compound-vouchers')">
      <el-button size="mini" class="mb-1 btn-violet">{{
        $t("back-f6")
      }}</el-button>
    </NuxtLink>
    <el-button size="mini" class="mb-1 btn-cyan">{{
      $t("attach-a-file")
    }}</el-button>
    <el-button size="mini" class="mb-1 btn-grey">{{ $t("archive") }}</el-button>
    <NuxtLink to="../../../report-management">
      <el-button
      size="mini"
      class="mb-1 btn-grey"
      @click="$refs.reportInstance.openReport(reportData);"
      >{{ $t("print-f4") }}</el-button>
    </NuxtLink>
    <report ref="reportInstance"></report>
    <el-button size="mini" class="mb-1 btn-blue">{{
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
        reportPath: reportsPaths["payment-compound-voucher"],
        headerPath: reportsPaths["headerCompany"],
        dataSet: `uri=${this.$config.axios.baseURL}accounting/payment-vouchers/${this.$route.params.id};jpath=$;Header$Authorization=bearer${" "+localStorage.getItem("accessToken")}`,
        connString: `endpoint=${this.$config.axios.baseURL}accounting/payment-vouchers/${this.$route.params.id};Header$Authorization=bearer${" "+localStorage.getItem("accessToken")}`,
      }
    }
  },
  methods: {
    update() {
      this.$store
        .dispatch("Accounting/paymentCompoundVouchers/update")
        .then(() => {
          this.$notify({
            title: "Success",
            message: "payment Compound Vouchers Entry Update",
            type: "success"
          });
          this.$router.push("/accounting/payment-compound-vouchers");
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
          return this.$store.dispatch(
            "Accounting/paymentCompoundVouchers/delete",
            {
              id: this.$route.params.id
            }
          );
        })
        .then(() => {
          this.$router.push("/accounting/payment-compound-vouchers");
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
  }
};
</script>
