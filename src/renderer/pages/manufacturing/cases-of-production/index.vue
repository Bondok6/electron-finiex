<template>
  <div class="mb-8">
    <invoice-table />
    <invoice-summary />
    <pagination />
  </div>
</template>

<script>
import Pagination from "~/components/static/pagination";
import InvoiceTable from "~/components/manufacturing/cases-of-production/entry/InvoiceTable";
import InvoiceSummary from "~/components/manufacturing/cases-of-production/entry/summary/Summary";

export default {
  name: "Home",
  components: {
    Pagination,
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
