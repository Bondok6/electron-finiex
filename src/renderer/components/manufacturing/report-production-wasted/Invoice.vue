<template>
  <el-container class="container box-shadow ma-4 mb-0 px-2 py-3">
    <el-form class="invoice-form width-full" label-position="top" :model="form">
      <el-row :gutter="6" class="width-full">
        <el-col :span="24">
          <el-row :gutter="6">
            <el-col :xs="24" :sm="6" :md="5" :lg="4">
              <el-form-item :label="$t('from-the-delivery-order-date')">
                <el-input v-model="form.from_order_delivery" placeholder="14">
                </el-input>
              </el-form-item>
            </el-col>

            <el-col :xs="24" :sm="6" :md="5" :lg="4">
              <el-form-item :label="$t('to-the-delivery-order-date')">
                <el-date-picker
                  type="date"
                  placeholder="2020-10-15"
                  v-model="form.start_date"
                ></el-date-picker>
              </el-form-item>
            </el-col>

            <el-col :xs="24" :sm="6" :md="5" :lg="4">
              <el-form-item :label="$t('batch-number')">
                <el-input v-model="form.batch_number" placeholder="14">
                </el-input>
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="14" :md="8" :lg="12">
              <div class="inline-button-container d-flex mt-2">
                <div class="spacer"></div>
                <el-button
                  class="text-center w-250 btn-cyan-light mt-3"
                  @click="Dialog = true"
                >
                  {{ $t("additional-choices") }}
                </el-button>
              </div>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </el-form>
    <el-dialog title=" " :visible.sync="Dialog" width="70%">
      <span>
        <el-container class="container box-shadow mb-0 px-2 py-2">
          <el-form class="invoice-form" label-position="top" :model="sub_form">
            <el-row :gutter="6">
              <el-col :span="24">
                <el-row :gutter="6">
                  <el-col :xs="24" :sm="24" :md="6" :lg="6">
                    <el-form-item :label="$t('from-delevry-order-number')">
                      <el-input v-model="sub_form.from_number"></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :xs="24" :sm="24" :md="6" :lg="6">
                    <el-form-item :label="$t('to-delevry-order-number')">
                      <el-input v-model="sub_form.to_number"></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :xs="24" :sm="24" :md="6" :lg="6">
                    <el-form-item :label="$t('production-hours')">
                      <el-input v-model="sub_form.production_hours"></el-input>
                    </el-form-item>
                  </el-col>
                </el-row>
              </el-col>

              <el-col :span="24" class="mt-2">
                <el-row :gutter="6">
                  <el-col :xs="24" :sm="24" :md="6" :lg="6">
                    <el-form-item :label="$t('from-production-order-number')">
                      <el-input
                        v-model="sub_form.from_production_number"
                      ></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :xs="24" :sm="24" :md="6" :lg="6">
                    <el-form-item :label="$t('to-production-order-number')">
                      <el-input
                        v-model="sub_form.to_production_number"
                      ></el-input>
                    </el-form-item>
                  </el-col>
                </el-row>
              </el-col>
            </el-row>
          </el-form>
        </el-container>
      </span>
      <span slot="footer" class="dialog-footer">
        <el-button class="btn-cyan-light" @click="Dialog = false">{{
          $t("agree")
        }}</el-button>
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
      form: {
        to_order_delivery: "",
        from_order_delivery: "",
        batch_number: "",
      },
      sub_form: {
        form_number: "",
        to_number: "",
        form_production_number: "",
        to_production_number: "",
        production_hours: "",
      },
    };
  },
};
</script>