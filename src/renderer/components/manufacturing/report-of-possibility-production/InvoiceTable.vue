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
        prop="item_name"
        :label="$t('name-of-class-product')"
        width="300"
      />
      <el-table-column align="center" prop="unit" :label="$t('unit')" />
      <el-table-column
        align="center"
        prop="normative_quantity"
        :label="$t('standard-quantity')"
      />
      <el-table-column
        align="center"
        prop="actual_quantity"
        :label="$t('actual-quantity')"
      />
      <el-table-column
        align="center"
        prop="item_possibility"
        :label="$t('possibility-of-the-item')"
      />
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
            prop="id"
            :label="$t('id')"
            width="40"
          />
          <el-table-column
            align="center"
            prop="item_name"
            :label="$t('name-of-class-product')"
            width="300"
          />
          <el-table-column align="center" prop="unit" :label="$t('unit')" />
          <el-table-column
            align="center"
            prop="normative_quantity"
            :label="$t('standard-quantity')"
          />
          <el-table-column
            align="center"
            prop="actual_quantity"
            :label="$t('actual-quantity')"
          />
          <el-table-column
            align="center"
            prop="item_possibility"
            :label="$t('possibility-of-the-item')"
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
          item_name: "1000 - اسم الصنف",
          unit: "44",
          normative_quantity: "7",
          actual_quantity: "211",
          item_possibility: "0.00",
        },
        {
          id: "2",
          item_number: "44",
          item_name: "1000 - اسم الصنف",
          unit: "44",
          normative_quantity: "7",
          actual_quantity: "211",
          item_possibility: "0.00",
        },
        {
          id: "3",
          item_number: "44",
          item_name: "1000 - اسم الصنف",
          unit: "44",
          normative_quantity: "7",
          actual_quantity: "211",
          item_possibility: "0.00",
        },
        {
          id: "4",
          item_number: "44",
          item_name: "1000 - اسم الصنف",
          unit: "44",
          normative_quantity: "7",
          actual_quantity: "211",
          item_possibility: "0.00",
        },
      ],
      totalAmount: [
        {
          id: this.$t("total"),
          item_number: "",
          item_name: "",
          unit: "",
          normative_quantity: "7",
          actual_quantity: "211",
          item_possibility: "0.00",
        },
        {
          id: "-",
          item_number: "",
          item_name: "",
          unit: "",
          normative_quantity: "",
          actual_quantity: "",
          item_possibility: "",
        },
      ],
    };
  },

  methods: {
    arraySpanMethod({ row, column, rowIndex, columnIndex }) {
      if (rowIndex === 0) {
        if (columnIndex === 0) {
          return [1, 3];
        } else if (columnIndex < 3) {
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