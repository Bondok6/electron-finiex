<template>
  <div
    class="justify-center mt-2 action-buttons-nonGrown align-center align-baseline"
  >
  <NuxtLink :to="localePath('/system-cards/employees-data')">
      <el-button size="mini" class="mb-1 btn-blue">{{
        $t("save-f5")
      }}</el-button>
  </NuxtLink>
    <el-button size="mini" class="mb-1 btn-red">{{
      $t("delete-f8")
    }}</el-button>
    <NuxtLink :to="localePath('/system-cards/employees-data')">
      <el-button size="mini" class="mb-1 btn-violet">{{
        $t("back-f6")
      }}</el-button>
    </NuxtLink>
    <el-button size="mini" class="mb-1 btn-grey">{{
      $t("print-f4")
    }}</el-button>
    <el-button size="mini" class="mb-1" type="warning">{{
      $t("print-form")
    }}</el-button>
  </div>
</template>
