<template>
  <div class="mb-8">
    <invoice />
    <invoice-table />
    <invoice-summary />
    <pagination />
  </div>
</template>

<script>
import Invoice from "~/components/purchases/purchases-orders/edit/Invoice";
import InvoiceTable from "~/components/purchases/purchases-orders/edit/InvoiceTable";
import InvoiceSummary from "~/components/purchases/purchases-orders/edit/summary/Summary";
import Pagination from "~/components/static/pagination";
import input_menu_mixins from "~/pages/purchases/input_menu_mixins.js";

export default {
  name: "Home",
  mixins: [input_menu_mixins],
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
