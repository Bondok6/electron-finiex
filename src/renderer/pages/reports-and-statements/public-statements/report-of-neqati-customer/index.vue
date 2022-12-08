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
import Invoice from "~/components/public-statements/report-of-neqati-customer/Invoice";
import InvoiceTable from "~/components/public-statements/report-of-neqati-customer/InvoiceTable";
import InvoiceSummary from "~/components/public-statements/report-of-neqati-customer/summary/Summary";

export default {
  name: "Home",
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
