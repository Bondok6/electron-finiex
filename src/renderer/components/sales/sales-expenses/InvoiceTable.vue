<template>
  <el-container class="container ma-4 mt-0 mb-0 invoice-table">
    <el-table :data="tableData" style="width: 100%" stripe border max-height="250">
      <el-table-column align="center" prop="id" :label="$t('id')" width="40" />
      <el-table-column align="center" prop="account_name_debit" :label="$t('account-name-debit')" width="250" />
      <el-table-column align="center" prop="account_name_credit" :label="$t('account-name-credit')" width="250" />
      <el-table-column align="center" prop="movemet_date" :label="$t('movement-date')" />
      <el-table-column align="center" prop="expense_amount" :label="$t('expense-amount')" />
      <el-table-column align="center" prop="tax_percentage" :label="$t('tax%')" />
      <el-table-column align="center" prop="tax_value" :label="$t('tax-value')" />
      <el-table-column align="center" prop="statement" :label="$t('statement')" width="200" />
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
          account_name_debit: 'كوع زاوية 225*250 كلاس 5  Rs25a',
          account_name_credit: 'كوع زاوية 225*250 كلاس 5  Rs25a',
          movement_date: '01 / 04 2021',
          expense_amount: '8',
          tax_percentage: '90.00',
          tax_value: '90.00',
          statement: '',
        },
        {
          id: 2,
          account_name_debit: 'كوع زاوية 225*250 كلاس 5  Rs25a',
          account_name_credit: 'كوع زاوية 225*250 كلاس 5  Rs25a',
          movement_date: '01 / 04 2021',
          expense_amount: '8',
          tax_percentage: '90.00',
          tax_value: '90.00',
          statement: '',
        },
        {
          id: 3,
          account_name_debit: 'كوع زاوية 225*250 كلاس 5  Rs25a',
          account_name_credit: 'كوع زاوية 225*250 كلاس 5  Rs25a',
          movement_date: '01 / 04 2021',
          expense_amount: '8',
          tax_percentage: '90.00',
          tax_value: '90.00',
          statement: '',
        },
      ]
    };
  },

  methods: {
  }
};
</script>