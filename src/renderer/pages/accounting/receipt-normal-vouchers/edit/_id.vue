<template>
  <div class="mb-8 background-form">
    <invoice />
    <invoice-summary />
  </div>
</template>
<script>
import { mapMutations } from "vuex";
import Invoice from "~/components/accounting/receipt-normal-vouchers/edit/Invoice";
import InvoiceSummary from "~/components/accounting/receipt-normal-vouchers/edit/summary/Summary";
export default {
  components: { Invoice, InvoiceSummary },
  async created() {
    await Promise.all([
      this.$store.dispatch("lists/getCostCentersList"),
      this.$store.dispatch("Accounting/accountingDailyJournal/fetchSubAccountsList"),
      this.$store.dispatch("lists/getVoucherPaymentTypes"),
      this.$store.dispatch("lists/getSalesMenList"),
      this.$store.dispatch("lists/getBanksList"),
      this.$store.dispatch("getTaxInfo"),
      this.$store.dispatch("lists/getBanksAndFundsList"),
      this.$store.dispatch(
        "Accounting/receiptCompoundVouchers/fetchSingleRecord",
        this.$route.params.id
      )
    ]).catch(error => {
      this.$notify.error(error.message);
      this.$router.push(
        `${
          this.$i18n.locale == "ar" ? "/" : "en/"
        }accounting/receipt-normal-vouchers`
      );
    });
  },
  methods: {
    ...mapMutations({
      setRecordDetails: "Accounting/receiptCompoundVouchers/setRecordDetails"
    })
  },
  validate({ params, app }) {
    // must route id be digit
    // cannot assuccss (this) HERE
     
    if (/^\d+$/g.test(params.id)) {
      return true;
    } else {
      window.$nuxt.$notify({
        title: "cannot assuccss HERE"
      });
      app.router.push(
        `${
          app.i18n.locale == "ar" ? "/" : "en/"
        }accounting/receipt-normal-vouchers`
      );
      return false;
    }
  },
  destroyed() {
    this.setRecordDetails({});
  }
};
</script>
