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
        prop="item_name"
        :label="$t('item-name')"
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
            prop="item_name"
            :label="$t('item-name')"
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
            prop="item_name"
            :label="$t('item-name')"
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
            prop="item_name"
            :label="$t('item-name')"
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
          id: this.$t("total-increase-in-quantities"),
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
          id: this.$t("total-decrease-in-quantities"),
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
          return [1, 2];
        } else if (columnIndex > 0 && columnIndex < 2) {
          return [0, 0];
        }
      }
    },
  },
};
</script>