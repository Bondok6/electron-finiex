<template>
  <el-container class="container ma-4 mt-0 mb-0 invoice-table">
    <el-table
      :data="tableData"
      style="width: 100%"
      stripe
      border
      max-height="250"
    >
      <el-table-column align="center" prop="id" :label="$t('id')" width="40" />

      <el-table-column align="center" prop="from_date" :label="$t('from-date')" />

      <el-table-column align="center" prop="to_date" :label="$t('to-date')" />

      <el-table-column 
        align="center" 
        prop="total_quantities" 
        :label="$t('total-quantities')" 
      />

      <el-table-column 
        align="center" 
        prop="total_cash_sales" 
        :label="$t('total-cash-sales')" 
      />

      <el-table-column 
        align="center" 
        prop="total_postponed_sales" 
        :label="$t('total-postponed-sales')" 
      />

      <el-table-column
        align="center"
        prop="total_sales_returns_cash"
        :label="$t('total-sales-returns-cash')"
      />

      <el-table-column
        align="center"
        prop="total_sales_returns_postponed"
        :label="$t('total-sales-returns-postponed')"
      />

      <el-table-column
        align="center"
        prop="net_cash_sales"
        :label="$t('net-cash-sales')"
      />

      <el-table-column
        align="center"
        prop="net_later_sales"
        :label="$t('net-later-sales')"
      />

      <el-table-column
        align="center"
        prop="total"
        :label="$t('total')"
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

          <el-table-column align="center" prop="from_date" :label="$t('from-date')" />

          <el-table-column align="center" prop="to_date" :label="$t('to-date')" />

          <el-table-column 
            align="center" 
            prop="total_quantities" 
            :label="$t('total-quantities')" 
          />

          <el-table-column 
            align="center" 
            prop="total_cash_sales" 
            :label="$t('total-cash-sales')"
          />

          <el-table-column 
            align="center" 
            prop="total_postponed_sales" 
            :label="$t('total-postponed-sales')" 
          />

          <el-table-column
            align="center"
            prop="total_sales_returns_cash"
            :label="$t('total-sales-returns-cash')"
          />

          <el-table-column
            align="center"
            prop="total_sales_returns_postponed"
            :label="$t('total-sales-returns-postponed')"
          />

          <el-table-column
            align="center"
            prop="net_cash_sales"
            :label="$t('net-cash-sales')"
          />

          <el-table-column
            align="center"
            prop="net_later_sales"
            :label="$t('net-later-sales')"
          />

          <el-table-column
            align="center"
            prop="total"
            :label="$t('total')"
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
          from_date: "10 / 10 / 2020",
          to_date: "10 / 10 / 2020",
          total_quantities: "100.00",
          total_cash_sales: "0",
          total_postponed_sales: "90.00",
          total_sales_returns_cash: "0",
          total_sales_returns_postponed: "500.00",
          net_cash_sales: "40.00",
          net_later_sales: "90.00",
          total: "100.00"
        },
        {
          id: "2",
          from_date: "10 / 10 / 2020",
          to_date: "10 / 10 / 2020",
          total_quantities: "100.00",
          total_cash_sales: "0",
          total_postponed_sales: "90.00",
          total_sales_returns_cash: "0",
          total_sales_returns_postponed: "500.00",
          net_cash_sales: "40.00",
          net_later_sales: "90.00",
          total: "100.00"
        },
        {
          id: "3",
          from_date: "10 / 10 / 2020",
          to_date: "10 / 10 / 2020",
          total_quantities: "100.00",
          total_cash_sales: "0",
          total_postponed_sales: "90.00",
          total_sales_returns_cash: "0",
          total_sales_returns_postponed: "500.00",
          net_cash_sales: "40.00",
          net_later_sales: "90.00",
          total: "100.00"
        },
      ],

      summaryTable: [
        {
          id: this.$t("total"),
          from_date: "10 / 10 / 2020",
          to_date: "10 / 10 / 2020",
          total_quantities: "100.00",
          total_cash_sales: "0",
          total_postponed_sales: "90.00",
          total_sales_returns_cash: "0",
          total_sales_returns_postponed: "500.00",
          net_cash_sales: "40.00",
          net_later_sales: "90.00",
          total: "100.00"
        },
        {
          id: "",
          from_date: "",
          to_date: "",
          total_quantities: "",
          total_cash_sales: "",
          total_postponed_sales: "",
          total_sales_returns_cash: "",
          total_sales_returns_postponed: "",
          net_cash_sales: "",
          net_later_sales: "",
          total: ""
        },
      ],
    };
  },

  methods: {
    arraySpanMethod({ rowIndex, columnIndex }) {
      if (rowIndex === 0) {
        if (columnIndex === 0) {
          return [1, 3];
        } else if (columnIndex > 0 && columnIndex < 3) {
          return [0, 0];
        }
      }
    },
  },
};
</script>