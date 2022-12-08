<template>
  <el-container class="container box-shadow ma-4 mb-0 px-2 py-3">
    <el-form class="invoice-form width-full" label-position="top" :model="form">
      <el-row :gutter="6" class="width-full">
        <el-col :xs="24" :sm="24" :md="12">
          <el-row :gutter="6">
            <el-col :span="24">
              <el-row :gutter="6">
                <el-col :xs="24" :sm="24" :md="8" :lg="7">
                  <el-form-item :label="$t('from-date')">
                    <el-date-picker
                      type="date"
                      placeholder="2020-10-15"
                      v-model="form.from_date"
                    ></el-date-picker>
                  </el-form-item>
                </el-col>

                <el-col :xs="24" :sm="24" :md="8" :lg="7">
                  <el-form-item :label="$t('client-name')">
                    <el-select v-model="form.client_name">
                      <el-option :label="$t('all')" :value="1"></el-option>
                      <el-option :label="$t('all')" :value="2"></el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
              </el-row>
            </el-col>

            <el-col :span="24">
              <el-row :gutter="6">
                <el-col :xs="24" :sm="24" :md="8" :lg="7">
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
            <!-- <div class="spacer"></div> -->
            <div class="vertical-buttons">
              <el-select
                v-model="order_type"
                class="color-blue text-center placeHolderColor mb-1"
                :placeholder="$t('order')"
              >
                <el-option :label="$t('account-name')" :value="1"></el-option>
                <el-option :label="$t('maximum-balance')" :value="2"></el-option>
                <el-option :label="$t('minimum-balance')" :value="3"></el-option>
                <el-option :label="$t('bond-number')" :value="4"></el-option>
                <el-option :label="$t('bond-date')" :value="5"></el-option>
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
                  <label>{{ $t("from-bond-number") }}</label>
                  <el-select v-model="additional_choices.from_bond_number">
                    <el-option :label="$t('all')" :value="1"></el-option>
                    <el-option :label="$t('all')" :value="2"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>

              <el-col :xs="24" :sm="24" :md="6" :lg="6">
                <el-form-item>
                  <label>{{ $t("from-amount") }}</label>
                  <el-row :gutter="6">
                    <el-col :span="14">
                      <el-select v-model="additional_choices.from_amount">
                        <el-option :label="$t('equals')" :value="2"></el-option>
                        <el-option :label="$t('equals')" :value="1"></el-option>
                      </el-select>
                    </el-col>
                    <el-col :span="10" class="amount-append">
                      <el-input
                        class=" text-center"
                        v-model="additional_choices.from_transfer_amount"
                        placeholder="55"
                      >
                      </el-input>
                    </el-col>
                  </el-row>
                </el-form-item>
              </el-col>

              <el-col :xs="24" :sm="24" :md="6" :lg="6">
                <el-form-item>
                  <label>{{ $t("cost-center") }}</label>
                  <el-select v-model="additional_choices.box_bank">
                    <el-option :label="$t('all')" :value="1"></el-option>
                    <el-option :label="$t('all')" :value="2"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>

              <el-col :xs="24" :sm="24" :md="6" :lg="6">
                <el-form-item>
                  <label>{{ $t("payment-method") }}</label>
                  <el-select v-model="additional_choices.payment_method">
                    <el-option :label="$t('all')" :value="1"></el-option>
                    <el-option :label="$t('all')" :value="2"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>

              <el-col :xs="24" :sm="24" :md="6" :lg="6">
                <el-form-item>
                  <label>{{ $t("to-bond-number") }}</label>
                  <el-select v-model="additional_choices.to_bond_number">
                    <el-option :label="$t('all')" :value="1"></el-option>
                    <el-option :label="$t('all')" :value="2"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>

              <el-col :xs="24" :sm="24" :md="6" :lg="6">
                <el-form-item>
                  <label>{{ $t("to-amount") }}</label>
                  <el-row :gutter="6">
                    <el-col :span="14">
                      <el-select v-model="additional_choices.to_amount">
                        <el-option :label="$t('equals')" :value="2"></el-option>
                        <el-option :label="$t('equals')" :value="1"></el-option>
                      </el-select>
                    </el-col>
                    <el-col :span="10" class="amount-append">
                      <el-input
                        class=" text-center"
                        v-model="form.to_transfer_amount"
                        placeholder="55"
                      >
                      </el-input>
                    </el-col>
                  </el-row>
                </el-form-item>
              </el-col>

              <el-col :xs="24" :sm="24" :md="6" :lg="6">
                <el-form-item>
                  <label>{{ $t("box-bank") }}</label>
                  <el-select v-model="additional_choices.box_bank">
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
        client_name: 1,
      },

      additional_choices: {
        from_bond_number: 1,
        to_bond_number: 1,
        from_amount: 1,
        to_amount: 1,
        from_transfer_amount: null,
        to_transfer_amount: null,
        payment_method: 1,
        box_bank: 1,
      }
    };
  },
};
</script>