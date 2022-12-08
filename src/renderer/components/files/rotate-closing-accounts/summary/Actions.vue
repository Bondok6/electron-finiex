<template>
    <div
    class="mt-2 action-buttons-nonGrown justify-center align-center align-baseline"
  >
  <NuxtLink :to="localePath('/files/archiving-current-closing')">
  <el-button class="mb-1 px-4-lg btn-cyan-light">{{ $t("the-beginning-of-the-closing-of-the-fiscal-year") }}</el-button>
  </NuxtLink>
  <el-button class="mb-1 px-4-lg btn-meduimyellow mr-2">{{ $t("cancel-order") }}</el-button>
  </div>
</template>