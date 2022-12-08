<template>
  <el-container class="container ma-4 mt-0 mb-0 invoice-table">
    <el-table :data="tableData" style="width: 100%" stripe border  max-height="250">
      <el-table-column align="center" prop="item_number" width="40" :label="$t('id')" />
      <el-table-column align="center" prop="bond_number" :label="$t('bond-number')" />
      <el-table-column align="center" prop="bond_date" :label="$t('bond-date')" />
      <el-table-column align="center" prop="box_bank" :label="$t('box-bank')" />
      <el-table-column align="center" prop="account_number" :label="$t('account-number')" />
      <el-table-column align="center" prop="account_name" :label="$t('account-name')" />
      <el-table-column align="center" prop="payment_method" :label="$t('payment-method')" />
      <el-table-column align="center" prop="statement" :label="$t('statement')" />
      <el-table-column align="center" prop="tax_value" :label="$t('tax-value')" />
      <el-table-column align="center" prop="bond_amount" :label="$t('bond-amount')" />
      <template #append>

    <el-table :data="summaryTable" class="width-full summaryTable sixthSummaryCell" stripe border :span-method="arraySpanMethod" max-height="250">

      <el-table-column align="center" prop="item_number" width="40" :label="$t('id')" />
      <el-table-column align="center" prop="bond_number" :label="$t('bond-number')" />
      <el-table-column align="center" prop="bond_date" :label="$t('bond-date')" />
      <el-table-column align="center" prop="box_bank" :label="$t('box-bank')" />
      <el-table-column align="center" prop="account_number" :label="$t('account-number')" />
      <el-table-column align="center" prop="account_name" :label="$t('account-name')" />
      <el-table-column align="center" prop="payment_method" :label="$t('payment-method')" />
      <el-table-column align="center" prop="statement" :label="$t('statement')" />
      <el-table-column align="center" prop="tax_value" :label="$t('tax-value')" />
      <el-table-column align="center" prop="bond_amount" :label="$t('bond-amount')" />
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

          item_number: '1',
          bond_number: '2154254128',
          bond_date: '10/10/2020',
          box_bank : 'الكل',
          account_number : '120202',
          account_name : 'مدين',
          payment_method : 'اجل',
          statement : 'موجل',
          tax_value : '200202',
          bond_amount  : '20000'

        },
        {

          item_number: '2',
          bond_number: '2154254128',
          bond_date: '10/10/2020',
          box_bank : 'الكل',
          account_number : '120202',
          account_name : 'مدين',
          payment_method : 'اجل',
          statement : 'موجل',
          tax_value : '200202',
          bond_amount  : '20000'

        },

      ],
      summaryTable : [
       {

          item_number: '2',
          bond_number: '2154254128',
          bond_date: '10/10/2020',
          box_bank : 'الكل',
          account_number : '120202',
          account_name : 'الاجمالى',
          payment_method : 'اجل',
          statement : 'موجل',
          tax_value : '200202',
          bond_amount  : '20000'

        },
      {
          item_number: '-',
          bond_number: '-',
          bond_date: '-',
          box_bank : '-',
          account_number : '-',
          account_name : '-',
          payment_method : '-',
          statement : '-',
          tax_value : '-',
          bond_amount  : '-',
      }
      ]
    };
  },

  methods: {
    arraySpanMethod({ row, column, rowIndex, columnIndex }) {
      if (rowIndex === 0) {
        if (columnIndex === 5) {
          return [1, 1];
        }
      //   else if (columnIndex == 9) {
      //         return [0, 0];
      //  }

      }
    },
  }
};
</script>
