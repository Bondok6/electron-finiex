<template>
  <el-form class="information-summary background" label-position="top" :model="form">
    <el-row :gutter="6" class="width-full">
      <el-col :span="24" class="d-flex justify-center">
        <el-form-item :label="$t('quantity-number')" align="center" class="width-full">
          <el-input
            v-model="form.delegate"
            placeholder="0"
            class="text-center pa-0"
          ></el-input>
        </el-form-item>
      </el-col>
    </el-row>

    <el-row :gutter="6" class="width-full">
      <el-col :span="24" class="d-flex justify-center">
        <el-form-item :label="$t('sum')" align="center" class="width-full">
          <el-input
            v-model="form.sum"
            placeholder="0"
            class="text-center pa-0"
          ></el-input>
        </el-form-item>
      </el-col>
    </el-row>

    <el-row :gutter="6" class="width-full">
      <el-form-item :label="$t('discount-amount')" align="center" class="width-full">
        <el-col :span="16" class="d-flex justify-center">
          <el-input 
            v-model="form.discount_amount" 
            placeholder="0"
            class="text-center pa-0"
          ></el-input>
        </el-col>
        <el-col :span="8">
          <el-input 
            v-model="form.delegate" 
            placeholder="0"
            class="text-center pa-0">
            <template slot="append">%</template>
          </el-input>
        </el-col>
      </el-form-item>
    </el-row>

    <el-row :gutter="6" class="width-full">
      <el-form-item :label="$t('total-product-tax-100%')" align="center" class="width-full">
        <el-col :span="16" class="d-flex justify-center">
          <el-input 
            v-model="form.total_product_tax" 
            placeholder="0"
            class="text-center pa-0"
          ></el-input>
        </el-col>
        <el-col :span="8">
          <el-input 
            v-model="form.delegate" 
            placeholder="0"
            class="text-center pa-0">
            <template slot="append">%</template>
          </el-input>
        </el-col>
      </el-form-item>
    </el-row>

    <el-row :gutter="6" class="width-full">
      <el-form-item :label="$t('total-tax')" align="center" class="width-full">
        <el-col :span="16" class="d-flex justify-center">
          <el-input 
            v-model="form.total_tax" 
            placeholder="0"
            class="text-center pa-0"
          ></el-input>
        </el-col>
        <el-col :span="8">
          <el-input 
            v-model="form.delegate" 
            placeholder="0"
            class="text-center pa-0">
            <template slot="append">%</template>
          </el-input>
        </el-col>
      </el-form-item>
    </el-row>

    <el-row :gutter="6" class="width-full">
      <el-col :span="24" class="d-flex justify-center">
        <el-form-item :label="$t('net')" align="center" class="width-full">
          <el-input
            v-model="form.net"
            placeholder="0"
            class="text-center pa-0"
          ></el-input>
        </el-form-item>
      </el-col>
    </el-row>

    <el-row :gutter="6" class="width-full mt-2">
      <el-col :span="24" class="d-flex justify-center">
        <el-button
          class="px-5"
          style="background: #21798d; color: white; width: 50%"
        >
          {{ $t("approximate") }}
        </el-button>
      </el-col>
    </el-row>
  </el-form>
</template>


<script>
export default {
  name: "informations",

  data: function () {
    return {
      form: {
        quantity_number: "",
        sum: "",
        discount_amount: "",
        total_product_tax: "",
        total_tax: "",
        net: "",
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.background {
  background-image: linear-gradient(#f3fcfe, #e6f8fc);
}
</style>