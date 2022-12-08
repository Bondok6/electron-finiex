<template>
  <div class="mb-8">
    <invoice />
    <el-tabs
      class="invoice-tab"
      type="border-card"
      stretch
      @tab-click="handleClick"
    >
      <el-tab-pane :label="$t('entering-indirect-expenses')"
        ><enter-indirect-expenses
      /></el-tab-pane>
      <el-tab-pane :label="$t('view-production-orders')"
        ><show-production-orders
      /></el-tab-pane>
      <el-tab-pane
        :label="$t('examination-of-the-additional-costs-of-production')"
        ><preview-the-additional-costs-of-production
      /></el-tab-pane>
    </el-tabs>

    <invoice-summary />

    <pagination />
  </div>
</template>

<script>
import Pagination from "~/components/static/pagination";
import Invoice from "~/components/manufacturing/distribution-production-expenses/new/Invoice";
import InvoiceSummary from "~/components/manufacturing/distribution-production-expenses/new/summary/Summary";
import EnterIndirectExpenses from "~/components/manufacturing/distribution-production-expenses/new/tabs/EnterIndirectExpenses.vue";
import ShowProductionOrders from "~/components/manufacturing/distribution-production-expenses/new/tabs/ShowProductionOrders.vue";
import PreviewTheAdditionalCostsOfProduction from "~/components/manufacturing/distribution-production-expenses/new/tabs/PreviewTheAdditionalCostsOfProduction.vue";

export default {
  name: "Home",
  components: {
    Pagination,
    Invoice,
    InvoiceSummary,
    EnterIndirectExpenses,
    ShowProductionOrders,
    PreviewTheAdditionalCostsOfProduction,
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
