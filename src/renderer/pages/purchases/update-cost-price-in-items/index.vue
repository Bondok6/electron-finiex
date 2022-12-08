<template>
  <div class="mb-8">
    <invoice />
    <invoice-table />
    <invoice-summary />

  </div>
</template>

<script>
import Invoice from '~/components/purchases/update-cost-price-in-items/Invoice';
import InvoiceTable from '~/components/purchases/update-cost-price-in-items/InvoiceTable';
import InvoiceSummary from '~/components/purchases/update-cost-price-in-items/summary/Summary';

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
