<template>
    <div class="mb-8">
        <invoice />
        <invoice-table />
        <invoice-summary />
    </div>
</template>
<script>
import Invoice from "~/components/purchases/purchases-expenses/Invoice.vue";
import InvoiceTable from "~/components/purchases/purchases-expenses/InvoiceTable.vue";
import InvoiceSummary from "~/components/purchases/purchases-expenses/summary/Summary.vue";
export default {
    components : {
        Invoice,
        InvoiceTable,
        InvoiceSummary
    }
}
</script>