<template>
  <el-container class="container ma-4 mt-0 mb-0 invoice-table">
    <el-table
      :data="tableData"
      style="width: 100%"
      stripe
      border
      max-height="500"
    >
      <el-table-column
        align="center"
        prop="no"
        :label="$t('registeration-number')"
      />
      <el-table-column
        align="center"
        prop="bond_number"
        :label="$t('bond-number')"
      />
      <el-table-column
        align="center"
        prop="bond_date"
        :label="$t('bond-date')"
      />
      <el-table-column
        align="center"
        prop="bond_type"
        :label="$t('bond-type')"
      />
      <el-table-column
        align="center"
        prop="account_name"
        :label="$t('account-name')"
      />
      <el-table-column align="center" prop="debit" :label="$t('debitor')" />
      <el-table-column align="center" prop="credit" :label="$t('creditor')" />
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
            prop="no"
            :label="$t('registeration-number')"
          />
          <el-table-column
            align="center"
            prop="bond_number"
            :label="$t('bond-number')"
          />
          <el-table-column
            align="center"
            prop="bond_date"
            :label="$t('bond-date')"
          />
          <el-table-column
            align="center"
            prop="bond_type"
            :label="$t('bond-type')"
          />
          <el-table-column
            align="center"
            prop="account_name"
            :label="$t('account-name')"
          />
          <el-table-column align="center" prop="debit" :label="$t('debitor')" />
          <el-table-column
            align="center"
            prop="credit"
            :label="$t('creditor')"
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
          no: "1",
          bond_number: "",
          bond_date: "",
          bond_type: "",
          account_name: " ",

          debit: " ",
          credit: " ",
          balance: " ",
        },
        {
          no: "2",
          bond_number: "",
          bond_date: "",
          bond_type: "",
          account_name: " ",

          debit: " ",
          credit: " ",
          balance: " ",
        },
        {
          no: "3",
          bond_number: "",
          bond_date: "",
          bond_type: "",
          account_name: " ",

          debit: " ",
          credit: " ",
          balance: " ",
        },
        {
          no: "4",
          bond_number: "",
          bond_date: "",
          bond_type: "",
          account_name: " ",

          debit: " ",
          credit: " ",
          balance: " ",
        },
      ],
      totalAmount: [
        {
          no: this.$t("total"),
          bond_number: "",
          bond_date: "",
          bond_type: "",
          account_name: " ",

          debit: " 1",
          credit: " 1",
          balance: " 1",
        },
        {
          no: "-",
          bond_number: "",
          bond_date: "",
          bond_type: "",
          account_name: " ",

          debit: " ",
          balance: " ",
        },
      ],
    };
  },

  methods: {
    arraySpanMethod({ row, column, rowIndex, columnIndex }) {
      if (rowIndex === 0) {
        if (columnIndex === 0) {
          return [1, 5];
        } else if (columnIndex < 5) {
          return [0, 0];
        }
      }
    },
  },
};
</script>