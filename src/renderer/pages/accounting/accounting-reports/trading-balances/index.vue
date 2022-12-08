<template>
  <div>
    <invoice />
    <invoice-table />
  </div>
</template>

<script>
import Invoice from "~/components/accounting-reports/trading-balances/Invoice";
import InvoiceTable from "~/components/accounting-reports/trading-balances/InvoiceTable";

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
      this.$store.dispatch("Accounting/Reports/tradingBalances/fetchRecords"),
      this.$store.dispatch("General/getFinancialYear"),
      this.$store.dispatch("lists/getMaxLevel")
    ]).catch(err => {
      this.$message.error(err.message);
    });
  },

  data: function() {
    return {
      page: 3
    };
  }
};
</script>
