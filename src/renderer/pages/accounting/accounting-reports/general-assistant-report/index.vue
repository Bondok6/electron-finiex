<template>
  <div>
    <invoice />
    <invoice-table />
  </div>
</template>

<script>
import Invoice from "~/components/accounting-reports/general-assistant-report/Invoice";
import InvoiceTable from "~/components/accounting-reports/general-assistant-report/InvoiceTable";

export default {
  name: "Home",
  components: {
    Invoice,
    InvoiceTable
  },

  async mounted() {
    console.log("created");
    await Promise.all([
      this.$store
        .dispatch("Accounting/Reports/generalAssistantReport/fetchRecords")
        .then(response => {
          console.log("response", response);
        })
        .catch(err => {
          this.$message.error(err.message);
        }),
      this.$store.dispatch(
        "Accounting/accountingDailyJournal/fetchSubAccountsList",
        {
          mainOrSub: false
        }
      ),
      this.$store.dispatch("lists/getBranchesList"),
      this.$store.dispatch("General/getFinancialYear"),
      this.$store.dispatch("lists/getMaxLevel")
    ]).catch(err => {
      this.$message.error(err.message);
    });
  }
};
</script>
