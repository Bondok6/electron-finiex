<template>
    <div class="mb-8 popup-page">
        <invoice />
        <invoice-summary />
    </div>
</template>
<script>
import Invoice from "~/components/system-settings/send-sms/Invoice.vue";
import InvoiceSummary from "~/components/system-settings/send-sms/summary/Summary.vue";
export default {
    components : {
        Invoice,
        InvoiceSummary
    }
}
</script>