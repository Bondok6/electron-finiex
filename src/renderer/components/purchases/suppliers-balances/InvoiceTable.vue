<template>
  <el-container class="container ma-4 mt-0 mb-0 invoice-table">
    <el-table
      :data="tableData"
      :cell-style="redBg"
      style="width: 100%"
      stripe
      border
      max-height="250"
    >
      <el-table-column align="center" prop="id" :label="$t('id')" :width="50" />
      <el-table-column
        align="center"
        prop="account_number"
        :label="$t('account-number')"
      />
      <el-table-column
        align="center"
        prop="supplier_name"
        :label="$t('supplier-name')"
      />
      <el-table-column
        align="center"
        prop="mobile_number"
        :label="$t('mobile-number')"
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
          :data="summaryTable"
          class="width-full summaryTable"
          stripe
          border
          :span-method="arraySpanMethod"
          max-height="250"
        >
          <el-table-column align="center" prop="id" :label="$t('id')" :width="50" />
          <el-table-column
            align="center"
            prop="account_number"
            :label="$t('account-number')"
          />
          <el-table-column
            align="center"
            prop="supplier_name"
            :label="$t('supplier-name')"
          />
          <el-table-column
            align="center"
            prop="mobile_number"
            :label="$t('mobile-number')"
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

  data: function() {
    return {
      tableData: [
        {
          id: 1,
          account_number: "1000230015",
          supplier_name: "مجموعة عبد المحسن الحكير القابضة",
          mobile_number: "+966 255556",
          opening_balance: "23225",
          debit_balance: "25542",
          credit_balance: "2555",
          current_balance: "40959"
        },
        {
          id: 1,
          account_number: "1000230015",
          supplier_name: "مجموعة عبد المحسن الحكير القابضة",
          mobile_number: "+966 255556",
          opening_balance: "23225",
          debit_balance: "25542",
          credit_balance: "2555",
          current_balance: "40959"
        },
        {
          id: 1,
          account_number: "1000230015",
          supplier_name: "مجموعة عبد المحسن الحكير القابضة",
          mobile_number: "+966 255556",
          opening_balance: "23225",
          debit_balance: "25542",
          credit_balance: "2555",
          current_balance: "40959"
        }
      ],
      summaryTable: [
        {
          id: this.$t("total"),
          account_number: "",
          supplier_name: "",
          mobile_number: "",
          opening_balance: "",
          debit_balance: "",
          credit_balance: "",
          current_balance: ""
        },
        {
          id: "",
          account_number: "-",
          supplier_name: "-",
          mobile_number: "-",
          opening_balance: "-",
          debit_balance: "-",
          credit_balance: "-",
          current_balance: "-"
        }
      ]
    };
  },
  methods: {
    arraySpanMethod({ row, column, rowIndex, columnIndex }) {
      if (rowIndex === 0) {
        if (columnIndex === 0) {
          return [1, 3];
        } else if (columnIndex > 0 && columnIndex < 3) {
          return [0, 0];
        }
      }
    },
    redBg({ row, column, rowIndex, columnIndex }) {
      if (columnIndex == 7) {
        if (rowIndex == 0 || rowIndex == 1) {
          return {
            background: "#FFA7A7"
          };
        } else {
          return {
            background: "#FFFCA7"
          };
        }
      }
    }
  }
};
</script>
