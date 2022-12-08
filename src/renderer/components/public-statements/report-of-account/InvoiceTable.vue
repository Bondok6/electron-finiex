<template>
  <el-container class="container ma-4 mt-0 mb-0 invoice-table">
    <el-table
      :data="tableData"
      style="width: 100%"
      stripe
      border
      max-height="250"
    >
      <el-table-column align="center" prop="id" :label="$t('id')" width="50 " />
      <el-table-column
        align="center"
        prop="from_date"
        :label="$t('from-date')"
      />
      <el-table-column align="center" prop="to_date" :label="$t('to-date')" />
      <el-table-column
        align="center"
        prop="debit_balance"
        :label="$t('debit-balance')"
      />
      <el-table-column
        align="center"
        prop="credit_balance"
        :label="$t('credit-balance')"
      />
      <el-table-column
        align="center"
        prop="month_balance"
        :label="$t('month-balance')"
      />
      <el-table-column
        align="center"
        prop="total_balance"
        :label="$t('total-balance')"
      />
      <template #append>
        <el-table
          :data="totalAmount"
          class="width-full summaryTable"
          :span-method="arraySpanMethod"
          stripe
          border
          max-height="250"
        >
          <el-table-column
            align="center"
            prop="id"
            :label="$t('id')"
            width="50"
          />
          <el-table-column
            align="center"
            prop="from_date"
            :label="$t('from-date')"
          />
          <el-table-column
            align="center"
            prop="to_date"
            :label="$t('to-date')"
          />
          <el-table-column
            align="center"
            prop="debit_balance"
            :label="$t('debit-balance')"
          />
          <el-table-column
            align="center"
            prop="credit_balance"
            :label="$t('credit-balance')"
          />
          <el-table-column
            align="center"
            prop="month_balance"
            :label="$t('month-balance')"
          />
          <el-table-column
            align="center"
            prop="total_balance"
            :label="$t('total-balance')"
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
          from_date: " ",
          to_date: " ",
          debit_balance: " ",
          credit_balance: " ",
          month_balance: " ",
          total_balance: " ",
        },
        {
          id: "2",
          from_date: " ",
          to_date: " ",
          debit_balance: " ",
          credit_balance: " ",
          month_balance: " ",
          total_balance: " ",
        },
        {
          id: "3",
          from_date: " ",
          to_date: " ",
          debit_balance: " ",
          credit_balance: " ",
          month_balance: " ",
          total_balance: " ",
        },
        {
          id: "4",
          from_date: " ",
          to_date: " ",
          debit_balance: " ",
          credit_balance: " ",
          month_balance: " ",
          total_balance: " ",
        },
      ],
      totalAmount: [
        {
          id: this.$t("total"),
          from_date: " ",
          to_date: " ",
          debit_balance: "12",
          credit_balance: "12",
          month_balance: "12",
          total_balance: "12",
        },
        {
          id: "-",
          from_date: " ",
          to_date: " ",
          debit_balance: " ",
          credit_balance: " ",
          month_balance: " ",
          total_balance: " ",
        },
      ],
    };
  },

  methods: {
    arraySpanMethod({ row, column, rowIndex, columnIndex }) {
      if (rowIndex === 0) {
        if (columnIndex === 0) {
          return [1, 3];
        } else if (columnIndex < 3) {
          return [0, 0];
        }
      }
    },
  },
};
</script>