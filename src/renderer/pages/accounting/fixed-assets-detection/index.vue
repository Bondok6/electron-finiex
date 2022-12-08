<template>
  <div class="mb-8">
    <invoice />
    <invoice-table />
    <invoice-summary />
    <pagination />
  </div>
</template>
<script>
import Pagination from "~/components/static/pagination";
import Invoice from "~/components/accounting/fixed-assets-detection/Invoice.vue";
import InvoiceTable from "~/components/accounting/fixed-assets-detection/InvoiceTable.vue";
import InvoiceSummary from "~/components/accounting/fixed-assets-detection/summary/Summary.vue";
export default {
  components: { Invoice,  InvoiceTable, InvoiceSummary, Pagination},
  data: function() {
    return {
      page: 3
    };
  }
};
</script>
