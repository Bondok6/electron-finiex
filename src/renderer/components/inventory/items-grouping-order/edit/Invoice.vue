<template>
  <el-container class="container box-shadow ma-4 mb-0 px-2 py-3">
    <el-form
      class="invoice-form d-flex justify-center width-full"
      label-position="top"
      :model="form"
    >
      <el-row :gutter="6" class="width-full">
        <el-col :xs="24" :sm="6" :md="5" :lg="4" >
          <el-form-item :label="$t('order-number')">
            <el-input v-model="form.order_number" placeholder="14">
              <template slot="append"><i class="el-icon-search"></i></template>
            </el-input>
          </el-form-item>
        </el-col>

        <el-col :xs="24" :sm="6" :md="5" :lg="4" >
          <el-form-item :label="$t('order-date')">
            <el-date-picker
              type="datetime"
              placeholder="2020-10-15"
              format="yyyy-MM-dd HH:mm"
              Value-format="yyyy-MM-dd HH:mm"
              v-model="form.date"
            ></el-date-picker>
          </el-form-item>
        </el-col>

        <el-col :xs="24" :sm="6" :md="5" :lg="4" >
          <el-form-item :label="$t('order-type')">
            <el-select v-model="form.order_type">
              <el-option :label="$t('order-collection')" :value="1"></el-option>
              <el-option :label="$t('order-collection')" :value="2"></el-option>
            </el-select>
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
      form: {
        order_number: 1,
        transfer_price: 1,
        order_type: 1,
      },
    };
  },
};
</script>