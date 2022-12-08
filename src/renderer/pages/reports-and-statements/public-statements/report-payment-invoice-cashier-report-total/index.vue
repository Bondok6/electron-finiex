<template>
  <div class="mb-8 popup-page">
    <invoice />
    <invoice-table />
    <invoice-summary />

    <pagination />

  </div>
</template>

<script>
import Pagination from "~/components/static/pagination";
import Invoice from '~/components/public-statements/report-payment-invoice-cashier-report-total/Invoice';
import InvoiceTable from '~/components/public-statements/report-payment-invoice-cashier-report-total/InvoiceTable';
import InvoiceSummary from '~/components/public-statements/report-payment-invoice-cashier-report-total/summary/Summary';

export default {
  name: 'Home',
  components: {
    Invoice, InvoiceTable, InvoiceSummary, Pagination
  },



  data: function () {
    return {
      page: 3
    };
  }
}
</script>
