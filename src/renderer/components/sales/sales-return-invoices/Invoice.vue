<template>
  <el-container class="container box-shadow ma-4 mb-0 px-2 py-3">
    <el-form
      class="invoice-form width-full"
      label-position="top"
      :model="main_form"
    >
      <el-row :gutter="6" class="width-full">
        <el-col :xs="24" :sm="24" :md="12">
          <el-row :gutter="6">
            <el-col :span="24">
              <el-row :gutter="6">
                <el-col :xs="24" :sm="24" :md="8" :lg="7">
                  <el-form-item :label="$t('from-date')">
                    <el-input v-model="main_form.from_date"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
            </el-col>

            <el-col :span="24">
              <el-row :gutter="6">
                <el-col :xs="24" :sm="24" :md="8" :lg="7">
                  <el-form-item :label="$t('to-date')">
                    <el-select v-model="main_form.to_date">
                      <el-option :label="$t('all')" :value="1"></el-option>
                      <el-option :label="$t('all')" :value="2"></el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
              </el-row>
            </el-col>
          </el-row>
        </el-col>

        <el-col :xs="24" :sm="24" :md="12">
          <div class="inline-button-container d-flex flex-direction-column">
            <!-- <div class="spacer"></div> -->
            <div class="vertical-buttons">
              <el-select
                v-model="order_type"
                class="color-blue text-center placeHolderColor mb-1"
                :placeholder="$t('order')"
              >
              </el-select>

              <el-button class="text-center btn-cyan-light width-full mt-1">
                {{ $t("additional-choices") }}
              </el-button>
            </div>
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
      order_type: null,
      main_form: {
        from_date: "",
        to_date: "",
        type: "",
      },
    };
  },
  methods: {},
};
</script>
