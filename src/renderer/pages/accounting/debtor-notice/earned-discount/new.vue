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
import Invoice from "~/components/accounting/debtor-notice/earned-discount/new/Invoice";
import InvoiceTable from "~/components/accounting/debtor-notice/earned-discount/new/InvoiceTable";
import InvoiceSummary from "~/components/accounting/debtor-notice/earned-discount/new/summary/Summary";

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
      this.$store.dispatch("lists/getCostCentersList")
    ]);
  }
};
</script>
