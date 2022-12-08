<template>
  <div class="mb-8 background-form">
    <invoice />
    <invoice-summary />
  </div>
</template>
<script>
import Invoice from "~/components/accounting/accounts-card/edit/Invoice";
import InvoiceSummary from "~/components/accounting/accounts-card/edit/summary/Summary";
import { mapState } from "vuex";
export default {
  name: "Home",
  components: {
    Invoice,
    InvoiceSummary
  },
  data() {
    return {};
  },

  async created() {
    await this.$store.dispatch(
      "Accounting/accountingCard/fetchSingleRecord",
      this.$route.params.id
    );
  }
};
</script>
