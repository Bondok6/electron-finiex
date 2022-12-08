<template>
  <el-container class="container box-shadow ma-4 mb-0 px-2 py-3">
    <el-form class="invoice-form width-full" label-position="top" :model="form">
      <el-row :gutter="6" class="width-full">
        <el-col :xs="24" :sm="24" :md="19">
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
            <el-col :xs="24" :sm="24" :md="6" :lg="6">
              <el-form-item :label="$t('supplier')">
                <el-select v-model="form.input" :placeholder="$t('all')">
                  <el-option :label="$t('all')" :value="1"></el-option>
                  <el-option :label="$t('all')" :value="2"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
        </el-col>
        <el-col :xs="24" :sm="24" :md="5">
          <div class="four-button-invoice">
            <!-- -------------- order -------------- -->
            <el-select
              style="display: flex"
              v-model="form.input"
              class="color-blue text-center placeHolderColor selector-mod"
              :placeholder="$t('order')"
            >
              <el-option :label="$t('supplier-name')" :value="1"></el-option>
              <el-option :label="$t('maximum-balance')" :value="2"></el-option>
              <el-option :label="$t('minimum-balance')" :value="3"></el-option>
              <el-option :label="$t('account-number')" :value="4"></el-option>
            </el-select>
            <!---- ------------------ network-commissions-included-for-delegates -------------------- -->

            <!-- ------- additional choice ------ -->
            <el-button
              class="
                text-center
                btn-cyan-light
                width-full
                mt-1
                additionalChoices
              "
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
              <el-col style="padding-right:0;padding-left:0" :xs="24" :sm="24" :md="6" :lg="6">
                <el-form-item>
                  <label>{{ $t("branch") }}</label>
                  <el-select v-model="form.input" :placeholder="$t('main-branch')">
                    <el-option :label="$t('main-branch')" :value="2"></el-option>
                    <el-option :label="$t('main-branch')" :value="1"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col style="padding-right:0;padding-left:0" :xs="24" :sm="24" :md="6" :lg="6">
                <el-form-item>
                  <label>{{ $t("country") }}</label>
                  <el-select v-model="form.input" :placeholder="$t('all')">
                    <el-option :label="$t('all')" :value="2"></el-option>
                    <el-option :label="$t('all')" :value="1"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col style="padding-right:0;padding-left:0" :xs="24" :sm="24" :md="12" :lg="12">
                <el-form-item>
                <label>{{ $t("balance") }}</label>
                  <el-row :gutter="12">
                    
                    <el-col style="padding-right:0;padding-left:0" :xs="10" :sm="10" :md="10" :lg="10">
                      <el-select v-model="form.input" :placeholder="$t('not-equal')">
                        <el-option :label="$t('not-equal')" :value="2"></el-option>
                        <el-option :label="$t('not-equal')" :value="1"></el-option>
                      </el-select>
                    </el-col>
                    <el-col style="padding-right:0;padding-left:0" :xs="10" :sm="10" :md="10" :lg="10">
                      <el-input
                        v-model="input3"
                        class="input-with-select"
                      >
                      </el-input>
                    </el-col>
                  </el-row>
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
      form: {
        delegate_name: 1,
        item_name: 1,
        item_balance: 1,
        category: 1,
        subcategory: "",
        order: "",
        invoice_type: 1,
        input: 1,
        date: 1,
        warehouse: "",
        include_billing_expenses_for_delegates: 1,
        network_commissions_included_for_delegates: 1,
      },
      additionalChoice: false,
      input3: "",
    };
  },
};
</script>

<style lang="scss" scoped>
.four-button-invoice {
  padding-top: 3rem;
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

.font-size-12 {
  span span {
    font-size: 12px !important;
  }
}
</style>
