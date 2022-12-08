<template>
  <div class="mb-8 background-form">
    <invoice />
    <invoice-summary />
  </div>
</template>
<script>
import Invoice from "~/components/accounting/delegates-data/Invoice.vue";
import InvoiceSummary from "~/components/accounting/delegates-data/summary/Summary.vue";
export default {
  components: { Invoice, InvoiceSummary }
};
</script>
