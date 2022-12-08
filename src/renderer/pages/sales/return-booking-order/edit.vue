<template>
  <div class="mb-8">
    <invoice />
    <invoice-table />
    <invoice-summary />

    <invoice-number-entry />
  </div>
</template>
<script>
import Invoice from "~/components/sales/return-booking-order/edit/Invoice.vue"
import InvoiceTable from "~/components/sales/return-booking-order/edit/InvoiceTable"
import InvoiceSummary from "~/components/sales/return-booking-order/edit/summary/Summary"

import InvoiceNumberEntry from '~/components/dialogs/invoice-number-entry'


export default {
  name: 'edit',

  

  components: {
    Invoice, InvoiceTable, InvoiceSummary, InvoiceNumberEntry
  },

  methods: {
    openIvoiceNumberEntyrDialog() {
      this.$store.commit("invoiceNumberEntry/updateDialogState", true);
    }
  },

  mounted() {
    this.openIvoiceNumberEntyrDialog();
  }
}
</script>
