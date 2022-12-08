<template>
  <div class="mb-8">
    <invoice />
    <invoice-table />
    <invoice-summary />   
  </div>
</template>

<script>
import Invoice from "~/components/sales/delivery-sales-invoice-order/new/Invoice.vue"
import InvoiceTable from '~/components/sales/delivery-sales-invoice-order/new/InvoiceTable';
import InvoiceSummary from "~/components/sales/delivery-sales-invoice-order/new/summary/Summary"


export default {
  name: 'edit',

  

  components: {
    Invoice, InvoiceTable, InvoiceSummary,
  },


}
</script>
