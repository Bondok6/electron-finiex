<template>
  <div class="container ma-4 py-2 mt-0 invoice-summary">
    <el-row class="px-2">
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
