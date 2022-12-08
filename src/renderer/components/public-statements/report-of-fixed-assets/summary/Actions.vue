<template>
  <div class="mt-2 action-buttons-nonGrown  align-baseline">
    <el-button size="mini" class="mb-1 px-3" type="primary">{{ $t('display') }}</el-button>
    <el-button size="mini" class="mb-1" type="warning">{{ $t('print-pdf') }}</el-button>
    <el-button size="mini" class="mb-1 btn-orange">{{ $t('print-f4') }}</el-button>
  </div>
</template>
<script>
export default {
    name : 'actions'
}
</script>
