<template>
 <div class="justify-center mt-2 action-buttons-nonGrown ml-6 align-center align-baseline" >
  <NuxtLink :to="localePath('/inventory/store-exchange-order/new')">
    <el-button size="mini" class="mb-1" type="primary" >{{ $t('new-f2') }}</el-button>
  </NuxtLink> 
    <el-button size="mini"  class="mb-1 btn-grey">{{ $t('print-f4') }}</el-button>
  </div>
</template>