<template>
  <div class="mb-8">
    <invoice />
    <invoice-table />
    <invoice-summary />
  </div>
</template>
<script>
import Invoice from "~/components/accounting/chart-of-accounts/Invoice.vue";
import InvoiceTable from "~/components/accounting/chart-of-accounts/InvoiceTable.vue";
import InvoiceSummary from "~/components/accounting/chart-of-accounts/summary/Summary.vue";
export default {
  components: { Invoice, InvoiceTable, InvoiceSummary },
  async created() {
    await Promise.all([
      this.$store.dispatch("Accounting/chartOfAccounts/fetchRecords"),
      this.$store.dispatch("lists/getAccountTypes"),
      this.$store.dispatch("Accounting/accountingDailyJournal/fetchSubAccountsList", {
        mainOrSub: false
      }),
      this.$store.dispatch("lists/getAccountNatures"),
      this.$store.dispatch("lists/getBranchesList"),
      this.$store.dispatch("General/getFinancialYear"),

    ]).catch(err => {
      this.$message.error(err.message);
    });
  }
};
</script>
