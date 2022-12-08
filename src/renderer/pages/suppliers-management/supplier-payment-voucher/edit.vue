<template>
  <div class="mb-8">
    <invoice />
    <invoice-table />
    <invoice-summary />
  </div>
</template>
<script>
import Invoice from '~/components/suppliers-management/supplier-payment-voucher/edit/Invoice';
import InvoiceTable from '~/components/suppliers-management/supplier-payment-voucher/edit/InvoiceTable';
import InvoiceSummary from '~/components/suppliers-management/supplier-payment-voucher/edit/summary/Summary';
export default {
  components : {Invoice, InvoiceTable, InvoiceSummary}
}
</script>
