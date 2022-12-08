<template>
  <div>
    <invoice />
    <invoice-table />
    <invoice-summary />
      <pagination />

  </div>
</template>
<script>
import Pagination from "~/components/static/pagination";
import Invoice from "~/components/permissions-management/data-permission/entry/Invoice";
import InvoiceTable from "~/components/permissions-management/data-permission/entry/InvoiceTable";
import InvoiceSummary from "~/components/permissions-management/data-permission/entry/summary/InvoiceSummary";

export default {
  components: { Invoice, InvoiceTable, InvoiceSummary,Pagination },
  data: function() {
    return {
      page: 3
    };
  },
};
</script>
