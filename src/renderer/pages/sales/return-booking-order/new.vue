<template>
  <div class="mb-8">
    <invoice />
    <invoice-table />
    <invoice-summary />   
  </div>
</template>

<script>
import Invoice from "~/components/sales/return-booking-order/new/Invoice.vue"
import InvoiceTable from '~/components/sales/return-booking-order/new/InvoiceTable';
import InvoiceSummary from "~/components/sales/return-booking-order/new/summary/Summary"


export default {
  name: 'Home',
  components: {
    Invoice, InvoiceTable, InvoiceSummary
  },
}
</script>
