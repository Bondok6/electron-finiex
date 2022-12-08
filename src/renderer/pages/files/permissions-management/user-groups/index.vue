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
import Invoice from "~/components/permissions-management/user-groups/Invoice";
import InvoiceTable from "~/components/permissions-management/user-groups/InvoiceTable";
import InvoiceSummary from "~/components/permissions-management/user-groups/summary/InvoiceSummary";

export default {
  components: { Invoice, InvoiceTable, InvoiceSummary,Pagination },
  data: function() {
    return {
      page: 3
    };
  },
};
</script>
