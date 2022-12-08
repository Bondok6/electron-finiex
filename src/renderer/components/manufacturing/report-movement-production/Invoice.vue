<template>
  <el-container class="container box-shadow ma-4 mb-0 px-2 py-3">
    <el-form class="invoice-form" label-position="top" :model="form">
      <el-row :gutter="6" class="width-full">
        <el-col :xs="24" :sm="6" :md="5" :lg="4">
          <el-form-item :label="$t('from-date')">
            <el-date-picker v-model="form.from_date" type="date">
            </el-date-picker>
          </el-form-item>
        </el-col>

        <el-col :xs="24" :sm="6" :md="5" :lg="4">
          <el-form-item :label="$t('item-number')">
            <el-input v-model="form.item_number"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="6" class="width-full">
        <el-col :xs="24" :sm="6" :md="5" :lg="4">
          <el-form-item :label="$t('to-date')">
            <el-date-picker v-model="form.to_date" type="date">
            </el-date-picker>
          </el-form-item>
        </el-col>

        <el-col :xs="24" :sm="6" :md="5" :lg="4">
          <el-form-item :label="$t('item-name')">
            <el-select v-model="form.item_name">
              <el-option :label="$t('all')" :value="1"></el-option>
              <el-option :label="$t('all')" :value="2"></el-option>
            </el-select>
          </el-form-item>
        </el-col>

        <el-col :xs="24" :sm="24" :md="6" :lg="6">
          <div class="d-flex">
            <div class="spacer"></div>

            <div class="d-flex flex-wrap justify-center">
              <el-form-item class="d-flex justify-center">
                <el-button
                  class="btn-cyan-light w-200 mt-4"
                  @click="additionalChoice = true"
                  >{{ $t("additional-choices") }}</el-button
                >
              </el-form-item>
            </div>
          </div>
        </el-col>
        <el-col :xs="24" :sm="24" :md="8" :lg="10">
          <el-form-item>
            <el-button
              class="text-center width-full mt-4"
              @click="
                form.include_production_orders_whose_residual_value_is_zero =
                  !form.include_production_orders_whose_residual_value_is_zero
              "
              :class="[
                form.include_production_orders_whose_residual_value_is_zero
                  ? 'btn-dark-grey'
                  : 'btn-red',
              ]"
            >
              <span
                v-if="
                  form.include_production_orders_whose_residual_value_is_zero
                "
                >{{
                  $t("include-production-orders-whose-residual-value-is-zero")
                }}
              </span>

              <span v-else>
                {{
                  $t("include-production-orders-whose-residual-value-is-zero")
                }}
              </span>
            </el-button>
          </el-form-item>
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
              <el-col :xs="24" :sm="24" :md="12" :lg="6">
                <el-form-item>
                  <label>{{ $t("from-number") }}</label>
                  <el-input v-model="sub_form.item_price"> </el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="12" :lg="6">
                <el-form-item>
                  <label>{{ $t("to-number") }}</label>
                  <el-input v-model="sub_form.category"> </el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="12" :lg="6">
                <el-form-item>
                  <label>{{ $t("client-name") }}</label>
                  <el-select v-model="sub_form.name" :label="$t('all')">
                    <el-option :label="$t('1')" :value="2"></el-option>
                    <el-option :label="$t('2')" :value="1"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row :gutter="6" class="width-full">
              <el-col :xs="24" :sm="24" :md="12" :lg="6">
                <el-form-item>
                  <label>{{ $t("production-type") }}</label>
                  <el-select v-model="sub_form.branch_name" :label="$t('all')">
                    <el-option :label="$t('1')" :value="2"></el-option>
                    <el-option :label="$t('2')" :value="1"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="12" :lg="6">
                <el-form-item>
                  <label>{{ $t("production-status") }}</label>
                  <el-select v-model="sub_form.item_type" :label="$t('all')">
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
  name: "invoice",

  data: function () {
    return {
      additionalChoice: false,
      form: {
        item_number: 1,
        item_name: 1,
        from_date: 1,
        to_date: 1,
        include_production_orders_whose_residual_value_is_zero: 1,
      },
      sub_form: {},
    };
  },
};
</script>