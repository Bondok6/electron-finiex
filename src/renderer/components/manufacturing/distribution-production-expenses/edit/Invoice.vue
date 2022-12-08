<template>
  <el-container class="container box-shadow ma-4 mb-0 px-2 py-3">
    <el-form class="invoice-form" label-position="top" :model="form">
      <el-row :gutter="6">
        <el-col :xs="24" :sm="6" :md="5" :lg="4">
          <el-form-item :label="$t('movement-number')">
            <el-input v-model="form.movement_number" placeholder="14">
            </el-input>
          </el-form-item>
        </el-col>

        <el-col :xs="24" :sm="6" :md="5" :lg="4">
          <el-form-item :label="$t('movement-date')">
            <el-date-picker
              type="date"
              placeholder="2020-10-15"
              v-model="form.date"
            ></el-date-picker>
          </el-form-item>
        </el-col>

        <el-col :xs="24" :sm="6" :md="5" :lg="4">
          <el-form-item :label="$t('from-date')">
            <el-date-picker
              type="date"
              placeholder="2020-10-15"
              v-model="form.date"
            ></el-date-picker>
          </el-form-item>
        </el-col>

        <el-col :xs="24" :sm="6" :md="5" :lg="4">
          <el-form-item :label="$t('to-date')">
            <el-date-picker
              type="date"
              placeholder="2020-10-15"
              v-model="form.date"
            ></el-date-picker>
          </el-form-item>
        </el-col>

        <el-col :span="24">
          <div class="inline-button-container d-flex mt-2">
            <div class="spacer"></div>
            <el-col :sm="24" :md="24" :lg="12">
              <el-row class="width-full">
                <el-col :xs="24" :sm="8" :md="8" :lg="8" class="mt-1">
                  <el-form-item>
                    <el-select
                      v-model="form.type"
                      class="
                        color-teal
                        text-center
                        placeHolderColor
                        w-150
                        border-radius
                      "
                      :placeholder="$t('distribution-options')"
                    >
                      <el-option
                        :label="$t('real-time-calculation')"
                        :value="1"
                      ></el-option>
                      <el-option
                        :label="$t('calculate-the-value-of-the-material')"
                        :value="2"
                      ></el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="16" :md="16" :lg="16" class="mt-1">
                  <el-form-item>
                    <el-button class="btn-teal mr-4 border-radius">{{
                      $t("update-the-balances-of-new-expenses-and-costs")
                    }}</el-button>
                  </el-form-item>
                </el-col>
              </el-row>
            </el-col>
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
      form: {
        movement_number: 1,
      },
    };
  },
};
</script>