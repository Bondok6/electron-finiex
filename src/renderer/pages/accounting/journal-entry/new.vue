<template>
  <div class="mb-8">
    <invoice />
    <invoice-table />
    <invoice-summary />
  </div>
</template>
<script>
import Invoice from "~/components/accounting/journal-entry/new/Invoice.vue";
import InvoiceTable from "~/components/accounting/journal-entry/new/InvoiceTable";
import InvoiceSummary from "~/components/accounting/journal-entry/new/summary/Summary";
import { mapMutations } from "vuex";
export default {
  components: { Invoice, InvoiceTable, InvoiceSummary },
  methods: {
    ...mapMutations({
      setRecordDetails: "Accounting/accountingDailyJournal/setRecordDetails"
    })
  },
  async created() {
    await Promise.all([
      this.$store.dispatch("lists/getGaidTypesList"),
      this.$store.dispatch("Accounting/accountingDailyJournal/fetchSubAccountsList"),
      this.$store.dispatch("lists/getCostCentersList")
    ]);
  },
  destroyed() {
    this.setRecordDetails({});
  }
};
</script>
