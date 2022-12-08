
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
        prop="deliver_number"
        :label="$t('production-order-number')"
      />
      <el-table-column
        align="center"
        prop="deliver_date"
        :label="$t('production-order-date')"
      />
      <el-table-column
        align="center"
        prop="production_order_number"
        :label="$t('production-order-status')"
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
        prop="total_quantities"
        :label="$t('total-quantities')"
      />
      <el-table-column align="center" prop="net_cost" :label="$t('net-cost')" />
      <el-table-column
        align="center"
        prop="operating_price"
        :label="$t('operating-price')"
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
            prop="deliver_number"
            :label="$t('production-order-number')"
          />
          <el-table-column
            align="center"
            prop="deliver_date"
            :label="$t('production-order-date')"
          />
          <el-table-column
            align="center"
            prop="production_order_number"
            :label="$t('production-order-status')"
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
            prop="total_quantities"
            :label="$t('total-quantities')"
          />
          <el-table-column
            align="center"
            prop="net_cost"
            :label="$t('net-cost')"
          />
          <el-table-column
            align="center"
            prop="operating_price"
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
          deliver_number: "881273",
          deliver_date: "2014-02-08",
          production_order_number: "320",
          customer_name: "ايهاب توفيق",
          operation_number: "211",
          perishable_quantity: "22",
          operating_price: "444",
        },
        {
          id: "2",
          deliver_number: "881273",
          deliver_date: "2014-02-08",
          production_order_number: "320",
          customer_name: "ايهاب توفيق",
          operation_number: "211",
          total_quantities: "22",
          perishable_cost: "444",
        },
        {
          id: "3",
          deliver_number: "881273",
          deliver_date: "2014-02-08",
          production_order_number: "320",
          customer_name: "ايهاب توفيق",
          operation_number: "211",
          perishable_quantity: "22",
          perishable_cost: "444",
        },
        {
          id: "4",
          deliver_number: "881273",
          deliver_date: "2014-02-08",
          production_order_number: "320",
          customer_name: "ايهاب توفيق",
          operation_number: "211",
          perishable_quantity: "22",
          perishable_cost: "444",
        },
      ],
      totalAmount: [
        {
          id: this.$t("total"),
          deliver_number: "",
          deliver_date: "",
          production_order_number: "",
          customer_name: "",
          operation_number: "211",
          perishable_quantity: "22",
          perishable_cost: "444",
        },
        {
          id: "-",
          deliver_number: "",
          deliver_date: "",
          production_order_number: "",
          customer_name: " ",
          operation_number: "",
          perishable_quantity: "",
          perishable_cost: "",
        },
      ],
    };
  },

  methods: {
    arraySpanMethod({ row, column, rowIndex, columnIndex }) {
      if (rowIndex === 0) {
        if (columnIndex === 0) {
          return [1, 6];
        } else if (columnIndex < 6) {
          return [0, 0];
        }
      }
    },
  },
};
</script>