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
import Invoice from "~/components/system-settings/pos-ranking-rankings/Invoice";
import InvoiceTable from "~/components/system-settings/pos-ranking-rankings/InvoiceTable";
import InvoiceSummary from "~/components/system-settings/pos-ranking-rankings/summary/Summary";

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
