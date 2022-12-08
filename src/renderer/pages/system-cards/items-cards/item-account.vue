<template>
  <div class="mb-8">
    <invoice />
    <invoice-table />
    <invoice-summary />
  </div>
</template>
<script>
import Invoice from '~/components/system-cards/items-cards/item-account/Invoice';
import InvoiceTable from '~/components/system-cards/items-cards/item-account/InvoiceTable';
import InvoiceSummary from '~/components/system-cards/items-cards/item-account/summary/Summary'
export default {
  name: "items-cards",
  components : { Invoice,  InvoiceTable, InvoiceSummary},
  data: function() {
    return {
      page: 3
    };
  }
}
</script>
