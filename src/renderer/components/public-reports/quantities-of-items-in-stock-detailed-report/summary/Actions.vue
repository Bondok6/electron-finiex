<template>
  <div class="d-flex space-between mt-2 mx-3">
    <div class="text-unbold sum">
      <span>
        {{$t('total')}}
      </span>
      <span class="input-style  mr-4">
        404,885.65
      </span>
    </div>

    <div >
      <el-button size="mini" class="mb-1" type="primary px-3"> {{ $t('display') }}</el-button>

      <el-button size="mini" class="mb-1" type="danger px-2">
        {{ $t('graph') }} <i class="el-icon-s-marketing el-icon-right"></i
      ></el-button>
      <el-button size="mini" class="mb-1" type="warning">{{ $t('print-pdf') }}</el-button>
      <el-button size="mini" class="mb-1 btn-orange">{{ $t('print-f4') }}</el-button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.sum {
  width: 50%;
}
</style>
