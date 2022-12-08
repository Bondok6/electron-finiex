<template>
  <el-container class="container ma-4 mt-0 mb-0 invoice-table">
    <el-table
      :data="tableData"
      style="width: 100%"
      show-summary
      :summary-method="getSummaries"
      stripe
      border
      max-height="250"
    >
      <el-table-column align="center" prop="item_number" width="40" :label="$t('id')" />
      <el-table-column align="center" prop="bond_number" :label="$t('bond-number')" />
      <el-table-column align="center" prop="bond_date" :label="$t('bond-date')" />
      <el-table-column align="center" prop="box_bank" :label="$t('box-bank')" />
      <el-table-column
        align="center"
        prop="account_number"
        :label="$t('account-number')"
      />
      <el-table-column align="center" prop="account_name" :label="$t('account-name')" />
      <el-table-column align="center" prop="pay_by" :label="$t('payment-method')" />
      <el-table-column align="center" prop="data" :label="$t('statement')" />
      <el-table-column align="center" prop="tax_value" :label="$t('tax-value')" />
      <el-table-column align="center" prop="bond_amount" :label="$t('bond-amount')" />
    </el-table>
  </el-container>
</template>

<script>
export default {
  name: "invoice",

  data: function() {
    return {
      tableData: [
        {
          item_number: "1",
          bond_number: "1",
          bond_date: "03/03/2020",
          box_bank: "مركز 1",
          account_number: "20586300",
          account_name: "عاجل",
          pay_by: "نقدا",
          data: "موجل",
          tax_value: "10000",
          bond_amount: "1500000"
        },
        {
          item_number: "2",
          bond_number: "2",
          bond_date: "03/03/2020",
          box_bank: "مركز 1",
          account_number: "20586300",
          account_name: "عاجل",
          pay_by: "نقدا",
          data: "موجل",
          tax_value: "10000",
          bond_amount: "1500000"
        },
        {
          item_number: "3",
          bond_number: "3",
          bond_date: "03/03/2020",
          box_bank: "مركز 1",
          account_number: "20586300",
          account_name: "عاجل",
          pay_by: "نقدا",
          data: "موجل",
          tax_value: "10000",
          bond_amount: "1500000"
        },

        {
          item_number: "4",
          bond_number: "4",
          bond_date: "03/03/2020",
          box_bank: "مركز 1",
          account_number: "20586300",
          account_name: "عاجل",
          pay_by: "نقدا",
          data: "موجل",
          tax_value: "10000",
          bond_amount: "1500000"
        },
        {
          item_number: "5",
          bond_number: "5",
          bond_date: "03/03/2020",
          box_bank: "مركز 1",
          account_number: "20586300",
          account_name: "عاجل",
          pay_by: "نقدا",
          data: "موجل",
          tax_value: "10000",
          bond_amount: "1500000"
        }
      ]
    };
  },

  methods: {
    getSummaries(param) {
      const { columns, data } = param;
      const sums = [];
      columns.forEach((column, index) => {
        if (index === 5) {
          sums[index] = 'الاجمالى';
            return;
        }
        // start if
        if(index === 6 || index === 7 || index === 8 || index === 9){
        const values = data.map(item => Number(item[column.property]));
        if (!values.every(value => isNaN(value))) {
          sums[index] = values.reduce((prev, curr) => {
            const value = Number(curr);
            if (!isNaN(value)) {
              return prev + curr;
            } else {
              return prev;
            }
          }, 0);
        } else {
          sums[index] = "";
        }
        }
        // end if

      });

      return sums;
    }
  }
};
</script>
