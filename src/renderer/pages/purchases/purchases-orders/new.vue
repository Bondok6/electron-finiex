<template>
    <div class="mb-8">
        <invoice />
        <invoice-table />
        <invoice-summary />
    </div>
</template>
<script>
import Invoice from "~/components/purchases/purchases-orders/new/Invoice.vue";
import invoiceTable from "~/components/purchases/purchases-orders/new/InvoiceTable.vue";
import InvoiceSummary from "~/components/purchases/purchases-orders/new/summary/Summary.vue";
export default {
    components : {
        Invoice,
        invoiceTable,
        InvoiceSummary
    }
}
</script>