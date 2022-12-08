<template>
  <div>
    <el-input
      class="notes-summary"
      type="textarea"
      :rows="7"
      :placeholder="$t('description')"
    >
    </el-input>
  </div>
</template>
<script>
export default {
  name: "expenses",
};
</script>
