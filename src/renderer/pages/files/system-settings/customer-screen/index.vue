<template>
    <div class="mb-8 popup-page">
       <invoice />
       <invoice-summary />
    </div>
</template>
<script>
import Invoice from "~/components/system-settings/customer-screen/Invoice.vue";
import InvoiceSummary from "~/components/system-settings/customer-screen/summary/Summary.vue";
export default {
    components : {
        Invoice,
        InvoiceSummary
    }
}
</script>