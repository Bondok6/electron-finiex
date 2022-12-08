<template>
  <el-container class="container mt-0 mb-0 invoice-table">
    <el-table
      :data="tableData"
      style="width: 100%"
      :cell-class-name="tableRowClassName"
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
        prop="total_sort_quantity"
        :label="$t('total-sorting-amount')"
      />
      <el-table-column
        align="center"
        prop="total_sort_cost"
        :label="$t('total-sorting-cost')"
      />
      <el-table-column
        align="center"
        prop="total_sort_lost"
        :label="$t('total-sorting-wastage')"
      />
      <el-table-column
        align="center"
        prop="total_sort_cost"
        :label="$t('total-sorting-cost')"
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

          item_name: "1000 - نقاص225",
          unit: "حبة",
          total_sort_quantity: "77",
          total_sort_cost: "22",
          total_sort_lost: "12",
          estimated_cost: "300",
        },
        {
          id: 2,

          item_name: "1000 - نقاص225",
          unit: "حبة",
          total_sort_quantity: "77",
          total_sort_cost: "22",
          total_sort_lost: "12",
          estimated_cost: "300",
        },
        {
          id: 3,

          item_name: "1000 - نقاص225",
          unit: "حبة",
          total_sort_quantity: "77",
          total_sort_cost: "22",
          total_sort_lost: "12",
          estimated_cost: "300",
        },
        {
          id: 4,

          item_name: "1000 - نقاص225",
          unit: "حبة",
          total_sort_quantity: "77",
          total_sort_cost: "22",
          total_sort_lost: "12",
          estimated_cost: "300",
        },
        {
          id: 5,

          item_name: "1000 - نقاص225",
          unit: "حبة",
          total_sort_quantity: "77",
          total_sort_cost: "22",
          total_sort_lost: "12",
          estimated_cost: "300",
        },
      ],
    };
  },

  methods: {
    tableRowClassName({ row, column, rowIndex, columnIndex }) {
      if (columnIndex === 5) {
        {
          return "warning-row";
        }
      }
      return "";
    },
  },
};
</script>

<style>
.el-table .warning-row {
  background: #ff9999;
}
</style>