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

      <el-table-column
        align="center"
        prop="item_name"
        :label="$t('item-name')"
        width="300"
      />

      <el-table-column
        align="center"
        prop="sales_quantity"
        :label="$t('sales-quantity')"
      />

      <el-table-column
        align="center"
        prop="sales_value"
        :label="$t('sales-value')"
      />

      <el-table-column
        align="center"
        prop="sales_returns_quantity"
        :label="$t('sales-returns-quantity')"
      />

      <el-table-column
        align="center"
        prop="sales_returns_value"
        :label="$t('sales-returns-value')"
      />

      <el-table-column
        align="center"
        prop="actual_sales_quantity"
        :label="$t('actual-sales-quantity')"
      />

      <el-table-column
        align="center"
        prop="actual_sales_value"
        :label="$t('actual-sales-value')"
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
            prop="item_name"
            :label="$t('item-name')"
            width="300"
          />

          <el-table-column
            align="center"
            prop="sales_quantity"
            :label="$t('sales-quantity')"
          />

          <el-table-column
            align="center"
            prop="sales_value"
            :label="$t('sales-value')"
          />

          <el-table-column
            align="center"
            prop="sales_returns_quantity"
            :label="$t('sales-returns-quantity')"
          />

          <el-table-column
            align="center"
            prop="sales_returns_value"
            :label="$t('sales-returns-value')"
          />

          <el-table-column
            align="center"
            prop="actual_sales_quantity"
            :label="$t('actual-sales-quantity')"
          />

          <el-table-column
            align="center"
            prop="actual_sales_value"
            :label="$t('actual-sales-value')"
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
          item_name: "مجموعة ثلاث قطع دكتايل R250x",
          sales_quantity: "1",
          sales_value: "100.00",
          sales_returns_quantity: "0",
          sales_returns_value: "90.00",
          actual_sales_quantity: "0",
          actual_sales_value: "500.00",
        },
        {
          id: "2",
          item_name: "مجموعة ثلاث قطع دكتايل R250x",
          sales_quantity: "1",
          sales_value: "100.00",
          sales_returns_quantity: "0",
          sales_returns_value: "90.00",
          actual_sales_quantity: "0",
          actual_sales_value: "500.00",
        },
        {
          id: "2",
          item_name: "مجموعة ثلاث قطع دكتايل R250x",
          sales_quantity: "1",
          sales_value: "100.00",
          sales_returns_quantity: "0",
          sales_returns_value: "90.00",
          actual_sales_quantity: "0",
          actual_sales_value: "500.00",
        },
      ],

      summaryTable: [
        {
          id: this.$t("total"),
          item_name: "مجموعة ثلاث قطع دكتايل R250x",
          sales_quantity: "1",
          sales_value: "100.00",
          sales_returns_quantity: "0",
          sales_returns_value: "90.00",
          actual_sales_quantity: "0",
          actual_sales_value: "500.00",
        },
        {
          id: "",
          item_name: "",
          sales_quantity: "",
          sales_value: "",
          sales_returns_quantity: "",
          sales_returns_value: "",
          actual_sales_quantity: "",
          actual_sales_value: "",
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