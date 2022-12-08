<template>
  <div class="container ma-4  py-2 mt-0 invoice-summary">
    <el-row :gutter="20" class="px-2">
      <el-col :md="12" :lg="6">
        <totals />
      </el-col>
      <el-col :md="12" :lg="18">
        <el-row :gutter="20">
          <el-col :md="24" :lg="15" class="side-border">
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
import Totals from "./Totals";
import Intervals from "./Intervals";
import Notes from "./Notes"
import Actions from "./Actions"
export default {
  name: "summary-section",
  components: {
    Totals,
    Intervals,
    Notes,
    Actions
  }
};
</script>
<style lang="scss" scoped>
.side-border {
  [dir='rtl'] & {
    border-right: 1px solid #707070;
  }
  [dir='ltr'] & {
    border-left: 1px solid #707070;
  }
}
</style>
