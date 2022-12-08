<template>
  <el-container class="container ma-4 mt-0 mb-0 invoice-table">
    <el-table :data="tableData" style="width: 100%" stripe border max-height="250">
      <el-table-column align="center" prop="id" :label="$t('id')" width="40" />
      <el-table-column align="center" prop="item_name" :label="$t('account-name')" width="350" />
      <el-table-column align="center" prop="unit" :label="$t('opening-balance')"  />
      <el-table-column align="center" prop="category" :label="$t('less-than-30-days')" />
      <el-table-column align="center" prop="warehouse" :label="$t('between-30-to-60-days')"/>
      <el-table-column align="center" prop="actual_quantity" :label="$t('between-60-to-90-days')"/>
      <el-table-column align="center" prop="item_price" :label="$t('between-90-to-120-days')"/>
      <el-table-column align="center" prop="total" :label="$t('greater-than-120-days')" />
      <el-table-column align="center" prop="total" :label="$t('current-balance')" />
      <template #append>

    <el-table :data="summaryTable" class="width-full summaryTable" border :span-method="arraySpanMethod" max-height="250">

      <el-table-column align="center" prop="id" :label="$t('id')" width="40" />
       <el-table-column align="center" prop="item_name" :label="$t('account-name')" width="350" />
      <el-table-column align="center" prop="unit" :label="$t('opening-balance')"  />
      <el-table-column align="center" prop="category" :label="$t('less-than-30-days')" />
      <el-table-column align="center" prop="warehouse" :label="$t('between-30-to-60-days')"/>
      <el-table-column align="center" prop="actual_quantity" :label="$t('between-60-to-90-days')"/>
      <el-table-column align="center" prop="item_price" :label="$t('between-90-to-120-days')"/>
      <el-table-column align="center" prop="total" :label="$t('greater-than-120-days')" />
      <el-table-column align="center" prop="total" :label="$t('current-balance')" />
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
          item_name: "1000 - اسم الحساب",
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
          item_name: "1000 - اسم الحساب",
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
          item_name: "1000 - اسم الحساب",
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
          return [1, 2];
        } else if (columnIndex > 0 && columnIndex < 2) {
          return [0, 0];
        }
      }
    },
  }
};
</script>
<style lang="scss" scoped>





</style>
