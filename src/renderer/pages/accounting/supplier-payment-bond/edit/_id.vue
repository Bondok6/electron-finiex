<template>
  <div class="mb-8">
    <invoice />
    <invoice-table />
    <invoice-summary />

    <!-- <pagination /> -->
  </div>
</template>

<script>
import Pagination from "~/components/static/pagination";
import Invoice from "~/components/accounting/supplier-payment-bond/edit/Invoice";
import InvoiceTable from "~/components/accounting/supplier-payment-bond/edit/InvoiceTable";
import InvoiceSummary from "~/components/accounting/supplier-payment-bond/edit/summary/Summary";

export default {
  name: "Home",
  components: {
    Invoice,
    InvoiceTable,
    InvoiceSummary,
    Pagination
  },

  async created() {
    // get lists which on invoice and invoiceTable and taxInformation
    await Promise.all([
      this.$store.dispatch("lists/getBanksAndFundsList"),
      this.$store.dispatch("lists/getCostCentersList"),
      this.$store.dispatch("lists/getVoucherPaymentTypes"),
      this.$store.dispatch("lists/getBanksList"),
      this.$store.dispatch(
        "Accounting/supplierPaymentBond/fetchSingleRecord",
        this.$route.params.id
      )
    ]);
  },
  destroyed() {
    this.$store.commit("Accounting/supplierPaymentBond/setRecordDetails", {});
  }
};
</script>
