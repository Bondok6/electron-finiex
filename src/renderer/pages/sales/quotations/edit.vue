<template>
  <div class="mb-8">
    <invoice />
    <invoice-table />
    <invoice-summary />
  </div>
</template>

<script>
import Invoice from "~/components/sales/quotations/edit/Invoice";
import InvoiceTable from "~/components/sales/quotations/edit/InvoiceTable";
import InvoiceSummary from "~/components/sales/quotations/edit/summary/Summary";

export default {
  name: "edit",

  components: {
    Invoice,
    InvoiceTable,
    InvoiceSummary
  },
  created() {
    this.$notify.success({
      title: "success",
      message: "Successfully logged in",
      showClose: false,
      position: "bottom-left"
    });
  }
};
</script>
