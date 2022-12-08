<template>
  <div class="container ma-4  py-2 mt-0 invoice-summary">
    <el-row :gutter="25" class="px-2">
      <el-col :lg="14" :md="12" :sm="13" :xs="15">
        <expenses class="px-2" />
      </el-col>
      <el-col :lg="10" :md="12" :sm="9" :xs="20">
        <actions />
      </el-col>
      </el-row>
  </div>
</template>


<script>
import Expenses from './Expenses';

import Actions from './Actions';

export default {
  name: 'summary-section',
  components: { 
    Expenses,
    Actions,
  }
}
</script>