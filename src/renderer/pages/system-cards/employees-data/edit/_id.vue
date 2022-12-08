<template>
    <div class="mb-8 background-form">
        <invoice />
        <invoice-summary />
    </div>
</template>
<script>
import Invoice from "~/components/system-cards/employees-data/edit/Invoice.vue";
import InvoiceSummary from "~/components/system-cards/employees-data/edit/summary/Summary.vue";
export default {
    components : {Invoice, InvoiceSummary}
}
</script>