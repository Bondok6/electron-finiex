<template>
  <div class="mb-8">
    <invoice />
    <invoice-table />
    <invoice-summary />

    <!-- <pagination /> -->
  </div>
</template>

<script>
// import Pagination from "~/components/static/pagination";
import Invoice from "~/components/accounting/debtor-notice/earned-discount/edit/Invoice";
import InvoiceTable from "~/components/accounting/debtor-notice/earned-discount/edit/InvoiceTable";
import InvoiceSummary from "~/components/accounting/debtor-notice/earned-discount/edit/summary/Summary";

export default {
  name: "Home",
  components: {
    Invoice,
    InvoiceTable,
    InvoiceSummary
    // Pagination
  },

  async created() {
    await Promise.all([
      this.$store.dispatch("Accounting/accountingDailyJournal/fetchSubAccountsList"),
      this.$store.dispatch("lists/getCostCentersList"),
      this.$store.dispatch(
        "Accounting/debtorNotice/earnedDiscount/fetchSingleRecord",
        this.$route.params.id
      )
    ]);
  }
};
</script>
