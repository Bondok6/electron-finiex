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
        prop="plan_number"
        :label="$t('plan-number')"
      />
      <el-table-column
        align="center"
        prop="plan_date"
        :label="$t('plan-date')"
      />
      <el-table-column
        align="center"
        prop="production_order_status"
        :label="$t('production-order-status')"
      />
      <el-table-column align="center" prop="notes" :label="$t('notes')" />
      <el-table-column
        align="center"
        prop="demanded_quantity"
        :label="$t('quantities-required')"
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
            prop="plan_number"
            :label="$t('plan-number')"
          />
          <el-table-column
            align="center"
            prop="plan_date"
            :label="$t('plan-date')"
          />
          <el-table-column
            align="center"
            prop="production_order_status"
            :label="$t('production-order-status')"
          />
          <el-table-column align="center" prop="notes" :label="$t('notes')" />
          <el-table-column
            align="center"
            prop="demanded_quantity"
            :label="$t('quantities-required')"
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
          plan_number: "44",
          plan_date: "2014-02-08",
          production_order_status: "بدون",
          notes: "-",
          demanded_quantity: "211",
        },
        {
          id: "2",
          plan_number: "44",
          plan_date: "2014-02-08",
          production_order_status: "بدون",
          notes: "-",
          demanded_quantity: "211",
        },
        {
          id: "3",
          plan_number: "44",
          plan_date: "2014-02-08",
          production_order_status: "بدون",
          notes: "-",
          demanded_quantity: "211",
        },
        {
          id: "4",
          plan_number: "44",
          plan_date: "2014-02-08",
          production_order_status: "بدون",
          notes: "-",
          demanded_quantity: "211",
        },
      ],
      totalAmount: [
        {
          id: this.$t("total"),
          plan_number: "",
          plan_date: "",
          production_order_status: "",
          notes: "",
          demanded_quantity: "211",
        },
        {
          id: "-",
          plan_number: "",
          plan_date: "",
          production_order_status: "",
          notes: "",
          demanded_quantity: "",
        },
      ],
    };
  },

  methods: {
    arraySpanMethod({ row, column, rowIndex, columnIndex }) {
      if (rowIndex === 0) {
        if (columnIndex === 0) {
          return [1, 5];
        } else if (columnIndex < 5) {
          return [0, 0];
        }
      }
    },
  },
};
</script>