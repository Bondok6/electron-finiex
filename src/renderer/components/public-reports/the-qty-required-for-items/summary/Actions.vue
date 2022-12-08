<template>
  <div>
    <el-row>
      <el-col :span="12" class="d-flex justify-end flex-wrap">
        <span>
          <el-button class="btn-cyan-light">
            {{ $t("convert-to-purchase-order") }}
          </el-button>
        </span>
      </el-col>
      <el-col :span="12" class="d-flex justify-end flex-wrap">
        <span class="mx-3">
          <el-button size="mini" class="mb-1" type="primary px-3">
            {{ $t("display") }}</el-button
          >
          <el-button size="mini" class="mb-1" type="warning">{{
            $t("print-pdf")
          }}</el-button>
          <el-button size="mini" class="mb-1 btn-orange">{{
            $t("print-f4")
          }}</el-button>
        </span>
      </el-col>
    </el-row>
  </div>
</template>
