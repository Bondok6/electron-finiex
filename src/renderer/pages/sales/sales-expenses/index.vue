<template>
  <div class="mb-8">
    <invoice />
    <invoice-table />
    <invoice-summary />
  </div>
</template>

<script>
import Invoice from '~/components/sales/sales-expenses/Invoice';
import InvoiceTable from '~/components/sales/sales-expenses/InvoiceTable';
import InvoiceSummary from '~/components/sales/sales-expenses/summary/Summary';

export default {
  name: 'Home',
  components: {
    Invoice, InvoiceTable, InvoiceSummary
  },
}
</script>
