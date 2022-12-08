<template>
    <el-container class="container box-shadow ma-4 mb-0 px-2 py-3">
      <el-form class="invoice-form width-full" label-position="top" :model="form">
        <el-row :gutter="6" class="width-full">
          <el-col :xs="24" :sm="8" :md="5" :lg="5">
            <el-form-item :label="$t('bond-number')">
              <el-input v-model.number="form.voucherCode" placeholder="0">
              </el-input>
            </el-form-item>
          </el-col>
  
          <el-col :xs="24" :sm="8" :md="5" :lg="5">
            <el-form-item :label="$t('bond-date')">
              <el-date-picker
                type="date"
                placeholder="2020/10/15"
                format="yyyy/MM/dd"
                v-model="form.date"
              ></el-date-picker>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </el-container>
  </template>
  
  <script>

  export default {
    name: "invoice",
  
    data: function() {
      return {
        form: {
          voucherCode: 0,
          date: new Date()
        }
      };
    },
  };
  </script>
  