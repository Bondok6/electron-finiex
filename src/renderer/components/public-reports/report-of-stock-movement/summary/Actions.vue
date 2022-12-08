<template>
  <div class="d-flex space-between mt-4 mx-3 flex-wrap">
    <span  style="margin-bottom: 10px; width: auto;">
      <span class="mb-2 d-inline-block">
        {{$t('total')}}
      </span>
      <span class="input-style d-inline-block">
        404,885.65
      </span>
    </span>

    <span>
      <el-button size="mini" class="mb-1" type="primary px-3"> {{ $t('display') }}</el-button>

      <el-button size="mini" class="mb-1" type="danger px-2">
        {{ $t('graph') }} <i class="el-icon-s-marketing el-icon-right"></i
      ></el-button>
      <el-button size="mini" class="mb-1" type="warning">{{ $t('print-pdf') }}</el-button>
      <el-button size="mini" class="mb-1 btn-orange">{{ $t('print-f4') }}</el-button>
    </span>
  </div>
</template>