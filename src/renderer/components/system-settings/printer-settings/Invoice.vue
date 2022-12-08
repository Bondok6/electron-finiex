
<template>
  <el-container class="container box-shadow px-4 py-2 ma-4 mb-0 pt-great mt-4">
    <el-form class="width-full" v-model="main_form">
      <el-row class="width-full">
        <el-col :span="24">
          <el-row :gutter="10" class="width-full px-4">
            <el-col :xs="24" :sm="24" :md="8" :lg="6" class="popup-label2 mt-2">
              <span>{{ $t("invoice-printing") }}</span>
            </el-col>
            <el-col :xs="24" :sm="24" :md="8" :lg="6" class="mt-3">
              <el-select
                :placeholder="$t('all')"
                v-model="main_form.item_number"
                class="width-full"
              >
                <el-option :label="$t('credit')" :value="2"></el-option>
                <el-option :label="$t('debit')" :value="1"></el-option>
              </el-select>
            </el-col>
            <el-col :xs="24" :sm="24" :md="8" :lg="6" class="mt-3 d-flex">
              <el-checkbox
                class="additional-data-checkbox mt-2"
                v-model="main_form.check1"
              />
              <span class="title mr-3 mt-2">{{
                $t("print-without-preview")
              }}</span>
            </el-col>
          </el-row>
          <el-row :gutter="10" class="width-full px-4">
            <el-col :xs="24" :sm="24" :md="8" :lg="6" class="popup-label2 mt-2">
              <span>{{ $t("bonds-printing") }}</span>
            </el-col>
            <el-col :xs="24" :sm="24" :md="8" :lg="6" class="mt-3">
              <el-select
                :placeholder="$t('all')"
                v-model="main_form.item_number"
                class="width-full"
              >
                <el-option :label="$t('credit')" :value="2"></el-option>
                <el-option :label="$t('debit')" :value="1"></el-option>
              </el-select>
            </el-col>
            <el-col :xs="24" :sm="24" :md="8" :lg="6" class="mt-3 d-flex">
              <el-checkbox
                class="additional-data-checkbox mt-2"
                v-model="main_form.check1"
              />
              <span class="title mr-3 mt-2">{{
                $t("print-without-preview")
              }}</span>
            </el-col>
          </el-row>
          <el-row :gutter="10" class="width-full px-4">
            <el-col :xs="24" :sm="24" :md="8" :lg="6" class="popup-label2 mt-2">
              <span>{{ $t("reports-printing") }}</span>
            </el-col>
            <el-col :xs="24" :sm="24" :md="8" :lg="6" class="mt-3">
              <el-select
                :placeholder="$t('all')"
                v-model="main_form.item_number"
                class="width-full"
              >
                <el-option :label="$t('credit')" :value="2"></el-option>
                <el-option :label="$t('debit')" :value="1"></el-option>
              </el-select>
            </el-col>
            <el-col :xs="24" :sm="24" :md="8" :lg="6" class="mt-3 d-flex">
              <el-checkbox
                class="additional-data-checkbox mt-2"
                v-model="main_form.check1"
              />
              <span class="title mr-3 mt-2">{{
                $t("print-without-preview")
              }}</span>
            </el-col>
          </el-row>
          <el-row :gutter="10" class="width-full px-4">
            <el-col :xs="24" :sm="24" :md="8" :lg="6" class="popup-label2 mt-2">
              <span>{{ $t("cashier-printing") }}</span>
            </el-col>
            <el-col :xs="24" :sm="24" :md="8" :lg="6" class="mt-3">
              <el-select
                :placeholder="$t('all')"
                v-model="main_form.item_number"
                class="width-full"
              >
                <el-option :label="$t('credit')" :value="2"></el-option>
                <el-option :label="$t('debit')" :value="1"></el-option>
              </el-select>
            </el-col>
            <el-col :xs="24" :sm="24" :md="8" :lg="6" class="mt-3 d-flex">
              <el-checkbox
                class="additional-data-checkbox mt-2"
                v-model="main_form.check1"
              />
              <span class="title mr-3 mt-2">{{
                $t("print-without-preview")
              }}</span>
            </el-col>
          </el-row>
          <el-row :gutter="10" class="width-full px-4">
            <el-col :xs="24" :sm="24" :md="8" :lg="6" class="popup-label2 mt-2">
              <span>{{ $t("barcode-printing") }}</span>
            </el-col>
            <el-col :xs="24" :sm="24" :md="8" :lg="6" class="mt-3">
              <el-select
                :placeholder="$t('all')"
                v-model="main_form.item_number"
                class="width-full"
              >
                <el-option :label="$t('credit')" :value="2"></el-option>
                <el-option :label="$t('debit')" :value="1"></el-option>
              </el-select>
            </el-col>
            <el-col :xs="24" :sm="24" :md="8" :lg="6" class="mt-3 d-flex">
              <el-checkbox
                class="additional-data-checkbox mt-2"
                v-model="main_form.check1"
              />
              <span class="title mr-3 mt-2">{{
                $t("print-without-preview")
              }}</span>
            </el-col>
          </el-row>
          <el-row class="width-full mt-4">
            <el-col :xs="24" :md="12" class="mt-2">
              <el-col :span="24" class="d-flex justify-center">
                <el-input
                  style="width: 60%"
                  type="textarea"
                  :rows="7"
                  :placeholder="$t('name-of-facility-in-barcode-label')"
                >
                </el-input>
              </el-col>
              <el-col :span="24">
                <el-checkbox
                  class="additional-data-checkbox mt-4"
                  v-model="main_form.check1"
                />
                <span class="title mr-3 mt-2">{{
                  $t("print-quotations-on-reports-print")
                }}</span>
              </el-col>
              <el-col :span="24">
                <el-checkbox
                  class="additional-data-checkbox mt-2"
                  v-model="main_form.check1"
                />
                <span class="title mr-3 mt-2">{{
                  $t("print-purchases-invoices-on-reports-print")
                }}</span>
              </el-col>
              <el-col :span="24">
                <el-checkbox
                  class="additional-data-checkbox mt-2"
                  v-model="main_form.check1"
                />
                <span class="title mr-3 mt-2">{{
                  $t("printing-unit-barcode-on-barcode-label")
                }}</span>
              </el-col>
            </el-col>
            <el-col :xs="24" :md="12" class="mt-2">
              <el-col :span="24" class="d-flex justify-center">
                <el-input
                  style="width: 60%"
                  type="textarea"
                  :rows="7"
                  :placeholder="$t('text-at-bottom-of-cashier-bill')"
                >
                </el-input>
              </el-col>
              <el-col :span="24">
                <el-checkbox
                  class="additional-data-checkbox mt-4"
                  v-model="main_form.check1"
                />
                <span class="title mr-3 mt-2">{{
                  $t("printing-sales-allowances-to-print-reports")
                }}</span>
              </el-col>
              <el-col :span="24">
                <el-checkbox
                  class="additional-data-checkbox mt-2"
                  v-model="main_form.check1"
                />
                <span class="title mr-3 mt-2">{{
                  $t("print-remittance-invoices-to-print-reports")
                }}</span>
              </el-col>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </el-form>
  </el-container>
</template>
<script>
export default {
  name: "search",
  data: function () {
    return {
      main_form: {},
    };
  },
};
</script>
