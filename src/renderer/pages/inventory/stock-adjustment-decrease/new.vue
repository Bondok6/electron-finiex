<template>
  <div class="mb-8">
    <invoice />
    <invoice-table />
    <invoice-summary />



  </div>
</template>

<script>
import Invoice from '~/components/inventory/stock-adjustment-decrease/new/Invoice';
import InvoiceTable from '~/components/inventory/stock-adjustment-decrease/new/InvoiceTable';
import InvoiceSummary from '~/components/inventory/stock-adjustment-decrease/new/summary/Summary';

export default {
  name: 'Home',
  components: {
    Invoice, InvoiceTable, InvoiceSummary
  },



  data: function () {
    return {
      page: 3
    };
  }
}
</script>
