<template>
  <div>
    <el-container class="container mt-0 mb-0 invoice-table editable-table">
      <el-table
        :data="tableData"
        style="width: 100%"
        stripe
        border
        max-height="250"
      >
        <el-table-column
          align="center"
          prop="id"
          :label="$t('id')"
          width="40"
        >
          <template slot-scope="scope">
            <el-input
              ref="id"
              size="small"
              type='number'
              style="text-align: center"
              v-model="scope.row.id"
            ></el-input>
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          prop="virtual_unit_for_sale"
          :label="$t('virtual-unit-for-sale')"
        >
          <template slot-scope="scope">
            <el-input
              size="small"
              type='number'
              style="text-align: center"
              v-model="scope.row.virtual_unit_for_sale"
            ></el-input>
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          prop="virtual_unit_for_purchase"
          :label="$t('virtual-unit-for-purchase')"
        >
          <template slot-scope="scope">
            <el-input
              size="small"
              type='number'
              style="text-align: center"
              v-model="scope.row.virtual_unit_for_purchase"
            ></el-input>
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          prop="virtual_unit_for_price_offers"
          :label="$t('virtual-unit-for-price-offers')"
        >
          <template slot-scope="scope">
            <el-input
              size="small"
              type='number'
              style="text-align: center"
              v-model="scope.row.virtual_unit_for_price_offers"
            ></el-input>
          </template>
        </el-table-column>
  
        <el-table-column
          align="center"
          prop="virtual_unit_for_reservation_orders"
          :label="$t('virtual-unit-for-reservation-orders')"
        >
          <template slot-scope="scope">
            <el-input
              size="small"
              type='number'
              style="text-align: center"
              v-model="scope.row.virtual_unit_for_reservation_orders"
            ></el-input>
          </template>
        </el-table-column>
        
        <el-table-column
          align="center"
          prop="virtual_unit_for_purchase_orders"
          :label="$t('virtual-unit-for-purchase-orders')"
        >
          <template slot-scope="scope">
            <el-input
              size="small"
              type='number'
              style="text-align: center"
              v-model="scope.row.virtual_unit_for_purchase_orders"
            ></el-input>
          </template>
        </el-table-column>
      </el-table>
    </el-container>

    <div class="text-center container ma-4 mx-8 py-2 mt-0 invoice-summary">
      <div class="text-center pt-1 mt-0 invoice-summary">
        <div class="mt-2 action-buttons-nonGrown justify-center align-baseline">
          <NuxtLink :to="localePath('/system-cards/items-cards')">
          <el-button size="mini" class="mb-1 btn-blue">{{
            $t("save-f5")
          }}</el-button>
          </NuxtLink>

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
export default {
  name: "invoice",

  data: function () {
    return {
      tableData: [
        {
          id: 1,
          virtual_unit_for_sale: "حبة",
          virtual_unit_for_purchase: "حبة",
          virtual_unit_for_price_offers: "حبة",
          virtual_unit_for_reservation_orders: "حبة",
          virtual_unit_for_purchase_orders: "حبة",
        },
        {
          id: 2,
          virtual_unit_for_sale: "حبة",
          virtual_unit_for_purchase: "حبة",
          virtual_unit_for_price_offers: "حبة",
          virtual_unit_for_reservation_orders: "حبة",
          virtual_unit_for_purchase_orders: "حبة",
        },
      ],
    };
  },

  methods: {},
};
</script>