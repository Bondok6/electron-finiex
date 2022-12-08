<template>
    <div class="mb-8 popup-page">
        <invoice />
        <invoice-summary />
    </div>
</template>
<script>
import Invoice from "~/components/system-settings/electronic-balance/Invoice.vue";
import InvoiceSummary from "~/components/system-settings/electronic-balance/summary/Summary.vue";
export default {
    components : {
        Invoice,
        InvoiceSummary
    }
}
</script>