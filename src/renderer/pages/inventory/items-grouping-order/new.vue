<template>
  <div class="mb-8">
    <invoice />
    <el-tabs class="invoice-tab" type="border-card" stretch @tab-click="handleClick">
      <el-tab-pane :label="$t('insert-compound-items')"><invoice-table-insert /></el-tab-pane>
      <el-tab-pane :label="$t('items-informations-scales')"><invoice-table-information /></el-tab-pane>
    </el-tabs>

    <invoice-summary />

  </div>
</template>

<script>
import Invoice from "~/components/inventory/items-grouping-order/new/Invoice";
import InvoiceSummary from "~/components/inventory/items-grouping-order/new/summary/Summary";
import InvoiceTableInsert from "~/components/inventory/items-grouping-order/new/InvoiceTableInsert.vue";
import InvoiceTableInformation from "~/components/inventory/items-grouping-order/new/InvoiceTableInformation.vue";

export default {
  name: "Home",
  components: {
    Invoice,
    InvoiceSummary,
    InvoiceTableInsert,
    InvoiceTableInformation,
  },


  data: function () {
    return {
      activeName: "first",
      page: 3,
    };
  },

  methods: {
    handleClick(tab, event) {
       
    },
  },
};
</script>
