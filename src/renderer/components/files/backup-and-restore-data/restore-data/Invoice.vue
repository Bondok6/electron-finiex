<template>
  <div class="container border-radius-20 box-shadow mb-0 px-2 py-3 invoice-table">
    <el-row>
      <el-col :xs="24" :sm="24" :md="24">
        <div class="mb-2" style="padding:20px;">
          <span>{{ $t("please-wait-data-is-being-restored") }}</span>
        </div>
        <div class="width-full loading">

            <div class="navy-span"></div>
            <div class="gray-span"></div>
            <div class="navy-span"></div>
            <div class="gray-span"></div>
            <div class="navy-span"></div>
            <div class="gray-span"></div>
            <div class="navy-span"></div>
            <div class="gray-span"></div>
            <div class="navy-span"></div>
            <div class="gray-span"></div>
            <div class="navy-span"></div>
            <div class="gray-span"></div>
            <div class="navy-span"></div>
            <div class="gray-span"></div>
            <div class="navy-span"></div>
            <div class="gray-span"></div>
            <div class="navy-span"></div>
            <div class="gray-span"></div>
            <div class="navy-span"></div>
            <div class="gray-span"></div>
            <div class="navy-span"></div>
            <div class="gray-span"></div>
            <div class="navy-span"></div>
            <div class="gray-span"></div>
            <div class="navy-span"></div>
            <div class="gray-span"></div>
            <div class="navy-span"></div>
            <div class="gray-span"></div>
            <div class="navy-span"></div>
            <div class="gray-span"></div>
            <div class="navy-span"></div>
            <div class="gray-span"></div>
            <div class="navy-span"></div>
            <div class="gray-span"></div>
            <div class="navy-span"></div>
            <div class="gray-span"></div>
            <div class="navy-span"></div>
            <div class="gray-span"></div>
            <div class="navy-span"></div>
            <div class="gray-span"></div>
            <div class="navy-span"></div>
            <div class="gray-span"></div>
            <div class="navy-span"></div>
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
.loading{
    border: 1px solid #707070;
    height: 20px;
    border-radius: 10px;
    overflow: hidden;
}
.navy-span {
    margin-right: 5px;
    margin-left: 5px;
    background-color: #21798D;
    height: 100%;
    width: 20px;
    display: inline-block;
    border-radius: 5px;
}
.gray-span {
    background-color: #707070;
    height: 100%;
    width: 20px;
    display: inline-block;
    border-radius: 5px;
}
</style>