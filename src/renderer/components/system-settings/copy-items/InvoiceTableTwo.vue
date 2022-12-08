<template>
  <el-container class="container ma-4 mt-4 mb-0 invoice-table">
    <el-table
      :data="tableData"
      style="width: 100%"
      stripe
      border
      max-height="250"
    >
      <el-table-column align="center" prop="id" :label="$t('item-number')" />
      <el-table-column align="center" prop="unit" :label="$t('unit')" />

      <el-table-column
        align="center"
        prop="packing-quantity"
        :label="$t('packing-quantity')"
      />
      <el-table-column
        align="center"
        prop="last_purchase_price"
        :label="$t('last-purchase-price')"
      />
      <el-table-column
        align="center"
        prop="cost_price"
        :label="$t('cost-price')"
      />
      <el-table-column
        align="center"
        prop="sell_price"
        :label="$t('sell-price')"
      />
      <el-table-column
        align="center"
        prop="last_purchase_price"
        :label="$t('lowest-selling-price')"
      />
      <el-table-column
        align="center"
        prop="last_purchase_price"
        :label="$t('wholesale-price')"
      />
    </el-table>
  </el-container>
</template>


<script>
export default {
  name: "invoice",

  data: function () {
    return {
      main_form: {},
      tableData: [
        {
          id: 1,
          category_name: "Rs25a",

          order: "حبة",
        },
        {
          id: 1,
          category_name: "Rs25a",

          order: "حبة",
        },
        {
          id: 1,
          category_name: "Rs25a",

          order: "حبة",
        },
        {
          id: 1,
          category_name: "Rs25a",

          order: "حبة",
        },
        {
          id: 1,
          category_name: "Rs25a",

          order: "حبة",
        },
      ],
    };
  },

  methods: {},
};
</script>
