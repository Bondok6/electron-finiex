<template>
  <div class="mt-2 action-buttons-nonGrown ml-4 align-baseline">
    <span>
      <el-button size="mini" class="mb-1 btn-violet-light">{{
        $t("search-f7")
      }}</el-button>

      <NuxtLink :to="localePath('/inventory/stock-inventory-differences')">
        <el-button size="mini" class="mb-1 btn-blue">{{
          $t("save-f5")
        }}</el-button>
      </NuxtLink>
    </span>

    <span>
      <el-button size="mini" class="mb-1 btn-red">{{
        $t("delete-f8")
      }}</el-button>

      <NuxtLink :to="localePath('/inventory/stock-inventory-differences')">
        <el-button size="mini" class="mb-1 btn-violet">{{
          $t("back-f6")
        }}</el-button>
      </NuxtLink>
    </span>

    <span>
      <el-button size="mini" class="mb-1" type="warning">{{
        $t("print-pdf")
      }}</el-button>
      <el-button size="mini" class="mb-1 btn-orange">{{
        $t("print-f4")
      }}</el-button>
    </span>
  </div>
</template>