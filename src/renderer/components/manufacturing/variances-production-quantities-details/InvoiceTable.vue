<template>
  <el-container class="container ma-4 mt-0 mb-0 invoice-table">
    <el-table
      :data="tableData"
      style="width: 100%"
      :row-class-name="AddClassName"
      border
      max-height="500"
    >
      <el-table-column align="center" prop="id" :label="$t('id')" width="40" />
      <el-table-column
        align="center"
        prop="production_number"
        :label="$t('production-number')"
      />
      <el-table-column
        align="center"
        prop="production_date"
        :label="$t('production-date')"
      />
      <el-table-column
        align="center"
        prop="item_name"
        :label="$t('name-of-class-product')"
        width="350"
      />
      <el-table-column align="center" prop="unit" :label="$t('unit')" />
      <el-table-column
        align="center"
        prop="standar_quantity"
        :label="$t('standard-quantity')"
      />
      <el-table-column
        align="center"
        prop="actual_quantity"
        :label="$t('actual-quantity')"
      />
      <el-table-column
        align="center"
        prop="deflection_quantity"
        :label="$t('amount-of-deviation')"
      />
      <el-table-column
        align="center"
        prop="deflection_cost"
        :label="$t('cost-of-deviation')"
      />
      <el-table-column align="center" prop="percentage" :label="$t('ratio%')" />
      <template #append>
        <el-table
          :data="totalAmountone"
          class="width-full summaryTable"
          :span-method="arraySpanMethod"
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
            prop="production_number"
            :label="$t('production-number')"
          />
          <el-table-column
            align="center"
            prop="production_date"
            :label="$t('production-date')"
          />
          <el-table-column
            align="center"
            prop="item_name"
            :label="$t('name-of-class-product')"
            width="350"
          />
          <el-table-column align="center" prop="unit" :label="$t('unit')" />
          <el-table-column
            align="center"
            prop="standar_quantity"
            :label="$t('standard-quantity')"
          />
          <el-table-column
            align="center"
            prop="actual_quantity"
            :label="$t('actual-quantity')"
          />
          <el-table-column
            align="center"
            prop="deflection_quantity"
            :label="$t('amount-of-deviation')"
          />
          <el-table-column
            align="center"
            prop="deflection_cost"
            :label="$t('cost-of-deviation')"
          />
          <el-table-column
            align="center"
            prop="percentage"
            :label="$t('ratio%')"
          />
        </el-table>
        <el-table
          :data="totalAmounttwo"
          class="width-full summaryTable"
          :span-method="arraySpanMethod"
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
            prop="production_number"
            :label="$t('production-number')"
          />
          <el-table-column
            align="center"
            prop="production_date"
            :label="$t('production-date')"
          />
          <el-table-column
            align="center"
            prop="item_name"
            :label="$t('name-of-class-product')"
            width="350"
          />
          <el-table-column align="center" prop="unit" :label="$t('unit')" />
          <el-table-column
            align="center"
            prop="standar_quantity"
            :label="$t('standard-quantity')"
          />
          <el-table-column
            align="center"
            prop="actual_quantity"
            :label="$t('actual-quantity')"
          />
          <el-table-column
            align="center"
            prop="deflection_quantity"
            :label="$t('amount-of-deviation')"
          />
          <el-table-column
            align="center"
            prop="deflection_cost"
            :label="$t('cost-of-deviation')"
          />
          <el-table-column
            align="center"
            prop="percentage"
            :label="$t('ratio%')"
          />
        </el-table>
        <el-table
          :data="totalAmountthree"
          class="width-full summaryTable"
          :span-method="arraySpanMethod"
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
            prop="production_number"
            :label="$t('production-number')"
          />
          <el-table-column
            align="center"
            prop="production_date"
            :label="$t('production-date')"
          />
          <el-table-column
            align="center"
            prop="item_name"
            :label="$t('name-of-class-product')"
            width="350"
          />
          <el-table-column align="center" prop="unit" :label="$t('unit')" />
          <el-table-column
            align="center"
            prop="standar_quantity"
            :label="$t('standard-quantity')"
          />
          <el-table-column
            align="center"
            prop="actual_quantity"
            :label="$t('actual-quantity')"
          />
          <el-table-column
            align="center"
            prop="deflection_quantity"
            :label="$t('amount-of-deviation')"
          />
          <el-table-column
            align="center"
            prop="deflection_cost"
            :label="$t('cost-of-deviation')"
          />
          <el-table-column
            align="center"
            prop="percentage"
            :label="$t('ratio%')"
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
          production_number: "22",
          production_date: "2014-04-18",
          item_number: "44",
          item_name: "1000 - مورد",
          unit: "قطبة",
          standar_quantity: "333",
          actual_quantity: "77",
          deflection_quantity: "0",
          deflection_cost: "0",
          percentage: "0",
        },
        {
          id: "2",
          production_number: "22",
          production_date: "2014-04-18",
          item_number: "44",
          item_name: "1000 - مورد",
          unit: "قطبة",
          standar_quantity: "333",
          actual_quantity: "77",
          deflection_quantity: "0",
          deflection_cost: "0",
          percentage: "0",
        },
        {
          id: "3",
          production_number: "22",
          production_date: "2014-04-18",
          item_number: "44",
          item_name: "1000 - مورد",
          unit: "قطبة",
          standar_quantity: "333",
          actual_quantity: "77",
          deflection_quantity: "0",
          deflection_cost: "0",
          percentage: "0",
        },
        {
          id: "4",
          production_number: "22",
          production_date: "2014-04-18",
          item_number: "44",
          item_name: "1000 - مورد",
          unit: "قطبة",
          standar_quantity: "333",
          actual_quantity: "77",
          deflection_quantity: "0",
          deflection_cost: "0",
          percentage: "0",
        },
        {
          id: "5",
          production_number: "22",
          production_date: "2014-04-18",
          item_number: "44",
          item_name: "1000 - مورد",
          unit: "قطبة",
          standar_quantity: "333",
          actual_quantity: "77",
          deflection_quantity: "0",
          deflection_cost: "0",
          percentage: "0",
        },
        {
          id: "6",
          production_number: "22",
          production_date: "2014-04-18",
          item_number: "44",
          item_name: "1000 - مورد",
          unit: "قطبة",
          standar_quantity: "333",
          actual_quantity: "77",
          deflection_quantity: "0",
          deflection_cost: "0",
          percentage: "0",
        },
      ],
      totalAmountone: [
        {
          id: this.$t("total"),
          production_number: "",
          production_date: "",
          item_number: "",
          item_name: "",
          unit: "",
          standar_quantity: "333",
          actual_quantity: "77",
          deflection_quantity: "0",
          deflection_cost: "0",
          percentage: "0",
        },
        {
          id: "-",
          production_number: "",
          production_date: "",
          item_number: "",
          item_name: "",
          unit: "",
          standar_quantity: "",
          actual_quantity: "",
          deflection_quantity: "",
          deflection_cost: "",
          percentage: "",
        },
      ],
      totalAmounttwo: [
        {
          id: this.$t("total-increase-in-quantities"),
          production_number: "",
          production_date: "",
          item_number: "",
          item_name: "",
          unit: "",
          standar_quantity: "333",
          actual_quantity: "77",
          deflection_quantity: "0",
          deflection_cost: "0",
          percentage: "0",
        },
        {
          id: "-",
          production_number: "",
          production_date: "",
          item_number: "",
          item_name: "",
          unit: "",
          standar_quantity: "",
          actual_quantity: "",
          deflection_quantity: "",
          deflection_cost: "",
          percentage: "",
        },
      ],
      totalAmountthree: [
        {
          id: this.$t("total-amount"),
          production_number: "",
          production_date: "",
          item_number: "",
          item_name: "",
          unit: "",
          standar_quantity: "333",
          actual_quantity: "77",
          deflection_quantity: "0",
          deflection_cost: "0",
          percentage: "0",
        },
        {
          id: "-",
          production_number: "",
          production_date: "",
          item_number: "",
          item_name: "",
          unit: "",
          standar_quantity: "",
          actual_quantity: "",
          deflection_quantity: "",
          deflection_cost: "",
          percentage: "",
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
    AddClassName({ row, column, rowIndex, columnIndex }) {
      if (rowIndex % 4 === 0) {
        return "warnning-row";
      } else {
        return "green-row";
      }
    },
  },
};
</script>

<style>
.el-table .green-row {
  background: rgb(208, 243, 155);
}
.el-table .warnning-row {
  background: #ff9999;
}
</style>