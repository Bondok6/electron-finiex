<template>
  <div class="container box-shadow ma-4 mb-0 px-2 py-3">
    <el-form class="invoice-form width-full" label-position="top" :model="form">
      <el-row :gutter="6" class="width-full">
        <el-col :xs="24" :sm="6" :md="5" :lg="3">
          <el-form-item :label="$t('item-name')">
            <el-select
              class="width-full"
              v-model="form.itemID"
              :placeholder="$t('search')"
              :loading="loadingItems"
              :remote-method="remoteMethodsFetchItemsTypes"
              filterable
              remote
              clearable
            >
              <el-option
                v-for="item in itemsCardList"
                :key="item.itemId"
                :label="item.itemName + ' ' + item.itemId"
                :value="item.itemId"
              >
                <span class="f-right">{{ item.itemName }}</span>
                <span class="options f-left"> {{ item.itemId }}</span>
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>

        <el-col :xs="24" :sm="6" :md="5" :lg="3">
          <el-form-item :label="$t('basic-unit')">
            <el-select
              class="width-full"
              v-model="form.units"
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
                <span class="f-right">{{ item.name }}</span>
                <span class="options f-left">{{ item.code }}</span
                >
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>

        <el-col :xs="24" :sm="6" :md="5" :lg="4">
          <el-form-item :label="$t('warehouse-name')">
            <el-select
              class="width-full"
              v-model="form.wareHouseID"
              :placeholder="$t('search')"
              :loading="loadingWarehouses"
              :remote-method="remoteMethodsFetchWarehouses"
              filterable
              remote
              clearable
            >
              <el-option
                v-for="item in warehousesList"
                :key="item.id"
                :value="item.id"
                :label="item.name"
              >
                <span class="f-right">{{ item.name }}</span>
                <span class="optoins f-left">{{ item.code }}</span
                >
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>

        <el-col :xs="24" :sm="6" :md="5" :lg="4">
          <el-form-item :label="$t('manufacture-company')">
            <el-select
              class="width-full"
              v-model="form.companyName"
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
                <span class="f-right">{{ item.name }}</span>
                <span class="options f-left">{{ item.code }}</span
                >
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>

        <el-col :xs="24" :sm="24" :md="4" :lg="10" class="mt-40">
          <div class="d-flex">
            <div class="spacer"></div>
            <el-row class="mobile-width-full">
              <el-col :span="24">
                <el-form-item>
                  <el-select
                    v-model="form.orderBy"
                    class="color-blue text-center placeHolderColor mt-point5"
                    :placeholder="$t('order-by')"
                  >
                    <el-option
                      :label="$t('item-number')"
                      :value="1"
                    ></el-option>
                    <el-option :label="$t('item-name')" :value="2"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item class="mt-2">
                  <el-button
                    class="btn-cyan-light width-full"
                    @click="dialogVisible = true"
                    >{{ $t("additional-choices") }}</el-button
                  >
                </el-form-item>
              </el-col>
            </el-row>
          </div>
        </el-col>
      </el-row>
    </el-form>
    <!-- show Dialog -->
    <el-dialog
      :title="$t('additional-choices')"
      :visible.sync="dialogVisible"
      width="30%"
      class="text-center"
    >
      <el-form :model="form" class="d-flex flex-direction-column align-center">
        <el-form-item class="width-full">
          <el-select
            v-model="form.StatusItem"
            class="width-full"
            :placeholder="$t('category-status')"
          >
            <el-option :label="$t('active')" :value="0"></el-option>
            <el-option :label="$t('not-active')" :value="1"></el-option>
          </el-select>
        </el-form-item>

        <!-- itemsCategoriesList -->
        <el-form-item class="width-full my-3">
          <el-select
            v-model="form.MdCodeGroup"
            class="width-full"
            :placeholder="$t('category')"
            :loading="loadingItemsCategories"
            :remote-method="remoteMethodsFetchItemsCategories"
            filterable
            remote
            clearable
          >
            <el-option
              v-for="item in itemsCategoriesList"
              :key="item.id"
              :label="item.name"
              :value="item.id"
            ></el-option>
          </el-select>
        </el-form-item>

        <!-- itemsSubCategoriesList -->
        <el-form-item class="width-full my-3">
          <el-select
            v-model="form.MdcodeSubGroup"
            class="width-full"
            :placeholder="$t('sub-category')"
            :loading="loadingItemsSubCategories"
            :remote-method="remoteMethodsFetchItemsSubCategories"
            filterable
            remote
            clearable
          >
            <el-option
              v-for="item in itemsSubCategoriesList"
              :key="item.id"
              :label="item.name"
              :value="item.id"
            ></el-option>
          </el-select>
        </el-form-item>

        <button
          class="btn-teal width-full my-3 py-1"
          @click.prevent="dialogVisible = false"
        >
          {{ $t("ok") }}
        </button>
      </el-form>
    </el-dialog>

    <invoice-summary />
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import InvoiceSummary from "~/components/inventory/inventory-store-pages/summary/Summary";

export default {
  name: "invoice",
  components: {
    InvoiceSummary
  },

  data: function() {
    return {
      dialogVisible: false,
      form: {
        orderBy: 1,
        companyName: "",
        itemID: "",
        units: "",
        wareHouseID: "",
        StatusItem: null, // حالة الصنف
        MdCodeGroup: "", // التصنيف
        MdcodeSubGroup: "" // التصنيف الفرعي
      },
      loadingItems: false,
      loadingUnits: false,
      loadingWarehouses: false,
      loadingCompanies: false,
      loadingItemsCategories: false,
      loadingItemsSubCategories: false
    };
  },

  watch: {
    form: {
      handler(newValue) {
        // backend names are different
        // let { itemID, units, wareHouseID, company, orderBy } = newValue;
        this.setRecordFilters({ ...newValue });
      },
      deep: true
    }
  },

  computed: {
    ...mapState({
      itemsCardList: state => state.systemCards.globalList.itemsCardList,
      unitsList: state => state.systemCards.globalList.unitsList,
      warehousesList: state => state.systemCards.globalList.warehousesList,
      companiesList: state => state.systemCards.globalList.companiesList,
      itemsCategoriesList: state =>
        state.systemCards.globalList.itemsCategoriesList,
      itemsSubCategoriesList: state =>
        state.systemCards.globalList.itemsSubCategoryiesList
    })
  },

  methods: {
    ...mapMutations({
      setRecordFilters: "inventory/inventoryStorePages/setRecordFilters",
      userSelectUnit: "inventory/inventoryStorePages/userSelectUnit"
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
    async remoteMethodsFetchItemsTypes(query) {
      await this.remote(query, "loadingItems", "fetchItemsCardList");
    },
    async remoteMethodFetchUnits(query) {
      await this.remote(query, "loadingUnits", "fetchUnitsList");
    },
    async remoteMethodsFetchCompanies(query) {
      await this.remote(query, "loadingCompanies", "fetchCompaniesList");
    },
    async remoteMethodsFetchWarehouses(query) {
      await this.remote(query, "loadingWarehouses", "fetchWarehousesList");
    },
    async remoteMethodsFetchItemsCategories(query) {
      await this.remote(
        query,
        "loadingItemsCategories",
        "fetchItemsCategoriesList"
      );
    },
    async remoteMethodsFetchItemsSubCategories(query) {
      await this.remote(
        query,
        "loadingItemsSubCategories",
        "fetchItemsSubCategoryiesList"
      );
    }
  }
};
</script>

<style scoped>
.f-right{
  float: right;
}
.f-left{
  float: left;
}
.options{
  color: #8492a6;
  font-size: 13px;
}

</style>