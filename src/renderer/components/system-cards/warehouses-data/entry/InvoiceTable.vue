<template>
  <el-container class="container ma-4 mt-0 mb-0 invoice-table">
    <el-table :data="data" style="width: 100%" stripe border  max-height="750">

      <el-table-column align="center" type="index" width="40" :label="$t('id')" />
      <el-table-column align="center" prop="code" :label="$t('warehouse-No')">
        <template slot-scope="scope">
          <NuxtLink :to="localePath('/system-cards/warehouses-data/edit/' + scope.row.code)">
          <span>{{scope.row.code}}</span>
          </NuxtLink>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="name" :label="$t('warehouse-name')" />
      <el-table-column align="center" prop="nameEng" :label="$t('nameEng')">
        <template slot-scope="scope">
          <span>{{scope.row.nameEng  ? scope.row.nameEng : 'No Data'}}</span>
        </template>
      </el-table-column>
    </el-table>
  </el-container>
</template>


<script>
export default {
  name: "invoice",
 props: {
    data: {
      default: [],
      required: true
    }
  },
  data: function () {
    return {};
  },

  methods: {

  }
};
</script>
