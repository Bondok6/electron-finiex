<template>
  <el-container class="container box-shadow ma-4 mb-0 px-2 py-3 pb-1">
    <el-form class="invoice-form width-full" label-position="top" :model="form">
      <el-row :gutter="6" class="width-full">
        <el-col :xs="24" :sm="24" :md="17" :lg="17">
          <el-row :gutter="6" class="width-full">
            <el-col :xs="24" :sm="24" :md="6" :lg="6">
              <el-form-item :label="$t('invoice-number')">
                <el-input v-model="form.invoice_number" placeholder="14">
                  <template slot="append">
                    <NuxtLink
                      :to="localePath('/accounting/journal-entry/edit')"
                    >
                      <el-button>
                        <i class="el-icon-search" style="color: #21798d;"></i>
                      </el-button>
                    </NuxtLink>
                  </template>
                </el-input>
              </el-form-item>
            </el-col>

            <el-col :xs="24" :sm="24" :md="6" :lg="6">
              <el-form-item :label="$t('invoice-date')">
                <el-date-picker
                  type="datetime"
                  placeholder="2020-10-15"
                  format="yyyy-MM-dd HH:mm"
                  Value-format="yyyy-MM-dd HH:mm"
                  v-model="form.invoice_date"
                ></el-date-picker>
              </el-form-item>
            </el-col>

            <el-col :xs="24" :sm="24" :md="6" :lg="6">
              <el-form-item :label="$t('invoice-type')">
                <el-select v-model="form.invoice_type">
                  <el-option :label="$t('postponed')" :value="1"></el-option>
                  <el-option :label="$t('cash')" :value="2"></el-option>
                </el-select>
              </el-form-item>
            </el-col>

            <el-col :xs="24" :sm="24" :md="6" :lg="6">
              <el-form-item
                :label="$t('delegate-name')"
                v-show="additional_info_control.delegate_name_checked"
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
          </el-row>

          <el-row :gutter="6" class="width-full">
            <el-col :xs="24" :sm="24" :md="6" :lg="6">
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
              <el-form-item :label="$t('box-name')">
                <el-select v-model="form.box_name">
                  <div
                    class="add-btn add-btn-red"
                    @click="openAddBoxBankDialog()"
                  >
                    {{ $t("add-box") }}
                    <i class="el-icon-plus mx-1"></i>
                  </div>
                  <el-option label="البنك الأهلي" :value="1"></el-option>
                  <el-option label="البنك الأهلي" :value="2"></el-option>
                </el-select>
              </el-form-item>
            </el-col>

            <el-col :xs="24" :sm="24" :md="6" :lg="6">
              <el-form-item
                :label="$t('delegate-invoice-date')"
                v-show="additional_info_control.delegate_invoice_date_checked"
              >
                <el-date-picker
                  type="date"
                  placeholder="2020-10-15"
                  v-model="form.delegate_invoice_date"
                ></el-date-picker>
              </el-form-item>
            </el-col>

            <el-col :xs="24" :sm="24" :md="6" :lg="6">
              <el-form-item
                :label="$t('delegate-invoice-number')"
                v-show="additional_info_control.delegate_invoice_number_checked"
              >
                <el-input></el-input>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row :gutter="6" class="width-full">
            <el-col :xs="24" :sm="24" :md="6" :lg="6">
              <el-form-item
                :label="$t('cost-center')"
                v-show="additional_info_control.cost_center_checked"
              >
                <el-select v-model="form.cost_center">
                  <div
                    class="add-btn add-btn-red"
                    @click="openAddCostCenterDialog()"
                  >
                    {{ $t("add-cost-center") }}
                    <i class="el-icon-plus mx-1"></i>
                  </div>
                  <el-option :label="$t('center-1')" :value="1"></el-option>
                  <el-option :label="$t('center-2')" :value="2"></el-option>
                </el-select>
              </el-form-item>
            </el-col>

            <el-col :xs="24" :sm="24" :md="6" :lg="6">
              <el-form-item
                :label="$t('invoice-price')"
                v-show="additional_info_control.invoice_price_checked"
              >
                <el-select v-model="form.invoice_price">
                  <el-option :label="$t('all')" :value="1"></el-option>
                  <el-option :label="$t('all')" :value="2"></el-option>
                </el-select>
              </el-form-item>
            </el-col>

            <el-col :xs="24" :sm="24" :md="6" :lg="6">
              <el-form-item
                :label="$t('driver-name')"
                v-show="additional_info_control.driver_name_checked"
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
        </el-col>
        <el-col :xs="24" :sm="24" :md="7" :lg="7">
          <div class="four-button-invoice">
            <!---------------- return-invoice-options ---------------->
            <el-select
              v-model="form.type"
              class="color-blue text-center placeHolderColor mt-1 stretched"
              :placeholder="$t('invoice-return-type')"
            >
              <div  class="add-btn add-btn-grey"
                    @click="openIvoiceNumberEntyrDialog()">
                {{ $t('with-sales-invoice-number') }}
              </div>

              <div  class="add-btn add-btn-grey"
                    @click="openIvoiceNumberEntyrDialog()">
                {{ $t('without-sales-invoice-number') }}
              </div>

              <!-- dummy optoin -->
              <el-option v-show="false" value=""></el-option>
            </el-select>
            <!-- ------- additional data ------ -->
            <el-button
              class="text-center btn-cyan-light width-full mt-1 stretched"
              @click="additionalData = true"
            >
              {{ $t("additional-data") }}
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
      <!-- <h1 style="text-align: center; font-weight: 100;">برجاء إختيار البيانات المراد إضافتها</h1> -->
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
                  v-model="additional_info_control.delegate_name_checked"
                  @change="toggleAllDelegateExtraInfo()"
                />
                <span class="title">{{ $t("delegate-name") }}</span>
              </el-col>
              <el-col :span="12">
                <el-form-item>
                  <el-select
                    v-model="sub_form.delegate_name"
                    v-show="additional_info_control.delegate_name_checked"
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
                  v-model="
                    additional_info_control.delegate_invoice_date_checked
                  "
                />
                <span>{{ $t("delegate-invoice-date") }}</span>
              </el-col>
              <el-col :span="12">
                <el-form-item>
                  <el-date-picker
                    type="date"
                    placeholder="2020-10-15"
                    v-model="sub_form.delegate_invoice_date"
                    v-show="
                      additional_info_control.delegate_invoice_date_checked
                    "
                  ></el-date-picker>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row :gutter="6" class="width-full input-rows">
              <el-col :span="12">
                <el-checkbox
                  class="additional-data-checkbox"
                  v-model="
                    additional_info_control.delegate_invoice_number_checked
                  "
                />
                <span class="title">{{ $t("delegate-invoice-number") }}</span>
              </el-col>
              <el-col :span="12">
                <el-form-item>
                  <el-input
                    v-model="sub_form.delegate_name"
                    v-show="
                      additional_info_control.delegate_invoice_number_checked
                    "
                  ></el-input>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row :gutter="6" class="width-full section-title">
              <el-col :xs="3" :sm="3" :md="10" :lg="10">
                <div class="side-line"></div>
              </el-col>
              <el-col :xs="16" :sm="18" :md="4" :lg="4">
                <h1 class="section-title-text">
                  {{ $t("others") }}
                </h1>
              </el-col>
              <el-col :xs="3" :sm="3" :md="10" :lg="10">
                <div class="side-line"></div>
              </el-col>
            </el-row>

            <el-row :gutter="6" class="width-full input-rows">
              <el-col :span="12">
                <el-checkbox
                  class="additional-data-checkbox"
                  v-model="additional_info_control.cost_center_checked"
                />
                <span class="title">{{ $t("cost-center") }}</span>
              </el-col>
              <el-col :span="12">
                <el-form-item>
                  <el-select
                    v-model="sub_form.cost_center"
                    v-show="additional_info_control.cost_center_checked"
                  >
                    <el-option :label="$t('center-1')" :value="1"></el-option>
                    <el-option :label="$t('center-2')" :value="2"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row :gutter="6" class="width-full input-rows">
              <el-col :span="12">
                <el-checkbox
                  class="additional-data-checkbox"
                  v-model="additional_info_control.invoice_price_checked"
                />
                <span class="title">{{ $t("invoice-price") }}</span>
              </el-col>
              <el-col :span="12">
                <el-form-item>
                  <el-select
                    v-model="sub_form.invoice_price"
                    v-show="additional_info_control.invoice_price_checked"
                  >
                    <el-option :label="$t('all')" :value="1"></el-option>
                    <el-option :label="$t('all')" :value="2"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row :gutter="6" class="width-full input-rows">
              <el-col :span="12">
                <el-checkbox
                  class="additional-data-checkbox"
                  v-model="additional_info_control.driver_name_checked"
                />
                <span class="title">{{ $t("driver-name") }}</span>
              </el-col>
              <el-col :span="12">
                <el-form-item>
                  <el-select
                    v-model="sub_form.driver_name"
                    v-show="additional_info_control.driver_name_checked"
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

    <!-- add client -->
    <add-client />

    <!-- add bank box -->
    <add-box-bank />

    <!-- search invoice categories -->
    <search-invoice-categories />

    <!-- search client -->
    <search-client />

    <!-- add cost center -->
    <addcostcenter />

    <!-- enter invoice number + return all items-->
    <invoice-number-entry />
  </el-container>
</template>

<script>
import AddBoxBank from "~/components/dialogs/add-box-bank";
import AddClient from "~/components/dialogs/add-client";
import SearchInvoiceCategories from "~/components/dialogs/search-invoice-categories";
import SearchClient from "~/components/dialogs/search-client";
import addcostcenter from "~/components/dialogs/add-cost-center";
import InvoiceNumberEntry from '~/components/dialogs/invoice-number-entry'
import InputDropDown from '~/components/input-with-drop-down/input-drop-down.vue';

import open_dialogs from '~/components/sales/open_dialogs.js'

export default {
  name: "invoice",

  mixins: [open_dialogs ],

  components: {
    AddBoxBank,
    AddClient,
    SearchInvoiceCategories,
    SearchClient,
    addcostcenter,
    InvoiceNumberEntry,
    InputDropDown
  },

  data: function() {
    return {
      form: {
        invocie_number: "",
        invoice_date: "",
        client_name: "",
        invoice_type: 1,
        box_name: 1,
        delegate_name: "",
        delegate_invoice_number: "",
        delegate_invoice_date: "",
        cost_center: "",
        invoice_price: "",
        driver_name: "",
      },
      sub_form: {
        delegate_name: "",
        delegate_invoice_date: "",
        delegate_invoice_number: "",
        cost_center: "",
        invoice_price: "",
        driver_name: "",
      },
      additional_info_control: {
        delegate_name_checked: false,
        delegate_invoice_date_checked: false,
        delegate_invoice_number_checked: false,
        cost_center_checked: false,
        invoice_price_checked: false,
        driver_name_checked: false,
      },
      additionalData: false,
    };
  },

  methods: {
    toggleAllDelegateExtraInfo() {
      const state = this.additional_info_control.delegate_name_checked;
      this.additional_info_control.delegate_invoice_date_checked = state;
      this.additional_info_control.delegate_invoice_number_checked = state;
    },

    addClient() {
      const POSTPONED = 1;
      const IN_CASH = 2;

      if (this.form.invoice_type == IN_CASH) {
        this.openAddClientDialog();
      } else if (this.form.invoice_type == POSTPONED) {
        this.$router.push("/customer-management/customers-data");
      }
    },
  },
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
.stretched {
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
</style>
