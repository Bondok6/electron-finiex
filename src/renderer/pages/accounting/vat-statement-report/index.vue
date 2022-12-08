<template>
  <div class="mb-8">
    <invoice />
    <invoice-table />
    <invoice-summary />
  </div>
</template>
<script>
import Invoice from "~/components/accounting/vat-statement-report/Invoice";
import InvoiceTable from "~/components/accounting/vat-statement-report/InvoiceTable";
import InvoiceSummary from "~/components/accounting/vat-statement-report/summary/Summary";
export default {
  components: { Invoice, InvoiceTable, InvoiceSummary },
  async created() {
    await Promise.all([
      this.$store.dispatch(
        "Accounting/vatStatementReport/fetchRecords"
      ),
      this.$store.dispatch("lists/getBranchesList"),
      this.$store.dispatch("lists/getMovementTypesList"),
      this.$store.dispatch("lists/getAllProviderList"),
      this.$store.dispatch("General/getFinancialYear"),

    ]).catch(err => {
      this.$message.error(err.message);
    });
  }
};
</script>
