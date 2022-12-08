<template>
  <el-container class="container ma-4 mt-0 mb-0 invoice-table">
    <el-table :data="tableData" style="width: 100%" border max-height="500">
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
        prop="opening_balance"
        :label="$t('opening-balance')"
      />
      <el-table-column
        align="center"
        prop="less_30_days"
        :label="$t('less-than-30-days')"
      />
      <el-table-column
        align="center"
        prop="to_60"
        :label="$t('between-30-to-60-days')"
      />
      <el-table-column
        align="center"
        prop="to_90"
        :label="$t('between-60-to-90-days')"
      />
      <el-table-column
        align="center"
        prop="to_120"
        :label="$t('between-90-to-120-days')"
      />
      <el-table-column
        align="center"
        prop="more_120_days"
        :label="$t('greater-than-120-days')"
      />
      <el-table-column
        align="center"
        prop="total_amount"
        :label="$t('total-amount')"
      />
      <el-table-column
        align="center"
        prop="last_payment"
        :label="$t('value-of-last-payment')"
      />
      <el-table-column align="center" prop="date" :label="$t('bond-date')" />
      <el-table-column
        align="center"
        prop="number"
        :label="$t('bond-number')"
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
            prop="opening_balance"
            :label="$t('opening-balance')"
          />
          <el-table-column
            align="center"
            prop="less_30_days"
            :label="$t('less-than-30-days')"
          />
          <el-table-column
            align="center"
            prop="to_60"
            :label="$t('between-30-to-60-days')"
          />
          <el-table-column
            align="center"
            prop="to_90"
            :label="$t('between-60-to-90-days')"
          />
          <el-table-column
            align="center"
            prop="to_120"
            :label="$t('between-90-to-120-days')"
          />
          <el-table-column
            align="center"
            prop="more_120_days"
            :label="$t('greater-than-120-days')"
          />
          <el-table-column
            align="center"
            prop="total_amount"
            :label="$t('total-amount')"
          />
          <el-table-column
            align="center"
            prop="last_payment"
            :label="$t('value-of-last-payment')"
          />
          <el-table-column
            align="center"
            prop="date"
            :label="$t('bond-date')"
          />
          <el-table-column
            align="center"
            prop="number"
            :label="$t('bond-number')"
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
          id: 1,
          account_number: "",
          client_name: "11",
          opening_balance: "",
          less_30_days: "",
          to_30: "",
          to_60: "",
          to_90: "",
          to_120: "",
          more_120_days: "",
          total_amount: "",
          last_payment: "",
          date: "",
          number: "",
        },
        {
          id: 2,
          account_number: "",
          client_name: "11",
          opening_balance: "",
          less_30_days: "",
          to_30: "",
          to_60: "",
          to_90: "",
          to_120: "",
          more_120_days: "",
          total_amount: "",
          last_payment: "",
          date: "",
          number: "",
        },
        {
          id: 3,
          account_number: "",
          client_name: "11",
          opening_balance: "",
          less_30_days: "",
          to_30: "",
          to_60: "",
          to_90: "",
          to_120: "",
          more_120_days: "",
          total_amount: "",
          last_payment: "",
          date: "",
          number: "",
        },
      ],
      totalAmount: [
        {
          id: this.$t("total"),
          account_number: "",
          client_name: "",
          opening_balance: "",
          less_30_days: "",
          to_30: "",
          to_60: "",
          to_90: "",
          to_120: "",
          more_120_days: "",
          total_amount: "",
          last_payment: "",
          date: "",
          number: "",
        },
        {
          id: "-",
          account_number: "",
          client_name: "",
          opening_balance: "",
          less_30_days: "",
          to_30: "",
          to_60: "",
          to_90: "",
          to_120: "",
          more_120_days: "",
          total_amount: "",
          last_payment: "",
          date: "",
          number: "",
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
