<template>
  <div class="mb-8 background-form">
    <invoice />
    <invoice-summary />
  </div>
</template>
<script>
import Invoice from "@/components/customer-management/qitaf-customers-data/edit/Invoice.vue";
import InvoiceSummary from "@/components/customer-management/qitaf-customers-data/edit/summary/Summary.vue";
import {mapMutations } from "vuex";
export default {
  components: {
    Invoice,
    InvoiceSummary,
  },

  async created() {
    this.$store
      .dispatch(
        "customerManagement/qitafCustomers/fetchSingleRecord",
        this.$route.params.id
      )
      .catch(error => {
        this.$notify.error(error.message);
        this.$router.push(
          `${this.$i18n.locale == "ar" ? "/" : "en/"}customer-management/qitaf-customers-data`
        );
      });
  },
  methods: {
    ...mapMutations({
      setRecordDetails: "customerManagement/qitafCustomers/setRecordDetails"
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
        `${app.i18n.locale == "ar" ? "/" : "en/"}customer-management/qitaf-customers-data`
      );
      return false;
    }
  },
  destroyed() {
    this.setRecordDetails({});
  }
};
</script>
