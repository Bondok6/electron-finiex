<template>
  <div class="">
    <section class="border-none mb-0 mt-3 px-2-lg">
      <el-row>


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
                      v-model="form.originalAccId"
                      label="test"
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
                    <el-input class="" v-model="form.expenseAccId">
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
                    <el-input class="" v-model="form.depreciationAccId">
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
                    <el-input v-model="form.assetNo" class="" />
                  </td>
                </tr>
                <tr>
                  <td class="popup-label">
                    <span>{{ $t("purchasing-price") }}</span>
                  </td>
                  <td>
                    <el-input v-model="form.purchasePrice" class="" />
                  </td>
                </tr>
                <tr>
                  <td class="popup-label">
                    <span>{{ $t("depreciation-calculation-method") }}</span>
                  </td>
                  <td>
                    <el-select
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
                    <el-input v-model="form.depreciationPercentage" class="" />
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
                    <el-select class="width-full" v-model="form.providerName">
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
        <!-- start addGroup dialog -->
        <!-- <el-dialog :visible.sync="addGroup">
          <div class="mb-8">
            <insert />
            <invoice-summary />
          </div>
        </el-dialog> -->
        <!-- end addGroup dialog -->
        <!-- start addCostCenter dialog -->
        <!-- <addcostcenter /> -->

        <!-- start costcenterone dialog -->

        <!-- <costcenterone /> -->
        <!-- end costcenterone dialog -->
      </el-row>
    </section>
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
  </div>
</template>
<script>
import Insert from "~/components/accounting/assets-group/new/Invoice";
import InvoiceSummary from "~/components/accounting/assets-group/new/summary/Summary";
// import Addcostcenter from '~/components/dialogs/add-cost-center';
// import Costcenterone from '~/components/dialogs/cost-center-one';
import Accountingtree from "~/components/dialogs/accounting-tree";
import { mapMutations, mapState } from "vuex";
export default {
  components: {
    Insert,
    InvoiceSummary,
    Accountingtree
    // Addcostcenter,
    // Costcenterone
  },
  name: "addition-form",
  data() {
    return {
      // Enums
      depreciationTypeGaid: {
        monthly: 1,
        yearly: 2
      },
      depreciationType: {
        fixed: 1,
        decreased: 2
      },
      //
      assetsAccountNumber: false,
      depreciationComplexAccount: false,
      depreciationExpenseAccount: false,
      loading: false,
      form: {
        assetCode: "",
        originalAccId: "", // assetsAccountNumber// رقم حساب الاصل
        expenseAccId: "", // حساب مصروف الاهلاك //depreciationAccount
        depreciationAccId: "", //depreciationComplexAccount// حساب مجمع الاهلاك//
        assetNo: "",
        purchasePrice: "",
        depreciationPercentage: "",
        depreciationtype: "",
        assetGroupId: "",
        costCenterId: 0,
        purchaseDate: new Date(),
        dateStrartDepreciation: new Date(),
        location: "",
        depreciationTypeGaid: "",
        providerName: "",
        notes: ""
      },

      originalAccName: "",
      expenseAccName: "",
      depreciationAccName: ""
    };
  },
  computed: {
    ...mapState({
      providerSupplierList: state => state.lists.providerSupplierList,
      assetsAccountList: state => state.Accounting.assetsGroup.records,
      costCentersList: state => state.lists.costCentersList
    })
  },
  methods: {
    ...mapMutations({
      updateDialogState: "accountingTree/updateDialogState",
      setRecordDetails: "Accounting/cardFixedAssets/setRecordDetails"
    }),
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
        this.form.originalAccId = data.accID + "---" + data.label;

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
        this.form.expenseAccId = data.accID + "---" + data.label;

        this.updateDialogState(false);
      }
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
        this.form.depreciationAccId = data.accID + "---" + data.label;

        this.updateDialogState(false);
      }
    },
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
    }
  },
  created() {
    this.$store
      .dispatch("Accounting/cardFixedAssets/suggestCode")
      .then(response => {
        let data = response.data.data;
        this.form.assetCode = data;
      })
      .catch(error => {

        this.$notify.error({
          title: "خطا",
          message: "حدث خطا اثناء جلب رقم الاصل"
        });
      });
  },
  watch: {
    form: {
      handler(newValue) {
        // deep clone by spread operator
        this.setRecordDetails({
          ...newValue,
          originalAccId : newValue.originalAccId.split("---")[0],
          expenseAccId : newValue.expenseAccId.split("---")[0],
          depreciationAccId : newValue.depreciationAccId.split("---")[0],
          depreciationtype: 0,
          dateStrartDepreciation: new Date(
            newValue.dateStrartDepreciation
          ).toISOString(),
          purchaseDate: new Date(newValue.purchaseDate).toISOString()
        });
      },
      deep: true
    }
  }
};
</script>
