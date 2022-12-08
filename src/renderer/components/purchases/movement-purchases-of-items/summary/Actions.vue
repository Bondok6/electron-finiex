<template>
  <div class="mt-2 action-buttons-nonGrown">
    <el-button size="mini" class="mb-1" type="primary px-2"> {{ $t('display') }}</el-button>
    <el-button size="mini" class="mb-1 btn-red-faded px-2"> {{ $t('graph') }} <i class="el-icon-s-marketing el-icon-right"></i></el-button>
    <el-button size="mini" class="mb-1" type="warning">{{ $t('print-pdf') }}</el-button>
    <el-button size="mini" class="mb-1 btn-orange">{{ $t('print-f4') }}</el-button>
  </div>
</template>