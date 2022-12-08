<template>
    <div class="text-center container ma-4 mx-8 py-2 mt-0 invoice-summary">
        <!-- <el-row :gutter="20" class="px-2"> -->

      <!-- <el-col :md="12" :lg="8"> -->
        <expenses class="px-2" />
      <!-- </el-col> -->
      <div class="text-left mt-2 ml-6">
   <actions />
   </div>
    <!-- </el-row> -->
    </div>
</template>
<script>
import Expenses from './Expenses';
import Actions from './Actions';
export default {
    name : 'summary-section',
    components : {
        Expenses,
        Actions
    }
}
</script>
