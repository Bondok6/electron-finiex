<template>
  <el-container class="container box-shadow ma-4 mb-0 px-2 py-3">
    <el-form class="invoice-form width-full" label-position="top" :model="form">
      <el-row :gutter="6" class="width-full">
        <el-col :xs="24" :sm="24" :md="15">
          <el-row :gutter="6" class="width-full">
            <el-col :xs="24" :sm="8" :md="8">
              <el-form-item :label="$t('item-number')">
                <el-select v-model="form.cost">
                  <el-option :label="$t('all')" :value="1"></el-option>
                  <el-option :label="$t('all')" :value="2"></el-option>
                </el-select>
              </el-form-item>
            </el-col>

            <el-col :xs="24" :sm="8" :md="8">
              <el-form-item :label="$t('item-name')">
                <el-select v-model="form.branch">
                  <el-option :label="$t('main-branch')" :value="1"></el-option>
                  <el-option :label="$t('main-branch')" :value="2"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="6" class="width-full">
            <el-col :xs="24" :sm="8" :md="8" >
              <el-form-item :label="$t('from-date')">
                <el-date-picker
                  type="date"
                  placeholder="2020-10-15"
                  v-model="form.date"
                ></el-date-picker>
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="8" :md="8" >
              <el-form-item :label="$t('to-date')">
                <el-date-picker
                  type="date"
                  placeholder="2020-10-15"
                  v-model="form.date"
                ></el-date-picker>
              </el-form-item>
            </el-col>
          </el-row>
        </el-col>

        <el-col :xs="24" :sm="24" :md="9">
          <div class="four-button-invoice">
            <!-----order ---->
            <el-select
              v-model="form.type"
              class="
                color-blue
                text-center
                placeHolderColor
                selector-mod
                class_a
              "
              :placeholder="$t('order-by')"
            >
              <el-option :label="$t('client-name')" :value="1"></el-option>
              <el-option :label="$t('invoice-number')" :value="2"></el-option>
              <el-option :label="$t('invoice-date')" :value="3"></el-option>
              <el-option :label="$t('highest-profit')" :value="1"></el-option>
              <el-option :label="$t('lowest-profit')" :value="2"></el-option>
              <el-option :label="$t('quantity')" :value="3"></el-option>
            </el-select>

            <!-- show item quantites -->
            <el-button
              @click="form.show_item_quantity = !form.show_item_quantity"
              :class="[form.show_item_quantity ? 'btn-dark-grey' : 'btn-red']"
              class="width-full mt-1 text-center class_b"
            >
              <span v-if="form.show_item_quantity">
                {{ $t("include-invoice-transfer-between-branches") }}
              </span>

              <span v-else>
                {{ $t("do-not-include-invoice-transfer-between-branches") }}
              </span>
            </el-button>

            <!---- extras---->
            <el-button
              class="
                text-center
                btn-cyan-light
                width-full
                mt-1
                additionalChoices
                class_c
              "
              @click="additionalChoice = true"
            >
              {{ $t("additional-choices") }}
            </el-button>
          </div>
        </el-col>
      </el-row>
    </el-form>

    <!---------------- dialog ------------------>

    <el-dialog title=" " :visible.sync="additionalChoice" width="80%">
      <span>
        <el-container class="d-block box-shadow mb-0 px-2 py-2">
          <el-form
            class="invoice-form width-full"
            label-position="top"
            :model="form"
          >
            <el-row :gutter="6" class="width-full">
              <el-col :xs="24" :sm="24" :md="6">
                <el-form-item>
                  <label>{{ $t("warehouse-name") }}</label>
                  <el-select v-model="form.form">
                    <el-option :label="$t('all')" :value="2"></el-option>
                    <el-option :label="$t('all')" :value="1"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="6">
                <el-form-item>
                  <label>{{ $t("client-name") }}</label>
                  <el-select v-model="form.form">
                    <el-option :label="$t('all')" :value="2"></el-option>
                    <el-option :label="$t('all')" :value="1"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>

              <el-col :xs="24" :sm="24" :md="6">
                <el-form-item>
                  <label>{{ $t("category") }}</label>
                  <el-select v-model="form.form">
                    <el-option :label="$t('all')" :value="2"></el-option>
                    <el-option :label="$t('all')" :value="1"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>

              <el-col :xs="24" :sm="24" :md="6">
                <el-form-item>
                  <label>{{ $t("invoice-type") }}</label>
                  <el-select v-model="form.form">
                    <el-option :label="$t('all')" :value="2"></el-option>
                    <el-option :label="$t('all')" :value="1"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>

              <el-col :xs="24" :sm="24" :md="6">
                <el-form-item>
                  <label>{{ $t("company-name") }}</label>
                  <el-select v-model="form.form">
                    <el-option :label="$t('all')" :value="2"></el-option>
                    <el-option :label="$t('all')" :value="1"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="6">
                <el-form-item>
                  <label>{{ $t("delegate-name") }}</label>
                  <el-select v-model="form.form">
                    <el-option :label="$t('all')" :value="2"></el-option>
                    <el-option :label="$t('all')" :value="1"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>

              <el-col :xs="24" :sm="24" :md="6">
                <el-form-item>
                  <label>{{ $t("sub-category") }}</label>
                  <el-select v-model="form.form">
                    <el-option :label="$t('all')" :value="2"></el-option>
                    <el-option :label="$t('all')" :value="1"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>

              <el-col :xs="24" :sm="24" :md="6">
                <el-form-item>
                  <label>{{ $t("balance") }}</label>
                  <el-row :gutter="6">
                    <el-col :span="14">
                      <el-select v-model="form.form">
                        <el-option :label="$t('equals')" :value="2"></el-option>
                        <el-option :label="$t('equals')" :value="1"></el-option>
                      </el-select>
                    </el-col>
                    <el-col :span="11" class="amount-append">
                      <el-input
                        class="text-color text-center text-background-color"
                        v-model="form.transfer_number"
                        placeholder="55"
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
      additionalChoice: false,
      form: {
        form: 1,
        item_name: 1,
        item_number: 1,
        category: 1,
        subcategory: "",
        order: "",
        invoice_type: 1,
        warehouse: "",
        item_type: 1,
        branch: 1,
        company_name: 1,
        item_price: 1,
        unit: 1,
        quantity: 1,
        document_type: 1,
        item_status: 1,
        cost: 1,
        balance: 1,
        show_item_price: 1,
        show_item_quantity: 1,
      },
    };
  },
};
</script>

<style lang="scss" >
.four-button-invoice {
  padding-top: 3rem;
  display: grid;
  grid-template-areas:
    "d a"
    "b c";
  grid-gap: 10px;
  width: 100%;
  margin: auto;
  el-button {
    border-radius: 12px;
  }
  .class_a {
    grid-area: a;
  }
  .class_b {
    grid-area: b;
  }
  .class_c {
    grid-area: c;
  }
  .class_d {
    grid-area: d;
  }
}

.selector-mod {
  padding-top: 0.5rem;
}
.additionalChoices {
  margin-left: -0.1rem;
}
.text-background-color .el-input__inner {
  background-color: #feffdc;
}
</style>
