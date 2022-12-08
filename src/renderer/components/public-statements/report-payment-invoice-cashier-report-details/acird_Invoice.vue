<template>
  <el-container class="container box-shadow ma-4 mb-0 px-2 py-3">
    <el-form class="invoice-form width-full" label-position="top" :model="form">
      <el-row :gutter="6" class="width-full">
        <el-col :span="24">
          <el-row :gutter="6">
            <el-col :xs="24" :sm="6" :md="5" :lg="4">
              <el-form-item :label="$t('from-date')">
                <div class="date-time">
                  <el-date-picker
                    type="datetime"
                    placeholder="2020-10-15"
                    format="yyyy-MM-dd HH:mm"
                    Value-format="yyyy-MM-dd HH:mm"
                    v-model="form.from_date"
                  >
                  </el-date-picker>
                  <div class="time-display">
                    <span>11:11</span>
                    <span class="spacer"></span>
                    <span>AM</span>
                  </div>
                </div>
              </el-form-item>
            </el-col>
          </el-row>
        </el-col>

        <el-col :span="24">
          <el-row :gutter="6">
            <el-col :xs="24" :sm="6" :md="5" :lg="4">
              <el-form-item :label="$t('from-date')">
                <div class="date-time">
                  <el-date-picker
                    type="datetime"
                    placeholder="2020-10-15"
                    format="yyyy-MM-dd HH:mm"
                    Value-format="yyyy-MM-dd HH:mm"
                    v-model="form.to_date"
                  >
                  </el-date-picker>
                  <div class="time-display">
                    <span>11:11</span>
                    <span class="spacer"></span>
                    <span>AM</span>
                  </div>
                </div>
              </el-form-item>
            </el-col>

            <el-col :xs="24" :sm="18" :md="19" :lg="19" class="mt-40">
              <div class="inline-button-container d-flex">
                <div class="spacer"></div>
                <el-button
                  class="text-center btn-cyan-light px-6"
                  @click="additionalChoice = true"
                >
                  {{ $t("additional-choices") }}
                </el-button>
              </div>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </el-form>
    <el-dialog title=" " :visible.sync="additionalChoice" width="70%">
      <span>
        <el-container class="d-block box-shadow mb-0 px-2 py-2">
          <el-form
            class="invoice-form width-full"
            label-position="top"
            :model="form"
          >
            <el-row :gutter="6" class="width-full">
              <el-col :xs="24" :sm="24" :md="6" :lg="6">
                <el-form-item>
                  <label>{{ $t("from-number") }}</label>
                  <el-select v-model="form.from_number">
                    <el-option :label="$t('all')" :value="2"></el-option>
                    <el-option :label="$t('all')" :value="1"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>

              <el-col :xs="24" :sm="24" :md="6" :lg="6">
                <el-form-item>
                  <label>{{ $t("user-name") }}</label>
                  <el-select v-model="form.user_name">
                    <el-option :label="$t('all')" :value="2"></el-option>
                    <el-option :label="$t('all')" :value="1"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>

              <el-col :xs="24" :sm="24" :md="6" :lg="6">
                <el-form-item>
                  <label>{{ $t("driver-name") }}</label>
                  <el-select v-model="form.driver_name">
                    <el-option :label="$t('all')" :value="2"></el-option>
                    <el-option :label="$t('all')" :value="1"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>

              <el-col :xs="24" :sm="24" :md="6" :lg="6">
                <el-form-item>
                  <label>{{ $t("amount") }}</label>
                  <el-row :gutter="6">
                    <el-col :span="14">
                      <el-select v-model="form.amount">
                        <el-option :label="$t('equals')" :value="2"></el-option>
                        <el-option :label="$t('equals')" :value="1"></el-option>
                      </el-select>
                    </el-col>
                    <el-col :span="10" class="amount-append">
                      <el-input
                        class="text-center"
                        v-model="form.transfer_number"
                        placeholder="55"
                      >
                      </el-input>
                    </el-col>
                  </el-row>
                </el-form-item>
              </el-col>

              <el-col :xs="24" :sm="24" :md="6" :lg="6">
                <el-form-item>
                  <label>{{ $t("to-number") }}</label>
                  <el-select v-model="form.to_number">
                    <el-option :label="$t('all')" :value="2"></el-option>
                    <el-option :label="$t('all')" :value="1"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>

              <el-col :xs="24" :sm="24" :md="6" :lg="6">
                <el-form-item>
                  <label>{{ $t("delegate-name") }}</label>
                  <el-select v-model="form.delegate_name">
                    <el-option :label="$t('all')" :value="2"></el-option>
                    <el-option :label="$t('all')" :value="1"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>

              <el-col :xs="24" :sm="24" :md="6" :lg="6">
                <el-form-item>
                  <label>{{ $t("box-bank") }}</label>
                  <el-select v-model="form.box_bank">
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
  </el-container>
</template>


<script>
export default {
  name: "invoice",

  data: function () {
    return {
      additionalChoice: false,

      form: {
        from_number: 1,
        to_number: 1,
        user_name: 1,
        driver_name: 1,
        amount: null,
        transfer_number: null,
        delegate_name: 1,
        box_bank: 1,
      },
    };
  },
};
</script>

<style lang="scss" scoped>

</style>