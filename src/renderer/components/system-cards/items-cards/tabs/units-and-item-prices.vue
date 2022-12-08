<template>
  <div>
    <el-container class="container mt-0 mb-0 invoice-table editable-table">
      <el-table :data="tableData" style="width: 100%" stripe border>
        <el-table-column align="center" prop="id" :label="$t('id')" width="40">
          <template slot-scope="scope">
            <el-input
              ref="id"
              size="small"
              style="text-align: center"
              v-model="scope.row.id"
            ></el-input>
          </template>
        </el-table-column>
        <el-table-column align="center" prop="unit" :label="$t('unit')">
          <template slot-scope="scope">
            <el-input
              size="small"
              style="text-align: center"
              v-model="scope.row.unit"
            ></el-input>
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          prop="packing_quantity"
          :label="$t('packing-quantity')"
        >
          <template slot-scope="scope">
            <el-input
              size="small"
              type="number"
              style="text-align: center"
              v-model="scope.row.packing_quantity"
            ></el-input>
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          prop="opening_cost"
          :label="$t('opening-cost')"
        >
          <template slot-scope="scope">
            <el-input
              size="small"
              type="number"
              style="text-align: center"
              v-model="scope.row.opening_cost"
            ></el-input>
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          prop="last_purchase_price"
          :label="$t('last-purchase-price')"
        >
          <template slot-scope="scope">
            <el-input
              size="small"
              type="number"
              style="text-align: center"
              v-model="scope.row.last_purchase_price"
            ></el-input>
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          prop="cost_price"
          :label="$t('cost-price%')"
        >
          <template slot-scope="scope">
            <el-input
              size="small"
              style="text-align: center"
              v-model="scope.row.cost_price"
            ></el-input>
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          prop="selling_price_percentage"
          :label="$t('selling-price%')"
        >
          <template slot-scope="scope">
            <el-input
              size="small"
              type="number"
              style="text-align: center"
              v-model="scope.row.selling_price_percentage"
            ></el-input>
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          prop="lowest_selling_price_percentage"
          :label="$t('lowest-selling-price%')"
        >
          <template slot-scope="scope">
            <el-input
              size="small"
              type="number"
              style="text-align: center"
              v-model="scope.row.lowest_selling_price_percentage"
            ></el-input>
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          prop="wholesale_price"
          :label="$t('wholesale-price')"
        >
          <template slot-scope="scope">
            <el-input
              size="small"
              type="number"
              style="text-align: center"
              v-model="scope.row.wholesale_price"
            ></el-input>
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          prop="unit_barcode"
          :label="$t('unit-barcode')"
        >
          <template slot-scope="scope">
            <el-input
              size="small"
              type="number"
              style="text-align: center"
              v-model="scope.row.unit_barcode"
            ></el-input>
          </template>
        </el-table-column>
        <el-table-column align="center" width="60">
          <template>
            <el-popconfirm
              icon="el-icon-info"
              icon-color="red"
              :title="$t('confirm')"
            >
              <i
                slot="reference"
                class="setting-button danger-color el-icon-delete-solid"
              ></i>
            </el-popconfirm>
          </template>
        </el-table-column>
      </el-table>
    </el-container>

    <div class="text-center container ma-4 mx-8 py-2 mt-0 invoice-summary">
      <div class="text-unbold d-flex flex-wrap space-around width-full">
        <span class="mt-2">
          <el-button
          class="mb-1 btn-grey px-4-lg"
            @click="
              does_not_include_tax =
                !does_not_include_tax
            "
            :class="[
              does_not_include_tax
                ? 'btn-dark-grey'
                : 'btn-red',
            ]"
          >
            <span v-if="does_not_include_tax">
              {{ $t("does-not-inlcude-tax") }}
            </span>

            <span v-else>
              {{ $t("includes-tax") }}
            </span>
          </el-button>
        </span>

        <span class="d-flex flex-wrap mt-2 justify-center align-center" v-if="!does_not_include_tax">
          <span class="mx-2 mb-2-sm">
            {{ $t("tax-percentage") }}
          </span>
          <span>
            <span class="input-style mt-2 px-4-lg ma-0">0</span>
            <span>%</span>
          </span>
        </span>

        <span class="d-flex flex-wrap mt-2 justify-center align-center">
          <span class=" mx-2 mb-2-sm">
            {{ $t("selling-price-profit") }}
          </span>
          <span>
            <span class="input-style mt-2 px-4-lg mb-2-sm d-inline-block">0</span>
            <span class="input-style mt-2 px-4-lg">0</span>
            <span>%</span>
          </span>
        </span>

        <span class="d-flex flex-wrap mt-2 justify-center align-center">
          <span class="mx-2 mb-2-sm">
            {{ $t("demand-point") }}
          </span>
          <span>
            <span class="input-style px-4-lg mt-2">3000</span>
          </span>
        </span>

        <span class="d-flex flex-wrap mt-2 justify-center align-center">
          <span class="mx-2 mb-2-sm">
            {{ $t("quantity") }}
          </span>
          <span class="input-style mx-2 mt-2">0.00</span>
        </span>
      </div>

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
      does_not_include_tax: 1,
      tableData: [
        {
          id: 1,
          unit: "حبة",
          packing_quantity: "1.00",
          opening_cost: "4545",
          last_purchase_price: "3553",
          cost_price: "4627",
          selling_price_percentage: "43345534",
          lowest_selling_price_percentage: "563353 ",
          wholesale_price: "6453",
          unit_barcode: "454",
        },
        {
          id: 2,
          unit: "حبة",
          packing_quantity: "1.00",
          opening_cost: "4545",
          last_purchase_price: "3553",
          cost_price: "4627",
          selling_price_percentage: "43345534",
          lowest_selling_price_percentage: "563353 ",
          wholesale_price: "6453",
          unit_barcode: "454",
        },
        {
          id: 3,
          unit: "حبة",
          packing_quantity: "1.00",
          opening_cost: "4545",
          last_purchase_price: "3553",
          cost_price: "4627",
          selling_price_percentage: "43345534",
          lowest_selling_price_percentage: "563353 ",
          wholesale_price: "6453",
          unit_barcode: "454",
        },
        {
          id: 4,
          unit: "حبة",
          packing_quantity: "1.00",
          opening_cost: "4545",
          last_purchase_price: "3553",
          cost_price: "4627",
          selling_price_percentage: "43345534",
          lowest_selling_price_percentage: "563353 ",
          wholesale_price: "6453",
          unit_barcode: "454",
        },
        {
          id: 5,
          unit: "حبة",
          packing_quantity: "1.00",
          opening_cost: "4545",
          last_purchase_price: "3553",
          cost_price: "4627",
          selling_price_percentage: "43345534",
          lowest_selling_price_percentage: "563353 ",
          wholesale_price: "6453",
          unit_barcode: "454",
        },
      ],
    };
  },

  methods: {},
};
</script>
<style scoped lang="scss">
.width-75-lg {
  @media only screen and (min-width: 1280px) {
    width: 75%;
  }

  .mb-1 {
    @media only screen and (min-width: 768px) {
      margin-bottom: 0 !important;
    }
  }

  .input-style {
    @media only screen and (min-width: 768px) {
      margin: 0 1px !important;
    }
  }
}
</style>