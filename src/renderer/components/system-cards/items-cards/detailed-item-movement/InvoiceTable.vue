<template>
  <el-container class="container ma-4 mt-0 mb-0 invoice-table">
    <el-table :data="tableData" style="width: 100%" stripe border  max-height="500">
      <el-table-column align="center" prop="id" :label="$t('id')"  width="40"/>
      <el-table-column align="center" prop="item_name" :label="$t('item-name')" />
      <el-table-column align="center" prop="document_number" :label="$t('document-number')" />
      <el-table-column align="center" prop="document_date" :label="$t('document-date')" />
      <el-table-column align="center" prop="movement_type" :label="$t('movement-type')" />
      <el-table-column align="center" prop="net_amount" :label="$t('net-amount')" />
      <el-table-column align="center" prop="unit" :label="$t('unit')" />
      <el-table-column align="center" prop="packing" :label="$t('packing')" />
      <el-table-column align="center" prop="imported_quantity" :label="$t('imported-quantity')" />
      <el-table-column align="center" prop="exported_quantity" :label="$t('exported-quantity')" />

      <template #append>
        <el-table
          :data="summaryTable"
          class="width-full summaryTable"
          stripe
          border
          :span-method="arraySpanMethod"
          max-height="250"
        >
         
      <el-table-column align="center" prop="id" :label="$t('id')"  width="40"/>
      <el-table-column align="center" prop="item_name" :label="$t('item-name')" />
      <el-table-column align="center" prop="document_number" :label="$t('document-number')" />
      <el-table-column align="center" prop="document_date" :label="$t('document-date')" />
      <el-table-column align="center" prop="movement_type" :label="$t('movement-type')" />
      <el-table-column align="center" prop="net_amount" :label="$t('-amount')" />
      <el-table-column align="center" prop="unit" :label="$t('unit')" />
      <el-table-column align="center" prop="packing" :label="$t('packing')" />
      <el-table-column align="center" prop="imported_quantity" :label="$t('imported-quantity')" />
      <el-table-column align="center" prop="exported_quantity" :label="$t('exported-quantity')" />
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
          id: '1',
          item_name: ' ',
          document_number: ' ',
          document_date: ' ',
          movement_type: ' ',
          net_amount: ' ',
          unit: ' ',
          packing: ' ',
          imported_quantity: ' ',
          exported_quantity: ' ',
     
        },
        {
         id: '2',
          item_name: ' ',
          document_number: ' ',
          document_date: ' ',
          movement_type: ' ',
          net_amount: ' ',
          unit: ' ',
          packing: ' ',
          imported_quantity: ' ',
          exported_quantity: ' ',
        },
        {
         id: '3',
          item_name: ' ',
          document_number: ' ',
          document_date: ' ',
          movement_type: ' ',
          net_amount: ' ',
          unit: ' ',
          packing: ' ',
          imported_quantity: ' ',
          exported_quantity: ' ',
        },
        {
          id: '4',
          item_name: ' ',
          document_number: ' ',
          document_date: ' ',
          movement_type: ' ',
          net_amount: ' ',
          unit: ' ',
          packing: ' ',
          imported_quantity: ' ',
          exported_quantity: ' ',
        },
      ],

      summaryTable: [
        {
          id: this.$t("total"),
          item_name: ' ',
          document_number: ' ',
          document_date: ' ',
          movement_type: ' ',
          net_amount: ' ',
          unit: ' ',
          packing: ' ',
          imported_quantity: ' ',
          exported_quantity: ' ',
        },
        {
          id: "-",
          item_name: ' ',
          document_number: ' ',
          document_date: ' ',
          movement_type: ' ',
          net_amount: ' ',
          unit: ' ',
          packing: ' ',
          imported_quantity: ' ',
          exported_quantity: ' ',
        },
      ],
    };
  },

  methods: {
    arraySpanMethod({ row, column, rowIndex, columnIndex }) {
      if (rowIndex === 0) {
        if (columnIndex === 0) {
          return [1, 8];
        } else if (columnIndex > 0 && columnIndex < 8) {
          return [0, 0];
        }
      }
    },
  },
};
</script>