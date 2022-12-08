<template>
  <el-container class="container ma-4 mt-0 mb-0 invoice-table">
    <el-table
      :data="tableData"
      :cell-style="redBg"
      style="width: 100%"
      border
      stripe
      max-height="250"
    >
      <el-table-column align="center" prop="id" :label="$t('id')" width="40" />
      <el-table-column
        align="center"
        prop="supplier_name"
        :label="$t('supplier-name')"
        width="380"
      />
      <el-table-column
        align="center"
        prop="mobile_number_only"
        :label="$t('mobile-number-only')"
      />
      <el-table-column
        align="center"
        prop="Opening_balance"
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
          <el-table-column
            align="center"
            prop="id"
            ::label="$t('id')"
            width="40"
          />
          <el-table-column
            align="center"
            prop="supplier_name"
            :label="$t('supplier-name')"
            width="380"
          />
          <el-table-column
            align="center"
            prop="mobile_number_only"
            :label="$t('mobile-number-only')"
          />
          <el-table-column
            align="center"
            prop="Opening_balance"
            :label="$t('Opening_balance')"
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
          supplier_name: "1000230073       المستقبل لمواد والبناء",
          mobile_number_only: "",
          Opening_balance: "103,276.86",
          debit_balance: "0.00",
          credit_balance: "0.00",
          current_balance: "103,276.86",
        },
        {
          id: "2",
          supplier_name: "1000230073         مؤسسة مريم الشريف",
          mobile_number_only: "",
          Opening_balance: "68,290.45",
          debit_balance: "2,415.00",
          credit_balance: "0.00",
          current_balance: "70,705.45",
        },
        {
          id: "3",
          supplier_name: "1000230073         المستقبل لمواد والبناء",
          mobile_number_only: "",
          Opening_balance: "23,649.13",
          debit_balance: "12,960.50",
          credit_balance: "0.00",
          current_balance: "36.609.63-",
        },
      ],
      summaryTable: [
        {
          id: this.$t("total-only"),
          mobile_number_only: "3",
          Opening_balance: "282,178.11",
          debit_balance: "0",
          credit_balance: "230.00",
          current_balance: "0.00",
          
        },
        {
          id: '',
          mobile_number_only: "-",
          Opening_balance: "-",
          debit_balance: "-",
          credit_balance: "-",
          current_balance: "-",
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
    redBg({ row, column, rowIndex, columnIndex }) {
      if (rowIndex != 2) {
        if (columnIndex == 6) {
          return {
            background: "#FFA7A7",
          };
        }
      } else if (rowIndex == 2 && columnIndex == 6) {
        return {
          background: "#FFFCA7",
        };
      }
    },
  },
};
</script>