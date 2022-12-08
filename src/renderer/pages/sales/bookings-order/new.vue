<template>
  <div class="mb-8">
    <invoice />
    <invoice-table />
    <invoice-summary />   
  </div>
</template>

<script>
import Invoice from '~/components/sales/bookings-order/new/Invoice';
import InvoiceTable from '~/components/sales/bookings-order/new/InvoiceTable';
import InvoiceSummary from '~/components/sales/bookings-order/new/summary/Summary';


export default {
  name: 'edit',

  components: {
    Invoice, InvoiceTable, InvoiceSummary,
  },


}
</script>
