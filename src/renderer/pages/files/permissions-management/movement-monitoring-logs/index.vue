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
import Invoice from '~/components/permissions-management/movement-monitoring-logs/Invoice';
import InvoiceTable from '~/components/permissions-management/movement-monitoring-logs/InvoiceTable';
import InvoiceSummary from '~/components/permissions-management/movement-monitoring-logs/summary/Summary';

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
