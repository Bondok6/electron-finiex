<template>
    <div class="mb-8">
      <invoice />
      <invoice-table />
      <invoice-summary />
  
    </div>
  </template>
  
  <script>
  import { mapMutations } from 'vuex';
  import Invoice from '~/components/inventory/transfer-between-branches/edit/Invoice';
  import InvoiceTable from '~/components/inventory/transfer-between-branches/edit/InvoiceTable';
  import InvoiceSummary from '~/components/inventory/transfer-between-branches/edit/summary/Summary';
  
  export default {
    name: 'Home',
    components: {
      Invoice, InvoiceTable, InvoiceSummary
    },

    async created() {
        await Promise.all([
        this.$store.dispatch("inventory/transferBetweenBranches/editSingleRecordDetails",{InvoiceCode: this.$route.params.id}),
        this.$store.dispatch("inventory/transferBetweenBranches/fetchNewRecord"),
        this.$store.dispatch("inventory/transferBetweenBranches/fetchPriceTransfer"),
        ])
    },
    methods: {
    ...mapMutations({
      setRecordDetails : "inventory/transferBetweenBranches/setRecordDetails",
      setItems : "inventory/transferBetweenBranches/setItems",
    }),
    destroyed(){
    this.setRecordDetails({});
    this.setItems([]);
  },
  },
  
  }
  </script>
  