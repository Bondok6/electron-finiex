<template>
  <div class="mt-2 action-buttons-nonGrown align-baseline">
    <span>
      <NuxtLink :to="localePath('/inventory/stock-adjustment-decrease')">
        <el-button size="mini" class="mb-1 btn-blue">{{
          $t("save-f5")
        }}</el-button>
      </NuxtLink>
      <el-button size="mini" class="mb-1 btn-violet-faded">{{
        $t("search-f7")
      }}</el-button>
    </span>
    <span>
      <el-button size="mini" class="mb-1 btn-red">{{
        $t("delete-f8")
      }}</el-button>

      <NuxtLink :to="localePath('/inventory/stock-adjustment-decrease')">
        <el-button size="mini" class="mb-1 btn-violet">{{
          $t("back-f6")
        }}</el-button>
      </NuxtLink>
    </span>

    <span>
      <el-button size="mini" class="mb-1 btn-grey">{{
        $t("print-f4")
      }}</el-button>
      <el-button size="mini" class="mb-1 btn-grey">{{
        $t("print-cashier")
      }}</el-button>
    </span>
  </div>
</template>
