<template>
  <div
    class="container border-radius-20 background-popup mb-0 px-2 py-3"
  >
  <el-row>
    <el-col :xs="24" :sm="24" :md="24">
      <div class="" style="padding:20px;">
          <span>{{ $t("fiscal-year-closing") }}</span>
        </div>
        <div class="width-full closing">
        </div>
        <div class="" style="padding:20px;">
          <span>{{ $t("please-wait-a-bit") }}</span>
        </div>
    </el-col>
  </el-row>
  </div>
</template>

<script>
export default {

}
</script>
<style lang="scss" scoped>
.background-popup {
  background-color: #e6f8fc;
}
.closing {
  border: 1px solid #707070;
  height: 20px;
  background-color: #FFF;
  padding: 3px;
}
</style>