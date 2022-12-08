<template>
  <div class="mb-8">
    <invoice />
    <invoice-table />
    <invoice-summary />

    <pagination />

  </div>
</template>

<script>
import Pagination from "~/components/static/pagination";
import Invoice from '~/components/public-statements/account-statements-previous-years-account/Invoice';
import InvoiceTable from '~/components/public-statements/account-statements-previous-years-account/InvoiceTable';
import InvoiceSummary from '~/components/public-statements/account-statements-previous-years-account/summary/Summary';

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
