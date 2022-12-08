<template>
  <div class="mb-8">
    <invoice-table />
    <invoice-summary />
    <pagination />
  </div>
</template>

<script>
import Pagination from "~/components/static/pagination";
import InvoiceTable from "~/components/manufacturing/types-of-production-costs/edit/InvoiceTable";
import InvoiceSummary from "~/components/manufacturing/types-of-production-costs/edit/summary/Summary";

export default {
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
