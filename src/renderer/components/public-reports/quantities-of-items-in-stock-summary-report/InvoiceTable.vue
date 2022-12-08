<template>
  <el-container class="container ma-4 mt-0 mb-0 invoice-table">
    <el-table :data="tableData" style="width: 100%" stripe border max-height="250">
      <el-table-column align="center" prop="id" :label="$t('id')" width="40" />
      <el-table-column align="center" prop="item_name" :label="$t('item-name')" width="300" />
      <el-table-column align="center" prop="unit" :label="$t('unit')" />
      <el-table-column align="center" prop="category" :label="$t('category')" />
      <el-table-column align="center" prop="warehouse" :label="$t('warehouse')"/>
      <el-table-column align="center" prop="actual_quantity" :label="$t('actual-quantity')"/>
      <el-table-column align="center" prop="item_price" :label="$t('item-price')"/>
      <el-table-column align="center" prop="total" :label="$t('total')" />
      
      
      <template #append >
    <el-table :data="summaryTable" class="width-full summaryTable" stripe border :span-method="arraySpanMethod" max-height="250" >
        
      <el-table-column align="center" prop="id" :label="$t('id')"  width="40"/>
      <el-table-column align="center" prop="item_name" :label="$t('item-name')"  width="300"/>
      <el-table-column align="center" prop="unit" :label="$t('unit')" />
      <el-table-column align="center" prop="category" :label="$t('category')" />
      <el-table-column align="center" prop="warehouse" :label="$t('warehouse')"/>
      <el-table-column align="center" prop="actual_quantity" :label="$t('actual-quantity')"/>
      <el-table-column align="center" prop="item_price" :label="$t('item-price')"/>
      <el-table-column align="center" prop="total" :label="$t('total')" />
    </el-table>
      </template>
    </el-table>
   
  </el-container>
</template>

<script>
export default {
  name: "invoice",

  data: function() {
    return {
      tableData: [
        {
          id: 1,
          item_number: "11",
          item_name: "1000 - اسم الصنف",
          unit: "",
          category: "",
          warehouse: "",
          actual_quantity: "",
          item_price: "",
          total: ""
        },
        {
          id: 2,
          item_number: "22",
          item_name: "1000 - اسم الصنف",
          unit: "",
          category: "",
          warehouse: "",
          actual_quantity: "",
          item_price: "",
          total: ""
        },
        {
          id: 3,
          item_number: "33",
          item_name: "1000 - اسم الصنف",
          unit: "",
          category: "",
          warehouse: "",
          actual_quantity: "",
          item_price: "",
          total: ""
        }
      ],
      summaryTable : [
        {
          id: this.$t("total"),
          item_number: "",
          item_name: "",
          unit: "",
          category: "",
          warehouse: "",
          actual_quantity: "4545",
          item_price: "",
          total: "454545"
      },
      {
         item_number: '-',
          asset_number: '-',
          asset_name: '-',
          structure_No : '-',
          supplier_name : '-',
          depreciation_ratio : '-',
          depreciation_date : '-',
         purchase_date : '-',
          purchasing_price : '-',
          addition_value  : '-'
      }
      ]
    };
  },

  methods: {
   arraySpanMethod({ row, column, rowIndex, columnIndex }) {
      if (rowIndex === 0) {
        if (columnIndex === 0) {
          return [1, 5];
        } else if (columnIndex > 0 && columnIndex < 5) {
          return [0, 0];
        }
      }
    },
  }
};
</script>
<style lang="scss" scoped>





</style>
