<template>
  <el-container class="container ma-4 mb-0 px-2 py-3">
    <el-form
      class="invoice-form d-flex justify-center width-full"
      label-position="top"
      :model="form"
    >
      <el-row :gutter="6" class="width-full">
        <el-col :xs="24" :sm="6" :md="5" :lg="4">
          <el-form-item :label="$t('country')">
            <el-select v-model="form.country">
              <el-option label="بدون" :value="1"></el-option>
              <el-option label="بدون" :value="2"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
          <el-col :xs="24" :sm="6" :md="5" :lg="4">
          <el-form-item :label="$t('currency')">
            <el-select v-model="form.currency">
              <el-option label="SAR" :value="1"></el-option>
              <el-option label="Dollar" :value="2"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row class="width-full">
        <el-col :span="24" class="mt-3 d-flex">
          <el-checkbox
            class="additional-data-checkbox"
            v-model="form.tax"
            @change="DisableDiv()"
          />
          <span class="title mr-3">{{
            $t("system-does-not-include-tax")
          }}</span>
        </el-col>

      </el-row>
      <fieldset
        id="fieldset"
        class="width-full"
        style="border: none; shadow-box: none"
      >
        <el-row class="width-full">
          <el-col :xs="24" :md="8">
            <el-col :span="24" class="mt-3 d-flex">
              <el-checkbox
                class="additional-data-checkbox"
                v-model="form.value_add_tax"
              />
              <span class="title mr-3">{{
                $t("system-does-not-include-value-added-tax")
              }}</span>
            </el-col>
          </el-col>
          <el-col :xs="24" :md="12">
            <el-col :span="24" class="mt-3 d-flex">
              <el-row class="width-full">
                <el-col :xs="24" :md="14">
                  <span class="title mr-3">{{
                    $t("tax-participation-rate")
                  }}</span>
                </el-col>
                <el-col :xs="24" :md="10">
                  <el-input
                    class="navy-color placeHolderDialog w-200 mr-4 mb-4"
                    v-model="form.tax_rate1"
                  >
                    <template slot="append">
                      <span class="mb-1 btn-navy" style="font-size: 20px"
                        >%
                      </span>
                    </template>
                  </el-input>
                </el-col>
              </el-row>
            </el-col>
          </el-col>
        </el-row>
        <el-row class="width-full">
          <el-col :xs="24" :md="6" class="mt-1 d-flex">
            <el-checkbox
              class="additional-data-checkbox"
              v-model="form.sales1"
            />
            <span class="title mr-3">{{ $t("sales") }}</span>
          </el-col>
          <el-col :xs="24" :md="6" class="mt-1 d-flex">
            <el-checkbox
              class="additional-data-checkbox"
              v-model="form.purchases1"
            />
            <span class="title mr-3">{{ $t("purchases") }}</span>
          </el-col>
          <el-col :xs="24" :md="6" class="mt-1 d-flex">
            <el-checkbox
              class="additional-data-checkbox"
              v-model="form.bonds1"
            />
            <span class="title mr-3">{{ $t("bonds") }}</span>
          </el-col>
        </el-row>
        <el-row class="width-full">
          <el-col :xs="24" :md="8">
            <el-col :span="24" class="mt-3 d-flex">
              <el-checkbox
                class="additional-data-checkbox"
                v-model="form.ttc"
              />
              <span class="title mr-3">{{
                $t("system-does-not-include-value-added-tax-ttc")
              }}</span>
            </el-col>
          </el-col>
          <el-col :xs="24" :md="12">
            <el-col :span="24" class="mt-3 d-flex">
              <el-row class="width-full">
                <el-col :xs="24" :md="14">
                  <span class="title mr-3">{{
                    $t("tax-participation-rate")
                  }}</span>
                </el-col>
                <el-col :xs="24" :md="10">
                  <el-input
                    class="navy-color placeHolderDialog w-200 mr-4 mb-4"
                    v-model="form.tax_rate2"
                  >
                    <template slot="append">
                      <span class="mb-1 btn-navy" style="font-size: 20px"
                        >%
                      </span>
                    </template>
                  </el-input>
                </el-col>
              </el-row>
            </el-col>
          </el-col>
        </el-row>
        <el-row class="width-full">
          <el-col :xs="24" :md="6" class="mt-1 d-flex">
            <el-checkbox
              class="additional-data-checkbox"
              v-model="form.sales1"
            />
            <span class="title mr-3">{{ $t("sales") }}</span>
          </el-col>
          <el-col :xs="24" :md="6" class="mt-1 d-flex">
            <el-checkbox
              class="additional-data-checkbox"
              v-model="form.purchases2"
            />
            <span class="title mr-3">{{ $t("purchases") }}</span>
          </el-col>
          <el-col :xs="24" :md="6" class="mt-1 d-flex">
            <el-checkbox
              class="additional-data-checkbox"
              v-model="form.bonds2"
            />
            <span class="title mr-3">{{ $t("bonds") }}</span>
          </el-col>
        </el-row>
        <el-row class="width-full">
          <el-col :xs="24" :md="8">
            <el-col :span="24" class="mt-3 d-flex">
              <el-checkbox
                class="additional-data-checkbox"
                v-model="form.tax_full"
              />
              <span class="title mr-3">{{ $t("product-tax-100") }}</span>
            </el-col>
          </el-col>
          <el-col :xs="24" :md="12">
            <el-col :span="24" class="mt-3 d-flex">
              <el-row class="width-full">
                <el-col :xs="24" :md="14">
                  <span class="title mr-3">{{
                    $t("tax-participation-rate")
                  }}</span>
                </el-col>
                <el-col :xs="24" :md="10">
                  <el-input
                    class="navy-color placeHolderDialog w-200 mr-4 mb-4"
                    v-model="form.tax_rate3"
                  >
                    <template slot="append">
                      <span class="mb-1 btn-navy" style="font-size: 20px"
                        >%
                      </span>
                    </template>
                  </el-input>
                </el-col>
              </el-row>
            </el-col>
          </el-col>
        </el-row>
        <el-row class="width-full">
          <el-col :xs="24" :md="6" class="mt-1 d-flex">
            <el-checkbox
              class="additional-data-checkbox"
              v-model="form.sales3"
            />
            <span class="title mr-3">{{ $t("sales") }}</span>
          </el-col>
          <el-col :xs="24" :md="6" class="mt-1 d-flex">
            <el-checkbox
              class="additional-data-checkbox"
              v-model="form.purchases3"
            />
            <span class="title mr-3">{{ $t("purchases") }}</span>
          </el-col>
          <el-col :xs="24" :md="6" class="mt-1 d-flex">
            <el-checkbox
              class="additional-data-checkbox"
              v-model="form.bonds3"
            />
            <span class="title mr-3">{{ $t("bonds") }}</span>
          </el-col>
                       <el-col :span="24" class="mt-3 d-flex">
          <el-checkbox
            class="additional-data-checkbox"
            v-model="form.x"
          />
          <span class="title mr-3">{{
            $t("Activate-the-electronic-bill")
          }}</span>
        </el-col>
        </el-row>
      </fieldset>
    </el-form>
  </el-container>
</template>


<script>
export default {
  name: "invoice",

  data: function () {
    return {
      form: {
        tax_rate1: "",
        tax_rate2: "",
        tax_rate3: "",
        sales1: false,
        purchases1: false,
        bonds1: false,
        sales2: false,
        purchases2: false,
        bonds2: false,
        sales3: false,
        purchases3: false,
        bonds3: false,
        tax: false,
        value_add_tax: false,
        tax_full: false,
        country: "",
      },
    };
  },
  methods: {
    DisableDiv() {
      var field = document.getElementById("fieldset");
      if (this.form.tax == true) {
        field.disabled = true;
        field.style.opacity = 0.4;
      } else if (this.form.tax == false) {
        field.disabled = false;
        field.style.opacity = 1;
      }
    },
  },
};
</script>
