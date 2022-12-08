<template>
  <el-container class="container ma-4 mt-0 mb-0 invoice-table">
    <el-table :data="tableData" style="width: 100%" stripe border max-height="250">
      <el-table-column align="center" prop="id" :label="$t('id')" width="40"/>
      <el-table-column align="center" prop="item_name" :label="$t('item-name')"  width="450"/>
      <el-table-column align="center" prop="invoice_number" :label="$t('invoice-number')"/>
      <el-table-column align="center" prop="invoice_date" :label="$t('invoice-date')"/>
      <el-table-column align="center" prop="sales_quantity" :label="$t('sales-quantity')"/>
      <el-table-column align="center" prop="sales_value" :label="$t('sales-value')" />
      <el-table-column align="center" prop="sales_cost" :label="$t('sales-cost')" />
      <el-table-column align="center" prop="profit" :label="$t('profit')" />
      <template #append>

    <el-table :data="summaryTable" class="width-full summaryTable" stripe border :span-method="arraySpanMethod" max-height="250">
              <el-table-column align="center" prop="id" :label="$t('id')" width="40"/>
              <el-table-column align="center" prop="item_name" :label="$t('item-name')"  width="450"/>
              <el-table-column align="center" prop="invoice_number" :label="$t('invoice-number')"/>
              <el-table-column align="center" prop="invoice_date" :label="$t('invoice-date')"/>
              <el-table-column align="center" prop="sales_quantity" :label="$t('sales-quantity')"/>
              <el-table-column align="center" prop="sales_value" :label="$t('sales-value')" />
              <el-table-column align="center" prop="sales_cost" :label="$t('sales-cost')" />
              <el-table-column align="center" prop="profit" :label="$t('profit')" />
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
          item_number: '',
          item_name: '2000 - صنف تجميعي',
          invoice_number: '',
          invoice_date: '',
          sales_quantity: '',
          sales_value: '',
          sales_cost: '',
          profit: '',
        },
        {
          id: '11',
          item_number: '',
          item_name: '2000 - صنف تجميعي',
          invoice_number: '',
          invoice_date: '',
          sales_quantity: '',
          sales_value: '',
          sales_cost: '',
          profit: '',
        },
        {
          id: '11',
          item_number: '',
          item_name: '2000 - صنف تجميعي',
          invoice_number: '',
          invoice_date: '',
          sales_quantity: '',
          sales_value: '',
          sales_cost: '',
          profit: '',
        },
       
      ],
      summaryTable : [
        {
          id: this.$t('total'),
          item_number: '',
          item_name: '',
          invoice_number: '',
          invoice_date: '',
          sales_quantity: '',
          sales_value: '',
          sales_cost: '',
          profit: '',
        },
        {
          id: '-',
          item_number: '-',
          item_name: '-',
          invoice_number: '-',
          invoice_date: '-',
          sales_quantity: '-',
          sales_value: '-',
          sales_cost: '-',
          profit: '-',
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