<template>
  <div class="mb-8">
    <invoice />
    <el-tabs class="invoice-tab" type="border-card" stretch @tab-click="handleClick">
      <el-tab-pane :label="$t('insert-compound-items')"><invoice-table-insert /></el-tab-pane>
      <el-tab-pane :label="$t('items-informations-scales')"><invoice-table-information /></el-tab-pane>
    </el-tabs>

    <invoice-summary />

    <div class="text-center">
      
      <el-pagination
        :background="true"
        :current-page.sync="page"
        :page-sizes="[10, 20, 30, 40]"
        :page-size="10"
        layout="jumper, prev, pager, next, total ,sizes"
        :total="40"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
import Invoice from "~/components/inventory/items-ungrouping-order/edit/Invoice";
import InvoiceSummary from "~/components/inventory/items-ungrouping-order/edit/summary/Summary";
import InvoiceTableInsert from "~/components/inventory/items-ungrouping-order/edit/InvoiceTableInsert.vue";
import InvoiceTableInformation from "~/components/inventory/items-ungrouping-order/edit/InvoiceTableInformation.vue";

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
