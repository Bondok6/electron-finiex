<template>
  <div class="mb-8">
    <invoice />
    <invoice-table />
    <invoice-summary />
  </div>
</template>
<script>
import Invoice from "~/components/accounting/funds-and-banks-movement/Invoice";
import InvoiceTable from "~/components/accounting/funds-and-banks-movement/InvoiceTable";
import InvoiceSummary from "~/components/accounting/funds-and-banks-movement/summary/Summary";
export default {
  components: { Invoice, InvoiceTable, InvoiceSummary },
  async created() {
    await Promise.all([
      this.$store.dispatch("lists/getBanksAndFundsList"),

      this.$store.dispatch("General/getFinancialYear"),
      this.$store.dispatch("Accounting/fundsAndBanksMovement/fetchRecords")
    ]).catch(err => {
      this.$message.error(err.message);
    });
  }
};
</script>
