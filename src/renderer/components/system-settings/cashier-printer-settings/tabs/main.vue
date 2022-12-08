<template>
  <el-container class="container ma-2 mb-0 px-2 py-2">
    <el-row class="width-full mt-4">
      <el-col :xs="24" :md="14">
        <el-row class="width-full mt-4">
          <el-col :xs="24" :md="10" class="popup-label2 mt-2">
            <span>{{ $t("cashier-printer-1") }}</span>
          </el-col>
          <el-col :xs="24" :md="10" class="mt-2">
            <el-select
              :placeholder="$t('all')"
              v-model="main_form.item_number"
              class="width-full mt-1"
            >
              <el-option :label="$t('credit')" :value="2"></el-option>
              <el-option :label="$t('debit')" :value="1"></el-option>
            </el-select>
          </el-col>
        </el-row>
        <el-row class="width-full mt-4">
          <el-col :xs="24" :md="10" class="popup-label2 mt-2">
            <span>{{ $t("cashier-printer-2") }}</span>
          </el-col>
          <el-col :xs="24" :md="10" class="mt-2">
            <el-select
              :placeholder="$t('all')"
              v-model="main_form.item_number"
              class="width-full mt-1"
            >
              <el-option :label="$t('credit')" :value="2"></el-option>
              <el-option :label="$t('debit')" :value="1"></el-option>
            </el-select>
          </el-col>
        </el-row>
        <el-row class="width-full mt-4">
          <el-col :span="24" class="mt-3 d-flex">
            <el-checkbox
              class="additional-data-checkbox"
              v-model="main_form.check1"
            />
            <span class="title mr-3">{{
              $t(
                "print-invoice-in-main-printer-two-according-to-external-printers"
              )
            }}</span>
          </el-col>
          <el-col :span="24" class="mt-3 d-flex">
            <el-checkbox
              class="additional-data-checkbox"
              v-model="main_form.check2"
            />
            <span class="title mr-3">{{
              $t(
                "print-invoice-in-main-printer-two-according-to-items-category"
              )
            }}</span>
          </el-col>
          <el-col :span="24" class="mt-3 d-flex">
            <el-checkbox
              class="additional-data-checkbox"
              v-model="main_form.check3"
            />
            <span class="title mr-3">{{
              $t("print-in-internal-orders-at-main-printer-one")
            }}</span>
          </el-col>
          <el-col :span="24" class="mt-3 d-flex">
            <el-checkbox
              class="additional-data-checkbox"
              v-model="main_form.check4"
            />
            <span class="title mr-3">{{
              $t("print-cashier-sales-invoice-on-external-cashier-printers")
            }}</span>
          </el-col>
          <el-col :span="24" class="mt-3 d-flex">
            <el-checkbox
              class="additional-data-checkbox"
              v-model="main_form.check4"
            />
            <span class="title mr-3">{{
              $t("print-invoice-return-on-external-cashier-printers")
            }}</span>
          </el-col>
        </el-row>
        <el-row class="width-full mt-4">
          <el-col :xs="24" :md="15" class="popup-label2 mt-2">
            <span>{{ $t("number-of-copies-printed-on-main-printer") }}</span>
          </el-col>
          <el-col :xs="24" :md="5" class="mt-2">
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
    </el-row>
  </el-container>
</template>

<script>
export default {
  name: "search",

  data: function () {
    return {
      main_form: {
        select_all: 1,
      },
    };
  },
};
</script>



<style lang="scss" scoped>
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
</style>
