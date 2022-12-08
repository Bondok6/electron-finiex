<template>
  <div class="mb-8 background-form">
    <invoice />
    <invoice-summary />
    </div>
</template>
<script>
import Invoice from "~/components/system-cards/warehouses-data/new/Invoice"
import InvoiceSummary from "~/components/system-cards/warehouses-data/new/summary/Summary"
export default {
  components : {Invoice, InvoiceSummary},
  async created() {
    await this.$store.dispatch("systemCards/globalList/fetchBranchesList")
  }
}
</script>
