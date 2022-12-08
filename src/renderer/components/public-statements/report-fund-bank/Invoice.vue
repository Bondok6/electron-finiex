<template>
  <el-container class="container box-shadow ma-4 mb-0 px-2 py-3">
    <el-form
      class="invoice-form width-full"
      label-position="top"
      :model="main_form"
    >
      <el-row :gutter="6" class="width-full">
        <el-col :xs="24" :sm="6" :md="6" :lg="4">
          <el-form-item :label="$t('branch-name')">
            <el-select v-model="main_form.name">
              <el-option label="الفرع الرئيسي" :value="1"></el-option>
              <el-option label="الفرع الرئيسي" :value="2"></el-option>
            </el-select>
          </el-form-item>
        </el-col>

        <el-col :xs="24" :sm="6" :md="6" :lg="4">
          <el-form-item :label="$t('box-bank')">
            <el-select v-model="main_form.box_bank">
              <el-option label=" الكل" :value="1"></el-option>
              <el-option label=" الكل" :value="2"></el-option>
            </el-select>
          </el-form-item>
        </el-col>

        <el-col :xs="24" :sm="6" :md="6" :lg="4">
          <el-form-item :label="$t('to-date')">
            <el-date-picker
              type="date"
              placeholder="2020-10-15"
              v-model="main_form.date"
            ></el-date-picker>
          </el-form-item>
        </el-col>

        <el-col :xs="24" :sm="24" :md="6" :lg="12" class="mt-2">
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
                :label="$t('account-name')"
                :value="2"
                class="selectButton"
              >
                <el-button class="width-full">
                  {{ $t("account-name") }}
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

              <el-option
                :label="$t('account-number')"
                :value="2"
                class="selectButton"
              >
                <el-button class="width-full">
                  {{ $t("account-number") }}
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
  name: "invoice",

  data: function () {
    return {
      main_form: {
        name: "",
        box_bank: "",
        date: "",
        type: "",
      },
    };
  },
};
</script>