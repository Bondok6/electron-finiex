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
import Invoice from '~/components/inventory/statistics-of-inventory-value/Invoice';
import InvoiceTable from '~/components/inventory/statistics-of-inventory-value/InvoiceTable';
import InvoiceSummary from '~/components/inventory/statistics-of-inventory-value/summary/Summary';

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
