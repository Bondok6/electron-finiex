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
        prop="receipt_order_number"
        :label="$t('delivery-order-number')"
      />
      <el-table-column
        align="center"
        prop="receipt_order_date"
        :label="$t('delivery-order-date')"
      />
      <el-table-column
        align="center"
        prop="production_order_number"
        :label="$t('production-order-number')"
      />
      <el-table-column
        align="center"
        prop="customer_name"
        :label="$t('client-name')"
      />
      <el-table-column
        align="center"
        prop="operation_number"
        :label="$t('batch-number')"
      />
      <el-table-column
        align="center"
        prop="total_quantity"
        :label="$t('total-quantities')"
      />
      <el-table-column
        align="center"
        prop="total_cost"
        :label="$t('net-cost')"
      />
      <el-table-column
        align="center"
        prop="operation"
        :label="$t('operating-price')"
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
            prop="receipt_order_number"
            :label="$t('delivery-order-number')"
          />
          <el-table-column
            align="center"
            prop="receipt_order_date"
            :label="$t('delivery-order-date')"
          />
          <el-table-column
            align="center"
            prop="production_order_number"
            :label="$t('production-order-number')"
          />
          <el-table-column
            align="center"
            prop="customer_name"
            :label="$t('client-name')"
          />
          <el-table-column
            align="center"
            prop="operation_number"
            :label="$t('batch-number')"
          />
          <el-table-column
            align="center"
            prop="total_quantity"
            :label="$t('total-quantities')"
          />
          <el-table-column
            align="center"
            prop="total_cost"
            :label="$t('net-cost')"
          />
          <el-table-column
            align="center"
            prop="operation"
            :label="$t('operating-price')"
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
          receipt_order_number: "44",
          receipt_order_date: "2014-02-08",
          production_order_number: "320",
          customer_name: "ايهاب توفيق",
          operation_number: "211",
          total_quantity: "22",
          total_cost: "444",
          operation: "11",
        },
        {
          id: "2",
          receipt_order_number: "44",
          receipt_order_date: "2014-02-08",
          production_order_number: "320",
          customer_name: "ايهاب توفيق",
          operation_number: "211",
          total_quantity: "22",
          total_cost: "444",
          operation: "11",
        },
        {
          id: "3",
          receipt_order_number: "44",
          receipt_order_date: "2014-02-08",
          production_order_number: "320",
          customer_name: "ايهاب توفيق",
          operation_number: "211",
          total_quantity: "22",
          total_cost: "444",
          operation: "11",
        },
        {
          id: "4",
          receipt_order_number: "44",
          receipt_order_date: "2014-02-08",
          production_order_number: "320",
          customer_name: "ايهاب توفيق",
          operation_number: "211",
          total_quantity: "22",
          total_cost: "444",
          operation: "11",
        },
      ],

      summaryTable: [
        {
          id: this.$t("total"),
          total_quantity: "22",
          total_cost: "444",
          operation: "11",
        },
        {
          id: "-",
          receipt_order_number: "-",
          receipt_order_date: "-",
          production_order_number: "-",
          customer_name: "-",
          operation_number: "-",
          total_quantity: "-",
          total_cost: "-",
          operation: "-",
        },
      ],
    };
  },

  methods: {
    arraySpanMethod({ row, column, rowIndex, columnIndex }) {
      if (rowIndex === 0) {
        if (columnIndex === 0) {
          return [1, 6];
        } else if (columnIndex > 0 && columnIndex < 6) {
          return [0, 0];
        }
      }
    },
  },
};
</script>