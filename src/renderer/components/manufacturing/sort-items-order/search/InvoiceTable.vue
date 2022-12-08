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
        prop="item_number"
        :label="$t('sort-order-number')"
      />
      <el-table-column
        align="center"
        prop="item_date"
        :label="$t('date-of-order')"
      />
      <el-table-column
        align="center"
        prop="supplier_name"
        :label="$t('supplier-name')"
      />
      <el-table-column
        align="center"
        prop="sort_quantities"
        :label="$t('sort-quantities')"
      />
      <el-table-column
        align="center"
        prop="amounts_of_wastage"
        :label="$t('amounts-of-wastage')"
      />
      <el-table-column align="center" prop="net_cost" :label="$t('net-cost')" />
      <el-table-column
        align="center"
        prop="price"
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
            prop="item_number"
            :label="$t('sort-order-number')"
          />
          <el-table-column
            align="center"
            prop="item_date"
            :label="$t('date-of-order')"
          />
          <el-table-column
            align="center"
            prop="supplier_name"
            :label="$t('supplier-name')"
          />
          <el-table-column
            align="center"
            prop="sort_quantities"
            :label="$t('sort-quantities')"
          />
          <el-table-column
            align="center"
            prop="amounts_of_wastage"
            :label="$t('amounts-of-wastage')"
          />
          <el-table-column
            align="center"
            prop="net_cost"
            :label="$t('net-cost')"
          />
          <el-table-column
            align="center"
            prop="price"
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
          id: 1,
          item_number: "Rs25a",
          item_date: "01/04/2021",
          supplier_name: "بدون",
          sort_quantities: "444995",
          net_cost: 300,
          amounts_of_wastage: "33445",
          price: "2000",
        },
        {
          id: 2,
          item_number: "Rs25a",
          item_date: "01/04/2021",
          supplier_name: "بدون",
          sort_quantities: "444995",
          net_cost: 300,
          amounts_of_wastage: "33445",
          price: "2000",
        },
        {
          id: 3,
          item_number: "Rs25a",
          item_date: "01/04/2021",
          supplier_name: "بدون",
          sort_quantities: "444995",
          net_cost: 300,
          amounts_of_wastage: "33445",
          price: "2000",
        },
        {
          id: 4,
          item_number: "Rs25a",
          item_date: "01/04/2021",
          supplier_name: "بدون",
          sort_quantities: "444995",
          net_cost: 300,
          amounts_of_wastage: "33445",
          price: "2000",
        },
        {
          id: 5,
          item_number: "Rs25a",
          item_date: "01/04/2021",
          supplier_name: "بدون",
          sort_quantities: "444995",
          net_cost: 300,
          amounts_of_wastage: "33445",
          price: "2000",
        },
      ],
      totalAmount: [
        {
          id: this.$t("total"),
          item_number: "",
          item_date: "",
          supplier_name: "",
          sort_quantities: "444995",
          net_cost: 300,
          amounts_of_wastage: "33445",
          price: "2000",
        },
        {
          id: "-",
          item_number: "",
          item_date: "",
          supplier_name: "",
          sort_quantities: "444995",
          net_cost: 300,
          amounts_of_wastage: "33445",
          price: "",
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