<template>
  <div class="mb-8">
    <invoice />
    <invoice-table />
    <invoice-summary />
    <pagination />
  </div>
</template>

<script>
import Invoice from "~/components/sales/return-sales-invoices/entry/Invoice";
import InvoiceTable from "~/components/sales/return-sales-invoices/entry/InvoiceTable";
import InvoiceSummary from "~/components/sales/return-sales-invoices//entry/summary/Summary";
import Pagination from "~/components/static/pagination";

export default {
  name: "Home",
  components: {
    Invoice,
    InvoiceTable,
    InvoiceSummary,
    Pagination
  },

  data: function () {
    return {
      page: 3,
    };
  },
};
</script>
