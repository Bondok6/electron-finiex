<template>
  <div
    class="mt-2 action-buttons-nonGrown justify-center align-center align-baseline"
  >
  <NuxtLink :to="localePath('/files/rotate-closing-accounts')">
    <el-button class="mb-1 px-4-lg btn-navy">{{ $t("agree") }}</el-button>
  </NuxtLink>
    <el-button class="mb-1 btn-white px-4-lg mr-2">{{
      $t("cancel")
    }}</el-button>
  </div>
</template>
