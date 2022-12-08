
<template>
  <div class="mt-0_6 action-buttons-nonGrown ml-6">
    <el-button size="mini" class="mb-1 btn-primary px-3">{{
      $t("display")
    }}</el-button>
    <el-button size="mini" class="mb-1 px-4-lg" type="danger">
      {{ $t("chart") }}<i class="el-icon-s-marketing el-icon-right"></i
    ></el-button>
    <el-button size="mini" class="mb-1" type="warning">{{
      $t("print-pdf")
    }}</el-button>
    <el-button size="mini" class="mb-1 btn-orange">{{
      $t("print-f4")
    }}</el-button>
  </div>
</template>
