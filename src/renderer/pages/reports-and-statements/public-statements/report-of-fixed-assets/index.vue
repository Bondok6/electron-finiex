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
import Invoice from "~/components/public-statements/report-of-fixed-assets/Invoice.vue";
import InvoiceTable from "~/components/public-statements/report-of-fixed-assets/InvoiceTable.vue";
import InvoiceSummary from "~/components/public-statements/report-of-fixed-assets/summary/Summary.vue";
export default {
  components: { Invoice,  InvoiceTable, InvoiceSummary, Pagination},
  data: function() {
    return {
      page: 3
    };
  }
};
</script>
