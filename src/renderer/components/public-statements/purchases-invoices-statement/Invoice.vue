<template>
  <el-container class="container box-shadow ma-4 mb-0 px-2 py-3">
    <el-form
      class="invoice-form width-full"
      label-position="top"
      :model="main_form"
    >
      <el-row :gutter="6" class="width-full">
        <el-col :xs="24" :sm="10" :md="6" :lg="4">
          <el-form-item :label="$t('from-date')">
            <el-date-picker
              type="date"
              placeholder="2020-10-15"
              v-model="main_form.from_date"
            ></el-date-picker>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="6" class="width-full">
        <el-col :xs="24" :sm="10" :md="6" :lg="4">
          <el-form-item :label="$t('to-date')">
            <el-date-picker
              type="date"
              placeholder="2020-10-15"
              v-model="main_form.to_date"
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
                :label="$t('supplier-number')"
                :value="1"
                class="selectButton"
              >
                <el-button class="width-full">
                  {{ $t("supplier-number") }}
                </el-button>
              </el-option>
              <el-option
                :label="$t('supplier-name')"
                :value="1"
                class="selectButton"
              >
                <el-button class="width-full">
                  {{ $t("supplier-name") }}
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
                        <label>{{ $t("from-number") }}</label>
                        <el-input v-model="sub_form.formNumber"></el-input>
                      </el-form-item>
                    </el-col>
                    <el-col :xs="24" :sm="24" :md="6" :lg="5">
                      <el-form-item>
                        <label>{{ $t("to-number") }}</label>
                        <el-input v-model="sub_form.toNumber"></el-input>
                      </el-form-item>
                    </el-col>
                    <el-col :xs="24" :sm="24" :md="6" :lg="5">
                      <el-form-item>
                        <label>{{ $t("supplier-name") }}</label>
                        <el-select v-model="sub_form.supplierName">
                          <el-option :label="$t('1')" :value="2"></el-option>
                          <el-option :label="$t('2')" :value="1"></el-option>
                        </el-select>
                      </el-form-item>
                    </el-col>
                    <el-col :xs="24" :sm="24" :md="6" :lg="5">
                      <el-form-item>
                        <label>{{ $t("supplier-invoice-no") }}</label>
                        <el-input
                          v-model="sub_form.supplier_invoice_no"
                        ></el-input>
                      </el-form-item>
                    </el-col>
                  </el-row>
                  <el-row :gutter="6" class="width-full">
                    <el-col :xs="24" :sm="24" :md="6" :lg="5">
                      <el-form-item>
                        <label>{{ $t("box-bank") }}</label>
                        <el-select
                          v-model="sub_form.box_bank"
                          :label="$t('all')"
                        >
                          <el-option :label="$t('1')" :value="2"></el-option>
                          <el-option :label="$t('2')" :value="1"></el-option>
                        </el-select>
                      </el-form-item>
                    </el-col>
                    <el-col :xs="24" :sm="24" :md="6" :lg="5">
                      <el-form-item>
                        <label>{{ $t("invoice-type") }}</label>
                        <el-select
                          v-model="sub_form.invoice_type"
                          :label="$t('all')"
                        >
                          <el-option :label="$t('1')" :value="2"></el-option>
                          <el-option :label="$t('2')" :value="1"></el-option>
                        </el-select>
                      </el-form-item>
                    </el-col>
                    <el-col :xs="24" :sm="24" :md="6" :lg="5">
                      <el-form-item>
                        <label>{{ $t("payment-method") }}</label>
                        <el-select
                          v-model="sub_form.payment_method"
                          :label="$t('all')"
                        >
                          <el-option :label="$t('1')" :value="2"></el-option>
                          <el-option :label="$t('2')" :value="1"></el-option>
                        </el-select>
                      </el-form-item>
                    </el-col>

                    <el-col :xs="24" :sm="24" :md="6" :lg="5">
                      <el-form-item>
                        <label>{{ $t("amount") }}</label>
                        <el-row :gutter="6">
                          <el-col :span="14">
                            <el-select
                              v-model="sub_form.equals"
                              :label="$t('equals')"
                            >
                              <el-option
                                :label="$t('1')"
                                :value="2"
                              ></el-option>
                              <el-option
                                :label="$t('2')"
                                :value="1"
                              ></el-option>
                            </el-select>
                          </el-col>
                          <el-col :span="10" class="amount-append">
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
                  <el-row class="width-full">
                    <el-col :xs="24" :sm="24" :md="6" :lg="4">
                      <el-form-item>
                        <label>{{ $t("branch-name") }}</label>
                        <el-select
                          v-model="sub_form.branch_name"
                          :label="$t('all')"
                        >
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
        from_date: "",
        to_date: "",
        type: "",
      },
      sub_form: {
        from_number: "",
        to_number: "",
        supplier_name: "",
        supplier_invoice_no: "",
        box_bank: "",
        invoice_type: "",
        payment_method: "",
        equals: "",
        transfer_number: "",
        branch_name: "",
      },
      additionalChoice: false,
    };
  },
};
</script>
