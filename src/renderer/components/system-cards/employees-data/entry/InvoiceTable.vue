<template>
  <el-container class="container ma-4 mt-0 mb-0 invoice-table">
    <el-table :data="data" style="width: 100%" stripe border max-height="750">
      <el-table-column
        align="center"
        type="index"
        width="40"
        :label="$t('id')"
      />
      <el-table-column
        align="center"
        prop="employeeCode"
        :label="$t('employee-number')"
      >
        <template slot-scope="scope">
          <NuxtLink :to="localePath('/system-cards/employees-data/edit')">
            <span>{{ scope.row.employeeCode }}</span>
          </NuxtLink>
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        prop="employeeName"
        :label="$t('employee-name')"
      />
      <el-table-column
        align="center"
        prop="accId"
        :label="$t('account-number')"
      />
    </el-table>
  </el-container>
</template>
<script>
export default {
  props: {
    data: {
      type: Array,
      default: []
    }
  },
  data: function() {
    return {};
  }
};
</script>
