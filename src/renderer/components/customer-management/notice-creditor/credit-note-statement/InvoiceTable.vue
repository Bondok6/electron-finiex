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
      <el-table-column align="center" prop="box_bank" :label="$t('box-bank')" />
      <el-table-column
        align="center"
        prop="client_name"
        :label="$t('client-name')"
      />
      <el-table-column
        align="center"
        prop="payment_method"
        :label="$t('payment-method')"
      />
      <el-table-column
        align="center"
        prop="statement"
        :label="$t('statement')"
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
          :data="totalAmount"
          class="width-full summaryTable"
          :span-method="arraySpanMethod"
          stripe
          border
          max-height="500"
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
            prop="box_bank"
            :label="$t('box-bank')"
          />
          <el-table-column
            align="center"
            prop="client_name"
            :label="$t('client-name')"
          />
          <el-table-column
            align="center"
            prop="payment_method"
            :label="$t('payment-method')"
          />
          <el-table-column
            align="center"
            prop="statement"
            :label="$t('statement')"
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
          bond_number: "44-1200",
          bond_date: "2014-02-08",
          box_bank: "211",
          client_name: "211",
          payment_method: "211",
          statement: "211",
          tax_value: "211",
          bond_amount: "211",
        },
        {
          id: "2",
          bond_number: "44-1200",
          bond_date: "2014-02-08",
          box_bank: "211",
          client_name: "211",
          payment_method: "211",
          statement: "211",
          tax_value: "211",
          bond_amount: "211",
        },
        {
          id: "3",
          bond_number: "44-1200",
          bond_date: "2014-02-08",
          box_bank: "211",
          client_name: "211",
          payment_method: "211",
          statement: "211",
          tax_value: "211",
          bond_amount: "211",
        },
      ],
      totalAmount: [
        {
          id: this.$t("total"),
          bond_number: "",
          bond_date: "",
          box_bank: "",
          client_name: "",
          payment_method: "211",
          statement: "211",
          tax_value: "211",
          bond_amount: "211",
        },
        {
          id: "-",
          bond_number: "",
          bond_date: "",
          box_bank: "",
          client_name: "",
          payment_method: "",
          statement: "",
          tax_value: "",
          bond_amount: "",
        },
      ],
    };
  },
  methods: {
    arraySpanMethod({ row, column, rowIndex, columnIndex }) {
      if (rowIndex === 0) {
        if (columnIndex === 0) {
          return [1, 5];
        } else if (columnIndex > 0 && columnIndex < 5) {
          return [0, 0];
        }
      }
    },
  },
};
</script>
