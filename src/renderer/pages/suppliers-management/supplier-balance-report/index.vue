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
import Invoice from '~/components/suppliers-management/supplier-balance-report/Invoice';
import InvoiceTable from '~/components/suppliers-management/supplier-balance-report/InvoiceTable';
import InvoiceSummary from '~/components/suppliers-management/supplier-balance-report/summary/Summary';

export default {
  name: 'Home',
  components: {
    Invoice, InvoiceTable, InvoiceSummary,Pagination
  },



  data: function () {
    return {
      page: 3
    };
  }
}
</script>
