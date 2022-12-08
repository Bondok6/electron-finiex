<template>
  <div class="justify-center mt-2 action-buttons-nonGrown align-center">
  <NuxtLink :to="localePath('/inventory/stock-inventory-differences/new')">
   <el-button size="mini" type="primary" >{{ $t('new-f2') }}</el-button>
  </NuxtLink>
    <el-button size="mini" type="info">{{ $t('print-f4') }}</el-button>
  </div>
</template>
