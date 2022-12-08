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
import Invoice from "~/components/manufacturing/sort-items-order/search/Invoice";
import InvoiceTable from "~/components/manufacturing/sort-items-order/search/InvoiceTable";
import InvoiceSummary from "~/components/manufacturing/sort-items-order/search/summary/Summary";

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
      activeName: "first",
      page: 3,
    };
  },
};
</script>
