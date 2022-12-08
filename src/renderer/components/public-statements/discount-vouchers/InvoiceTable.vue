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
        prop="account_name"
        :label="$t('account-name')"
        width="300"
      />
      <el-table-column
        align="center"
        prop="tax_value"
        :label="$t('tax-value')"
      />
      <el-table-column
        align="center"
        prop="bond_amount"
        :label="$t('bond-amount')"
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
            :label="$t('id')"
            width="40"
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
            prop="account_name"
            :label="$t('account-name')"
            width="300"
          />
          <el-table-column
            align="center"
            prop="tax_value"
            :label="$t('tax-value')"
          />
          <el-table-column
            align="center"
            prop="bond_amount"
            :label="$t('bond-amount')"
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
          bond_number: " ",
          bond_date: " ",
          account_name: " ",
          tax_value: " ",
          bond_amount: " ",
        },
        {
          id: "2",
          bond_number: " ",
          bond_date: " ",
          account_name: " ",
          tax_value: " ",
          bond_amount: " ",
        },
        {
          id: "3",
          bond_number: " ",
          bond_date: " ",
          account_name: " ",
          tax_value: " ",
          bond_amount: " ",
        },
        {
          id: "4",
          bond_number: " ",
          bond_date: " ",
          account_name: " ",
          tax_value: " ",
          bond_amount: " ",
        },
      ],

      summaryTable: [
        {
          id: this.$t("total"),
          bond_number: " ",
          bond_date: " ",
          account_name: " ",
          tax_value: " ",
          bond_amount: " ",
        },
        {
          id: "-",
          bond_number: " ",
          bond_date: " ",
          account_name: " ",
          tax_value: "10",
          bond_amount: "10",
        },
      ],
    };
  },

  methods: {
    arraySpanMethod({ row, column, rowIndex, columnIndex }) {
      if (rowIndex === 0) {
        if (columnIndex === 0) {
          return [1, 4];
        } else if (columnIndex > 0 && columnIndex < 4) {
          return [0, 0];
        }
      }
    },
  },
};
</script>