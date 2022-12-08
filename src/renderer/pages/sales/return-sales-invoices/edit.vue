<template>
  <div class="mb-8">
    <invoice />
    <invoice-table />
    <invoice-summary />
  </div>
</template>
<script>
import Invoice from "~/components/sales/return-sales-invoices/edit/Invoice.vue"
import InvoiceTable from "~/components/sales/return-sales-invoices/edit/InvoiceTable"
import InvoiceSummary from "~/components/sales/return-sales-invoices/edit/summary/Summary"


export default {
  name: 'edit',

  

  components: {
    Invoice, InvoiceTable, InvoiceSummary
  },
}
</script>
