<template>
  <el-container class="container box-shadow ma-4 mb-0 px-2 py-3">
    <el-form class="invoice-form width-full" label-position="top" :model="form">
      <el-row :gutter="6" class="width-full">
        <el-col :xs="24" :sm="24" :md="4" :lg="4">
          <el-form-item :label="$t('from-date')">
            <el-date-picker
              type="date"
              placeholder="2020-10-15"
              v-model="form.from_date"
            ></el-date-picker>
          </el-form-item>
        </el-col>

        <el-col :xs="24" :sm="24" :md="4" :lg="4">
          <el-form-item :label="$t('offer-start')">
            <el-date-picker
              type="date"
              placeholder="2020-10-15"
              v-model="form.offer_start_date"
            ></el-date-picker>
          </el-form-item>
        </el-col>

        <el-col :xs="24" :sm="24" :md="4" :lg="4">
          <el-form-item :label="$t('client-name')">
            <el-select v-model="form.client_name">
                <el-option :label="$t('all')" :value="1"></el-option>
                <el-option :label="$t('all')" :value="2"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row :gutter="6" class="width-full">
        <el-col :xs="24" :sm="24" :md="4" :lg="4">
          <el-form-item :label="$t('to-date')">
            <el-date-picker
              type="date"
              placeholder="2020-10-15"
              v-model="form.to_date"
            ></el-date-picker>
          </el-form-item>
        </el-col>

        <el-col :xs="24" :sm="24" :md="4" :lg="4">
          <el-form-item :label="$t('offer-end')">
            <el-date-picker
              type="date"
              placeholder="2020-10-15"
              v-model="form.offer_end_date"
            ></el-date-picker>
          </el-form-item>
        </el-col>

         <el-col :xs="24" :sm="24" :md="16" :lg="16">
          <div class="inline-button-container d-flex mt-4">
            <!-- spacer -->
            <div class="spacer"></div>
            <el-button 
                class="text-center btn-cyan-light mt-1 px-6 "
                @click="additionalChoice = true"
              >
                {{ $t("additional-choices") }}
            </el-button>
          </div>
        </el-col>
      </el-row> 
    </el-form>

    <el-dialog title=" " :visible.sync="additionalChoice" width="70%">
      <span>
        <el-container class="d-block box-shadow mb-0 px-2 py-2">
          <el-form
            class="invoice-form width-full"
            label-position="top"
            :model="additional_choices"
          >
            <el-row :gutter="6" class="width-full">
              <el-col :xs="24" :sm="24" :md="6" :lg="6">
                <el-form-item>
                  <label>{{ $t("from-number") }}</label>
                  <el-select v-model="additional_choices.from_number">
                    <el-option :label="$t('all')" :value="1"></el-option>
                    <el-option :label="$t('all')" :value="2"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>

              <el-col :xs="24" :sm="24" :md="6" :lg="6">
                <el-form-item>
                  <label>{{ $t("user-name") }}</label>
                  <el-select v-model="additional_choices.user_name">
                    <el-option :label="$t('all')" :value="1"></el-option>
                    <el-option :label="$t('all')" :value="2"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row :gutter="6" class="width-full">
              <el-col :xs="24" :sm="24" :md="6" :lg="6">
                <el-form-item>
                  <label>{{ $t("to-number") }}</label>
                  <el-select v-model="additional_choices.to_number">
                    <el-option :label="$t('all')" :value="1"></el-option>
                    <el-option :label="$t('all')" :value="2"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>

              <el-col :xs="24" :sm="24" :md="6" :lg="6">
                <el-form-item>
                  <label>{{ $t("invoice-type") }}</label>
                  <el-select v-model="additional_choices.user_name">
                    <el-option :label="$t('all')" :value="1"></el-option>
                    <el-option :label="$t('all')" :value="2"></el-option>
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
      order_type: null,
      form: {
        from_date: 1,
        offer_start_date: 1,
        client_name: 1,
        to_date: 1,
        offer_end_date: 1,
      },

      additional_choices: {
        from_number: 1,
        user_name: 1,
        to_number: 1,

      }
    };
  },
};
</script>