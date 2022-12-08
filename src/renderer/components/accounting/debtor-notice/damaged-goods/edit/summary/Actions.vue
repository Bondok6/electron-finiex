<template>
  <div class="mt-2 action-buttons-nonGrown justify-center align-baseline">
    <NuxtLink :to="localePath('/accounting/creditor-notice')">
      <el-button size="mini" class="mb-1" type="info">{{
        $t("save-f5")
      }}</el-button>
    </NuxtLink>
    <el-button size="mini" class="mb-1 btn-red">{{
      $t("delete-f8")
    }}</el-button>

    <NuxtLink :to="localePath('/accounting/creditor-notice')">
      <el-button size="mini" class="mb-1 btn-violet">{{
        $t("back-f6")
      }}</el-button>
    </NuxtLink>
    <NuxtLink :to="localePath('/accounting/creditor-notice/statement')">
      <el-button size="mini" class="mb-1 btn-violet-faded">{{
        $t("search-f7")
      }}</el-button>
    </NuxtLink>
    <el-button size="mini" class="mb-1 btn-orange">{{
      $t("print-f4")
    }}</el-button>
    <el-button size="mini" class="mb-1 btn-grey">{{
      $t("print-pdf")
    }}</el-button>
    <el-button size="mini" class="mb-1 btn-green-lighter">{{
      $t("archive-f11")
    }}</el-button>
    <el-button size="mini" class="mb-1 btn-grey">{{
      $t("attach-file")
    }}</el-button>
    <el-button size="mini" class="mb-1 btn-cyan">{{
      $t("deferred-bond")
    }}</el-button>
  </div>
</template>