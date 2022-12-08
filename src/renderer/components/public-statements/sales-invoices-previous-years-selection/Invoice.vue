<template>
  <el-container class="container ma-1 mb-0 px-2 py-3">
    <div class="width-full text-center title">{{$t('please-select-prev-years')}}</div>
  </el-container>
</template>


<script>
export default {
  name: "invoice",

  data: function () {
    return {
      
    };
  },
};
</script>

<style lang="scss" scoped>
.title {
  color: #909399;
  font-size: 1.4vw;
}
</style>