<template>
  <div class="mb-8">
    <invoice />
    <invoice-table />
    <invoice-summary />
  </div>
</template>
<script>
import Invoice from "~/components/sales/delivery-sales-invoice-order/edit/deliverySalesInvoiceEdit"
import InvoiceTable from "~/components/sales/delivery-sales-invoice-order/edit/deliverySalesInvoiceTableEdit"
import InvoiceSummary from "~/components/sales/delivery-sales-invoice-order/edit/summary/Summary"

export default {
  name: 'edit',

  components: {
    Invoice, InvoiceTable, InvoiceSummary,
  },


}
</script>
