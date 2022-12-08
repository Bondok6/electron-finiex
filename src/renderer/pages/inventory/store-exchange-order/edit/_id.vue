<template>
  <div class="mb-8">
    <invoice />
    <invoice-table />
    <invoice-summary />
  </div>
</template>

<script>
import Invoice from "~/components/inventory/store-exchange-order/edit/Invoice";
import InvoiceTable from "~/components/inventory/store-exchange-order/edit/InvoiceTable";
import InvoiceSummary from "~/components/inventory/store-exchange-order/edit/summary/Summary";

export default {
  name: "Home",
  components: {
    Invoice,
    InvoiceTable,
    InvoiceSummary
  },
  async created() {
    await Promise.all([
      this.$store.dispatch(
        "inventory/storeExchangeOrder/editSingleRecordDetails",
        { InvoiceCode: this.$route.params.id }
      ),
      this.$store.dispatch("systemCards/globalList/fetchItemsCardList"),
      this.$store.dispatch("Accounting/globalLists/getAccountCardList"),
      this.$store.dispatch("lists/getSalesMenList"),
      this.$store.dispatch("General/getFinancialYear")
    ]);
  }
};
</script>
