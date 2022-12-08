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
import Invoice from "~/components/manufacturing/report-detailed-production/Invoice";
import InvoiceTable from "~/components/manufacturing/report-detailed-production/InvoiceTable";
import InvoiceSummary from "~/components/manufacturing/report-detailed-production/summary/Summary";

export default {
  name: "Home",
  components: {
    Pagination,
    Invoice,
    InvoiceTable,
    InvoiceSummary,
    Pagination,
  },

  data: function () {
    return {
      page: 3,
    };
  },
};
</script>
