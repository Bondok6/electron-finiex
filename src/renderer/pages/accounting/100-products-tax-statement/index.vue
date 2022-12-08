<template>
  <div class="mb-8">
    <invoice />
    <invoice-table />
    <invoice-summary />
  </div>
</template>
<script>
import Invoice from "~/components/accounting/100-products-tax-statement/Invoice";
import InvoiceTable from "~/components/accounting/100-products-tax-statement/InvoiceTable";
import InvoiceSummary from "~/components/accounting/100-products-tax-statement/summary/Summary";
export default {
  components: { Invoice, InvoiceTable, InvoiceSummary,  },
   async created() {
    await Promise.all([
      this.$store.dispatch(
        "Accounting/100ProductsTaxStatement/fetchRecords"
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
