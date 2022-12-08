<template>
  <el-container class="container box-shadow ma-4 mb-0 px-2 py-3">
    <el-form class="invoice-form width-full" label-position="top" :model="form">
      <el-row :gutter="6" class="width-full">
        <el-col :xs="24" :sm="24" :md="12">
          <el-row :gutter="6">
            <el-col :span="24">
              <el-row :gutter="6">
                <el-col :xs="24" :sm="24" :md="12">
                  <el-form-item label="IP Address">
                    <el-select placeholder="" v-model="form.input">
                      <el-option :label="$t('all')" :value="1"></el-option>
                      <el-option :label="$t('all')" :value="2"></el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
              </el-row>
            </el-col>
            <el-col :span="24">
              <el-row :gutter="6">
                <el-col :xs="24" :sm="24" :md="12">
                  <el-form-item :label="$t('device-number')">
                    <el-select placeholder="" v-model="form.input">
                      <el-option :label="$t('all')" :value="1"></el-option>
                      <el-option :label="$t('all')" :value="2"></el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
              </el-row>
            </el-col>
          </el-row>
        </el-col>
        <el-col :xs="24" :sm="24" :md="12" class="mt-40">
          <div
            class="inline-button-container d-flex flex-direction-column"
            >
            <div class="vertical-buttons">
                <el-form-item class="mt-2">
                <el-button
                  class="btn-cyan-light width-full"
                  >{{ $t("file-browsing-and-data-transfer") }}</el-button
                >
              </el-form-item>
              <el-form-item class="mt-2">
                <el-button
                  class="btn-cyan-light width-full"
                  >{{ $t("connecting-to-the-fingerprint-device-and-transferring-data") }}</el-button
                >
              </el-form-item>
            </div>
          </div>
        </el-col>
      </el-row>
    </el-form>
  </el-container>
</template>
<script>
export default {
  name: "Invoice",
  data: function() {
    return {
      form: {
        input: 1
      }
    };
  }
};
</script>
