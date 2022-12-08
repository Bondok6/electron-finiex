<template>
  <div class="mb-8 popup-page">
      <invoice />
      <invoice-summary />
  </div>
</template>

<script>
import Invoice from "~/components/files/closing-entries/Invoice.vue";
import InvoiceSummary from "~/components/files/closing-entries/summary/Summary.vue";
export default {
    components : {
        Invoice,
        InvoiceSummary
    }
}
</script>