<template>
  <div class="mb-8">
    <invoice />

    <el-tabs
      class="invoice-tab items-cards-tabs"
      type="border-card"
      stretch
      @tab-click="handleClick"
    >
      <el-tab-pane :label="$t('units-and-item-prices')"
        ><units-and-item-prices
      /></el-tab-pane>
      <el-tab-pane :label="$t('warehouses-and-item-quantities')"
        ><warehouses-and-item-quantities
      /></el-tab-pane>
      <el-tab-pane :label="$t('items-attached-to-an-item')"
        ><items-attached-to-an-item
      /></el-tab-pane>
      <el-tab-pane :label="$t('barcode-and-item-image')"
        ><barcode-and-item-image
      /></el-tab-pane>
      <!-- <el-tab-pane :label="$t('item-movement-information')"
        ><item-movement-information
      /></el-tab-pane> -->
      <el-tab-pane :label="$t('virtual-units-buying-and-selling')"
        ><virtual-units-buying-and-selling
      /></el-tab-pane>
      <el-tab-pane :label="$t('pos-grouping-order')"
        ><pos-grouping-order
      /></el-tab-pane>
      <!-- <el-tab-pane :label="$t('alternate-item')"
        ><alternate-item
      /></el-tab-pane> -->
    </el-tabs>
  </div>
</template>
<script>
import Invoice from "~/components/system-cards/items-cards/edit/Invoice";
import UnitsAndItemPrices from "~/components/system-cards/items-cards/tabs/units-and-item-prices.vue";
import WarehousesAndItemQuantities from "~/components/system-cards/items-cards/tabs/warehouses-and-item-quantities.vue";
import ItemsAttachedToAnItem from "~/components/system-cards/items-cards/tabs/items-attached-to-an-item.vue";
import BarcodeAndItemImage from "~/components/system-cards/items-cards/tabs/barcode-and-item-image.vue";
import ItemMovementInformation from "~/components/system-cards/items-cards/tabs/item-movement-information.vue";
import VirtualUnitsBuyingAndSelling from "~/components/system-cards/items-cards/tabs/virtual-units-buying-and-selling.vue";
import PosGroupingOrder from "~/components/system-cards/items-cards/tabs/pos-grouping-order.vue";
import AlternateItem from "~/components/system-cards/items-cards/tabs/alternate-item.vue";
export default {
  name: "items-cards",
  components: {
    Invoice,
    UnitsAndItemPrices,
    WarehousesAndItemQuantities,
    ItemsAttachedToAnItem,
    BarcodeAndItemImage,
    ItemMovementInformation,
    VirtualUnitsBuyingAndSelling,
    PosGroupingOrder,
    AlternateItem,
  },
  data: function () {
    return {
      page: 3,
    };
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
