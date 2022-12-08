<template>
  <div class="mb-8">
    <invoice />
    <invoice-table />
    <invoice-summary />
  </div>
</template>

<script>
import Invoice from "~/components/inventory/invoice-inventory-first-term/new/NewRecordInvoice";
import InvoiceTable from "~/components/inventory/invoice-inventory-first-term/new/NewRecordInvoiceTable";
import InvoiceSummary from "~/components/inventory/invoice-inventory-first-term/new/summary/Summary";

export default {
  name: "Home",
  components: {
    Invoice,
    InvoiceTable,
    InvoiceSummary
  },

  asyncData({ store }) {
    Promise.all([
      store.dispatch("General/getFinancialYear"),
      store.dispatch("inventory/invoiceInventoryFirstTerm/fetchMaxId"),
      store.dispatch("inventory/invoiceInventoryFirstTerm/fetchListItems")
    ]);
  },

  data() {
    return {
      page: 3
    };
  }
};
</script>
