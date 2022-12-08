<template>
  <el-container class="container box-shadow ma-4 mb-0 px-2 py-3">
    <el-form class="invoice-form width-full" label-position="top" :model="form">
      <el-row :gutter="6" class="width-full">
        <el-col :xs="24" :sm="24" :md="4" :lg="4">
          <el-form-item :label="$t('invoice-number')">
            <el-input v-model="form.input" placeholder="14">
              <template slot="append"><i class="el-icon-search"></i></template>
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
      </el-row>
      <el-row :gutter="6" class="width-full">
        <el-col :xs="24" :sm="24" :md="4" :lg="4">
          <el-form-item :label="$t('invoice-type')">
            <el-select v-model="form.invoice_type">
              <el-option :label="$t('postponed')" :value="1"></el-option>
              <el-option :label="$t('cash')" :value="2"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
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
          <el-form-item
                :label="$t('cost-center')"
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
        <el-col :xs="24" :sm="24" :md="12" :lg="12" class="mt-40">
          <div class="inline-button-container d-flex">
            <div class="spacer"></div>
            <el-select
              v-model="form.type"
              class="color-blue text-center placeHolderColor  w-250 selectButton"
              :placeholder="$t('supplier-type')"
            >
              <el-option
                :label="$t('with-purchase-invoice-number')"
                :value="1"
                class="selectButton"
              >
                <el-button class="width-full"
              @click="invoiceNumberShow = true"
              >
                  {{ $t("with-purchase-invoice-number") }}
                </el-button>
              </el-option>

              <el-option
                :label="$t('without-purchase-invoice-number')"
                :value="2"
                class="selectButton"
              >
                <el-button class="width-full">
                  {{ $t("without-purchase-invoice-number") }}
                </el-button>
              </el-option>
            </el-select>
          </div>
        </el-col>
      </el-row>
    </el-form>
    <!-- start show invoice number -->
    <el-dialog title=" " :visible.sync="invoiceNumberShow" width="40%">
      <span>
        <el-container class="d-block mb-0 px-2">
          <el-form
            class="invoice-form width-full"
            label-position="top"
            :model="sub_form"
          >
            <el-row class="width-full">
              <el-col :span="24" style="margin-bottom: 30px">
                <h1 style="text-align: center">
                  {{ $t("please-insert-invoice-number") }}
                </h1>
              </el-col>
            </el-row>
            <el-row class="width-full" style="padding: 0px 50px">
              <el-col :span="18">
                <el-form-item>
                  <el-input v-model="form.invoice_no"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <i
                  class="el-icon-search"
                  style="font-size: 20px; padding-right: 50%; padding-top: 5px"
                ></i>
              </el-col>
            </el-row>
          </el-form>
        </el-container>
      </span>
      <span
        slot="footer"
        class="dialog-footer"
        style="background: white !important"
      >
        <el-button
          class="btn-cyan-light px-4-lg"
          @click="(invoiceNumberShow = false), (sure = true)"
          >{{ $t("agree") }}</el-button
        >
      </span>
    </el-dialog>
    <el-dialog title=" " :visible.sync="invoiceNumberShow" width="40%">
      <span>
        <el-container class="d-block mb-0 px-2">
          <el-form
            class="invoice-form width-full"
            label-position="top"
            :model="sub_form"
          >
            <el-row class="width-full">
              <el-col :span="24" style="margin-bottom: 30px">
                <h1 style="text-align: center">
                  {{ $t("please-insert-invoice-number") }}
                </h1>
              </el-col>
            </el-row>
            <el-row class="width-full" style="padding: 0px 50px">
              <el-col :span="18">
                <el-form-item>
                  <el-input v-model="form.confirm_invoice_no"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <i
                  class="el-icon-search"
                  style="
                    font-size: 20px;
                    padding-right: 50%;
                    padding-top: 10px;
                    font-wight: bold;
                  "
                ></i>
              </el-col>
            </el-row>
          </el-form>
        </el-container>
      </span>
      <div class="d-flex justify-center width-full">
        <span class="mx-2">
          <el-button class="btn-cyan-light px-4-lg mt-4" @click="sure = true">{{
            $t("agree")
          }}</el-button>
        </span>
        <span class="mx-2">
          <el-button
            class="btn-cyan-light px-4-lg mt-4"
            @click="(invoiceNumberShow = false), (sure = false)"
            >{{ $t("cancel") }}</el-button
          >
        </span>
      </div>
    </el-dialog>
    <el-dialog title=" " :visible.sync="sure" width="40%">
      <span>
        <el-container class="d-block mb-0 px-2">
          <el-form
            class="invoice-form width-full"
            label-position="top"
            :model="sub_form"
          >
            <el-row class="width-full">
              <el-col :span="24" style="margin-bottom: 30px">
                <h1 style="text-align: center">
                  {{ $t("do-you-want-to-return-all-items") }}
                </h1>
              </el-col>
            </el-row>
            <div class="d-flex justify-center width-full">
              <span class="mx-2">
                <el-button
                  class="btn-cyan-light px-4-lg"
                  @click="(sure = false), (invoiceNumberShow = false)"
                  >{{ $t("yes") }}</el-button
                >
              </span>
              <span class="mx-2">
                <el-button
                  class="btn-cyan-light px-4-lg"
                  @click="sure = false"
                  >{{ $t("no") }}</el-button
                >
              </span>
            </div>
          </el-form>
        </el-container>
      </span>
    </el-dialog>
    <!-- end show invoice number -->
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
        <!-- add bank box -->
    <add-box-bank />

    <!-- add cost center -->
    <addcostcenter />
  </el-container>
</template>
<script>
import AddBoxBank from '~/components/dialogs/add-box-bank';
import addcostcenter from "~/components/dialogs/add-cost-center";
export default {
  name: "invoice",
  components : {
    AddBoxBank,
    addcostcenter
  },
  data: function() {
    return {
      invoiceNumberShow: false,
      sure: false,
      form: {
        input: 1,
        date: 1,
        invoice_no: "",
        confirm_invoice_no: "",
        invoice_type: 1,
        supplier_name: "",
        box_name : 1,
        cost_center : 1
      },
      sub_form: {
        delegate_name: "",
        delegate_invoice_date: "",
        delegate_invoice_number: "",
        cost_center: "",
        invoice_price: "",
        driver_name: ""
      },
      addSupplier : false
    };
  },
  methods : {
    addNewSupplier() {
      const POSTPONED = 1;
      const IN_CASH = 2;
      if (this.form.invoice_type == IN_CASH) {
        this.addSupplier = true;
      } else if (this.form.invoice_type == POSTPONED) {
        this.$router.push("/suppliers-management/supplier-data/new");
      }
    },
    openAddBoxBankDialog() {
      this.$store.commit(
        "addBoxBank/updateDialogState", true
      );
    },
    openAddCostCenterDialog() {
      this.$store.commit("addcostcenter/updateDialogState", true);
    },
  }
};
</script>
