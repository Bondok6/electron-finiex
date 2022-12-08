<template>
  <div class="mb-8">
    <invoice />
    <invoice-table />
    <invoice-summary />
  </div>
</template>
<script>
import Invoice from "~/components/sales/special-offers-sales/edit/Invoice.vue"
import InvoiceTable from "~/components/sales/special-offers-sales/edit/InvoiceTable"
import InvoiceSummary from "~/components/sales/special-offers-sales/edit/summary/Summary"


export default {
  name: 'edit',

  

  components: {
    Invoice, InvoiceTable, InvoiceSummary
  },
}
</script>
