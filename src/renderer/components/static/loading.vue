<template>
  <div
    v-loading.lock="loading"
    style="height: 500px"
    element-loading-text="Loading..."
    element-loading-spinner="el-icon-loading"
    element-loading-background="#eee"
  ></div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      loading: state => state.isLoading
    })
  }
};
</script>

<style>
</style>