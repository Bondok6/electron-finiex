<template>
  <el-container class="container box-shadow ma-4 mb-0 px-2 py-3">
    <el-form
      class="invoice-form width-full"
      label-position="top"
      :model="main_form"
    >
      <el-row :gutter="6" class="width-full">
        <el-col :xs="24" :sm="24" :md="12">
          <el-row :gutter="6">
            <el-col :span="24">
              <el-row :gutter="6">
                <el-col :xs="24" :sm="12" :md="8">
                  <el-form-item :label="$t('from-date')">
                    <el-date-picker
                      type="date"
                      placeholder="2020-10-15"
                      v-model="main_form.from_date"
                    ></el-date-picker>
                  </el-form-item>
                </el-col>

                <el-col :xs="24" :sm="12" :md="8">
                  <el-form-item :label="$t('order-no')">
                    <el-select v-model="main_form.order_no">
                      <el-option :label="$t('all')" :value="2"></el-option>
                      <el-option :label="$t('all')" :value="1"></el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
              </el-row>
            </el-col>

            <el-col :span="24">
              <el-row :gutter="6">
                <el-col :xs="24" :sm="12" :md="8">
                  <el-form-item :label="$t('to-date')">
                    <el-date-picker
                      type="date"
                      placeholder="2020-10-15"
                      v-model="main_form.to_date"
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
                v-model="main_form.type"
                class="color-blue text-center placeHolderColor"
                :placeholder="$t('order')"
              >
                <el-option :label="$t('client-name')" :value="1"></el-option>
                <el-option :label="$t('client-number')" :value="2"></el-option>
                <el-option
                  :label="$t('maximum-balance')"
                  :value="3"
                ></el-option>
                <el-option
                  :label="$t('minimum-balance')"
                  :value="3"
                ></el-option>
                <el-option :label="$t('invoice-number')" :value="2"></el-option>
                <el-option :label="$t('invoice-date')" :value="3"></el-option>
                <el-option :label="$t('order-no')" :value="3"></el-option>
              </el-select>

              <el-form-item class="mt-2">
                <el-button
                  class="btn-cyan-light width-full"
                  @click="dialog = true"
                  >{{ $t("additional-choices") }}</el-button
                >
              </el-form-item>
            </div>
          </div>
        </el-col>
      </el-row>
    </el-form>

    <!-- dialog -->
    <el-dialog title=" " :visible.sync="dialog" width="70%">
      <span>
        <el-container class="container box-shadow mb-0 px-2 py-2">
          <el-form class="invoice-form" label-position="top" :model="sub_form">
            <el-row :gutter="6">
              <el-col :span="24">
                <el-row :gutter="6">
                  <el-col :xs="24" :sm="24" :md="5" :lg="5">
                    <el-form-item :label="$t('from-invoice-number')">
                      <el-input v-model="sub_form.from_number"></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :xs="24" :sm="24" :md="5" :lg="5">
                    <el-form-item :label="$t('to-invoice-number')">
                      <el-input v-model="sub_form.to_number"></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :xs="24" :sm="24" :md="5" :lg="5">
                    <el-form-item :label="$t('user-name')">
                      <el-select v-model="sub_form.user_name">
                        <el-option :label="$t('main')" :value="2"></el-option>
                        <el-option :label="$t('main')" :value="1"></el-option>
                      </el-select>
                    </el-form-item>
                  </el-col>
                  <el-col :xs="24" :sm="24" :md="5" :lg="5">
                    <el-form-item :label="$t('reservation-status')">
                      <el-select v-model="sub_form.reservation_status">
                        <el-option :label="$t('main')" :value="2"></el-option>
                        <el-option :label="$t('main')" :value="1"></el-option>
                      </el-select>
                    </el-form-item>
                  </el-col>
                </el-row>
              </el-col>

              <el-col :span="24" class="mt-2">
                <el-row :gutter="6">
                  <el-col :xs="24" :sm="24" :md="5" :lg="5">
                    <el-form-item :label="$t('box-bank')">
                      <el-select v-model="sub_form.box_bank">
                        <el-option :label="$t('main')" :value="2"></el-option>
                        <el-option :label="$t('main')" :value="1"></el-option>
                      </el-select>
                    </el-form-item>
                  </el-col>
                  <el-col :xs="24" :sm="24" :md="5" :lg="5">
                    <el-form-item :label="$t('delegate-name')">
                      <el-select v-model="sub_form.delegate_name">
                        <el-option :label="$t('main')" :value="2"></el-option>
                        <el-option :label="$t('main')" :value="1"></el-option>
                      </el-select>
                    </el-form-item>
                  </el-col>
                  <el-col :xs="24" :sm="24" :md="5" :lg="5">
                    <el-form-item :label="$t('department')">
                      <el-select v-model="sub_form.department">
                        <el-option :label="$t('main')" :value="2"></el-option>
                        <el-option :label="$t('main')" :value="1"></el-option>
                      </el-select>
                    </el-form-item>
                  </el-col>
                  <el-col :xs="24" :sm="24" :md="5" :lg="5">
                    <el-form-item :label="$t('mobile-cust')">
                      <el-input v-model="sub_form.mobile_cust"></el-input>
                    </el-form-item>
                  </el-col>
                </el-row>
              </el-col>
            </el-row>
          </el-form>
        </el-container>
      </span>
      <span slot="footer" class="dialog-footer">
        <el-button class="btn-cyan-light" @click="dialog = false">{{
          $t("agree")
        }}</el-button>
      </span>
    </el-dialog>
  </el-container>
</template>


<script>
export default {
  name: "invoice",

  data: function () {
    return {
      dialog: false,

      main_form: {
        from_date: "",
        to_date: "",
        order_no: "",
        type: "",
      },
      sub_form: {
        from_number: "",
        to_number: "",
        user_name: "",
        reservation_status: "",
        box_bank: "",
        delegate_name: "",
        department: "",
        mobile_cust: "",
      },
    };
  },
};
</script>