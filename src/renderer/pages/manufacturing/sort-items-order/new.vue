


<template>
  <div class="mb-8">
    <invoice />
    <el-tabs
      class="invoice-tab"
      type="border-card"
      stretch
      @tab-click="handleClick"
    >
      <el-tab-pane :label="$t('enter-the-items-to-be-sorted')"
        ><items-to-be-sorted
      /></el-tab-pane>
      <el-tab-pane :label="$t('enter-sorted-items')"
        ><sorted-items
      /></el-tab-pane>
      <el-tab-pane :label="$t('sorting-costs-and-expenses')"
        ><sorting-costs-and-expenses
      /></el-tab-pane>
      <el-tab-pane :label="$t('estimated-cost-of-sorted-items')"
        ><sorted-items-cost
      /></el-tab-pane>
    </el-tabs>

    <invoice-summary />
    <pagination />
  </div>
</template>
<script>
import Pagination from "~/components/static/pagination";
import Invoice from "~/components/manufacturing/sort-items-order/new/Invoice";
import InvoiceSummary from "~/components/manufacturing/sort-items-order/new/summary/Summary";
import ItemsToBeSorted from "~/components/manufacturing/sort-items-order/new/tabs/NewItemsToBeSorted.vue";
import SortedItems from "~/components/manufacturing/sort-items-order/new/tabs/NewSortedItems.vue";
import SortingCostsAndExpenses from "~/components/manufacturing/sort-items-order/new/tabs/NewSortingCostsAndExpenses.vue";
import SortedItemsCost from "~/components/manufacturing/sort-items-order/new/tabs/NewSortedItemsCost.vue";

export default {
  name: "Home",
  components: {
    Pagination,
    Invoice,
    InvoiceSummary,
    ItemsToBeSorted,
    SortedItems,
    SortingCostsAndExpenses,
    SortedItemsCost,
  },

  data: function () {
    return {
      page: 3,
    };
  },
  methods: {
    handleClick(tab, event) {
       
    },
  },
};
</script>