<template>
  <el-row class="mt-2 mx-3">
    <el-col :sm="24" :md="12" :lg="8">
      <div
        class="
          text-unbold
          d-flex
          flex-wrap
          align-baseline
          action-buttons-right
          mb-2
        "
      >
        <span>
          {{ $t("total") }}
        </span>
        <span class="input-style  mr-4"> 29 </span>
      </div>
    </el-col>

    <el-col :sm="24" :md="12" :lg="16">
      <div class="action-buttons-left">
        <NuxtLink :to="localePath('/inventory/items-ungrouping-order')">
        <el-button size="mini" class="mb-1 btn-blue">{{
          $t("save-f5")
        }}</el-button>
        </NuxtLink>

          <el-button size="mini" class="mb-1 btn-violet-faded">{{
            $t("search-f7")
          }}</el-button>
        <el-button size="mini" class="mb-1 btn-red">{{
          $t("delete-f8")
        }}</el-button>

        <NuxtLink :to="localePath('/inventory/items-ungrouping-order')">
        <el-button size="mini" class="mb-1 btn-violet">{{
          $t("back-f6")
        }}</el-button>
        </NuxtLink> 
        <el-button size="mini"  class="mb-1 btn-grey">{{
          $t("print-pdf")
        }}</el-button>
        <el-button size="mini"  class="mb-1 btn-grey">{{
          $t("print-f4")
        }}</el-button>
      </div>
    </el-col>
  </el-row>
</template>