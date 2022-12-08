<template>
  <div>
    <invoice />
    <invoice-table />
  </div>
</template>

<script>
import Invoice from "~/components/accounting-reports/balance-sheet-report-vertical/Invoice";
import InvoiceTable from "~/components/accounting-reports/balance-sheet-report-vertical/InvoiceTable";

export default {
  name: "Home",
  components: {
    Invoice,
    InvoiceTable
  },

  async created() {
    await Promise.all([
      this.$store.dispatch(
        "Accounting/Reports/balanceSheetReportVertical/fetchRecords"
      ),
      this.$store.dispatch("lists/getBranchesList"),
      this.$store.dispatch("lists/getCostCentersList"),
      this.$store.dispatch("General/getFinancialYear"),
      this.$store.dispatch("lists/getMaxLevel")
    ]).catch(err => {
      this.$message.error(err.message);
    });
  }
};
</script>
