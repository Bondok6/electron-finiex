<template>
  <div class="container ma-4  py-2 mt-0 invoice-summary">
    <el-row :gutter="20" class="px-2">
      <el-col :md="12" :lg="8" class="bordered-ar bordered-en">
        <totals />
      </el-col>

      <el-col :md="12" :lg="8">
        <expenses />
      </el-col>

      <el-col :md="12" :lg="7">
        <el-row :gutter="20">
            <notes />
        </el-row>
      </el-col>
    </el-row>

    <el-row :gutter="20" class="width-full px-2 mt-1 mod">
      <actions />
    </el-row>
  </div>
</template>


<script>
import Totals from './Totals';
import Expenses from './Expenses';
import Notes from './Notes';
import Actions from './Actions';

export default {
  name: 'summary-section',
  components: { 
    Totals,
    Expenses,
    Notes,
    Actions,
  }
}
</script>

<style lang="scss" scoped>
[dir = 'rtl'] {
  .bordered-ar {
    border-right: none;
    border-left: 1px solid #707070;
  }
}

.bordered-en {
  border-right: 1px solid #707070;
  border-left: none;
}

.mod {
  display: flex;
  justify-content: flex-end;
}
</style>