<template>
  <div class="mb-8 popup-page">
    <invoice />
    <invoice-table />
    <invoice-summary />

    <pagination />

  </div>
</template>

<script>
import Pagination from "~/components/static/pagination";
import Invoice from '~/components/inventory/export-weighted-items/Invoice';
import InvoiceTable from '~/components/inventory/export-weighted-items/InvoiceTable';
import InvoiceSummary from '~/components/inventory/export-weighted-items/summary/Summary';

export default {
  name: 'Home',
  components: {
    Invoice, InvoiceTable, InvoiceSummary, Pagination
  },



  data: function () {
    return {
      page: 3
    };
  }
}
</script>
