<template>
  <el-container class="container  box-shadow ma-4 mb-0 px-2 py-3">
    <el-form class="invoice-form width-full" label-position="top" :model="form">
      <el-row :gutter="6" class="width-full">
        <el-col :xs="24" :sm="6" :md="5" :lg="4">
          <el-form-item :label="$t('from-bond-date')">
            <el-date-picker
              type="date"
              placeholder="2020-10-15"
              v-model="form.date"
            ></el-date-picker>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="6" :md="5" :lg="4">
          <el-form-item :label="$t('account-name')">
            <el-select v-model="form.warehouse_name">
              <el-option :label="$t('postponed')" :value="1"></el-option>
              <el-option :label="$t('postponed')" :value="2"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="6" class="width-full">
        <el-col :xs="24" :sm="6" :md="5" :lg="4">
          <el-form-item :label="$t('to-bond-date')">
            <el-date-picker
              type="date"
              placeholder="2020-10-15"
              v-model="form.date"
            ></el-date-picker>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="24" :md="19" :lg="20" :xl="20" class="mt-40">
          <div class="inline-button-container d-flex">
            <div class="spacer"></div>
            <el-button
              class="text-center w-250"
              type="primary"
            >
              {{ $t('additional-choices') }}
            </el-button>

          </div>
        </el-col>
      </el-row>
    </el-form>
  </el-container>
</template>

<script>
export default {

  data: function() {
    return {
      form: {
        input: 3
      },
      additionalChoice : false,
    };
  }
};
</script>
