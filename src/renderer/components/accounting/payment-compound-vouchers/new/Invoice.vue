<template>
  <el-container class="container box-shadow ma-4 mb-0 px-2 py-3">
    <el-form class="invoice-form width-full" label-position="top" :model="form">
      <el-row :gutter="6" class="width-full">
        <el-col :xs="24" :sm="24" :md="18">
          <el-row :gutter="6">
            <el-col :span="24">
              <el-row :gutter="6">
                <el-col :xs="24" :sm="24" :md="8" :lg="6">
                  <el-form-item :label="$t('bond-number')">
                    <el-input
                      class="text-color bl-none"
                      v-model.number="form.voucherCode"
                      placeholder="0"
                    disabled
                    >
                    </el-input>
                  </el-form-item>
                </el-col>

                <el-col :xs="24" :sm="24" :md="8" :lg="6">
                  <el-form-item :label="$t('bond-date')">
                    <el-date-picker
                      type="date"
                      placeholder="2020/10/15"
                      format="yyyy/MM/dd"
                      v-model="form.date"
                    ></el-date-picker>
                  </el-form-item>
                </el-col>
              </el-row>
            </el-col>

            <el-col :span="24">
              <el-row :gutter="6">
                <el-col :xs="24" :sm="24" :md="8" :lg="6">
                  <el-form-item :label="$t('details')">
                    <el-input
                      class="text-color bl-none"
                      v-model="form.voucherDetails"
                      placeholder=""
                    >
                    </el-input>
                  </el-form-item>
                </el-col>

                <el-col :xs="24" :sm="24" :md="8" :lg="6">
                  <el-form-item :label="$t('box-bank')">
                    <el-select v-model="form.fromAccId" @change="getBalance">
                      <el-option
                        v-for="fund in banksAndFundsList"
                        :key="fund.maccId"
                        :value="fund.maccId"
                        :label="fund.mname"
                      >
                      </el-option>
                    </el-select>
                  </el-form-item>
                </el-col>

                <el-col :xs="24" :sm="24" :md="8" :lg="6">
                  <el-form-item :label="$t('current-balance')">
                    <el-input
                      v-model="form.balance"
                      placeholder=""
                      :readonly="true"
                    >
                    </el-input>
                  </el-form-item>
                </el-col>
              </el-row>
            </el-col>
          </el-row>
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
      form: {
        voucherCode: 0,
        date: new Date(),
        fromAccId: "", // الصندوق و البنوك
        voucherDetails: "",
        balance: 0
      }
    };
  },
  computed: {
    ...mapState({
      fundsList: state => state.lists.fundsList,
      salesMenList: state => state.lists.salesMenList,

      banksAndFundsList: state => state.lists.banksAndFundsList
    })
  },
  methods: {
    getBalance() {
       
      let BanksOrFund = this.banksAndFundsList.find(
        el => el.maccId === this.form.fromAccId
      ).mnotes;
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
           
          this.form.balance = data;
        })
        .catch(error => {
           
          this.$notify.error({
            title: "خطا",
            message: "حدث خطا اثناء جلب الرصيد"
          });
        });
    },
    ...mapMutations({
      banksOrFundsSelected:
        "Accounting/paymentCompoundVouchers/banksOrFundsSelected",
      setRecordDetails: "Accounting/paymentCompoundVouchers/setRecordDetails"
    })
  },
  watch: {
    form: {
      handler: function(newValue, oldValue) {
        let { voucherCode, date, fromAccId, voucherDetails } = newValue;
        this.setRecordDetails({
          voucherCode,
          fromAccId,
          voucherDetails,
          date: new Date(date).toISOString()
        });
      },
      deep: true
    }
  },
  created() {
    this.$store
      .dispatch("Accounting/paymentCompoundVouchers/suggestVoucher")
      .then(response => {
        let data = response.data.data;
        this.form.voucherCode = data.code;
      })
      .catch(error => {
         
        this.$notify.error({
          title: "خطا",
          message: "حدث خطا اثناء جلب رقم القيد"
        });
      });
  }
};
</script>
