<template>
  <el-form class="expenses-form" label-position="top">
    <el-form-item :label="$t('total-expenses')">
      <!-- <el-input disabled :placeholder="totalWithoutDiscount.toFixed(2)" class="pa-0"></el-input> -->
      <el-input disabled :placeholder="0" class="pa-0"></el-input>
    </el-form-item>
    <el-form-item :label="$t('total') + ' ' + code ">
      <el-input disabled :placeholder="netInvFc" class="pa-0"></el-input>
    </el-form-item>
  </el-form>
</template>
<script>
import { mapState, mapMutations } from "vuex";
  
export default {
  name: "expenses",

  computed: {
    ...mapState({
      secondCurrency: state => state.purchases.purchasesInvoice.secondCurrency,
      totalWithoutDiscount: state => state.purchases.purchasesInvoice.totalWithoutDiscount,
      netTotal: state => state.purchases.purchasesInvoice.netTotal,
    }),
    totalwithForeign() {
      let percent = 1;
      if(this.secondCurrency) percent = this.secondCurrency.transferRateGeneral;
      let res = (this.totalWithoutDiscount / percent).toFixed(2);
      return res;
    },
    code() {
      if(this.secondCurrency) return this.secondCurrency.currencyCode;
      return ""
    },
    netInvFc() {
      let netInvFc = 0;
      if(this.secondCurrency.transferRateGeneral) {
        netInvFc = this.netTotal / this.secondCurrency.transferRateGeneral
      }
      this.setNetInvFc(netInvFc);
      return netInvFc.toFixed(2);
    }
  },
  methods: {
    ...mapMutations({
      setNetInvFc: "purchases/purchasesInvoice/setNetInvFc",
    }),
  }
};
</script>

<style lang="scss" scoped>
.el-form-item__label {
  padding: 0 !important;
}
</style>