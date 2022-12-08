
<template>
  <el-container class="container ma-2 mb-0 px-2 py-2">
    <el-form v-model="main_form">
      <el-row class="width-full mt-4">
        <el-col :xs="24" :md="12">
          <el-row class="width-full">
            <el-row :gutter="10" class="width-full">
              <el-col
                :xs="24"
                :sm="24"
                :md="14"
                :lg="14"
                class="popup-label2 mt-2"
              >
                <span>{{ $t("subscription-status") }}</span>
              </el-col>
              <el-col :xs="24" :sm="24" :md="8" :lg="8" class="mt-3">
                <el-select
                  :placeholder="$t('all')"
                  v-model="main_form.item_number"
                  class="width-full"
                >
                  <el-option :label="$t('credit')" :value="2"></el-option>
                  <el-option :label="$t('debit')" :value="1"></el-option>
                </el-select>
              </el-col>
            </el-row>
            <el-row :gutter="10" class="width-full">
              <el-col
                :xs="24"
                :sm="24"
                :md="14"
                :lg="14"
                class="popup-label2 mt-2"
              >
                <span>{{ $t("subscription-type") }}</span>
              </el-col>
              <el-col :xs="24" :sm="24" :md="8" :lg="8" class="mt-3">
                <el-select
                  :placeholder="$t('all')"
                  v-model="main_form.item_number"
                  class="width-full"
                >
                  <el-option :label="$t('credit')" :value="2"></el-option>
                  <el-option :label="$t('debit')" :value="1"></el-option>
                </el-select>
              </el-col>
            </el-row>
            <el-row :gutter="10" class="width-full">
              <el-col
                :xs="24"
                :sm="24"
                :md="14"
                :lg="14"
                class="popup-label2 mt-2"
              >
                <span>{{ $t("minimum-invoice-amount") }}</span>
              </el-col>
              <el-col :xs="24" :sm="24" :md="8" :lg="8" class="mt-3">
                <el-input
                  :placeholder="$t('all')"
                  v-model="main_form.item_number"
                  class="width-full"
                >
                </el-input>
              </el-col>
            </el-row>
            <el-row :gutter="10" class="width-full">
              <el-col
                :xs="24"
                :sm="24"
                :md="14"
                :lg="14"
                class="popup-label2 mt-2"
              >
                <span>{{ $t("discount-percentage") }}</span>
              </el-col>
              <el-col :xs="24" :sm="24" :md="8" :lg="8" class="mt-3">
                <el-input
                  class="navy-color placeHolderDialog"
                  v-model="main_form.account_number"
                >
                  <template slot="append">
                    <span class="mb-1 btn-navy">%</span>
                  </template>
                </el-input>
              </el-col>
            </el-row>
            <el-row :gutter="10" class="width-full">
              <el-col
                :xs="24"
                :sm="24"
                :md="14"
                :lg="14"
                class="popup-label2 mt-2"
              >
                <span>{{ $t("number-of-points") }}</span>
              </el-col>
              <el-col :xs="24" :sm="24" :md="8" :lg="8" class="mt-3">
                <el-input
                  class="navy-color placeHolderDialog"
                  v-model="main_form.account_number"
                >
                  <template slot="append">
                    <span class="mb-1 btn-navy">{{ $t("point") }} </span>
                  </template>
                </el-input>
              </el-col>
            </el-row>
          </el-row>
        </el-col>
        <el-col :xs="24" :md="12" class="d-flex justify-center">
          <el-row class="width-full">
            <el-col :xs="14" :md="24">
              <el-col :span="24" class="mt-2">
                <el-button
                  class="w-250 ma-2"
                  style="float: left"
                  @click="main_form.not_send = !main_form.not_send"
                  :class="[main_form.not_send ? 'btn-dark-grey' : 'btn-red']"
                >
                  <span>
                    {{
                      $t(
                        "sending-a-message-to-customer’s-mobile-when-adding-customer-in-my-points-service"
                      )
                    }}
                  </span>
                </el-button>
              </el-col>
              <el-col :span="24" class="mt-2">
                <el-input
                  class="notes-summary ma-2"
                  type="textarea"
                  :rows="7"
                  placeholder="الملاحظات"
                >
                </el-input>
              </el-col>
              <el-col :span="24" class="mt-2">
                <el-input
                  class="notes-summary ma-2"
                  type="textarea"
                  :rows="7"
                  placeholder="الملاحظات"
                >
                </el-input>
              </el-col>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </el-form>
  </el-container>
</template>
<script>
export default {
  name: "search",

  data: function () {
    return {
      main_form: {
        not_send: 1,
      },
    };
  },
};
</script>