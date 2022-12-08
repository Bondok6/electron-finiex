<template>
  <el-container class="container box-shadow ma-4 mb-0 px-2 py-3">
    <el-form class="invoice-form width-full" label-position="top" :model="form">
      <el-row :gutter="6" class="width-full">
        <el-col :xs="24" :sm="24" :md="4" :lg="4">
          <el-form-item :label="$t('branch-name')">
            <el-select :placeholder="$t('all')" v-model="form.input">
              <el-option :label="$t('all')" :value="1"></el-option>
              <el-option :label="$t('all')" :value="2"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
       <el-col :xs="24" :sm="24" :md="4" :lg="4">
          <el-form-item :label="$t('from-date')">
            <el-date-picker
              type="date"
              placeholder="2020-10-15"
              v-model="form.date"
            ></el-date-picker>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="24" :md="4" :lg="4">
          <el-form-item :label="$t('movement-type')">
            <el-select :placeholder="$t('all')" v-model="form.input">
              <el-option :label="$t('all')" :value="1"></el-option>
              <el-option :label="$t('all')" :value="2"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="6" class="width-full">
        <el-col :xs="24" :sm="24" :md="4" :lg="4">
          <el-form-item :label="$t('user-name')">
            <el-select :placeholder="$t('all')" v-model="form.input">
              <el-option :label="$t('all')" :value="1"></el-option>
              <el-option :label="$t('all')" :value="2"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="24" :md="4" :lg="4">
          <el-form-item :label="$t('to-date')">
            <el-date-picker
              type="date"
              placeholder="2020-10-15"
              v-model="form.date"
            ></el-date-picker>
          </el-form-item>
        </el-col>
      </el-row>

        <!-- end dialog -->
    </el-form>
  </el-container>
</template>
<script>
export default {
  data: function() {
    return {
      form: {
        input: 1
      },
    };
  }
};
</script>
