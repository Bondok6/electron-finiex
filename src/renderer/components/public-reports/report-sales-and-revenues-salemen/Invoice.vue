<template>
  <el-container class="container box-shadow ma-4 mb-0 px-2 py-3">
    <el-form class="invoice-form width-full" label-position="top" :model="form">
      <el-row :gutter="6" class="width-full">
        <el-col :xs="24" :sm="16">
          <el-row :gutter="6" class="width-full">
            <el-col :xs="24" :sm="24" :md="6" :lg="6">
              <el-form-item :label="$t('from-date')">
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
              <el-form-item :label="$t('delegate-name')">
                <el-select :placeholder="$t('all')">
                  <el-option :label="$t('all')" :value="2"></el-option>
                  <el-option :label="$t('all')" :value="1"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="6" class="width-full">
            <el-col :xs="24" :sm="24" :md="6" :lg="6">
              <el-form-item :label="$t('to-date')">
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
                <el-select
                  v-model="form.sss"
                  class="color-blue text-center placeHolderColor width-full-sm"
                  :placeholder="$t('order')"
                >
                  <el-option :label="$t('delegate-name')" :value="1">
                  </el-option>
                  <el-option :label="$t('delegate-number')" :value="2">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item>
                <el-button
                  class="float-left mt-point-5 btn-cyan-light"
                  @click="additionalChoice = true"
                >
                  {{ $t("additional-choices") }}
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
                  <el-col :xs="24" :sm="24" :md="8">
                    <el-form-item>
                      <label>{{ $t("delegate-type") }}</label>
                      <el-select :placeholder="$t('all')">
                        <el-option :label="$t('all')" :value="2"></el-option>
                        <el-option :label="$t('all')" :value="1"></el-option>
                      </el-select>
                    </el-form-item>
                  </el-col>
                  <el-col :xs="24" :sm="24" :md="8">
                    <el-form-item>
                      <label>{{ $t("client-name") }}</label>
                      <el-select :placeholder="$t('all')">
                        <el-option :label="$t('all')" :value="2"></el-option>
                        <el-option :label="$t('all')" :value="1"></el-option>
                      </el-select>
                    </el-form-item>
                  </el-col>
                  <el-col :xs="24" :sm="24" :md="8">
                    <el-form-item>
                      <label>{{ $t("commission-type") }}</label>
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
        commission_type: 1,
        delegate_name: "",
        delegate_type: "",
        customer_name: "",
        input: ""
      },
      additionalChoice: false
    };
  }
};
</script>
