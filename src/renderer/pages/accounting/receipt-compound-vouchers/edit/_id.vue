<template>
  <div class="mb-8">
    <invoice />
    <invoice-table />
    <invoice-summary />
  </div>
</template>
<script>
import Invoice from "~/components/accounting/receipt-compound-vouchers/edit/Invoice";
import InvoiceTable from "~/components/accounting/receipt-compound-vouchers/edit/InvoiceTable";
import InvoiceSummary from "~/components/accounting/receipt-compound-vouchers/edit/summary/Summary";
import { mapMutations } from "vuex";
export default {
  components: { Invoice, InvoiceTable, InvoiceSummary },
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
        }accounting/receipt-compound-vouchers`
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
    if (/^\d+$/g.test(params.id)) {
      return true;
    } else {
      window.$nuxt.$notify({
        title: "cannot assuccss this HERE"
      });
      app.router.push(
        `${
          app.i18n.locale == "ar" ? "/" : "en/"
        }accounting/receipt-compound-vouchers`
      );
      return false;
    }
  },
  destroyed() {
    this.setRecordDetails({});
  }
};
</script>
