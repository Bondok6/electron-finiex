<template>
  <el-form class="expenses-form">
    <el-form-item label="إجمالي المصروفات">
      <el-input v-model="form.total"></el-input>
    </el-form-item>
    <el-form-item label=" المجموع  L.E">
      <el-input v-model="form.total_LE"></el-input>
    </el-form-item>
    <el-form-item label="الصافي L.E">
      <el-input v-model="form.net"></el-input>
    </el-form-item>

      <el-button class="mt-1 d-block width-full" type="success">جبر الفاصلة</el-button>
  </el-form>
</template>

<script>
export default {
  name: "expenses",

  data: function () {
    return {
      form: {
        total: 0,
        total_LE: 0,
        net: 0,
      },
    };
  },
};
</script>