<template>
  <el-container class="container ma-4 mt-0 mb-0 invoice-table">
    <el-table :data="tableData" style="width: 100%" stripe border max-height="250">
      <el-table-column align="center" prop="id" :label="$t('id')" width="40" />
      <el-table-column align="center" prop="item_name" :label="$t('item-name')" width="340" />
      <el-table-column align="center" prop="unit" :label="$t('unit')" />
      <el-table-column align="center" prop="starting_quantity" :label="$t('starting-quantity')" />
      <el-table-column align="center" prop="imported_quantity" :label="$t('imported-quantity')"/>
      <el-table-column align="center" prop="actual_quantity" :label="$t('imported-value')"/>
      <el-table-column align="center" prop="item_price" :label="$t('exported-quantity')"/>
      <el-table-column align="center" prop="item_price" :label="$t('exported-value')"/>
      <el-table-column align="center" prop="current_quantity" :label="$t('current-quantity')" />
      <el-table-column align="center" prop="current_quantity" :label="$t('current-value')" />
      
      
      <template #append >
    <el-table :data="summaryTable" class="width-full summaryTable" stripe border :span-method="arraySpanMethod" max-height="250" >
        
      <el-table-column align="center" prop="id" :label="$t('id')"  width="40"/>
      <el-table-column align="center" prop="item_name" :label="$t('item-name')" width="340" />
      <el-table-column align="center" prop="unit" :label="$t('unit')" />
      <el-table-column align="center" prop="starting_quantity" :label="$t('starting-quantity')" />
      <el-table-column align="center" prop="imported_quantity" :label="$t('imported-quantity')"/>
      <el-table-column align="center" prop="actual_quantity" :label="$t('imported-value')"/>
      <el-table-column align="center" prop="item_price" :label="$t('exported-quantity')"/>
      <el-table-column align="center" prop="item_price" :label="$t('exported-value')"/>
      <el-table-column align="center" prop="current_quantity" :label="$t('current-quantity')" />
      <el-table-column align="center" prop="current_quantity" :label="$t('current-value')" />
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
          starting_quantity: "",
          imported_quantity: "",
          actual_quantity: "",
          item_price: "",
          current_quantity: ""
        },
        {
          id: 2,
          item_number: "22",
          item_name: "1000 - اسم الصنف",
          unit: "",
          starting_quantity: "",
          imported_quantity: "",
          actual_quantity: "",
          item_price: "",
          current_quantity: ""
        },
        {
          id: 3,
          item_number: "33",
          item_name: "1000 - اسم الصنف",
          unit: "",
          starting_quantity: "",
          imported_quantity: "",
          actual_quantity: "",
          item_price: "",
          current_quantity: ""
        }
      ],
      summaryTable : [
        {
          id: this.$t("total"),
          item_number: "",
          item_name: "",
          unit: "",
          starting_quantity: "",
          imported_quantity: "",
          actual_quantity: "4545",
          item_price: "",
          current_quantity: "454545"
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
          return [1, 3];
        } else if (columnIndex > 0 && columnIndex < 3) {
          return [0, 0];
        }
      }
    },
  }
};
</script>
<style lang="scss" scoped>





</style>
