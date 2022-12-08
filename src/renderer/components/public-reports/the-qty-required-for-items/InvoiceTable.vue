<template>
  <el-container class="container ma-4 mt-0 mb-0 invoice-table">
    <el-table :data="tableData" style="width: 100%" stripe border max-height="550">
      <el-table-column align="center" prop="id" :label="$t('id')" width="40" />
      <el-table-column align="center" prop="item_name" :label="$t('item-name')" width="350" />
      
      <el-table-column align="center" prop="category" :label="$t('unit')" />
      <el-table-column align="center" prop="warehouse" :label="$t('available-quantity')"/>
      <el-table-column align="center" prop="actual_quantity" :label="$t('requested-quantity')"/>
      
     


      <template #append>

    <el-table :data="summaryTable" class="width-full summaryTable" border :span-method="arraySpanMethod" max-height="250">
      <el-table-column align="center" prop="id[0]" :label="$t('id')" width="40" />
      <el-table-column align="center" prop="item_name" :label="$t('item-name')" width="350" />
      
      <el-table-column align="center" prop="category" :label="$t('unit')" />
      <el-table-column align="center" prop="warehouse" :label="$t('available-quantity')"/>
      <el-table-column align="center" prop="actual_quantity" :label="$t('requested-quantity')"/>
      
     
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
          id: [this.$t("total"),
              this.$t("total-purchase-quantity"),
              this.$t("total-purchase-value"),
              this.$t("total-total"),
              this.$t("total-sales-value"),
              this.$t("net-quantity"),
              this.$t("net-movement"),
              ]
        
      },
      {
         id: "",
          item_number: "",
          item_name: "",
          unit: "",
          category: "",
          warehouse: "",
          actual_quantity: "",
          item_price: "",
          total: ""
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
          category: "",
          warehouse: "",
          actual_quantity: "",
          item_price: "",
          total: ""
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
