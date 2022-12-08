<template>
  <div class="mb-8 background-form">
    <invoice />
    <invoice-summary />
  </div>
</template>
<script>
import Invoice from "~/components/system-cards/salemen-data/new/Invoice.vue";
import InvoiceSummary from "~/components/system-cards/salemen-data/new/summary/Summary.vue";
export default {
  components : {Invoice, InvoiceSummary}
}
</script>
