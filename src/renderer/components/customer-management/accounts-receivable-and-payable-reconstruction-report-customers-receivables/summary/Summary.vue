<template>
  <div class="container ma-4 py-2 mt-0 invoice-summary">
    <el-row :gutter="20" class="px-2">
      <el-col :span="24">
        <notes />
      </el-col>
      <el-col :sm="24" :md="12" :lg="14">
        <expenses />
        <br />
      </el-col>

      <el-col :sm="24" :md="12" :lg="10">
        <actions />
      </el-col>
    </el-row>
  </div>
</template>


<script>
import Notes from "./Notes";
import Expenses from "./Expenses";
import Actions from "./Actions";

export default {
  name: "summary-section",
  components: {
    Notes,
    Expenses,
    Actions,
  },
};
</script>