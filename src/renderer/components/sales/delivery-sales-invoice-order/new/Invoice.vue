<template>
  <el-container class="container box-shadow ma-4 mb-0 px-2 py-3 pb-1">
    <el-form class="invoice-form width-full" label-position="top" :model="form">
      <el-row :gutter="6" class="width-full">
        <el-col :xs="24" :sm="24" :md="17" :lg="17">
          <el-row :gutter="6" class="width-full">
            <el-col :xs="24" :sm="24" :md="6" :lg="6">
              <el-form-item :label="$t('delivery-number-order')">
                <el-input v-model="form.delivery_order_number" placeholder="1">
                </el-input>
              </el-form-item>
            </el-col>

            <el-col :xs="24" :sm="24" :md="6" :lg="6">
              <el-form-item :label="$t('order-date')">
                <el-date-picker
                  type="date"
                  placeholder="2020-10-15"
                  v-model="form.order_date"
                ></el-date-picker>
              </el-form-item>
            </el-col>

            <el-col :xs="24" :sm="24" :md="6" :lg="6">
              <el-form-item
                :label="$t('delegate-name')"
                v-show="additional_data_control.delegate_name_checked"
              >
                <el-select v-model="form.delegate_name">
                  <NuxtLink :to="localePath('/system-cards/salemen-data/new')">
                    <div class="add-btn add-btn-red">
                      {{ $t("add") }}
                      <i class="el-icon-plus mx-1"></i>
                    </div>
                  </NuxtLink>
                  <el-option :label="$t('employee-1')" :value="1"></el-option>
                  <el-option :label="$t('employee-2')" :value="2"></el-option>
                </el-select>
              </el-form-item>
            </el-col>

            <el-col :xs="24" :sm="24" :md="6" :lg="6">
              <el-form-item
                :label="$t('driver-name')"
                v-show="additional_data_control.driver_name_checked"
              >
                <el-select v-model="form.driver_name">
                  <NuxtLink
                    :to="localePath('/system-cards/employees-data/new')"
                  >
                    <div class="add-btn add-btn-red">
                      {{ $t("add") }}
                      <i class="el-icon-plus mx-1"></i>
                    </div>
                  </NuxtLink>
                  <el-option :label="$t('employee-1')" :value="1"></el-option>
                  <el-option :label="$t('employee-2')" :value="2"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row :gutter="6" class="width-full">
            <el-col :xs="24" :sm="24" :md="6" :lg="6">
              <el-form-item :label="$t('invoice-type')">
                <el-select v-model="form.invoice_type">
                  <el-option :label="$t('postponed')" :value="1"></el-option>
                  <el-option :label="$t('cash')" :value="2"></el-option>
                </el-select>
              </el-form-item>
            </el-col>

            <el-col :xs="24" :sm="24" :md="6" :lg="6">
              <el-form-item :label="$t('client-name')">
                <div class="select-container">
                  <input-drop-down
                    v-model="form.client_name"
                    placeholder=""
                    class="input-menu"
                    @keydown.meta.native="openSearchClientDialog()"
                    @keydown.ctrl.native="openSearchClientDialog()"
                  >
                    <div class="add-btn add-btn-red" @click="addClient()">
                      {{ $t("add-client") }}
                      <i class="el-icon-plus mx-1"></i>
                    </div>
                    <el-option :label="$t('client-1')" :value="1" />
                    <el-option :label="$t('client-2')" :value="2" />
                  </input-drop-down>
                </div>
              </el-form-item>
            </el-col>

            <el-col :xs="24" :sm="24" :md="6" :lg="6">
              <el-form-item
                :label="$t('invoice-price')"
                v-show="additional_data_control.invoice_price_checked"
              >
                <el-select v-model="form.invoice_price">
                  <el-option :label="$t('all')" :value="1"></el-option>
                  <el-option :label="$t('all')" :value="2"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
        </el-col>

        <el-col :xs="24" :sm="24" :md="7" :lg="7">
          <div class="four-button-invoice">
            <!---- ------------------ suspended-invoices -------------------- -->
            <el-button
              class="text-center btn-cyan-light width-full mt-1"
              @click="additionalData = true"
            >
              {{ $t("additional-data") }}
            </el-button>
            <!---------------- invoice-options ---------------->
            <el-select
              v-model="form.type"
              class="color-blue text-center placeHolderColor mt-1"
              :placeholder="$t('delivery-opitons')"
            >
              <NuxtLink :to="localePath('/reports-and-statements/public-reports/report-delivery-quantity-sales')">
                <div class="add-btn add-btn-grey">
                  {{ $t("report-delivery-invoice") }}
                </div>
              </NuxtLink>

              <!-- dummy optoin -->
              <el-option v-show="false" value=""></el-option>
            </el-select>
            <!-- ------- additional data ------ -->
            <el-button
              class="text-center btn-cyan-light width-full mt-1 additional-data"
              @click="salesInvoiceNumberEntry = true"
            >
              {{ $t("sales-invoice-number") }}
            </el-button>
          </div>
        </el-col>
      </el-row>
    </el-form>
    <!-- additional data -->
    <el-dialog :visible.sync="additionalData" width="40%">
      <div slot="title" class="dialog-title">
        <span>{{ $t("please-choose-data") }}</span>
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
                <el-checkbox
                  class="additional-data-checkbox"
                  v-model="additional_data_control.delegate_name_checked"
                />
                <span class="title">{{ $t("delegate-name") }}</span>
              </el-col>
              <el-col :span="12">
                <el-form-item>
                  <el-select
                    v-model="sub_form.delegate_name"
                    v-show="additional_data_control.delegate_name_checked"
                  >
                    <NuxtLink
                      :to="localePath('/system-cards/salemen-data/new')"
                    >
                      <div class="add-btn add-btn-red">
                        {{ $t("add") }}
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
                <el-checkbox
                  class="additional-data-checkbox"
                  v-model="additional_data_control.driver_name_checked"
                />
                <span class="title">{{ $t("driver-name") }}</span>
              </el-col>
              <el-col :span="12">
                <el-form-item>
                  <el-select
                    v-model="sub_form.driver_name"
                    v-show="additional_data_control.driver_name_checked"
                  >
                    <NuxtLink
                      :to="localePath('/system-cards/employees-data/new')"
                    >
                      <div class="add-btn add-btn-red">
                        {{ $t("add") }}
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
                <el-checkbox
                  class="additional-data-checkbox"
                  v-model="additional_data_control.invoice_price_checked"
                />
                <span class="title">{{ $t("invoice-price") }}</span>
              </el-col>
              <el-col :span="12">
                <el-form-item>
                  <el-select
                    v-model="sub_form.invoice_price"
                    v-show="additional_data_control.invoice_price_checked"
                  >
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
          @click="additionalData = false"
          >{{ $t("ok") }}</el-button
        >
      </span>
    </el-dialog>

    <!-- sales invoice number entry dialog -->
        <el-dialog title=" " :visible.sync="salesInvoiceNumberEntry" width="40%">
      <span>
        <el-container class="d-block mb-0 px-2">
          <el-form
            class="invoice-form width-full"
            label-position="top"
          >
            <el-row class="width-full">
              <el-col :span="24" class="mb-2">
                <h1 class="dialog-title">
                  {{ $t("please-insert-sales-invoice-number") }}
                </h1>
              </el-col>
            </el-row>

            <el-row class="width-full input-row">
              <el-col :span="22">
                <el-form-item>
                  <el-input v-model="sales_invoice_number"></el-input>
                </el-form-item>
              </el-col>

              <el-col :span="2" class="text-center">
                <i
                  class="el-icon-search"
                  style="color: black; font-size: 2rem;"
                ></i>
              </el-col>
            </el-row>
          </el-form>
        </el-container>
      </span>
      <div class="d-flex justify-center width-full">
        <span class="mx-2">
          <el-button  class="btn-cyan-light px-4-lg mt-4" 
                      @click="salesInvoiceNumberEntry = fasle">{{
            $t("agree")
          }}</el-button>
        </span>
      </div>
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
import AddBoxBank from "~/components/dialogs/add-box-bank";
import AddClient from "~/components/dialogs/add-client";
import AttachFile from "~/components/dialogs/attach-file";
import SearchInvoiceCategories from "~/components/dialogs/search-invoice-categories";
import SearchClient from "~/components/dialogs/search-client";
import addcostcenter from "~/components/dialogs/add-cost-center";
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
        delivery_order_number: "",
        order_date: "",
        client_name: "",
        client_branch_name: "",
        invoice_type: 1,
        payment_method: 1,
        box_name: 1,
        delegate_name: "",
        delegate_invoice_number: "",
        delegate_invoice_date: "",
        cost_center: "",
        invoice_price: "",
        driver_name: "",
        currency: {
          type: 1,
          value: ""
        }
      },
      sub_form: {
        delegate_name: "",
        delegate_invoice_date: "",
        delegate_invoice_number: "",
        cost_center: "",
        invoice_price: "",
        driver_name: "",
        currency: {
          type: 1,
          value: ""
        }
      },
      additional_data_control: {
        delegate_name_checked: false,
        invoice_price_checked: false,
        driver_name_checked: false,
      },
      control_invoice_options: {
        repeat_current_invoice_checked: false,
        show_return_invoice_card_checked: false,
        invoice_expenses_checked: false,
        show_invoice_profit_checked: false,
        items_buying_prices_checked: false
      },
      sales_invoice_number: "",
    
      additionalData: false,
      include_suspended_invoices: true,
      salesInvoiceNumberEntry: false
    };
  },

  methods: {
    addClient() {
      const POSTPONED = 1;
      const IN_CASH = 2;

      if (this.form.invoice_type == IN_CASH) {
        this.openAddClientDialog();
      } else if (this.form.invoice_type == POSTPONED) {
        this.$router.push("/customer-management/customers-data");
      }
    },

    toggleProfitCard() {
      this.control_invoice_options.show_invoice_profit_checked = !this
        .control_invoice_options.show_invoice_profit_checked;
    }
  },
  mounted() {
    this.additionalData = false;
  }
};
</script>

<style lang="scss" scoped>
.four-button-invoice {
  padding-top: 3.5rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
  width: 100%;
  margin: auto;
}
.selector-mod {
  padding-top: 0.5rem;
}
.additional-data {
  grid-column: 1/3;
}
.additional-data-checkbox {
  margin: 0 1rem;
}

.pb-0 {
  padding-bottom: 0;
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
  color: #409eff !important;
}

.dialog-title {
  text-align: center; 
  font-size: 2rem; 
  color: black;
}

.input-row {
  padding: 0px 2rem; 
  display:flex; 
  align-items: center;
}
</style>
