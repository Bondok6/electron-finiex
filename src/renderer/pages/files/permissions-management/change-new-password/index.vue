<template>
  <div>
    <invoice-table />
  </div>
</template>
<script>
import InvoiceTable from "~/components/permissions-management/change-new-password/InvoiceTable";

export default {
  components: {  InvoiceTable },
  data: function() {
    return {
      page: 3
    };
  },
};
</script>
