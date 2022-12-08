<template>
  <el-container>
    <div class="action-buttons horizontal-center">
      <NuxtLink :to="localePath('/sales/special-offers-sales')">
        <el-button size="mini" class="btn-blue">
          {{$t('save-f5')}}
        </el-button>
      </NuxtLink>

      <NuxtLink :to="localePath('/reports-and-statements/public-statements/report-of-special-offers')" >
        <el-button size="mini" class="btn-violet-faded">{{$t('search-f7')}}</el-button>
      </NuxtLink>

      <el-button size="mini" class="btn-red">{{$t('delete-f8')}}</el-button>

      <NuxtLink :to="localePath('/sales/special-offers-sales')" >
        <el-button size="mini" class="btn-violet">
          {{$t('back-f6')}}
        </el-button>
      </NuxtLink>

      <el-button size="mini" class="btn-cyan">{{$t('suspend-invoice-f9')}}</el-button>
      <el-button size="mini"  class="btn-grey">{{$t('print-pdf')}}</el-button>
      <el-button size="mini"  class="btn-grey">{{$t('print-f4')}}</el-button>
    </div>
  </el-container>
</template>

<script>

export default {
  name: "Actions",
}
</script>

<style lang="scss" scoped>
.horizontal-center {
  align-items: center;
}
.label {
  color: #6dd1cf;
}

.el-button {
  padding: 0.6rem !important;
}
</style>