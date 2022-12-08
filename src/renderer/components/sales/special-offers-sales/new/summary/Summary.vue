<template>
  <div class="container ma-4  py-2 mt-0 invoice-summary">
    <el-row :gutter="20" class="px-2 bottom-row">
      <el-col :md="12" :lg="10">
        <notes />
      </el-col>

      <el-col :md="12" :lg="14" class="actions">
        <div>
          <actions />
        </div>
      </el-col>
    </el-row>
  </div>
</template>


<script>
import Notes from './Notes';
import Actions from './Actions';

export default {
  name: 'summary-section',
  components: { 
    Notes,
    Actions,
  }
}
</script>

<style lang="scss" scoped>
.bottom-row {
  display: flex;
  align-items: flex-end;
  flex-wrap: wrap;
}
.actions {
  display: flex;
  justify-content: center;
}
</style>