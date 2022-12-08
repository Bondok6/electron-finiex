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
import Invoice from "~/components/manufacturing/report-distribution-production-expenses/Invoice";
import InvoiceTable from "~/components/manufacturing/report-distribution-production-expenses/InvoiceTable";
import InvoiceSummary from "~/components/manufacturing/report-distribution-production-expenses/summary/Summary";

export default {
  name: "Home",
  components: {
    Pagination,
    Invoice,
    InvoiceTable,
    InvoiceSummary,
  },

  data: function () {
    return {
      page: 3,
    };
  },
};
</script>
