<template>
  <div class="text-center mt-2 action-buttons-nonGrown">
    <el-button size="mini" class="mb-1 btn-violet" @click="create()">{{
      $t("save-f5")
    }}</el-button>

    <NuxtLink :to="localePath('/accounting/discount-vouchers')">
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
      RecordDetails: state => state.Accounting.discountVouchers.RecordDetails,
    })
  },
  methods: {
    create() {
      let valid = true
      let messegeList = []
      console.log(this.RecordDetails)
      if(this.RecordDetails.toAccId == "") {
        messegeList = [...messegeList, this.$t("client-account-or-supplier") ]
        valid = false
      }
      if(this.RecordDetails.voucherAmount == 0) {
        messegeList = [...messegeList, this.$t("amount-of") ]
        valid = false
      }
      if(valid) {
        this.$store.dispatch("Accounting/discountVouchers/create").then(() => {
          this.$notify({
            title: "Success",
            message: " discount Vouchers Created",
            type: "success"
          });
          this.$router.push("/accounting/discount-vouchers");
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
