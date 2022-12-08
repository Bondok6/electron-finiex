<template>
  <div class="width-full">
    <el-container class="container box-shadow ma-4 mb-0 px-2 py-3">
      <el-form
        class="invoice-form width-full"
        label-position="top"
        :model="main_form"
      >
        <el-row :gutter="6" class="width-full">
          <el-col :xs="24" :sm="10" :md="6" :lg="4">
            <el-form-item :label="$t('from-date')">
              <el-date-picker
                type="date"
                placeholder="2020-10-15"
                v-model="main_form.from_date"
              ></el-date-picker>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="6" class="width-full">
          <el-col :xs="24" :sm="10" :md="6" :lg="4">
            <el-form-item :label="$t('to-date')">
              <el-date-picker
                type="date"
                placeholder="2020-10-15"
                v-model="main_form.to_date"
              ></el-date-picker>
            </el-form-item>
          </el-col>
          <template>
            <el-col :xs="24" :sm="24" :md="19" :lg="20" :xl="20" class="mt-2">
              <div class="inline-button-container d-flex">
                <div class="spacer"></div>
                <el-row :gutter="4" class="w-200">
                  <el-col :span="24">
                    <el-radio v-model="radio" label="1">
                      {{ $t("detailed-report") }}
                    </el-radio>
                  </el-col>
                </el-row>
              </div>
            </el-col>
            <el-col :xs="24" :sm="24" :md="19" :lg="20" :xl="20" class="mt-2">
              <div class="inline-button-container d-flex">
                <div class="spacer"></div>
                <el-row :gutter="4" class="w-200">
                  <el-col :span="24">
                    <el-radio v-model="radio" label="2">
                      {{ $t("total-report") }}</el-radio
                    >
                  </el-col>
                </el-row>
              </div>
            </el-col>
          </template>

          <el-col :xs="24" :sm="24" :md="19" :lg="20" :xl="20" class="mt-2">
            <div class="inline-button-container d-flex">
              <div class="spacer"></div>
              <el-button
                class="text-center w-250 btn-cyan-light"
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
                      <el-col :xs="24" :sm="24" :md="6" :lg="5">
                        <el-form-item>
                          <label>{{ $t("from-number") }}</label>
                          <el-input v-model="sub_form.formNumber"></el-input>
                        </el-form-item>
                      </el-col>
                      <el-col :xs="24" :sm="24" :md="6" :lg="5">
                        <el-form-item>
                          <label>{{ $t("account-name") }}</label>
                          <el-select v-model="sub_form.name">
                            <el-option :label="$t('1')" :value="2"></el-option>
                            <el-option :label="$t('2')" :value="1"></el-option>
                          </el-select>
                        </el-form-item>
                      </el-col>
                    </el-row>
                    <el-row :gutter="6" class="width-full">
                      <el-col :xs="24" :sm="24" :md="6" :lg="5">
                        <el-form-item>
                          <label>{{ $t("to-number") }}</label>
                          <el-input v-model="sub_form.toNumber"></el-input>
                        </el-form-item>
                      </el-col>
                      <el-col :xs="24" :sm="24" :md="6" :lg="5">
                        <el-form-item>
                          <label>{{ $t("cost-center-name") }}</label>
                          <el-select
                            v-model="sub_form.cost_center_name"
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
    <invoice-table v-if="radio == 1" />
    <invoice-table-two v-if="radio == 2" />
  </div>
</template>

<script>
import InvoiceTable from "./InvoiceTable";
import InvoiceTableTwo from "./InvoiceTableTwo";
export default {
  name: "Invoice",
  components: {
    InvoiceTable,
    InvoiceTableTwo,
  },
  data: function () {
    return {
      main_form: {
        from_date: "",
        to_date: "",
      },
      radio: "1",
      sub_form: {
        from_number: "",
        to_number: "",
        account_name: "",
        cost_center_name: "",
      },
      additionalChoice: false,
    };
  },
  methods: {},
};
</script>
