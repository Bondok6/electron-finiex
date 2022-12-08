<template>
  <div class="mb-8">
    <invoice />
    <invoice-table />
    <invoice-summary />
    <pagination />
  </div>
</template>

<script>
import Invoice from '~/components/sales/report-monthly-profits/Invoice';
import InvoiceTable from '~/components/sales/report-monthly-profits/InvoiceTable';
import InvoiceSummary from '~/components/sales/report-monthly-profits/summary/Summary';

import Pagination from "~/components/static/pagination";

export default {
  name: 'Home',
  components: {
    Invoice, InvoiceTable, InvoiceSummary, Pagination
  },
}
</script>
