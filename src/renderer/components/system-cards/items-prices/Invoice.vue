<template>
  <el-container class="container all-shadow ma-4 mb-0 px-2 py-3">
    <el-form
      class="d-flex justify-center invoice-form width-full"
      label-position="top"
      :model="form"
    >
      <el-row :gutter="6" class="width-full">
        <el-col :xs="24" :sm="24" :md="16">
          <el-row :gutter="6">
            <el-col :span="24">
              <el-row :gutter="6">
                <el-col :xs="24" :sm="12" :md="10" :lg="10">
                  <el-form-item>
                    <label>{{ $t("item-name") }}</label>
                    <el-select
                      class="width-full"
                      v-model="form.itemID"
                      :placeholder="$t('search')"
                      :loading="loadingItemCard"
                      :remote-method="remoteMethodsFetchItemsCardList"
                      filterable
                      remote
                      clearable
                    >
                      <el-option
                        v-for="item in itemsCardList"
                        :key="item.itemId"
                        :value="item.itemId"
                        :label="item.itemName"
                      >
                        <span style="float: left">{{ item.itemName }}</span>
                        <span
                          style="float: right;
                                  color: #8492a6;
                                  font-size: 13px;
                                "
                          >{{ item.itemId }}</span
                        >
                      </el-option>
                    </el-select>
                  </el-form-item>
                </el-col>

                <el-col :xs="24" :sm="12" :md="8" :lg="5">
                  <el-form-item>
                    <label>{{ $t("unit") }}</label>
                    <el-select
                      class="width-full"
                      v-model="form.unitID"
                      :placeholder="$t('search')"
                      :loading="loadingUnits"
                      :remote-method="remoteMethodFetchUnits"
                      filterable
                      remote
                      clearable
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

                <el-col :xs="24" :sm="12" :md="8" :lg="5">
                  <el-form-item>
                    <label>{{ $t("category") }}</label>
                    <el-select
                      class="width-full"
                      v-model="form.classificationID"
                      :placeholder="$t('search')"
                      :loading="loadingItemCategory"
                      :remote-method="remoteMethodsFetchItemsCategories"
                      filterable
                      remote
                      clearable
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
              </el-row>
            </el-col>

            <el-col :span="24">
              <el-row :gutter="6">
                <el-col :xs="24" :sm="12" :md="8" :lg="5">
                  <el-form-item>
                    <label>{{ $t("item-type") }}</label>
                    <el-select
                      class="width-full"
                      v-model="form.itemTypeID"
                      :placeholder="$t('search')"
                      :loading="loadingItemType"
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

                <el-col :xs="24" :sm="12" :md="8" :lg="5">
                  <el-form-item>
                    <label>{{ $t("company-name") }}</label>
                    <el-select
                      class="width-full"
                      v-model="form.companyID"
                      :placeholder="$t('search')"
                      :loading="loadingCompany"
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

                <el-col :xs="24" :sm="12" :md="8" :lg="5">
                  <el-form-item>
                    <label>{{ $t("item-status") }}</label>
                    <el-select v-model="form.itemStatus" clearable>
                      <el-option
                        :label="$t('activated')"
                        :value="1"
                      ></el-option>
                      <el-option
                        :label="$t('deactivated')"
                        :value="0"
                      ></el-option>
                    </el-select>
                  </el-form-item>
                </el-col>

                {{ PriceColumn.openingCost.value }}
                <el-col
                  :xs="24"
                  :sm="12"
                  :md="8"
                  :lg="5"
                  v-if="priceItemsPercentage"
                >
                  <el-form-item>
                    <label>{{ $t("edit-prices-on") }}</label>
                    <el-select v-model.number="priceColumn" clearable>
                      <el-option
                        :label="$t('opening-cost')"
                        :value="PriceColumn.openingCost"
                      ></el-option>
                      <el-option
                        :label="$t('last-purchase-price')"
                        :value="PriceColumn.lastPurchasePrice"
                      ></el-option>
                      <el-option
                        :label="$t('cost-price')"
                        :value="PriceColumn.costPrice"
                      ></el-option>
                      <el-option
                        :label="$t('wholesale-price')"
                        :value="PriceColumn.wholesalePrice"
                      ></el-option>
                      <el-option
                        :label="$t('lowest-selling-price')"
                        :value="PriceColumn.lowestSalePrice"
                      ></el-option>
                      <el-option
                        :label="$t('selling-price')"
                        :value="PriceColumn.salePriceBeforeTax"
                      ></el-option>
                    </el-select>
                    <el-input
                      size="small"
                      :value="precenrage"
                      @input="UpdatePrice"
                      v-if="priceColumn != null"
                    ></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
            </el-col>
          </el-row>
        </el-col>
        <el-col :xs="24" :sm="24" :md="8">
          <div class="inline-button-container d-flex inner-flex-buttons">
            <el-form-item>
              <el-form-item>
                <el-select
                  v-model="form.orderBy"
                  class="color-blue text-center placeHolderColor width-full-sm"
                  :placeholder="$t('order-by')"
                >
                  <el-option :label="$t('item-number')" :value="2"></el-option>
                  <el-option :label="$t('item-name')" :value="3"></el-option>
                </el-select>
              </el-form-item>
            </el-form-item>

            <el-form-item>
              <el-select
                :value="$t('items-prices-choices')"
                class="color-blue text-center placeHolderColor width-full-sm pa-0 ma-0"
                :placeholder="$t('items-prices-choices')"
              >
                <el-option
                  :label="$t('show-unit-barcode-for-item')"
                  :value="1"
                  class="px-0"
                >
                  <el-button class="width-full" @click="unit_barcode"
                    >{{ $t("show-unit-barcode-for-item") }}
                  </el-button>
                </el-option>
                <el-option
                  :label="$t('show-sales-price-after-tax')"
                  :value="2"
                  class="px-0"
                >
                  <el-button class="width-full" @click="show_sales_after_tax"
                    >{{ $t("show-sales-price-after-tax") }}
                  </el-button></el-option
                >
                <el-option
                  :label="$t('adjust-the-price-of-items-by-percentage')"
                  :value="3"
                  class="px-0"
                >
                  <el-button class="width-full" @click="price_items_percentage"
                    >{{ $t("adjust-the-price-of-items-by-percentage") }}
                  </el-button></el-option
                >
              </el-select>
            </el-form-item>
          </div>
        </el-col>
      </el-row>
      <el-row class="mb-0">
        <div class="container ma-4 py-2 mt-0 mb-0">
          <div class="mt-4 action-buttons-nonGrown ml-6">
            <el-button
              size="medium"
              class="mb-1 btn-primary"
              @click="displayRecord"
              >{{ $t("display-f7") }}</el-button
            >

            <template v-if="!priceItemsPercentage">
              <el-button
                size="medium"
                class="mb-1 btn-primary"
                @click="setEditMode()"
                >{{ editMode ? $t("back-f6") : $t("edit-f3") }}</el-button
              >
              <el-button size="medium" class="mb-1 btn-primary" v-if="editMode"
              @click="update"
              >
                {{ $t("save-f5") }}
              </el-button>
            </template>

            <template v-else>
              <el-button
                size="medium"
                class="mb-1 btn-primary"
                @click="update"
                >{{ $t("save-f5") }}</el-button
              >
              <el-button
                size="medium"
                class="mb-1 btn-primary"
                @click="showPriceItemsPercentage(false)"
              >
                {{ $t("back-f6") }}
              </el-button>
            </template>
            <el-button size="medium" class="mb-1 btn-primary">{{
              $t("print-f4")
            }}</el-button>
          </div>
        </div>
      </el-row>
    </el-form>
  </el-container>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "invoice",

  data: function() {
    return {
      loadingItemType: false,
      loadingUnits: false,
      loadingItemCard: false,
      loadingCompany: false,
      loadingItemCategory: false,
      form: {
        itemID: null,
        unitID: null,
        classificationID: null,
        itemTypeID: null,
        companyID: null,
        itemStatus: null,
        orderBy: null
      },
      priceColumn: null
    };
  },

  computed: {
    ...mapState({
      itemsCardList: state => state.systemCards.itemsPrices.itemsCardList,
      unitsList: state => state.systemCards.itemsPrices.unitsList,
      itemsTypesList: state => state.systemCards.itemsPrices.itemsTypesList,
      companiesList: state => state.systemCards.itemsPrices.companiesList,
      itemsCategoriesList: state =>
        state.systemCards.itemsPrices.itemsCategoriesList,
      searchParams: state => state.systemCards.itemsPrices.searchParams,
      priceItemsPercentage: state =>
        state.systemCards.itemsPrices.priceItemsPercentage,
      editMode: state => state.systemCards.itemsPrices.editMode,
      recordsWillEdit: state => state.systemCards.itemsPrices.recordsWillEdit,
      PriceColumn: state => state.systemCards.itemsPrices.PriceColumn,
      price: state => state.systemCards.itemsPrices.price,
      priceColumnSelected: state =>
        state.systemCards.itemsPrices.priceColumnSelected
    }),
    precenrage: {
      get() {
        return this.price;
      },
      set(value) {
        this.pricePercentage(value);
      }
    }
  },

  methods: {
    UpdatePrice(val) {
      this.precenrage = val;
    },
    ...mapMutations({
      setPriceColumnSelected: "systemCards/itemsPrices/setPriceColumnSelected",
      showUnitBarcode: "systemCards/itemsPrices/showUnitBarcode",
      showSalesAfterTax: "systemCards/itemsPrices/showSalesAfterTax",
      showPriceItemsPercentage:
        "systemCards/itemsPrices/showPriceItemsPercentage",
      toggleEditMode: "systemCards/itemsPrices/toggleEditMode",
      setRecordsWillEdit: "systemCards/itemsPrices/setRecordsWillEdit",
      pricePercentage: "systemCards/itemsPrices/pricePercentage"
    }),
    unit_barcode() {
      this.showUnitBarcode(true);
      this.showSalesAfterTax(false);
      this.showPriceItemsPercentage(false);
    },

    show_sales_after_tax() {
      this.showSalesAfterTax(true);
      this.showPriceItemsPercentage(false);
      this.showUnitBarcode(false);
    },

    price_items_percentage() {
      this.showSalesAfterTax(false);
      this.showPriceItemsPercentage(true);
      this.showUnitBarcode(false);
    },
    async remote(query, loading, list) {
      this[loading] = true;
      try {
        await this.$store.dispatch("systemCards/itemsPrices/" + list, {
          searchString: [query]
        });
        this[loading] = false;
      } catch (e) {
        this.$message.error(e.response.data.message);
      }
    },
    async remoteMethodFetchUnits(query) {
      await this.remote(query, "loadingUnits", "fetchUnitsList");
    },
    async remoteMethodsFetchItemsCardList(query) {
      await this.remote(query, "loadingItemCard", "fetchItemsCardList");
    },
    async remoteMethodsFetchItemsTypes(query) {
      await this.remote(query, "loadingItemType", "fetchItemsTypeList");
    },
    async remoteMethodsFetchCompanies(query) {
      await this.remote(query, "loadingCompany", "fetchCompaniesList");
    },
    async remoteMethodsFetchItemsCategories(query) {
      await this.remote(
        query,
        "loadingItemCategory",
        "fetchItemsCategorysList"
      );
    },
    displayRecord() {
      console.log(this.form);
      this.$store.dispatch("systemCards/itemsPrices/fetchRecords", {
        ...this.globalSearchParams,
        ...this.form
      });
    },
    setEditMode() {
      this.toggleEditMode(!this.editMode);
      // if user back from edit mode
      if (!this.editMode && this.setRecordsWillEdit.length > 0) {
        this.setRecordsWillEdit({});
        this.$store.dispatch("systemCards/itemsPrices/fetchRecords", {
          ...this.searchParams
        });
      }
    },
    async update() {
      // if user trigger save Update button without any changes
      if (this.recordsWillEdit.length > 0) {
        event.preventDefault();
        // alert avoid user loss changes
        // id confirm => save date and load new data
        this.$confirm("Do you want to save the changes ?", {
          confirmButtonText: this.$t("ok"),
          showCancelButton: true,
          type: "warning",
          center: true,
          customClass: "confirmBox"
        })
          .then(() => {
            this.$store
              .dispatch("systemCards/itemsPrices/update", [
                ...this.recordsWillEdit
              ])
              .then(() => {
                this.setRecordsWillEdit({});
                this.$store.dispatch("systemCards/itemsPrices/fetchRecords", {
                  ...this.searchParams
                });
                this.toggleEditMode(false);
                this.showPriceItemsPercentage(false);
                this.$notify({
                  title: "updated successfully",
                  type: "success"
                });
              });
          })
          .catch(() => {
            this.$store.dispatch("systemCards/itemsPrices/fetchRecords", {
              ...this.searchParams
            });
            this.setRecordsWillEdit({});
            this.toggleEditMode(false);
            this.showPriceItemsPercentage(false);
            this.$message.info("cancel chanegs");
          });
      } else {
        this.toggleEditMode(false);
        this.$message.error("No changes to save");
      }
    }
  },
  watch: {
    priceColumn: function(val) {
      this.setPriceColumnSelected(val);
    }
  }
};
</script>
<style scoped lang="scss">
.inner-flex-buttons {
  justify-content: flex-end;
  margin-top: 30px;
  .el-form-item {
    flex-grow: 0 !important;
    margin: 5px 15px;

    @media only screen and (max-width: 450px) {
      margin: 5px 0px;
    }
  }
}
</style>
