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
              <el-form-item :label="$t('item-number')">
                <el-select v-model="form.item_number">
                  <el-option :label="$t('14')" :value="1"></el-option>
                  <el-option :label="$t('14')" :value="2"></el-option>
                </el-select>
              </el-form-item>
            </el-col>

            <el-col :xs="24" :sm="24" :md="4" :lg="4">
              <el-form-item :label="$t('item-name')">
                <el-select v-model="form.item_name">
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
                  v-model="form.to_delivery_date"
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

            <el-col :xs="24" :sm="24" :md="6" :lg="6" class="to-the-side-ar to-the-side-en">
              <div style="padding-top: 2.05rem;">
                <el-button
                  class="text-center btn-cyan-light width-full mt-1"
                  @click="additionalChoice = true">
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
                  <label>{{ $t("classification-name") }}</label>
                  <el-select v-model="additional_choices.classification_name">
                    <el-option :label="$t('all')" :value="1"></el-option>
                    <el-option :label="$t('all')" :value="2"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>

              <el-col :xs="24" :sm="24" :md="6" :lg="6">
                <el-form-item>
                  <label>{{ $t("sub-category") }}</label>
                  <el-select v-model="additional_choices.subـcategory">
                    <el-option :label="$t('all')" :value="1"></el-option>
                    <el-option :label="$t('all')" :value="2"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>

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
                  <label>{{ $t("invoice-type") }}</label>
                  <el-select v-model="additional_choices.invoice_type">
                    <el-option :label="$t('cash-and-postponed')" :value="1"></el-option>
                    <el-option :label="$t('postponed')" :value="2"></el-option>
                    <el-option :label="$t('cash')" :value="3"></el-option>
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
        client_name: 1,
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
[dir='rtl'] {
  .to-the-side-ar {
    float: left;
  }
}
.to-the-side-en {
  float: right;
}
</style>