<template>
  <el-container class="container box-shadow ma-4 mb-0 px-2 py-3">
    <el-form
      class="invoice-form width-full"
      label-position="top"
      :model="main_form"
    >
      <el-row :gutter="6" class="width-full">
        <el-col :xs="24" :sm="8" :md="6" :lg="4">
          <el-form-item :label="$t('from-bond-date')">
            <el-date-picker
              type="date"
              placeholder="2020-10-15"
              v-model="main_form.from_date"
            ></el-date-picker>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="8" :md="6" :lg="4">
          <el-form-item :label="$t('client-name')">
            <el-select v-model="main_form.client_name" :label="$t('all')">
              <el-option :label="$t('1')" :value="2"></el-option>
              <el-option :label="$t('2')" :value="1"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="6" class="width-full">
        <el-col :xs="24" :sm="8" :md="6" :lg="4">
          <el-form-item :label="$t('from-bond-date')">
            <el-date-picker
              type="date"
              placeholder="2020-10-15"
              v-model="main_form.from_date"
            ></el-date-picker>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="24" :md="4" :lg="14" class="mt-2">
          <div class="inline-button-container d-flex">
            <div class="spacer"></div>
          </div>
        </el-col>
        <el-col :xs="24" :sm="24" :md="8" :lg="6" class="mt-2">
          <div class="inline-button-container d-flex">
            <div class="spacer"></div>
            <el-button
              class="text-center w-250 btn-cyan-light mt-4"
              @click="additionalChoice = true"
            >
              {{ $t("additional-choices") }}
            </el-button>
          </div>
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
                    <el-col :xs="24" :sm="24" :md="12" :lg="6">
                      <el-form-item>
                        <label>{{ $t("from-sort-order-number") }}</label>
                        <el-input v-model="sub_form.formNumber"></el-input>
                      </el-form-item>
                    </el-col>
                    <el-col :xs="24" :sm="24" :md="12" :lg="6">
                      <el-form-item>
                        <label>{{ $t("to-sort-order-number") }}</label>
                        <el-input v-model="sub_form.toNumber"></el-input>
                      </el-form-item>
                    </el-col>
                    <el-col :xs="24" :sm="24" :md="12" :lg="6">
                      <el-form-item>
                        <label>{{ $t("cost-center") }}</label>
                        <el-select
                          v-model="sub_form.cost_center"
                          :label="$t('all')"
                        >
                          <el-option :label="$t('1')" :value="2"></el-option>
                          <el-option :label="$t('2')" :value="1"></el-option>
                        </el-select>
                      </el-form-item>
                    </el-col>
                    <el-col :xs="24" :sm="24" :md="12" :lg="6">
                      <el-form-item>
                        <label>{{ $t("supplier-name") }}</label>
                        <el-select
                          v-model="sub_form.supplier_name"
                          :label="$t('all')"
                        >
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
        </el-col>
      </el-row>
    </el-form>
  </el-container>
</template>

<script>
export default {
  name: "invoice",

  data: function () {
    return {
      additionalChoice: false,
      main_form: {
        item_number: 1,
        item_name: 1,
        from_date: 1,
        to_date: 1,
      },
      sub_form: {
        supplier_name: "",
        fromNumber: "",
        toNumber: "",
        cost_center: "",
      },
    };
  },
};
</script>