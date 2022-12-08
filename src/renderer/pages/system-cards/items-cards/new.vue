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
       <div class="text-center container ma-4 mx-8 py-2 mt-0 invoice-summary">
      <div class="text-center pt-1 mt-0 invoice-summary">
        <div class="mt-2 action-buttons-nonGrown justify-center align-baseline">

            <el-button size="mini" class="mb-1 btn-blue" @click="create()">{{
              $t("save-f5")
            }}</el-button>

          <NuxtLink :to="localePath('/system-cards/items-cards/search-items')">
            <el-button size="mini" class="mb-1 btn-violet-faded">{{
              $t("search-f7")
            }}</el-button>
          </NuxtLink>

          <el-button size="mini" class="mb-1 btn-red">{{
            $t("delete-f8")
          }}</el-button>

          <NuxtLink :to="localePath('/system-cards/items-cards')">
            <el-button size="mini" class="mb-1 btn-violet">{{
              $t("back-f6")
            }}</el-button>
          </NuxtLink>

          <el-button size="mini" class="mb-1 btn-grey">{{
            $t("print-pdf")
          }}</el-button>

          <el-button size="mini" class="mb-1 btn-grey">{{
            $t("print-f4")
          }}</el-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Invoice from "~/components/system-cards/items-cards/edit/Invoice";
import UnitsAndItemPrices from "~/components/system-cards/items-cards/new-tabs/units-and-item-prices.vue";
import WarehousesAndItemQuantities from "~/components/system-cards/items-cards/new-tabs/warehouses-and-item-quantities.vue";
import ItemsAttachedToAnItem from "~/components/system-cards/items-cards/new-tabs/items-attached-to-item.vue";
import BarcodeAndItemImage from "~/components/system-cards/items-cards/new-tabs/barcode-and-item-image.vue";
import ItemMovementInformation from "~/components/system-cards/items-cards/new-tabs/item-movement-information.vue";
import VirtualUnitsBuyingAndSelling from "~/components/system-cards/items-cards/new-tabs/virtual-units-buying-and-selling.vue";
import PosGroupingOrder from "~/components/system-cards/items-cards/new-tabs/pos-grouping-order.vue";
import AlternateItem from "~/components/system-cards/items-cards/new-tabs/alternate-item.vue";
export default {
  name: "items-cards",
  data(){
    return {
    }
  },
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
  async created() {
    await Promise.all([
      this.$store.dispatch("systemCards/globalList/fetchCompaniesList"),
      this.$store.dispatch("systemCards/globalList/fetchItemsCategorysList"),
      this.$store.dispatch("systemCards/globalList/fetchItemsSubCategorysList"),
      this.$store.dispatch("systemCards/globalList/fetchItemsTypeList"),
      this.$store.dispatch("systemCards/globalList/fetchWarehousesList"),
      this.$store.dispatch("systemCards/globalList/fetchUnitsList"),
      this.$store.dispatch("systemCards/globalList/fetchItemsCardList"),
    ])
  },
  methods: {
    create() {
      ///
      this.$store
        .dispatch("systemCards/itemsCards/create")
        .then(() => {
          this.$notify({
            title: "Success",
            message: "items cards  Created",
            type: "success"
          });
          this.$router.push("/system-cards/items-cards");
        });
    }
  },
};
</script>
