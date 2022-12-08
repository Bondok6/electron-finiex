<template>
  <el-container class="container ma-4 mt-0 mb-0 invoice-table">
    <el-table :data="tableData" style="width: 100%" stripe border max-height="250">
      <el-table-column align="center" prop="id" :label="$t('id')" width="40" />
      <el-table-column align="center" prop="invoice_number" :label="$t('invoice-number')"  />
      <el-table-column align="center" prop="invoice_date" :label="$t('invoice-date')" />
      <el-table-column align="center" prop="client_name" :label="$t('client-name')" width="300" />
      <el-table-column align="center" prop="item_name" :label="$t('item-name')" width="300"/>
      <el-table-column align="center" prop="unit" :label="$t('unit')" />
      <el-table-column align="center" prop="sales_quantity" :label="$t('sales-quantity')" />
      <el-table-column align="center" prop="amount_learances" :label="$t('amount-learances')" />
      <el-table-column align="center" prop="remaining_quantity" :label="$t('remaining-quantity')" />
      <template #append>
    <el-table :data="summaryTable" class="width-full summaryTable" stripe border :span-method="arraySpanMethod" max-height="250">
            <el-table-column align="center" prop="id" :label="$t('id')" width="40" />
            <el-table-column align="center" prop="invoice_number" :label="$t('invoice-number')"  />
            <el-table-column align="center" prop="invoice_date" :label="$t('invoice-date')" />
            <el-table-column align="center" prop="client_name" :label="$t('client-name')" width="300"  />
            <el-table-column align="center" prop="item_name" :label="$t('item-name')" width="300"  />
            <el-table-column align="center" prop="unit" :label="$t('unit')" />
            <el-table-column align="center" prop="sales_quantity" :label="$t('sales-quantity')" />
            <el-table-column align="center" prop="amount_learances" :label="$t('amount-learances')" />
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
          id: 1,
          invoice_number : 12233,
          invoice_date : "14/1/2020",
          client_name : "",
          item_name : "1000 - أسم الصنف",
          unit : "",
          sales_quantity : "",
          amount_learances : "",
          remaining_quantity : ""
        },
        {
          id: 1,
          invoice_number : 12233,
          invoice_date : "14/1/2020",
          client_name : "",
          item_name : "1000 - أسم الصنف",
          unit : "",
          sales_quantity : "",
          amount_learances : "",
          remaining_quantity : ""
        },
        {
          id: 1,
          invoice_number : 12233,
          invoice_date : "14/1/2020",
          client_name : "",
          item_name : "1000 - أسم الصنف",
          unit : "",
          sales_quantity : "",
          amount_learances : "",
          remaining_quantity : ""
        },
        
      ],
      summaryTable : [
        {
          id: this.$t('total'),
          invoice_number : "",
          invoice_date : "",
          client_name : "",
          item_number : "",
          unit : "",
          sales_quantity : "",
          amount_learances : "",
          remaining_quantity : ""
        },
        {
          id: '-',
          invoice_number : '-',
          invoice_date : '-',
          client_name : '-',
          item_number : '-',
          unit : '-',
          sales_quantity : '-',
          amount_learances : '-',
          remaining_quantity : '-'
        },
      ]
    };
  },
  methods: {
    arraySpanMethod({ row, column, rowIndex, columnIndex }) {
      if (rowIndex === 0) {
        if (columnIndex === 0) {
          return [1, 4];
        } else if (columnIndex > 0 && columnIndex < 4) {
          return [0, 0];
        }
      }
    },
  },
};
</script>