<template>
  <div class="mb-8">
    <invoice />
    <invoice-table />
    <invoice-summary />


  </div>
</template>

<script>
import { mapMutations } from 'vuex';
import Invoice from '~/components/inventory/transfer-between-branches/new/Invoice';
import InvoiceTable from '~/components/inventory/transfer-between-branches/new/InvoiceTable';
import InvoiceSummary from '~/components/inventory/transfer-between-branches/new/summary/Summary';

export default {
  name: 'Home',
  components: {
    Invoice, InvoiceTable, InvoiceSummary
  },
  async created() {
    await Promise.all([
      this.$store.dispatch("inventory/transferBetweenBranches/fetchNewRecord"),
      this.$store.dispatch("inventory/transferBetweenBranches/fetchPriceTransfer"),
    ])
  },
  methods: {
    ...mapMutations({
      setRecordDetails : "inventory/transferBetweenBranches/setRecordDetails",
      setItems : "inventory/transferBetweenBranches/setItems",
    })
  },
  destroyed(){
    this.setRecordDetails({});
    this.setItems([]);
  }
}
</script>
