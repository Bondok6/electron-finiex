<template>
  <div class="mb-8">
    <invoice />
    <invoice-table />
    <invoice-summary />   
  </div>
</template>

<script>
import Invoice from "~/components/sales/sales-invoices/new/Invoice.vue"
import InvoiceTable from '~/components/sales/sales-invoices/new/InvoiceTable';
import InvoiceSummary from "~/components/sales/sales-invoices/new/summary/Summary"


export default {
  name: 'edit',

  

  components: {
    Invoice, InvoiceTable, InvoiceSummary,
  },
}
</script>
