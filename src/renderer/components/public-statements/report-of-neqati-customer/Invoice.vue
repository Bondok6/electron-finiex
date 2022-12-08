<template>
  <el-container class="container box-shadow ma-4 mb-0 px-2 py-3">
    <el-form
      class="invoice-form width-full"
      label-position="top"
      :model="main_form"
    >
      <el-row :gutter="6" class="width-full">
        <el-col :xs="24" :sm="6" :md="6" :lg="5">
          <el-form-item :label="$t('type-customer')">
            <el-select v-model="main_form.type_customer">
              <el-option label="الكل " :value="2"></el-option>
              <el-option label=" الكل" :value="1"></el-option>
            </el-select>
          </el-form-item>
        </el-col>

        <el-col :xs="24" :sm="6" :md="6" :lg="5">
          <el-form-item :label="$t('card-no-cust')">
            <el-input v-model="main_form.card_no_cust" placeholder=" ">
            </el-input>
          </el-form-item>
        </el-col>

        <el-col :xs="24" :sm="6" :md="6" :lg="5">
          <el-form-item :label="$t('mobile-cust')">
            <el-input v-model="main_form.mobile_cust" placeholder=" ">
            </el-input>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </el-container>
</template>


<script>
export default {
  name: "invoice",

  data: function () {
    return {
      main_form: {
        type_customer: "",
        card_no_cust: "",
        mobile_cust: "",
      },
    };
  },
};
</script>