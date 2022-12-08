<template>
  <div class="justify-center mt-2 action-buttons-nonGrown align-center align-baseline">
    <NuxtLink :to="localePath('/suppliers-management/slogan-debt/new')">
    <el-button size="mini" class="mb-1" type="primary">{{ $t('new-f2') }}</el-button>
    </NuxtLink>
    <el-button size="mini"  class="mb-1 btn-grey">{{ $t('print-f4') }}</el-button>
  </div>
</template>
