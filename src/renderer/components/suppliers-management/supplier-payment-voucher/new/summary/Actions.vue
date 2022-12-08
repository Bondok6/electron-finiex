<template>
  <div class="justify-center mt-2 action-buttons-nonGrown align-center align-baseline">
    <NuxtLink :to="localePath('/suppliers-management/supplier-payment-voucher')">
    <el-button size="mini" class="mb-1 btn-gray">{{ $t('save-f5') }}</el-button>
    </NuxtLink>
     <el-button size="mini" class="mb-1 btn-red">{{ $t('delete-f8') }}</el-button>
     <NuxtLink :to="localePath('/suppliers-management/supplier-payment-voucher')">
    <el-button size="mini" class="mb-1 btn-violet">{{ $t('back-f6') }}</el-button>
    </NuxtLink>
    <NuxtLink :to="localePath('/reports-and-statements/public-statements/payments-vouchers-statements-report-details')">
    <el-button size="mini"  class="mb-1 btn-violet-faded mx-1">{{ $t('search-f7') }}</el-button>
    </NuxtLink>
   <el-button size="mini"  class="mb-1 btn-dark-yello">{{ $t('print-f4') }}</el-button>
     <el-button size="mini"  class="mb-1 btn-grey">{{ $t('print-pdf') }}</el-button>
     <el-button size="mini"  class="mb-1 btn-green-lighter">{{ $t('archive-f11') }}</el-button>
    <el-button size="mini" class="mb-1 btn-grey">{{ $t('attach-a-file') }}</el-button>
    
   
    <el-button size="mini" class="mb-1 btn-cyan">{{ $t('deferred-bond') }}</el-button>
  </div>
</template>
