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
        prop="supplier"
        :label="$t('supplier-name')"
      />
      <el-table-column
        align="center"
        prop="normative_quantity"
        :label="$t('sorting-amounts')"
      />
      <el-table-column
        align="center"
        prop="actual_quantity"
        :label="$t('amounts-of-wastage')"
      />
      <el-table-column
        align="center"
        prop="total_cost"
        :label="$t('net-cost')"
      />
      <el-table-column
        align="center"
        prop="sort"
        :label="$t('item-sort-price')"
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
            prop="supplier"
            :label="$t('supplier-name')"
          />
          <el-table-column
            align="center"
            prop="normative_quantity"
            :label="$t('sorting-amounts')"
          />
          <el-table-column
            align="center"
            prop="actual_quantity"
            :label="$t('amounts-of-wastage')"
          />
          <el-table-column
            align="center"
            prop="total_cost"
            :label="$t('net-cost')"
          />
          <el-table-column
            align="center"
            prop="sort"
            :label="$t('item-sort-price')"
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
          supplier: "مورد",
          normative_quantity: "7",
          actual_quantity: "211",
          total_cost: "11",
          sort: "0",
        },
        {
          id: "2",
          sort_number: "44",
          date: "2014-02-04",
          supplier: "مورد",
          normative_quantity: "7",
          actual_quantity: "211",
          total_cost: "11",
          sort: "0",
        },
      ],
      totalAmount: [
        {
          id: this.$t("total"),
          sort_number: "",
          date: "",
          supplier: "",
          normative_quantity: "",
          actual_quantity: "211",
          total_cost: "11",
          sort: "0",
        },
        {
          id: "-",
          sort_number: "",
          date: "",
          supplier: "",
          normative_quantity: "",
          actual_quantity: "",
          total_cost: "",
          sort: "",
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