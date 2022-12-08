<template>
  <div class="text-unbold px-2">
    <el-row class="wrap-mod">
      <el-col :md="8" :lg="8" class="d-flex align-items-center px-1">
        <div style="width: 50%">
          {{ $t("prev-invoice-number") }}
        </div>
        <div class="input-style expenses-display pa-0 text-center" style="width: 50%"> 625 </div>
      </el-col>

      <el-col :md="8" :lg="8" class="d-flex align-items-center px-1">
        <div style="width: 50%">
          {{ $t("invoice-amount") }}
        </div>
        <div class="input-style expenses-display pa-0 text-center" style="width: 50%"> 625 </div>
      </el-col>

      <el-col :md="8" :lg="8" class="d-flex align-items-center px-1">
        <div style="width: 50%">
          {{ $t("amount-paid") }}
        </div>
        <div class="input-style expenses-display pa-0 text-center" style="width: 50%"> 625 </div>
      </el-col>
    </el-row>

    <el-row class="wrap-mod">
      <el-col :md="8" :lg="8" class="d-flex align-items-center px-1">
        <div style="width: 50%">
          {{ $t("remaining-amount") }}
        </div>
        <div class="input-style expenses-display pa-0 text-center" style="width: 50%"> 625 </div>
      </el-col>

      <el-col :md="8" :lg="8" class="d-flex align-items-center px-1">
        <div style="width: 50%">
          {{ $t("total-quantity-number") }}
        </div>
        <div class="input-style expenses-display pa-0 text-center" style="width: 50%"> 625 </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "expenses",

  data: function () {
    return {
      form: {
      },
    };
  },
};
</script>

<style scoped>
.expenses-display {
  border: 1px solid #21798d;
  border-radius: 0.4rem;
  background-color: transparent !important;
}

.align-items-center {
  align-items: center;
}
.px-1{
  padding-left: 1rem;
  padding-right: 1rem;
}

.wrap-mod {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
</style>
