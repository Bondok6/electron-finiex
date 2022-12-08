<template>
  <div class="mb-8">
    <invoice />
    <invoice-table />
    <invoice-table-two />
    <invoice-summary />
    <pagination />
  </div>
</template>

<script>
import Pagination from "~/components/static/pagination";
import Invoice from "~/components/manufacturing/components-products/new/Invoice";
import InvoiceTable from "~/components/manufacturing/components-products/new/InvoiceTable";
import InvoiceTableTwo from "~/components/manufacturing/components-products/new/InvoiceTableTwo";
import InvoiceSummary from "~/components/manufacturing/components-products/new/summary/Summary";

export default {
  name: "Home",
  components: {
    Pagination,
    Invoice,
    InvoiceTable,
    InvoiceTableTwo,
    InvoiceSummary,
  },

  data: function () {
    return {
      page: 3,
    };
  },
};
</script>