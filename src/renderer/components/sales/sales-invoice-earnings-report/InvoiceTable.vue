<template>
  <el-container class="container ma-4 mt-0 mb-0 invoice-table">
    <el-table
      :data="tableData"
      :cell-style="cellBackground"
      style="width: 100%"
      stripe
      border
      max-height="250"
    >
      <el-table-column align="center" prop="id" :label="$t('id')" width="40" />

      <el-table-column 
        align="center" 
        prop="invoice_number" 
        :label="$t('invoice-number')" 
      />

      <el-table-column 
        align="center" 
        prop="invoice_date" 
        :label="$t('invoice-date')" 
      />

      <el-table-column 
        align="center" 
        prop="client_name" 
        :label="$t('client-name')" 
      />

      <el-table-column 
        align="center" 
        prop="invoice_type" 
        :label="$t('invoice-type')" 
      />

      <el-table-column 
        align="center" 
        prop="sum" 
        :label="$t('sum')" 
      />

      <el-table-column
        align="center"
        prop="discount"
        :label="$t('discount')"
      />

      <el-table-column
        align="center"
        prop="tax"
        :label="$t('tax')"
      />

      <el-table-column
        align="center"
        prop="total"
        :label="$t('total')"
      />

      <el-table-column
        align="center"
        prop="sales_cost"
        :label="$t('sales-cost')"
      />

      <el-table-column
        align="center"
        prop="profit"
        :label="$t('profit')"
      />

      <el-table-column
        align="center"
        prop="percentage"
        label="%"
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

          <el-table-column 
            align="center" 
            prop="invoice_number" 
            :label="$t('invoice-number')" 
          />

          <el-table-column 
            align="center" 
            prop="invoice_date" 
            :label="$t('invoice-date')" 
          />

          <el-table-column 
            align="center" 
            prop="client_name" 
            :label="$t('client-name')" 
          />

          <el-table-column 
            align="center" 
            prop="invoice_type" 
            :label="$t('invoice-type')" 
          />

          <el-table-column 
            align="center" 
            prop="sum" 
            :label="$t('sum')" 
          />

          <el-table-column
            align="center"
            prop="discount"
            :label="$t('discount')"
          />

          <el-table-column
            align="center"
            prop="tax"
            :label="$t('tax')"
          />

          <el-table-column
            align="center"
            prop="total"
            :label="$t('total')"
          />

          <el-table-column
            align="center"
            prop="sales_cost"
            :label="$t('sales-cost')"
          />

          <el-table-column
            align="center"
            prop="profit"
            :label="$t('profit')"
          />

          <el-table-column
            align="center"
            prop="percentage"
            label="%"
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
          invoice_number: "1",
          invoice_date: "10 / 10 / 2020",
          client_name: "عميل نقدي",
          invoice_type: "نقدي",
          sum: "106.00",
          discount: "0.00",
          tax: "15.90",
          total: "121.00",
          sales_cost: "828.00",
          profit: "828.00",
          percentage: "81.4",
        },
        {
          id: "2",
          invoice_number: "2",
          invoice_date: "10 / 10 / 2020",
          client_name: "عميل نقدي",
          invoice_type: "نقدي",
          sum: "106.00",
          discount: "0.00",
          tax: "15.90",
          total: "121.00",
          sales_cost: "828.00",
          profit: "828.00",
          percentage: "100",
        },
        {
          id: "3",
          invoice_number: "3",
          invoice_date: "10 / 10 / 2020",
          client_name: "عميل نقدي",
          invoice_type: "نقدي",
          sum: "106.00",
          discount: "0.00",
          tax: "15.90",
          total: "121.00",
          sales_cost: "828.00",
          profit: "828.00",
          percentage: "-46.2",
        },
      ],

      summaryTable: [
        {
          id: this.$t("total"),
          invoice_number: "1",
          invoice_date: "10 / 10 / 2020",
          client_name: "عميل نقدي",
          invoice_type: "نقدي",
          sum: "106.00",
          discount: "0.00",
          tax: "15.90",
          total: "121.00",
          sales_cost: "828.00",
          profit: "828.00",
          percentage: "50.1",
        },
        {
          id: "",
          invoice_number: "",
          invoice_date: "",
          client_name: "",
          invoice_type: "",
          sum: "",
          discount: "",
          tax: "",
          total: "",
          sales_cost: "",
          profit: "",
          percentage: "",
        },
      ],
    };
  },

  methods: {
    arraySpanMethod({ rowIndex, columnIndex }) {
      if (rowIndex === 0) {
        if (columnIndex === 0) {
          return [1, 5];
        } else if (columnIndex > 0 && columnIndex < 5) {
          return [0, 0];
        }
      }
    },

    cellBackground({ row, column, rowIndex, columnIndex }) {
      const PERCENTAGE_COL = 11;
      const RED = '#FFA7A7';
      const GREEN = '#34E8098A';

      if (columnIndex == PERCENTAGE_COL) {
        const cellValue = Number(row.percentage);
        if (cellValue >= 0) {
          return {
            background: GREEN
          };
        } 
        else {
          return {
            background: RED
          };
        }
      }
    }
  },
};
</script>