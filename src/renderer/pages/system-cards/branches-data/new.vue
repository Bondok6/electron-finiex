<template>
  <div class="mb-8 background-form">
    <invoice />
    <invoice-summary />
  </div>
</template>
<script>
import Invoice from "~/components/system-cards/branches-data/new/Invoice";
import InvoiceSummary from "~/components/system-cards/branches-data/new/summary/Summary";
export default {
  components : {Invoice, InvoiceSummary},

};
</script>
