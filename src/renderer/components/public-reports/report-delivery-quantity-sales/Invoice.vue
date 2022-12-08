<template>
  <el-container class="container box-shadow ma-4 mb-0 px-2 py-3">
    <el-form class="invoice-form width-full" label-position="top" :model="form">
      <el-row :gutter="6" class="width-full">
        <el-col :xs="24" :sm="16">
          <el-row :gutter="6" class="width-full">
            <el-col :xs="24" :sm="24" :md="6" :lg="6">
              <el-form-item :label="$t('from-invoice-date')">
                <el-date-picker
                  type="date"
                  placeholder="2020-10-15"
                  format="yyyy-MM-dd HH:mm"
                  Value-format="yyyy-MM-dd HH:mm"
                  v-model="form.date"
                ></el-date-picker>
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="24" :md="6" :lg="6">
              <el-form-item :label="$t('client-name')">
                <el-select
                  v-model="form.warehouse_name"
                  :placeholder="$t('all')"
                >
                  <el-option :label="$t('all')" :value="1"></el-option>
                  <el-option :label="$t('all')" :value="2"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="6" class="width-full">
            <el-col :xs="24" :sm="24" :md="6" :lg="6">
              <el-form-item :label="$t('to-invoice-date')">
                <el-date-picker
                  type="date"
                  placeholder="2020-10-15"
                  format="yyyy-MM-dd HH:mm"
                  Value-format="yyyy-MM-dd HH:mm"
                  v-model="form.date"
                ></el-date-picker>
              </el-form-item>
            </el-col>
          </el-row>
        </el-col>
        <el-col :xs="24" :sm="8">
          <div
            class="inline-button-container d-flex flex-direction-column mt-40"
          >
            <div class="vertical-buttons">
              <el-form-item>
                <el-button
                  class="float-left mt-point-5 btn-cyan-light"
                  @click="additionalChoice = true"
                >
                  {{ $t("additional-choices") }}
                </el-button>
              </el-form-item>
              <el-form-item>
                <el-button
                  class="float-left mt-point-5t"
                  @click="
                    form.include_invoices_whose_amount_zero = !form.include_invoices_whose_amount_zero
                  "
                  :class="[
                    form.include_invoices_whose_amount_zero
                      ? 'btn-dark-grey'
                      : 'btn-red'
                  ]"
                >
                  <span v-if="form.include_invoices_whose_amount_zero">
                    {{ $t("include-invoices-whose-amount-zero") }}
                  </span>
                  <span v-else>
                    {{ $t("non-include-invoices-whose-amount-zero") }}
                  </span>
                </el-button>
              </el-form-item>
            </div>
          </div>
        </el-col>
        <!-- start dialog -->
        <el-dialog title=" " :visible.sync="additionalChoice" width="70%">
          <span>
            <el-container class="d-block box-shadow mb-0 px-2 py-2">
              <el-form
                class="invoice-form width-full mb-8"
                label-position="top"
                :model="form"
              >
                <el-row :gutter="6" class="width-full">
                  <el-col :xs="24" :sm="24" :md="8" :lg="5">
                    <el-form-item>
                      <label>{{ $t("from-invoice-number") }}</label>
                      <el-input v-model="form.input"></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :xs="24" :sm="24" :md="8" :lg="5">
                    <el-form-item>
                      <label>{{ $t("item-number") }}</label>
                      <el-select>
                        <el-option :label="$t('all')" :value="2"></el-option>
                        <el-option :label="$t('all')" :value="1"></el-option>
                      </el-select>
                    </el-form-item>
                  </el-col>
                  <el-col :xs="24" :sm="24" :md="8" :lg="5">
                    <el-form-item>
                      <label>{{ $t("invoice-type") }}</label>
                      <el-select :placeholder="$t('all')">
                        <el-option :label="$t('all')" :value="2"></el-option>
                        <el-option :label="$t('all')" :value="1"></el-option>
                      </el-select>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row :gutter="6" class="width-full">
                  <el-col :xs="24" :sm="24" :md="8" :lg="5">
                    <el-form-item>
                      <label>{{ $t("to-invoice-number") }}</label>
                      <el-input v-model="form.input"></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :xs="24" :sm="24" :md="16" :lg="10">
                    <el-form-item>
                      <label>{{ $t("item-name") }}</label>
                      <el-select :placeholder="$t('all')">
                        <el-option :label="$t('all')" :value="2"></el-option>
                        <el-option :label="$t('all')" :value="1"></el-option>
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
        <!-- end dialog -->
      </el-row>
    </el-form>
  </el-container>
</template>

<script>
export default {
  name: "invoice",

  data: function() {
    return {
      form: {
        invoice_id_from: 1,
        invoice_id_to: 1,
        customer_name: 1,
        item_number: 1,
        item_name: 1,
        include_invoices_whose_amount_zero: 1,
        type: 1
      },
      additionalChoice: false
    };
  }
};
</script>
