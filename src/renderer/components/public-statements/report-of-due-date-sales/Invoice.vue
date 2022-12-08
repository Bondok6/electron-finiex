<template>
  <el-container class="container box-shadow ma-4 mb-0 px-2 py-3">
    <el-form
      class="invoice-form width-full"
      label-position="top"
      :model="main_form"
    >
      <el-row :gutter="6" class="width-full">
        <el-col :xs="24" :sm="6" :md="5" :lg="4">
          <el-form-item :label="$t('from-due-date')">
            <el-date-picker
              type="date"
              placeholder="2020-10-15"
              v-model="main_form.from_due_date"
            ></el-date-picker>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="6" :md="5" :lg="4">
          <el-form-item :label="$t('client-name')">
            <el-select v-model="main_form.client_name">
              <el-option label="1" :value="1"></el-option>
              <el-option label="2" :value="2"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="6" class="width-full">
        <el-col :xs="24" :sm="6" :md="5" :lg="4">
          <el-form-item :label="$t('to-due-date')">
            <el-date-picker
              type="date"
              placeholder="2020-10-15"
              v-model="main_form.to_due_date"
            ></el-date-picker>
          </el-form-item>
        </el-col>

        <el-col :xs="24" :sm="24" :md="19" :lg="20" :xl="20" class="mt-2">
          <div class="inline-button-container d-flex">
            <div class="spacer"></div>
            <el-select
              v-model="main_form.type"
              class="color-blue text-center placeHolderColor w-250 selectButton"
              :placeholder="$t('order')"
            >
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
                :label="$t('invoice-number')"
                :value="2"
                class="selectButton"
              >
                <el-button class="width-full">
                  {{ $t("invoice-number") }}
                </el-button>
              </el-option>
              <el-option
                :label="$t('invoice-date')"
                :value="2"
                class="selectButton"
              >
                <el-button class="width-full">
                  {{ $t("invoice-date") }}
                </el-button>
              </el-option>
            </el-select>
          </div>
        </el-col>
        <el-col :xs="24" :sm="24" :md="19" :lg="20" :xl="20" class="mt-2">
          <div class="inline-button-container d-flex">
            <div class="spacer"></div>
            <el-button
              class="text-center w-250 btn-cyan-light"
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
                  :model="sub_form"
                >
                  <el-row :gutter="6" class="width-full">
                    <el-col :xs="24" :sm="24" :md="6" :lg="6">
                      <el-form-item>
                        <label>{{ $t("from-number") }}</label>
                        <el-input v-model="sub_form.form_number"></el-input>
                      </el-form-item>
                    </el-col>
                    <el-col :xs="24" :sm="24" :md="6" :lg="6">
                      <el-form-item>
                        <label>{{ $t("delegate-name") }}</label>
                        <el-select v-model="sub_form.delegate_name">
                          <el-option :label="$t('all')" :value="2"></el-option>
                          <el-option :label="$t('all')" :value="1"></el-option>
                        </el-select>
                      </el-form-item>
                    </el-col>
                  </el-row>
                  <el-row :gutter="6" class="width-full">
                    <el-col :xs="24" :sm="24" :md="6" :lg="6">
                      <el-form-item>
                        <label>{{ $t("to-number") }}</label>
                        <el-input v-model="sub_form.to_number"></el-input>
                      </el-form-item>
                    </el-col>
                    <el-col :xs="24" :sm="24" :md="6" :lg="6">
                      <el-form-item>
                        <label>{{ $t("amount") }}</label>

                        <el-row :gutter="6">
                          <el-col :span="12">
                            <el-select
                              v-model="sub_form.equals"
                              :label="$t('equals')"
                            >
                              <el-option
                                :label="$t('equals')"
                                :value="2"
                              ></el-option>
                              <el-option
                                :label="$t('equals')"
                                :value="1"
                              ></el-option>
                            </el-select>
                          </el-col>
                          <el-col :span="12" class="amount-append">
                            <el-input
                              class=" text-center"
                              v-model="sub_form.transfer_number"
                              placeholder=" "
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
        </el-col>
      </el-row>
    </el-form>
  </el-container>
</template>

<script>
export default {
  name: "Invoice",
  data: function () {
    return {
      main_form: {
        from_due_date: "",
        to_due_date: "",
        client_name: "",
        type: "",
      },
      sub_form: {
        from_number: "",
        to_number: "",
        delegate_name: "",
        equals: "",
        transfer_number: "",
      },
      additionalChoice: false,
    };
  },
};
</script>




