<template>
  <div class="mb-8">
    <invoice />
    <invoice-table />
    <invoice-summary />
    <pagination />
  </div>
</template>

<script>
import Invoice from '~/components/sales/movement-of-sales-items/Invoice';
import InvoiceTable from '~/components/sales/movement-of-sales-items/InvoiceTable';
import InvoiceSummary from '~/components/sales/movement-of-sales-items/summary/Summary';
import Pagination from "~/components/static/pagination";

export default {
  name: 'Home',
  components: {
    Invoice, InvoiceTable, InvoiceSummary, Pagination
  },
}
</script>
