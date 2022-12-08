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
import Invoice from "~/components/customer-management/accounts-receivable-and-payable-reconstruction-report-customers-receivables/Invoice.vue";
import InvoiceTable from "~/components/customer-management/accounts-receivable-and-payable-reconstruction-report-customers-receivables/InvoiceTable.vue";
import InvoiceSummary from "~/components/customer-management/accounts-receivable-and-payable-reconstruction-report-customers-receivables/summary/Summary.vue";
export default {
  components: { Invoice, InvoiceTable, InvoiceSummary, Pagination },
  data: function () {
    return {
      page: 3,
    };
  },
};
</script>
