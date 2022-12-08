<template>
  <el-container class="container ma-4 mt-0 mb-0 invoice-table">
    <el-table :data="tableData" style="width: 100%" stripe border max-height="250">
      <el-table-column align="center" prop="id" :label="$t('id')" width="40" />
      <el-table-column align="center" prop="item_name" :label="$t('item-name')" width="350" />
      <el-table-column align="center" prop="unit" :label="$t('invoice-number')"  />
      <el-table-column align="center" prop="category" :label="$t('invoice-date')" />
      <el-table-column align="center" prop="warehouse" :label="$t('client-name')"/>
      <el-table-column align="center" prop="actual_quantity" :label="$t('sales-quantity')"/>
      <el-table-column align="center" prop="item_price" :label="$t('sales-value')"/>
      <el-table-column align="center" prop="total" :label="$t('sales-cost')" />
      <el-table-column align="center" prop="total" :label="$t('profit-value')" />
      <template #append>

    <el-table :data="summaryTable" class="width-full summaryTable" border :span-method="arraySpanMethod" max-height="250">

      <el-table-column align="center" prop="id" :label="$t('id')" width="40" />
       <el-table-column align="center" prop="item_name" :label="$t('item-name')" width="350" />
      <el-table-column align="center" prop="unit" :label="$t('invoice-number')"  />
      <el-table-column align="center" prop="category" :label="$t('invoice-date')" />
      <el-table-column align="center" prop="warehouse" :label="$t('client-name')"/>
      <el-table-column align="center" prop="actual_quantity" :label="$t('sales-quantity')"/>
      <el-table-column align="center" prop="item_price" :label="$t('sales-value')"/>
      <el-table-column align="center" prop="total" :label="$t('sales-cost')" />
      <el-table-column align="center" prop="total" :label="$t('profit-value')" />
    </el-table>

    <el-table :data="percentageTable" class="width-full summaryTable" border :span-method="arraySpanMethod" max-height="250">

      <el-table-column align="center" prop="id" :label="$t('id')" width="40" />
       <el-table-column align="center" prop="item_name" :label="$t('item-name')" width="350" />
      <el-table-column align="center" prop="unit" :label="$t('invoice-number')"  />
      <el-table-column align="center" prop="category" :label="$t('invoice-date')" />
      <el-table-column align="center" prop="warehouse" :label="$t('client-name')"/>
      <el-table-column align="center" prop="actual_quantity" :label="$t('sales-quantity')"/>
      <el-table-column align="center" prop="item_price" :label="$t('sales-value')"/>
      <el-table-column align="center" prop="total" :label="$t('sales-cost')" />
      <el-table-column align="center" prop="total" :label="$t('profit-value')" />
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
          id: this.$t("total-profit"),
          item_number: "",
          item_name: "",
          unit: "",
          category: "34343",
          warehouse: "",
          actual_quantity: "4545",
          item_price: "",
          total: "454545"
      },
      {
         id: "",
          item_number: "",
          item_name: "",
          unit: "",
          category: "34343",
          warehouse: "",
          actual_quantity: "4545",
          item_price: "",
          total: "454545"
      }
      ],
      percentageTable : [
        
      {
         id: this.$t("percentage"),
          item_number: "",
          item_name: "",
          unit: "",
          category: "34343",
          warehouse: "",
          actual_quantity: "4545",
          item_price: "",
          total: "454545"
      },
      {
         id: "",
          item_number: "",
          item_name: "",
          unit: "",
          category: "34343",
          warehouse: "",
          actual_quantity: "4545",
          item_price: "",
          total: "454545"
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
