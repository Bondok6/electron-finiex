<template>
  <div class="mb-8 background-form">
    <invoice />
    <invoice-summary />
    </div>
</template>
<script>
import Invoice from "@/components/system-cards/warehouses-data/edit/Invoice"
import InvoiceSummary from "@/components/system-cards/warehouses-data/edit/summary/Summary"
export default {
  components : {Invoice, InvoiceSummary}
}
</script>
