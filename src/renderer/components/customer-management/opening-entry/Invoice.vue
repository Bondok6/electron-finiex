<template>
  <el-container class="container box-shadow ma-4 mb-0 px-2 py-3">
    <el-form
      class="invoice-form width-full"
      label-position="top"
      :model="main_form"
    >
      <el-row :gutter="6" class="width-full">
        <el-col :xs="24" :sm="8" :md="6" :lg="4">
          <el-form-item :label="$t('registeration-number')">
            <el-select
              v-model="main_form.registeration_number"
              :label="$t('all')"
            >
              <el-option :label="$t('1')" :value="2"></el-option>
              <el-option :label="$t('2')" :value="1"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="6" class="width-full">
        <el-col :xs="24" :sm="8" :md="6" :lg="4">
          <el-form-item :label="$t('registeration-type')">
            <el-select
              v-model="main_form.registeration_type"
              :label="$t('all')"
            >
              <el-option :label="$t('1')" :value="2"></el-option>
              <el-option :label="$t('2')" :value="1"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="24" :md="10" :lg="14" class="mt-2">
          <div class="inline-button-container d-flex">
            <div class="spacer"></div>
          </div>
        </el-col>
        <el-col :xs="24" :sm="24" :md="8" :lg="6" class="mt-2">
          <div class="inline-button-container d-flex">
            <div class="spacer"></div>
            <el-select
              v-model="main_form.type"
              class="
                color-blue
                text-center
                placeHolderColor
                w-250
                selectButton
                mt-2
              "
              :placeholder="$t('registeration-options')"
            >
              <el-option :label="$t('1')" :value="1" class="selectButton">
              </el-option>
              <el-option :label="$t('2')" :value="2" class="selectButton">
              </el-option>
            </el-select>
          </div>
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
        registeration_number: 1,
        registeration_type: 1,
        type: "",
      },
    };
  },
};
</script>