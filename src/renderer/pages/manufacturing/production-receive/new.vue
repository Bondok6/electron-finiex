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
import Invoice from "~/components/manufacturing/production-receive/new/Invoice";
import InvoiceSummary from "~/components/manufacturing/production-receive/new/summary/Summary";
import InvoiceTable from "~/components/manufacturing/production-receive/new/InvoiceTable.vue";

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