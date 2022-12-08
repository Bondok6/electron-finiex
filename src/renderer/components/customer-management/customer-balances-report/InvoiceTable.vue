<template>
  <el-container class="container ma-4 mt-0 mb-0 invoice-table">
    <el-table
      :data="tableData"
      style="width: 100%"
      :cell-class-name="CellClassName"
      border
      max-height="500"
    >
      <el-table-column align="center" prop="id" :label="$t('id')" width="40" />
      <el-table-column
        align="center"
        prop="account_number"
        :label="$t('account-number')"
      />
      <el-table-column
        align="center"
        prop="client_name"
        :label="$t('client-name')"
      />
      <el-table-column
        align="center"
        prop="mobile_number_only"
        :label="$t('mobile-number-only')"
      />
      <el-table-column
        align="center"
        prop="opening_balance"
        :label="$t('opening-balance')"
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
            prop="account_number"
            :label="$t('account-number')"
          />
          <el-table-column
            align="center"
            prop="client_name"
            :label="$t('client-name')"
          />
          <el-table-column
            align="center"
            prop="mobile_number_only"
            :label="$t('mobile-number-only')"
          />
          <el-table-column
            align="center"
            prop="opening_balance"
            :label="$t('opening-balance')"
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
          account_number: "44",
          client_name: "2014-02-08",
          mobile_number_only: "بدون",
          opening_balance: "-",
          debit_balance: "211",
          credit_balance: "211",
          current_balance: "211",
        },
        {
          id: "2",
          account_number: "44",
          client_name: "2014-02-08",
          mobile_number_only: "بدون",
          opening_balance: "-",
          debit_balance: "211",
          credit_balance: "211",
          current_balance: "211",
        },
        {
          id: "3",
          account_number: "44",
          client_name: "2014-02-08",
          mobile_number_only: "بدون",
          opening_balance: "-",
          debit_balance: "211",
          credit_balance: "211",
          current_balance: "211-",
        },
      ],
      totalAmount: [
        {
          id: this.$t("total"),
          account_number: "",
          client_name: "",
          mobile_number_only: "",
          opening_balance: "-",
          debit_balance: "211",
          credit_balance: "211",
          current_balance: "211",
        },
        {
          id: "-",
          account_number: "",
          client_name: "",
          mobile_number_only: "",
          opening_balance: "",
          debit_balance: "",
          credit_balance: "",
          current_balance: "",
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
    CellClassName({ row, column, rowIndex, columnIndex }) {
      if (rowIndex === 0 || rowIndex === 1) {
        if (columnIndex === 7) {
          return "warning";
        }
      } else if (rowIndex === 2) {
        if (columnIndex === 7) {
          return "success";
        }
      }
    },
  },
};
</script>

<style>
.warning {
  background: rgb(245, 106, 106);
}
.success {
  background: rgb(248, 248, 162);
}
</style>