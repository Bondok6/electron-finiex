<template>
  <el-container class="container ma-4 mt-0 mb-0 invoice-table">
     <el-table
      :data="tableData"
      style="width: 100%"
      class="width-full"
      stripe
      border
      max-height="500"
    >
      <el-table-column align="center" prop="id" :label="$t('id')" width="40" />

      <el-table-column
        align="center"
        prop="item_name"
        :label="$t('item-name')"
        width="250"
      />
      <el-table-column
        align="center"
        prop="item_category"
        :label="$t('/')"
        width="40"
      />
      <el-table-column align="center" prop="item_unit" :label="$t('unit')" />
      <el-table-column align="center" prop="quantity" :label="$t('quantity')" />
      <el-table-column align="center" prop="price" :label="$t('price-sale')" />
      <el-table-column align="center" prop="discount" :label="$t('discount')" />
      <el-table-column align="center" prop="tax" :label="$t('tax')" />
      <el-table-column align="center" prop="total" :label="$t('total')" />

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
</template>


<script>
export default {
  name: "invoice",

  data: function () {
    return {
     tableData: [
        {
          id: 1,
          item_id: "Rs25a",
          item_name: "كوع زاوية 225*250 كلاس 5",
          item_category: "",
          item_unit: "حبة",
          quantity: 8,
          price: "1,324.00",
          discount: "0.0",
          tax: "54.00",
          total: "642.00",
        },
        {
          id: 2,
          item_id: "X521a",
          item_name: "كوع زاوية 225*250 كلاس 5",
          item_category: "",
          item_unit: "حبة",
          quantity: 9,
          price: "932.00",
          discount: "0.0",
          tax: "91.00",
          total: "828.00",
        },
        {
          id: 3,
          item_id: "Yu925a",
          item_name: "كوع زاوية 225*250 كلاس 5",
          item_category: "",
          item_unit: "حبة",
          quantity: 2,
          price: "453.00",
          discount: "0.0",
          tax: "180.00",
          total: "129.00",
        },
      ],
    };
  },

  methods: {
    
  }
};
</script>