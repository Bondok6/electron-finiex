<template>
  <div class="mb-8 background-form">
    <invoice />
    <invoice-summary />
  </div>
</template>
<script>
import Invoice from "~/components/accounting/accounts-card/new/Invoice";
import InvoiceSummary from "~/components/accounting/accounts-card/new/summary/Summary";
export default {
  name: "Home",
  components: {
    Invoice,
    InvoiceSummary
  }
};
</script>
