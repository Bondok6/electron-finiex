<template>
  <el-container class="container ma-4 mt-0 mb-0 invoice-table">
    <el-table
      :data="tableData"
      style="width: 100%"
      stripe
      border
      max-height="250"
    >
      <el-table-column align="center" prop="id" :label="$t('id')" width="40" />
      <el-table-column
        align="center"
        prop="item_name"
        :label="$t('item-name')"
        width="400"
      />

      <el-table-column
        align="center"
        prop="selling_price"
        :label="$t('selling-price')"
      />
      <el-table-column
        align="center"
        prop="cost_price"
        :label="$t('cost-price')"
      />
      <el-table-column align="center" prop="quantity" :label="$t('quantity')" />
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
          item_name: "Rs25a-1000",
          selling_price: "20",
          cost_price: "30",
          quantity: "10",
        },
        {
          id: 2,
          item_name: "Rs25a-1000",
          selling_price: "20",
          cost_price: "30",
          quantity: "10",
        },
        {
          id: 3,
          item_name: "Rs25a-1000",
          selling_price: "20",
          cost_price: "30",
          quantity: "10",
        },
        {
          id: 4,
          item_name: "Rs25a-1000",
          selling_price: "20",
          cost_price: "30",
          quantity: "10",
        },
      ],
    };
  },

  methods: {},
};
</script>
