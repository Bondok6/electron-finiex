<template>
  <div class="mb-8 background-form">
    <invoice />
    <invoice-summary />
  </div>
</template>
<script>
import { mapMutations } from "vuex";
import Invoice from "~/components/accounting/receipt-normal-vouchers/new/Invoice";
import InvoiceSummary from "~/components/accounting/receipt-normal-vouchers/new/summary/Summary";
export default {
  components: { Invoice, InvoiceSummary },

  async created() {
    // get lists which on invoice and invoiceTable and taxInformation
    await Promise.all([
      this.$store.dispatch("Accounting/accountingDailyJournal/fetchSubAccountsList"),
      this.$store.dispatch("lists/getCostCentersList"),
      this.$store.dispatch("lists/getVoucherPaymentTypes"),
      this.$store.dispatch("lists/getSalesMenList"),
      this.$store.dispatch("lists/getBanksList"),
      this.$store.dispatch("lists/getBanksAndFundsList"),
      this.$store.dispatch("getTaxInfo")
    ]);
  },
  methods: {
    ...mapMutations({
      setRecordDetails: "Accounting/receiptCompoundVouchers/setRecordDetails"
    })
  },
  destroyed() {
    this.setRecordDetails({});
  }
};
</script>
