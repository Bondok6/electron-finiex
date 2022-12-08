<template>
  <div>
    <el-container class="container box-shadow ma-4 mb-0 px-2 py-3">
      <el-form
        class="invoice-form width-full justify-center"
        label-position="top"
        :model="form"
      >
        <el-row :gutter="6" class="width-full">
          <el-col :xs="24" :sm="20">
            <el-row :gutter="6" class="width-full">
              <el-col :xs="24" :sm="6" :md="6" :lg="6">
                <el-form-item :label="$t('item-name')">
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
              <el-col :xs="24" :sm="6" :md="6" :lg="6">
                <el-form-item :label="$t('category')">
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

              <el-col :xs="24" :sm="6" :md="6" :lg="6">
                <el-form-item :label="$t('company-name')">
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
            </el-row>
            <el-row :gutter="6" class="width-full">
              <el-col :xs="24" :sm="6" :md="6" :lg="6">
                <el-form-item :label="$t('item-type')">
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

              <el-col :xs="24" :sm="10" :md="10" :lg="6">
                <span>
                  <el-form-item :label="$t('tax-percentage')">
                    <el-select
                      v-model="taxType"
                      class="width-full"
                      @change="changeTaxType"
                    >
                      <el-option
                        :label="$t('includes-tax')"
                        :value="1"
                        @click="includes_tax = true"
                      >
                        <el-button
                          class="
                            selectButton
                            width-full
                            text-center
                            height-full
                          "
                        >
                          {{ $t("includes-tax") }}
                        </el-button>
                      </el-option>

                      <el-option :label="$t('does-not-inlcude-tax')" :value="2">
                        <el-button
                          class="
                            selectButton
                            width-full
                            text-center
                            height-full
                          "
                          @click="includes_tax = false"
                        >
                          {{ $t("does-not-inlcude-tax") }}
                        </el-button>
                      </el-option>
                    </el-select>
                  </el-form-item>
                  <span v-if="taxType == 1">
                    <el-input
                      class="pr-0"
                      :value="percentageTax"
                      @input="updateTaxPrecenrage"
                      style="
                        border-radius: 4px;
                        width: 10%;
                        padding: 0;
                      "
                    ></el-input>
                    <span
                      style="
                        background: #21798d;
                        padding: 8px 12px;
                        border-radius: 4px;
                        color: #fff;
                      "
                      >%</span
                    >
                  </span>
                </span>
              </el-col>
            </el-row>
          </el-col>
          <el-col :xs="24" :sm="4">
            <div
              class="inline-button-container d-flex flex-direction-column mt-2"
            >
              <div class="vertical-buttons">
                <el-form-item>
                  <el-button
                    v-if="percentageTax"
                    class="btn-dark-grey float-left mt-point5 px-4-lg"
                    @click="selectAll()"
                  >
                    <span>
                      {{ $t("select-all") }}
                    </span>
                  </el-button>
                </el-form-item>
              </div>
            </div>
          </el-col>
        </el-row>
        <el-row class="mb-0">
          <div class="container ma-4 py-2 mt-0 mb-0">
            <div class="mt-4 action-buttons-nonGrown ml-6">
              <el-button size="medium" class="mb-1 btn-primary">{{
                $t("display-f7")
              }}</el-button>
              <template v-if="!percentageTax && taxType != 1">
                <el-button
                  size="medium"
                  class="mb-1 btn-primary"
                  @click="setEditMode()"
                  >{{ editMode ? $t("back-f6") : $t("edit-f3") }}</el-button
                >
                <el-button
                  size="medium"
                  class="mb-1 btn-primary"
                  v-if="editMode"
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
                  @click="back()"
                >
                  {{ $t("back-f6") }}
                </el-button>
              </template>
            </div>
          </div>
        </el-row>
      </el-form>
    </el-container>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "Invoice",
  data: function() {
    return {
      includes_tax: false,
      form: {
        itemID: "",
        classificationID: "",
        companyID: "",
        itemTypeID: ""
      },
      taxType: "",
      loadingItemCard: false,
      loadingItemType: false,
      loadingItemCategory: false,
      loadingCompany: false
    };
  },
  computed: {
    percentageTax: {
      get() {
        return this.percentage;
      },
      set(value) {
        this.taxPercentage(value);
      }
    },
    ...mapState({
      itemsCardList: state => state.systemCards.globalList.itemsCardList,
      unitsList: state => state.systemCards.globalList.unitsList,
      itemsTypesList: state => state.systemCards.globalList.itemsTypesList,
      companiesList: state => state.systemCards.globalList.companiesList,
      itemsCategoriesList: state =>
        state.systemCards.globalList.itemsCategoriesList,
      searchParams: state => state.systemCards.generalization.searchParams,
      editMode: state => state.systemCards.generalization.editMode,
      recordsWillEdit: state => state.systemCards.generalization.recordsWillEdit,
      percentage: state => state.systemCards.generalization.percentage
    })
  },
  methods: {
    changeTaxType() {
      if (this.taxType == 1 && this.editMode) {
        this.toggleEditMode(false);
        this.$store.dispatch(
          "systemCards/generalization/fetchGeneralizationRecords",
          {
            ...this.searchParams
          }
        );
      } else {
      }
    },
    updateTaxPrecenrage(value) {
      this.percentageTax = value;
    },
    ...mapMutations({
      toggleEditMode: "systemCards/generalization/toggleEditMode",
      taxPercentage: "systemCards/generalization/taxPercentage",
      setRecordsWillEdit: "systemCards/generalization/setRecordsWillEdit"
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
    setEditMode() {
      this.toggleEditMode(!this.editMode);
      // if user back from edit mode
      if (!this.editMode && this.recordsWillEdit.length > 0) {
        this.setRecordsWillEdit({});
        this.$store.dispatch(
          "systemCards/itemsCards/fetchGeneralizationRecords",
          {
            ...this.searchParams
          }
        );
      }
    },
    back() {
      this.toggleEditMode(false);
      this.setRecordsWillEdit({});
      this.taxType = "";
      this.percentageTax = 0;
      this.$store.dispatch(
        "systemCards/itemsCards/fetchGeneralizationRecords",
        {
          ...this.searchParams
        }
      );
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
    async update() {
      // if user trigger save Update button without any changes
      console.log(this.recordsWillEdit);
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
              .dispatch("systemCards/generalization/update", [
                ...this.recordsWillEdit
              ])
              .then(() => {
                this.setRecordsWillEdit({});
                this.percentageTax = 0;
                this.taxType = "";
                this.$store.dispatch(
                  "systemCards/generalization/fetchGeneralizationRecords",
                  {
                    ...this.searchParams
                  }
                );
                this.toggleEditMode(false);
                this.$notify({
                  title: "updated successfully",
                  type: "success"
                });
              });
          })
          .catch(() => {
            this.$store.dispatch(
              "systemCards/generalization/fetchGeneralizationRecords",
              {
                ...this.searchParams
              }
            );
            this.setRecordsWillEdit({});
            this.toggleEditMode(false);
            this.$message.info("cancel chanegs");
          });
      } else {
        this.toggleEditMode(false);
        this.$message.error("No changes to save");
      }
    },
    selectAll() {
      this.$confirm(
        "are you sure you want to change all items",

        {
          confirmButtonText: this.$t("ok"),
          showCancelButton: true,
          type: "warning",
          center: true,
          customClass: "confirmBox"
        }
      ).then(() => {
        this.$store
          .dispatch("systemCards/generalization/updateAll", {
            percentage: +this.percentageTax
          })
          .then(() => {
            this.percentageTax = 0;
            this.$store.dispatch(
              "systemCards/generalization/fetchGeneralizationRecords",
              {
                ...this.searchParams
              }
            );
            this.$notify({
              title: "updated successfully",
              type: "success"
            });
          });
      });
    }
  }
};
</script>
