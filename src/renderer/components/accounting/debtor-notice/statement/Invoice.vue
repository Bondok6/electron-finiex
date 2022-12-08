<template>
  <el-container class="container box-shadow ma-4 mb-0 px-2 py-3">
    <el-form
      class="invoice-form d-flex justify-center width-full"
      label-position="top"
      :model="form"
    >
      <el-row :gutter="6" class="width-full">
        <el-col :span="24">
          <el-row :gutter="6">  
            <el-col :xs="24" :sm="6" :md="5" :lg="5">
              <el-form-item :label="$t('from-bond-date')">
                <el-date-picker
                  type="date"
                  placeholder="2020-10-15"
                  format="yyyy-MM-dd"
                  Value-format="yyyy-MM-dd"
                  v-model="form.date"
                ></el-date-picker>
              </el-form-item>
            </el-col>
          

            <el-col :xs="24" :sm="6" :md="5" :lg="5">
              <el-form-item :label="$t('supplier-name')">
                <el-select v-model="form.branch_from">
                  <el-option :label="$t('all')" :value="1"></el-option>
                  <el-option :label="$t('all')" :value="2"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
        </el-col>

        <el-col :span="24">
          <el-row :gutter="6">  
            <el-col :xs="24" :sm="6" :md="5" :lg="5">
              <el-form-item :label="$t('to-bond-date')">
                <el-date-picker
                  type="date"
                  placeholder="2020-10-15"
                  format="yyyy-MM-dd"
                  Value-format="yyyy-MM-dd"
                  v-model="form.date"
                ></el-date-picker>
              </el-form-item>
            </el-col>


        <el-col :xs="24" :sm="24" :md="19" :lg="19" :xl="19" class="mt-40">
          <div class="inline-button-container d-flex">
            <div class="spacer"></div>
            <el-button
              class="text-center btn-cyan-light"
              @click="additionalChoice = true"
            >
              {{ $t("additional-choices") }}
            </el-button>
          </div>
          <el-dialog title=" " :visible.sync="additionalChoice" width="70%">
              <span>
                <el-container class="d-block box-shadow mb-0 px-2 py-2">
                  <el-form
                    class="invoice-form width-full"
                    label-position="top"
                    :model="form"
                  >
                    <el-row :gutter="6" class="width-full">
                      <el-col :xs="24" :sm="24" :md="6" :lg="6">
                        <el-form-item>
                          <label>{{ $t("branch-name") }}</label>
                          <el-select v-model="form.comma" :placeholder="$t('all')">
                            <el-option
                              :label="$t('all')"
                              :value="2"
                            ></el-option>
                            <el-option
                              :label="$t('all')"
                              :value="1"
                            ></el-option>
                          </el-select>
                        </el-form-item>
                      </el-col>
                      <el-col :xs="24" :sm="24" :md="6" :lg="6">
                        <el-form-item>
                          <label>{{ $t("account-name") }}</label>
                          <el-select v-model="form.comma" :placeholder="$t('all')">
                            <el-option
                              :label="$t('all')"
                              :value="2"
                            ></el-option>
                            <el-option
                              :label="$t('all')"
                              :value="1"
                            ></el-option>
                          </el-select>
                        </el-form-item>
                      </el-col>
                      <el-col :xs="24" :sm="24" :md="6" :lg="6">
                        <el-form-item>
                          <label>{{ $t("account-type") }}</label>
                          <el-select v-model="form.comma" :placeholder="$t('all')">
                            <el-option
                              :label="$t('all')"
                              :value="2"
                            ></el-option>
                            <el-option
                              :label="$t('all')"
                              :value="1"
                            ></el-option>
                          </el-select>
                        </el-form-item>
                      </el-col>
                    </el-row>
                        <el-checkbox class="padding-label arround-checkbox inner-checkbox" @change="
                        form.showing_accounts_with_zero_balances = !form.showing_accounts_with_zero_balances">
                        <span v-if="form.showing_accounts_with_zero_balances">
                      {{ $t("not-showing-accounts-with-a-zero-balance") }}
                    </span>
                    <span v-else>
                      {{ $t("showing-accounts-with-a-zero-balance") }}
                    </span>
                        </el-checkbox>
                  </el-form>
                </el-container>
              </span>
              <span slot="footer" class="dialog-footer">
                <el-button
                  class="btn-cyan-light"
                  @click="additionalChoice = false"
                  >{{ $t("agree") }}</el-button
                >
              </span>
            </el-dialog>
        </el-col>
          </el-row>
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
        equals: 1,
        receipt_number: 1,
        transfer_price: 1,
        // warehouse_to: 1,
        warehouse_from: 1,
        // branch_to: 1,
        branch_from: 1,
      },
    };
  },
};
</script>