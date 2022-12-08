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
import Invoice from "~/components/manufacturing/production-receive/entry/Invoice";
import InvoiceSummary from "~/components/manufacturing/production-receive/entry/summary/Summary";
import InvoiceTable from "~/components/manufacturing/production-receive/entry/InvoiceTable.vue";

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
