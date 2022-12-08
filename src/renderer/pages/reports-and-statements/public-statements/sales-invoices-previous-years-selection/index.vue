<template>
  <div class="mb-8 popup-page" id="sales-years-selection">
    <invoice />
    <invoice-table />
    <invoice-summary />
  </div>
</template>

<script>
import Invoice from '~/components/public-statements/sales-invoices-previous-years-selection/Invoice';
import InvoiceTable from '~/components/public-statements/sales-invoices-previous-years-selection/InvoiceTable';
import InvoiceSummary from '~/components/public-statements/sales-invoices-previous-years-selection/summary/Summary';

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

<style scoped lang="scss">
#sales-years-selection {
  width: 50%;
}
</style>
