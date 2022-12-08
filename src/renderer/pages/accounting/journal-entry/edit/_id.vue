<template>
  <div class="mb-8">
    <invoice />
    <invoice-table />
    <invoice-summary />
  </div>
</template>
<script>
import Invoice from "~/components/accounting/journal-entry/edit/Invoice.vue";
import InvoiceTable from "~/components/accounting/journal-entry/edit/InvoiceTable";
import InvoiceSummary from "~/components/accounting/journal-entry/edit/summary/Summary";
import { mapMutations } from "vuex";
export default {
  components: { Invoice, InvoiceTable, InvoiceSummary },

  async created() {
    await Promise.all([
      this.$store.dispatch(
        "Accounting/accountingDailyJournal/fetchSingleRecord",
        this.$route.params.id
      ),
      this.$store.dispatch("Accounting/accountingDailyJournal/fetchSubAccountsList"),
      this.$store.dispatch("lists/getCostCentersList"),
      this.$store.dispatch("lists/getGaidTypesList"),
    ]).catch(error => {
      this.$notify.error(error.message);
      this.$router.push(
        `${this.$i18n.locale == "ar" ? "/" : "en/"}accounting/journal-entry`
      );
    });
  },
  validate({ params, app }) {
    // must route id be digit
    // cannot assuccss (this) HERE
     
    if (/^\d+$/g.test(params.id)) {
      return true;
    } else {
      window.$nuxt.$notify({
        title: "cannot assuccss this HERE"
      });
      app.router.push(
        `${app.i18n.locale == "ar" ? "/" : "en/"}accounting/journal-entry`
      );
      return false;
    }
  },
  methods: {
    ...mapMutations({
      setRecordDetails: "Accounting/accountingDailyJournal/setRecordDetails"
    })
  },
  destroyed() {
    this.setRecordDetails({});
  }
};
</script>
