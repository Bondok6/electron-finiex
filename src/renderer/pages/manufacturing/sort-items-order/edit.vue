
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
import Invoice from "~/components/manufacturing/sort-items-order/edit/Invoice";
import InvoiceSummary from "~/components/manufacturing/sort-items-order/edit/summary/Summary";
import ItemsToBeSorted from "~/components/manufacturing/sort-items-order/edit/tabs/EditItemsToBeSorted.vue";
import SortedItems from "~/components/manufacturing/sort-items-order/edit/tabs/EditSortedItems.vue";
import SortingCostsAndExpenses from "~/components/manufacturing/sort-items-order/edit/tabs/EditSortingCostsAndExpenses.vue";
import SortedItemsCost from "~/components/manufacturing/sort-items-order/edit/tabs/EditSortedItemsCost.vue";

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