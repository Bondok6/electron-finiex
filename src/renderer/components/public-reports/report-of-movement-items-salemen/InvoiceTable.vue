<template>
  <el-container class="container ma-4 mt-0 mb-0 invoice-table">
    <el-table :data="tableData" style="width: 100%" stripe border max-height="250">
      <el-table-column align="center" prop="item_name" :label="$t('item-name')"  width="450"/>
      <el-table-column align="center" prop="exchange_quantity" :label="$t('exchange-quantity')"/>
      <el-table-column align="center" prop="supply_quantity" :label="$t('supply-quantity')"/>
      <el-table-column align="center" prop="sales_quantity" :label="$t('sales-quantity')"/>
      <el-table-column align="center" prop="returns_quantity" :label="$t('returns-amount')" />
      <el-table-column align="center" prop="remaining_quantity" :label="$t('remaining-quantity')" />
      <el-table-column align="center" prop="remaining_value" :label="$t('remaining-value')" />
      <template #append>
        <el-table :data="summaryTable" class="width-full summaryTable" stripe border :span-method="arraySpanMethod" max-height="250">
              <el-table-column align="center" prop="item_name" :label="$t('item-name')"  width="450"/>
              <el-table-column align="center" prop="exchange_quantity" :label="$t('exchange-quantity')"/>
              <el-table-column align="center" prop="supply_quantity" :label="$t('supply-quantity')"/>
              <el-table-column align="center" prop="sales_quantity" :label="$t('sales-quantity')"/>
              <el-table-column align="center" prop="returns_quantity" :label="$t('returns-amount')" />
              <el-table-column align="center" prop="remaining_quantity" :label="$t('remaining-quantity')" />
              <el-table-column align="center" prop="remaining_value" :label="$t('remaining-value')" />
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
          item_name: '2000 - اسم الصنف',
          exchange_quantity: '',
          supply_quantity: '',
          sales_quantity: '',
          returns_quantity: '',
          remaining_quantity: '',
          remaining_value: '',
        },
        {
          item_name: '2000 - اسم الصنف',
          exchange_quantity: '',
          supply_quantity: '',
          sales_quantity: '',
          returns_quantity: '',
          remaining_quantity: '',
          remaining_value: '',
        },
        {
          item_name: '2000 - اسم الصنف',
          exchange_quantity: '',
          supply_quantity: '',
          sales_quantity: '',
          returns_quantity: '',
          remaining_quantity: '',
          remaining_value: '',
        },
      ],
      summaryTable : [
        {
          item_name: this.$t('total'),
          exchange_quantity: '',
          supply_quantity: '',
          sales_quantity: '',
          returns_quantity: '',
          remaining_quantity: '',
          remaining_value: '',
        },
        {
          item_name: '-',
          exchange_quantity: '-',
          supply_quantity: '-',
          sales_quantity: '-',
          returns_quantity: '-',
          remaining_quantity: '-',
          remaining_value: '-',
        },
      ]
    };
  },

  methods: {
    arraySpanMethod({ row, column, rowIndex, columnIndex }) {
      if (rowIndex === 0) {
        if (columnIndex === 0) {
          return [1, 1];
        } else if (columnIndex > 0 && columnIndex < 1) {
          return [0, 0];
        }
      }
    },
  },
};
</script>