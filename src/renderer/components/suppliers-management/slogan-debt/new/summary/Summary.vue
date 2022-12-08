<template>
    <div class="text-center container ma-4 py-2 mt-0 invoice-summary">
       <el-row :gutter="20" class="px-2">
      <el-col :sm="24" :md="12" :lg="13">
      <expenses />
        <br />
      </el-col>

      <el-col :sm="24" :md="12" :lg="11">
            <notes />
      </el-col>
    </el-row>
            <actions />

    </div>
</template>
<script>
import Expenses from './Expenses';
import Actions from './Actions';
import Notes from "./Notes";

export default {
    name : 'summary-section',
    components : {
        Expenses,
        Actions,
        Notes
    }
}
</script>
