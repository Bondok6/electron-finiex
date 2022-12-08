<template>
  <div class="mt action-buttons-nonGrown ml-6">
    <el-button size="mini" class="mb-1 btn-blue">{{ $t("save-f5") }}</el-button>

    <el-button size="mini" class="mb-1 btn-red">
      {{$t("delete-f8")}}
    </el-button>

    <el-button size="mini" class="mb-1 btn-violet">
      {{$t("back-f6")}}
    </el-button>

    <el-button size="mini" class="mb-1 btn-cyan px-3">{{ $t("list") }}</el-button>

    <el-button size="mini" class="mb-1 btn-grey">
      {{ $t("print-pdf")}}
    </el-button>

    <el-button size="mini" class="mb-1 btn-grey">
      {{$t("print-f4")}}
    </el-button>

    <el-button size="mini" class="mb-1 btn-grey">
      {{$t("print-cashier")}}
    </el-button>

    <el-button size="mini" class="mb-1 btn-orange">
      {{$t("suspended-invoice")}}
    </el-button>
  </div>
</template>

<style lang="scss" scoped>
.mt {
  margin-top: 11rem;
}
</style>