<template>
  <div class="mb-8 background-form">
    <invoice />
    <invoice-summary />
  </div>
</template>
<script>
import Invoice from "~/components/customer-management/qitaf-customers-data/new/Invoice.vue";
import InvoiceSummary from "~/components/customer-management/qitaf-customers-data/new/summary/Summary.vue";
export default {
  components: {
    Invoice,
    InvoiceSummary,
  },
};
</script>
