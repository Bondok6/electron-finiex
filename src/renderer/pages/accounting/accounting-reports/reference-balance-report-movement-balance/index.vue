<template>
  <div>
    <invoice />
    <invoice-table />
  </div>
</template>

<script>
import Invoice from "~/components/accounting-reports/reference-balance-report-movement-balance/Invoice";
import InvoiceTable from "~/components/accounting-reports/reference-balance-report-movement-balance/InvoiceTable";

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
        "Accounting/accountingDailyJournal/fetchSubAccountsList",
        {
          mainOrSub: false
        }
      ),
      this.$store.dispatch(
        "Accounting/Reports/referenceBalanceReportMovementBalance/fetchRecords"
      ),
      this.$store.dispatch("General/getFinancialYear"),
      this.$store.dispatch("lists/getMaxLevel")
    ]).catch(err => {
      this.$message.error(err.message);
    });
  }
};
</script>
