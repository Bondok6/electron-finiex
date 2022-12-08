<template>
  <el-container class="container box-shadow ma-4 mb-0 px-2 py-3">
    <el-form class="invoice-form width-full" label-position="top" :model="form">
      <el-row :gutter="6" class="width-full">
        <el-col :xs="24" :sm="24" :md="15">
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
            <el-col :xs="24" :sm="24" :md="8">
              <el-form-item :label="$t('item-number')">
                <el-select v-model="form.input" :placeholder="$t('all')">
                  <el-option :label="$t('all')" :value="1"></el-option>
                  <el-option :label="$t('item-number')" :value="2"></el-option>
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
            <el-col :xs="24" :sm="24" :md="8">
              <el-form-item :label="$t('item-name')">
                <el-select v-model="form.input" :placeholder="$t('all')">
                  <el-option :label="$t('all')" :value="1"></el-option>
                  <el-option :label="$t('item-1')" :value="2"></el-option>
                  <el-option :label="$t('item-2')" :value="3"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
        </el-col>
        <el-col :xs="24" :sm="24" :md="9">
          <div class="four-button-invoice">
            <el-button
              @click="form.include_billing_costs = !form.include_billing_costs"
              :class="[
                form.include_billing_costs ? 'btn-dark-grey' : 'btn-red'
              ]"
              class="width-full mt-1" style="font-size:12px"
            >
            <span v-if="form.include_billing_costs">
              {{ $t('include-billing-costs') }}
            </span>
            <span v-else>
               {{ $t('non-include-billing-costs') }}
            </span>
            </el-button>
            <!-- --------------- order -------------- -->
             <el-select
              v-model="form.input"
              class="color-blue text-center placeHolderColor selector-mod"
              :placeholder="$t('order')"
            >
              <el-option :label="$t('item-name')" :value="1"></el-option>
              <el-option :label="$t('document-number')" :value="2"></el-option>
              <el-option :label="$t('document-date')" :value="3"></el-option>
              <el-option :label="$t('imported-quantity')" :value="4"></el-option>
              <el-option :label="$t('exported-quantity')" :value="5"></el-option>
            </el-select>
            <!-- Include sales invoices associated with the external representative -->
            <el-button
            @click="form.include_sales_invoices_associated_with_external_representative = !form.include_sales_invoices_associated_with_external_representative"
            :class="[
            form.include_sales_invoices_associated_with_external_representative ? 'btn-dark-grey' : 'btn-red'
            ]"
            class="width-full mt-1" style="font-size:12px"
            >
            <span v-if="form.include_sales_invoices_associated_with_external_representative">
              {{ $t('include-sales-invoices-associated-with-external-representative') }}
            </span>
            <span v-else>
              {{ $t('non-include-sales-invoices-associated-with-external-representative') }}
            </span>
            </el-button>
            <!-- addition value -->
             <el-button
              class="text-center btn-cyan-light width-full mt-1 additionalChoices"
              @click="additionalChoice = true"
            >
              {{ $t("additional-choices") }}
            </el-button>
          </div>
        </el-col>
      </el-row>
    </el-form>
    <!-- dialog -->
     <el-dialog title=" " :visible.sync="additionalChoice" width="70%">
      <span>
        <el-container class="d-block box-shadow mb-0 px-2 py-2">
          <el-form
            class="invoice-form width-full mb-8"
            label-position="top"
            :model="form"
          >
            <el-row :gutter="6" class="width-full">
              <el-col :xs="24" :sm="24" :md="6" :lg="6">
                <el-form-item>
                  <label>{{ $t("warehouse-name") }}</label>
                  <el-select :placeholder="$t('all')">
                    <el-option :label="$t('all')" :value="2"></el-option>
                    <el-option :label="$t('all')" :value="1"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="6" :lg="6">
                <el-form-item>
                  <label>{{ $t("document-type") }}</label>
                  <el-select v-model="form.input" :placeholder="$t('all')">
                    <el-option :label="$t('all')" :value="2"></el-option>
                    <el-option :label="$t('all')" :value="1"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row :gutter="6" class="width-full">
              <el-col :xs="24" :sm="24" :md="6" :lg="6">
                <el-form-item>
                  <label>{{ $t("cost-center") }}</label>
                  <el-select v-model="form.input" :placeholder="$t('all')">
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
  </el-container>
</template>

<script>
export default {
  name: "invoice",
  data: function() {
    return {
      form: {
        date: 1,
        input: 1,
        include_billing_costs : 1,
        include_sales_invoices_associated_with_external_representative : 1,
      },
      additionalChoice : false
    };
  }
};
</script>
<style lang="scss" scoped>
.four-button-invoice {
  padding-top: 3rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
  width: 100%;
  margin: auto;
  el-button {
    border-radius: 12px;
  }
}
.selector-mod {
  padding-top: 0.5rem;
}
</style>
