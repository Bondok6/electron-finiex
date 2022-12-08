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
        prop="box_name"
        :label="$t('name-box-bank')"
      />
      <el-table-column
        align="center"
        prop="opening_balance"
        :label="$t('starting-balance')"
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
          max-height="500"
        >
          <el-table-column
            align="center"
            prop="id"
            :label="$t('id')"
            width="100"
          />
          <el-table-column
            align="center"
            prop="box_name"
            :label="$t('name-box-bank')"
          />
          <el-table-column
            align="center"
            prop="opening_balance"
            :label="$t('starting-balance')"
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
  data: function () {
    return {
      tableData: [
        {
          id: "1",
          box_name: " ",
          opening_balance: " ",
          debit_balance: " ",
          credit_balance: " ",
          current_balance: " ",
        },
        {
          id: "2",
          box_name: " ",
          opening_balance: " ",
          debit_balance: " ",
          credit_balance: " ",
          current_balance: " ",
        },
        {
          id: "3",
          box_name: " ",
          opening_balance: " ",
          debit_balance: " ",
          credit_balance: " ",
          current_balance: " ",
        },
        {
          id: "4",
          box_name: " ",
          opening_balance: " ",
          debit_balance: " ",
          credit_balance: " ",
          current_balance: " ",
        },
      ],
      totalAmount: [
        {
          id: this.$t("total"),
          box_name: " ",
          opening_balance: "20 ",
          debit_balance: "20 ",
          credit_balance: " 20",
          current_balance: " 20",
        },
        {
          id: "-",
          box_name: " ",
          opening_balance: " ",
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
          return [1, 2];
        } else if (columnIndex < 2) {
          return [0, 0];
        }
      }
    },
  },
};
</script>