<template>
  <el-container class="container ma-4 mt-0 mb-0 invoice-table">
    <el-table 
      :data="tableData" 
      style="width: 100%" 
      stripe 
      border  
      max-height="250"
    >

      <el-table-column 
        align="center" 
        prop="id"  
        :label="$t('id')" 
        width="40"
      />
      <el-table-column 
        align="center" 
        prop="sales_invoice_number" 
        :label="$t('sales-invoice-number')" 
      />
      <el-table-column 
        align="center" 
        prop="sales_invoice_date"  
        :label="$t('sales-invoice-date')" 
      />
      <el-table-column 
        align="center" 
        prop="total_cash_amount"  
        :label="$t('total-cash-amount')" 
      />
      <el-table-column 
        align="center" 
        prop="total_network_amount"  
        :label="$t('total-network-amount')" 
      />
      <el-table-column 
        align="center" 
        prop="total_replacement_amount"  
        :label="$t('total-replacement-amount')" 
      />
      <el-table-column 
        align="center" 
        prop="total_qitafi_amount"  
        :label="$t('qitafi-total-discount')" 
      />
      <el-table-column 
        align="center" 
        prop="total_customer_remaining"  
        :label="$t('customer-total-leftover')" 
      />
      <el-table-column 
        align="center" 
        prop="total_refund_amount"  
        :label="$t('total-refund-amount')" 
      />
      <el-table-column 
        align="center" 
        prop="total_amount"  
        :label="$t('total-amount')" 
      />

      <!---Total--->
      <template #append>
        <el-table
          :data="summaryTable"
          class="width-full summaryTable"
          stripe
          border
          :span-method="arraySpanMethod"
          max-height="250"
        >
         
      <el-table-column 
        align="center" 
        prop="id" 
        :label="$t('id')"  
        width="40"
      />
      <el-table-column 
        align="center" 
        prop="sales_invoice_number" 
        :label="$t('sales-invoice-number')" 
      />
      <el-table-column 
        align="center" 
        prop="sales_invoice_date"  
        :label="$t('sales-invoice-date')" 
      />
      <el-table-column 
        align="center" 
        prop="total_cash_amount"  
        :label="$t('total-cash-amount')" 
      />
      <el-table-column 
        align="center" 
        prop="total_network_amount"  
        :label="$t('total-network-amount')" 
      />
      <el-table-column 
        align="center" 
        prop="total_replacement_amount"  
        :label="$t('total-replacement-amount')" 
      />
      <el-table-column 
        align="center" 
        prop="total_qitafi_amount"  
        :label="$t('qitafi-total-discount')" 
      />
      <el-table-column 
        align="center" 
        prop="total_customer_remaining"  
        :label="$t('customer-total-leftover')" 
      />
      <el-table-column 
        align="center" 
        prop="total_refund_amount"  
        :label="$t('total-refund-amount')" 
      />
      <el-table-column 
        align="center" 
        prop="total_amount"  
        :label="$t('total-amount')" 
      />
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
          sales_invoice_number: ' ',
          sales_invoice_date: ' ',
          total_cash_amount: '',
          total_network_amount: '',
          total_replacement_amount: '',
          total_qitafi_amount: '',
          total_customer_remaining: '',
          total_refund_amount: '',
          total_amount: '',
     
        },
        {
          id: '2',
          sales_invoice_number: ' ',
          sales_invoice_date: ' ',
          total_cash_amount: '',
          total_network_amount: '',
          total_replacement_amount: '',
          total_qitafi_amount: '',
          total_customer_remaining: '',
          total_refund_amount: '',
          total_amount: '',
        },
        {
          id: '3',
          sales_invoice_number: ' ',
          sales_invoice_date: ' ',
          total_cash_amount: '',
          total_network_amount: '',
          total_replacement_amount: '',
          total_qitafi_amount: '',
          total_customer_remaining: '',
          total_refund_amount: '',
          total_amount: '',
        },
        {
          id: '4',
          sales_invoice_number: ' ',
          sales_invoice_date: ' ',
          total_cash_amount: '',
          total_network_amount: '',
          total_replacement_amount: '',
          total_qitafi_amount: '',
          total_customer_remaining: '',
          total_refund_amount: '',
          total_amount: '',
        },
      ],

      // To
      summaryTable: [
        {
          id: this.$t("total"),
          sales_invoice_number: '',
          sales_invoice_date: '',
          total_cash_amount: '',
          total_network_amount: '',
          total_replacement_amount: '',
          total_qitafi_amount: '',
          total_customer_remaining: '',
          total_refund_amount: '',
          total_amount: '',
        },
        {
          id: "-",
          sales_invoice_number: ' ',
          sales_invoice_date: ' ',
          total_cash_amount: ' ',
          total_network_amount: ' ',
          total_replacement_amount: ' ',
          total_qitafi_amount: ' ',
          total_customer_remaining: ' ',
          total_refund_amount: ' ',
          total_amount: ' ',
        },
      ],
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
  },
 
};
</script>