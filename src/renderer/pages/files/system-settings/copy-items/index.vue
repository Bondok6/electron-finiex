<template>
  <div class="mb-8">
    <invoice />
    <invoice-table />
    <invoice-table-two />
    <invoice-summary />
  </div>
</template>
<script>
import Invoice from "~/components/system-settings/copy-items/Invoice.vue";
import InvoiceTable from "~/components/system-settings/copy-items/InvoiceTable.vue";
import InvoiceTableTwo from "~/components/system-settings/copy-items/InvoiceTableTwo.vue";
import InvoiceSummary from "~/components/system-settings/copy-items/summary/Summary.vue";
export default {
  components: {
    Invoice,
    InvoiceTable,
    InvoiceTableTwo,
    InvoiceSummary,
  },
};
</script>
