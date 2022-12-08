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
        width="450"
      />
      <el-table-column align="center" prop="item_unit" :label="$t('unit')" />
      <el-table-column align="center" prop="warehouse" :label="$t('warehouse')">
        <button
          style="background: none; border: none"
          @click="condition = true"
        >
          {{ $t("warehouse") }}
        </button>
      </el-table-column>
      <el-table-column
        align="center"
        prop="ordered_quantity"
        :label="$t('requested-quantity')"
      />
      <el-table-column
        align="center"
        prop="available_quantity"
        :label="$t('available-quantity')"
      />
      <el-table-column
        align="center"
        prop="missing_quantity"
        :label="$t('missing-quantity')"
      />
      <template #append>
        <el-table
          :data="totalAmount"
          :span-method="arraySpanMethod"
          class="width-full summaryTable"
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
            width="450"
          />
          <el-table-column
            align="center"
            prop="item_unit"
            :label="$t('unit')"
          />
          <el-table-column
            align="center"
            prop="warehouse"
            :label="$t('warehouse')"
          />

          <el-table-column
            align="center"
            prop="ordered_quantity"
            :label="$t('requested-quantity')"
          />
          <el-table-column
            align="center"
            prop="available_quantity"
            :label="$t('available-quantity')"
          />
          <el-table-column
            align="center"
            prop="missing_quantity"
            :label="$t('missing-quantity')"
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
      condition: false,
      tableData: [
        {
          id: 1,
          item_name: "2000 - نقاص",
          item_unit: "",
          warehouse: "",
          ordered_quantity: "",
          available_quantity: "",
          missing_quantity: "",
        },
        {
          id: 2,
          item_name: "2000 - نقاص",
          item_unit: "",
          warehouse: "",
          ordered_quantity: "",
          available_quantity: "",
          missing_quantity: "",
        },
        {
          id: 3,
          item_name: "2000 - نقاص",
          item_unit: "",
          warehouse: "",
          ordered_quantity: "",
          available_quantity: "",
          missing_quantity: "",
        },
        {
          id: 4,
          item_name: "2000 - نقاص",
          item_unit: "",
          warehouse: "",
          ordered_quantity: "",
          available_quantity: "",
          missing_quantity: "",
        },
      ],
      totalAmount: [
        {
          id: this.$t("total"),
          item_id: "",
          item_name: "",
          item_unit: "",
          warehouse: "",
          ordered_quantity: "",
          available_quantity: "",
          missing_quantity: "",
        },
        {
          id: "-",
          item_id: "",
          item_name: "",
          item_unit: "",
          warehouse: "",
          ordered_quantity: "",
          available_quantity: "",
          missing_quantity: "",
        },
      ],
    };
  },

  methods: {
    tableRowClassName({ row, column, rowIndex, columnIndex }) {
      if (columnIndex === 6) {
        {
          return "warning-row";
        }
      }
      if (columnIndex === 3) {
        {
          if (this.condition === true) {
            return "mystyle";
          }
        }
      }
    },
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

<style>
.el-table .warning-row {
  background: #ff9999;
}
.mystyle {
  background: #ffeb99;
}
</style>
