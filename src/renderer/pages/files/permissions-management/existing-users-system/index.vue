<template>
  <div class="mb-8">
    <invoice-table />
    <invoice-summary />
  </div>
</template>

<script>
import InvoiceTable from '~/components/permissions-management/existing-users-system/InvoiceTable';
import InvoiceSummary from '~/components/permissions-management/existing-users-system/summary/Summary';

export default {
  name: 'Home',
  components: {
     InvoiceTable, InvoiceSummary
  },



  data: function () {
    return {
      page: 3
    };
  }
}
</script>
