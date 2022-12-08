<template>
  <div
    class="
      justify-center
      mt-2
      action-buttons-nonGrown
      align-center align-baseline
    "
  >
    <el-button size="mini" class="mb-1 btn-blue" @click="create()">{{
      $t("save-f5")
    }}</el-button>
    <NuxtLink :to="localePath('/accounting/payment-compound-vouchers')">
      <el-button size="mini" class="mb-1 btn-violet">{{
        $t("back-f6")
      }}</el-button>
    </NuxtLink>
    <el-button size="mini" class="mb-1 btn-grey">{{
      $t("print-pdf")
    }}</el-button>
  </div>
</template>

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
      console.log({...this.RecordDetails});
      if(this.RecordDetails.fromAccId == "") {
        messegeList = [...messegeList, this.$t("box-bank") ]
        valid = false
      }
      if(this.RecordDetails.salesManCode != null) {
        if(this.RecordDetails.refDocDate == null) {
          messegeList = [...messegeList, this.$t("date-of-the-delegate-is-document") ]
          valid = false
        }
        if(this.RecordDetails.refDocNo == "") {
          messegeList = [...messegeList, this.$t("number-of-the-delegate-is-document") ]
          valid = false
        }
      }

      if(this.RecordDetails.voucherDetailsList[0].toAccId == "") {
        messegeList = [...messegeList, this.$t("account-name") ]
        valid = false
      }
      if(this.RecordDetails.voucherDetailsList[0].voucherAmount == "0" || this.RecordDetails.voucherDetailsList[0].voucherAmount == "") {
        messegeList = [...messegeList, this.$t("amount") ]
        valid = false
      }
      if(this.RecordDetails.voucherDetailsList[0].payTypeId != 0) {
        if(this.RecordDetails.voucherDetailsList[0].bankId == 0) {
          messegeList = [...messegeList, this.$t("bank") ]
          valid = false
        }
        if(this.RecordDetails.voucherDetailsList[0].checkDate == "") {
          messegeList = [...messegeList, this.$t("check-date") ]
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
              message: "payment Compound Vouchers Entry Created",
              type: "success"
            });
            this.$router.push("/accounting/payment-compound-vouchers");
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
