<template>
  <div>
    <invoice />
    <invoice-table />
  </div>
</template>
<script>
import Invoice from "~/components/system-cards/connecting-attrs-with-items/Invoice.vue"
import InvoiceTable from "~/components/system-cards/connecting-attrs-with-items/InvoiceTable.vue"
export default {
  name:"ConnectingAttrsWithItems",
  components: { Invoice, InvoiceTable }
}
</script>
<style>
  
</style>