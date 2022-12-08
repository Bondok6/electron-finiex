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
        prop="item_name"
        :label="$t('product-class-name')"
      >
        <NuxtLink :to="localePath('/manufacturing/components-products/edit')">
          rtx5 - 5000
        </NuxtLink>
      </el-table-column>

      <el-table-column align="center" prop="category" :label="$t('category')" />
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

          category: "حبة",
        },
        {
          id: 2,
          item_name: "Rs25a",

          category: "حبة",
        },
        {
          id: 3,
          item_name: "Rs25a",
          category: "حبة",
        },
        {
          id: 4,
          item_name: "Rs25a",
          category: "حبة",
        },
        {
          id: 5,
          item_name: "Rs25a",
          category: "حبة",
        },
      ],
    };
  },

  methods: {},
};
</script>