<template>
  <div class="container ma-4  py-2 mt-0 invoice-summary">
    <el-row :gutter="20" class="px-2">
      <el-col :md="12" :lg="6">
        <totals />
      </el-col>

      <el-col :md="12" :lg="3" class="bordered">
        <expenses class="px-2" />
      </el-col>

      <el-col :md="12" :lg="15">

        <el-row :gutter="20">
          <el-col :md="24" :lg="15">
            <intervals />
          </el-col>

          <el-col :md="24" :lg="9">
            <notes />
          </el-col>
        </el-row>

        <actions />
      </el-col>
    </el-row>
  </div>
</template>


<script>
import Totals from './Totals';
import Expenses from './Expenses';
import Intervals from './Intervals';
import Notes from './Notes';
import Actions from './Actions';

export default {
  name: 'summary-section',
  components: { 
    Totals,
    Expenses,
    Intervals,
    Notes,
    Actions,
  }
}
</script>

<style lang="scss" scoped>
.bordered {
  border-left: 1px solid #707070;
  border-right: 1px solid #707070;
}
</style>