<template>
  <el-container class="container box-shadow ma-4 mb-0 px-2 py-3">
    <el-form
      class="invoice-form d-flex justify-center"
      label-position="top"
      :model="form"
    >
      <el-row :gutter="6" class="width-full">
        <el-col :xs="24" :sm="24" :md="18">
          <el-row :gutter="6">
            <el-col :span="24">
              <el-row :gutter="6">
                <el-col :xs="24" :sm="8" :md="8" :lg="4">
                  <el-form-item :label="$t('bond-number')">
                    <el-input
                      v-model.number="form.voucherCode"
                      placeholder="14"
                      disabled
                    >
                    </el-input>
                  </el-form-item>
                </el-col>

                <el-col :xs="24" :sm="8" :md="8" :lg="4">
                  <el-form-item :label="$t('bond-date')">
                    <el-date-picker
                      placeholder="2020-10-15"
                      format="yyyy/MM/dd"
                      Value-format="yyyy/MM/dd"
                      v-model="form.date"
                    ></el-date-picker>
                  </el-form-item>
                </el-col>
     
                <el-col :xs="24" :sm="8" :md="8" :lg="10">
                  <el-form-item :label="$t('supplier-name')">
                    <el-select
                      v-model="supplierIdAccID"
                      @change="selectCustomer()"
                    >
                      <el-option
                        v-for="provider in providerSupplierList"
                        :key="provider.providerCustomerId"
                        :value="provider.accId + '-' +  provider.providerCustomerId"
                        :label="provider.pcname + ' - ' + provider.accId"
                      >
                        <span style="float: left">{{ provider.pcname }}</span>
                        <span
                          style="float: right; color: #8492a6; font-size: 13px"
                          >{{ provider.accId }}</span
                        >
                      </el-option>
                    </el-select>
                  </el-form-item>
                </el-col>

                <el-col :xs="24" :sm="8" :md="8" :lg="4">
                  <el-form-item :label="$t('amount')">
                    <el-input
                      v-model="form.amount"
                      @input="
                        form.amount = $convertToValidNumber(form.amount);
                        distribution_of_the_amount_to_the_invoices = false;
                        changeDistributionStatus({
                          status: distribution_of_the_amount_to_the_invoices,
                          amount: form.amount
                        });
                      "
                      :placeholder="$t('amount')"
                    >
                    </el-input>
                  </el-form-item>
                </el-col>
              </el-row>
            </el-col>

            <el-col :span="24">
              <el-row :gutter="6">
                <el-col :xs="24" :sm="8" :md="8" :lg="4">
                  <el-form-item :label="$t('box-bank')">
                    <!-- <el-select
                      v-model="form.bankFundAccId"
                      @change="getBalance"
                    > -->
                    <el-select
                      v-model="AccIdAndMdcode"
                      @change="getBalance"
                    >
                      <el-option
                        v-for="fund in banksAndFundsList"
                        :key="fund.maccId + Math.random()"
                        :value="fund.maccId + '-' + fund.mdcode"
                        :label="fund.mname"
                      >
                      </el-option>
                    </el-select>
                  </el-form-item>
                </el-col>

                <el-col :xs="24" :sm="8" :md="8" :lg="4">
                  <el-form-item :label="$t('current-balance')">
                    <el-input v-model="balance" placeholder="0"> </el-input>
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
                <el-button
                  @click="
                    distribution_of_the_amount_to_the_invoices = !distribution_of_the_amount_to_the_invoices;
                    changeDistributionStatus({
                      status: distribution_of_the_amount_to_the_invoices,
                      amount: $convertToValidNumber(form.amount)
                    });
                  "
                  :class="{
                    'btn-dark-grey': !distribution_of_the_amount_to_the_invoices,
                    'btn-red': distribution_of_the_amount_to_the_invoices
                  }"
                >
                  {{
                    distribution_of_the_amount_to_the_invoices
                      ? $t("escape") +
                        " " +
                        $t("distribution-of-the-amount-to-the-invoices")
                      : $t("distribution-of-the-amount-to-the-invoices")
                  }}
                </el-button>
              </el-form-item>
            </div>
          </div>
        </el-col>
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
      distribution_of_the_amount_to_the_invoices: false,
      supplierIdAccID: "",
      AccIdAndMdcode:"",
      form: {
        voucherCode: 0,
        date: new Date(),
        amount: 0,
        bankFundAccId: "",
        bankFundID:0,
        supplierID:"",
        supplierAccID:"",
        voucherDetails: "string",
      },
      balance: 0
    };
  },

  computed: {
    ...mapState({
      banksAndFundsList: state => state.lists.banksAndFundsList,
      providerSupplierList: state => state.lists.providerSupplierList
    })
  },
  methods: {
    ...mapMutations({
      banksOrFundsSelected:
        "Accounting/supplierPaymentBond/banksOrFundsSelected",
      changeDistributionStatus:
        "Accounting/supplierPaymentBond/changeDistributionStatus",
      setRecordDetails: "Accounting/supplierPaymentBond/setRecordDetails"
    }),
    accIdAndMdcodeArr(){
      let fundAndBankId = this.AccIdAndMdcode.split("-")
      this.form.bankFundAccId = fundAndBankId[0];
      this.form.bankFundID =  fundAndBankId[1];
      return fundAndBankId;
    },
    getBalance() {
       this.accIdAndMdcodeArr();
      let BanksOrFund = this.banksAndFundsList.find(
        el => el.maccId === this.form.bankFundAccId
      ).mnotes;
      if (BanksOrFund === "1") {
        this.banksOrFundsSelected("banks");
      } else {
        this.banksOrFundsSelected("funds");
      }

      this.$store
        .dispatch("Accounting/paymentCompoundVouchers/getBalance", {
          Id: this.form.bankFundAccId
        })
        .then(response => {
          let data = response.data.data;
           
          this.balance = data;
        })
        .catch(error => {
           
          this.$notify.error({
            title: "??????",
            message: "?????? ?????? ?????????? ?????? ????????????"
          });
        });
    },
    splitAccIdAndProviderId(){
      let accAndProviderId = this.supplierIdAccID.split("-")
      this.form.supplierAccID = accAndProviderId[0];
      this.form.supplierID = parseInt(accAndProviderId[1]);
    },
    selectCustomer() {
      this.splitAccIdAndProviderId();
      this.$store
        .dispatch("Accounting/supplierPaymentBond/getInvoicesList", {
          Id: this.form.supplierAccID,
          providerId : this.form.supplierID
        })
        .catch(error => {
          this.$notify.error({
            title: "??????",
            message: "?????? ?????? ?????????? ?????? ????????????????"
          });
        });
    }
  },
  created() {
    this.$store
      .dispatch("Accounting/supplierPaymentBond/suggestVoucher")
      .then(response => {
        let data = response.data.data;
        this.form.voucherCode = data.code;
         
      })
      .catch(error => {
         
        this.$notify.error({
          title: "??????",
          message: "?????? ?????? ?????????? ?????? ?????? ??????????"
        });
      });
  },
  watch: {
    form: {
      handler: function(newValue) {
        this.setRecordDetails({
          ...newValue,
          date: new Date(newValue.date).toISOString()
        });
      },
      deep: true
    }
  }
};
</script>
