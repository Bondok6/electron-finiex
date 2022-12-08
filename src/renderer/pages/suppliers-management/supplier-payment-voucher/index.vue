<template>
  <div class="mb-8">
    <invoice />
    <invoice-table />
    <invoice-summary />
    <pagination />
  </div>
</template>
<script>
import Pagination from "~/components/static/pagination";
import Invoice from '~/components/suppliers-management/supplier-payment-voucher/entry/Invoice';
import InvoiceTable from '~/components/suppliers-management/supplier-payment-voucher/entry/InvoiceTable';
import InvoiceSummary from '~/components/suppliers-management/supplier-payment-voucher/entry/summary/Summary'
export default {
  components : { Invoice, InvoiceTable, InvoiceSummary, Pagination},
  data: function() {
    return {
      page: 3
    };
  }
}
</script>
