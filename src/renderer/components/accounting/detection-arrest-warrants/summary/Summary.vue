<template>
  <div class="container mx-8 py-2 mt-0 invoice-summary">
    <el-row :gutter="6" class="width-full">
      <el-col :xs="24" :sm="24" :md="12" :lg="12">
        <div class="mx-8 py-2 mt-0 invoice-summary">
          <expenses />
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :md="12" :lg="12">
        <div class="inline-button-container d-flex">
          <div class="spacer"></div>
          <div class="mx-8 py-2 ml-6 mt-0 invoice-summary">
            <actions />
          </div>
        </div>
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
    Actions
  }
};
</script>
