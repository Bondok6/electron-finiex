<template>
  <el-container class="container ma-4 mt-0 mb-0 invoice-table">
    <el-table :data="tableData" style="width: 100%" stripe border max-height="250">
      <el-table-column align="center" prop="id" :label="$t('id')" width="40"/>
      <el-table-column align="center" prop="transfer_number" :label="$t('transfer-number')" />
      <el-table-column align="center" prop="date" :label="$t('transfer-date')" />
      <el-table-column align="center" prop="warehouse" :label="$t('from-wherehouse-to-wherehouse')"/>
      <el-table-column align="center" prop="item_name" :label="$t('item-name')" width="300"/>
      <el-table-column align="center" prop="unit" :label="$t('unit')"/>
      <el-table-column align="center" prop="converted_quantity" :label="$t('converted-quantity')"/>
      <el-table-column align="center" prop="received_quantity" :label="$t('received-quantity')"/>
      <el-table-column align="center" prop="remaining_quantity" :label="$t('remaining-quantity')" />

      <template #append>
         <el-table :data="summaryTable" class="width-full summaryTable" stripe border :span-method="arraySpanMethod" max-height="250">  
            <el-table-column align="center" prop="id" :label="$t('id')" width="40"/>
            <el-table-column align="center" prop="transfer_number" :label="$t('transfer-number')" />
            <el-table-column align="center" prop="date" :label="$t('transfer-date')" />
            <el-table-column align="center" prop="warehouse" :label="$t('from-wherehouse-to-wherehouse')"/>
            <el-table-column align="center" prop="item_name" :label="$t('item-name')" width="300"/>
            <el-table-column align="center" prop="unit" :label="$t('unit')"/>
            <el-table-column align="center" prop="converted_quantity" :label="$t('converted-quantity')"/>
            <el-table-column align="center" prop="received_quantity" :label="$t('received-quantity')"/>
            <el-table-column align="center" prop="remaining_quantity" :label="$t('remaining-quantity')" />
         </el-table>
      </template>
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
          id: '11',
          transfer_number: 1321321,
          date: '2012-04-12',
          warehouse : "5000",
          item_number : "502522",
          item_name : "502522 - كوع زاوية 160 ملم اتش اس كلاس 5",
          unit : "حبة",
          converted_quantity : "",
          received_quantity   : "",
          remaining_quantity  : ""
        },
        {
          id: '11',
          transfer_number: 1321321,
          date: '2012-04-12',
          warehouse : "5000",
          item_number : "502522",
          item_name : "502522 - كوع زاوية 160 ملم اتش اس كلاس 5",
          unit : "حبة",
          converted_quantity : "",
          received_quantity   : "",
          remaining_quantity  : ""
        },
        
       
      ],
      summaryTable :  [
        {
          id: this.$t("total"),
          transfer_number: "",
          date: "",
          warehouse : "",
          item_number : "",
          item_name : "",
          unit : "",
          converted_quantity : "",
          received_quantity   : "",
          remaining_quantity  : ""
        },
        {
          id: '-',
          transfer_number: "-",
          date: "-",
          warehouse : "-",
          item_number : "-",
          item_name : "-",
          unit : "-",
          converted_quantity : "-",
          received_quantity   : "-",
          remaining_quantity  : "-"
        }
        ]
    };
  },
   methods: {
    arraySpanMethod({ row, column, rowIndex, columnIndex }) {
      if (rowIndex === 0) {
        if (columnIndex === 0) {
          return [1, 7];
        } else if (columnIndex > 0 && columnIndex < 7) {
          return [0, 0];
        }
      }
    },
  },
};
</script>