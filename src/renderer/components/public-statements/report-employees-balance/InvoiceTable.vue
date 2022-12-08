<template>
  <el-container class="container ma-4 mt-0 mb-0 invoice-table">
    <el-table
      :data="tableData"
      style="width: 100%"
      stripe
      border
      max-height="300"
    >
      <el-table-column align="center" prop="id" :label="$t('id')" width="50" />
      <el-table-column
        align="center"
        prop="employee_name"
        :label="$t('employee-name')"
        width="300"
      />
      <el-table-column
        align="center"
        prop="opening_balance"
        :label="$t('starting-balance')"
      />
      <el-table-column
        align="center"
        prop="debit"
        :label="$t('debit-amount')"
      />
      <el-table-column
        align="center"
        prop="credit"
        :label="$t('credit-amount')"
      />
      <el-table-column
        align="center"
        prop="current_balance"
        :label="$t('current-balance')"
      />
      <template #append>
        <el-table
          :data="totalAmount"
          class="width-full summaryTable"
          :span-method="arraySpanMethod"
          stripe
          border
          max-height="300"
        >
          <el-table-column
            align="center"
            prop="id"
            :label="$t('id')"
            width="50"
          />
          <el-table-column
            align="center"
            prop="employee_name"
            :label="$t('employee-name')"
            width="300"
          />
          <el-table-column
            align="center"
            prop="opening_balance"
            :label="$t('starting-balance')"
          />
          <el-table-column
            align="center"
            prop="debit"
            :label="$t('debit-amount')"
          />
          <el-table-column
            align="center"
            prop="credit"
            :label="$t('credit-amount')"
          />
          <el-table-column
            align="center"
            prop="current_balance"
            :label="$t('current-balance')"
          />
        </el-table>
      </template>
    </el-table>
  </el-container>
</template>


<script>
export default {
  data: function () {
    return {
      tableData: [
        {
          id: "1",
          employee_name: " ",
          opening_balance: " ",
          debit: " ",
          credit: " ",
          current_balance: " ",
        },
        {
          id: "2",
          account_number: " ",
          employee_name: " ",
          opening_balance: " ",
          debit: " ",
          credit: " ",
          current_balance: " ",
        },
        {
          id: "3",
          account_number: " ",
          employee_name: " ",
          opening_balance: " ",
          debit: " ",
          credit: " ",
          current_balance: " ",
        },
        {
          id: "4",
          account_number: " ",
          employee_name: " ",
          opening_balance: " ",
          debit: " ",
          credit: " ",
          current_balance: " ",
        },
      ],
      totalAmount: [
        {
          id: this.$t("total"),
          employee_name: " ",
          opening_balance: "0",
          debit: " 0",
          credit: "0 ",
          current_balance: "0 ",
        },
        {
          id: "-",
          account_number: " ",
          employee_name: " ",
          opening_balance: " ",
          debit: " ",
          credit: " ",
          current_balance: " ",
        },
      ],
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