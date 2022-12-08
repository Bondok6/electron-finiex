<template>
  <div class="mb-8">
    <invoice />
    <invoice-table />
    <invoice-summary />
    <pagination />
  </div>
</template>

<script>
import Invoice from '~/components/sales/inventory-cash-in-fund/Invoice';
import InvoiceTable from '~/components/sales/inventory-cash-in-fund/InvoiceTable';
import InvoiceSummary from '~/components/sales/inventory-cash-in-fund/summary/Summary';

import Pagination from "~/components/static/pagination";

export default {
  name: 'Home',
  components: {
    Invoice, InvoiceTable, InvoiceSummary, Pagination
  },
}
</script>
