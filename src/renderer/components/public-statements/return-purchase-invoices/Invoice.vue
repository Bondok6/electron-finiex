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
                <el-col :xs="24" :sm="24" :md="8" :lg="6">
                  <el-form-item :label="$t('from-date')">
                    <el-date-picker
                      type="date"
                      placeholder="2020-10-15"
                      v-model="main_form.from_date"
                    ></el-date-picker>
                  </el-form-item>
                </el-col>
              </el-row>
            </el-col>

            <el-col :span="24">
              <el-row :gutter="6">
                <el-col :xs="24" :sm="24" :md="8" :lg="6">
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
                class="color-blue text-center placeHolderColor mb-1"
                :placeholder="$t('order')"
              >
                <el-option :label="$t('client-number')" :value="1"></el-option>
                <el-option :label="$t('client-name')" :value="2"></el-option>
                <el-option
                  :label="$t('maximum-balance')"
                  :value="3"
                ></el-option>
                <el-option
                  :label="$t('minimum-balance')"
                  :value="4"
                ></el-option>
                <el-option :label="$t('invoice-number')" :value="5"></el-option>
                <el-option :label="$t('invoice-date')" :value="6"></el-option>
              </el-select>

              <el-button
                class="text-center btn-cyan-light width-full mt-1"
                @click="additionalChoice = true"
              >
                {{ $t("additional-choices") }}
              </el-button>
            </div>
          </div>
        </el-col>
      </el-row>
    </el-form>
    <el-dialog
      title=" "
      :visible.sync="additionalChoice"
      width="70%"
      class="align-center"
    >
      <span>
        <el-container class="box-shadow mb-0 px-2 py-2">
          <el-form
            class="invoice-form width-full"
            label-position="top"
            :model="sub_form"
          >
            <el-row :gutter="6" class="width-full">
              <el-col :xs="24" :sm="24" :md="6" :lg="5">
                <el-form-item>
                  <label>{{ $t("from-number") }}</label>
                  <el-input v-model="sub_form.formNumber"></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="6" :lg="5">
                <el-form-item>
                  <label>{{ $t("to-number") }}</label>
                  <el-input v-model="sub_form.toNumber"></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="6" :lg="5">
                <el-form-item>
                  <label>{{ $t("supplier-name") }}</label>
                  <el-select v-model="sub_form.supplierName">
                    <el-option :label="$t('1')" :value="2"></el-option>
                    <el-option :label="$t('2')" :value="1"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row :gutter="6" class="width-full">
              <el-col :xs="24" :sm="24" :md="6" :lg="5">
                <el-form-item>
                  <label>{{ $t("box-bank") }}</label>
                  <el-select v-model="sub_form.box_bank">
                    <el-option :label="$t('1')" :value="2"></el-option>
                    <el-option :label="$t('2')" :value="1"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="6" :lg="5">
                <el-form-item>
                  <label>{{ $t("invoice-type") }}</label>
                  <el-select v-model="sub_form.invoice_type">
                    <el-option :label="$t('1')" :value="2"></el-option>
                    <el-option :label="$t('2')" :value="1"></el-option>
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
          @click="additionalChoice = false"
          >{{ $t("agree") }}</el-button
        >
      </span>
    </el-dialog>
  </el-container>
</template>

<script>
export default {
  name: "Invoice",
  data: function () {
    return {
      main_form: {
        from_date: "",
        to_date: "",
        type: "",
      },
      sub_form: {
        from_number: "",
        to_number: "",
        supplier_name: "",
        box_bank: "",
        invoice_type: "",
      },
      additionalChoice: false,
    };
  },
};
</script>
