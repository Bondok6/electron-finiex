<template>
  <el-container class="container mt-0 mb-0 invoice-table">
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
      <el-table-column align="center" prop="item_unit" :label="$t('unit')" />
      <el-table-column
        align="center"
        prop="warehouse"
        :label="$t('warehouse')"
      />
      <el-table-column
        align="center"
        prop="quantity"
        :label="$t('sort-quantities')"
      />
      <el-table-column
        align="center"
        prop="sort_lost"
        :label="$t('unit-cost')"
      />
      <el-table-column align="center" prop="cost" :label="$t('sorting-cost')" />
      <el-table-column
        align="center"
        prop="percentage"
        :label="$t('sorting-percentage')"
      />

      <el-table-column
        align="center"
        prop="wastage"
        :label="$t('wastage-cost')"
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
            prop="item_name"
            :label="$t('item-name')"
            width="350"
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
            prop="quantity"
            :label="$t('sort-quantities')"
          />
          <el-table-column
            align="center"
            prop="sort_lost"
            :label="$t('unit-cost')"
          />
          <el-table-column
            align="center"
            prop="cost"
            :label="$t('sorting-cost')"
          />
          <el-table-column
            align="center"
            prop="percentage"
            :label="$t('sorting-percentage')"
          />

          <el-table-column
            align="center"
            prop="wastage"
            :label="$t('wastage-cost')"
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
          item_name: "1000 - نقاص225*255 كلاس 5",
          item_unit: "حبة",
          warehouse: "مستودع المعرض",
          quantity: "8",
          sort_lost: "6",
          cost: "2",
          percentage: "80",
          wastage: "2",
        },
        {
          id: 2,
          item_name: "1000 - نقاص225*255 كلاس 5",
          item_unit: "حبة",
          warehouse: "مستودع المعرض",
          quantity: "8",
          sort_lost: "6",
          cost: "2",
          percentage: "80",
          wastage: "2",
        },
        {
          id: 3,
          item_name: "1000 - نقاص225*255 كلاس 5",
          item_unit: "حبة",
          warehouse: "مستودع المعرض",
          quantity: "8",
          sort_lost: "6",
          cost: "2",
          percentage: "80",
          wastage: "2",
        },
      ],
      totalAmount: [
        {
          id: this.$t("total"),
          item_name: "",
          item_unit: "",
          warehouse: "",
          quantity: "",
          sort_lost: "",
          cost: "20",
          percentage: "80",
          wastage: "20",
        },
        {
          id: "-",
          item_name: "",
          item_unit: "",
          warehouse: "",
          quantity: "",
          sort_lost: "",
          cost: "",
          percentage: "",
          wastage: "",
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
  },
};
</script>


