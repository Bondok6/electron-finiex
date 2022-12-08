<template>
  <div class="mb-8">
    <invoice />
    <invoice-table />
    <invoice-summary />
    <pagination />
  </div>
</template>

<script>
import Invoice from '~/components/sales/delivery-sales-invoice-order/entry/deliverySalesInvoice';
import InvoiceTable from '~/components/sales/delivery-sales-invoice-order/entry/deliverySalesInvoiceTable';
import InvoiceSummary from '~/components/sales/delivery-sales-invoice-order/entry/summary/Summary';
import Pagination from "~/components/static/pagination";

export default {
  name: 'Home',
  components: {
    Invoice, InvoiceTable, InvoiceSummary, Pagination
  },
}
</script>
