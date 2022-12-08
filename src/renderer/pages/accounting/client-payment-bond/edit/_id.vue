<template>
  <div class="mb-8">
    <invoice />
    <invoice-table />
    <invoice-summary />

    <!-- <pagination /> -->
  </div>
</template>

<script>
// import Pagination from "~/components/static/pagination";
import Invoice from "~/components/accounting/client-payment-bond/edit/Invoice";
import InvoiceTable from "~/components/accounting/client-payment-bond/edit/InvoiceTable";
import InvoiceSummary from "~/components/accounting/client-payment-bond/edit/summary/Summary";
import { mapMutations } from "vuex";
export default {
  name: "Home",
  components: {
    Invoice,
    InvoiceTable,
    InvoiceSummary
    // Pagination
  },
  async created() {
    await Promise.all([
      this.$store.dispatch("lists/getCostCentersList"),
      this.$store.dispatch("lists/getVoucherPaymentTypes"),
      this.$store.dispatch("lists/getBanksList"),
      this.$store.dispatch("lists/getBanksAndFundsList"),
      this.$store.dispatch(
        "Accounting/clientPaymentBond/fetchSingleRecord",
        this.$route.params.id
      )
    ]).catch(error => {
      this.$notify.error(error.message);
      this.$router.push(
        `${
          this.$i18n.locale == "ar" ? "/" : "en/"
        }accounting/client-payment-bond`
      );
    });
  },
  methods: {
    ...mapMutations({
      setRecordDetails: "Accounting/clientPaymentBond/setRecordDetails"
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
  destroyed() {
    this.setRecordDetails({});
  }
};
</script>
