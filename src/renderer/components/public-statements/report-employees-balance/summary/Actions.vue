<template>
  <el-container>
    <el-row class="width-full" style="padding: 0px 10px">
      <el-col :xs="24" :sm="24" :md="12" :lg="12">
        <div class="text-unbold d-flex flex-wrap align-center">
          <span class="d-flex flex-wrap align-center">
            <span class="mr-4">{{ $t("no-of-imployees") }} </span>
            <span class="input-style mr-2"> 55 </span>
          </span>

          <span class="d-flex flex-wrap align-center">
            <span class="mr-4"> {{ $t("total") }} </span>
            <span class="input-style mr-2"> 404,885.65 </span>
          </span>
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :md="12" :lg="12">
        <div class="action-buttons-nonGrown ml-6">
          <el-button size="mini" class="mb-1 btn-primary px-3">{{
            $t("display")
          }}</el-button>
          <el-button size="mini" class="mb-1 px-4-lg" type="danger">
            {{ $t("chart") }}<i class="el-icon-s-marketing el-icon-right"></i
          ></el-button>
          <el-button size="mini" class="mb-1" type="warning">{{
            $t("print-pdf")
          }}</el-button>
          <el-button size="mini" class="mb-1 btn-orange">{{
            $t("print-f4")
          }}</el-button>
        </div>
      </el-col>
    </el-row>
  </el-container>
</template>