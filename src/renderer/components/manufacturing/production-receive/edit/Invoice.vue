<template>
  <el-container class="container box-shadow ma-4 mb-0 px-2 py-3">
    <el-form class="invoice-form" label-position="top" :model="form">
      <el-row :gutter="6">
        <el-col :span="24">
          <el-row :gutter="6">
            <el-col :xs="24" :sm="6" :md="6" :lg="4">
              <el-form-item :label="$t('order-receipt-number')">
                <el-input v-model="form.order_number" placeholder="14">
                </el-input>
              </el-form-item>
            </el-col>

            <el-col :xs="24" :sm="6" :md="6" :lg="4">
              <el-form-item :label="$t('production-type')">
                <el-select v-model="form.production_type">
                  <el-option :label="$t('all')" :value="1"></el-option>
                  <el-option :label="$t('all')" :value="2"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="6" :md="6" :lg="4">
              <el-form-item :label="$t('batch-number')">
                <el-input v-model="form.batch_number" placeholder="14">
                </el-input>
              </el-form-item>
            </el-col>

            <el-col :xs="24" :sm="6" :md="6" :lg="4">
              <el-form-item :label="$t('date-the-order-was-received')">
                <el-date-picker
                  type="date"
                  placeholder="2020-10-15"
                  v-model="form.order_date"
                ></el-date-picker>
              </el-form-item>
            </el-col>
          </el-row>
        </el-col>

        <el-col :span="24">
          <el-row :gutter="6">
            <el-col :xs="24" :sm="6" :md="6" :lg="4">
              <el-form-item :label="$t('client-name')">
                <el-select v-model="form.customer_name">
                  <el-option :label="$t('all')" :value="1"></el-option>
                  <el-option :label="$t('all')" :value="2"></el-option>
                </el-select>
              </el-form-item>
            </el-col>

            <el-col :xs="24" :sm="6" :md="6" :lg="4">
              <el-form-item :label="$t('cost-center')">
                <el-select v-model="form.cost_canter">
                  <el-option :label="$t('all')" :value="1"></el-option>
                  <el-option :label="$t('all')" :value="2"></el-option>
                </el-select>
              </el-form-item>
            </el-col>

            <el-col :xs="24" :sm="6" :md="6" :lg="4">
              <el-form-item :label="$t('production-status')">
                <el-select v-model="form.production_status">
                  <el-option :label="$t('all')" :value="1"></el-option>
                  <el-option :label="$t('all')" :value="2"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="6" :md="6" :lg="4">
              <el-form-item :label="$t('production-hours')">
                <el-select v-model="form.production_hours">
                  <el-option :label="$t('all')" :value="1"></el-option>
                  <el-option :label="$t('all')" :value="2"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="24" :md="24" :lg="8">
              <div class="inline-button-container d-flex">
                <div class="spacer"></div>
                <el-button
                  class="text-center w-250 btn-cyan-light"
                  @click="Dialog = true"
                >
                  {{ $t("production-order-number") }}
                </el-button>
              </div>
            </el-col>
            <el-col :xs="24" :sm="24" :md="24" :lg="8" class="mt-2">
              <div class="inline-button-container d-flex">
                <div class="spacer"></div>
                <el-select
                  v-model="form.type"
                  class="
                    color-blue
                    text-center
                    placeHolderColor
                    w-250
                    selectButton
                  "
                  :placeholder="$t('delivery-options')"
                >
                  <NuxtLink :to="localePath('/sales/sales-invoices/edit')">
                    <el-option
                      :label="$t('go-to-sales-invoice')"
                      :value="1"
                    ></el-option>
                  </NuxtLink>
                  <el-option
                    :label="$t('modify-products-prices')"
                    :value="2"
                  ></el-option>
                </el-select>
              </div>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </el-form>
    <el-dialog title=" " :visible.sync="Dialog" width="40%">
      <span>
        <el-container class="d-block mb-0 px-2">
          <el-form
            class="invoice-form width-full"
            label-position="top"
            :model="invoice_form"
          >
            <el-row class="width-full">
              <el-col :span="24" style="margin-bottom: 30px">
                <h1 style="text-align: center">
                  {{ $t("please-enter-the-production-number") }}
                </h1>
              </el-col>
            </el-row>
            <el-row class="width-full" style="padding: 0px 50px">
              <el-col :span="18">
                <el-form-item>
                  <el-input
                    v-model="invoice_form.confirm_invoice_no"
                  ></el-input>
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
      </div>
    </el-dialog>
    <el-dialog title=" " :visible.sync="sure" width="40%">
      <span>
        <el-container class="d-block mb-0 px-2">
          <el-form class="invoice-form width-full" label-position="top">
            <el-row class="width-full">
              <el-col :span="24" style="margin-bottom: 30px">
                <h1 style="text-align: center">
                  {{
                    $t(
                      "do-you-want-to-confirm-the-update-of-the-cost-prices-for-the-items?"
                    )
                  }}
                </h1>
              </el-col>
            </el-row>
            <div class="d-flex justify-center width-full">
              <span class="mx-2">
                <el-button
                  class="btn-cyan-light px-4-lg"
                  @click="(sure = false), (Dialog = false)"
                  >{{ $t("agree") }}</el-button
                >
              </span>
              <span class="mx-2">
                <el-button
                  class="px-4-lg"
                  @click="sure = false"
                  style="background: red; color: white"
                  >{{ $t("escape") }}</el-button
                >
              </span>
            </div>
          </el-form>
        </el-container>
      </span>
    </el-dialog>
  </el-container>
</template>


<script>
export default {
  name: "invoice",

  data: function () {
    return {
      Dialog: false,
      sure: false,
      form: {
        production_hours: 1,
        cost: 1,
        customer_name: 1,
        batch_number: 1,
        production_status: 1,
        production_type: 1,
        order_number: 1,
        start_date: 1,
        end_date: 2,
        order_date: 3,
      },
      invoice_form: {
        confirm_invoice_no: "",
      },
      tableData: [
        {
          id: "1",
          number: "",
          date: "",
          quantities: "",
        },
        {
          id: "2",
          number: "",
          date: "",
          quantities: "",
        },
      ],
    };
  },
  methods: {},
};
</script>