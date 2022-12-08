<template>
  <el-container class="container ma-4 mt-0 mb-0 invoice-table">
    <el-table :data="tableData" style="width: 100%" stripe border max-height="250">
      <el-table-column align="center" prop="from_date" :label="$t('from-date')" />
      <el-table-column align="center" prop="to_date" :label="$t('to-date')" />
      <el-table-column align="center" prop="total_quantity" :label="$t('total-quantities')" />
      <el-table-column align="center" prop="total_cash_purchases" :label="$t('total-cash-purchases')" />
      <el-table-column align="center" prop="total_cash_purchases_returns" :label="$t('total-return-on-cash-purchases')" />
      <el-table-column align="center" prop="total_later_purchases_returns" :label="$t('total-return-on-future-purchases')" />
      <el-table-column align="center" prop="net_cash_purchases" :label="$t('net-cash-purchases')" />
      <el-table-column align="center" prop="net_later_purchases" :label="$t('net-future-purchases')" />
      <el-table-column align="center" prop="total" :label="$t('total')" />
      <template #append>
    <el-table :data="summaryTable" class="width-full summaryTable" stripe border :span-method="arraySpanMethod" max-height="250">
            <el-table-column align="center" prop="from_date" :label="$t('from-date')" />
            <el-table-column align="center" prop="to_date" :label="$t('to-date')" />
            <el-table-column align="center" prop="total_quantity" :label="$t('total-quantities')" />
            <el-table-column align="center" prop="total_cash_purchases" :label="$t('total-cash-purchases')" />
            <el-table-column align="center" prop="total_cash_purchases_returns" :label="$t('total-return-on-cash-purchases')" />
            <el-table-column align="center" prop="total_later_purchases_returns" :label="$t('total-return-on-future-purchases')" />
            <el-table-column align="center" prop="net_cash_purchases" :label="$t('net-cash-purchases')" />
            <el-table-column align="center" prop="net_later_purchases" :label="$t('net-future-purchases')" />
            <el-table-column align="center" prop="total" :label="$t('total')" />
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
          from_date: '2014-04-18',
          to_date: '2014-09-26',
          total_quantity: '20',
          total_cash_purchases: '320',
          total_cash_purchases_returns: '120',
          total_later_purchases_returns: '211',
          net_cash_purchases: '22',
          net_later_purchases: '444',
          total: '642.00',
        },
        {
          from_date: '2014-04-18',
          to_date: '2014-09-26',
          total_quantity: '20',
          total_cash_purchases: '320',
          total_cash_purchases_returns: '120',
          total_later_purchases_returns: '211',
          net_cash_purchases: '22',
          net_later_purchases: '444',
          total: '642.00',
        },
        {
          from_date: '2014-04-18',
          to_date: '2014-09-26',
          total_quantity: '20',
          total_cash_purchases: '320',
          total_cash_purchases_returns: '120',
          total_later_purchases_returns: '211',
          net_cash_purchases: '22',
          net_later_purchases: '444',
          total: '642.00',
        },
      ],
      summaryTable : [
        {
          from_date: this.$t('total'),
          to_date: '',
          total_quantity: '',
          total_cash_purchases: '',
          total_cash_purchases_returns: '',
          total_later_purchases_returns: '',
          net_cash_purchases: '',
          net_later_purchases: '',
          total: '',
        },
        {
          from_date: '-',
          to_date: '-',
          total_quantity: '-',
          total_cash_purchases: '-',
          total_cash_purchases_returns: '-',
          total_later_purchases_returns: '-',
          net_cash_purchases: '-',
          net_later_purchases: '-',
          total: '-',
        },
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
  },
};
</script>