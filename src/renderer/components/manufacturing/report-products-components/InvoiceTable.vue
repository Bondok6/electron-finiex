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
        prop="item_name"
        :label="$t('name-of-class-product')"
        width="400"
      />
      <el-table-column align="center" prop="unit" :label="$t('unit')" />
      <el-table-column align="center" prop="category" :label="$t('category')" />
      <el-table-column
        align="center"
        prop="standard_quantity"
        :label="$t('standard-quantity')"
      />
      <el-table-column
        align="center"
        prop="standard_cost"
        :label="$t('standard-cost')"
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
            prop="item_name"
            :label="$t('name-of-class-product')"
            width="400"
          />
          <el-table-column align="center" prop="unit" :label="$t('unit')" />
          <el-table-column
            align="center"
            prop="category"
            :label="$t('category')"
          />
          <el-table-column
            align="center"
            prop="standard_quantity"
            :label="$t('standard-quantity')"
          />
          <el-table-column
            align="center"
            prop="standard_cost"
            :label="$t('standard-cost')"
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

          item_name: " 444 - ماسورة حراري 40 مم * 6 متر",
          unit: "حبة",
          category: "7",
          standard_quantity: "211",
          standard_cost: "22",
        },
        {
          id: "2",

          item_name: "ماسورة حراري 40 مم * 6 متر",
          unit: "حبة",
          category: "7",
          standard_quantity: "211",
          standard_cost: "22",
        },
        {
          id: "3",

          item_name: " 444 - ماسورة حراري 40 مم * 6 متر",
          unit: "حبة",
          category: "7",
          standard_quantity: "211",
          standard_cost: "22",
        },
        {
          id: "5",

          item_name: " 444 - ماسورة حراري 40 مم * 6 متر",
          unit: "حبة",
          category: "7",
          standard_quantity: "211",
          standard_cost: "22",
        },
        {
          id: "6",

          item_name: " 444 - ماسورة حراري 40 مم * 6 متر",
          unit: "حبة",
          category: "7",
          standard_quantity: "211",
          standard_cost: "22",
        },
        {
          id: "4",

          item_name: " 444 - ماسورة حراري 40 مم * 6 متر",
          unit: "حبة",
          category: "7",
          standard_quantity: "211",
          standard_cost: "22",
        },
      ],
      totalAmount: [
        {
          id: this.$t("total"),

          item_name: "",
          unit: "",
          category: "",
          standard_quantity: "50",
          standard_cost: "22",
        },
        {
          id: "-",
          item_name: "",
          unit: "",
          category: "",
          standard_quantity: "",
          standard_cost: "",
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