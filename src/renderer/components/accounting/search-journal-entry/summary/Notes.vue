<template>
  <div>
    <el-input
      class="notes-summary"
      type="textarea"
      :rows="7"
      :placeholder="$t('statement')"
    >
    </el-input>
  </div>
</template> 
<script>
export default {
    name : 'notes'
}
</script>
