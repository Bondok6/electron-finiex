<template>
  <div class="mb-8">

    <invoice />
    
    <InvoiceTable />
    <InvoiceSummary />


    <pagination />
  </div>
</template>

<script>
import Pagination from "~/components/static/pagination";
import Invoice from '~/components/public-reports/the-qty-required-for-items/Invoice';
import InvoiceTable from '~/components/public-reports/the-qty-required-for-items/InvoiceTable';
import InvoiceSummary from '~/components/public-reports/the-qty-required-for-items/summary/Summary';

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
