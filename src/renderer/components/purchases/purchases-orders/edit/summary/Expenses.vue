<template>
  <el-form class="expenses-form" label-position="top">
    <el-form-item :label="$t('total-expenses')">
      <el-input v-model="form.total" class="pa-0"></el-input>
    </el-form-item>
    <el-form-item :label="$t('sum-LE')">
      <el-input v-model="form.total_LE" class="pa-0"></el-input>
    </el-form-item>
  </el-form>
</template>
<script>
export default {
  name: "expenses",
  data: function () {
    return {
      form: {
        total: 0,
        total_LE : 0
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.el-form-item__label {
  padding: 0 !important;
}
</style>