<template>
  <div class="container ma-4  py-2 mt-0 invoice-summary">
    <el-row :gutter="25" class="px-2">
      
        <expenses class="px-2" />
    </el-row>
    

        <actions />
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