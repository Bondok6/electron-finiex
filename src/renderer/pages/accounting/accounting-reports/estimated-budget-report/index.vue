<template>
  <div>
    <invoice />
    <invoice-table />
  </div>
</template>

<script>
import Invoice from "~/components/accounting-reports/estimated-budget-report/Invoice";
import InvoiceTable from "~/components/accounting-reports/estimated-budget-report/InvoiceTable";

export default {
  name: "Home",
  components: {
    Invoice,
    InvoiceTable
  },

  async created() {
    await Promise.all([
      this.$store.dispatch(
        "Accounting/Reports/estimatedBudgetReport/fetchRecords"
      ),
      this.$store.dispatch("lists/getBranchesList"),
      this.$store.dispatch(
        "Accounting/accountingDailyJournal/fetchSubAccountsList",
        {
          // to get All Main and Sub Accounts
          mainOrSub: false
        }
      ),
      this.$store.dispatch("General/getFinancialYear"),
      this.$store.dispatch("lists/getMaxLevel")
    ]).catch(err => {
      this.$message.error(err.message);
    });
  }
};
</script>
