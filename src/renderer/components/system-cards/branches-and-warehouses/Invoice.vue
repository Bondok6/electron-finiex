<template>
  <div class="mb-8 background-form">
    <section class="mb-0 px-2 py-3">
      <el-row>
        <div class="d-flex space-around flex-wrap ">
        <el-col :xs="24" :sm="24" :md="10">
          <div class="mt-4-lg justifiy-center">
            <h1 style="color: #21798d">
            ـــــــــــــــ &nbsp;&nbsp;&nbsp;{{ $t("branches") }} &nbsp;&nbsp;&nbsp; ـــــــــــــــ  
            </h1>
            <div class="branches-card mt-3">
              <div class="px-2">
                <el-checkbox class="padding-label">{{
                  $t("main-branch")
                }}</el-checkbox>
              </div>
              <div><br><br><br></div>
            </div>
          </div>
        </el-col>

        
        <el-col :xs="24" :sm="24" :md="10">
          <div class="mt-4-lg justifiy-center">
            <h1 style="color: #21798d">
            ـــــــــــــــ &nbsp;&nbsp;&nbsp;{{ $t("warehouses") }} &nbsp;&nbsp;&nbsp; ـــــــــــــــ  
            </h1>
            
            <div class="branches-card mt-3">
              <div class="px-2">
                <div>
                <el-checkbox class="padding-label">
                  سوق النمو  
                </el-checkbox>
                </div>
                <div>
                <el-checkbox class="padding-label">
                  مستودع المعرض 
                </el-checkbox>
                </div>
                <div>
                <el-checkbox class="padding-label">
                  الخمرة 
                </el-checkbox>
                </div>
              </div>
            </div>
          </div>
        </el-col>
        </div>
      </el-row>
    </section>
  </div>
</template>
<script></script>
<style scoped lang="scss">
h1 {
  font-size: 1.5rem;
  text-align: center;
}
</style>
