<template>
  <el-container class="container box-shadow  ma-4 mb-0 px-2 py-3 box-shadow">
    <el-form class="invoice-form" label-position="top" :model="form">
      <el-row :gutter="6" class="width-full">
        <el-col :xs="24" :sm="6" :md="6" :lg="6" >
          <el-form-item :label="$t('from-date')">
            <el-date-picker
              type="date"
              placeholder="2020-10-15"
              v-model="form.from_date"
            ></el-date-picker>
          </el-form-item>
        </el-col>

        <el-col :xs="24" :sm="6" :md="6" :lg="6" >
          <el-form-item :label="$t('to-date')">
            <el-date-picker
              type="date"
              placeholder="2020-10-15"
              v-model="form.from_date"
            ></el-date-picker>
          </el-form-item>
        </el-col>

        <el-col :xs="24" :sm="6" :md="6" :lg="6" >
          <el-form-item :label="$t('user-name')">
            <el-select v-model="form.user_name">
              <el-option :label="$t('all')" :value="1"></el-option>
              <el-option :label="$t('all')" :value="2"></el-option>
            </el-select>
          </el-form-item>
        </el-col>

        <el-col :xs="24" :sm="6" :md="6" :lg="6" >
          <el-form-item :label="$t('delegate-name')">
            <el-select v-model="form.delegate_name">
              <el-option :label="$t('all')" :value="1"></el-option>
              <el-option :label="$t('all')" :value="2"></el-option>
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
        from_date: "",
        to_date: "",
        user_name: 1,
        delegate_name: 1,
      },
    };
  },
};
</script>