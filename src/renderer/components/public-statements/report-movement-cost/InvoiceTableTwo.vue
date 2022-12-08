<template>
  <el-container class="container ma-4 mt-0 mb-0 invoice-table">
    <el-table
      :data="tableData"
      style="width: 100%"
      stripe
      border
      max-height="500"
    >
      <el-table-column align="center" prop="id" :label="$t('id')" width="40" />
      <el-table-column
        align="center"
        prop="account_name"
        :label="$t('account-name')"
      />
      <el-table-column
        align="center"
        prop="prev_balance"
        :label="$t('prev-balance')"
      />
      <el-table-column
        align="center"
        prop="debit_amount"
        :label="$t('(debit)-amount')"
      />
      <el-table-column
        align="center"
        prop="credit_amount"
        :label="$t('(credit)-amount')"
      />
      <el-table-column align="center" prop="balance" :label="$t('balance')" />
      <template #append>
        <el-table
          :data="totalAmount"
          class="width-full summaryTable"
          :span-method="arraySpanMethod"
          stripe
          border
        >
          <el-table-column
            align="center"
            prop="id"
            :label="$t('id')"
            width="40"
          />
          <el-table-column
            align="center"
            prop="account_name"
            :label="$t('account-name')"
          />
          <el-table-column
            align="center"
            prop="prev_balance"
            :label="$t('prev-balance')"
          />
          <el-table-column
            align="center"
            prop="debit_amount"
            :label="$t('(debit)-amount')"
          />
          <el-table-column
            align="center"
            prop="credit_amount"
            :label="$t('(credit)-amount')"
          />
          <el-table-column
            align="center"
            prop="balance"
            :label="$t('balance')"
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
          id: "1",
          account_name: " ",
          prev_balance: "",
          debit_amount: "",
          credit_amount: "",
          balance: "",
        },
        {
          id: "2",
          account_name: " ",
          prev_balance: "",
          debit_amount: "",
          credit_amount: "",
          balance: "",
        },
        {
          id: "3",
          account_name: " ",
          prev_balance: "",
          debit_amount: "",
          credit_amount: "",
          balance: "",
        },
        {
          id: "4",
          account_name: " ",
          prev_balance: "",
          debit_amount: "",
          credit_amount: "",
          balance: "",
        },
      ],
      totalAmount: [
        {
          id: this.$t("total"),
          account_name: " ",
          prev_balance: "1",
          debit_amount: "1",
          credit_amount: "1",
          balance: "1",
        },
        {
          id: "-",
          account_name: " ",
          prev_balance: "",
          debit_amount: "",
          credit_amount: "",
          balance: "",
        },
      ],
    };
  },

  methods: {
    arraySpanMethod({ row, column, rowIndex, columnIndex }) {
      if (rowIndex === 0) {
        if (columnIndex === 0) {
          return [1, 2];
        } else if (columnIndex < 2) {
          return [0, 0];
        }
      }
    },
  },
};
</script>