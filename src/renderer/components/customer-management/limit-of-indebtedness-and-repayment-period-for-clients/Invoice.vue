<template>
  <el-container class="container box-shadow ma-4 mb-0 px-2 py-3">
    <el-form class="invoice-form width-full" label-position="top" :model="form">
      <el-row :gutter="6" class="width-full">
        <el-col :xs="24" :sm="6" :md="5" :lg="4">
          <el-form-item :label="$t('branch-name')">
            <el-select v-model="form.branch_name">
              <el-option :label="$t('postponed')" :value="1"></el-option>
              <el-option :label="$t('postponed')" :value="2"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="6" :md="5" :lg="4">
          <el-form-item :label="$t('account-name')">
            <el-select v-model="form.account_name">
              <el-option :label="$t('postponed')" :value="1"></el-option>
              <el-option :label="$t('postponed')" :value="2"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="6" :md="5" :lg="4">
          <el-form-item :label="$t('order-by')">
            <el-select v-model="form.order_by">
              <el-option :label="$t('postponed')" :value="1"></el-option>
              <el-option :label="$t('postponed')" :value="2"></el-option>
            </el-select>
          </el-form-item>
        </el-col>

        <el-col :xs="24" :sm="24" :md="12" :lg="11" class="mt-4">
          <div class="inline-button-container d-flex">
            <div class="spacer"></div>
            <el-row :gutter="6">
              <el-col :span="24">
                <el-button
                  class="text-center btn-cyan-light mt-1"
                  @click="dialogTableVisible = true"
                >
                  {{
                    $t("show-only-customers-who-exceed-the-indebtedness-limit")
                  }}
                </el-button>
              </el-col>
            </el-row>
          </div>
        </el-col>
      </el-row>
    </el-form>
  </el-container>
</template>

<script>
export default {
  name: "Invoice",
  data: function () {
    return {
      form: {
        input: 3,
      },
      sub_form: {
        branch_name: "",
        account_name: "",
        order_by: "",
      },
      dialogTableVisible: false,
    };
  },
};
</script>




