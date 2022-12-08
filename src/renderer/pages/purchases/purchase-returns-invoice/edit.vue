<template>
    <div class="mb-8">
        <invoice />
        <invoice-table />
        <invoice-summary />
    </div>
</template>
<script>
import Invoice from "~/components/purchases/purchase-returns-invoice/edit/InvoiceEdit.vue";
import InvoiceTable from "~/components/purchases/purchase-returns-invoice/edit/InvoiceEditTable.vue";
import InvoiceSummary from "~/components/purchases/purchase-returns-invoice/edit/summary/Summary.vue";

import input_menu_mixins from '~/pages/purchases/input_menu_mixins.js'
export default {
    mixins: [ input_menu_mixins ],
    components : {
        Invoice,
        InvoiceTable,
        InvoiceSummary
        }
}
</script>