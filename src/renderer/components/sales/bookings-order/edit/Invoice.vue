<template>
  <el-container class="container box-shadow ma-4 mb-0 px-2 py-3 pb-1">
    <el-form class="invoice-form width-full" label-position="top" :model="form">
      <el-row :gutter="6" class="width-full">
        <el-col :xs="24" :sm="24" :md="4" :lg="4">
          <el-form-item :label="$t('reservation-number')">
            <el-input v-model="form.reservation_number" placeholder="1">
            </el-input>
          </el-form-item>
        </el-col>

        <el-col :xs="24" :sm="24" :md="4" :lg="4">
          <el-form-item :label="$t('box-name')">
            <el-select v-model="form.box_name">
              <div class="add-btn add-btn-red" @click="openAddBoxBankDialog()">
                {{$t("add-box")}} 
                <i class="el-icon-plus mx-1"></i> 
              </div>
              <el-option label="البنك الأهلي" :value="1"></el-option>
              <el-option label="البنك الأهلي" :value="2"></el-option>
            </el-select>
          </el-form-item>
        </el-col>

        <el-col :xs="24" :sm="24" :md="4" :lg="4">
          <el-form-item :label="$t('reservation-date')">
            <el-date-picker
              type="datetime"
              placeholder="2020-10-15"
              format="yyyy-MM-dd HH:mm"
              Value-format="yyyy-MM-dd HH:mm"
              v-model="form.reservation_date"
            ></el-date-picker>
          </el-form-item>
        </el-col>

        <el-col :xs="24" :sm="24" :md="4" :lg="4">
          <el-form-item :label="$t('client-name')">
            <div class="select-container">
              <input-drop-down
                v-model="form.client_name"
                placeholder=""
                class=" input-menu"
                @keydown.meta.native="openSearchClientDialog()"
                @keydown.ctrl.native="openSearchClientDialog()"
              >
                <div class="add-btn add-btn-red" @click="addClient()">
                  {{$t("add-client")}} 
                  <i class="el-icon-plus mx-1"></i> 
                </div>
                <el-option :label="$t('client-1')" :value="1" />
                <el-option :label="$t('client-2')" :value="2" />
              </input-drop-down>
            </div>
          </el-form-item>
        </el-col>

        <el-col :xs="24" :sm="24" :md="4" :lg="4">
          <el-form-item :label="$t('client-phone')"
                        v-show="additional_info_control.client_phone_checked">
            <el-input v-model="form.client_phone" placeholder="">
            </el-input>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row :gutter="6" class="width-full">
        <el-col :xs="24" :sm="24" :md="4" :lg="4">
          <el-form-item :label="$t('reservation-type')">
            <el-select v-model="form.reservation_type">
              <el-option :label="$t('postponed')" :value="1"></el-option>
              <el-option :label="$t('cash')" :value="2"></el-option>
            </el-select>
          </el-form-item>
        </el-col>

        <el-col :xs="24" :sm="24" :md="4" :lg="4">
          <el-form-item :label="$t('payment-method')">
            <el-select v-model="form.payment_method">
              <el-option :label="$t('postponed')" :value="1"></el-option>
              <el-option :label="$t('cash')" :value="2"></el-option>
            </el-select>
          </el-form-item>
        </el-col>

        <el-col :xs="24" :sm="24" :md="4" :lg="4">
          <el-form-item :label="$t('delivery-date')">
            <el-date-picker
              type="datetime"
              placeholder="2020-10-15"
              format="yyyy-MM-dd HH:mm"
              Value-format="yyyy-MM-dd HH:mm"
              v-model="form.delivery_date"
            ></el-date-picker>
          </el-form-item>
        </el-col>

        <el-col :xs="24" :sm="24" :md="4" :lg="4">
          <el-form-item :label="$t('delegate-name')"
                        v-show="additional_info_control.delegate_name_checked">
            <el-select  v-model="form.delegate_name" >
              <NuxtLink :to="localePath('/system-cards/salemen-data/new')">
                <div class="add-btn add-btn-red">
                  {{$t("add")}} 
                  <i class="el-icon-plus mx-1"></i> 
                </div>
              </NuxtLink>
              <el-option :label="$t('employee-1')" :value="1"></el-option>
              <el-option :label="$t('employee-2')" :value="2"></el-option>
            </el-select>
          </el-form-item>
        </el-col>

        <el-col :xs="24" :sm="24" :md="4" :lg="4">
          <el-form-item :label="$t('client-address')"
                        v-show="additional_info_control.client_address_checked">
            <el-input v-model="form.client_address" placeholder="">
            </el-input>
          </el-form-item>
        </el-col>

        <el-col :xs="24" :sm="24" :md="4" :lg="4" class="to-the-side-ar to-the-side-en">
          <div style="padding-top: 2.05rem;">
            <!-- ------- additional data ------ -->
            <el-button
              class="text-center btn-cyan-light width-full mt-1"
              @click="additionalChoice = true"
            >
              {{ $t("additional-data") }}
            </el-button>
          </div>
        </el-col>
      </el-row>
    </el-form>
    <!-- additional data -->
    <el-dialog :visible.sync="additionalChoice" width="40%">
       <div slot="title" class="dialog-title">
        <span>{{$t('please-choose-data')}}</span>
      </div>
      <span>
        <el-container class="d-block box-shadow mb-0 px-2 py-2">
          <el-form
            class="invoice-form width-full"
            label-position="top"
            :model="sub_form"
          >
            <el-row :gutter="6" class="width-full section-title">
              <el-col :xs="3" :sm="3" :md="6" :lg="7">
                <div class="side-line"></div>
              </el-col>
              <el-col :xs="16" :sm="18" :md="12" :lg="10">
                <h1 class="section-title-text">
                  {{ $t("add-delegate-information") }}
                </h1>
              </el-col>
              <el-col :xs="3" :sm="3" :md="6" :lg="7">
                <div class="side-line"></div>
              </el-col>
            </el-row>

            <el-row :gutter="6" class="width-full input-rows">
              <el-col :span="12">
                <el-checkbox  class="additional-data-checkbox" 
                              v-model="additional_info_control.delegate_name_checked"/>
                <span class="title">{{ $t("delegate-name") }}</span>
              </el-col>
              <el-col :span="12">
                <el-form-item>
                  <el-select  v-model="sub_form.delegate_name" 
                              v-show="additional_info_control.delegate_name_checked">
                    <NuxtLink :to="localePath('/system-cards/salemen-data/new')">
                      <div class="add-btn add-btn-red">
                        {{$t("add")}} 
                        <i class="el-icon-plus mx-1"></i> 
                      </div>
                    </NuxtLink>
                    <el-option :label="$t('employee-1')" :value="1"></el-option>
                    <el-option :label="$t('employee-2')" :value="2"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row :gutter="6" class="width-full input-rows">
              <el-col :span="12">
                <el-checkbox  class="additional-data-checkbox" 
                              v-model="additional_info_control.client_phone_checked" />
                <span class="title">{{ $t("client-phone") }}</span>
              </el-col>
              <el-col :span="12">
                <el-form-item>
                  <el-input v-model="sub_form.client_address" placeholder=""
                            v-show="additional_info_control.client_phone_checked">
                  </el-input>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row :gutter="6" class="width-full input-rows">
              <el-col :span="12">
                <el-checkbox  class="additional-data-checkbox" 
                              v-model="additional_info_control.client_address_checked" />
                <span class="title">{{ $t("client-address") }}</span>
              </el-col>
              <el-col :span="12">
                <el-form-item>
                  <el-input v-model="sub_form.client_address" placeholder=""
                            v-show="additional_info_control.client_address_checked">
                  </el-input>
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
          >{{ $t("ok") }}</el-button
        >
      </span>
    </el-dialog>

    <!-- add client -->
    <add-client />

    <!-- add bank box -->
    <add-box-bank />

    <!-- attach file -->
    <attach-file />

    <!-- search invoice categories -->
    <search-invoice-categories />

    <!-- search client -->
    <search-client />

    <!-- add cost center -->
    <addcostcenter />
  </el-container>
</template>

<script>
import AddBoxBank from '~/components/dialogs/add-box-bank';
import AddClient from '~/components/dialogs/add-client';
import AttachFile from '~/components/dialogs/attach-file';
import SearchInvoiceCategories from '~/components/dialogs/search-invoice-categories';
import SearchClient from '~/components/dialogs/search-client';
import addcostcenter from '~/components/dialogs/add-cost-center';
import InputDropDown from '~/components/input-with-drop-down/input-drop-down.vue';

import open_dialogs from '~/components/sales/open_dialogs.js'

export default {
  name: "invoice",

  mixins: [open_dialogs ],

  components: {
    AddBoxBank, 
    AddClient,
    AttachFile,
    SearchInvoiceCategories,
    SearchClient,
    addcostcenter,
    InputDropDown
  },

  data: function() {
    return {
      form: {
        reservation_number: "",
        reservation_date: "",
        box_name: 1,
        client_name: "",
        reservation_type: 1,
        payment_method: "",
        delivery_date: "",
        delegate_name: "",
        client_phone: "",
        client_address: "",
      },
      sub_form: {
        delegate_name: "",
        client_phone: "",
        client_address: "",
      },
      additional_info_control: {
        delegate_name_checked: false,
        client_phone_checked: false,
        client_address_checked: false,
      },
      additionalChoice: false,
    };
  },

  methods: {
    addClient(){
      const POSTPONED = 1;
      const IN_CASH = 2;

      if (this.form.payment_method == IN_CASH) {
        this.openAddClientDialog();
      }
      else if (this.form.payment_method == POSTPONED) {
        this.$router.push('/customer-management/customers-data/address')
      }
    }, 

    toggleProfitCard() {
      this.control_invoice_options.show_invoice_profit_checked 
      = !this.control_invoice_options.show_invoice_profit_checked;
    }
  },
};
</script>

<style lang="scss" scoped>
.additional-data-checkbox {
  margin: 0 1rem;
}
.info {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2.5rem;
}
.pb-0 {
  padding-bottom: 0;
}

.info-card {
  height: 1.5rem;
  border: 1px solid #707070;
  border-radius: 0.2rem;
  text-align: center;
  line-height: 1.5rem;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
}

.amounts {
  width: 30%;
  background-color: #fbffbf;
}

.losts {
  width: 20%;
  background-color: #f56c6c;
}

.input-rows {
  min-height: 3rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.side-line {
  width: 100%;
  border-bottom: 1px solid #21798d;
}

.section-title {
  display: flex;
  align-items: center;
}

.section-title-text {
  text-align: center;
  color: #21798d;
}

.dialog-title {
  color: #606266;
  text-align: center;
  font-size: x-large;
  font-weight: 300;
  overflow: hidden;
}

.active {
  color: #409EFF !important;
}

[dir='rtl'] {
  .to-the-side-ar {
    float: left;
  }
}
.to-the-side-en {
  float: right;
}
</style>
