<template>
  <el-container class="container box-shadow ma-4 mb-0 px-2 py-3">
    <el-form class="invoice-form width-full" label-position="top" :model="form">
      <el-row :gutter="6" class="width-full">
        <el-col :span="24">
          <el-row :gutter="6">
            <el-col :xs="24" :sm="6" :md="4" :lg="4">
              <el-form-item :label="$t('supply-order-number')">
                <el-input v-model="form.invoiceId" disabled>
                </el-input>
              </el-form-item>
            </el-col>

            <el-col :xs="24" :sm="6" :md="4" :lg="4">
              <el-form-item :label="$t('supply-order-date')">
                <el-date-picker
                  type="date"
                  placeholder="2020-10-15"
                  v-model="form.dateGr"
                  :picker-options="inFinancialYearDatePicked"
                ></el-date-picker>
              </el-form-item>
            </el-col>

            <el-col
              :xs="24"
              :sm="6"
              :md="4"
              :lg="4"
              :class="[delegate_supply ? 'd-block' : 'display-none']"
            >
              <el-form-item :label="$t('account-delegate')">
                <el-select v-model="form.salesManCode">
                  <el-option
                        v-for="salesMen in salesMenList"
                        :key="salesMen.salesManCode"
                        :value="salesMen.salesManCode"
                        :label="salesMen.salName + '---' + salesMen.accId"
                      >
                  </el-option>
                </el-select>
              </el-form-item>
            </el-col>

            <el-col
              :xs="24"
              :sm="6"
              :md="4"
              :lg="4"
              :class="[operation_supply ? 'd-block' : 'display-none']"
            >
              <el-form-item :label="$t('account-operation')">
                <el-select
                  v-model="form.accId"
                  filterable
                  remote
                  ref="name"
                  :placeholder="$t('search')"
                  :remote-method="remoteMethod"
                  :loading="loading"
                  class="account-name width-full"
                >
                  <el-option
                    v-for="item in accountCardList"
                    :key="item.accID"
                    :label="item.accName + ' --- ' + item.accID"
                    :value="item.accID"
                  >
                    <span style="float: left">{{ item.accName }}</span>
                    <span style="float: right; color: #8492a6; font-size: 13px">{{
                      item.accID
                    }}</span>
                  </el-option>
                </el-select>
              </el-form-item>
            </el-col>

          </el-row>
        </el-col>
        <el-col :span="24">
          <el-row :gutter="6">
            <el-col :xs="24" :sm="6" :md="4" :lg="4">
              <el-form-item :label="$t('cost-center')">
                <el-select v-model="form.costCenterID">
                  <el-option
                    :label="$t('add-cost-center')"
                    :value="1"
                    @click="openDialog(true)"
                    class="addSelect"
                  >
                    <el-button class="width-full" @click="openDialog(true)">
                      {{ $t("add-cost-center") }}
                      <i class="el-icon-plus mx-1"></i> </el-button
                  ></el-option>
                  <el-option :label="$t('without')" :value="0"></el-option>
                </el-select>
              </el-form-item>
            </el-col>

            <el-col :xs="24" :sm="6" :md="4" :lg="4">
              <el-form-item :label="$t('supply-order-rate')">
                <el-select v-model.number="form.priceID" disabled>
                      <el-option
                        :label="$t('opening-cost')"
                        :value="PriceColumn.openingCost"
                      ></el-option>
                      <el-option
                        :label="$t('selling-price')"
                        :value="PriceColumn.salePriceBeforeTax"
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
                        :label="$t('lowest-selling-price')"
                        :value="PriceColumn.lowestSalePrice"
                      ></el-option>
                      <el-option
                        :label="$t('wholesale-price')"
                        :value="PriceColumn.wholesalePrice"
                      ></el-option> 
                    </el-select>
              </el-form-item>
            </el-col>

            <el-col :xs="24" :sm="24" :md="16" :lg="16" class="mt-40">
              <div class="inline-button-container d-flex">
                <div class="spacer"></div>
                <el-select
                  v-model="form.type"
                  class="
                    color-blue
                    text-center
                    placeHolderColor
                    selectButton
                    w-250
                  "
                  :placeholder="$t('supply-type')"
                >
                  <el-option
                    :value="1"
                    class="selectButton"
                    :label="$t('delegate-supply')"
                  >
                    <el-button @click="delegate" class="width-full">
                      {{ $t("delegate-supply") }}
                    </el-button>
                  </el-option>

                  <el-option
                    :value="2"
                    class="selectButton"
                    :label="$t('operation-supply')"
                  >
                    <el-button @click="operation" class="width-full">
                      {{ $t("operation-supply") }}
                    </el-button>
                  </el-option>
                </el-select>
              </div>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </el-form>

    <!-- first dialog -->

    <addcostcenter />
  </el-container>
</template>
<script>
import { mapState, mapMutations } from 'vuex';
import Addcostcenter from "~/components/dialogs/add-cost-center";
export default {
  name: "invoice",
  components: {
    Addcostcenter,
  },
  data: function () {
    return {
      loading: false,
      delegate_supply: false,
      operation_supply: false,
      form: {
        invoiceId: 1,
        dateGr: "2022-10-13T10:25:24.61",
        payType: 0,
        salesManCode: 1,
        accId: "0",
        priceID: 0,
        costCenterID: 0,
      },
    };
  },
  computed:{
    ...mapState({
      salesMenList: state => state.lists.salesMenList,
      accountCardList: state => state.Accounting.globalLists.accountCardList,
      singleRecordDetails: state => state.inventory.storeSupplyOrder.singleRecordDetails,
      PriceColumn: state => state.inventory.storeSupplyOrder.PriceColumn,
      inFinancialYearDatePicked: state => {
        let financialYear = state.General.financialYear;
        return {
          disabledDate: time => {
            return time.getTime() >= new Date(financialYear.from) &&
              time.getTime() <= new Date(financialYear.to)
              ? false
              : true;
          }
        };
      }
    })
  },
  methods: {
    ...mapMutations({
      setRecordDetails: 
      "inventory/storeSupplyOrder/setRecordDetails"
    }),
    remoteMethod(query) {
      this.loading = true;
      this.$store
        .dispatch("Accounting/globalLists/getAccountCardList", query)
        .then(e => {
          this.loading = false;
        })
        .catch(e => {
          this.loading = false;
          this.$message.error(e.message);
        });
    }, 
    delegate() {
      this.delegate_supply = true;
      this.operation_supply = false;
      this.form.payType = 0 ;
      this.form.accId = 0 ;
    },
    operation() {
      this.operation_supply = true;
      this.delegate_supply = false;
      this.form.payType = 1 ;
      this.form.salesManCode = 0 ;
    },
    openDialog(state) {
      this.$store.commit("addcostcenter/updateDialogState", state);
    },
  },
  created() {
    if(this.form.payType === 0){
      this.delegate_supply = true;
      this.operation_supply = false;
    }else {
      this.delegate_supply = false;
      this.operation_supply = true;
    }
  },
  watch: {
    singleRecordDetails: {
      handler({allInvoicesDetails, ...newVal}) {
        this.form = {
          ...newVal,
        };
      },
      deep: true,
    },
    form: {
      handler(newVal) {
        this.setRecordDetails({
          ...newVal,
          accId: !isNaN(newVal.accId) ? newVal.accId.toString() : newVal.accId,
        })
      },
      deep: true,
    }
  }
};
</script>