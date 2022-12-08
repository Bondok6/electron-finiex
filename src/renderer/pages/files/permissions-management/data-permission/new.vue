<template>
  <div class="mb-8 background-form">
    <invoice />

    <invoice-summary />
  </div>
</template>
<script>
import Invoice from "~/components/permissions-management/data-permission/new/Invoice";
import InvoiceSummary from "~/components/permissions-management/data-permission/new/summary/Summary";
export default {
  components: {
    Invoice,
    InvoiceSummary,
  },
  methods: {
    handleClick(tab) {
      if (tab.index == 2) {
        this.$store.commit("tableselection/price_of_attached_item_zero", true);
      } else {
        this.$store.commit("tableselection/price_of_attached_item_zero", false);
      }
    },
  },
};
</script>
