<template>
  <div>
    <el-row class="p-2" :gutter="10">
      <el-col class="d-grid" :lg="4" :md="5" :sm="7" :xs="12">
        <el-button style="background:transparent" class="border-green color-green">
          <span>
            {{ $t("Supplier-purchase-prices") }}
          </span>
        </el-button>
      </el-col>
      <el-col :lg="5" :md="10" :sm="10" :xs="12">
        <el-button style="background:transparent" class="border-green color-green">
          <span>
            {{ $t("Supplier-purchase-movements") }}
          </span>
        </el-button>
      </el-col>
    </el-row>
  </div>
</template>