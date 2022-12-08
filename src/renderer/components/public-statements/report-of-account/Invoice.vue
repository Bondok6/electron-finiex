<template>
  <el-container class="container box-shadow ma-4 mb-0 px-2 py-3">
    <el-form
      class="invoice-form width-full"
      label-position="top"
      :model="main_form"
    >
      <el-row :gutter="6" class="width-full">
        <el-col :xs="24" :sm="12" :md="5" :lg="4" class="mt-2">
          <el-form-item :label="$t('from-date')">
            <el-date-picker
              type="date"
              placeholder="2020-10-15"
              v-model="main_form.date"
            ></el-date-picker>
          </el-form-item>
        </el-col>

        <el-col :xs="24" :sm="12" :md="5" :lg="4" class="mt-2">
          <el-form-item :label="$t('to-date')">
            <el-date-picker
              type="date"
              placeholder="2020-10-15"
              v-model="main_form.date"
            ></el-date-picker>
          </el-form-item>
        </el-col>

        <el-col :xs="24" :sm="24" :md="14" :lg="16" class="mt-40">
          <div class="inline-button-container d-flex">
            <div class="spacer"></div>
            <el-row :gutter="6">
              <el-col :xs="24" :sm="24" :md="12" :lg="12" class="mt-2">
                <el-form-item>
                  <el-button
                    class="text-center w-250"
                    @click="
                      main_form.not_include_invoic_remain_amount_equal =
                        !main_form.not_include_invoic_remain_amount_equal
                    "
                    :class="[
                      main_form.not_include_invoic_remain_amount_equal
                        ? 'btn-dark-grey'
                        : 'btn-red',
                    ]"
                  >
                    <span
                      v-if="main_form.not_include_invoic_remain_amount_equal"
                      >{{ $t("Show-the-period-balance-only") }}
                    </span>

                    <span v-else>
                      {{ $t("not-Show-the-period-balance-only") }}
                    </span>
                  </el-button>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="12" :lg="12" class="mt-2">
                <el-button
                  class="text-center w-250 btn-cyan-light"
                  @click="additionalChoice = true"
                >
                  {{ $t("additional-choices") }}
                </el-button>
              </el-col>
            </el-row>
          </div>
        </el-col>
      </el-row>
    </el-form>
    <el-dialog
      title=" "
      :visible.sync="additionalChoice"
      width="70%"
      class="align-center"
    >
      <span>
        <el-container class="box-shadow mb-0 px-2 py-2">
          <el-form
            class="invoice-form width-full"
            label-position="top"
            :model="sub_form"
          >
            <el-row :gutter="6" class="width-full">
              <el-col :xs="24" :sm="24" :md="6" :lg="5">
                <el-form-item>
                  <label>{{ $t("branch-name") }}</label>
                  <el-select v-model="sub_form.branch_name">
                    <el-option :label="$t('1')" :value="2"></el-option>
                    <el-option :label="$t('2')" :value="1"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="6" :lg="5">
                <el-form-item>
                  <label>{{ $t("account-name") }}</label>
                  <el-select v-model="sub_form.account_name">
                    <el-option :label="$t('1')" :value="2"></el-option>
                    <el-option :label="$t('2')" :value="1"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
        </el-container>
      </span>
      <span slot="footer" class="dialog-footer">
        <el-button
          class="btn-cyan-light px-4-lg"
          @click="additionalChoice = false"
          >{{ $t("agree") }}</el-button
        >
      </span>
    </el-dialog>
  </el-container>
</template>


<script>
export default {
  name: "invoice",

  data: function () {
    return {
      main_form: {
        account_name: 1,
        branch: 1,
        not_include_invoic_remain_amount_equal: 1,
      },
      additionalChoice: false,
      sub_form: {
        branch_name: "",
        account_name: "",
      },
    };
  },
};
</script>