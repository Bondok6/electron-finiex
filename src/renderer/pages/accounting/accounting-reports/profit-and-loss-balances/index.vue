<template>
  <div>
    <invoice />
    <invoice-table />
  </div>
</template>

<script>
import Invoice from "~/components/accounting-reports/profit-and-loss-balances/Invoice";
import InvoiceTable from "~/components/accounting-reports/profit-and-loss-balances/InvoiceTable";

export default {
  name: "Home",
  components: {
    Invoice,
    InvoiceTable
  },

  async created() {
    await Promise.all([
      this.$store.dispatch("lists/getCostCentersList"),
      this.$store.dispatch("lists/getBranchesList"),
      this.$store.dispatch(
        "Accounting/Reports/profitAndLossBalances/fetchRecords"
      ),
      this.$store.dispatch("General/getFinancialYear"),
      this.$store.dispatch("lists/getMaxLevel")
    ]).catch(err => {
      this.$message.error(err.message);
    });
  }
};
</script>
