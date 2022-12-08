<template>
  <el-container class="container box-shadow ma-4 mb-0 px-2 py-3">
    <el-form class="invoice-form width-full" label-position="top" :model="form">
      <el-row :gutter="6" class="width-full">
        <el-col :xs="24" :sm="24" :md="24">
          <el-row :gutter="6">
            <el-col :xs="24" :sm="12" :md="4" :lg="4">
              <el-form-item :label="$t('invoice-number')">
                <el-input v-model="form.input" placeholder="14">
                  <template slot="append"
                    ><i class="el-icon-search"></i
                  ></template>
                </el-input>
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="24" :md="4" :lg="4">
              <el-form-item :label="$t('invoice-date')">
                <el-date-picker
                  class="width-full"
                  type="datetime"
                  placeholder="2020-10-15"
                  format="yyyy-MM-dd HH:mm"
                  Value-format="yyyy-MM-dd HH:mm"
                  v-model="form.date"
                ></el-date-picker>
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="24" :md="4" :lg="4">
              <el-form-item :label="$t('payment-method')">
                <el-select v-model="form.input" :placeholder="$t('all')">
                  <el-option :label="$t('all')" :value="1"></el-option>
                  <el-option :label="$t('all')" :value="2"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
        </el-col>
        <el-col :span="24">
          <el-row :gutter="6">
            <el-col :xs="24" :sm="24" :md="4" :lg="4">
              <el-form-item :label="$t('supplier-name')">
                <div class="select-container">
                  <el-select
                    v-model="form.supplier_name"
                    placeholder=""
                    class="input-menu"
                  >
                    <div class="add-btn add-btn-red" @click="addNewSupplier()">
                      {{ $t("add") }}
                      <i class="el-icon-plus mx-1"></i>
                    </div>
                    <el-option :label="$t('supplier-1')" :value="1" />
                    <el-option :label="$t('supplier-2')" :value="2" />
                  </el-select>
                </div>
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="24" :md="4" :lg="4">
              <el-form-item :label="$t('invoice-type')">
                <el-select v-model="form.invoice_type" :placeholder="$t('all')">
                  <el-option :label="$t('postponed')" :value="1"></el-option>
                  <el-option :label="$t('cash')" :value="2"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="24" :md="16" :lg="16">
              <div class="inline-button-container d-flex inner-flex-buttons">
                <el-form-item class="mt-2">
                  <el-button
                    class="btn-cyan-light width-full"
                    @click="additionalChoice = true"
                    >{{ $t("additional-data") }}</el-button
                  >
                </el-form-item>

                <el-form-item>
                  <el-select
                    v-model="form.sss"
                    class="
                      color-blue
                      text-center
                      placeHolderColor
                      width-full-sm
                    "
                    :placeholder="$t('invoice-options')"
                  >
                    <el-option
                      :label="$t('repeat-current-invoice')"
                      :value="1"
                      class="selectButton"
                    >
                      <el-button class="width-full">
                        {{ $t("repeat-current-invoice") }}
                      </el-button>
                    </el-option>
                    <el-option
                      :label="$t('invoice-expenses')"
                      :value="2"
                      class="selectButton"
                    >
                      <NuxtLink
                        :to="localePath('/purchases/purchases-expenses')"
                      >
                        <el-button class="width-full">
                          {{ $t("invoice-expenses") }}
                        </el-button>
                      </NuxtLink>
                    </el-option>
                    <el-option
                      :label="$t('items-buying-prices')"
                      :value="3"
                      class="selectButton"
                    >
                      <NuxtLink
                        :to="localePath('/purchases/purchase-price-of-items')"
                      >
                        <el-button class="width-full">
                          {{ $t("items-buying-prices") }}
                        </el-button>
                      </NuxtLink>
                    </el-option>
                    <el-option
                      :label="$t('item-sales-prices')"
                      :value="4"
                      class="selectButton"
                    >
                      <NuxtLink :to="localePath('/sales/prices-of-sale-items')">
                        <el-button class="width-full">
                          {{ $t("item-sales-prices") }}
                        </el-button>
                      </NuxtLink>
                    </el-option>
                    <el-option
                      :label="$t('items-barcode-printing')"
                      :value="5"
                      class="selectButton"
                    >
                      <el-button
                        class="width-full"
                        @click="printBarcode = true"
                      >
                        {{ $t("items-barcode-printing") }}
                      </el-button>
                    </el-option>
                    <el-option
                      :label="$t('attach-a-file')"
                      :value="6"
                      class="selectButton"
                    >
                      <el-button
                        class="width-full"
                        @click="openAttachFileDialog()"
                      >
                        {{ $t("attach-a-file") }}
                      </el-button>
                    </el-option>
                    <el-option
                      :label="$t('invoice-items-search')"
                      :value="7"
                      class="selectButton"
                    >
                      <el-button
                        class="width-full"
                        @click="openSearchInvoiceCategoriesDialog()"
                      >
                        {{ $t("invoice-items-search") }}
                      </el-button>
                    </el-option>
                  </el-select>
                </el-form-item>
              </div>
            </el-col>
          </el-row>
        </el-col>
        <el-col :span="24">
          <el-row :gutter="6">
            <el-col :xs="24" :sm="24" :md="4" :lg="4">
              <el-form-item
                :label="$t('check-number')"
                v-show="additional_info_control.check_number"
              >
                <el-select v-model="sub_form.check_number">
                  <el-option :label="$t('without')" :value="1"></el-option>
                  <el-option :label="$t('without')" :value="2"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="24" :md="4" :lg="4">
              <el-form-item
                :label="$t('check-date')"
                v-show="additional_info_control.check_date"
              >
                <el-date-picker
                  type="date"
                  placeholder="2020-10-15"
                  v-model="sub_form.check_date"
                ></el-date-picker>
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="24" :md="4" :lg="4">
              <el-form-item
                :label="$t('cost-center')"
                v-show="additional_info_control.cost_center"
              >
                <el-select v-model="sub_form.cost_center">
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
          </el-row>
        </el-col>
        <el-col :span="24">
          <el-row :gutter="6">
            <el-col :xs="24" :sm="24" :md="4" :lg="4">
              <el-form-item
                :label="$t('supplier-invoice-no')"
                v-show="additional_info_control.supplier_invoice_no"
              >
                <el-select
                  v-model="sub_form.supplier_invoice_no"
                  v-show="additional_info_control.supplier_invoice_no"
                >
                  <el-option :label="$t('without')" :value="1"></el-option>
                  <el-option :label="$t('without')" :value="2"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :sm="24" :xs="24" :md="4" :lg="4">
              <el-form-item
                :label="$t('supplier-invoice-date')"
                v-show="additional_info_control.supplier_invoice_date"
              >
                <el-date-picker
                  type="date"
                  placeholder="2020-10-15"
                  v-model="sub_form.supplier_invoice_date"
                ></el-date-picker>
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="24" :md="4" :lg="4">
              <el-form-item
                :label="$t('currency')"
                v-show="additional_info_control.currency_checked"
              >
                <el-row :gutter="6">
                  <el-col :span="9">
                    <el-select v-model="sub_form.currency.type">
                      <el-option class="selectButton" label="ر.س" :value="1">
                        <el-button class="width-full" @click="show_currency()">
                          ر.س
                        </el-button>
                      </el-option>
                      <el-option class="selectButton" label="ج.م" :value="2">
                        <el-button class="width-full" @click="show_currency()">
                          ج.م
                        </el-button>
                      </el-option>
                    </el-select>
                  </el-col>
                  <el-col :span="15">
                    <el-input
                      class="text-center"
                      v-model="sub_form.currency.value"
                      placeholder=""
                    >
                    </el-input>
                  </el-col>
                </el-row>
              </el-form-item>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
      <el-row :gutter="6" class="width-full info">
        <div class="info-card amounts">24 حبة و 12 كرتونة</div>
        <div>
          <NuxtLink
            :to="localePath('/purchases/purchase-returns-invoice/edit')"
          >
            <el-button size="mini" class="btn-red px-3">{{
              $t("reflux")
            }}</el-button>
          </NuxtLink>
        </div>
      </el-row>
    </el-form>
    <!-- printBarcode -->
    <el-dialog :visible.sync="printBarcode" width="70%">
      <el-container class="d-block box-shadow mb-0 px-2 py-2">
        <el-form
          class="invoice-form width-full"
          label-position="top"
          :model="form"
        >
          <el-row :gutter="6" class="width-full">
            <el-col :xs="24" :sm="24" :md="12" :lg="8">
              <el-form-item :label="$t('unit')">
                <el-select v-model="form.input">
                  <el-option :label="$t('all')" :value="2"></el-option>
                  <el-option :label="$t('all')" :value="1"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
        <br />

        <el-container class="container mt-0 mb-0 invoice-table">
          <el-table
            :data="tableOne"
            style="width: 100%"
            stripe
            border
            max-height="250"
            class="invoice-table"
          >
            <el-table-column
              align="center"
              prop="id"
              :label="$t('id')"
              width="40"
            />
            <el-table-column
              align="center"
              prop="item_name"
              :label="$t('item-name')"
            />
            <el-table-column align="center" prop="unit" :label="$t('unit')" />
            <el-table-column align="center" prop="group" :label="$t('group')" />
            <el-table-column
              align="center"
              prop="selling_price"
              :label="$t('selling-price')"
            />
            <el-table-column
              align="center"
              prop="quantity"
              :label="$t('quantity')"
            />
          </el-table>
        </el-container>
      </el-container>
      <div class="container ma-4  py-2 mt-0 invoice-summary">
        <div class="d-flex space-between mt-2 mx-3">
          <div class=" right_buttons text-unbold  ">
            <div>
              <span>
                {{ $t("the-number") }}
              </span>
              <span class="input-count"> </span>
            </div>
          </div>

          <div>
            <el-button
              size="mini"
              class="mb-1 btn-primary"
              @click="printBarcode = false"
            >
              {{ $t("print-label") }}</el-button
            >
            <el-button
              size="mini"
              class="mb-1 btn-orange"
              @click="printBarcode = false"
              >{{ $t("print-barcode") }}</el-button
            >
          </div>
        </div>
      </div>
    </el-dialog>
    <!-- end printBarcode -->
    <!-- additional choice -->
    <el-dialog :visible.sync="additionalChoice" width="40%">
      <div slot="title" class="dialog-title">
        <span>{{ $t("please-choose-data") }}</span>
      </div>
      <span>
        <el-container class="d-block box-shadow mb-0 px-2 py-2">
          <el-form class="invoice-form width-full" label-position="top">
            <el-row :gutter="6" class="width-full section-title">
              <el-col :xs="3" :sm="3" :md="6" :lg="7">
                <div class="side-line"></div>
              </el-col>
              <el-col :xs="16" :sm="18" :md="12" :lg="10">
                <h1 class="section-title-text">
                  {{ $t("additional-data") }}
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
                  v-model="additional_info_control.check_number"
                  @change="toggleCheckNumberInfo()"
                />
                <span class="title">{{ $t("check-number") }}</span>
              </el-col>
              <el-col :span="12">
                <el-form-item>
                  <el-select
                    v-model="sub_form.check_number"
                    v-show="additional_info_control.check_number"
                  >
                    <el-option :label="$t('without')" :value="1"></el-option>
                    <el-option :label="$t('without')" :value="2"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row :gutter="6" class="width-full input-rows">
              <el-col :span="12">
                <el-checkbox
                  class="additional-data-checkbox"
                  v-model="additional_info_control.check_date"
                />
                <span class="title">{{ $t("check-date") }}</span>
              </el-col>
              <el-col :span="12">
                <el-form-item>
                  <el-date-picker
                    type="date"
                    placeholder="2020-10-15"
                    v-model="sub_form.check_date"
                    v-show="additional_info_control.check_date"
                  ></el-date-picker>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row :gutter="6" class="width-full input-rows">
              <el-col :span="12">
                <el-checkbox
                  class="additional-data-checkbox"
                  v-model="additional_info_control.cost_center"
                />
                <span class="title">{{ $t("cost-center") }}</span>
              </el-col>
              <el-col :span="12">
                <el-form-item>
                  <el-select
                    v-model="sub_form.cost_center"
                    v-show="additional_info_control.cost_center"
                  >
                    <el-option :label="$t('without')" :value="1"></el-option>
                    <el-option :label="$t('without')" :value="2"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row :gutter="6" class="width-full input-rows">
              <el-col :span="12">
                <el-checkbox
                  class="additional-data-checkbox"
                  v-model="additional_info_control.supplier_invoice_no"
                />
                <span class="title">{{ $t("supplier-invoice-no") }}</span>
              </el-col>
              <el-col :span="12">
                <el-form-item>
                  <el-select
                    v-model="sub_form.supplier_invoice_no"
                    v-show="additional_info_control.supplier_invoice_no"
                  >
                    <el-option :label="$t('without')" :value="1"></el-option>
                    <el-option :label="$t('without')" :value="2"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row :gutter="6" class="width-full input-rows">
              <el-col :span="12">
                <el-checkbox
                  class="additional-data-checkbox"
                  v-model="additional_info_control.supplier_invoice_date"
                />
                <span class="title">{{ $t("supplier-invoice-date") }}</span>
              </el-col>
              <el-col :span="12">
                <el-form-item>
                  <el-date-picker
                    type="date"
                    placeholder="2020-10-15"
                    v-model="sub_form.supplier_invoice_date"
                    v-show="additional_info_control.supplier_invoice_date"
                  ></el-date-picker>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row :gutter="6" class="width-full input-rows">
              <el-col :span="12">
                <el-checkbox
                  class="additional-data-checkbox"
                  v-model="additional_info_control.currency_checked"
                  @change="show_our_expenses()"
                />
                <span class="title">{{ $t("currency") }}</span>
              </el-col>
              <el-col :span="12">
                <el-form-item v-show="additional_info_control.currency_checked">
                  <el-row :gutter="6">
                    <el-col :span="9">
                      <el-select v-model="sub_form.currency.type">
                        <el-option :label="$t('$')" :value="1"></el-option>
                        <el-option :label="$t('$')" :value="2"></el-option>
                      </el-select>
                    </el-col>
                    <el-col :span="15">
                      <el-input
                        class="text-center"
                        v-model="sub_form.currency.value"
                        placeholder=""
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
          >{{ $t("ok") }}</el-button
        >
      </span>
    </el-dialog>
    <!-- add supplier dialog -->
    <el-dialog :visible.sync="addSupplier" width="40%">
      <span>
        <el-container class="d-block box-shadow mb-0 px-2 py-2">
          <el-form class="invoice-form width-full" label-position="top">
            <el-row :gutter="6" class="width-full">
              <el-col :xs="24" :sm="24" :md="24" :lg="24">
                <el-form-item>
                  <h3 class="text-center" style="color:#28B4B3">{{
                    $t("supplier-name")
                  }}</h3>
                  <el-input v-model="form.supplier_name" />
                </el-form-item>
              </el-col>
            </el-row>

            <el-row :gutter="6" class="width-full">
              <el-col :xs="24" :sm="24" :md="24" :lg="24">
                <el-form-item>
                  <h3 class="text-center" style="color:#28B4B3">{{
                    $t("mobile-number")
                  }}</h3>
                  <el-input v-model="form.mobile_number" />
                </el-form-item>
              </el-col>
            </el-row>

            <el-row :gutter="6" class="width-full">
              <el-col :xs="24" :sm="24" :md="24" :lg="24">
                <el-form-item>
                  <h3 class="text-center" style="color:#28B4B3">{{
                    $t("card-no-cust")
                  }}</h3>
                  <el-input v-model="form.card_no_cust" />
                </el-form-item>
              </el-col>
            </el-row>

            <el-row :gutter="6" class="width-full">
              <el-col :xs="24" :sm="24" :md="24" :lg="24">
                <el-form-item>
                  <h3 class="text-center" style="color:#28B4B3">{{
                    $t("supplier-address")
                  }}</h3>
                  <el-input v-model="form.supplier_address" />
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
        </el-container>
      </span>
      <span slot="footer" class="dialog-footer">
        <el-button
          class="btn-cyan-light px-4-lg"
          @click="addSupplier = false"
          >{{ $t("ok") }}</el-button
        >
      </span>
    </el-dialog>
    <!-- end add supplier dialog -->
    <!-- end additional choice -->
    <!-- attach file -->
    <attach-file />
    <!-- search invoice categories -->
    <search-invoice-categories />
    <!-- add cost center -->
    <addcostcenter />
  </el-container>
</template>
<script>
import SearchInvoiceCategories from "~/components/dialogs/search-invoice-categories";
import AttachFile from "~/components/dialogs/attach-file";
import addcostcenter from "~/components/dialogs/add-cost-center";
export default {
  name: "invoice",
  components: {
    SearchInvoiceCategories,
    AttachFile,
    addcostcenter
  },
  data: function() {
    return {
      form: {
        input: "",
        date: 1,
        supplier_name: "",
        mobile_number: "",
        card_no_cust: "",
        supplier_address: "",
        invoice_type: 1
      },
      tableOne: [{}, {}, {}, {}, {}, {}],
      sub_form: {
        check_number: "",
        check_date: "",
        cost_center: "",
        supplier_invoice_no: "",
        supplier_invoice_date: "",
        currency: {
          type: "",
          value: ""
        }
      },
      additional_info_control: {
        check_number: false,
        check_date: false,
        cost_center: false,
        supplier_invoice_no: false,
        supplier_invoice_date: false,
        currency_checked: false
      },
      additionalChoice: false,
      printBarcode: false,
      addSupplier: false
    };
  },
  methods: {
    toggleCheckNumberInfo() {
      const state = this.additional_info_control.check_number;
      this.additional_info_control.check_date = state;
    },
    openSearchInvoiceCategoriesDialog() {
      this.$store.commit("searchInvoiceCategories/updateDialogState", true);
    },
    openAttachFileDialog() {
      this.$store.commit("attachFile/updateDialogState", true);
    },
    openAddCostCenterDialog() {
      this.$store.commit("addcostcenter/updateDialogState", true);
    },
    addNewSupplier() {
      const POSTPONED = 1;
      const IN_CASH = 2;
      if (this.form.invoice_type == IN_CASH) {
        this.addSupplier = true;
      } else if (this.form.invoice_type == POSTPONED) {
        this.$router.push("/suppliers-management/supplier-data/new");
      }
    },
    show_currency() {
      this.$store.commit("addExpenses/show_currency", true);
    },
    show_our_expenses() {
      if (this.additional_info_control.currency_checked == false)
      {
        this.$store.commit("addExpenses/show_currency", false);
      }
    }
  },
};
</script>

<style scoped lang="scss">
.inner-flex-buttons {
  justify-content: flex-end;
  margin-top: 30px;
  .el-form-item {
    flex-grow: 0 !important;
    margin: 5px 15px;

    @media only screen and (max-width: 450px) {
      margin: 5px 0px;
    }
  }
}
.input-count {
  background-color: none;
  border: 1px solid #707070;
  padding: 10px 60px;
  margin: 0 10px 5px 10px !important;
  border-radius: 20px;

  @media only screen and (max-width: 375px) {
    padding-left: 5px;
    padding-right: 5px;
    margin-left: 5px;
    margin-right: 5px;
  }
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
.info {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2.5rem;
}
.amounts {
  width: 30%;
  background-color: #fbffbf;
}

.losts {
  width: 20%;
  background-color: #f56c6c;
}
.section-title {
  display: flex;
  align-items: center;
}

.section-title-text {
  text-align: center;
  color: #21798d;
}
.side-line {
  width: 100%;
  border-bottom: 1px solid #21798d;
}
.input-rows {
  min-height: 3rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.dialog-title {
  color: #606266;
  text-align: center;
  font-size: x-large;
  font-weight: 300;
  overflow: hidden;
}
.additional-data-checkbox {
  margin: 0 1rem;
}
.right_buttons {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 65%;

  @media (max-width: 1050px) {
    grid-template-columns: repeat(1, 1fr);
    justify-content: center;
  }

  @media (max-width: 780px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
}
</style>
