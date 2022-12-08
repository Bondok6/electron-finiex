
<template>
  <div
    class="
      justify-center
      mt-2
      action-buttons-nonGrown
      align-center align-baseline
    "
  >
    <el-button size="mini" class="mb-1 btn-blue">{{ $t("save-f5") }}</el-button>
    <el-button size="mini" class="mb-1 btn-green-lighter">{{
      $t("edit-f3")
    }}</el-button>

    <el-button size="mini" class="mb-1 btn-primary px-3">{{
      $t("display")
    }}</el-button>
    <el-button size="mini" class="mb-1" type="warning">{{
      $t("print-pdf")
    }}</el-button>
    <el-button size="mini" class="mb-1 btn-orange">{{
      $t("print-f4")
    }}</el-button>
  </div>
</template>
