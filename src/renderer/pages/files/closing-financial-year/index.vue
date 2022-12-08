<template>
    <div class="mb-8 popup-page">
        <invoice />
        <invoice-summary />
    </div>
</template>
<script>
import Invoice from "~/components/files/closing-financial-year/Invoice.vue";
import InvoiceSummary from "~/components/files/closing-financial-year/summary/Summary.vue";
export default {
    components : {
        Invoice,
        InvoiceSummary
    }
}
</script>