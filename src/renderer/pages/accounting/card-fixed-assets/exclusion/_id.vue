<template>
  <div class="mb-8 background-form">
    <invoice />
    <invoice-summary />
  </div>
</template>
<script>
import Invoice from "~/components/accounting/card-fixed-assets/exclusion/Invoice";
import InvoiceSummary from "~/components/accounting/card-fixed-assets/exclusion/summary/Summary";
import { mapState } from "vuex";
export default {
  components: { Invoice, InvoiceSummary },
  computed: {
    ...mapState({
      singleRecordDetails: state =>
        state.Accounting.cardFixedAssets.singleRecordDetails
    })
  },
  async created() {
    await this.$store.dispatch("Accounting/cardFixedAssets/getSingleExclusion" , {
      id: this.$route.params.id,
      // send any date from fixedAssetsDetailsList records 
      exclusionDate : this.singleRecordDetails.fixedAssetsDetailsList[1].toDate
    });
  }
};
</script>
