
<template>
  <el-container class="container ma-2 mb-0 px-2 py-2">
    <el-row class="width-full">
      <el-col :xs="24" :sm="24" :md="24" :lg="14">
        <el-row :gutter="10" class="width-full">
          <el-col :xs="24" :sm="16" :md="14" :lg="14" class="popup-label2 mt-2">
            <span>{{
              $t("alert-on-outstanding-bills-automatically-before")
            }}</span>
          </el-col>
          <el-col :xs="24" :sm="8" :md="8" :lg="8" class="mt-3">
            <el-input
              class="navy-color placeHolderDialog"
              v-model="main_form.account_number"
            >
              <template slot="append">
                <el-button class="mb-1 btn-navy">{{ $t("day") }} </el-button>
              </template>
            </el-input>
          </el-col>
        </el-row>
        <el-row :gutter="10" class="width-full">
          <el-col :xs="24" :sm="24" :md="14" :lg="14" class="popup-label2 mt-2">
            <span>{{
              $t("sales-invoices-are-not-returned-after-the-passage-of-time")
            }}</span>
          </el-col>
          <el-col :xs="24" :sm="24" :md="8" :lg="8" class="mt-3">
            <el-input
              class="navy-color placeHolderDialog"
              v-model="main_form.account_number"
            >
              <template slot="append">
                <el-button class="mb-1 btn-navy">{{ $t("day") }} </el-button>
              </template>
            </el-input>
          </el-col>
        </el-row>
        <el-row :gutter="10" class="width-full">
          <el-col :xs="24" :sm="24" :md="14" :lg="14" class="popup-label2 mt-2">
            <span>{{ $t("not-replacing-sales-invoices-after-passing") }}</span>
          </el-col>
          <el-col :xs="24" :sm="24" :md="8" :lg="8" class="mt-3">
            <el-input
              class="navy-color placeHolderDialog"
              v-model="main_form.account_number"
            >
              <template slot="append">
                <el-button class="mb-1 btn-navy">{{ $t("day") }} </el-button>
              </template>
            </el-input>
          </el-col>
        </el-row>
        <el-row :gutter="10" class="width-full">
          <el-col :xs="24" :sm="24" :md="14" :lg="14" class="popup-label2 mt-2">
            <span>{{
              $t("alert-about-reservations-orders-automatically-before")
            }}</span>
          </el-col>
          <el-col :xs="24" :sm="24" :md="8" :lg="8" class="mt-3">
            <el-input
              class="navy-color placeHolderDialog"
              v-model="main_form.account_number"
            >
              <template slot="append">
                <span class="mb-1 btn-navy">{{ $t("day") }} </span>
              </template>
            </el-input>
          </el-col>
        </el-row>
        <el-row :gutter="10" class="width-full">
          <el-col :xs="24" :sm="24" :md="14" :lg="14" class="popup-label2 mt-2">
            <span>{{ $t("alert-for-expired-orders-before") }}</span>
          </el-col>
          <el-col :xs="24" :sm="24" :md="8" :lg="8" class="mt-3">
            <el-input
              class="navy-color placeHolderDialog"
              v-model="main_form.account_number"
            >
              <template slot="append">
                <span class="mb-1 btn-navy">{{ $t("day") }} </span>
              </template>
            </el-input>
          </el-col>
        </el-row>
        <el-row :gutter="10" class="width-full">
          <el-col :xs="24" :sm="24" :md="14" :lg="14" class="popup-label2 mt-2">
            <span>{{
              $t("adopting-the-representative’s-cost-price-in-the-invoices")
            }}</span>
          </el-col>
          <el-col :xs="24" :sm="24" :md="8" :lg="8" class="mt-3">
            <el-select
              :placeholder="$t('all')"
              v-model="main_form.item_number"
              class="width-full"
            >
              <el-option :label="$t('credit')" :value="2"></el-option>
              <el-option :label="$t('debit')" :value="1"></el-option>
            </el-select>
          </el-col>
        </el-row>
        <el-row :gutter="10" class="width-full">
          <el-col :xs="24" :sm="24" :md="14" :lg="14" class="popup-label2 mt-2">
            <span>{{
              $t("dependence-of-the-price-in-branch-transfers-on")
            }}</span>
          </el-col>
          <el-col :xs="24" :sm="24" :md="8" :lg="8" class="mt-3">
            <el-select
              :placeholder="$t('all')"
              v-model="main_form.item_number"
              class="width-full"
            >
              <el-option :label="$t('credit')" :value="2"></el-option>
              <el-option :label="$t('debit')" :value="1"></el-option>
            </el-select>
          </el-col>
        </el-row>
        <el-row :gutter="10" class="width-full">
          <el-col :xs="24" :sm="24" :md="14" :lg="14" class="popup-label2 mt-2">
            <span>{{ $t("default-invoice-type-in-invoices") }}</span>
          </el-col>
          <el-col :xs="24" :sm="24" :md="8" :lg="8" class="mt-3">
            <el-select
              :placeholder="$t('all')"
              v-model="main_form.item_number"
              class="width-full"
            >
              <el-option :label="$t('credit')" :value="2"></el-option>
              <el-option :label="$t('debit')" :value="1"></el-option>
            </el-select>
          </el-col>
        </el-row>
        <el-row :gutter="10" class="width-full">
          <el-col :xs="24" :sm="24" :md="14" :lg="14" class="popup-label2 mt-2">
            <span>{{ $t("determine-the-decimal-point-for-prices") }}</span>
          </el-col>
          <el-col :xs="24" :sm="24" :md="8" :lg="8" class="mt-3">
            <el-select
              :placeholder="$t('all')"
              v-model="main_form.item_number"
              class="width-full"
            >
              <el-option :label="$t('credit')" :value="2"></el-option>
              <el-option :label="$t('debit')" :value="1"></el-option>
            </el-select>
          </el-col>
        </el-row>
        <el-row :gutter="10" class="width-full">
          <el-col :xs="24" :sm="24" :md="14" :lg="14" class="popup-label2 mt-2">
            <span>{{ $t("determine-the-decimal-point-for-amounts") }}</span>
          </el-col>
          <el-col :xs="24" :sm="24" :md="8" :lg="8" class="mt-3">
            <el-select
              :placeholder="$t('all')"
              v-model="main_form.item_number"
              class="width-full"
            >
              <el-option :label="$t('credit')" :value="2"></el-option>
              <el-option :label="$t('debit')" :value="1"></el-option>
            </el-select>
          </el-col>
          <el-col :xs="24" :sm="24" :md="14" :lg="14" class="popup-label2 mt-2">
            <span>{{
              $t("adopt-the-invoice-price-in-sales-invoices-on")
            }}</span>
          </el-col>
          <el-col :xs="24" :sm="24" :md="8" :lg="8" class="mt-3">
            <el-select
              :placeholder="$t('all')"
              v-model="main_form.item_number"
              class="width-full"
            >
              <el-option :label="$t('credit')" :value="2"></el-option>
              <el-option :label="$t('debit')" :value="1"></el-option>
            </el-select>
          </el-col>
               <el-col :xs="24" :sm="24" :md="14" :lg="14" class="popup-label2 mt-2">
            <span>{{
              $t("type-invoice-in-system")
            }}</span>
          </el-col>
          <el-col :xs="24" :sm="24" :md="8" :lg="8" class="mt-3">
            <el-select
              :placeholder="$t('all')"
              v-model="main_form.item_number"
              class="width-full"
            >
              <el-option :label="$t('credit')" :value="2"></el-option>
              <el-option :label="$t('debit')" :value="1"></el-option>
            </el-select>
          </el-col>
        </el-row>
      </el-col>
      <el-col :xs="24" :sm="24" :md="24" :lg="10">
        <el-row class="width-full">
          <el-col :span="24" class="mt-3 d-flex">
            <el-checkbox
              class="additional-data-checkbox"
              v-model="main_form.check1"
            />
            <span class="title mr-3">{{
              $t("automatic-numbering-of-item-number-in-items-card")
            }}</span>
          </el-col>
          <el-col :span="24" class="mt-3 d-flex">
            <el-checkbox
              class="additional-data-checkbox"
              v-model="main_form.check2"
            />
            <span class="title mr-3">{{
              $t("automatic-item-numbering-by-classification")
            }}</span>
          </el-col>
          <el-col :span="24" class="mt-3 d-flex">
            <el-checkbox
              class="additional-data-checkbox"
              v-model="main_form.check3"
            />
            <span class="title mr-3">{{
              $t("automatic-item-numbering-by-classification-sub")
            }}</span>
          </el-col>
          <el-col :span="24" class="mt-3 d-flex">
            <el-checkbox
              class="additional-data-checkbox"
              v-model="main_form.check4"
            />
            <span class="title mr-3">{{
              $t("modify-item-prices-when-saving-the-purchase-invoice")
            }}</span>
          </el-col>
          <el-col :span="24" class="mt-3 d-flex">
            <el-checkbox
              class="additional-data-checkbox"
              v-model="main_form.check5"
            />
            <span class="title mr-3">{{
              $t("adding-units-and-prices-automatically-in-the-branches")
            }}</span>
          </el-col>
          <el-col :span="24" class="mt-3 d-flex">
            <el-checkbox
              class="additional-data-checkbox"
              v-model="main_form.check6"
            />
            <span class="title mr-3">{{
              $t("hide-the-transfer-price-in-transfers-between-branches")
            }}</span>
          </el-col>
          <el-col :span="24" class="mt-3 d-flex">
            <el-checkbox
              class="additional-data-checkbox"
              v-model="main_form.check7"
            />
            <span class="title mr-3">{{
              $t("show-printing-options-in-sales-invoices")
            }}</span>
          </el-col>
          <el-col :span="24" class="mt-3 d-flex">
            <el-checkbox
              class="additional-data-checkbox"
              v-model="main_form.check8"
            />
            <span class="title mr-3">{{
              $t("using-the-barcode-on-the-cashier's-bill")
            }}</span>
          </el-col>
          <el-col :span="24" class="mt-3 d-flex">
            <el-checkbox
              class="additional-data-checkbox"
              v-model="main_form.check9"
            />
            <span class="title mr-3">{{
              $t("print-the-invoice-after-saving-cashier-invoice")
            }}</span>
          </el-col>
          <el-col :span="24" class="mt-3 d-flex">
            <el-checkbox
              class="additional-data-checkbox"
              v-model="main_form.check10"
            />
            <span class="title mr-3">{{
              $t("show-the-payments-window-in-the-cashier-invoice")
            }}</span>
          </el-col>
          <el-col :span="24" class="mt-3 d-flex">
            <el-checkbox
              class="additional-data-checkbox"
              v-model="main_form.check11"
            />
            <span class="title mr-3">{{
              $t("show-window-to-confirm-entry-into-cashier-invoice")
            }}</span>
          </el-col>
          <el-col :span="24" class="mt-3 d-flex">
            <el-checkbox
              class="additional-data-checkbox"
              v-model="main_form.check12"
            />
            <span class="title mr-3">{{
              $t("show-the-price-in-foreign-currency-on-purchase-invoice")
            }}</span>
          </el-col>
          <el-col :span="24" class="mt-3 d-flex">
            <el-checkbox
              class="additional-data-checkbox"
              v-model="main_form.check13"
            />
            <span class="title mr-3">{{
              $t("show-the-price-in-foreign-currency-on-sales-invoice")
            }}</span>
          </el-col>
          <el-col :span="24" class="mt-3 d-flex">
            <el-checkbox
              class="additional-data-checkbox"
              v-model="main_form.check14"
            />
            <span class="title mr-3">{{
              $t("show-the-amount-of-the bonus-in-the-invoices")
            }}</span>
          </el-col>
          <el-col :span="24" class="mt-3 d-flex">
            <el-checkbox
              class="additional-data-checkbox"
              v-model="main_form.check15"
            />
            <span class="title mr-3">{{
              $t("show-the-statement-in-invoices")
            }}</span>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </el-container>
</template>
<script>
export default {
  name: "search",
  data: function () {
    return {
      main_form: {
        check1: false,
        check2: false,
        check3: false,
        check4: false,
        check5: false,
        check6: false,
        check7: false,
        check8: false,
        check9: false,
        check10: false,
        check11: false,
        check12: false,
        check13: false,
        check14: false,
        check15: false,
      },
    };
  },
};
</script>