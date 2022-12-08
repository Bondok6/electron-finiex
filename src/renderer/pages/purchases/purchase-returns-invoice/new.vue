<template>
  <div class="mb-8">
    <invoice />
    <invoice-table />
    <invoice-summary />
  </div>
</template>
<script>
import Invoice from "~/components/purchases/purchase-returns-invoice/new/InvoiceNew.vue";
import invoiceTable from "~/components/purchases/purchase-returns-invoice/new/InvoiceNewTable.vue";
import invoiceSummary from "~/components/purchases/purchase-returns-invoice/new/summary/Summary.vue";
export default {
  components: {
    Invoice,
    invoiceTable,
    invoiceSummary
  }
};
</script>
