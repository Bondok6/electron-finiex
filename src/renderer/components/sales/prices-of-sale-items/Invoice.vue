<template>
  <el-container class="container box-shadow ma-4 mb-0 px-2 py-3">
    <el-form class="invoice-form width-full" label-position="top" :model="form">
      <el-row :gutter="6" class="width-full">
        <el-col :xs="24" :sm="24" :md="12">
          <el-row :gutter="6" class="width-full">
            <el-col :xs="24" :sm="24" :md="8" :lg="8">
              <el-form-item :label="$t('item-number')">
                <el-select v-model="form.item_number">
                  <el-option :label="$t('14')" :value="1"></el-option>
                  <el-option :label="$t('14')" :value="2"></el-option>
                </el-select>
              </el-form-item>
            </el-col>

            <el-col :xs="24" :sm="24" :md="8" :lg="8">
              <el-form-item :label="$t('from-date')">
                <el-date-picker
                  type="date"
                  placeholder="2020-10-15"
                  v-model="form.from_date"
                ></el-date-picker>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row :gutter="6" class="width-full">
            <el-col :xs="24" :sm="24" :md="8" :lg="8">
              <el-form-item :label="$t('item-name')">
                <el-select v-model="form.item_name">
                  <el-option :label="$t('all')" :value="1"></el-option>
                  <el-option :label="$t('all')" :value="2"></el-option>
                </el-select>
              </el-form-item>
            </el-col>

            <el-col :xs="24" :sm="24" :md="8" :lg="8">
              <el-form-item :label="$t('to-date')">
                <el-date-picker
                  type="date"
                  placeholder="2020-10-15"
                  v-model="form.to_delivery_date"
                ></el-date-picker>
              </el-form-item>
            </el-col>
          </el-row>
        </el-col>

        <el-col :xs="24" :sm="24" :md="12">
          <div class="inline-button-container d-flex flex-direction-column mt">
            <div class="vertical-buttons">
              <el-select
                v-model="order_type"
                class="color-blue text-center placeHolderColor mb-1"
                :placeholder="$t('order')"
              >
                <el-option :label="$t('highest-price')" :value="1"></el-option>
                <el-option :label="$t('lowest-price')" :value="2"></el-option>
                <el-option :label="$t('invoice-number')" :value="3"></el-option>
                <el-option :label="$t('invoice-date')" :value="4"></el-option>
                <el-option :label="$t('client-name')" :value="5"></el-option>
                <el-option :label="$t('item-number')" :value="6"></el-option>
                <el-option :label="$t('item-name')" :value="7"></el-option>
              </el-select>

              <el-button
                class="text-center btn-cyan-light width-full mt-1"
                @click="additionalChoice = true">
                {{ $t("additional-choices") }}
              </el-button>
            </div>
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
                  <label>{{ $t("client-name") }}</label>
                  <el-select v-model="additional_choices.client_name">
                    <el-option :label="$t('all')" :value="1"></el-option>
                    <el-option :label="$t('all')" :value="2"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>

              <el-col :xs="24" :sm="24" :md="6" :lg="6">
                <el-form-item>
                  <label>{{ $t("delegate-name") }}</label>
                  <el-select v-model="additional_choices.delegate_name">
                    <el-option :label="$t('all')" :value="1"></el-option>
                    <el-option :label="$t('all')" :value="2"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>

              <el-col :xs="24" :sm="24" :md="6" :lg="6">
                <el-form-item>
                  <label>{{ $t("category") }}</label>
                  <el-select v-model="additional_choices.category">
                    <el-option :label="$t('all')" :value="1"></el-option>
                    <el-option :label="$t('all')" :value="2"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>

              <el-col :xs="24" :sm="24" :md="6" :lg="6">
                <el-form-item>
                  <label>{{ $t("invoice-type") }}</label>
                  <el-select v-model="additional_choices.invoice_type">
                    <el-option :label="$t('cash-and-postponed')" :value="1"></el-option>
                    <el-option :label="$t('postponed')" :value="2"></el-option>
                    <el-option :label="$t('cash')" :value="3"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row :gutter="6" class="width-full">
              <el-col :xs="24" :sm="24" :md="6" :lg="6">
                <el-form-item>
                  <label>{{ $t("company-name") }}</label>
                  <el-select v-model="additional_choices.company_name">
                    <el-option :label="$t('all')" :value="1"></el-option>
                    <el-option :label="$t('all')" :value="2"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>

              <el-col :xs="24" :sm="24" :md="6" :lg="6">
                <el-form-item>
                  <label>{{ $t("unit") }}</label>
                  <el-select v-model="additional_choices.unit">
                    <el-option :label="$t('all')" :value="1"></el-option>
                    <el-option :label="$t('all')" :value="2"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>

              <el-col :xs="24" :sm="24" :md="6" :lg="6">
                <el-form-item>
                  <label>{{ $t("customer-branch") }}</label>
                  <el-select v-model="additional_choices.client_branch">
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
        item_name: 1,
        item_number: 1,
        from_date: 1,
        to_date: 1,
      },

      additional_choices: {
        client_name: 1,
        delegate_name: 1,
        category: 1,
        invoice_type: 1,
        company_name: 1,
        unit: 1,
        client_branch: 2
      }
    };
  },
};
</script>

<style lang="scss" scoped>
.mt {
  margin-top: 1.7rem;
}
</style>