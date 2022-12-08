
<template>
  <div
    class="
      justify-center
      mt-2
      action-buttons-nonGrown
      align-center align-baseline
    "
  >
    <el-button size="mini" class="mb-1" type="primary">{{
      $t("new-f2")
    }}</el-button>
    <el-button size="mini" class="mb-1 btn-blue">{{ $t("save-f5") }}</el-button>

    <el-button size="mini" class="mb-1 btn-red">{{
      $t("delete-f8")
    }}</el-button>
    <el-button size="mini" class="mb-1 btn-orange">{{
      $t("edit-f3")
    }}</el-button>
    <el-button size="mini" class="mb-1 btn-violet">{{
      $t("back-f6")
    }}</el-button>

    <el-button size="mini" class="mb-1 btn-violet-faded">{{
      $t("search-f7")
    }}</el-button>

    <el-button size="mini" class="mb-1 btn-grey">{{
      $t("print-f4")
    }}</el-button>
    <el-button size="mini" class="mb-1 btn-grey">{{
      $t("print-pdf")
    }}</el-button>
  </div>
</template>
