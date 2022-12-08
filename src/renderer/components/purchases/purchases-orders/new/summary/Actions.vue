<template>
  <el-container>
  <div class="mt-2 action-buttons-nonGrown horizontal-center">
    <NuxtLink :to="localePath('/purchases/purchases-orders')">
      <el-button size="mini" class="btn-blue">
        {{$t('save-f5')}}
      </el-button>
    </NuxtLink>

    <NuxtLink :to="localePath('/reports-and-statements/public-statements/purchases-invoices-statement')">
    <el-button size="mini" class="btn-violet-faded">{{$t('search-f7')}}</el-button>
    </NuxtLink>
    <el-button size="mini" class="btn-red">{{$t('delete-f8')}}</el-button>
    <NuxtLink :to="localePath('/purchases/purchases-orders')">
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
  name : "summary-action",
}
</script>