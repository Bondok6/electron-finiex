<template>
  <el-container class="container ma-4 mt-0 mb-0 invoice-table">
    <el-table :data="tableData" style="width: 100%" stripe border max-height="250">
      <el-table-column align="center" prop="id" :label="$t('id')" :width="50" />
      <el-table-column align="center" prop="item_name" :label="$t('item-name')" :width="350">
        <template>
          <span>35252025</span>
          {{' - ' + $t('item-name')}}
        </template>
      </el-table-column>
      <el-table-column align="center" prop="purchases_quantity" :label="$t('purchases-quantity')" />
      <el-table-column align="center" prop="purchases_value" :label="$t('purchase-value')" />
      <el-table-column align="center" prop="purchases_return_quantity" :label="$t('purchase-returns-quantity')" />
      <el-table-column align="center" prop="purchases_return_value" :label="$t('purchase-returns-value')" />
      <el-table-column align="center" prop="actual_purchases_quantity" :label="$t('actual-purchase-amount')" />
      <el-table-column align="center" prop="actual_purchases_value" :label="$t('actual-purchase-value')" />
      <template #append>
    <el-table :data="summaryTable" class="width-full summaryTable" stripe border :span-method="arraySpanMethod" max-height="250">
            <el-table-column align="center" prop="id" :label="$t('id')" :width="50" />
            <el-table-column align="center" prop="item_name" :label="$t('item-name')" :width="350" />
            <el-table-column align="center" prop="purchases_quantity" :label="$t('purchases-quantity')" />
            <el-table-column align="center" prop="purchases_value" :label="$t('purchase-value')" />
            <el-table-column align="center" prop="purchases_return_quantity" :label="$t('purchase-returns-quantity')" />
            <el-table-column align="center" prop="purchases_return_value" :label="$t('purchase-returns-value')" />
            <el-table-column align="center" prop="actual_purchases_quantity" :label="$t('actual-purchase-amount')" />
            <el-table-column align="center" prop="actual_purchases_value" :label="$t('actual-purchase-value')" />
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
          item_name: 'اسم الصنف',
          purchases_quantity: '320',
          purchases_value: '120',
          purchases_return_quantity: '211',
          purchases_return_value: '22',
          actual_purchases_quantity: '444',
          actual_purchases_value: '642.00',
        },
        {
          id: '1',
          item_name: 'اسم الصنف',
          purchases_quantity: '320',
          purchases_value: '120',
          purchases_return_quantity: '211',
          purchases_return_value: '22',
          actual_purchases_quantity: '444',
          actual_purchases_value: '642.00',
        },
      ],
      summaryTable : [
        {
          id: this.$t('total'),
          item_name: '',
          purchases_quantity: '',
          purchases_value: '',
          purchases_return_quantity: '',
          purchases_return_value: '',
          actual_purchases_quantity: '',
          actual_purchases_value: '',
        },
        {
          id: '-',
          item_name: '-',
          purchases_quantity: '-',
          purchases_value: '-',
          purchases_return_quantity: '-',
          purchases_return_value: '-',
          actual_purchases_quantity: '-',
          actual_purchases_value: '-',
        },
      ]
    };
  },
  methods : {
    arraySpanMethod({ row, column, rowIndex, columnIndex }) {
      if (rowIndex == 0) {
        if (columnIndex == 0) {
          return [1, 2];
        } else if (columnIndex > 0 && columnIndex < 2) {
          return [0, 0];
        }
      }
    }
  },
};
</script>