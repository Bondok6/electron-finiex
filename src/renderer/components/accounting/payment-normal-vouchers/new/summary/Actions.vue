<template>
  <div
    class="justify-center mt-2 action-buttons-nonGrown align-center align-baseline"
  >
    <NuxtLink :to="localePath('')">
      <el-button size="mini" class="mb-1 btn-violet" @click="create()">{{
        $t("save-f5")
      }}</el-button>
    </NuxtLink>
    <NuxtLink :to="localePath('/accounting/payment-normal-vouchers')">
      <el-button size="mini" class="mb-1 btn-violet">{{
        $t("back-f6")
      }}</el-button>
    </NuxtLink>
    <el-button size="mini" class="mb-1 btn-grey">{{
      $t("print-pdf")
    }}</el-button>
  </div>
</template>

///accounting/payment-normal-vouchers

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState({
      RecordDetails: state => state.Accounting.paymentCompoundVouchers.RecordDetails,
    })
  },
  methods: {
    create() {
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
      if(this.RecordDetails.voucherDetailsList[0].voucherAmount == 0) {
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
          .dispatch("Accounting/paymentCompoundVouchers/create")
          .then(() => {
            this.$notify({
              title: "Success",
              message: "payment Normal Vouchers Entry Created",
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
    }
  }
};
</script>
