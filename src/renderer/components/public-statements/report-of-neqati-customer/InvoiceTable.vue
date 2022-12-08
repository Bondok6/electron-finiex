<template>
  <div class="container ma-4 mt-0 mb-0 invoice-table">
    <el-container>
      <el-table
        :data="tableData"
        style="width: 100%"
        stripe
        border
        max-height="250"
      >
        <el-table-column
          align="center"
          prop="id"
          :label="$t('id')"
          width="50"
        />
        <el-table-column
          align="center"
          prop="customer_name"
          :label="$t('client-name')"
          width="300"
        />
        <el-table-column
          align="center"
          prop="customer_phone_number"
          :label="$t('mobile-cust')"
        />
        <el-table-column
          align="center"
          prop="subscription_card_number"
          :label="$t('card-no-cust')"
        />
        <el-table-column
          align="center"
          prop="current_balance_amount"
          :label="$t('current-balance-amount')"
          width="200"
        />
        <el-table-column
          align="center"
          prop="current_balance_points"
          :label="$t('current-balance-points')"
          width="200"
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
            <el-table-column
              align="center"
              prop="id"
              :label="$t('id')"
              width="50"
            />
            <el-table-column
              align="center"
              prop="customer_name"
              :label="$t('client-name')"
              width="300"
            />
            <el-table-column
              align="center"
              prop="customer_phone_number"
              :label="$t('mobile-cust')"
            />
            <el-table-column
              align="center"
              prop="subscription_card_number"
              :label="$t('card-no-cust')"
            />
            <el-table-column
              align="center"
              prop="current_balance_amount"
              :label="$t('current-balance-amount')"
              width="200"
            />
            <el-table-column
              align="center"
              prop="current_balance_points"
              :label="$t('current-balance-points')"
              width="200"
            />
          </el-table>
        </template>
      </el-table>
    </el-container>
  </div>
</template>


<script>
export default {
  name: "invoice",

  data: function () {
    return {
      tableData: [
        {
          id: "1",
          customer_name: " ",
          customer_phone_number: " ",
          subscription_card_number: " ",
          current_balance_amount: " ",
          current_balance_points: " ",
        },
        {
          id: "2",
          customer_name: " ",
          customer_phone_number: " ",
          subscription_card_number: " ",
          current_balance_amount: " ",
          current_balance_points: " ",
        },

        {
          id: "3",
          customer_name: " ",
          customer_phone_number: " ",
          subscription_card_number: " ",
          current_balance_amount: " ",
          current_balance_points: " ",
        },

        {
          id: "4",
          customer_name: " ",
          customer_phone_number: " ",
          subscription_card_number: " ",
          current_balance_amount: " ",
          current_balance_points: " ",
        },
      ],
      totalAmount: [
        {
          id: this.$t("total"),
          customer_name: " ",
          customer_phone_number: " ",
          subscription_card_number: " ",
          current_balance_amount: "12 ",
          current_balance_points: "12 ",
        },
        {
          id: "-",
          customer_name: " ",
          customer_phone_number: " ",
          subscription_card_number: " ",
          current_balance_amount: " ",
          current_balance_points: " ",
        },
      ],
    };
  },
  methods: {
    arraySpanMethod({ row, column, rowIndex, columnIndex }) {
      if (rowIndex === 0) {
        if (columnIndex === 0) {
          return [1, 4];
        } else if (columnIndex < 4) {
          return [0, 0];
        }
      }
    },
  },
};
</script>
<




