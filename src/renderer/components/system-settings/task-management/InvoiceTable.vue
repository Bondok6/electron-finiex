<template>
  <el-container class="container mt-0 mb-0 invoice-table table-header-blue">
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
        prop="user_number"
        :label="$t('user-number')"
      />
      <el-table-column
        align="center"
        prop="user_name"
        :label="$t('user-name')"
      />
      <el-table-column align="center" width="100" label="...">
        <template>
          <el-checkbox v-model="form.value_add_tax" />
        </template>
      </el-table-column>
    </el-table>
  </el-container>
</template>


<script>
export default {
  name: "invoice",

  data: function () {
    return {
      form: {},
      tableData: [
        {
          id: 1,
          user_number: "100",
          user_name: "الوحدة",
        },
        {
          id: 1,
          user_number: "101",
          user_name: "الوحدة",
        },
      ],
    };
  },

  methods: {},
};
</script>
