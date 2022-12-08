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
      >
        <NuxtLink :to="localePath('/manufacturing/sort-items-order/edit')">
          1
        </NuxtLink>
      </el-table-column>
      <el-table-column
        align="center"
        prop="item_date"
        :label="$t('sort-order-date')"
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
          item_name: "Rs25a",
          item_date: "01/04/2021",
          supplier_name: "بدون",
          sort_quantities: "444995",
          amounts_of_wastage: "33445",
        },
        {
          id: 2,
          item_name: "Rs25a",
          item_date: "01/04/2021",
          supplier_name: "بدون",
          sort_quantities: "444995",
          amounts_of_wastage: "33445",
        },
        {
          id: 3,
          item_name: "Rs25a",
          item_date: "01/04/2021",
          supplier_name: "بدون",
          sort_quantities: "444995",
          amounts_of_wastage: "33445",
        },
        {
          id: 4,
          item_name: "Rs25a",
          item_date: "01/04/2021",
          supplier_name: "بدون",
          sort_quantities: "444995",
          amounts_of_wastage: "33445",
        },
        {
          id: 5,
          item_name: "Rs25a",
          item_date: "01/04/2021",
          supplier_name: "بدون",
          sort_quantities: "444995",
          amounts_of_wastage: "33445",
        },
      ],
    };
  },

  methods: {},
};
</script>