<template>
  <div class="mb-8 background-form">
    <invoice />
    <invoice-summary />
  </div>
</template>
<script>
import Invoice from "~/components/system-cards/salemen-data/edit/Invoice.vue"
import InvoiceSummary from "~/components/system-cards/salemen-data/edit/summary/Summary.vue";
import { mapMutations} from "vuex"
export default {
  components: { Invoice, InvoiceSummary },
  
  async created() {
    this.$store
      .dispatch(
        "systemCards/salesmenData/fetchSingleRecord",
        this.$route.params.id
      )
      .catch(error => {
        this.$notify.error(error.response.data.message);
        this.$router.push(
          `${this.$i18n.locale == "ar" ? "/" : "en/"}system-cards/salemen-data`
        );
      });
  },
  methods: {
    ...mapMutations({
      setRecordDetails: "systemCards/salesmenData/setRecordDetails"
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
        `${app.i18n.locale == "ar" ? "/" : "en/"}system-cards/salemen-data`
      );
      return false;
    }
  },
  destroyed() {
    this.setRecordDetails({});
  }
};
</script>
