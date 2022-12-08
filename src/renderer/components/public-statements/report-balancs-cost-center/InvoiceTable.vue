<template>
  <el-container class="container ma-4 mt-0 mb-0 invoice-table">
    <el-table
      :data="tableData"
      style="width: 100%"
      stripe
      border
      max-height="500"
    >
      <el-table-column align="center" prop="id" :label="$t('id')" width="100" />
      <el-table-column
        align="center"
        prop="cost_number"
        :label="$t('cost-center-number')"
      />
      <el-table-column
        align="center"
        prop="cost_name"
        :label="$t('cost-center-name')"
        width="300"
      />
      <el-table-column
        align="center"
        prop="previous_balance"
        :label="$t('prev-balance')"
      />
      <el-table-column
        align="center"
        prop="debit_balance"
        :label="$t('(debit)-amount')"
      />
      <el-table-column
        align="center"
        prop="credit_balance"
        :label="$t('(credit)-amount')"
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
          stripe
          border
          :span-method="arraySpanMethod"
          max-height="250"
        >
          <el-table-column align="center" prop="id" label="م" width="100" />
          <el-table-column
            align="center"
            prop="cost_number"
            :label="$t('cost-center-number')"
          />
          <el-table-column
            align="center"
            prop="cost_name"
            :label="$t('cost-center-name')"
            width="300"
          />
          <el-table-column
            align="center"
            prop="previous_balance"
            :label="$t('prev-balance')"
          />
          <el-table-column
            align="center"
            prop="debit_balance"
            :label="$t('(debit)-amount')"
          />
          <el-table-column
            align="center"
            prop="credit_balance"
            :label="$t('(credit)-amount')"
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
  name: "invoice",

  data: function () {
    return {
      tableData: [
        {
          id: "1",
          cost_number: " ",
          cost_name: " ",
          previous_balance: " ",
          debit_balance: " ",
          credit_balance: " ",
          current_balance: " ",
        },
        {
          id: "2",
          cost_number: " ",
          cost_name: " ",
          previous_balance: " ",
          debit_balance: " ",
          credit_balance: " ",
          current_balance: " ",
        },
        {
          id: "3",
          cost_number: " ",
          cost_name: " ",
          previous_balance: " ",
          debit_balance: " ",
          credit_balance: " ",
          current_balance: " ",
        },
        {
          id: "4",
          cost_number: " ",
          cost_name: " ",
          previous_balance: " ",
          debit_balance: " ",
          credit_balance: " ",
          current_balance: " ",
        },
      ],
      totalAmount: [
        {
          id: this.$t("total"),
          cost_number: " ",
          cost_name: " ",
          previous_balance: " 15",
          debit_balance: "11 ",
          credit_balance: "11 ",
          current_balance: " 12",
        },
        {
          id: "-",
          cost_number: " ",
          cost_name: " ",
          previous_balance: " ",
          debit_balance: " ",
          credit_balance: " ",
          current_balance: " ",
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