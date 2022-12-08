<template>
  <div class="mb-8">
    <invoice />
    <invoice-table />
    <invoice-summary />
    <pagination />
  </div>
</template>

<script>
import Invoice from '~/components/sales/prices-of-sale-items/Invoice';
import InvoiceTable from '~/components/sales/prices-of-sale-items/InvoiceTable';
import InvoiceSummary from '~/components/sales/prices-of-sale-items/summary/Summary';
import Pagination from "~/components/static/pagination";

export default {
  name: 'Home',
  components: {
    Invoice, InvoiceTable, InvoiceSummary, Pagination
  },
}
</script>
