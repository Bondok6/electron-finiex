<template>
  <div
    class="mt-2 action-buttons-nonGrown justify-center align-center align-baseline"
  >
  <NuxtLink :to="localePath('/files/backup-and-restore-data/backup-data')">
  <el-button class="mb-1 px-4-lg btn-cyan">{{ $t("make-a-copy-of-the-existing-data") }}</el-button>
  </NuxtLink>
  <NuxtLink :to="localePath('/files/backup-and-restore-data/restore-data')">
  <el-button class="mb-1 px-4-lg btn-yellow mr-2">{{ $t("restore-data-to-the-current-database") }}</el-button>
  </NuxtLink>
  </div>
</template>
