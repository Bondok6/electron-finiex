<template>
   <div class="mb-8 popup-page">
       <invoice />
       <invoice-summary />
   </div>
</template>

<script>
import Invoice from "~/components/files/backup-and-restore-data/backup-and-restore/Invoice.vue";
import InvoiceSummary from "~/components/files/backup-and-restore-data/backup-and-restore/summary/Summary.vue";
export default {
    components : {
        Invoice,
        InvoiceSummary
    }
}
</script>
