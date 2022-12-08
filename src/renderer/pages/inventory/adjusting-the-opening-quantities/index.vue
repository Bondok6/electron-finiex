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
import Invoice from '~/components/inventory/adjusting-the-opening-quantities/Invoice';
import InvoiceTable from '~/components/inventory/adjusting-the-opening-quantities/InvoiceTable';
import InvoiceSummary from '~/components/inventory/adjusting-the-opening-quantities/summary/Summary';

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
