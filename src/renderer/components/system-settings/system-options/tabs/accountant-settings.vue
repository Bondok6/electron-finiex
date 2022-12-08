<template>
  <el-container class="container ma-2 mb-0 px-2 py-2">
    <el-row class="width-full mt-4">
      <el-col :xs="24" :md="12">
        <el-row class="width-full">
          <el-col :span="24" class="mt-2">
            <div class="popup-label">
              <span>{{ $t("fiscal-year-name") }}</span>
            </div>
          </el-col>
          <el-col :span="24" class="mt-2">
            <el-input v-model="main_form.account_number"> </el-input>
          </el-col>
          <el-col :span="24">
            <el-col :span="11" class="mt-2 mx-1">
              <span>{{ $t("fiscal-year-start-date") }}</span>
              <el-date-picker
                class="width-full"
                placeholder="yyyy/MM/dd"
              ></el-date-picker>
            </el-col>
            <el-col :span="11" class="mt-2 mx-1">
              <span>{{ $t("fiscal-year-end-date") }}</span>
              <el-date-picker
                class="width-full"
                placeholder="yyyy/MM/dd"
              ></el-date-picker>
            </el-col>
          </el-col>

          <el-col :span="24" class="mt-3 d-flex">
            <el-checkbox
              class="additional-data-checkbox"
              v-model="main_form.check1"
            />
            <span class="title mr-3">{{
              $t("automatic-numbering-of-item-card-in-items-card")
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
              $t("generalization-of-cost-center-to-debtor-and-creditor")
            }}</span>
          </el-col>
        </el-row>
      </el-col>
      <el-col :xs="24" :md="12">
        <el-container
          class="container ma-4 mt-0 mb-0 invoice-table table-header-blue"
        >
          <el-table
            :data="tableData"
            style="width: 100%"
            border
            max-height="600"
          >
            <el-table-column align="right" prop="item_name" />

            <el-table-column
              align="center"
              prop="category"
              :label="$t('auto-relay')"
            >
              <el-checkbox
                class="additional-data-checkbox"
                v-model="main_form.check9"
              />
            </el-table-column>
          </el-table>
        </el-container>
      </el-col>
    </el-row>
  </el-container>
</template>
<script>
export default {
  name: "search",

  data: function() {
    return {
      main_form: {},
      tableData: [
        {
          item_name: this.$t("sales-invoice")
        },
        {
          item_name: this.$t("sales-invoice-return")
        },
        {
          item_name: this.$t("purchases-invoice")
        },
        {
          item_name: this.$t("purchases-invoice-return")
        },
        {
          item_name: this.$t("payment-vouchers")
        },
        {
          item_name: this.$t("receipt-vouchers")
        },
        {
          item_name: this.$t("discount-vouchers")
        },
        {
          item_name: this.$t("purchase-expenses")
        },
        {
          item_name: this.$t("sales-expenses")
        },
        {
          item_name: this.$t("exclusion-of-fixed-assets")
        },
        {
          item_name: this.$t("production-order")
        },
        {
          item_name: this.$t("production-receive")
        },
        {
          item_name: this.$t("sort-items-order")
        }
      ]
    };
  }
};
</script>
