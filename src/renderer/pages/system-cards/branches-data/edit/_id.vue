<template>
  <div class="mb-8 background-form">
    <invoice />
    <invoice-summary />
  </div>
</template>
<script>
import Invoice from "~/components/system-cards/branches-data/edit/Invoice";
import InvoiceSummary from "~/components/system-cards/branches-data/edit/summary/Summary";
import { mapMutations } from "vuex";
export default {
  components: { Invoice, InvoiceSummary },

  async created() {
    await Promise.all([
      this.$store.dispatch("getTaxInfo"),
      this.$store.dispatch(
        "systemCards/branchData/fetchSingleRecord",
        this.$route.params.id
      )
    ]).catch(error => {
      this.$notify.error(error.message);
      this.$router.push(
        `${this.$i18n.locale == "ar" ? "/" : "en/"}system-cards/branches-data`
      );
    });
  },
  methods: {
    ...mapMutations({
      setRecordDetails: "systemCards/branchData/setRecordDetails"
    })
  },
  validate({ params, app }) {
    // must route id be digit
    if (/^\d+$/g.test(params.id)) {
      return true;
    } else {
      window.$nuxt.$notify({
        title: "cannot assuccss this HERE"
      });
      app.router.push(
        `${app.i18n.locale == "ar" ? "/" : "en/"}system-cards/branches-data`
      );
      return false;
    }
  },
  destroyed() {
    this.setRecordDetails({});
  }
};
</script>
