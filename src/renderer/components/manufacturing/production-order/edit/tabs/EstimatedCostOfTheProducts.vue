<template>
  <el-container class="container mt-0 mb-0 invoice-table">
    <el-table
      :data="tableData"
      style="width: 100%"
      :cell-class-name="AddClassName"
      border
      max-height="500"
    >
      <el-table-column align="center" prop="id" :label="$t('id')" width="40" />

      <el-table-column
        align="center"
        prop="item_name"
        :label="$t('name-of-class-product')"
        width="350"
      />
      <el-table-column align="center" prop="unit" :label="$t('unit')" />

      <el-table-column
        align="center"
        prop="production_material_cost"
        :label="$t('quantity-of-material-produced')"
      />
      <el-table-column
        align="center"
        prop="cost_of_material_produced"
        :label="$t('cost-of-material-produced')"
      />
      <el-table-column
        align="center"
        prop="expenses_value"
        :label="$t('expense-value')"
      />
      <el-table-column
        align="center"
        prop="estimated_cost"
        :label="$t('estimated-cost')"
      />
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
          id: 1,

          item_name: "2000 - نقاص",
          unit: "",
          production_material_quantity: "",
          production_material_cost: "",
          expenses_value: "",
          estimated_cost: "",
        },
        {
          id: 2,
          item_name: "2000 - نقاص",
          unit: "",
          production_material_quantity: "",
          production_material_cost: "",
          expenses_value: "",
          estimated_cost: "",
        },
        {
          id: 3,
          item_name: "2000 - نقاص",
          unit: "",
          production_material_quantity: "",
          production_material_cost: "",
          expenses_value: "",
          estimated_cost: "",
        },
        {
          id: 4,

          item_name: "2000 - نقاص",
          unit: "",
          production_material_quantity: "",
          production_material_cost: "",
          expenses_value: "",
          estimated_cost: "",
        },
        {
          id: 5,

          item_name: "2000 - نقاص",
          unit: "",
          production_material_quantity: "",
          production_material_cost: "",
          expenses_value: "",
          estimated_cost: "",
        },
        {
          id: 6,
          item_name: "2000 - نقاص",
          unit: "",
          production_material_quantity: "",
          production_material_cost: "",
          expenses_value: "",
          estimated_cost: "",
        },
      ],
    };
  },

  methods: {
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
.green-row {
  background: rgb(208, 243, 155);
}
.warnning-row {
  background: #ff9999;
}
</style>