<template>
    <div class="mb-8 background-form">
        <invoice />
        <invoice-summary />
    </div>
</template>
<script>
import Invoice from "~/components/files/processing-setting-company/Invoice.vue";
import InvoiceSummary from "~/components/files/processing-setting-company/summary/Summary.vue";
export default {
    components : {
        Invoice,
        InvoiceSummary
    }
}
</script>