<template>
    <div class="mb-8 popup-page">
        <invoice />
        <invoice-summary />
    </div>
</template>
<script>
import Invoice from "~/components/files/backup-and-restore-data/restore-data/Invoice.vue"
import InvoiceSummary from "~/components/files/backup-and-restore-data/restore-data/summary/Summary.vue"
export default {
    components : {
        Invoice,
        InvoiceSummary
    }
}
</script>