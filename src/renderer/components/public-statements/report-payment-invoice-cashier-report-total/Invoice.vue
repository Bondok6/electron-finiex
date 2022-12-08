<template>
  <el-container class="container box-shadow ma-4 mb-0 px-2 py-3">
    <el-form class="invoice-form width-full" label-position="top" :model="form">
      <el-row :gutter="6" class="width-full">
        <el-col :xs="24" :sm="12" :md="8">
          <el-form-item :label="$t('from-date')">
            <el-date-picker
              type="date"
              placeholder="2020-10-15"
              v-model="form.date"
            ></el-date-picker>
          </el-form-item>
        </el-col>
        
        <el-col :xs="24" :sm="12" :md="8">
          <el-form-item :label="$t('to-date')">
            <el-date-picker
              type="date"
              placeholder="2020-10-15"
              v-model="form.date"
            ></el-date-picker>
          </el-form-item>
        </el-col>

        <el-col :xs="24" :sm="12" :md="8">
          <el-form-item :label="$t('cashier')">
            <el-select v-model="form.cashier">
              <el-option :label="$t('all')" :value="2"></el-option>
              <el-option :label="$t('all')" :value="1"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        
        <el-col :xs="24" :sm="12" :md="8">
          <el-form-item :label="$t('user-name')">
            <el-select v-model="form.user_name">
              <el-option :label="$t('all')" :value="2"></el-option>
              <el-option :label="$t('all')" :value="1"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        
        <el-col :xs="24" :sm="12" :md="8">
          <el-form-item :label="$t('delegate-name')">
            <el-select v-model="form.delegate_name">
              <el-option :label="$t('all')" :value="2"></el-option>
              <el-option :label="$t('all')" :value="1"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        
        <el-col :xs="24" :sm="12" :md="8">
          <el-form-item :label="$t('driver-name')">
            <el-select v-model="form.driver_name">
              <el-option :label="$t('all')" :value="2"></el-option>
              <el-option :label="$t('all')" :value="1"></el-option>
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
        cashier: 1,
        user_name: 1,
        delegate_name: 1,
        driver_name: 1,
      },
    };
  },
};
</script>