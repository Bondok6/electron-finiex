<template>
  <el-container class="container ma-4 mt-0 mb-0 invoice-table">
    <el-table
      :data="tableData"
      :cell-style="cellBackground"
      style="width: 100%"
      stripe
      border
      max-height="250"
    >
      <el-table-column align="center" prop="id" :label="$t('id')" width="40" />

      <el-table-column 
        align="center" 
        prop="client_name" 
        :label="$t('client-name')" 
        width="400"
      />

      <el-table-column 
        align="center" 
        prop="mobile_number" 
        :label="$t('mobile-number-only')" 
      />

      <el-table-column 
        align="center" 
        prop="opening_balance" 
        :label="$t('Opening-balance')" 
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
        prop="current_balance"
        :label="$t('current-balance')"
      />

      <template #append>
        <el-table
          :data="summaryTable"
          class="width-full summaryTable"
          stripe
          border
          :span-method="arraySpanMethod"
          max-height="250"
        >
          <el-table-column align="center" prop="id" :label="$t('id')" width="40" />

          <el-table-column 
            align="center" 
            prop="client_name" 
            :label="$t('client-name')" 
            width="400"
          />

          <el-table-column 
            align="center" 
            prop="mobile_number" 
            :label="$t('mobile-number-only')" 
          />

          <el-table-column 
            align="center" 
            prop="opening_balance" 
            :label="$t('Opening-balance')" 
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
          client_name: "1000002020 المستقبل للمواد و البناء",
          mobile_number: "11111111",
          opening_balance: "100.00",
          debit_balance: "100.00",
          credit_balance: "106.00",
          current_balance: "103276.86",
        },
        {
          id: "2",
          client_name: "1000002020 المستقبل للمواد و البناء",
          mobile_number: "11111111",
          opening_balance: "100.00",
          debit_balance: "100.00",
          credit_balance: "106.00",
          current_balance: "103276.86",
        },
        {
          id: "3",
          client_name: "1000002020 المستقبل للمواد و البناء",
          mobile_number: "11111111",
          opening_balance: "100.00",
          debit_balance: "100.00",
          credit_balance: "106.00",
          current_balance: "-103276.86",
        },
      ],

      summaryTable: [
        {
          id: this.$t("total"),
          client_name: "1000002020 المستقبل للمواد و البناء",
          mobile_number: "11111111",
          opening_balance: "100.00",
          debit_balance: "100.00",
          credit_balance: "106.00",
          current_balance: "103276.86",
        },
        {
          id: "",
          client_name: "",
          mobile_number: "",
          opening_balance: "",
          debit_balance: "",
          credit_balance: "",
          current_balance: "",
        },
      ],
    };
  },

  methods: {
    arraySpanMethod({ rowIndex, columnIndex }) {
      if (rowIndex === 0) {
        if (columnIndex === 0) {
          return [1, 2];
        } else if (columnIndex > 0 && columnIndex < 2) {
          return [0, 0];
        }
      }
    },

    cellBackground({ row, column, rowIndex, columnIndex }) {
      const PERCENTAGE_COL = 6;
      const RED = '#FFA7A7';
      const YELLOW = '#FFFCA7';

      if (columnIndex == PERCENTAGE_COL) {
        const cellValue = Number(row.current_balance);
        if (cellValue >= 0) {
          return {
            background: RED
          };
        } 
        else {
          return {
            background: YELLOW
          };
        }
      }
    }
  },
};
</script>