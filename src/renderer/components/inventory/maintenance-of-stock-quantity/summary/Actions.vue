<template>
  <div>
    <span class="d-flex justify-end">
      <div class="loader" v-if="loader"></div>
    </span>
    <div class="d-flex action-buttons-nonGrown mt-1 mx-3">
      <el-button size="mini" type="warning" class="mb-1">{{
        $t("display-f7")
      }}</el-button>
      <el-button size="mini" class="mb-1 btn-blue" @click="loader = true">{{
        $t("refresh-f5")
      }}</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      loader: false,
    };
  },
};
</script>

<style scoped>
.loader {
  border: 8px solid #f3f3f3; /* Light grey */
  border-top: 8px solid #3498db; /* Blue */
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 2s linear infinite;
  margin: 5px 20px;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>