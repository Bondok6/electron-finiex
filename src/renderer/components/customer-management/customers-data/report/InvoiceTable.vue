<template>
  <el-container class="container ma-4 mt-0 mb-0 invoice-table pt-great">
    <el-table
      :data="tableData"
      style="width: 100%"
      stripe
      border
      max-height="500"
    >
      <el-table-column align="center" prop="from_date" :label="$t('from-date')">
        <template slot-scope="scope">
          <el-input
            ref="from_date"
            size="small"
            style="text-align: center"
            v-model="scope.row.from_date"
          ></el-input>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="to_date" :label="$t('to-date')">
        <template slot-scope="scope">
          <el-input
            size="small"
            style="text-align: center"
            v-model="scope.row.to_date"
          ></el-input>
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        prop="total_quantities"
        :label="$t('total-quantities')"
      >
        <template slot-scope="scope">
          <el-input
            size="small"
            style="text-align: center"
            v-model="scope.row.total_quantities"
          ></el-input>
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        prop="total_cash_sales"
        :label="$t('total-cash-sales')"
      >
        <template slot-scope="scope">
          <el-input
            size="small"
            style="text-align: center"
            v-model="scope.row.total_cash_sales"
          ></el-input>
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        prop="total_forword_sales"
        :label="$t('total-forward-sales')"
      >
        <template slot-scope="scope">
          <el-input
            size="small"
            style="text-align: center"
            v-model="scope.row.total_forword_sales"
          ></el-input>
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        prop="total_cash_sales_return"
        :label="$t('total-cash-sales-return')"
      >
        <template slot-scope="scope">
          <el-input
            size="small"
            style="text-align: center"
            v-model="scope.row.total_cash_sales_return"
          ></el-input>
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        prop="total_forword_sales_return"
        :label="$t('total-forward-sales-return')"
      >
        <template slot-scope="scope">
          <el-input
            size="small"
            style="text-align: center"
            v-model="scope.row.total_forword_sales_return"
          ></el-input>
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        prop="net_cash_sales"
        :label="$t('net-cash-sales')"
      >
        <template slot-scope="scope">
          <el-input
            size="small"
            style="text-align: center"
            v-model="scope.row.net_cash_sales"
          ></el-input>
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        prop="net_later_sales"
        :label="$t('net-later-sales')"
      >
        <template slot-scope="scope">
          <el-input
            size="small"
            style="text-align: center"
            v-model="scope.row.net_later_sales"
          ></el-input>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="total" :label="$t('total')">
        <template slot-scope="scope">
          <el-input
            size="small"
            style="text-align: center"
            v-model="scope.row.total"
            @keyup.enter.native="newRow()"
          ></el-input>
        </template>
      </el-table-column>
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
            prop="total_cash_sales"
            :label="$t('total-cash-sales')"
          />

          <el-table-column
            align="center"
            prop="total_forword_sales"
            :label="$t('total-forward-sales')"
          />
          <el-table-column
            align="center"
            prop="total_cash_sales_return"
            :label="$t('total-cash-sales-return')"
          />

          <el-table-column
            align="center"
            prop="total_forword_sales_return"
            :label="$t('total-forward-sales-return')"
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

          <el-table-column align="center" prop="total" :label="$t('total')" />
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
          from_date: "",
          to_date: "",
          total_quantities: "",
          total_cash_sales: "",
          total_forword_sales: "",
          total_cash_sales_return: "",
          total_forword_sales_return: "",
          net_cash_sales: "",
          net_later_sales: "",
          total: "",
        },
      ],
      totalAmount: [
        {
          from_date: this.$t("total"),
          to_date: "",
          total_quantities: "",
          total_cash_sales: "",
          total_forword_sales: "",
          total_cash_sales_return: "",
          total_forword_sales_return: "",
          net_cash_sales: "",
          net_later_sales: "",
          total: "",
        },
        {
          from_date: "-",
          to_date: "",
          total_quantities: "",
          total_cash_sales: "",
          total_forword_sales: "",
          total_cash_sales_return: "",
          total_forword_sales_return: "",
          net_cash_sales: "",
          net_later_sales: "",
          total: "",
        },
      ],
      appenedTableData: [
        {
          from_date: "",
          to_date: "",
          total_quantities: "",
          total_cash_sales: "",
          total_forword_sales: "",
          total_cash_sales_return: "",
          total_forword_sales_return: "",
          net_cash_sales: "",
          net_later_sales: "",
          total: "",
        },
      ],
    };
  },
  mounted() {
    setTimeout((x) => {
      this.$nextTick(() => this.$refs.from_date.focus());
    }, 1000);
  },

  methods: {
    newRow() {
      this.tableData.push({ ...this.appenedTableData });

      setTimeout((x) => {
        this.$nextTick(() => this.$refs.from_date.focus());
      }, 20);
    },
    arraySpanMethod({ row, column, rowIndex, columnIndex }) {
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
