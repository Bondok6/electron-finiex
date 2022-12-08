<template>
  <div class="container ma-4  py-2 mt-0 invoice-summary">
    <el-row :gutter="20" class="px-2">
      <el-col :md="12" :lg="8" class="bordered-ar bordered-en">
        <totals />
      </el-col>

      <el-col :md="12" :lg="16">
        <el-row :gutter="20">
          <el-col :md="24" :lg="15">
            <intervals/>
          </el-col>

          <el-col :md="24" :lg="9">
            <notes />
          </el-col>
        </el-row>
      </el-col>
    </el-row>

    <el-row :gutter="20" class="px-2 mt-1">
      <bottom />
    </el-row>
  </div>
</template>


<script>
import Totals from './Totals';
import Intervals from './Intervals';
import Notes from './Notes';
import Actions from './Actions';
import Bottom from './Bottom';

export default {
  name: 'summary-section',
  components: { 
    Totals,
    Intervals,
    Notes,
    Actions,
    Bottom,
  },
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
</style>