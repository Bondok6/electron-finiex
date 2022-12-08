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
import Invoice from '~/components/public-reports/differences-stock-inventory/Invoice';
import InvoiceTable from '~/components/public-reports/differences-stock-inventory/InvoiceTable';
import InvoiceSummary from '~/components/public-reports/differences-stock-inventory/summary/Summary';

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
