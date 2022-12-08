<template>
  <div class="mb-8">
    <invoice />
    <invoice-table />
    <invoice-summary />
  </div>
</template>

<script>
import Invoice from "~/components/inventory/invoice-inventory-first-term/edit/SingleInvoice";
import InvoiceTable from "~/components/inventory/invoice-inventory-first-term/edit/SingleInvoiceTable";
import InvoiceSummary from "~/components/inventory/invoice-inventory-first-term/edit/summary/Summary";

export default {
  name: "Home",
  components: {
    Invoice,
    InvoiceTable,
    InvoiceSummary
  },
  asyncData({ store, params, query }) {
    const obj = {
      invoiceId: query.invoiceId,
      invoiceCode: params.id
    };
    Promise.all([
      store.dispatch("General/getFinancialYear"),
      store.dispatch("inventory/invoiceInventoryFirstTerm/fetchItem", obj),
      store.dispatch("inventory/invoiceInventoryFirstTerm/fetchListItems")
    ]);
  }
};
</script>
