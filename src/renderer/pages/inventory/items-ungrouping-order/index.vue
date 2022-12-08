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
import Invoice from '~/components/inventory/items-ungrouping-order/entry/Invoice';
import InvoiceTable from '~/components/inventory/items-ungrouping-order/entry/InvoiceTable';
import InvoiceSummary from '~/components/inventory/items-ungrouping-order/entry/summary/Summary';

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
