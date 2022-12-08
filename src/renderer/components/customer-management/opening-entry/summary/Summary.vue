<template>
  <div class="container ma-4 py-2 mt-0 invoice-summary">
    <el-row :gutter="20" class="px-2">
      <el-col :span="24" class="mb-4">
        <expenses />
      </el-col>
      <el-col :span="24" class="mt-4">
        <actions />
      </el-col>
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