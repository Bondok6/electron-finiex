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
import Invoice from "~/components/manufacturing/distribution-production-expenses/entry/Invoice";
import InvoiceSummary from "~/components/manufacturing/distribution-production-expenses/entry/summary/Summary";
import InvoiceTable from "~/components/manufacturing/distribution-production-expenses/entry/InvoiceTable.vue";

export default {
  name: "Home",
  components: {
    Pagination,
    Invoice,
    InvoiceSummary,
    InvoiceTable,
  },

  data: function () {
    return {};
  },
};
</script>
