<template>
  <el-container class="container box-shadow ma-4 mb-0 px-2 py-3">
    <el-form class="invoice-form width-full" label-position="top" :model="form">
      <el-row :gutter="6" class="width-full">
        <el-col :xs="24" :sm="24" :md="24">
          <el-row :gutter="6">
            <el-col :xs="24" :sm="12" :md="4" :lg="4">
              <el-form-item :label="$t('invoice-number')">
                <el-input disabled v-model="form.inVoiceID" >
                </el-input>
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="24" :md="4" :lg="4">
              <el-form-item :label="$t('invoice-date')">
                <el-date-picker
                  class="width-full"
                  v-model="form.dateGr"
                ></el-date-picker>
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="24" :md="4" :lg="4">
              <el-form-item :label="$t('invoice-type')">
                <el-select v-model="form.payType" :placeholder="$t('all')" @change="handleChangeInvoiceType">
                  <el-option :label="$t('cash')" :value="0" ></el-option>
                  <el-option :label="$t('postponed')" :value="1"></el-option>
                </el-select>
              </el-form-item>
            </el-col>

          </el-row>
        </el-col>
        <el-col :span="24">
          <el-row :gutter="6">
            <el-col :xs="24" :sm="24" :md="4" :lg="4">
              <el-form-item :label="$t('payment-method')">
                <el-select :disabled="!isCashSupplier" v-model="form.qutationID">
                  <el-option :label="$t('monetary')" :value="0"></el-option>
                    <el-option :label="$t('transfer')" :value="1"></el-option>
                  <el-option :label="$t('chic')" :value="2"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="24" :md="4" :lg="4">
              <el-form-item :label="$t('supplier-name')">
                <el-select
                  v-model.number="form.providerID"
                  @change="selectProvider(form.providerID)"
                  filterable
                  remote
                  :placeholder="$t('search')"
                  :remote-method="remoteSupplierName"
                  :loading="supplierNamesLoading"
                  class="account-name width-full"
                >
                  <div
                    v-if="isCashSupplier"
                    class="add-btn add-btn-red"
                    @click="goToCreateSupplier"
                  >
                    {{ $t("add") }}
                    <i class="el-icon-plus mx-1"></i>
                  </div>
                  <div
                    v-else
                    class="add-btn add-btn-red"
                    @click="showAddSupplierDialog = true"
                  >
                    {{ $t("add") }}
                    <i class="el-icon-plus mx-1"></i>
                  </div>
                        <!--   TODO : lang-->
                  <el-option :value="0" label="مورد نقدي" ></el-option>
                  <el-option
                    v-for="item in suppliersNames"
                    :key="item.id"
                    :label="item.name"
                    :value="item.id"
                  >
                  <span style="float: left">{{ item.name }}</span>
                    <span style="float: right; color: #8492a6; font-size: 13px"
                      >{{ item.id }}</span>
                  </el-option>
                </el-select>
              </el-form-item>
              <el-dialog :visible.sync="showAddSupplierDialog" width="40%">
                <span>
                  <el-container class="d-block box-shadow mb-0 px-2 py-2">
                    <el-form class="invoice-form width-full" label-position="top">
                      <el-row :gutter="6" class="width-full">
                        <el-col :xs="24" :sm="24" :md="24" :lg="24">
                          <el-form-item>
                            <h3 class="text-center" style="color:#28B4B3">{{
                              $t("supplier-name")
                            }}</h3>
                            <el-input v-model="allInvoicesDetailsPayment.customerName" />
                          </el-form-item>
                        </el-col>
                      </el-row>

                      <el-row :gutter="6" class="width-full">
                        <el-col :xs="24" :sm="24" :md="24" :lg="24">
                          <el-form-item>
                            <h3 class="text-center" style="color:#28B4B3">{{
                              $t("mobile-number")
                            }}</h3>
                            <el-input v-model="allInvoicesDetailsPayment.mobileCustomer" />
                          </el-form-item>
                        </el-col>
                      </el-row>

                      <el-row :gutter="6" class="width-full">
                        <el-col :xs="24" :sm="24" :md="24" :lg="24">
                          <el-form-item>
                            <h3 class="text-center" style="color:#28B4B3">{{
                              $t("card-no-cust")
                            }}</h3>
                            <el-input v-model="allInvoicesDetailsPayment.cardNoCustomer" />
                          </el-form-item>
                        </el-col>
                      </el-row>

                      <el-row :gutter="6" class="width-full">
                        <el-col :xs="24" :sm="24" :md="24" :lg="24">
                          <el-form-item>
                            <h3 class="text-center" style="color:#28B4B3">{{
                              $t("supplier-address")
                            }}</h3>
                            <el-input v-model="allInvoicesDetailsPayment.addressCustomer" />
                          </el-form-item>
                        </el-col>
                      </el-row>
                    </el-form>
                  </el-container>
                </span>
                <span slot="footer" class="dialog-footer">
                  <el-button
                    class="btn-cyan-light px-4-lg"
                    @click="showAddSupplierDialog = false"
                    >{{ $t("ok") }}</el-button
                  >
                </span>
              </el-dialog>
            </el-col>
            <el-col v-if="isCashSupplier" :xs="24" :sm="24" :md="4" :lg="4">
              <el-form-item :label="$t('box-name')">
                <el-select
                  v-model.number="form.cachierID"
                  filterable
                  remote
                  :placeholder="$t('search')"
                  :remote-method="remoteCachierID"
                  :loading="cachierIDsLoading"
                  class="account-name width-full"
                  :default-first-option="true"

                >
                  <el-option
                    v-for="item in fundsAndBanksList"
                    :key="item.id"
                    :label="item.name"
                    :value="item.id"
                  >
                    <span style="float: left">{{ item.name }}</span>
                    <span style="float: right; color: #8492a6; font-size: 13px"
                      >{{ item.id }}</span>
                  </el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="24" :md="isCashSupplier?12:16" :lg="isCashSupplier?12:16">
              <div class="inline-button-container d-flex inner-flex-buttons">
                <el-form-item class="mt-2">
                  <el-button
                    class="btn-cyan-light width-full"
                    @click="additionalChoice = true"
                    >{{ $t("additional-data") }}</el-button
                  >
                </el-form-item>


              </div>
            </el-col>
          </el-row>
        </el-col>
        <el-col :span="24">
          <el-row :gutter="6">
            <el-col :xs="24" :sm="24" :md="4" :lg="4">
              <el-form-item
                :label="$t('check-number')"
                v-show="additional_info_control.checkNo"
              >
                <el-input v-model="allInvoicesDetailsPayment.checkNo">
                </el-input>
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="24" :md="4" :lg="4">
              <el-form-item
                :label="$t('check-date')"
                v-show="additional_info_control.checkDate"
              >
                <el-date-picker
                  type="date"
                  placeholder="2020-10-15"
                  v-model="allInvoicesDetailsPayment.checkDate"
                ></el-date-picker>
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="24" :md="4" :lg="4">
              <el-form-item
                :label="$t('cost-center')"
                v-show="additional_info_control.costCenterID"
              >
                <el-select
                  v-model="form.costCenterID"
                  clearable
                  :placeholder="$t('search')"
                >
                  <el-option
                    :label="$t('without')"
                    :value="0"
                  ></el-option>
                  <el-option v-for="x in costCentersList"
                             :key="x.id"
                             :label="x.mname"
                             :value="x.mdcode">

                  </el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
        </el-col>
        <el-col :span="24">
          <el-row :gutter="6">
            <el-col :xs="24" :sm="24" :md="4" :lg="4">
              <el-form-item :label="$t('supplier-invoice-no')" v-show="additional_info_control.provInvNo">
                  <el-input
                    v-model="form.provInvNo"
                    v-show="additional_info_control.provInvNo"
                  >
                  </el-input>
                </el-form-item>
            </el-col>
            <el-col :sm="24" :xs="24" :md="4" :lg="4">
              <el-form-item :label="$t('supplier-invoice-date')" v-show="additional_info_control.provInvDate">
                  <el-date-picker

                    v-model="form.provInvDate"
                  ></el-date-picker>
                </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="24" :md="4" :lg="4">
              <el-form-item :label="$t('currency')" v-show="additional_info_control.currency_checked">
                  <el-row :gutter="6">
                    <el-col :span="15">
                      <el-select
                        v-model="allInvoicesDetailsPayment.currencyId"
                        filterable
                        remote
                        :placeholder="$t('search')"
                        :remote-method="remoteCurrencies"
                        :loading="loadingCurrency"
                        @change="changeCurrency"
                        clearable
                      >
                        <el-option
                          v-for="curr in currencies"
                          :key="curr.id"
                          :label="curr.currencyName"
                          :value="curr.id"
                        >
                        </el-option>
                      </el-select>
                    </el-col>
                    <el-col :span="9">
                      <el-input
                        class="text-center"
                        v-model="allInvoicesDetailsPayment.transfer"
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
      <el-row v-if="yellowBoxText != ''" :gutter="6" class="width-full info">
        <div class="info-card amounts">{{ yellowBoxText }}</div>
      </el-row>
    </el-form>
    <!-- additional choice -->
    <el-dialog :visible.sync="additionalChoice" width="40%">
      <div slot="title" class="dialog-title">
        <span>{{ $t("please-choose-data") }}</span>
      </div>
      <span>
        <el-container class="d-block box-shadow mb-0 px-2 py-2">
          <el-form class="invoice-form width-full" label-position="top">
            <el-row :gutter="6" class="width-full section-title">
              <el-col :xs="3" :sm="3" :md="6" :lg="7">
                <div class="side-line"></div>
              </el-col>
              <el-col :xs="16" :sm="18" :md="12" :lg="10">
                <h1 class="section-title-text">
                  {{ $t("additional-data") }}
                </h1>
              </el-col>
              <el-col :xs="3" :sm="3" :md="6" :lg="7">
                <div class="side-line"></div>
              </el-col>
            </el-row>
            <el-row :gutter="6" class="width-full input-rows">
              <el-col :span="12">
                <el-checkbox
                  class="additional-data-checkbox"
                  v-model="additional_info_control.checkNo"
                  @change="toggleCheckNumberInfo()"
                />
                <span class="title">{{ $t("check-number") }}</span>
              </el-col>

            </el-row>
            <el-row :gutter="6" class="width-full input-rows">
              <el-col :span="12">
                <el-checkbox
                  class="additional-data-checkbox"
                  v-model="additional_info_control.checkDate"
                />
                <span class="title">{{ $t("check-date") }}</span>
              </el-col>

            </el-row>
            <el-row :gutter="6" class="width-full input-rows">
              <el-col :span="12">
                <el-checkbox
                  class="additional-data-checkbox"
                  v-model="additional_info_control.costCenterID"
                />
                <span class="title">{{ $t("cost-center") }}</span>
              </el-col>

            </el-row>
            <el-row :gutter="6" class="width-full input-rows">
              <el-col :span="12">
                <el-checkbox
                  class="additional-data-checkbox"
                  v-model="additional_info_control.provInvNo"
                />
                <span class="title">{{ $t("supplier-invoice-no") }}</span>
              </el-col>

            </el-row>
            <el-row :gutter="6" class="width-full input-rows">
              <el-col :span="12">
                <el-checkbox
                  class="additional-data-checkbox"
                  v-model="additional_info_control.provInvDate"
                />
                <span class="title">{{ $t("supplier-invoice-date") }}</span>
              </el-col>

            </el-row>
            <el-row :gutter="6" class="width-full input-rows">
              <el-col :span="12">
                <el-checkbox
                  class="additional-data-checkbox"
                  v-model="additional_info_control.currency_checked"
                  @change="show_currency()"
                />
                <span class="title">{{ $t("currency") }}</span>
              </el-col>

            </el-row>
          </el-form>
        </el-container>
      </span>
      <span slot="footer" class="dialog-footer">
        <el-button
          class="btn-cyan-light px-4-lg"
          @click="additionalChoice = false"
          >{{ $t("ok") }}</el-button
        >
      </span>
    </el-dialog>
  </el-container>
</template>
<script>
import SearchInvoiceCategories from "~/components/dialogs/search-invoice-categories";
import AttachFile from "~/components/dialogs/attach-file";
import addcostcenter from "~/components/dialogs/add-cost-center";
import Accountingtree from "~/components/dialogs/accounting-tree";
import { mapState, mapMutations } from "vuex";
export default {
  name: "invoice",
  data: function() {
    return {
      form :{
        inVoiceID : 0, // رقم الفاتوره
        dateGr:new Date(), // تاريخ الفاتوره
        payType: 0, // رقم الفاتوره
        costCenterID: 0, // مركز الفاتوره
        provInvNo: "", // رقم فاتوره المورد
        provInvDate: new Date(), // تاريخ فاتوره المورد
        providerID: 0, // اسم المورد
        cachierID: null, // اسم الصندوق,
        qutationID :  0 // "طريقه الدفع"
      },
      allInvoicesDetailsPayment: {
        customerName: "",
        mobileCustomer: "",
        addressCustomer: "",
        cardNoCustomer: "",
        currencyId: "",
        transfer: 1,
        checkNo: "",
        checkDate: ""
      },
      additional_info_control: {
        checkNo: false,
        checkDate: false,
        costCenterID: false,
        provInvNo: false,
        provInvDate: false,
        currency_checked: false
      },
      additionalChoice: false,
      supplierNamesLoading: false,
      isCashSupplier: true,
      showAddSupplierDialog: false,
      loadingCurrency: false,
      loadingCostCenters: false,
      cachierIDsLoading: false,
    };
  },
  created() {
    this.$store.dispatch("purchases/purchasesInvoice/getMaxCode").then(res => {
      this.form.inVoiceID = res.data.data;

    }).catch(err => {
      this.$message.error(err.response.data.message);
    });
  },
  computed: {
    tax() {
      return this.$store.getters.getTaxInformation;
    },
    ...mapState({
      suppliersNames: state => state.suppliersManagement.supplierData.records,
      fundsAndBanksList: state => state.systemCards.globalList.fundsAndBanksList,
      costCentersList: state => state.lists.costCentersList,
      currencies: state => state.systemCards.currencyData.records,
      countedAmount: state => state.purchases.purchasesInvoice.countedAmount,
      allowedDiscountNumber: state => state.purchases.purchasesInvoice.allowedDiscountNumber,
      invoiceId: state => state.purchases.purchasesInvoice.invoiceId,

    }),
    yellowBoxText() {
      let text = '';
 /*     console.log(this.countedAmount);
      Object.entries(this.countedAmount).forEach(([key, value], index) => {
        text += (`${key} ${value}`)
        if(index != Object.entries(this.countedAmount).length-1) {
          text += ', '
        }
      });*/
      return text;
    },
  },
  methods: {
    ...mapMutations({
      toggleCurrencyColumn : "purchases/purchasesInvoice/toggleCurrencyColumn",
      setProviderTaxable : "purchases/purchasesInvoice/setProviderTaxable",
      setRecordDetails: "purchases/purchasesInvoice/setRecordDetails"
    }),
  selectProvider(){
    let providerSelected = this.suppliersNames.find((prov)=> prov.id == this.form.providerID);
    this.setProviderTaxable(providerSelected?.taxable ?? this.tax.purchase.taxType)
  },
    goToCreateSupplier() {
      let routerData = this.$router.resolve({path: '/suppliers-management/supplier-data/new'})
      window.open(routerData.href, '_blank')
    },
    handleChangeInvoiceType(select) {
      // if select invoice type = postponed disable payment type -- hide funds and banks select
      if (select == 1) {
        this.isCashSupplier = false
        this.form.qutationID = 0
      } else {
        // else show funds and banks select -- enable payment type
        this.isCashSupplier = true
      }
    },
    show_currency() {
      console.log(this.currencies)
      let localCurrnecy = this.currencies.find(el => el.localOrForiegn == 0)
      this.allInvoicesDetailsPayment.currencyId = localCurrnecy.id
      this.allInvoicesDetailsPayment.transfer = localCurrnecy.transferRateGeneral
    },
    changeCurrency(selectedID){
      let currencySelected = this.currencies.find(el => el.id == selectedID)
      this.allInvoicesDetailsPayment.transfer = currencySelected.transferRateGeneral
      if(currencySelected.localOrForiegn == 1){
        this.toggleCurrencyColumn({
          status : true ,
          rate : this.allInvoicesDetailsPayment.transfer
        })
      }
    },
    toggleCheckNumberInfo() {
      const state = this.additional_info_control.checkNo;
      this.additional_info_control.checkDate = state;
    },
    async remoteCurrencies(query) {
      this.loadingCurrency = true
      await this.$store.dispatch("systemCards/currencyData/fetchRecords", {
        searchString: query
      });
      this.loadingCurrency = false
    },
    async remoteSupplierName(value) {
      this.supplierNamesLoading = true;
      this.$store.dispatch("suppliersManagement/supplierData/fetchRecords", {
        SearchString: value
      });
      this.supplierNamesLoading = false;
    },
/*    async remoteCostCenters(value) {
      this.loadingCostCenters = true;
      this.$store.dispatch("lists/getCostCentersList", {
        SearchString: value
      });
      this.loadingCostCenters = false;
    },*/
    async remoteCachierID(value) {
      this.cachierIDsLoading = true;
      await this.$store.dispatch("systemCards/globalList/fetchFundsAndBanks",{
        SearchString: value
      });
      this.cachierIDsLoading = false;
    },
    addSupplier() {
      this.$store.dispatch("suppliersManagement/supplierData/create").then(()=> {
          this.$notify({
          title: "Success",
          message: "Created",
          type: "success"
        })
      }).then(() => {
        this.showAddSupplierDialog = false;
        this.$store.dispatch("suppliersManagement/supplierData/fetchMaxCode").then(res => {
          this.form.code = res.data.data;
        }).catch(err => {
          this.$message.error(err.response.data.message);
        });
        this.form = {
          ...this.form,
          accID: 0,
          supplier_name: "",
          providerType: "",
          accountNature: "",
          tax: 0
        };
      })
      .catch((err)=>{
        this.$notify({
            title: "Error",
            message: "Error NOT Update",
            type: "error"
          });
      })
    },
  },

  watch:{
    form: {
      handler: function(newVal) {
        let DeepClone = structuredClone({...newVal , provInvDate : new Date(newVal.provInvDate).toISOString()})
        this.setRecordDetails(DeepClone);
      },
      deep: true,
      immediate : true
    },
    allInvoicesDetailsPayment:{
    handler (newval){
      let DeepClone = structuredClone(newval);
      this.setRecordDetails({allInvoicesDetailsPayment : {...DeepClone}})
      },
      deep : true,
      immediate : true
    },
    currencies : {
      handler: function(_) {
        console.log("ds")
       this.show_currency()
      },
    }
  },

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
.input-count {
  border: 1px solid #707070;
  padding: 10px 60px;
  margin: 0 10px 5px 10px !important;
  border-radius: 20px;

  @media only screen and (max-width: 375px) {
    padding-left: 5px;
    padding-right: 5px;
    margin-left: 5px;
    margin-right: 5px;
  }
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
.info {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2.5rem;
}
.amounts {
  width: 30%;
  background-color: #fbffbf;
}

.losts {
  width: 20%;
  background-color: #f56c6c;
}
.section-title {
  display: flex;
  align-items: center;
}

.section-title-text {
  text-align: center;
  color: #21798d;
}
.side-line {
  width: 100%;
  border-bottom: 1px solid #21798d;
}
.input-rows {
  min-height: 3rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.dialog-title {
  color: #606266;
  text-align: center;
  font-size: x-large;
  font-weight: 300;
  overflow: hidden;
}
.additional-data-checkbox {
  margin: 0 1rem;
}
.right_buttons {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 65%;

  @media (max-width: 1050px) {
    grid-template-columns: repeat(1, 1fr);
    justify-content: center;
  }

  @media (max-width: 780px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
}
</style>
