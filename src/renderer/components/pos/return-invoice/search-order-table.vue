<template>
  <div>
    <el-row class="d-flex mb-1">
      <el-col :xs="24" :md="9">
        <el-row class="d-flex">
          <el-col :xs="12" :md="10">
            <div class="side-search-label grey-shadow">
              <span>{{$t('order-no')}}</span>
            </div>
          </el-col>
          <el-col :xs="12" :md="14">
            <el-input class="text-color bl-none mx-2 grey-shadow"
                      style="border-radius: 4px;">
              <template slot="append">
                <div  class="search-icon-container" 
                      @click="$emit('openOrderChoice')">
                  <i
                    class="el-icon-search"
                    style="font-size: large; font-weight: bold"
                  ></i>
                </div>
              </template>
            </el-input>
          </el-col>
        </el-row>
      </el-col>

      <el-col :md="1"></el-col>

      <el-col :xs="24" :md="9">
        <el-row class="d-flex">
          <el-col :xs="12" :md="10">
            <div class="side-search-label grey-shadow">
              <span>{{$t('table-number')}}</span>
            </div>
          </el-col>
          <el-col :xs="12" :md="14">
            <el-input class="text-color bl-none mx-2 grey-shadow"
                      style="border-radius: 4px;">
              <template slot="append">
                <div  class="search-icon-container" 
                      @click="$emit('openTableNumberSelect')">
                <i
                  class="el-icon-search"
                  style="font-size: large; font-weight: bold"
                ></i>
                </div>
              </template>
            </el-input>
          </el-col>
        </el-row>
      </el-col>
    </el-row>


  </div>
</template>


<style lang="scss" scoped>
.side-search-label {
  height: 100%;
  background-color: #E8FAFE;
  color: #707070;
  border-radius: 4px;

  display: flex;
  align-items: center;
  justify-content: center;
}
</style>