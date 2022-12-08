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
import Invoice from "~/components/accounting/creditor-notice/damaged-goods/new/Invoice";
import InvoiceTable from "~/components/accounting/creditor-notice/damaged-goods/new/InvoiceTable";
import InvoiceSummary from "~/components/accounting/creditor-notice/damaged-goods/new/summary/Summary";

export default {
  name: "Home",
  components: {
    Invoice,
    InvoiceTable,
    InvoiceSummary,
    Pagination
  },

  data: function() {
    return {
      page: 3
    };
  }
};
</script>
