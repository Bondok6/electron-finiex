<template>
  <el-container class="container box-shadow ma-4 mb-0 px-2 py-3">
    <el-form class="invoice-form width-full" label-position="top" :model="form">
      <el-row :gutter="6" class="width-full">
        <el-col :xs="24" :sm="24" :md="18">
          <el-row :gutter="6" class="width-full">
            <el-col :xs="24" :sm="6" :md="4" :lg="4">
              <el-form-item :label="$t('client-name')">
                <el-select v-model="form.client_name">
                  <el-option :label="$t('all')" :value="1"></el-option>
                  <el-option :label="$t('all')" :value="2"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="6" :md="5" :lg="4">
              <el-form-item :label="'.'">
                <el-input v-model="form.supplier"> </el-input>
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="6" :md="5" :lg="4">
              <el-form-item :label="$t('cost-center')">
                <el-select v-model="form.cost_center">
                  <el-option :label="$t('all')" :value="1"></el-option>
                  <el-option :label="$t('all')" :value="2"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="6" :md="5" :lg="4">
              <el-form-item :label="$t('branch-name')">
                <el-select v-model="form.branch_name">
                  <el-option :label="$t('all')" :value="1"></el-option>
                  <el-option :label="$t('all')" :value="2"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="6" :md="5" :lg="4">
              <el-form-item :label="$t('from-date')">
                <el-date-picker
                  type="date"
                  placeholder="2020-10-15"
                  v-model="form.from_date"
                ></el-date-picker>
              </el-form-item>
            </el-col>

            <el-col :xs="24" :sm="6" :md="5" :lg="4">
              <el-form-item :label="$t('to-date')">
                <el-date-picker
                  type="date"
                  placeholder="2020-10-15"
                  v-model="form.to_date"
                ></el-date-picker>
              </el-form-item>
            </el-col>
          </el-row>
        </el-col>

        <el-col :xs="24" :sm="24" :md="5">
          <div class="four-button-invoice">
            <!-----order ---->
            <el-button
              @click="
                form.show_branch_name_when_printing_account_statement =
                  !form.show_branch_name_when_printing_account_statement
              "
              :class="[
                form.show_branch_name_when_printing_account_statement
                  ? 'btn-dark-grey'
                  : 'btn-red',
              ]"
              class="width-full mt-4"
              style="line-height: 20px"
            >
              <span
                v-if="form.show_branch_name_when_printing_account_statement"
              >
                {{ $t("show-branch-name-when-printing-account-statement") }}
              </span>
              <span v-else>
                {{ $t("hide-branch-name-when-printing-account-statement") }}
              </span>
            </el-button>
            <!---- extras---->
            <el-button
              @click="
                form.show_account_previous_balance =
                  !form.show_account_previous_balance
              "
              :class="[
                form.show_account_previous_balance
                  ? 'btn-dark-grey'
                  : 'btn-red',
              ]"
              class="width-full mt-1"
            >
              <span v-if="form.show_account_previous_balance">
                {{ $t("show-account-previous-balance") }}
              </span>
              <span v-else>
                {{ $t("hide-account-previous-balance") }}
              </span>
            </el-button>
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
      additionalChoice: false,

      form: {
        cost_center: "",
        client_name: "",
        branch_name: "",
        from_date: "",
        to_date: "",
        show_branch_name_when_printing_account_statement: 1,
        show_account_previous_balance: 1,
      },
    };
  },
};
</script>


