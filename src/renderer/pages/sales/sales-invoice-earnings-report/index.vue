<template>
  <div class="mb-8">
    <invoice />
    <invoice-table />
    <invoice-summary />
    <pagination />
  </div>
</template>

<script>
import Invoice from '~/components/sales/sales-invoice-earnings-report/Invoice';
import InvoiceTable from '~/components/sales/sales-invoice-earnings-report/InvoiceTable';
import InvoiceSummary from '~/components/sales/sales-invoice-earnings-report/summary/Summary';

import Pagination from "~/components/static/pagination";

export default {
  name: 'Home',
  components: {
    Invoice, InvoiceTable, InvoiceSummary, Pagination
  },
}
</script>
