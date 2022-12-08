<template>
  <el-container class="container ma-4 mt-0 mb-0 invoice-table">
    <el-table
      :data="tableData"
      style="width: 100%"
      border
      :row-class-name="AddClassName"
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
        width="400"
      />
      <el-table-column align="center" prop="unit" :label="$t('unit')" />
      <el-table-column
        align="center"
        prop="production_quantity"
        :label="$t('quantity-of-production')"
      />
      <el-table-column
        align="center"
        prop="material_costs"
        :label="$t('materials-cost')"
      />
      <el-table-column
        align="center"
        prop="other_costs"
        :label="$t('the-other-costs')"
      />
      <el-table-column
        align="center"
        prop="compulsory_costs"
        :label="$t('estimated-costs')"
      />
      <template #append>
        <el-table
          :data="totalAmount"
          class="width-full summaryTable"
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
            width="400"
          />
          <el-table-column align="center" prop="unit" :label="$t('unit')" />
          <el-table-column
            align="center"
            prop="production_quantity"
            :label="$t('quantity-of-production')"
          />
          <el-table-column
            align="center"
            prop="material_costs"
            :label="$t('materials-cost')"
          />
          <el-table-column
            align="center"
            prop="other_costs"
            :label="$t('the-other-costs')"
          />
          <el-table-column
            align="center"
            prop="compulsory_costs"
            :label="$t('estimated-costs')"
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
          production_number: "44",
          production_date: "2014-02-18",
          item_number: "7",
          item_name: "211-1000",
          unit: "حبة",
          production_quantity: "33",
          material_costs: "44",
          other_costs: "11",
          compulsory_costs: "22",
        },
        {
          id: "2",
          production_number: "44",
          production_date: "2014-02-18",
          item_number: "7",
          item_name: "211-1200",
          unit: "حبة",
          production_quantity: "33",
          material_costs: "44",
          other_costs: "11",
          compulsory_costs: "22",
        },
        {
          id: "3",
          production_number: "44",
          production_date: "2014-02-18",
          item_number: "7",
          item_name: "211-1000",
          unit: "حبة",
          production_quantity: "33",
          material_costs: "44",
          other_costs: "11",
          compulsory_costs: "22",
        },
        {
          id: "4",
          production_number: "44",
          production_date: "2014-02-18",
          item_number: "7",
          item_name: "211-1050",
          unit: "حبة",
          production_quantity: "33",
          material_costs: "44",
          other_costs: "11",
          compulsory_costs: "22",
        },
        {
          id: "5",
          production_number: "44",
          production_date: "2014-02-18",
          item_number: "7",
          item_name: "211-1000",
          unit: "حبة",
          production_quantity: "33",
          material_costs: "44",
          other_costs: "11",
          compulsory_costs: "22",
        },
        {
          id: "6",
          production_number: "44",
          production_date: "2014-02-18",
          item_number: "7",
          item_name: "211-1000",
          unit: "حبة",
          production_quantity: "33",
          material_costs: "44",
          other_costs: "11",
          compulsory_costs: "22",
        },
      ],
      totalAmount: [
        {
          id: this.$t("total"),
          production_number: "",
          production_date: "",
          item_number: "",
          item_name: "",
          unit: "",
          production_quantity: "33",
          material_costs: "44",
          other_costs: "11",
          compulsory_costs: "22",
        },
        {
          id: "-",
          production_number: "",
          production_date: "",
          item_number: "",
          item_name: "",
          unit: "",
          production_quantity: "",
          material_costs: "",
          other_costs: "",
          compulsory_costs: "",
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