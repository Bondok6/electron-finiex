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
        :label="$t('item-name')"
      />

      <el-table-column
        align="center"
        prop="item_number"
        :label="$t('item-number')"
      />
      <el-table-column align="center" prop="show" :label="$t('')" width="100">
        <el-checkbox v-model="main_form.check2" />
      </el-table-column>
    </el-table>
  </el-container>
</template>


<script>
export default {
  name: "invoice",

  data: function () {
    return {
      main_form: {},
      tableData: [
        {
          id: 1,
          category_name: "Rs25a",

          order: "حبة",
        },
        {
          id: 1,
          category_name: "Rs25a",

          order: "حبة",
        },
        {
          id: 1,
          category_name: "Rs25a",

          order: "حبة",
        },
        {
          id: 1,
          category_name: "Rs25a",

          order: "حبة",
        },
        {
          id: 1,
          category_name: "Rs25a",

          order: "حبة",
        },
      ],
    };
  },

  methods: {},
};
</script>
