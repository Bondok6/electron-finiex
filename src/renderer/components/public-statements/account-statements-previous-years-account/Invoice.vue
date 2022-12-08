<template>
  <el-container class="container box-shadow ma-4 mb-0 px-2 py-3">
    <el-form class="invoice-form width-full" label-position="top" :model="form">
      <el-row :gutter="6" class="width-full">
        <el-col :xs="24" :sm="24" :md="18">
          <el-row :gutter="6" class="width-full">
            <el-col :xs="24" :sm="6" :md="6" :lg="6">
              <el-form-item :label="$t('account-names')">
                <el-input
                  v-model="form.account_name"
                  class="notes-input"
                  type="textarea"
                  :rows="4"
                  placeholder=""
                >
                </el-input>
              </el-form-item>
            </el-col>

            <el-col :xs="24" :sm="6" :md="4" :lg="4">
              <el-form-item :label="$t('cost-center')">
                <el-select v-model="form.cost">
                  <el-option :label="$t('without')" :value="1"></el-option>
                  <el-option :label="$t('without')" :value="2"></el-option>
                </el-select>
              </el-form-item>
            </el-col>

            <el-col :xs="24" :sm="6" :md="4" :lg="4">
              <el-form-item :label="$t('branch-name')">
                <el-select v-model="form.branch">
                  <el-option :label="$t('main-branch')" :value="1"></el-option>
                  <el-option :label="$t('main-branch')" :value="2"></el-option>
                </el-select>
              </el-form-item>
            </el-col>

            <el-col :xs="24" :sm="6" :md="4" :lg="4">
              <el-form-item :label="$t('from-date')">
                <el-date-picker
                  type="date"
                  placeholder="2020-10-15"
                  v-model="form.date"
                ></el-date-picker>
              </el-form-item>
            </el-col>

            <el-col :xs="24" :sm="6" :md="4" :lg="4">
              <el-form-item :label="$t('to-date')">
                <el-date-picker
                  type="date"
                  placeholder="2020-10-15"
                  v-model="form.date"
                ></el-date-picker>
              </el-form-item>
            </el-col>
          </el-row>
        </el-col>

        <el-col :xs="24" :sm="24" :md="6">
          <div class="inline-button-container d-flex flex-direction-column">
            <!-- <div class="spacer"></div> -->
            <div class="vertical-buttons">
              <el-select
                v-model="form.type"
                class="color-blue text-center placeHolderColor"
                :placeholder="$t('order')"
              >
                <el-option
                  :label="$t('document-number')"
                  :value="1"
                ></el-option>
                <el-option :label="$t('document-date')" :value="2"></el-option>
                <el-option :label="$t('document-type')" :value="3"></el-option>
              </el-select>

              <el-form-item>
                <el-button
                  @click="
                    form.show_branch_name_when_printing_account_number =
                      !form.show_branch_name_when_printing_account_number
                  "
                  :class="[
                    form.show_branch_name_when_printing_account_number
                      ? 'btn-dark-grey'
                      : 'btn-red',
                  ]"
                >
                  <span
                    v-if="form.show_branch_name_when_printing_account_number"
                  >
                    {{ $t("show-branch-name-when-printing-account-number") }}
                  </span>

                  <span v-else>
                    {{ $t("hide-branch-name-when-printing-account-number") }}
                  </span>
                </el-button>
              </el-form-item>

              <el-form-item>
                <el-button
                  @click="
                    form.show_previous_account_balance =
                      !form.show_previous_account_balance
                  "
                  :class="[
                    form.show_previous_account_balance
                      ? 'btn-dark-grey'
                      : 'btn-red',
                  ]"
                >
                  <span v-if="form.show_previous_account_balance">
                    {{ $t("show-previous-account-balance") }}
                  </span>

                  <span v-else>
                    {{ $t("hide-previous-account-balance") }}
                  </span>
                </el-button>
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
  name: "invoice",

  data: function () {
    return {
      form: {
        branch: 1,
        account_name: "",
        cost: 1,
        currency: 1,
        show_previous_account_balance: 1,
        show_branch_name_when_printing_account_number: 1,
      },
    };
  },
};
</script>
<style lang="scss">
.el-textarea__inner {
  width: 100% !important;
}
</style>