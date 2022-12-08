<template>
  <div class="mb-8">
    <invoice />
    <el-tabs
      class="invoice-tab"
      type="border-card"
      stretch
      @tab-click="handleClick"
    >
      <el-tab-pane :label="$t('items-to-be-produced-entry')"
        ><items-to-be-produced
      /></el-tab-pane>
      <el-tab-pane :label="$t('required-items-information')"
        ><information-of-required-raw-items
      /></el-tab-pane>
    </el-tabs>

    <invoice-summary />
    <pagination />
  </div>
</template>

<script>
import Pagination from "~/components/static/pagination";
import Invoice from "~/components/manufacturing/production-orders-plan/edit/Invoice";
import InvoiceSummary from "~/components/manufacturing/production-orders-plan/edit/summary/Summary";
import ItemsToBeProduced from "~/components/manufacturing/production-orders-plan/edit/tabs/ItemsToBeProduced.vue";
import InformationOfRequiredRawItems from "~/components/manufacturing/production-orders-plan/edit/tabs/InformationOfRequiredRawItems.vue";

export default {
  name: "Home",
  components: {
    Pagination,
    Invoice,
    InvoiceSummary,
    ItemsToBeProduced,
    InformationOfRequiredRawItems,
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
