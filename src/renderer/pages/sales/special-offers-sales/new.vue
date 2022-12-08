<template>
  <div class="mb-8">
    <invoice />
    <invoice-table />
    <invoice-summary />   
  </div>
</template>

<script>
import Invoice from "~/components/sales/special-offers-sales/new/Invoice.vue"
import InvoiceTable from '~/components/sales/special-offers-sales/new/InvoiceTable';
import InvoiceSummary from "~/components/sales/special-offers-sales/new/summary/Summary"


export default {
  name: 'edit',

  

  components: {
    Invoice, InvoiceTable, InvoiceSummary
  },
}
</script>
