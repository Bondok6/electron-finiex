<template>
  <div class="background-form mb-8">
    <invoice />
    <invoice-summary />
  </div>
</template>
<script>
import { mapMutations } from "vuex";
import Invoice from "~/components/accounting/payment-normal-vouchers/new/Invoice";
import InvoiceSummary from "~/components/accounting/payment-normal-vouchers/new/summary/Summary";
export default {
  components: { Invoice, InvoiceSummary },
  async created() {
    await Promise.all([
      this.$store.dispatch("Accounting/accountingDailyJournal/fetchSubAccountsList"),
      this.$store.dispatch("lists/getCostCentersList"),
      this.$store.dispatch("lists/getVoucherPaymentTypes"),
      this.$store.dispatch("lists/getSalesMenList"),
      this.$store.dispatch("lists/getBanksList"),

      this.$store.dispatch("getTaxInfo"),
      this.$store.dispatch("lists/getBanksAndFundsList")
    ]);
  },
  methods: {
    ...mapMutations({
      setRecordDetails: "Accounting/paymentCompoundVouchers/setRecordDetails"
    })
  },
  destroyed() {
    this.setRecordDetails({});
  }
};
</script>
