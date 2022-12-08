<template>
  <el-container class="container box-shadow ma-4 mb-0 px-2 py-3">
    <el-form class="invoice-form width-full" label-position="top" :model="form">
      <el-row :gutter="6" class="width-full">
        <el-col :xs="24" :sm="24" :md="12">
          <el-row :gutter="6">
            <el-col :span="24">
              <el-row :gutter="6">
                <el-col :xs="24" :sm="24" :md="8" :lg="6">
                  <el-form-item :label="$t('from-date')">
                    <el-date-picker
                      type="date"
                      placeholder="2020-10-15"
                      v-model="form.from_date"
                    ></el-date-picker>
                  </el-form-item>
                </el-col>
              </el-row>
            </el-col>

            <el-col :span="24">
              <el-row :gutter="6">
                <el-col :xs="24" :sm="24" :md="8" :lg="6">
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
          </el-row>
        </el-col>

        <el-col :xs="24" :sm="24" :md="12">
          <div class="inline-button-container d-flex flex-direction-column">
            <div class="vertical-buttons">
              <el-select
                v-model="order_type"
                class="color-blue text-center placeHolderColor mb-1"
                :placeholder="$t('order')"
              >
                <el-option :label="$t('client-number')" :value="1"></el-option>
                <el-option :label="$t('client-name')" :value="2"></el-option>
                <el-option :label="$t('maximum-balance')" :value="3"></el-option>
                <el-option :label="$t('minimum-balance')" :value="4"></el-option>
                <el-option :label="$t('invoice-number')" :value="5"></el-option>
                <el-option :label="$t('invoice-date')" :value="6"></el-option>
                <el-option :label="$t('delegate-invoice-number')" :value="7"></el-option>
                <el-option :label="$t('delegate-invoice-date')" :value="8"></el-option>
              </el-select>

              <el-button
                class="text-center btn-cyan-light width-full mt-1"
                @click="additionalChoice = true"
              >
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
            :model="form"
          >
            <el-row :gutter="6" class="width-full">
              <el-col :xs="24" :sm="24" :md="6" :lg="4">
                <el-form-item>
                  <label>{{ $t("from-number") }}</label>
                    <el-input
                      v-model="additional_choices.from_number"
                      placeholder=""
                    ></el-input>
                </el-form-item>
              </el-col>

              <el-col :xs="24" :sm="24" :md="6" :lg="4">
                <el-form-item>
                  <label>{{ $t("to-number") }}</label>
                  <el-input
                    v-model="additional_choices.to_number"
                    placeholder=""
                  ></el-input>
                </el-form-item>
              </el-col>

              <el-col :xs="24" :sm="24" :md="6" :lg="4">
                <el-form-item>
                  <label>{{ $t("mobile-cust") }}</label>
                  <el-input
                    v-model="additional_choices.mobile_cust"
                    placeholder=""
                  ></el-input>
                </el-form-item>
              </el-col>

              <el-col :xs="24" :sm="24" :md="6" :lg="4">
                <el-form-item>
                  <label>{{ $t("invoice-type") }}</label>
                  <el-select v-model="additional_choices.invoice_type">
                    <el-option :label="$t('all')" :value="1"></el-option>
                    <el-option :label="$t('all')" :value="2"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>

              <el-col :xs="24" :sm="24" :md="6" :lg="4">
                <el-form-item>
                  <label>{{ $t("invoice-status") }}</label>
                  <el-select v-model="additional_choices.invoice_status">
                    <el-option :label="$t('all')" :value="1"></el-option>
                    <el-option :label="$t('all')" :value="2"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>

              <el-col :xs="24" :sm="24" :md="6" :lg="4">
                <el-form-item>
                  <label>{{ $t("b-Customer") }}</label>
                  <el-select v-model="additional_choices.client_branches">
                    <el-option :label="$t('all')" :value="1"></el-option>
                    <el-option :label="$t('all')" :value="2"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>

              <el-col :xs="24" :sm="24" :md="6" :lg="4">
                <el-form-item>
                  <label>{{ $t("card-no-cust") }}</label>
                  <el-input
                    v-model="additional_choices.card_cust_number"
                    placeholder=""
                  ></el-input>
                </el-form-item>
              </el-col>

              <el-col :xs="24" :sm="24" :md="6" :lg="4">
                <el-form-item>
                  <label>{{ $t("delegate-name") }}</label>
                  <el-select v-model="additional_choices.delegate_name">
                    <el-option :label="$t('all')" :value="1"></el-option>
                    <el-option :label="$t('all')" :value="2"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>

              <el-col :xs="24" :sm="24" :md="6" :lg="4">
                <el-form-item>
                  <label>{{ $t("driver-name") }}</label>
                  <el-select v-model="additional_choices.driver_name">
                    <el-option :label="$t('all')" :value="1"></el-option>
                    <el-option :label="$t('all')" :value="2"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>

              <el-col :xs="24" :sm="24" :md="6" :lg="4">
                <el-form-item>
                  <label>{{ $t("box-bank") }}</label>
                  <el-select v-model="additional_choices.box_bank">
                    <el-option :label="$t('all')" :value="1"></el-option>
                    <el-option :label="$t('all')" :value="2"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>

              <el-col :xs="24" :sm="24" :md="6" :lg="4">
                <el-form-item>
                  <label>{{ $t("branch-name") }}</label>
                  <el-select v-model="additional_choices.branch_name">
                    <el-option :label="$t('all')" :value="1"></el-option>
                    <el-option :label="$t('all')" :value="2"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>

              <el-col :xs="24" :sm="24" :md="6" :lg="4">
                <el-form-item>
                  <label>{{ $t("invoice-amount") }}</label>
                  <el-row :gutter="6">
                    <el-col :span="14">
                      <el-select v-model="additional_choices.invoice_amount">
                        <el-option :label="$t('equals')" :value="1"></el-option>
                        <el-option :label="$t('equals')" :value="2"></el-option>
                      </el-select>
                    </el-col>
                    <el-col :span="10" class="amount-append">
                      <el-input
                        class=" text-center"
                        v-model="additional_choices.transfer_number"
                        placeholder="55"
                      >
                      </el-input>
                    </el-col>
                  </el-row>
                </el-form-item>
              </el-col>


              <el-col :xs="24" :sm="24" :md="6" :lg="4">
                <el-form-item>
                  <label>{{ $t("client-name") }}</label>
                  <el-select v-model="additional_choices.client_name">
                    <el-option :label="$t('all')" :value="1"></el-option>
                    <el-option :label="$t('all')" :value="2"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>

                            
              <el-col :xs="24" :sm="24" :md="6" :lg="4">
                <el-form-item>
                  <label>{{ $t("user-name") }}</label>
                  <el-select v-model="additional_choices.user_name">
                    <el-option :label="$t('all')" :value="1"></el-option>
                    <el-option :label="$t('all')" :value="2"></el-option>
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
      additionalChoice: false,
      order_type: null,
      form: {
        from_date: 1,
        to_date: 1,
      },

      additional_choices: {
        from_number: "",
        to_number: "1",
        mobile_cust: "",
        invoice_status: 1,
        client_branches: 1,
        card_cust_number: 1,
        delegate_name: 1,
        driver_name: 1,
        branch_name: 1,
        box_bank: 1,
        invoice_amount: 1,
        transfer_number: null,
        invoice_type: 1,
        client_name: 1,
        user_name: 1,
      }
    };
  },
};
</script>