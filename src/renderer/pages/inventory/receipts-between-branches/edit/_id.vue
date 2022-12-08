<template>
  <div class="mb-8">
    <invoice />
    <invoice-table />
    <invoice-summary />

  </div>
</template>

<script>
import { mapMutations } from 'vuex';
import Invoice from '~/components/inventory/receipts-between-branches/edit/Invoice';
import InvoiceTable from '~/components/inventory/receipts-between-branches/edit/InvoiceTable';
import InvoiceSummary from '~/components/inventory/receipts-between-branches/edit/summary/Summary';

export default {
  name: 'Home',
  components: {
    Invoice, InvoiceTable, InvoiceSummary
  },
  async created() {
    await Promise.all([
      this.$store.dispatch("systemCards/globalList/fetchWarehousesList"),
      this.$store.dispatch("systemCards/globalList/fetchBranchesList"),
      this.$store.dispatch("inventory/receiptsBetweenBranches/editSingleRecordDetails",{InvoiceCode: this.$route.params.id})
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
  },
  
}
</script>
