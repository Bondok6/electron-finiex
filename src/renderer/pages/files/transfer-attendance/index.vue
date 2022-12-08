<template>
    <div class="mb-8">
        <invoice />
        <invoice-table />
        <invoice-summary />
    </div>
</template>
<script>
import Invoice from "~/components/files/transfer-attendance/Invoice.vue";
import InvoiceTable from "~/components/files/transfer-attendance/InvoiceTable.vue";
import InvoiceSummary from "~/components/files/transfer-attendance/summary/Summary.vue";
export default {
    components : {
        Invoice,
        InvoiceTable,
        InvoiceSummary
    }
}
</script>