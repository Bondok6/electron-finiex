<template>
  <div class="mb-8">
    <invoice />
    <invoice-table />
    <invoice-summary />
  </div>
</template>
<script>
import Invoice from "~/components/purchases/purchases-invoice/new/InvoiceNew.vue"
import InvoiceTable from "~/components/purchases/purchases-invoice/new/InvoiceNewTable.vue"
import InvoiceSummary from "~/components/purchases/purchases-invoice/new/summary/Summary.vue"
import {mapMutations} from "vuex";
export default {
  components : {
    Invoice,
    InvoiceTable,
    InvoiceSummary
  },
  async created() {
    await Promise.all([
      this.$store.dispatch("lists/getCostCentersList"),
      this.$store.dispatch("suppliersManagement/supplierData/fetchRecords"),
      this.$store.dispatch("systemCards/globalList/fetchItemsCardList"),
      this.$store.dispatch("getTaxInfo").then(()=>this.setProviderTaxable(this.tax.purchase.taxType)),
      this.$store.dispatch("lists/getCostCentersList"),
      this.$store.dispatch("systemCards/currencyData/fetchRecords"),
      this.$store.dispatch("systemCards/globalList/fetchFundsAndBanks"),
    ])
  },
  computed: {
    tax() {
      return this.$store.getters.getTaxInformation;
    },
  },
  methods:{
    ...mapMutations({
      setProviderTaxable: "purchases/purchasesInvoice/setProviderTaxable",
    })
  },

}
</script>
