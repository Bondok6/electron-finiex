<template>
  <el-container class="container box-shadow ma-4 mb-0 px-2 py-3">
    <el-form
      class="invoice-form width-full"
      label-position="top"
      :model="main_form"
    >
      <el-row :gutter="6" class="width-full">
        <el-col :xs="24" :sm="6" :md="6" :lg="4">
          <el-form-item :label="$t('employee')">
            <el-select v-model="main_form.employee">
              <el-option :label="$t('all')" :value="1"></el-option>
              <el-option :label="$t('all')" :value="2"></el-option>
            </el-select>
          </el-form-item>
        </el-col>

        <el-col :xs="24" :sm="6" :md="6" :lg="4">
          <el-form-item :label="$t('balance')" class="append-label">
            <el-input
              :placeholder="$t('balance')"
              v-model="main_form.balance"
              class="input-with-select"
            >
              <el-select
                v-model="main_form.balance_prepend"
                slot="prepend"
                :placeholder="$t('equals')"
                class="pa-0"
              >
                <el-option :label="$t('equals')" :value="1"></el-option>
                <el-option :label="$t('equals')" :value="2"></el-option>
              </el-select>
            </el-input>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="12" :md="12" :lg="16" class="mt-2">
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
                mt-3
              "
              :placeholder="$t('order')"
            >
              <el-option
                :label="$t('employee-name')"
                :value="2"
                class="selectButton"
              >
                <el-button class="width-full">
                  {{ $t("employee-name") }}
                </el-button>
              </el-option>
              <el-option
                :label="$t('maximum-balance')"
                :value="1"
                class="selectButton"
              >
                <el-button class="width-full">
                  {{ $t("maximum-balance") }}
                </el-button>
              </el-option>
              <el-option
                :label="$t('minimum-balance')"
                :value="2"
                class="selectButton"
              >
                <el-button class="width-full">
                  {{ $t("minimum-balance") }}
                </el-button>
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
  data: function () {
    return {
      main_form: {
        balance: 0,
        employee: "",
        order: "",
        balance_prepend: 1,
      },
    };
  },
};
</script>