<template>
  <div class="mb-8">
    <invoice />
    <invoice-table />
    <invoice-summary />
  </div>
</template>
<script>
import Invoice from "~/components/accounting/the-opening-balance/opening-entry/Invoice.vue";
import InvoiceTable from "~/components/accounting/the-opening-balance/opening-entry/InvoiceTable.vue";
import InvoiceSummary from "~/components/accounting/the-opening-balance/opening-entry/summary/Summary.vue";
export default {
  components : {Invoice, InvoiceTable, InvoiceSummary}
}
</script>
