<template>
  <el-container class="container box-shadow ma-4 mb-0 px-2 py-3">
    <el-form
      class="invoice-form width-full"
      label-position="top"
      :model="main_form"
    >
      <el-row :gutter="6" class="width-full">
        <el-col :xs="22" :sm="6" :md="5" :lg="4" class="mt-2">
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
        <el-col :xs="22" :sm="6" :md="5" :lg="4">
          <el-form-item :label="$t('to-date')">
            <el-date-picker
              type="date"
              placeholder="2020-10-15"
              v-model="main_form.to_date"
            ></el-date-picker>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="20" :md="3" :lg="10" class="mt-2">
          <div class="spacer"></div>
        </el-col>
        <el-col :xs="24" :sm="20" :md="8" :lg="5">
          <el-form-item>
            <el-button
              class="text-center width-full btn-cyan-light mt-3"
              @click="additionalChoice = true"
            >
              {{ $t("additional-choices") }}
            </el-button>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="20" :md="8" :lg="5">
          <el-form-item>
            <el-select
              v-model="main_form.type"
              class="
                color-blue
                text-center
                placeHolderColor
                width-full
                selectButton
                mt-3
              "
              :placeholder="$t('order')"
            >
              <el-option
                :label="$t('client-number')"
                :value="1"
                class="selectButton"
              >
                <el-button class="width-full">
                  {{ $t("client-number") }}
                </el-button>
              </el-option>
              <el-option
                :label="$t('client-name')"
                :value="1"
                class="selectButton"
              >
                <el-button class="width-full">
                  {{ $t("client-name") }}
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

              <el-option
                :label="$t('customer-branch')"
                :value="2"
                class="selectButton"
              >
                <el-button class="width-full">
                  {{ $t("customer-branch") }}
                </el-button>
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>

        <el-col> </el-col>
      </el-row>
      <el-row :gutter="6" class="width-full">
        <el-col :xs="24" :sm="20" :md="8" :lg="14" class="mt-2">
          <div class="spacer"></div>
        </el-col>
        <el-col :xs="24" :sm="20" :md="16" :lg="10">
          <el-form-item>
            <el-button
              class="text-center width-full"
              @click="
                main_form.not_include_invoic_remain_amount_equal =
                  !main_form.not_include_invoic_remain_amount_equal
              "
              :class="[
                main_form.not_include_invoic_remain_amount_equal
                  ? 'btn-dark-grey'
                  : 'btn-red',
              ]"
            >
              <span v-if="main_form.not_include_invoic_remain_amount_equal"
                >{{ $t("include-invoice-remain-amount-equal") }}
              </span>

              <span v-else>
                {{ $t("not-include-invoice-remain-amount-equal") }}
              </span>
            </el-button>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
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
              <el-col :xs="24" :sm="24" :md="6" :lg="4">
                <el-form-item>
                  <label>{{ $t("from-number") }}</label>
                  <el-input v-model="sub_form.formNumber"></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="6" :lg="4">
                <el-form-item>
                  <label>{{ $t("to-number") }}</label>
                  <el-input v-model="sub_form.toNumber"></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="6" :lg="4">
                <el-form-item>
                  <label>{{ $t("client-name") }}</label>
                  <el-select v-model="sub_form.clientName">
                    <el-option :label="$t('1')" :value="2"></el-option>
                    <el-option :label="$t('2')" :value="1"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="6" :lg="4">
                <el-form-item>
                  <label>{{ $t("user-name") }}</label>
                  <el-select v-model="sub_form.userName" :label="$t('all')">
                    <el-option :label="$t('1')" :value="2"></el-option>
                    <el-option :label="$t('2')" :value="1"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="6" :lg="4">
                <el-form-item>
                  <label>{{ $t("invoice-type") }}</label>
                  <el-select v-model="sub_form.invType" :label="$t('all')">
                    <el-option :label="$t('1')" :value="2"></el-option>
                    <el-option :label="$t('2')" :value="1"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row :gutter="6" class="width-full">
              <el-col :xs="24" :sm="24" :md="6" :lg="4">
                <el-form-item>
                  <label>{{ $t("b-Customer") }}</label>
                  <el-select v-model="sub_form.b_customer" :label="$t('all')">
                    <el-option :label="$t('1')" :value="2"></el-option>
                    <el-option :label="$t('2')" :value="1"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="6" :lg="4">
                <el-form-item>
                  <label>{{ $t("delegate-name") }}</label>
                  <el-select
                    v-model="sub_form.delegate_name"
                    :label="$t('all')"
                  >
                    <el-option :label="$t('1')" :value="2"></el-option>
                    <el-option :label="$t('2')" :value="1"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="6" :lg="4">
                <el-form-item>
                  <label>{{ $t("driver-name") }}</label>
                  <el-select v-model="sub_form.driver_name" :label="$t('all')">
                    <el-option :label="$t('1')" :value="2"></el-option>
                    <el-option :label="$t('2')" :value="1"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="6" :lg="4">
                <el-form-item>
                  <label>{{ $t("box-bank") }}</label>
                  <el-select v-model="sub_form.box_bank" :label="$t('all')">
                    <el-option :label="$t('1')" :value="2"></el-option>
                    <el-option :label="$t('2')" :value="1"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="6" :lg="4">
                <el-form-item>
                  <label>{{ $t("inv-state") }}</label>
                  <el-select v-model="sub_form.inv_state" :label="$t('all')">
                    <el-option :label="$t('1')" :value="2"></el-option>
                    <el-option :label="$t('2')" :value="1"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="6" :lg="6">
                <el-form-item>
                  <label>{{ $t("the-total-amount") }}</label>
                  <el-row :gutter="6">
                    <el-col :span="14">
                      <el-select
                        v-model="sub_form.equals"
                        :label="$t('equals')"
                      >
                        <el-option :label="$t('1')" :value="2"></el-option>
                        <el-option :label="$t('2')" :value="1"></el-option>
                      </el-select>
                    </el-col>
                    <el-col :span="10" class="amount-append">
                      <el-input
                        class="text-center"
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
        not_include_invoic_remain_amount_equal: 1,
      },
      sub_form: {
        formNumber: "",
        toNumber: "",
        clientName: "",
        userName: "",
        invType: "",
        b_customer: "",
        delegate_name: "",
        driver_name: "",
        box_bank: "",
        inv_state: "",
        equals: "",
        transfer_number: "",
      },
      additionalChoice: false,
    };
  },
};
</script>














 