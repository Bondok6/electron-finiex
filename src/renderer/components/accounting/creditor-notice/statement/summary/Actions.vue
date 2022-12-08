<template>
  <el-row class="mt-2 mx-3">
    <el-col :sm="24" :md="12" :lg="16">
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
          <span class="mb-1 d-inline-block">
            {{ $t("bonds-number") }}
          </span>
          <span class="input-style d-inline-block">
            55
          </span>
        </span>

        <span class="mt-2">
          <span class="mb-1 d-inline-block">
            {{ $t("total") }}
          </span>
          <span class="input-style"> 2.300.000 </span>
        </span>
      </div>
    </el-col>

    <el-col :sm="24" :md="12" :lg="8">
  <div class="mt-2 action-buttons-nonGrown  align-baseline">
    <el-button size="mini" class="mb-1 btn-primary px-3">{{ $t('display') }}</el-button>
    <el-button size="mini" class="mb-1" type="warning">{{ $t('print-pdf') }}</el-button>
    <el-button size="mini" class="mb-1 btn-orange">{{ $t('print-f4') }}</el-button>
  </div>
    </el-col>
  </el-row>
</template>