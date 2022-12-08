<template>
  <el-container class="container box-shadow ma-4 mb-0 px-2 py-3">
    <el-form class="invoice-form width-full" label-position="top" :model="form">
      <el-row :gutter="6" class="width-full">
        <el-col :xs="24" :sm="24" :md="12">
          <el-row :gutter="6" class="width-full">
            <el-col :xs="24" :sm="24" :md="8" :lg="8">
              <el-form-item :label="$t('client')">
                <el-select v-model="form.client">
                  <el-option :label="$t('all')" :value="1"></el-option>
                  <el-option :label="$t('all')" :value="2"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row :gutter="6" class="width-full">
            <el-col :xs="24" :sm="24" :md="8" :lg="8">
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

        <el-col :xs="24" :sm="24" :md="12">
          <div class="inline-button-container d-flex flex-direction-column mt">
            <div class="vertical-buttons">
              <el-select
                v-model="order_type"
                class="color-blue text-center placeHolderColor mb-1"
                :placeholder="$t('order')"
              >
                <el-option :label="$t('client-name')" :value="1"></el-option>
                <el-option :label="$t('maximum-balance')" :value="2"></el-option>
                <el-option :label="$t('minimum-balance')" :value="3"></el-option>
                <el-option :label="$t('account-number')" :value="4"></el-option>
              </el-select>

              <el-button
                class="text-center btn-cyan-light width-full mt-1"
                @click="additionalChoice = true">
                {{ $t("additional-choices") }}
              </el-button>
            </div>
          </div>
        </el-col>
      </el-row>
    </el-form>

    <el-dialog title=" " :visible.sync="additionalChoice" width="70%">
      <span>
        <el-container class="d-block box-shadow mb-0 px-2 py-2">
          <el-form
            class="invoice-form width-full"
            label-position="top"
            :model="additional_choices"
          >
            <el-row :gutter="6" class="width-full">
              <el-col :xs="24" :sm="24" :md="6" :lg="6">
                <el-form-item>
                  <label>{{ $t("branch") }}</label>
                  <el-select v-model="additional_choices.branch">
                    <el-option :label="$t('main-branch')" :value="1"></el-option>
                    <el-option :label="$t('main-branch')" :value="2"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>

              <el-col :xs="24" :sm="24" :md="6" :lg="6">
                <el-form-item>
                  <label>{{ $t("city") }}</label>
                  <el-select v-model="additional_choices.city">
                    <el-option :label="$t('maximum-balance')" :value="1"></el-option>
                    <el-option :label="$t('minimum-balance')" :value="2"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>

              <el-col :xs="24" :sm="24" :md="6" :lg="6">
                <el-form-item>
                  <label>{{ $t("client-category") }}</label>
                  <el-select v-model="additional_choices.client_category">
                    <el-option :label="$t('all')" :value="1"></el-option>
                    <el-option :label="$t('all')" :value="2"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row :gutter="6" class="width-full">
              <el-col :xs="24" :sm="24" :md="6" :lg="6">
                <el-form-item>
                  <label>{{ $t("delegate") }}</label>
                  <el-select v-model="additional_choices.delegate">
                    <el-option :label="$t('all')" :value="1"></el-option>
                    <el-option :label="$t('all')" :value="2"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>

              <el-col :xs="24" :sm="24" :md="6" :lg="6">
                <el-form-item>
                  <label>{{ $t("balance") }}</label>
                  <el-row :gutter="6">
                    <el-col :span="14">
                      <el-select v-model="additional_choices.balance.type">
                        <el-option :label="$t('equals')" :value="2"></el-option>
                        <el-option :label="$t('equals')" :value="1"></el-option>
                      </el-select>
                    </el-col>
                    <el-col :span="10" class="amount-append">
                      <el-input
                        class=" text-center pa-0"
                        v-model="additional_choices.balance.value"
                        placeholder=""
                      >
                      </el-input>
                    </el-col>
                  </el-row>
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
      additionalChoice: false,
      order_type: null,
      form: {
        to_date: "",
        client: 1
      },

      additional_choices: {
        branch: 1,
        city: 1,
        client_category: 1,
        delegate: 1,
        balance: {
          type: 1,
          value: 0,
        }
      }
    };
  },
};
</script>

<style lang="scss" scoped>
.mt {
  margin-top: 1.7rem;
}
</style>