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
import Invoice from "~/components/accounting/supplier-payment-bond/new/Invoice";
import InvoiceTable from "~/components/accounting/supplier-payment-bond/new/InvoiceTable";
import InvoiceSummary from "~/components/accounting/supplier-payment-bond/new/summary/Summary";

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
      this.$store.dispatch("lists/getProviderSupplierList"),
      this.$store.dispatch("lists/getBanksAndFundsList"),
      this.$store.dispatch("lists/getCostCentersList"),
      this.$store.dispatch("lists/getVoucherPaymentTypes"),
      this.$store.dispatch("lists/getBanksList")
    ]);
  },

  destroyed() {
    this.$store.commit("Accounting/supplierPaymentBond/setRecordDetails", {});
  }
};
</script>
