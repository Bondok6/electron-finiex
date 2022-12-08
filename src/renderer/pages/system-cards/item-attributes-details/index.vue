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
import Invoice from "~/components/system-cards/items-details/Invoice";
import InvoiceTable from "~/components/system-cards/items-details/InvoiceTable";
import InvoiceSummary from "~/components/system-cards/items-details/summary/Summary";
export default {
  components: {
    Invoice,
    InvoiceTable,
    InvoiceSummary, Pagination
  },
  data: function () {
    return {
      page: 3,
    };
  },
};
</script>
