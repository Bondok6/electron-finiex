<template>
  <div class="mb-8">
    <invoice />
    <invoice-table />
    <invoice-summary />
    <pagination />
  </div>
</template>

<script>
import Invoice from '~/components/sales/edit-cost-price-in-sales/Invoice';
import InvoiceTable from '~/components/sales/edit-cost-price-in-sales/InvoiceTable';
import InvoiceSummary from '~/components/sales/edit-cost-price-in-sales/summary/Summary';

import Pagination from "~/components/static/pagination";

export default {
  name: 'Home',
  components: {
    Invoice, InvoiceTable, InvoiceSummary, Pagination
  },
}
</script>
