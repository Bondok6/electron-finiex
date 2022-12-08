<template>
  <div>
    <invoice />
    <invoice-table />
    <invoice-summary />
  </div>
</template>

<script>
import Invoice from "~/components/accounting-reports/auxiliary-report/Invoice";
import InvoiceTable from "~/components/accounting-reports/auxiliary-report/InvoiceTable";

export default {
  name: "Home",
  components: {
    Invoice,
    InvoiceTable
  },

  async created() {
    await Promise.all([
      this.$store.dispatch("Accounting/Reports/auxiliaryReport/fetchRecords"),
      this.$store.dispatch("lists/getBranchesList"),
      this.$store.dispatch(
        "Accounting/accountingDailyJournal/fetchSubAccountsList",
        {
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
