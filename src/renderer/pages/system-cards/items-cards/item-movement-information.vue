<template>
  <div class="mb-8">
    <invoice-table />
  </div>
</template>
<script>
import InvoiceTable from '~/components/system-cards/items-cards/item-movement-information/InvoiceTable';
export default {
  name: "items-cards",
  components : { InvoiceTable},
  data: function() {
    return {
      page: 3
    };
  }
}
</script>
