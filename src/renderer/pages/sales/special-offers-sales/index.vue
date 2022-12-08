<template>
  <div class="mb-8">
    <invoice />
    <invoice-table />
    <invoice-summary />
    <pagination />
  </div>
</template>

<script>
import Invoice from '~/components/sales/special-offers-sales/entry/Invoice';
import InvoiceTable from '~/components/sales/special-offers-sales/entry/InvoiceTable';
import InvoiceSummary from '~/components/sales/special-offers-sales/entry/summary/Summary';
import Pagination from "~/components/static/pagination";

export default {
  name: 'Home',
  components: {
    Invoice, InvoiceTable, InvoiceSummary, Pagination
  },
}
</script>
