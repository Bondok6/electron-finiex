<template>
  <div class="mb-8">
    <invoice />
    <invoice-table />
    <invoice-summary />   
  </div>
</template>

<script>
import Invoice from '~/components/sales/quotations/new/Invoice';
import InvoiceTable from '~/components/sales/quotations/new/InvoiceTable';
import InvoiceSummary from '~/components/sales/quotations/new/summary/Summary';


export default {
  name: 'edit',

  

  components: {
    Invoice, InvoiceTable, InvoiceSummary,
  },


}
</script>
