<template>
  <el-container class="container box-shadow ma-4 mb-0 px-2 py-3 pb-1">
    <el-form class="invoice-form width-full" label-position="top" :model="form">
      <el-row :gutter="6" class="width-full">
        <el-col :xs="24" :sm="24" :md="12" :lg="12">
          <el-row :gutter="6" class="width-full">
            <el-col :xs="24" :sm="24" :md="8" :lg="8">
              <el-form-item :label="$t('from-date')">
                <el-date-picker
                  type="date"
                  placeholder="2020-10-15"
                  v-model="form.from_date"
                ></el-date-picker>
              </el-form-item>
            </el-col>

            <el-col :xs="24" :sm="24" :md="8" :lg="8">
              <el-form-item :label="$t('period')">
                <el-select v-model="form.period">
                  <el-option :label="$t('monthly')" :value="1"></el-option>
                  <el-option :label="$t('monthly')" :value="2"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row :gutter="6" class="width-full">
            <el-col :xs="24" :sm="24" :md="8" :lg="8">
              <el-form-item :label="$t('to-date')">
                <el-date-picker
                  type="date"
                  placeholder="2020-10-15"
                  v-model="form.to_date"
                ></el-date-picker>
              </el-form-item>
            </el-col>
          </el-row>
        </el-col>
        <el-col :xs="24" :sm="24" :md="12" :lg="12">
          <div class="four-button-invoice">
            <!---------------------- additilona-choices ---------------------->
            <el-button
              class="text-center btn-cyan-light width-full mt-1 btn-top btn-left"
              @click="additionalChoice = true"
            >
              {{ $t("additional-choices") }}
            </el-button>
            <!---------------------- include-invoice-transactions ---------------------->
            <el-button
              @click="include_invoices_transfers = !include_invoices_transfers"
              :class="[
                include_invoices_transfers ? 'btn-dark-grey' : 'btn-red'
              ]"
              class="width-full mt-1 btn-bottom btn-left"
            >
              <span v-show="include_invoices_transfers"> 
                {{ $t("include-invoice-transfer-between-branches") }} 
              </span>
              <span v-show="!include_invoices_transfers"> 
                {{ $t("do-not-include-invoice-transfer-between-branches") }} 
              </span>
            </el-button>
            <!---------------------- include-total-returns-and-expenses ---------------------->
            <el-button
              @click="include_total_returns_expenses = !include_total_returns_expenses"
              :class="[
                include_total_returns_expenses ? 'btn-dark-grey' : 'btn-red'
              ]"
              class="width-full mt-1 btn-bottom btn-right"
            >
              <span v-show="include_total_returns_expenses"> 
                {{ $t("include-total-returns-and-expenses") }} 
              </span>
              <span v-show="!include_total_returns_expenses"> 
                {{ $t("do-not-include-total-returns-and-expenses") }} 
              </span>
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
            class="invoice-form width-full"
            label-position="top"
            :model="additional_choices"
          >
            <el-row :gutter="6" class="width-full">
              <el-col :xs="24" :sm="24" :md="6" :lg="6">
                <el-form-item>
                  <label>{{ $t("item-number") }}</label>
                  <el-select v-model="additional_choices.item_number">
                    <el-option :label="$t('all')" :value="1"></el-option>
                    <el-option :label="$t('all')" :value="2"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>

              <el-col :xs="24" :sm="24" :md="6" :lg="6">
                <el-form-item>
                  <label>{{ $t("item-name") }}</label>
                  <el-select v-model="additional_choices.item_name">
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
            </el-row>

            <el-row :gutter="6" class="width-full">
              <el-col :xs="24" :sm="24" :md="6" :lg="6">
                <el-form-item>
                  <label>{{ $t("client") }}</label>
                  <el-select v-model="additional_choices.client">
                    <el-option :label="$t('all')" :value="1"></el-option>
                    <el-option :label="$t('all')" :value="2"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>

              <el-col :xs="24" :sm="24" :md="6" :lg="6">
                <el-form-item>
                  <label>{{ $t("delegate") }}</label>
                  <el-select v-model="additional_choices.delegate">
                    <el-option :label="$t('all')" :value="1"></el-option>
                    <el-option :label="$t('all')" :value="2"></el-option>
                  </el-select>                
                </el-form-item>
              </el-col>

              <el-col :xs="24" :sm="24" :md="6" :lg="6">
                <el-form-item>
                  <label>{{ $t("sub-category") }}</label>
                  <el-select v-model="additional_choices.sub_category">
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

  data: function() {
    return {
      form: {
        to_date: "",
        from_date: "",
        period: 1,
      },
      additional_choices: {
        item_number: 1,
        item_name: 1,
        category: 1,
        client: 1,
        delegate: 1,
        sub_category: 1,
      },
      additionalChoice: false,
      include_invoices_transfers: true,
      include_total_returns_expenses: true,
    };
  },
};
</script>

<style lang="scss" scoped>
.four-button-invoice {
  padding-top: 3.5rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 10px;
  width: 100%;
  margin: auto;
}
.selector-mod {
  padding-top: 0.5rem;
}

.btn-top {
  grid-row: 1/2;
}
.btn-bottom {
  grid-row: 2/3;
}

.btn-right {
  grid-column: 1/2;
}
.btn-left{
  grid-column: 2/3;
}
</style>
