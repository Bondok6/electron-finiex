<template>
  <div class="mb-8">
    <invoice />
    <invoice-table />
    <invoice-summary />
  </div>
</template>

<script>
import Invoice from "~/components/sales/return-sales-invoices/new/Invoice";
import InvoiceTable from "~/components/sales/return-sales-invoices/new/InvoiceTable";
import InvoiceSummary from "~/components/sales/return-sales-invoices/new/summary/Summary";


export default {
  name: 'new',

  

  components: {
    Invoice, InvoiceTable, InvoiceSummary
  },
}
</script>
