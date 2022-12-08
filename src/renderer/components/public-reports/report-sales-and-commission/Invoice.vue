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
                  format="yyyy-MM-dd"
                  Value-format="yyyy-MM-dd"
                  v-model="form.date"
                ></el-date-picker>
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="24" :md="6" :lg="6">
              <el-form-item :label="$t('delegate-name')">
                <el-select v-model="form.input" :placeholder="$t('all')">
                  <el-option :label="$t('all')" :value="1"></el-option>
                  <el-option :label="$t('all')" :value="2"></el-option>
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
                  format="yyyy-MM-dd"
                  Value-format="yyyy-MM-dd"
                  v-model="form.date"
                ></el-date-picker>
              </el-form-item>
            </el-col>
          </el-row>
        </el-col>
        <el-col :xs="24" :sm="24" :md="9">
          <div class="four-button-invoice">
            <el-button
              @click="
                form.include_billing_expenses_for_delegates = !form.include_billing_expenses_for_delegates
              "
              :class="[
                form.include_billing_expenses_for_delegates
                  ? 'btn-dark-grey'
                  : 'btn-red'
              ]"
              class="width-full mt-1 font-size-12"
            >
              <span v-if="form.include_billing_expenses_for_delegates">
                {{ $t("include-billing-expenses-for-delegates") }}
              </span>
              <span v-else>
                {{ $t("non-include-billing-expenses-for-delegates") }}
              </span>
            </el-button>
            <!-- -------------- order -------------- -->
            <el-select
              v-model="form.order"
              class="color-blue text-center placeHolderColor selector-mod"
              :placeholder="$t('order')"
            >
              <el-option :label="$t('client-name')" :value="1"></el-option>
              <el-option :label="$t('invoice-number')" :value="2"></el-option>
              <el-option :label="$t('invoice-date')" :value="3"></el-option>
              <el-option :label="$t('highest-profit')" :value="4"></el-option>
              <el-option :label="$t('lowest-profit')" :value="5"></el-option>
              <el-option :label="$t('quantity')" :value="6"></el-option>
            </el-select>
            <!---- ------------------ network-commissions-included-for-delegates -------------------- -->
            <el-button
              @click="
                form.network_commissions_included_for_delegates = !form.network_commissions_included_for_delegates
              "
              :class="[
                form.network_commissions_included_for_delegates
                  ? 'btn-dark-grey'
                  : 'btn-red'
              ]"
              class="width-full mt-1"
            >
              <span v-if="form.network_commissions_included_for_delegates">
                {{ $t("network-commissions-included-for-delegates") }}
              </span>
              <span v-else>
                {{ $t("non-network-commissions-included-for-delegates") }}
              </span>
            </el-button>
            <!-- ------- additional choice ------ -->
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
              <el-col :xs="24" :sm="24" :md="8">
                <el-form-item>
                  <label>{{ $t("item-number") }}</label>
                  <el-select :placeholder="$t('all')">
                    <el-option :label="$t('all')" :value="2"></el-option>
                    <el-option :label="$t('all')" :value="1"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="8">
                <el-form-item>
                  <label>{{ $t("invoice-type") }}</label>
                  <el-select v-model="form.input" :placeholder="$t('all')">
                    <el-option :label="$t('all')" :value="2"></el-option>
                    <el-option :label="$t('all')" :value="1"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="8">
                <el-form-item>
                  <label>{{ $t("category") }}</label>
                  <el-select v-model="form.input" :placeholder="$t('all')">
                    <el-option :label="$t('all')" :value="2"></el-option>
                    <el-option :label="$t('all')" :value="1"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row :gutter="6" class="width-full">
              <el-col :xs="24" :sm="24" :md="8">
                <el-form-item>
                  <label>{{ $t("item-name") }}</label>
                  <el-select v-model="form.input" :placeholder="$t('all')">
                    <el-option :label="$t('all')" :value="2"></el-option>
                    <el-option :label="$t('all')" :value="1"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="8">
                <el-form-item>
                  <label>{{ $t("sub-category") }}</label>
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
  </el-container>
</template>

<script>
export default {
  name: "invoice",

  data: function() {
    return {
      form: {
        delegate_name: 1,
        item_name: 1,
        item_number: 1,
        category: 1,
        subcategory: "",
        order: "",
        invoice_type: 1,
        input: 1,
        date: 1,
        warehouse: "",
        include_billing_expenses_for_delegates: 1,
        network_commissions_included_for_delegates: 1
      },
      additionalChoice: false
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

.font-size-12{
  span span{
    font-size: 12px !important;
  }
}
</style>
