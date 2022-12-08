<template>
  <div class="container py-2 mt-0 invoice-summary summary-mod">
    <el-row>
      <expenses />
    </el-row>
    
    <el-row>
      <actions />
    </el-row>
  </div>
</template>


<script>
import Expenses from "./Expenses";
import Actions from "./Actions";

export default {
  name: "summary-section",
  components: {
    Expenses,
    Actions,
  },
};
</script>

<style lang="scss" scoped>
.summary-mod {
  margin-left: 2rem !important;
  margin-right: 0 !important;
  border-radius: 0 !important;
  box-shadow: none !important;
}
</style>