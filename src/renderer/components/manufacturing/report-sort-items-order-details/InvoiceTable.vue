<template>
  <el-container class="container ma-4 mt-0 mb-0 invoice-table">
    <el-table
      :data="tableData"
      style="width: 100%"
      stripe
      border
      max-height="250"
    >
      <el-table-column align="center" prop="id" :label="$t('id')" width="40" />
      <el-table-column
        align="center"
        prop="sort_number"
        :label="$t('sort-order-number')"
      />
      <el-table-column align="center" prop="date" :label="$t('order-date')" />
      <el-table-column
        align="center"
        prop="item_name"
        :label="$t('item-name')"
        width="300"
      />
      <el-table-column align="center" prop="unit" :label="$t('unit')" />
      <el-table-column
        align="center"
        prop="sorting_amounts"
        :label="$t('sorting-amounts')"
      />
      <el-table-column
        align="center"
        prop="sorting_cost"
        :label="$t('sorting-cost')"
      />
      <el-table-column
        align="center"
        prop="wastage_cost"
        :label="$t('wastage-cost')"
      />
      <el-table-column
        align="center"
        prop="wastage_rate"
        :label="$t('wastage-rate')"
      />
      <el-table-column
        align="center"
        prop="other_costs"
        :label="$t('other-costs')"
      />
      <el-table-column
        align="center"
        prop="total_cost"
        :label="$t('the-total-cost')"
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
            prop="sort_number"
            :label="$t('sort-order-number')"
          />
          <el-table-column
            align="center"
            prop="date"
            :label="$t('order-date')"
          />
          <el-table-column
            align="center"
            prop="item_name"
            :label="$t('item-name')"
            width="300"
          />
          <el-table-column align="center" prop="unit" :label="$t('unit')" />
          <el-table-column
            align="center"
            prop="sorting_amounts"
            :label="$t('sorting-amounts')"
          />
          <el-table-column
            align="center"
            prop="sorting_cost"
            :label="$t('sorting-cost')"
          />
          <el-table-column
            align="center"
            prop="wastage_cost"
            :label="$t('wastage-cost')"
          />
          <el-table-column
            align="center"
            prop="wastage_rate"
            :label="$t('wastage-rate')"
          />
          <el-table-column
            align="center"
            prop="other_costs"
            :label="$t('other-costs')"
          />
          <el-table-column
            align="center"
            prop="total_cost"
            :label="$t('the-total-cost')"
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
          sort_number: "44",
          date: "2014-02-04",
          item_name: "1000 - مورد",
          unit: "7",
          sorting_amounts: "211",
          sorting_cost: "200",
          wastage_cost: "100",
          wastage_rate: "50",
          other_costs: "20",
          total_cost: "11",
        },
        {
          id: "2",
          sort_number: "44",
          date: "2014-02-04",
          item_name: "1000 - مورد",
          unit: "7",
          sorting_amounts: "211",
          sorting_cost: "200",
          wastage_cost: "100",
          wastage_rate: "50",
          other_costs: "20",
          total_cost: "11",
        },
      ],
      totalAmount: [
        {
          id: this.$t("total"),
          sort_number: "",
          date: "",
          item_name: "",
          unit: "",
          sorting_amounts: "200",
          sorting_cost: "1000",
          wastage_cost: "100",
          wastage_rate: "50",
          other_costs: "20",
          total_cost: "11",
        },
        {
          id: "-",
          sort_number: "",
          date: "",
          item_name: "",
          unit: "",
          sorting_amounts: "",
          sorting_cost: "",
          wastage_cost: "",
          wastage_rate: "",
          other_costs: "",
          total_cost: "",
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
  },
};
</script>