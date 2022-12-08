<template>
  <div
    class="justify-center mt-2 action-buttons-nonGrown align-center align-baseline"
  >
    <el-button size="mini" class="mb-1 btn-violet" @click="update()">{{
      $t("save-f5")
    }}</el-button>

    <NuxtLink :to="localePath('/accounting/delegates-data')">
      <el-button size="mini" class="mb-1 btn-violet-faded">{{
        $t("search-f7")
      }}</el-button>
    </NuxtLink>
    <el-button size="mini" class="mb-1 btn-red" @click="deleteRecord()">{{
      $t("delete-f8")
    }}</el-button>
    <NuxtLink :to="localePath('/accounting/payment-normal-vouchers')">
      <el-button size="mini" class="mb-1 btn-violet">{{
        $t("back-f6")
      }}</el-button>
    </NuxtLink>
    <el-button size="mini" class="mb-1 btn-cyan">{{
      $t("attach-file")
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
    <el-button size="mini" class="mb-1 btn-violet">{{
      $t("deferred-bond")
    }}</el-button>
  </div>
</template>

<script>
import { mapState } from "vuex";
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
    ...mapState({
      RecordDetails: state => state.Accounting.paymentCompoundVouchers.RecordDetails,
    }),
    reportData(){
      return {
        reportPath: reportsPaths["payment-normal-voucher"],
        headerPath: reportsPaths["headerCompany"],
        dataSet: `uri=${this.$config.axios.baseURL}accounting/payment-vouchers/${this.$route.params.id};jpath=$;Header$Authorization=bearer${" "+localStorage.getItem("accessToken")}`,
        connString: `endpoint=${this.$config.axios.baseURL}accounting/payment-vouchers/${this.$route.params.id};Header$Authorization=bearer${" "+localStorage.getItem("accessToken")}`,
      }
    }
  },
  methods: {
    update() {
      let valid = true
      let messegeList = []
      console.log({...this.RecordDetails})
      if(this.RecordDetails.voucherCode == 0) {
        messegeList = [...messegeList, this.$t("bond-number") ]
        valid = false
      }
      if(this.RecordDetails.voucherDetailsList[0].toAccId == "") {
        messegeList = [...messegeList, this.$t("spends-for") ]
        valid = false
      }
      if(this.RecordDetails.voucherDetailsList[0].voucherAmount == "") {
        messegeList = [...messegeList, this.$t("amount-of") ]
        valid = false
      }
      if(this.RecordDetails.fromAccId == "") {
        messegeList = [...messegeList, this.$t("box-bank") ]
        valid = false
      }
      if(this.RecordDetails.voucherDetailsList[0].payTypeId != 0) {
        if(this.RecordDetails.voucherDetailsList[0].bankId == 0) {
          messegeList = [...messegeList, this.$t("bank") ]
          valid = false
        }
        if(this.RecordDetails.voucherDetailsList[0].payTypeId == 2 && this.RecordDetails.voucherDetailsList[0].checkNo == "") {
          messegeList = [...messegeList, this.$t("check-number") ]
          valid = false
        }
      }

      if(valid) {
        this.$store
          .dispatch("Accounting/paymentCompoundVouchers/update")
          .then(() => {
            this.$notify({
              title: "Success",
              message: "payment Normal Vouchers Entry Update",
              type: "success"
            });
            this.$router.push("/accounting/payment-normal-vouchers");
          });
      } else {
        this.$notify({
          title: "Error",
          dangerouslyUseHTMLString: true,
          message: `
            <p><strong>${this.$t("these-fields-are-required")}:</strong></p>
            <p>${messegeList.join(' - ')}</p>
          `,
          type: "error"
        });
      }
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
          this.$router.push("/accounting/payment-normal-vouchers");
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
