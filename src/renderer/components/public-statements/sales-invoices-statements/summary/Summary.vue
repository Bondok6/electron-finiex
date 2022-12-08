<template>
  <div class="container ma-4  py-2 mt-0 invoice-summary">
    <el-row :gutter="20" class="px-2">
      <el-col :sm="15" :md="15" :lg="15">
        <expenses />
        <br />
      </el-col>
      
      <el-col :sm="9" :md="9" :lg="9">
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