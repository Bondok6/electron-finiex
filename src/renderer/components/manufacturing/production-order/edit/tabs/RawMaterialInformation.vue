<template>
    <el-container class="container mt-0 mb-0 invoice-table">
      <el-table
        :data="tableData"
        style="width: 100%"
        stripe
        border
        max-height="250"
      >
        <el-table-column align="center" prop="id" label="م" width="40" />
        <el-table-column
          align="center"
          prop="item_name"
          :label="$t('item-name')"
          width="450"
        />
        <el-table-column align="center" prop="unit" :label="$t('unit')" />
        <el-table-column
          align="center"
          prop="warehouse"
          :label="$t('warehouse')"
        />
        <el-table-column
          align="center"
          prop="materials_quantity"
          :label="$t('materials-quantity')"
        />
        <el-table-column
          align="center"
          prop="available_quantity"
          :label="$t('available-quantity')"
        />
        <el-table-column
          align="center"
          prop="materials_cost"
          :label="$t('materials-cost')"
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
            <el-table-column align="center" prop="id" label="م" width="40" />

            <el-table-column
              align="center"
              prop="item_name"
              :label="$t('item-name')"
              width="450"
            />
            <el-table-column align="center" prop="unit" :label="$t('unit')" />
            <el-table-column
              align="center"
              prop="warehouse"
              :label="$t('warehouse')"
            />
            <el-table-column
              align="center"
              prop="materials_quantity"
              :label="$t('materials-quantity')"
            />
            <el-table-column
              align="center"
              prop="available_quantity"
              :label="$t('available-quantity')"
            />
            <el-table-column
              align="center"
              prop="materials_cost"
              :label="$t('materials-cost')"
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
          id: 1,

          item_name: "2000 - نقاص",
          unit: "الوحدة",
          warehouse: "",
          materials_quantity: "",
          available_quantity: "",
          materials_cost: "",
        },
        {
          id: 2,

          item_name: "2000 - نقاص",
          unit: "الوحدة",
          warehouse: "",
          materials_quantity: "",
          available_quantity: "",
          materials_cost: "",
        },
        {
          id: 3,

          item_name: "2000 - نقاص",
          unit: "الوحدة",
          warehouse: "",
          materials_quantity: "",
          available_quantity: "",
          materials_cost: "",
        },
        {
          id: 4,
          item_name: "2000 - نقاص",
          unit: "الوحدة",
          warehouse: "",
          materials_quantity: "",
          available_quantity: "",
          materials_cost: "",
        },
      ],
      totalAmount: [
        {
          id: this.$t("total"),
          unit: "",
          item_name: "",
          warehouse: "",
          materials_quantity: "",
          available_quantity: "",
          materials_cost: "",
        },
        {
          id: "-",
          unit: "",
          item_name: "",
          item_unit: "",
          materials_quantity: "",
          available_quantity: "",
          materials_cost: "",
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
  },
};
</script>