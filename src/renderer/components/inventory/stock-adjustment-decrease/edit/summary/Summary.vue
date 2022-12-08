<template>
  <div class="container ma-4  py-2 mt-0 invoice-summary">
    <el-row :gutter="20" class="px-2">
      <notes />
      <el-col :sm="24" :md="12" :lg="8">
        <expenses />
        <br />
      </el-col>

      <el-col :sm="24" :md="12" :lg="16">
        <actions />
      </el-col>
    </el-row>

    
  </div>
</template>


<script>
import Expenses from "./Expenses";
import Actions from "./Actions";
import Notes from "./Notes";

export default {
  name: "summary-section",
  components: {
    Expenses,
    Actions,
    Notes,
  },
};
</script>