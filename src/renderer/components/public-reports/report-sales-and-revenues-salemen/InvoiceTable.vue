<template>
  <el-container class="container ma-4 mt-0 mb-0 invoice-table">
    <el-table :data="tableData" style="width: 100%" stripe border max-height="250">
      <el-table-column align="center" prop="id" :label="$t('id')" width="40"/>
      <el-table-column align="center" prop="delegate_name" :label="$t('delegate-name')" />
      <el-table-column align="center" prop="net_cash_sales" :label="$t('net-cash-sales')" />
      <el-table-column align="center" prop="net_later_sales" :label="$t('net-later-sales')"/>
      <el-table-column align="center" prop="later_sales" :label="$t('cash-and-later-sales')"/>
      <el-table-column align="center" prop="revenues" :label="$t('revenue-receipt-bonds')"/>
      <el-table-column align="center" prop="cash_sales" :label="$t('cash-sales-and-revenue')" />
      <el-table-column align="center" prop="net_commission" :label="$t('net-commission')" />
      <template #append>
    <el-table :data="summaryTable" class="width-full summaryTable" stripe border :span-method="arraySpanMethod" max-height="250">
              <el-table-column align="center" prop="id" :label="$t('id')" width="40"/>
              <el-table-column align="center" prop="delegate_name" :label="$t('delegate-name')" />
              <el-table-column align="center" prop="net_cash_sales" :label="$t('net-cash-sales')" />
              <el-table-column align="center" prop="net_later_sales" :label="$t('net-later-sales')"/>
              <el-table-column align="center" prop="later_sales" :label="$t('cash-and-later-sales')"/>
              <el-table-column align="center" prop="revenues" :label="$t('revenue-receipt-bonds')"/>
              <el-table-column align="center" prop="cash_sales" :label="$t('cash-sales-and-revenue')" />
              <el-table-column align="center" prop="net_commission" :label="$t('net-commission')" />
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
          delegate_name: '',
          net_cash_sales: '',
          net_later_sales: '',
          later_sales: '',
          revenues: '',
          cash_sales: '',
          net_commission: '',
        },
        {
          id: '11',
          delegate_name: '',
          net_cash_sales: '',
          net_later_sales: '',
          later_sales: '',
          revenues: '',
          cash_sales: '',
          net_commission: '',
       
        },
        {
          id: '11',
          delegate_name: '',
          net_cash_sales: '',
          net_later_sales: '',
          later_sales: '',
          revenues: '',
          cash_sales: '',
          net_commission: '',
         
        },
       
      ],
      summaryTable : [
        {
          id: this.$t('total'),
          delegate_name: '',
          net_cash_sales: '',
          net_later_sales: '',
          later_sales: '',
          revenues: '',
          cash_sales: '',
          net_commission: '',
         
        },
        {
          id: '-',
          delegate_name: '-',
          net_cash_sales: '-',
          net_later_sales: '-',
          later_sales: '-',
          revenues: '-',
          cash_sales: '-',
          net_commission: '-',
         
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