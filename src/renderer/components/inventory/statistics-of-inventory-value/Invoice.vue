<template>
  <el-container class="container box-shadow ma-4 mb-0 px-2 py-3">
    <el-form class="invoice-form width-full" label-position="top" :model="form">
      <el-row :gutter="6" class="width-full">
        <el-col :xs="24" :sm="8" >
          <el-form-item :label="$t('branch-name')">
            <el-select v-model="form.branch_name">
              <el-option :label="$t('main-branch')" :value="2"></el-option>
              <el-option :label="$t('main-branch')" :value="1"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </el-container>
</template>


<script>
export default {
  name: "invoice",

  data: function () {
    return {
      form: {
        branch_name: 1,
      },
    };
  },
};
</script>