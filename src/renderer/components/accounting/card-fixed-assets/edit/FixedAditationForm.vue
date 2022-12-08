<template>
  <div class="">
    <section class="border-none mb-0 px-2-lg">
      <el-row>
        <div class="mt-40 ml-4 mb-4" style="text-align: left">
          <div class="spacer"></div>

          <el-button
            slot="trigger"
            @click="attachFileDialog = true"
            class="btn-cyan-light mx-2"
          >
            {{ $t("attach-file") }}
          </el-button>

          <NuxtLink
            :to="
              localePath(
                '/accounting/card-fixed-assets/exclusion/' + $route.params.id
              )
            "
            v-if="form.isExecluded == false && form.isDone == true"
          >
            <el-button class="w-250 btn-red">
              {{ $t("exclude-original") }}
            </el-button>
          </NuxtLink>
        </div>
        <el-col :xs="24" :md="12" class="px-15-lg">
          <el-form label-position="top">
            <table style="width: 100%">
              <tbody>
                <tr>
                  <td class="popup-label">
                    <span>{{ $t("asset-number") }}</span>
                  </td>
                  <td>
                    <el-input v-model.number="form.assetCode" class="" disabled>
                    </el-input>
                  </td>
                </tr>
                <tr>
                  <td class="popup-label">
                    <span>{{ $t("original-account-number") }}</span>
                  </td>
                  <td>
                    <el-input
                      class=""
                      v-model="form.originalAccId"
                      :disabled="disable"
                    >
                      <el-button
                        slot="append"
                        icon="el-icon-search"
                        @click="openDialogAssetsNumber(true)"
                      ></el-button>
                    </el-input>
                  </td>
                </tr>
                <tr>
                  <td class="popup-label">
                    <span>{{ $t("depreciation-expense-account") }}</span>
                  </td>
                  <td>
                    <el-input
                      class=""
                      v-model="form.expenseAccId"
                      :disabled="disable"
                    >
                      <el-button
                        slot="append"
                        icon="el-icon-search"
                        @click="openDialogDepreciation(true)"
                      ></el-button>
                    </el-input>
                  </td>
                </tr>
                <tr>
                  <td class="popup-label">
                    <span>{{ $t("depreciation-complex-account") }}</span>
                  </td>
                  <td>
                    <el-input
                      class=""
                      v-model="form.depreciationAccId"
                      :disabled="disable"
                    >
                      <el-button
                        slot="append"
                        icon="el-icon-search"
                        @click="openDialogDepreciationComplex(true)"
                      ></el-button>
                    </el-input>
                  </td>
                </tr>
                <tr>
                  <td class="popup-label">
                    <span>{{ $t("structure-No") }}</span>
                  </td>
                  <td>
                    <el-input v-model="form.assetNo" :disabled="disable" />
                  </td>
                </tr>
                <tr>
                  <td class="popup-label">
                    <span>{{ $t("purchasing-price") }}</span>
                  </td>
                  <td>
                    <el-input
                      v-model="form.purchasePrice"
                      :disabled="disable"
                    />
                  </td>
                </tr>
                <tr>
                  <td class="popup-label">
                    <span>{{ $t("depreciation-calculation-method") }}</span>
                  </td>
                  <td>
                    <el-select
                      :disabled="disable"
                      v-model.number="form.depreciationType"
                      class="width-full"
                      @change="
                        form.depreciationType == depreciationType.decreased
                          ? (form.depreciationTypeGaid =
                              depreciationTypeGaid.yearly)
                          : false
                      "
                    >
                      <el-option
                        :label="$t('fixed-installment-method')"
                        :value="depreciationType.fixed"
                      ></el-option>
                      <el-option
                        :label="$t('decreased-installment-method')"
                        :value="depreciationType.decreased"
                      ></el-option>
                    </el-select>
                  </td>
                </tr>
                <tr>
                  <td class="popup-label">
                    <span>{{ $t("depreciation-ratio") }}</span>
                  </td>
                  <td>
                    <el-input
                      :disabled="disable"
                      v-model="form.depreciationPercentage"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </el-form>
        </el-col>
        <el-col :xs="24" :md="12" class="px-15-lg">
          <el-form label-position="top">
            <table style="width: 100%">
              <tbody>
                <tr>
                  <td class="popup-label">
                    <span>{{ $t("original-group") }}</span>
                  </td>
                  <td>
                    <el-select
                      :disabled="disable"
                      class="width-full selectButton"
                      v-model="form.assetGroupId"
                      :placeholder="$t('search')"
                      :loading="loading"
                      :remote-method="remoteMethod"
                      filterable
                      remote
                    >
                      <el-option
                        v-for="item in assetsAccountList"
                        :key="item.id"
                        :value="item.mdcode"
                        :label="item.mname + ' - ' + item.mdcode"
                      >
                        <span style="float: left">{{ item.mname }}</span>
                        <span
                          style="float: right; color: #8492a6; font-size: 13px"
                          >{{ item.mdcode }}</span
                        >
                      </el-option>
                    </el-select>
                    <!-- <el-select
                      class="text-center width-full selectButton"
                      :placeholder="$t('add-group')"
                      v-model="form.item_number"
                    >
                      <el-option
                        :label="$t('add-group')"
                        :value="1"
                        class="addSelect"
                        @click="addGroup = true"
                      >
                        <el-button class="width-full" @click="addGroup = true"
                          >{{ $t("add-group") }}
                          <i class="el-icon-plus mx-1"></i></el-button
                      ></el-option>
                      <el-option
                        :label="$t('group-1')"
                        :value="2"
                        class="selectButton"
                      >
                        <el-button class="width-full"
                          >{{ $t("group-1") }}
                        </el-button>
                      </el-option>
                      <el-option
                        :label="$t('group-2')"
                        :value="3"
                        class="selectButton"
                      >
                        <el-button class="width-full"
                          >{{ $t("group-2") }}
                        </el-button>
                      </el-option>
                    </el-select> -->
                  </td>
                </tr>
                <tr>
                  <td class="popup-label">
                    <span>{{ $t("supplier-name") }}</span>
                  </td>
                  <td>
                    <!-- @change="selectCustomer()" -->
                    <el-select
                      class="width-full"
                      v-model="form.providerName"
                      :disabled="disable"
                    >
                      <el-option
                        v-for="provider in providerSupplierList"
                        :key="provider.providerCustomerId"
                        :value="provider.accId"
                        :label="provider.pcname + ' - ' + provider.accId"
                      >
                        <span style="float: left">{{ provider.pcname }}</span>
                        <span
                          style="float: right; color: #8492a6; font-size: 13px"
                          >{{ provider.accId }}</span
                        >
                      </el-option>
                    </el-select>
                  </td>
                </tr>
                <tr>
                  <td class="popup-label">
                    <span>{{ $t("purchase-date") }}</span>
                  </td>

                  <td>
                    <el-date-picker
                      :disabled="disable"
                      class="width-full"
                      placeholder="yyyy/MM/dd"
                      Value-format="yyyy/MM/dd"
                      v-model="form.purchaseDate"
                    ></el-date-picker>
                  </td>
                </tr>
                <tr>
                  <td class="popup-label">
                    <span>{{ $t("consumption-start") }}</span>
                  </td>
                  <td>
                    <el-date-picker
                      class="width-full"
                      placeholder="yyyy/MM/dd"
                      Value-format="yyyy/MM/dd"
                      v-model="form.dateStrartDepreciation"
                      :disabled="disable"
                    ></el-date-picker>
                  </td>
                </tr>
                <tr>
                  <td class="popup-label">
                    <span>{{ $t("location-user") }}</span>
                  </td>

                  <td>
                    <el-input
                      class="width-full"
                      v-model="form.location"
                      :disabled="disable"
                    ></el-input>
                  </td>
                </tr>
                <tr>
                  <td class="popup-label">
                    <span>{{ $t("cost-center") }}</span>
                  </td>
                  <td>
                    <el-select
                      v-model="form.costCenterId"
                      :placeholder="$t('choose')"
                      :loading="loading"
                      class="width-full"
                      :disabled="disable"
                    >
                      <el-option :label="$t('without')" :value="0"> </el-option>

                      <el-option
                        v-for="item in costCentersList"
                        :key="item.mdcode"
                        :label="item.mname"
                        :value="item.mdcode"
                      >
                      </el-option>
                    </el-select>
                  </td>
                </tr>
                <tr>
                  <td class="popup-label">
                    <span>
                      {{ $t("the-method-of-calculating-the-entry") }}</span
                    >
                  </td>

                  <td>
                    <el-select
                      v-model.number="form.depreciationTypeGaid"
                      class="width-full"
                      :disabled="disable"
                    >
                      <el-option
                        :label="$t('monthly')"
                        :value="depreciationTypeGaid.monthly"
                        v-if="
                          form.depreciationType == depreciationType.fixed ||
                          form.depreciationType == null
                        "
                      ></el-option>
                      <el-option
                        :label="$t('yearly')"
                        :value="depreciationTypeGaid.yearly"
                      ></el-option>
                    </el-select>
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td>
                    <el-form-item class="form-item-with-right-label width-full">
                      <el-input
                        :disabled="disable"
                        class="notes-input width-full"
                        type="textarea"
                        :rows="7"
                        :cols="7"
                        :placeholder="$t('original-specifications')"
                        v-model="form.notes"
                      >
                      </el-input>
                    </el-form-item>
                  </td>
                </tr>
              </tbody>
            </table>
          </el-form>
        </el-col>
      </el-row>
    </section>
    <el-dialog title=" " :visible.sync="attachFileDialog" width="70%">
      <el-container class="d-block box-shadow pb-2">
        <el-tabs
          class="border-none invoice-tab"
          type="border-card"
          stretch
          style="margin: 0"
          @tab-click="handleTabClicked"
        >
          <el-tab-pane :label="$t('archive-new-files')" style="margin: 10px">
            <span>
              <el-row :gutter="6" class="width-full">
                <div class="text-center mt-40">
                  <el-col :xs="24" :sm="24" :md="24" :lg="12" class="px-15-lg">
                    <custom-upload
                      @file-selected="fileSelected"
                      :showPreview="showPreview"
                    >
                      <span class="mx-2">
                        {{ $t("drag-document-photo-file") }}
                      </span>
                      <template #progress>
                        <el-progress
                          :percentage="uploadPercentage"
                          v-if="showProgress"
                        ></el-progress>
                      </template>

                      <!-- <template #preview="{file , fileLink}"> -->

                      <!-- </template> -->
                      <!-- </template> -->
                    </custom-upload>
                  </el-col>
                  <el-col :xs="24" :sm="24" :md="24" :lg="12" class="px-15-lg">
                    <el-button class="btn-cyan-light">{{
                      $t("scan-photo")
                    }}</el-button>
                  </el-col>
                </div>
              </el-row>
              <el-row :gutter="6" class="width-full">
                <el-col
                  :xs="24"
                  :sm="24"
                  :md="24"
                  :lg="10"
                  class="px-15-lg mt-2 d-flex"
                >
                  <span>{{ $t("document-title") }}</span>
                  <el-input v-model="fileDetails.Title"> </el-input>
                </el-col>
              </el-row>
            </span>
            <span>
              <!-- <div class="width-full mt-4">
                <el-form class="" label-position="top" :model="form">
                  <el-form-item class="form-item-with-right-label width-full">
                    <el-input
                      class="notes-input width-full"
                      type="textarea"
                      :rows="7"
                    >
                    </el-input>
                  </el-form-item>
                </el-form>
              </div> -->
            </span>
            <span class="mt-4">
              <el-button
                class="btn-cyan-light px-4-lg mt-2"
                @click="attachFile()"
                >{{ $t("ok") }}</el-button
              >
            </span>
          </el-tab-pane>
          <el-tab-pane
            :label="$t('display-archive-files')"
            name="archive-files"
          >
            <el-container class="container mt-0 mb-0 invoice-table">
              <el-table
                :data="filesList"
                style="width: 100%"
                stripe
                border
                max-height="250"
                class="invoice-table"
              >
                <el-table-column
                  align="center"
                  prop="title"
                  :label="$t('document-title')"
                />
                <el-table-column
                  align="center"
                  :label="$t('addition-date')"
                  prop="dateImages"
                />

                <el-table-column
                  align="center"
                  prop="display_document"
                  :label="$t('display-document')"
                  ><template slot-scope="scope">
                    <a :href="scope.row.imagePath" target="_blank">{{
                      $t("display-file")
                    }}</a>
                  </template>
                </el-table-column>
                <el-table-column align="center" width="60">
                  <template slot-scope="scope">
                    <el-popconfirm
                      icon="el-icon-info"
                      icon-color="red"
                      title="تأكيد حذف الصنف ؟"
                      @confirm="deleteFile(scope.row.id)"
                    >
                      <i
                        slot="reference"
                        class="setting-button danger-color el-icon-delete-solid"
                      ></i>
                    </el-popconfirm>
                  </template>
                </el-table-column>
              </el-table>
            </el-container>
            <span class="">
              <el-button
                class="mt-2 btn-cyan-light px-4-lg"
                @click="attachFileDialog = false"
                >{{ $t("ok") }}</el-button
              >
            </span>
          </el-tab-pane>
        </el-tabs>
      </el-container>
    </el-dialog>
    <accountingtree
      @node-selected="selectAssetAccount"
      v-if="assetsAccountNumber"
    />
    <accountingtree
      v-if="depreciationExpenseAccount"
      @node-selected="selectDepreciationExpense"
    />
    <accountingtree
      v-if="depreciationComplexAccount"
      @node-selected="selectDepreciationComplex"
    />
    <div class="text-center ma-4 mx-8 py-2 mt-0 pt-4">
    <div class="
      justify-center
      mt-2
      action-buttons-nonGrown
      align-center align-baseline
    ">
    <el-button v-if="!disable" size="mini" class="mb-1 btn-blue" @click="update()">{{ $t("save-f5") }}</el-button>
    <NuxtLink :to="
      localePath(
        '/reports-and-statements/public-statements/report-of-fixed-assets'
      )
    ">
      <el-button size="mini" class="mb-1 btn-violet-faded">{{
      $t("search-f7")
      }}</el-button>
    </NuxtLink>
    <el-button size="mini" class="mb-1 btn-red" @click="deleteRecord()">{{
    $t("delete-f8")
    }}</el-button>
    <NuxtLink :to="localePath('/accounting/card-fixed-assets')">
      <el-button size="mini" class="mb-1 btn-violet">{{
      $t("back-f6")
      }}</el-button>
    </NuxtLink>
    <NuxtLink to="../../../../report-management">
      <el-button size="mini" class="mb-1 btn-grey" @click="$refs.reportInstance.openReport(reportData);">
        {{ $t("print-f4") }}</el-button>
      </NuxtLink>
    <report ref="reportInstance"></report>
  </div>
</div>
</div>
</template>
<script>
import Insert from "~/components/accounting/assets-group/new/Invoice";
import InvoiceSummary from "~/components/accounting/assets-group/new/summary/Summary";
import CustomUpload from "~/components/static/customUpload.vue";
import reportsPaths from "~/paths.json";
import report from "~/components/report-managment/report-managment";
// import Addcostcenter from "~/components/dialogs/add-cost-center";
// import Costcenterone from "~/components/dialogs/cost-center-one";
import { mapState, mapMutations } from "vuex";
import Accountingtree from "~/components/dialogs/accounting-tree";

export default {
  components: {
    Insert,
    InvoiceSummary,
    // Addcostcenter,
    // Costcenterone,
    Accountingtree,
    CustomUpload,
    report,

  },
  name: "addition-form",
  data() {
    return {
      data: null,
      token: "bearer " + localStorage.getItem("accessToken"),
      form: {
        pageSize: null,
      },
      attachFileDialog: false,
      depreciationTypeGaid: {
        monthly: 1,
        yearly: 2
      },
      depreciationType: {
        fixed: 1,
        decreased: 2
      },
      loading: false,
      form: {},
      assetsAccountNumber: false,
      depreciationComplexAccount: false,
      depreciationExpenseAccount: false,
      fileDetails: {
        file: "",
        Title: "",
        assetID: this.$route.params.id
      },
      showPreview: false,
      showProgress: false
    };
  },
  computed: {
    ...mapState({
      singleRecordDetails: state =>
        state.Accounting.cardFixedAssets.singleRecordDetails,
      providerSupplierList: state => state.lists.providerSupplierList,
      assetsAccountList: state => state.Accounting.assetsGroup.records,
      costCentersList: state => state.lists.costCentersList,
      disable: state => state.Accounting.cardFixedAssets.disable,
      filesList: state => state.General.files.filesList,
      uploadPercentage: state => state.General.files.uploadPercentage
    }),
    reportData() {
      return {
        reportPath: reportsPaths["card-fixed-assets-edit"],
        headerPath: reportsPaths["headerCompany"],
        dataSet: `uri=${this.$config.axios.baseURL}accounting/card-fixed-assets/${this.$route.params.id};jpath=$;Header$Authorization=bearer${" " + localStorage.getItem("accessToken")}`,
        connString: `endpoint=${this.$config.axios.baseURL}accounting/card-fixed-assets/${this.$route.params.id};Header$Authorization=bearer${" " + localStorage.getItem("accessToken")}`,
      };
    },
  },
  methods: {
    ...mapMutations({
      setRecordDetails: "Accounting/cardFixedAssets/setRecordDetails",
      setUploadPercentage: "General/files/setUploadPercentage"
    }),
    remoteMethod(query) {
      this.loading = true;

      this.$store
        .dispatch("Accounting/assetsGroup/fetchRecords", {
          SearchString: query
        })
        .then(e => {
          this.loading = false;
        })
        .catch(e => {
          this.loading = false;
          this.$message.error(e.message);
        });
    },
    async openDialogAssetsNumber(state) {
      try {
        this.depreciationComplexAccount = false;
        this.depreciationExpenseAccount = false;
        this.assetsAccountNumber = true;
        await this.$store.dispatch(`accountingTree/getChildren`, 0);
        this.updateDialogState(state);
      } catch (err) {
        return err
      }
    },
    async openDialogDepreciationComplex(state) {
      try {
        this.assetsAccountNumber = false;
        this.depreciationComplexAccount = true;
        this.depreciationExpenseAccount = false;
        await this.$store.dispatch(`accountingTree/getChildren`, 0);
        this.updateDialogState(state);
      } catch (err) {
             return err
      }
    },
    async openDialogDepreciation(state) {
      try {
        this.assetsAccountNumber = false;
        this.depreciationComplexAccount = false;
        this.depreciationExpenseAccount = true;
        await this.$store.dispatch(`accountingTree/getChildren`, 0);
        this.updateDialogState(state);
      } catch (err) {
            return err
      }
    },
    selectAssetAccount(data) {
      if (data.hasChildren) {
        this.$confirm(
          this.$t("youSelectAccountBeMainAccount_SelectSubAccount"),
          "Warning",
          {
            confirmButtonText: this.$t("ok"),
            showCancelButton: false,
            type: "warning",
            center: true,
            customClass: "confirmBox"
          }
        ).then(() => {
          return this.$store
            .dispatch(`accountingTree/getChildren`, 0)
            .then(() => {
              this.updateDialogState(true);
            });
        });
      } else {
        this.form.originalAccId = data.accID;
        this.originalAccName = data.label;
         
        this.updateDialogState(false);
      }
    },
    selectDepreciationExpense(data) {
      if (data.hasChildren) {
        this.$confirm(
          this.$t("youSelectAccountBeMainAccount_SelectSubAccount"),
          "Warning",
          {
            confirmButtonText: this.$t("ok"),
            showCancelButton: false,
            type: "warning",
            center: true,
            customClass: "confirmBox"
          }
        ).then(() => {
          return this.$store
            .dispatch(`accountingTree/getChildren`, 0)
            .then(() => {
              this.updateDialogState(true);
            });
        });
      } else {
        this.form.expenseAccId = data.accID;
        this.expenseAccName = data.label;
         
        this.updateDialogState(false);
      }
    },
    deleteFile(id) {
       
      this.$store.dispatch("General/files/deleteFile", id);
    },
    attachFile() {
      if (this.fileDetails.file == "") {
        this.$message({
          message: "please-select-file",
          type: "warning"
        });
        return;
      }
      this.showProgress = true;
      this.setUploadPercentage(0);
      this.$store
        .dispatch("General/files/attachAssetFile", this.fileDetails)
        .then(res => {
          if ((res.status = 201)) {
            this.$notify({
              title: "Success",
              message: this.$t("done-attach-a-file"),
              type: "success"
            });
            this.fileDetails = {
              file: "",
              Title: "",
              assetID: this.$route.params.id
            };
            this.attachFileDialog = false;
            this.showProgress = false;
            this.showPreview = false;
          } else {
            this.$notify({
              title: "Error",
              message: this.$t("error-attach-a-file"),
              type: "error"
            });
          }
        });
    },
    fileSelected(file, fileLink) {
      this.showPreview = true;
      this.fileDetails.file = file;
      this.fileLink = fileLink;
    },
    selectDepreciationComplex(data) {
      if (data.hasChildren) {
        this.$confirm(
          this.$t("youSelectAccountBeMainAccount_SelectSubAccount"),
          "Warning",
          {
            confirmButtonText: this.$t("ok"),
            showCancelButton: false,
            type: "warning",
            center: true,
            customClass: "confirmBox"
          }
        ).then(() => {
          return this.$store
            .dispatch(`accountingTree/getChildren`, 0)
            .then(() => {
              this.updateDialogState(true);
            });
        });
      } else {
        this.form.depreciationAccId = data.accID;
        this.depreciationAccName = data.label;
         
        this.updateDialogState(false);
      }
    },
    handleTabClicked(tab) {
      if (tab.name == "archive-files") {
        this.$store.dispatch("General/files/fetchAssetFiles", {
          assetId: this.$route.params.id
        });
      }
    }
  },
  watch: {
    singleRecordDetails: {
      handler({
        fixedAssetsAddedList: fixedAssetsAddedList,
        fixedAssetsDetailsList: fixedAssetsDetailsList,
        ...fixedAdditions
      }) {
        this.form = fixedAdditions;
         
      },
      deep: true
    },
    form: {
      handler(newVal) {
        let DeepClone = JSON.parse(JSON.stringify(newVal));
        this.setRecordDetails({
          ...DeepClone
        });
      },
      deep: true
    }
  }
};
</script>