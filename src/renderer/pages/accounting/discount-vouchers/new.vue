<template>
  <div class="background-form mb-8">
    <invoice />
    <invoice-summary />
  </div>
</template>
<script>
import Invoice from "~/components/accounting/discount-vouchers/new/Invoice";
import InvoiceSummary from "~/components/accounting/discount-vouchers/new/summary/Summary";
import { mapMutations } from "vuex";
export default {
  components: { Invoice, InvoiceSummary },
  async created() {
    // get lists which on invoice and invoiceTable and taxInformation
    await Promise.all([
      this.$store.dispatch("lists/getCostCentersList"),
      this.$store.dispatch("lists/getAllProviderList"),

      this.$store.dispatch("getTaxInfo")
    ]);
  },
  methods: {
    ...mapMutations({
      setRecordDetails: "Accounting/discountVouchers/setRecordDetails"
    })
  },
  destroyed() {
    this.setRecordDetails({});
  }
};
</script>
