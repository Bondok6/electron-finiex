<template>
  <div class="mb-8 popup-page">
    <invoice-table />
    <invoice-summary />

    <pagination />

  </div>
</template>

<script>
import Pagination from "~/components/static/pagination";
import InvoiceTable from '~/components/inventory/maintenance-of-stock-quantity/InvoiceTable';
import InvoiceSummary from '~/components/inventory/maintenance-of-stock-quantity/summary/Summary';

export default {
  name: 'Home',
  components: {
    InvoiceTable, InvoiceSummary, Pagination
  },



  data: function () {
    return {
      page: 3
    };
  }
}
</script>
