<template>
  <div class=" d-flex justify-end text-area-ml">
    <el-input
      class="notes-summary"
      type="textarea"
      :rows="7"
      :placeholder="$t('notes')"
      v-model="notes"
    >
    </el-input>
  </div>
</template>

<script>
export default {
  data() {
    return {
      notes: ''
    }
  }
}
</script>

<style scoped>
.text-area-ml {
  margin-left: 0.4rem;
}
</style>