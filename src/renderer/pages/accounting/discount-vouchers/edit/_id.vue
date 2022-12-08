<template>
  <div class="background-form mb-8">
    <invoice />
    <invoice-summary />
  </div>
</template>
<script>
import Invoice from "~/components/accounting/discount-vouchers/edit/Invoice";
import InvoiceSummary from "~/components/accounting/discount-vouchers/edit/summary/Summary";
import { mapMutations } from "vuex";
export default {
  components: { Invoice, InvoiceSummary },
  async created() {
    // get lists which on invoice and invoiceTable and taxInformation
    await Promise.all([
      this.$store.dispatch("lists/getCostCentersList"),
      this.$store.dispatch("lists/getAllProviderList"),
      this.$store.dispatch(
        "Accounting/discountVouchers/fetchSingleRecord",
        this.$route.params.id
      ),
      this.$store.dispatch("getTaxInfo")
    ]).catch(error => {
      this.$notify.error(error.message);
      this.$router.push(
        `${this.$i18n.locale == "ar" ? "/" : "en/"}accounting/discount-vouchers`
      );
    });
  },
  methods: {
    ...mapMutations({
      setRecordDetails: "Accounting/discountVouchers/setRecordDetails"
    })
  },
  destroyed() {
    this.setRecordDetails({});
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
        `${app.i18n.locale == "ar" ? "/" : "en/"}accounting/discount-vouchers`
      );
      return false;
    }
  }
};
</script>
