<template>
    <div class="mb-8 popup-page">
        <invoice />
        <invoice-summary />
    </div>
</template>
<script>
import Invoice from "~/components/system-settings/setting-e-mail/Invoice.vue";
import InvoiceSummary from "~/components/system-settings/setting-e-mail/summary/Summary.vue";
export default {
    components : {
        Invoice,
        InvoiceSummary
    }
}
</script>