<template>
  <div class="mb-8">
    <invoice />
    <invoice-table />
    <invoice-summary />
    <pagination />
  </div>
</template>

<script>
import Invoice from '~/components/sales/return-booking-order/entry/Invoice';
import InvoiceTable from '~/components/sales/return-booking-order/entry/InvoiceTable';
import InvoiceSummary from '~/components/sales/return-booking-order/entry/summary/Summary';
import Pagination from "~/components/static/pagination";

export default {
  name: 'Home',
  components: {
    Invoice, InvoiceTable, InvoiceSummary, Pagination
  },
}
</script>
