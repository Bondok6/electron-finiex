<template>
  <div class="mb-8">
    <invoice />
    <invoice-table />
    <invoice-summary />
  </div>
</template>
<script>
import { mapMutations } from "vuex";
import Invoice from "~/components/accounting/payment-compound-vouchers/new/Invoice";
import InvoiceTable from "~/components/accounting/payment-compound-vouchers/new/InvoiceTable";
import InvoiceSummary from "~/components/accounting/payment-compound-vouchers/new/summary/Summary";
export default {
  components: { Invoice, InvoiceTable, InvoiceSummary },
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
