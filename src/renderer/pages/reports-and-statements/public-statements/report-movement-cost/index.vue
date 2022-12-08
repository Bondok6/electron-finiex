<template>
  <div class="mb-8">
    <invoice />
    <invoice-summary />

    <pagination />
  </div>
</template>

<script>
import Pagination from "~/components/static/pagination";
import Invoice from "~/components/public-statements/report-movement-cost/Invoice";
import InvoiceSummary from "~/components/public-statements/report-movement-cost/summary/Summary";

export default {
  name: "Home",
  components: {
    Invoice,
    InvoiceSummary, Pagination
  },

  data: function () {
    return {
      page: 3,
    };
  },
};
</script>
