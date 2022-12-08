<template>
  <div class="mb-8">
    <invoice />
    <invoice-table />
    <invoice-summary />
  </div>
</template>
<script>
import Invoice from "~/components/accounting/vat-return-filing/Invoice.vue";
import InvoiceTable from "~/components/accounting/vat-return-filing/InvoiceTable.vue";
import InvoiceSummary from "~/components/accounting/vat-return-filing/summary/Summary.vue";
export default {
  components: { Invoice, InvoiceTable, InvoiceSummary },
  async created() {
    await Promise.all([
      this.$store.dispatch("lists/getBranchesList"),
      this.$store.dispatch("Accounting/vatReturnFiling/fetchRecords"),
      this.$store.dispatch("General/getFinancialYear")
    ]).catch(err => {
      this.$message.error(err.message);
    });
  }
};
</script>
