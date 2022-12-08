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
        prop="check_number"
        :label="$t('check-number')"
      />
      <el-table-column align="center" prop="date" :label="$t('bond-date')" />
      <el-table-column align="center" prop="box_bank" :label="$t('box-bank')" />
      <el-table-column
        align="center"
        prop="account_name"
        :label="$t('account-name')"
      />
      <el-table-column
        align="center"
        prop="statement"
        :label="$t('statement')"
      />
      <el-table-column align="center" prop="amount" :label="$t('amount')" />
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
            width="40"
          />
          <el-table-column
            align="center"
            prop="check_number"
            :label="$t('check-number')"
          />
          <el-table-column
            align="center"
            prop="date"
            :label="$t('bond-date')"
          />
          <el-table-column
            align="center"
            prop="box_bank"
            :label="$t('box-bank')"
          />
          <el-table-column
            align="center"
            prop="account_name"
            :label="$t('account-name')"
          />
          <el-table-column
            align="center"
            prop="statement"
            :label="$t('statement')"
          />
          <el-table-column align="center" prop="amount" :label="$t('amount')" />
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
          check_number: " ",
          date: " ",
          box_bank: " ",
          account_name: " ",
          statement: " ",
          amount: " ",
        },
        {
          id: "2",
          check_number: " ",
          date: " ",
          box_bank: " ",
          account_name: " ",
          statement: " ",
          amount: " ",
        },
        {
          id: "3",
          check_number: " ",
          date: " ",
          box_bank: " ",
          account_name: " ",
          statement: " ",
          amount: " ",
        },
        {
          id: "4",
          check_number: " ",
          date: " ",
          box_bank: " ",
          account_name: " ",
          statement: " ",
          amount: " ",
        },
      ],
      totalAmount: [
        {
          id: this.$t("total"),
          check_number: " ",
          date: " ",
          box_bank: " ",
          account_name: " ",
          statement: " ",
          amount: "555",
        },
        {
          id: "-",
          check_number: " ",
          date: " ",
          box_bank: " ",
          account_name: " ",
          statement: " ",
          amount: " ",
        },
      ],
    };
  },

  methods: {
    arraySpanMethod({ row, column, rowIndex, columnIndex }) {
      if (rowIndex === 0) {
        if (columnIndex === 0) {
          return [1, 6];
        } else if (columnIndex < 6) {
          return [0, 0];
        }
      }
    },
  },
};
</script>