<template>
  <el-container class="container ma-4 mt-0 mb-0 invoice-table">
    <el-table :data="tableData" style="width: 100%" stripe border max-height="550">
      <el-table-column align="center" prop="id" :label="$t('id')" width="40" />
      <el-table-column align="center" prop="item_name" :label="$t('item-name')" width="350" />
      <el-table-column align="center" prop="unit" :label="$t('purchases-quantity')"  />
      <el-table-column align="center" prop="category" :label="$t('total-purchase-movement')" />
      <el-table-column align="center" prop="warehouse" :label="$t('purchase-returns-quantity')"/>
      <el-table-column align="center" prop="actual_quantity" :label="$t('total-purchase-returns-movement')"/>
      <el-table-column align="center" prop="item_price" :label="$t('sales-quantity')"/>
      <el-table-column align="center" prop="total" :label="$t('total-sales-movement')" />
      <el-table-column align="center" prop="total" :label="$t('sales-returns-quantity')" />
      <el-table-column align="center" prop="total" :label="$t('total-sales-returns-movement')" />


      <template #append>

    <el-table :data="summaryTable" class="width-full summaryTable" border :span-method="arraySpanMethod" max-height="250">
      <el-table-column align="center" prop="id[0]" :label="$t('id')" width="40" />
       <el-table-column align="center" prop="item_name" :label="$t('item-name')" width="350" />
      <el-table-column align="center" prop="unit" :label="$t('purchases-quantity')"  />
      <el-table-column align="center" prop="category" :label="$t('total-purchase-movement')" />
      <el-table-column align="center" prop="warehouse" :label="$t('purchase-returns-quantity')"/>
      <el-table-column align="center" prop="actual_quantity" :label="$t('total-purchase-returns-movement')"/>
      <el-table-column align="center" prop="item_price" :label="$t('sales-quantity')"/>
      <el-table-column align="center" prop="total" :label="$t('total-sales-movement')" />
      <el-table-column align="center" prop="total" :label="$t('sales-returns-quantity')" />
      <el-table-column align="center" prop="total" :label="$t('total-sales-returns-movement')" />
    </el-table>

    <el-table :data="summaryTable" class="width-full summaryTable" border :span-method="arraySpanMethod" max-height="250">
      <el-table-column align="center" prop="id[1]" :label="$t('id')" width="40" />
       <el-table-column align="center" prop="item_name" :label="$t('item-name')" width="350" />
      <el-table-column align="center" prop="unit" :label="$t('purchases-quantity')"  />
      <el-table-column align="center" prop="category" :label="$t('total-purchase-movement')" />
      <el-table-column align="center" prop="warehouse" :label="$t('purchase-returns-quantity')"/>
      <el-table-column align="center" prop="actual_quantity" :label="$t('total-purchase-returns-movement')"/>
      <el-table-column align="center" prop="item_price" :label="$t('sales-quantity')"/>
      <el-table-column align="center" prop="total" :label="$t('total-sales-movement')" />
      <el-table-column align="center" prop="total" :label="$t('sales-returns-quantity')" />
      <el-table-column align="center" prop="total" :label="$t('total-sales-returns-movement')" />
    </el-table>
    <el-table :data="summaryTable" class="width-full summaryTable" border :span-method="arraySpanMethod" max-height="250">
      <el-table-column align="center" prop="id[2]" :label="$t('id')" width="40" />
       <el-table-column align="center" prop="item_name" :label="$t('item-name')" width="350" />
      <el-table-column align="center" prop="unit" :label="$t('purchases-quantity')"  />
      <el-table-column align="center" prop="category" :label="$t('total-purchase-movement')" />
      <el-table-column align="center" prop="warehouse" :label="$t('purchase-returns-quantity')"/>
      <el-table-column align="center" prop="actual_quantity" :label="$t('total-purchase-returns-movement')"/>
      <el-table-column align="center" prop="item_price" :label="$t('sales-quantity')"/>
      <el-table-column align="center" prop="total" :label="$t('total-sales-movement')" />
      <el-table-column align="center" prop="total" :label="$t('sales-returns-quantity')" />
      <el-table-column align="center" prop="total" :label="$t('total-sales-returns-movement')" />
    </el-table>
     <el-table :data="summaryTable" class="width-full summaryTable" border :span-method="arraySpanMethod" max-height="250">
      <el-table-column align="center" prop="id[3]" :label="$t('id')" width="40" />
       <el-table-column align="center" prop="item_name" :label="$t('item-name')" width="350" />
      <el-table-column align="center" prop="unit" :label="$t('purchases-quantity')"  />
      <el-table-column align="center" prop="category" :label="$t('total-purchase-movement')" />
      <el-table-column align="center" prop="warehouse" :label="$t('purchase-returns-quantity')"/>
      <el-table-column align="center" prop="actual_quantity" :label="$t('total-purchase-returns-movement')"/>
      <el-table-column align="center" prop="item_price" :label="$t('sales-quantity')"/>
      <el-table-column align="center" prop="total" :label="$t('total-sales-movement')" />
      <el-table-column align="center" prop="total" :label="$t('sales-returns-quantity')" />
      <el-table-column align="center" prop="total" :label="$t('total-sales-returns-movement')" />
    </el-table>
     <el-table :data="summaryTable" class="width-full summaryTable" border :span-method="arraySpanMethod" max-height="250">
      <el-table-column align="center" prop="id[4]" :label="$t('id')" width="40" />
       <el-table-column align="center" prop="item_name" :label="$t('item-name')" width="350" />
      <el-table-column align="center" prop="unit" :label="$t('purchases-quantity')"  />
      <el-table-column align="center" prop="category" :label="$t('total-purchase-movement')" />
      <el-table-column align="center" prop="warehouse" :label="$t('purchase-returns-quantity')"/>
      <el-table-column align="center" prop="actual_quantity" :label="$t('total-purchase-returns-movement')"/>
      <el-table-column align="center" prop="item_price" :label="$t('sales-quantity')"/>
      <el-table-column align="center" prop="total" :label="$t('total-sales-movement')" />
      <el-table-column align="center" prop="total" :label="$t('sales-returns-quantity')" />
      <el-table-column align="center" prop="total" :label="$t('total-sales-returns-movement')" />
    </el-table>
     <el-table :data="summaryTable" class="width-full summaryTable" border :span-method="arraySpanMethod" max-height="250">
      <el-table-column align="center" prop="id[5]" :label="$t('id')" width="40" />
       <el-table-column align="center" prop="item_name" :label="$t('item-name')" width="350" />
      <el-table-column align="center" prop="unit" :label="$t('purchases-quantity')"  />
      <el-table-column align="center" prop="category" :label="$t('total-purchase-movement')" />
      <el-table-column align="center" prop="warehouse" :label="$t('purchase-returns-quantity')"/>
      <el-table-column align="center" prop="actual_quantity" :label="$t('total-purchase-returns-movement')"/>
      <el-table-column align="center" prop="item_price" :label="$t('sales-quantity')"/>
      <el-table-column align="center" prop="total" :label="$t('total-sales-movement')" />
      <el-table-column align="center" prop="total" :label="$t('sales-returns-quantity')" />
      <el-table-column align="center" prop="total" :label="$t('total-sales-returns-movement')" />
    </el-table>
     <el-table :data="summaryTable" class="width-full summaryTable" border :span-method="arraySpanMethod" max-height="250">
      <el-table-column align="center" prop="id[6]" :label="$t('id')" width="40" />
      <el-table-column align="center" prop="item_name" :label="$t('item-name')" width="350" />
      <el-table-column align="center" prop="unit" :label="$t('purchases-quantity')"  />
      <el-table-column align="center" prop="category" :label="$t('total-purchase-movement')" />
      <el-table-column align="center" prop="warehouse" :label="$t('purchase-returns-quantity')"/>
      <el-table-column align="center" prop="actual_quantity" :label="$t('total-purchase-returns-movement')"/>
      <el-table-column align="center" prop="item_price" :label="$t('sales-quantity')"/>
      <el-table-column align="center" prop="total" :label="$t('total-sales-movement')" />
      <el-table-column align="center" prop="total" :label="$t('sales-returns-quantity')" />
      <el-table-column align="center" prop="total" :label="$t('total-sales-returns-movement')" />
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
              this.$t("total-sales-quantity"),
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
