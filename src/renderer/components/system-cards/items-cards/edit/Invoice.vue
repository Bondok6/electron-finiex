<template>
  <el-container class="container box-shadow ma-4 mb-0 px-2 py-3">
    <el-form
      class="invoice-form d-flex justify-center width-full"
      label-position="top"
      :model="form"
    >
      <el-row :gutter="6" class="width-full">
        <el-col :span="24">
          <el-row :gutter="6">
            <el-col :xs="24" :sm="6" :md="5" :lg="3">
              <el-form-item :label="$t('item-number')">
                <el-input v-model="form.code"> </el-input>
              </el-form-item>
            </el-col>

            <el-col :xs="24" :sm="6" :md="5" :lg="6">
              <el-form-item :label="$t('item-name')">
                <el-input v-model="form.name"> </el-input>
              </el-form-item>
            </el-col>

            <el-col :xs="24" :sm="6" :md="5" :lg="3">
              <el-form-item :label="$t('manufacture-number')">
                <el-input v-model="form.manfuactoringNo"> </el-input>
              </el-form-item>
            </el-col>

            <el-col :xs="24" :sm="6" :md="5" :lg="4">
              <el-form-item :label="$t('additional-information')">
                <el-input v-model="form.additionalData"> </el-input>
              </el-form-item>
            </el-col>

            <el-col :xs="24" :sm="6" :md="5" :lg="3">
              <el-form-item :label="$t('item-place')">
                <el-input v-model="form.itemPlace"> </el-input>
              </el-form-item>
            </el-col>

            <el-col :xs="24" :sm="6" :md="5" :lg="3">
              <el-form-item :label="$t('inventory-balance')">
                <el-select v-model="form.stockType">
                  <el-option label="عادي" :value="0"></el-option>
                  <el-option label="مقاسات والوان
" :value="1"></el-option>
                  <el-option label="باتش" :value="2"></el-option>

                  <el-option label="تسلسلي" :value="3"></el-option>


                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
        </el-col>

        <el-col :span="24">
          <el-row :gutter="6">
            <el-col :xs="24" :sm="6" :md="5" :lg="3">
              <el-form-item :label="$t('manufacture-company')">
                <el-select
                  class="width-full"
                  v-model="form.manufactoringCompanyID"
                  :placeholder="$t('search')"
                  :loading="loadingCompanies"
                  :remote-method="remoteMethodsFetchCompanies"
                  filterable
                  remote
                  clearable
                >
                  <el-option
                    v-for="item in companiesList"
                    :key="item.id"
                    :value="item.id"
                    :label="item.name"
                  >
                    <span style="float: left">{{ item.name }}</span>
                    <span
                      style="float: right;
                                  color: #8492a6;
                                  font-size: 13px;
                                "
                      >{{ item.code }}</span
                    >
                  </el-option>
                </el-select>
              </el-form-item>
            </el-col>

            <el-col :xs="24" :sm="6" :md="5" :lg="3">
              <el-form-item :label="$t('category-name')">
                <el-select
                  class="width-full"
                  v-model="form.classificationID"
                  :placeholder="$t('search')"
                  :loading="loadingCategory"
                  :remote-method="remoteMethodsFetchCategories"
                  filterable
                  remote
                  clearable
                  @change="getSubCategories"
                >
                  <el-option
                    v-for="item in itemsCategoriesList"
                    :key="item.id"
                    :value="item.id"
                    :label="item.name"
                  >
                    <span style="float: left">{{ item.name }}</span>
                    <span
                      style="float: right;
                                  color: #8492a6;
                                  font-size: 13px;
                                "
                      >{{ item.code }}</span
                    >
                  </el-option>
                </el-select>
              </el-form-item>
            </el-col>

            <el-col :xs="24" :sm="6" :md="5" :lg="3">
              <el-form-item :label="$t('sub-category')">
                <el-select
                  class="width-full"
                  v-model="form.subClassificationID"

                  filterable
                  clearable
                >
                  <el-option
                    v-for="item in subCategories"
                    :key="item.id"
                    :value="item.id"
                    :label="item.name"
                  >
                    <span style="float: left">{{ item.name }}</span>
                    <span
                      style="float: right;
                                  color: #8492a6;
                                  font-size: 13px;
                                "
                      >{{ item.code }}</span
                    >
                  </el-option>
                </el-select>
              </el-form-item>
            </el-col>

            <el-col :xs="24" :sm="6" :md="5" :lg="3">
              <el-form-item :label="$t('item-type')">
                <el-select
                  class="width-full"
                  v-model="form.itemType"
                  :placeholder="$t('search')"
                  :loading="loadingTypes"
                  :remote-method="remoteMethodsFetchItemsTypes"
                  filterable
                  remote
                  clearable
                >
                  <el-option
                    v-for="item in itemsTypesList"
                    :key="item.id"
                    :value="item.id"
                    :label="item.name"
                  >
                    <span style="float: left">{{ item.name }}</span>
                    <span
                      style="float: right;
                                  color: #8492a6;
                                  font-size: 13px;
                                "
                      >{{ item.code }}</span
                    >
                  </el-option>
                </el-select>
              </el-form-item>
            </el-col>

            <el-col :xs="24" :sm="6" :md="5" :lg="3">
              <el-form-item :label="$t('item-status')">
                <el-select v-model="form.itemState">
                  <el-option label="مفعل " :value="0"></el-option>
                  <el-option label="غير مفعل" :value="1"></el-option>
                </el-select>
              </el-form-item>
            </el-col>

            <el-col :xs="24" :sm="6" :md="5" :lg="3">
              <el-form-item :label="$t('basic-unit')">
                <el-select
                  class="width-full"
                  v-model="form.primaryUnit"
                  :placeholder="$t('search')"
                  :loading="loadingUnits"
                  :remote-method="remoteMethodFetchUnits"
                  filterable
                  remote
                  clearable
                  @change="changeUnit"
                >
                  <el-option
                    v-for="item in unitsList"
                    :key="item.id"
                    :value="item.id"
                    :label="item.name"
                  >
                    <span style="float: left">{{ item.name }}</span>
                    <span
                      style="float: right;
                                  color: #8492a6;
                                  font-size: 13px;
                                "
                      >{{ item.code }}</span
                    >
                  </el-option>
                </el-select>
              </el-form-item>
            </el-col>

            <el-col :xs="24" :sm="12" :md="14" :lg="5" class="mt-40s">
              <div class="inline-button-container d-flex flex-direction-column">
                <div class="spacer"></div>
                <div class="vertical-buttons">
                  <span
                    :class="[
                      currentPriceInvoiceZeroStatus
                        ? 'd-inline-block'
                        : 'display-none'
                    ]"
                  >
                    <el-button
                      class="btn-grey px-4-lg"
                      @click="
                        the_price_of_the_attached_items_in_the_invoice_is_zero = !the_price_of_the_attached_items_in_the_invoice_is_zero
                      "
                      :class="[
                        the_price_of_the_attached_items_in_the_invoice_is_zero
                          ? 'btn-dark-grey'
                          : 'btn-red'
                      ]"
                    >
                      <span>
                        {{
                          $t(
                            "the-price-of-the-attached-items-in-the-invoice-is-zero"
                          )
                        }}
                      </span>
                    </el-button>
                  </span>
                  <el-select
                    v-model="form.type"
                    class="
                      color-blue
                      text-center
                      placeHolderColor
                      width-full-sm
                    "
                    :placeholder="$t('items-choices')"
                  >
                    <NuxtLink
                      :to="
                        localePath(
                          '/system-cards/items-cards/generalization-of-tax-on-items'
                        )
                      "
                    >
                      <el-option
                        :label="$t('generalization-of-tax-on-items')"
                        :value="1"
                      ></el-option>
                    </NuxtLink>
                    <el-option
                      :label="$t('duplicate-item-information')"
                      :value="2"
                    ></el-option>
                    <NuxtLink
                      :to="
                        localePath(
                          '/reports-and-statements/public-reports/aggregate-items-report'
                        )
                      "
                    >
                      <el-option
                        :label="$t('total-item-movement')"
                        :value="3"
                      ></el-option>
                    </NuxtLink>
                    <NuxtLink
                      :to="
                        localePath(
                          '/system-cards/items-cards/detailed-item-movement'
                        )
                      "
                    >
                      <el-option
                        :label="$t('detailed-item-movement')"
                        :value="4"
                      ></el-option>
                    </NuxtLink>
                    <NuxtLink
                      :to="localePath('/purchases/purchase-price-of-items')"
                    >
                      <el-option
                        :label="$t('item-purchase-prices')"
                        :value="5"
                      ></el-option>
                    </NuxtLink>

                    <NuxtLink :to="localePath('/sales/prices-of-sale-items')">
                      <el-option
                        :label="$t('item-selling-prices')"
                        :value="6"
                      ></el-option>
                    </NuxtLink>

                    <NuxtLink
                      :to="
                        localePath(
                          '/reports-and-statements/public-reports/items-sales-profit-report-detailed'
                        )
                      "
                    >
                      <el-option
                        :label="$t('item-profit-report')"
                        :value="7"
                      ></el-option>
                    </NuxtLink>

                    <NuxtLink
                      :to="localePath('/system-cards/items-cards/item-account')"
                    >
                      <el-option
                        :label="$t('category-accounts')"
                        :value="8"
                      ></el-option>
                    </NuxtLink>

                    <NuxtLink
                      :to="
                        localePath(
                          '/system-cards/items-cards/item-movement-information'
                        )
                      "
                    >
                      <el-option
                        :label="$t('item-movement-information')"
                        :value="9"
                      ></el-option>
                    </NuxtLink>
                  </el-select>
                </div>
              </div>
            </el-col>
          </el-row>
        </el-col>

        <el-col :span="24">
          <el-row :gutter="6">
            <el-col :xs="24" :sm="6" :md="5" :lg="3">
              <el-form-item label="الاصناف البديله">
                <el-select v-model="form.alternativeItemGroupID">
                  <el-option :value="0">شركة 2 </el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="6" :md="5" :lg="3">
              <el-form-item label="نشاط الصنف">
                <el-select v-model="form.alternativeItemGroupID">
                  <el-option :value="0">صنف سلعــي </el-option>
                  <el-option :value="1">صنف خدمــي </el-option>

                  <el-option :value="2">صنف وزنــي </el-option>

                  <el-option :value="3">صنف مـنتـج </el-option>

                  <el-option :value="4">صنف تجميعي </el-option>
                  <el-option :value="5">صنف نقاط بيع </el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="6" :md="5" :lg="6">
              <el-form-item>
                <el-checkbox
                  class="padding-label arround-checkbox inner-checkbox"
                  @change="form.distributionItems = !form.distributionItems"
                >
                  <span v-if="form.distributionItems">
                    {{ $t("not-showing-accounts-with-a-zero-balance") }}
                  </span>
                  <span v-else>
                    {{ $t("showing-accounts-with-a-zero-balance") }}
                  </span>
                </el-checkbox>
              </el-form-item>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </el-form>

<!--    <el-dialog :visible.sync="addCompany">-->
<!--      <div>-->
<!--        <el-container class="container box-shadow ma-4 mb-0 py-3 invoice-table">-->
<!--          <el-form label-position="left" class="px-30-lg width-full">-->
<!--            <table style="width: 100%">-->
<!--              <tbody>-->
<!--                <tr>-->
<!--                  <td class="popup-label">-->
<!--                    <span>{{ $t("unit-number") }}</span>-->
<!--                  </td>-->
<!--                  <td>-->
<!--                    <el-input v-model="form.number" class="" />-->
<!--                  </td>-->
<!--                </tr>-->
<!--                <tr>-->
<!--                  <td class="popup-label">-->
<!--                    <span>{{ $t("unit-name") }}</span>-->
<!--                  </td>-->
<!--                  <td>-->
<!--                    <el-input v-model="form.name" class="" />-->
<!--                  </td>-->
<!--                </tr>-->
<!--                <tr>-->
<!--                  <div class="popup-label notes-label">-->
<!--                    <span>{{ $t("notes") }}</span>-->
<!--                  </div>-->
<!--                  <td>-->
<!--                    <el-input-->
<!--                      class="notes-input"-->
<!--                      type="textarea"-->
<!--                      :rows="7"-->
<!--                      v-model="form.desc"-->
<!--                      :placeholder="$t('notes')"-->
<!--                    >-->
<!--                    </el-input>-->
<!--                  </td>-->
<!--                </tr>-->
<!--              </tbody>-->
<!--            </table>-->
<!--          </el-form>-->
<!--        </el-container>-->

<!--        <div-->
<!--          class="-->
<!--            text-center-->
<!--            mt-2-->
<!--            action-buttons-nonGrown-->
<!--            align-center align-baseline-->
<!--          "-->
<!--        >-->
<!--          <el-button size="mini" class="mb-1 btn-violet">{{-->
<!--            $t("save-f5")-->
<!--          }}</el-button>-->
<!--          <el-button size="mini" class="mb-1 btn-red">{{-->
<!--            $t("delete-f8")-->
<!--          }}</el-button>-->
<!--          <el-button size="mini" class="mb-1 btn-violet">{{-->
<!--            $t("back-f6")-->
<!--          }}</el-button>-->
<!--          <el-button size="mini" class="mb-1 btn-grey">{{-->
<!--            $t("print-f4")-->
<!--          }}</el-button>-->
<!--        </div>-->
<!--      </div>-->
<!--    </el-dialog>-->

    <!-- شجرة الأصناف -->
<!--    <el-dialog title="" :visible.sync="itemsTree" width="40%">-->
<!--      <span>-->
<!--        <el-container class="d-block box-shadow mb-0 px-2 py-2">-->
<!--          <el-form-->
<!--            class="invoice-form width-full d-flex justify-center mb-2"-->
<!--            label-position="top"-->
<!--            :model="form"-->
<!--          >-->
<!--            <span-->
<!--              class="width-full"-->
<!--              style="margin-right: 30px; margin-left: 30px"-->
<!--            >-->
<!--              <el-input-->
<!--                class="text-color bl-none mb-1 mt-4 justify-center"-->
<!--                :placeholder="$t('search')"-->
<!--              >-->
<!--                <template slot="append"-->
<!--                  ><i class="el-icon-search"></i-->
<!--                ></template>-->
<!--              </el-input>-->
<!--            </span>-->
<!--          </el-form>-->
<!--          <el-row>-->
<!--            <el-col :span="12">-->
<!--&lt;!&ndash;              <el-tree&ndash;&gt;-->
<!--&lt;!&ndash;                class="label-checkbox-padding"&ndash;&gt;-->
<!--&lt;!&ndash;                :data="data"&ndash;&gt;-->
<!--&lt;!&ndash;                show-checkbox&ndash;&gt;-->
<!--&lt;!&ndash;                node-key="id"&ndash;&gt;-->
<!--&lt;!&ndash;                :default-expanded-keys="[1]"&ndash;&gt;-->
<!--&lt;!&ndash;                :props="defaultProps"&ndash;&gt;-->
<!--&lt;!&ndash;                icon-class="el-icon-plus"&ndash;&gt;-->
<!--&lt;!&ndash;              >&ndash;&gt;-->
<!--&lt;!&ndash;              </el-tree>&ndash;&gt;-->
<!--            </el-col>-->

<!--&lt;!&ndash;            <el-col :span="12">&ndash;&gt;-->
<!--&lt;!&ndash;              <el-tree&ndash;&gt;-->
<!--&lt;!&ndash;                class="label-checkbox-padding"&ndash;&gt;-->
<!--&lt;!&ndash;                :data="data"&ndash;&gt;-->
<!--&lt;!&ndash;                show-checkbox&ndash;&gt;-->
<!--&lt;!&ndash;                node-key="id"&ndash;&gt;-->
<!--&lt;!&ndash;                :default-expanded-keys="[1]"&ndash;&gt;-->
<!--&lt;!&ndash;                :props="defaultProps"&ndash;&gt;-->
<!--&lt;!&ndash;                icon-class="el-icon-plus"&ndash;&gt;-->
<!--&lt;!&ndash;              >&ndash;&gt;-->
<!--&lt;!&ndash;              </el-tree>&ndash;&gt;-->
<!--&lt;!&ndash;            </el-col>&ndash;&gt;-->
<!--          </el-row>-->
<!--        </el-container>-->
<!--      </span>-->
<!--      <span slot="footer" class="dialog-footer">-->
<!--        <el-button class="btn-cyan-light px-4-lg" @click="itemsTree = false">{{-->
<!--          $t("ok")-->
<!--        }}</el-button>-->
<!--      </span>-->
<!--    </el-dialog>-->
  </el-container>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "invoice",

  data: function() {
    return {
/*
      data: [
        {
          id: 1,
          label: this.$t("chart-of-accounts"),
          className: "first-level",
          children: [
            {
              id: 11,
              label: "1000" + " " + this.$t("assets"),
              children: [
                {
                  id: 111,
                  label: "قسم فرعي"
                }
              ]
            },
            {
              id: 12,
              label: "2000" + " " + this.$t("liabilities"),
              children: [
                {
                  id: 111,
                  label: "قسم فرعي"
                }
              ]
            },
            {
              id: 13,
              label: "3000" + " " + this.$t("purchases"),
              children: [
                {
                  id: 111,
                  label: "قسم فرعي"
                }
              ]
            },
            {
              id: 14,
              label: "4000" + " " + this.$t("sales"),
              children: [
                {
                  id: 111,
                  label: "قسم فرعي"
                }
              ]
            },
            {
              id: 15,
              label: " 5000" + " " + this.$t("expenses"),
              children: [
                {
                  id: 111,
                  label: "قسم فرعي"
                }
              ]
            },
            {
              id: 16,
              label: "6000" + " " + this.$t("revenues"),
              children: [
                {
                  id: 111,
                  label: "قسم فرعي"
                }
              ]
            },
            {
              id: 17,
              label: "7000" + " " + this.$t("goods"),
              children: [
                {
                  id: 111,
                  label: "قسم فرعي"
                }
              ]
            }
          ]
        }
      ],
      defaultProps: {
        children: "children",
        label: "label"
      },
*/

      the_price_of_the_attached_items_in_the_invoice_is_zero : false,
      form: {
        code: "",
        name: "",
        manfuactoringNo: "",
        additionalData: "",
        itemPlace: "",
        manufactoringCompanyID: "",
        classificationID: "",
        subClassificationID: "",
        itemType: "",
        itemState: "",
        primaryUnit: "",
        itemActivity: "",
        distributionItems: true,
        itemTaxType: "",
        requestQty: "",
        requestPoint: "",
        profitSalesPrice: "",
        itemTaxRatio: "",
        stockType: "",
        alternativeItemGroupID: ""
      },
      loadingWarehouses: false,
      loadingCategory: false,
      loadingTypes: false,
      loadingUnits: false,
      loadingCompanies: false,
      currentPriceInvoiceZeroStatus: false
    };
  },

  computed: {
    ...mapState({
      unitsList: state => state.systemCards.globalList.unitsList,
      itemsTypesList: state => state.systemCards.globalList.itemsTypesList,
      companiesList: state => state.systemCards.globalList.companiesList,
      itemsCategoriesList: state =>
        state.systemCards.globalList.itemsCategoriesList,

      warehousesList: state => state.systemCards.globalList.warehousesList,
      subCategories : state => state.systemCards.globalList.subCategories,
    })
  },
  methods: {
    getSubCategories(val) {
  this.$store.dispatch("systemCards/globalList/getSubCategorysById", {id: val});
},
    changeUnit(val) {
        let unit = this.unitsList.find(unit => unit.id == val);
      this.userSelectUnit(unit);
    },
    ...mapMutations({
      setRecordDetails: 'systemCards/itemsCards/setRecordDetails',
      userSelectUnit: 'systemCards/itemsCards/userSelectUnit'
    }),
    async remote(query, loading, list) {
      this[loading] = true;
      try {
        await this.$store.dispatch("systemCards/globalList/" + list, {
          searchString: query
        });
        this[loading] = false;
      } catch (e) {
        this.$message.error(e.response.data.message);
      }
    },
    async remoteMethodFetchUnits(query) {
      await this.remote(query, "loadingUnits", "fetchUnitsList");
    },

    async remoteMethodsFetchItemsTypes(query) {
      await this.remote(query, "loadingTypes", "fetchItemsTypeList");
    },
    async remoteMethodsFetchCompanies(query) {
      await this.remote(query, "loadingCompanies", "fetchCompaniesList");
    },
    async remoteMethodsFetchCategories(query) {
      await this.remote(query, "loadingCategory", "fetchItemsCategorysList");
    },

  },
  watch: {
    form: {
      handler: function (val) {
        let deepClone = structuredClone(val);
          this.setRecordDetails(deepClone)
      },
      deep: true
    }
  }
};
</script>
<style scoped lang="scss">
.notes-label {
  margin: 0 !important;
  width: 100%;
  padding: 5px 0;
}
</style>
