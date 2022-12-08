<template>
  <div class="mb-8">
    <invoice />
    <invoice-table />
    <invoice-summary />

  </div>
</template>

<script>
import { mapMutations } from 'vuex';
import Invoice from '~/components/inventory/receipts-between-branches/new/Invoice';
import InvoiceTable from '~/components/inventory/receipts-between-branches/new/InvoiceTable';
import InvoiceSummary from '~/components/inventory/receipts-between-branches/new/summary/Summary';

export default {
  name: 'Home',
  components: {
    Invoice, InvoiceTable, InvoiceSummary
  },
  async created() {
    await Promise.all([
      this.$store.dispatch("systemCards/globalList/fetchWarehousesList"),
      this.$store.dispatch("systemCards/globalList/fetchBranchesList"),
    ])
  },
  methods: {
    ...mapMutations({
      setRecordDetails : "inventory/receiptsBetweenBranches/setRecordDetails",
      setSingleRecordDetails : "inventory/receiptsBetweenBranches/setSingleRecordDetails",
    })
  },
  destroyed(){
    this.setRecordDetails({});
    this.setSingleRecordDetails({});
  }
}
</script>
