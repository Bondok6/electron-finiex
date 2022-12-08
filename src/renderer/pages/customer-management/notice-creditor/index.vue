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
import Invoice from "~/components/customer-management/notice-creditor/entry/Invoice.vue";
import InvoiceTable from "~/components/customer-management/notice-creditor/entry/InvoiceTable.vue";
import InvoiceSummary from "~/components/customer-management/notice-creditor/entry/summary/Summary.vue";
export default {
  components: { Invoice, InvoiceTable, InvoiceSummary, Pagination },
  data: function () {
    return {
      page: 3,
    };
  },
};
</script>
