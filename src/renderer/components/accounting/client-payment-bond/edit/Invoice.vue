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
                      placeholder="0"
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

                <el-col :xs="24" :sm="8" :md="10" :lg="10">
                  <el-form-item :label="$t('client-name')">
                    <el-input
                      :placeholder="
                        form.customerAccID + '--' + form.customerAccName
                      "
                      disabled
                    >
                    </el-input>
                  </el-form-item>
                </el-col>

                <el-col :xs="24" :sm="8" :md="8" :lg="4">
                  <el-form-item :label="$t('amount')">
                    <el-input
                      v-model="form.amount"
                      @input="form.amount = $convertToValidNumber(form.amount)"
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
                    <el-select v-model="AccIdAndMdcode" @change="getBalance">
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
import { mapMutations, mapState } from "vuex";
export default {
  name: "invoice",

  data: function() {
    return {
      distribution_of_the_amount_to_the_invoices: false,
      AccIdAndMdcode:"",
      form: {
        voucherCode: 0,
        date: new Date(),
        customerAccID: "",
        amount: 0,
        fromAccId: "",
        bankFundID:0,

      },
      balance: 0
    };
  },
  computed: {
    ...mapState({
      banksAndFundsList: state => state.lists.banksAndFundsList,
      providerCustomerList: state => state.lists.providerCustomerList,
      singleRecordDetails: state =>
        state.Accounting.clientPaymentBond.singleRecordDetails
    })
  },
  methods: {
    ...mapMutations({
      banksOrFundsSelected: "Accounting/clientPaymentBond/banksOrFundsSelected",
      changeDistributionStatus:
        "Accounting/clientPaymentBond/changeDistributionStatus",
      setRecordDetails: "Accounting/clientPaymentBond/setRecordDetails"
    }),
    accIdAndMdcodeArr(){
      let fundAndBankId = this.AccIdAndMdcode.split("-")
      this.form.bankFundAccId = fundAndBankId[0];
      this.form.bankFundID =  fundAndBankId[1];
      return fundAndBankId;
    },
    getBalance() {
      this.accIdAndMdcodeArr();
      let BanksOrFund =
        this.banksAndFundsList.find(el => el.maccId === this.form.fromAccId)
          ?.mnotes ?? "1";
      if (BanksOrFund === "1") {
        this.banksOrFundsSelected("banks");
      } else {
        this.banksOrFundsSelected("funds");
      }

      this.$store
        .dispatch("Accounting/paymentCompoundVouchers/getBalance", {
          Id: this.form.fromAccId
        })
        .then(response => {
          let data = response.data.data;
           
          this.balance = data;
        })
        .catch(error => {
           
          this.$notify.error({
            title: "خطا",
            message: "حدث خطا اثناء جلب الرصيد"
          });
        });
    }
  },
  watch: {
    form: {
      handler: function(newValue, oldValue) {
        let { voucherCode, date, fromAccId, voucherId } = newValue;

        this.setRecordDetails({
          voucherCode,
          fromAccId,
          voucherId,
          date: new Date(date).toISOString()
        });
      },
      deep: true
    },
    singleRecordDetails: {
      handler: function(newValue, oldValue) {
         
         
        this.form = {
          voucherId: newValue.voucherID,
          date: new Date(newValue.date),
          fromAccId: newValue.fromAccId,
          customerAccID: newValue.voucherDetailsList[0].toAccId ?? "",
          customerAccName: newValue.voucherDetailsList[0].toAccName ?? "",
          voucherCode: newValue.voucherCode
        };
         
        this.$nextTick(() => {
          this.getBalance();
        });
      }
    }
  }
  /*


     "voucherID": 1149,
    "voucherCode": 10,
    "date": "2022-03-17T11:35:51.47",
    "fromAccId": "1000210002",
    "fromAccName": "صندوق الخمرة",
    "voucherDetails": "",

    */
};
</script>
