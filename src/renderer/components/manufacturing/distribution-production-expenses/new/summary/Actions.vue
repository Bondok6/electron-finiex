<template>
  <div
    class="
      justify-center
      mt-2
      action-buttons-nonGrown
      align-center align-baseline
    "
  >
    <NuxtLink
      :to="localePath('/manufacturing/distribution-production-expenses')"
    >
      <el-button size="mini" class="mb-1 btn-blue">{{
        $t("save-f5")
      }}</el-button>
    </NuxtLink>
    <NuxtLink
      :to="localePath('/manufacturing/report-distribution-production-expenses')"
    >
      <el-button size="mini" class="mb-1 btn-violet-faded">{{
        $t("search-f7")
      }}</el-button>
    </NuxtLink>
    <el-button size="mini" class="mb-1 btn-red">{{
      $t("delete-f8")
    }}</el-button>
    <NuxtLink
      :to="localePath('/manufacturing/distribution-production-expenses')"
    >
      <el-button size="mini" class="btn-violet">{{ $t("back-f6") }}</el-button>
    </NuxtLink>

    <el-button size="mini" class="mb-1 btn-grey">{{
      $t("print-pdf")
    }}</el-button>
    <el-button size="mini" class="mb-1 btn-grey">{{
      $t("print-f4")
    }}</el-button>
    <el-button size="mini" class="mb-1 btn-grey">{{
      $t("print-cashier")
    }}</el-button>
  </div>
</template>