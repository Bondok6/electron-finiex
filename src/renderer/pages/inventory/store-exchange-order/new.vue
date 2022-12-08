<template>
  <div class="mb-8">
    <invoice />
    <invoice-table />
    <invoice-summary />

  </div>
</template>

<script>
import Invoice from '~/components/inventory/store-exchange-order/new/Invoice';
import InvoiceTable from '~/components/inventory/store-exchange-order/new/InvoiceTable';
import InvoiceSummary from '~/components/inventory/store-exchange-order/new/summary/Summary';

export default {
  name: 'Home',
  components: {
    Invoice, InvoiceTable, InvoiceSummary
  },



  data: function () {
    return {
      page: 3
    };
  },

  async created() {
    await Promise.all([
      this.$store.dispatch("systemCards/globalList/fetchItemsCardList"),
      this.$store.dispatch("Accounting/globalLists/getAccountCardList"),
      this.$store.dispatch("lists/getSalesMenList"),
      this.$store.dispatch("General/getFinancialYear"),
    ]);
  }
}
</script>
