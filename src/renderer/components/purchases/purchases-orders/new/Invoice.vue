<template>
  <el-container class="container  box-shadow ma-4 mb-0 px-2 py-3">
    <el-form class="invoice-form width-full" label-position="top" :model="form">
      <el-row :gutter="6" class="width-full">
        <el-col :xs="24" :sm="24" :md="18">
          <el-row :gutter="6">
            <el-col :span="24">
              <el-row :gutter="6">
                <el-col :xs="24" :sm="24" :md="8" :lg="4">
                  <el-form-item>
                    <label>{{ $t("invoice-number") }}</label>
                    <el-input
                      class="text-color bl-none"
                      v-model="form.input"
                      placeholder="14"
                    >
                      <template slot="append"
                        ><i class="el-icon-search"></i
                      ></template>
                    </el-input>
                  </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="24" :md="8" :lg="4">
                  <el-form-item>
                    <label>{{ $t("invoice-date") }}</label>
                    <el-date-picker
                      type="datetime"
                      placeholder="2020-10-15"
                      format="yyyy-MM-dd HH:mm"
                      Value-format="yyyy-MM-dd HH:mm"
                      v-model="form.date"
                    ></el-date-picker>
                  </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="24" :md="8" :lg="4">
                  <el-form-item>
                    <label>{{ $t("invoice-type") }}</label>
                    <el-select v-model="form.invoice_type">
                      <el-option :label="$t('postponed')" :value="1"></el-option>
                      <el-option :label="$t('cash')" :value="2"></el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="24" :md="8" :lg="4">
                  <el-form-item :label="$t('supplier-name')">
                    <div class="select-container">
                      <el-select
                        v-model="form.supplier_name"
                        placeholder=""
                        class="input-menu"
                      >
                        <div
                          class="add-btn add-btn-red"
                          @click="addNewSupplier()"
                        >
                          {{ $t("add") }}
                          <i class="el-icon-plus mx-1"></i>
                        </div>
                        <el-option :label="$t('supplier-1')" :value="1" />
                        <el-option :label="$t('supplier-2')" :value="2" />
                      </el-select>
                    </div>
                  </el-form-item>
                </el-col>

                <el-col :xs="24" :sm="6" :md="6" :lg="4">
                  <el-form-item :label="$t('currency-exchange-price')" class="text-center pa-0">
                  <el-row :gutter="6">
                    <el-col :span="12">
                      <el-select v-model="form.currency">
                        <el-option class="selectButton" label="ر.س" :value="1">
                          <el-button class="width-full" @click="show_currency()">ر.س</el-button>
                        </el-option>
                        <el-option class="selectButton" label="ج.م" :value="2">
                          <el-button class="width-full" @click="show_currency()">ج.م</el-button>
                        </el-option>
                      </el-select>
                    </el-col>
                    <el-col :span="12">
                      <el-input
                        class="text-center"
                        v-model="form.price"
                        placeholder=""
                      >
                      </el-input>
                    </el-col>
                  </el-row>
                </el-form-item>
                </el-col>
              </el-row>
            </el-col>
          </el-row>
        </el-col>

        <el-col :xs="24" :sm="24" :md="6">
          <div class="inline-button-container d-flex flex-direction-column">
            <div class="vertical-buttons">
              <el-form-item>
                <el-select
                  v-model="form.sss"
                  class="
                      color-blue
                      text-center
                      placeHolderColor
                      width-full-sm
                    "
                  :placeholder="$t('invoice-options')"
                >
                  <el-option
                    :label="$t('items-buying-prices')"
                    :value="3"
                    class="selectButton"
                  >
                    <NuxtLink
                      :to="localePath('/purchases/purchase-price-of-items')"
                    >
                      <el-button class="width-full">
                        {{ $t("items-buying-prices") }}
                      </el-button>
                    </NuxtLink>
                  </el-option>
                  <el-option
                    :label="$t('item-sales-prices')"
                    :value="4"
                    class="selectButton"
                  >
                    <NuxtLink :to="localePath('/sales/prices-of-sale-items')">
                      <el-button class="width-full">
                        {{ $t("item-sales-prices") }}
                      </el-button>
                    </NuxtLink>
                  </el-option>
                  <el-option
                    :label="$t('attach-a-file')"
                    :value="6"
                    class="selectButton"
                  >
                    <el-button
                      class="width-full"
                      @click="openAttachFileDialog()"
                    >
                      {{ $t("attach-a-file") }}
                    </el-button>
                  </el-option>
                </el-select>
              </el-form-item>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="6" class="width-full info">
        <div class="info-card amounts">24 حبة و 12 كرتونة</div>
      </el-row>
    </el-form>
    <!-- attach file -->
    <attach-file />
    <el-dialog :visible.sync="addSupplier" width="40%">
      <span>
        <el-container class="d-block box-shadow mb-0 px-2 py-2">
          <el-form class="invoice-form width-full" label-position="top">
            <el-row :gutter="6" class="width-full">
              <el-col :xs="24" :sm="24" :md="24" :lg="24">
                <el-form-item>
                  <h3 class="text-center" style="color:#28B4B3">{{
                    $t("supplier-name")
                  }}</h3>
                  <el-input v-model="form.supplier_name" />
                </el-form-item>
              </el-col>
            </el-row>

            <el-row :gutter="6" class="width-full">
              <el-col :xs="24" :sm="24" :md="24" :lg="24">
                <el-form-item>
                  <h3 class="text-center" style="color:#28B4B3">{{
                    $t("mobile-number")
                  }}</h3>
                  <el-input v-model="form.mobile_number" />
                </el-form-item>
              </el-col>
            </el-row>

            <el-row :gutter="6" class="width-full">
              <el-col :xs="24" :sm="24" :md="24" :lg="24">
                <el-form-item>
                  <h3 class="text-center" style="color:#28B4B3">{{
                    $t("card-no-cust")
                  }}</h3>
                  <el-input v-model="form.card_no_cust" />
                </el-form-item>
              </el-col>
            </el-row>

            <el-row :gutter="6" class="width-full">
              <el-col :xs="24" :sm="24" :md="24" :lg="24">
                <el-form-item>
                  <h3 class="text-center" style="color:#28B4B3">{{
                    $t("supplier-address")
                  }}</h3>
                  <el-input v-model="form.supplier_address" />
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
        </el-container>
      </span>
      <span slot="footer" class="dialog-footer">
        <el-button
          class="btn-cyan-light px-4-lg"
          @click="addSupplier = false"
          >{{ $t("ok") }}</el-button
        >
      </span>
    </el-dialog>
  </el-container>
</template>
<script>
import AttachFile from "~/components/dialogs/attach-file";
export default {
  name: "invoice",
  components: {
    AttachFile
  },
  data: function() {
    return {
      form: {
        input: 1,
        date: 1,
        invoice_type : 1,
        supplier_name : "",
        currency : ""
      },
      addSupplier: false
    };
  },
  methods: {
    openAttachFileDialog() {
      this.$store.commit("attachFile/updateDialogState", true);
    },
    addNewSupplier() {
      const POSTPONED = 1;
      const IN_CASH = 2;
      if (this.form.invoice_type == IN_CASH) {
        this.addSupplier = true;
      }else if (this.form.invoice_type == POSTPONED) {
        this.$router.push('/suppliers-management/supplier-data/new')
      }
    },
    show_currency() {
      this.$store.commit("addExpenses/show_currency", true);
    }
  }
};
</script>
<style scoped lang="scss">
.info {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2.5rem;
}
.info-card {
  height: 1.5rem;
  border: 1px solid #707070;
  border-radius: 0.2rem;
  text-align: center;
  line-height: 1.5rem;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
}
.amounts {
  width: 30%;
  background-color: #fbffbf;
}
</style>
