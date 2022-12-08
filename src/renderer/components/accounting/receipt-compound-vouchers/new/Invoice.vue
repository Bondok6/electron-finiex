<template>
  <el-container class="container box-shadow ma-4 mb-0 px-2 py-3">
    <el-form class="invoice-form width-full" label-position="top" :model="form">
      <el-row :gutter="6" class="width-full">
        <el-col :xs="24" :sm="24" :md="18">
          <el-row :gutter="6">
            <el-col :span="24">
              <el-row :gutter="6">
                <el-col :xs="24" :sm="24" :md="8" :lg="4">
                  <el-form-item>
                    <label>{{ $t("bond-number") }}</label>
                    <el-input
                      class="text-color bl-none"
                      :placeholder="$t('checkNo')"
                      v-model.number="form.voucherCode"
                      disabled
                    >
                    </el-input>
                  </el-form-item>
                </el-col>

                <el-col :xs="24" :sm="24" :md="8" :lg="4">
                  <el-form-item>
                    <label>{{ $t("bond-date") }}</label>
                    <el-date-picker
                      type="date"
                      placeholder="2020/10/15"
                      format="yyyy/MM/dd"
                      v-model="form.date"
                    ></el-date-picker>
                  </el-form-item>
                </el-col>

                <el-col :xs="24" :sm="24" :md="8" :lg="4">
                  <el-form-item>
                    <label>{{ $t("box-bank") }}</label>
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
                <el-col :xs="24" :sm="24" :md="8" :lg="4">
                  <el-form-item>
                    <label>{{ $t("current-balance") }}</label>
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

            <el-col :span="24">
              <el-row :gutter="6">
                <el-col :xs="24" :sm="24" :md="8" :lg="4">
                  <el-form-item>
                    <label>{{ $t("details") }}</label>
                    <el-input
                      class="text-color bl-none"
                      v-model="form.voucherDetails"
                      placeholder=""
                      @input="form.details = form.voucherDetails"
                    >
                    </el-input>
                  </el-form-item>
                </el-col>

                <el-col :xs="24" :sm="24" :md="8" :lg="4">
                  <el-form-item>
                    <label>{{ $t("delegate-name") }}</label>
                    <el-select v-model="form.salesManCode">
                      <el-option :value="null" :label="$t('without')"> </el-option>
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

                <el-col :xs="24" :sm="24" :md="8" :lg="4">
                  <el-form-item>
                    <label>{{ $t("date-of-the-delegate-is-document") }}</label>
                    <el-date-picker
                      type="date"
                      placeholder="2020/10/15"
                      format="yyyy/MM/dd"
                      v-model="form.refDocDate"
                    ></el-date-picker>
                  </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="24" :md="8" :lg="4">
                  <el-form-item>
                    <label>{{
                      $t("number-of-the-delegate-is-document")
                    }}</label>
                    <el-input v-model="form.refDocNo" placeholder="">
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
        details: "",
        voucherDetails: "",
        refDocNo: "", // رقم سند المندوب
        refDocDate: new Date(), // تاريخ سند المندوب
        salesManCode: null, // اسم المندوبو
        balance: 0
      }
    };
  },
  computed: {
    ...mapState({
      fundsList: state => state.lists.fundsList,
      salesMenList: state => state.lists.salesMenList,
      singleRecordDetails: state =>
        state.Accounting.receiptCompoundVouchers.singleRecordDetails,
      banksAndFundsList: state => state.lists.banksAndFundsList
    })
  },
  watch: {
    singleRecordDetails: {
      handler: function(val) {
        this.form = {
          // spared form which include default value that not get from server
          ...this.form,
          ...val,
          date: new Date(val.date),
          refDocDate: new Date(),
          details: val.voucherDetails
        };
        this.$nextTick(() => {
          this.getBalance();
        });
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
          .dispatch("Accounting/accountingDailyJournal/attachFile", this.fileDetails)
          .then(res => {
            if ((res.status = 201)) {
              this.$notify({
                title: "Success",
                message: this.$t("done-attach-a-file"),
                type: "success"
              });
              this.fileDetails = {
                file: "",
                title: "",
                gaidID: this.$route.params.id
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
      handleTabClicked(tab) {
        if (tab.name == "archive-files") {
          this.$store.dispatch("Accounting/accountingDailyJournal/fetchFiles", {
            gaidId: this.$route.params.id
          });
        }
      },
      deleteFile(id) {
         
        this.$store.dispatch("Accounting/accountingDailyJournal/deleteFile", id);
      }
    },
    form: {
      handler: function(newValue) {
        let {
          voucherCode,
          date,
          fromAccId,
          details,
          voucherDetails,
          refDocNo,
          refDocDate,
          salesManCode
        } = newValue;
        this.setRecordDetails({
          voucherCode,
          fromAccId,
          details,
          voucherDetails,
          refDocNo,
          salesManCode,
          // must convert format date before send prop to server (ios format)
          refDocDate: new Date(refDocDate).toISOString(),
          date: new Date(date).toISOString()
        });
      },
      deep: true
    }
  },
  methods: {
    ...mapMutations({
      banksOrFundsSelected:
        "Accounting/receiptCompoundVouchers/banksOrFundsSelected"
    }),
    getBalance() {
      // mnotes = 1 ==>  user select bank ==> on invioceTable (grid) -> Enable voucher type payment and banks list
      // mnote = 2  ==>  user select fund => on invioceTable (grid) -> Disable voucher type payment and banks list
      let BanksOrFund =
        this.banksAndFundsList.find(el => el.maccId === this.form.fromAccId)
          ?.mnotes ?? "1";
      if (BanksOrFund === "1") {
        this.banksOrFundsSelected("banks");
      } else {
        this.banksOrFundsSelected("funds");
      }
      // get balance which user setected
      this.$store
        .dispatch("Accounting/receiptCompoundVouchers/getBalance", {
          Id: this.form.fromAccId
        })
        .then(response => {
          let data = response.data.data;
          this.form.balance = data;
          this.form.balance = this.$convertToValidNumber(this.form.balance);

        })
        .catch(() => {
          this.$notify.error({
            title: "خطا",
            message: "حدث خطا اثناء جلب الرصيد"
          });
        });
    },
    ...mapMutations({
      setRecordDetails: "Accounting/receiptCompoundVouchers/setRecordDetails"
    })
  },
  created() {
    this.$store
      .dispatch("Accounting/receiptCompoundVouchers/suggestVoucher")
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
