<template>
  <div class="background-form mb-8">
    <invoice />
    <invoice-summary />
  </div>
</template>
<script>
import Invoice from "~/components/accounting/payment-normal-vouchers/edit/Invoice";
import InvoiceSummary from "~/components/accounting/payment-normal-vouchers/edit/summary/Summary";
import { mapMutations } from "vuex";
export default {
  components: { Invoice, InvoiceSummary },
  methods: {
    ...mapMutations({
      setRecordDetails: "Accounting/paymentCompoundVouchers/setRecordDetails"
    })
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
        `${app.i18n.locale == "ar" ? "/" : "en/"}accounting/client-payment-bond`
      );
      return false;
    }
  },
  async created() {
    await Promise.all([
      this.$store.dispatch("lists/getProviderCustomerList"),
      this.$store.dispatch("lists/getBanksAndFundsList"),
      this.$store.dispatch("lists/getCostCentersList"),
      this.$store.dispatch("lists/getVoucherPaymentTypes"),
      this.$store.dispatch("lists/getBanksList"),
      this.$store.dispatch(
        "Accounting/paymentCompoundVouchers/fetchSingleRecord",
        this.$route.params.id
      ),
      this.$store.dispatch("getTaxInfo")
    ]).catch(error => {
      this.$notify.error(error.message);
      this.$router.push(
        `${
          this.$i18n.locale == "ar" ? "/" : "en/"
        }accounting/payment-normal-vouchers`
      );
    });
  },
  destroyed() {
    this.setRecordDetails({});
  }
};
</script>
