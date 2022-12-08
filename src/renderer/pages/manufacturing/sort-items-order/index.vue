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
import Invoice from "~/components/manufacturing/sort-items-order/entry/Invoice";
import InvoiceTable from "~/components/manufacturing/sort-items-order/entry/InvoiceTable";
import InvoiceSummary from "~/components/manufacturing/sort-items-order/entry/summary/Summary";

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
