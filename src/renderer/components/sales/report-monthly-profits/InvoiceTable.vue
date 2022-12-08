<template>
  <el-container class="container ma-4 mt-0 mb-0 invoice-table">
    <el-table
      :data="tableData"
      style="width: 100%"
      stripe
      border
      max-height="250"
    >
      <el-table-column 
        align="center" 
        prop="from_date" 
        :label="$t('from-date')" 
      />

      <el-table-column 
        align="center" 
        prop="to_date" 
        :label="$t('to-date')" 
      />

      <el-table-column 
        align="center" 
        prop="total_quantities" 
        :label="$t('total-quantities')" 
      />

      <el-table-column 
        align="center" 
        prop="total_net_sales" 
        :label="$t('total-net-sales')" 
      />

      <el-table-column 
        align="center" 
        prop="total_cost_sales" 
        :label="$t('total-cost-sales')" 
      />

      <el-table-column
        align="center"
        prop="total_returns"
        :label="$t('total-returns')"
      />

      <el-table-column
        align="center"
        prop="total_expenses"
        :label="$t('total-expenses')"
      />

      <el-table-column
        align="center"
        prop="total_net_profit"
        :label="$t('total-net-profit')"
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
            prop="from_date" 
            :label="$t('from-date')" 
          />

          <el-table-column 
            align="center" 
            prop="to_date" 
            :label="$t('to-date')" 
          />

          <el-table-column 
            align="center" 
            prop="total_quantities" 
            :label="$t('total-quantities')" 
          />

          <el-table-column 
            align="center" 
            prop="total_net_sales" 
            :label="$t('total-net-sales')" 
          />

          <el-table-column 
            align="center" 
            prop="total_cost_sales" 
            :label="$t('total-cost-sales')" 
          />

          <el-table-column
            align="center"
            prop="total_returns"
            :label="$t('total-returns')"
          />

          <el-table-column
            align="center"
            prop="total_expenses"
            :label="$t('total-expenses')"
          />

          <el-table-column
            align="center"
            prop="total_net_profit"
            :label="$t('total-net-profit')"
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
          from_date: "10 / 10 / 2020",
          to_date: "10 / 10 / 2020",
          total_quantities: "60.00",
          total_net_sales: "113,12",
          total_cost_sales: "106.00",
          total_returns: "0.00",
          total_expenses: "00.00",
          total_net_profit: "212,591.00",
        },
        {
          from_date: "10 / 10 / 2020",
          to_date: "10 / 10 / 2020",
          total_quantities: "60.00",
          total_net_sales: "113,12",
          total_cost_sales: "106.00",
          total_returns: "0.00",
          total_expenses: "00.00",
          total_net_profit: "212,591.00",
        },
        {
          from_date: "10 / 10 / 2020",
          to_date: "10 / 10 / 2020",
          total_quantities: "60.00",
          total_net_sales: "113,12",
          total_cost_sales: "106.00",
          total_returns: "0.00",
          total_expenses: "00.00",
          total_net_profit: "212,591.00",
        },
      ],

      summaryTable: [
        {
          from_date: this.$t("total"),
          to_date: "10 / 10 / 2020",
          total_quantities: "60.00",
          total_net_sales: "113,12",
          total_cost_sales: "106.00",
          total_returns: "0.00",
          total_expenses: "00.00",
          total_net_profit: "212,591.00",
        },
        {
          from_date: "",
          to_date: "",
          total_quantities: "",
          total_net_sales: "",
          total_cost_sales: "",
          total_returns: "",
          total_expenses: "",
          total_net_profit: "",
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
  },
};
</script>