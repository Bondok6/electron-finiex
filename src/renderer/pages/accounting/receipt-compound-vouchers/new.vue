<template>
  <div class="mb-8">
    <invoice />
    <invoice-table />
    <invoice-summary />
  </div>
</template>
<script>
import { mapMutations } from "vuex";
import Invoice from "~/components/accounting/receipt-compound-vouchers/new/Invoice";
import InvoiceTable from "~/components/accounting/receipt-compound-vouchers/new/InvoiceTable";
import InvoiceSummary from "~/components/accounting/receipt-compound-vouchers/new/summary/Summary";
export default {
  components: { Invoice, InvoiceTable, InvoiceSummary },
  async created() {
    // if it's copying receipt
    if(Object.keys(this.$route.params).length != 0) {
      console.log('copying');
      await this.$store.dispatch(
        "Accounting/receiptCompoundVouchers/fetchSingleRecord",
        this.$route.params.copying
      )
    }
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
  },
  watch: {
    $route: {
      async handler(val) {
        console.log(val);
        await this.$store.dispatch(
          "Accounting/receiptCompoundVouchers/fetchSingleRecord",
          val.params.copying
        )
      },
      deep: true
    }
  }
};
</script>
