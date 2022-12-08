<template>
  <div>
    <section class="mb-0 px-4-lg table-append-tax py-3">
      <el-row>
        <el-col :xs="24" :md="12">
          <el-form label-position="top">
            <table style="width: 100%">
              <tbody>
                <tr>
                  <td class="popup-label here">
                    <span>{{ $t("bond-number") }}</span>
                  </td>
                  <td>
                    <el-input v-model="form.voucherCode" disabled>
                    </el-input>
                  </td>
                </tr>
                <tr>
                  <td class="popup-label here">
                    <span>{{ $t("bond-date") }}</span>
                  </td>
                  <td class="w-60">
                    <el-date-picker
                      type="date"
                      placeholder="2020/10/15"
                      format="yyyy/MM/dd"
                      v-model="form.date"
                      class="width-full"
                    ></el-date-picker>
                  </td>
                </tr>
                <tr>
                  <td class="popup-label here">
                    <span>{{ $t("received-from") }}</span>
                  </td>
                  <td>
                    <el-select
                      v-model="voucherDetailsList.toAccId"
                      @change="getBalance"
                      filterable
                      remote
                      :placeholder="$t('search')"
                      :remote-method="remoteMethod"
                      :loading="loading"
                      class="account-name width-full"
                    >
                      <el-option
                        v-for="item in accountList"
                        :key="item.accID"
                        :label="item.accName + ' --- ' + item.accID"
                        :value="item.accID"
                      >
                        <span style="float: left">{{ item.accName }}</span>
                        <span
                          style="float: right; color: #8492a6; font-size: 13px"
                          >{{ item.accID }}</span
                        >
                      </el-option>
                    </el-select>
                  </td>
                </tr>
                <tr>
                  <td class="popup-label here">
                    <span>{{ $t("current-balance") }}</span>
                  </td>
                  <td>
                    <el-input v-model="balance" w-60 disabled />
                  </td>
                </tr>
                <tr>
                  <td class="popup-label here">
                    <span>{{ $t("sales-number") }}</span>
                  </td>
                  <td>
                    <el-select
                      class="width-full"
                      v-model.number="voucherDetailsList.invoiceNo"
                      @focus="handleInvoiceSelectFocus()"
                      @change="handleChangeInvoiceNumber()"
                    >
                      <el-option :label="$t('without')" :value="0"> </el-option>
                      <el-option
                        v-for="item in invoiceList"
                        :key="item.invoiceID"
                        :label="item.voucherNumber"
                        :value="item.invoiceID"
                      >
                        <span style="float: left"
                          >{{ item.voucherNumber }}
                        </span>
                        <span
                          style="float: right; color: #8492a6; font-size: 13px"
                          >{{ item.remainAmount }}
                          {{
                            item.customerBranch
                              ? "---" + item.customerBranch
                              : ""
                          }}
                        </span>
                      </el-option> 
                    </el-select>
                  </td>
                </tr>

                <tr>
                  <td class="popup-label here">
                    <span>{{ $t("amount-of") }}</span>
                  </td>
                  <td>
                    <el-input
                      v-model="voucherDetailsList.voucherAmount"
                      class="buttonAppend bg-grey"
                      :class="[voucherDetailsList.taxState ? 'bg-red' : '']"
                      @input="
                        voucherDetailsList.taxState = false;
                        voucherDetailsList.taxValue = 0;
                        convertNumberToWord(voucherDetailsList.voucherAmount);
                      "
                    >
                      <button
                        slot="append"
                        @click.prevent="toggleAddTax()"
                        v-if="enableTax"
                      >
                        {{ $t("add-tax") }}
                        {{ voucherDetailsList.taxValue }}
                      </button>
                    </el-input>
                  </td>
                  <td
                    v-if="enableTax"
                    :class="[
                      voucherDetailsList.taxState ? '' : 'visibility-collapse'
                    ]"
                  >
                    <el-input v-model="voucherDetailsList.total" disabled w-60>
                      <template slot="append" >%</template>
                    </el-input>
                  </td>
                   <td class="visibility-collapse" style="width: 106%" v-if="!enableTax">
                    <el-input  w-60 >
                      <template slot="append">%</template>
                    </el-input>
                  </td>
                </tr>

                <tr>
                  <td class="popup-label here">
                    <span>{{ $t("box-bank") }}</span>
                  </td>
                  <td>
                    <el-select
                      v-model="form.fromAccId"
                      class="width-full"
                    >
                      <el-option
                        v-for="fund in banksAndFundsList"
                        :key="fund.maccId "
                        :value="fund.maccId "
                        :label="fund.mname"
                      >
                      </el-option>
                    </el-select>
                  </td>
                </tr>
                <tr>
                  <td class="popup-label here">
                    <span>{{ $t("payment-method") }}</span>
                  </td>
                  <td>
                    <el-select
                      class="selectButton width-full"
                      v-model.number="voucherDetailsList.payTypeId"
                    >
                    <!-- banksOrFundsSelected == 'banks'
                    ? voucherPaymentTypesList.slice(1)
                    : voucherPaymentTypesList -->
                      <el-option
                        v-for="item in voucherPaymentTypesList"
                        :key="item.mddvalueNo"
                        :label="item.mddname"
                        :value="item.mddvalueNo"
                      >
                      </el-option>
                    </el-select>
                  </td>
                </tr>
                <tr>
                  <td class="popup-label here">
                    <span>{{ $t("and-that-in-return") }}</span>
                  </td>
                  <td>
                    <el-input v-model="form.voucherDetails" w-60 />
                  </td>
                </tr>
                <tr>
                  <td class="popup-label here">
                    <span>{{ $t("amount-in-letters") }}</span>
                  </td>
                  <td>
                    <el-input v-model="amountInLetters" readonly />
                  </td>
                </tr>
              </tbody>
            </table>
          </el-form>
        </el-col>
        <el-col :xs="24" :md="12">
          <el-form label-position="top">
            <table style="width: 100%">
              <tbody>
                <tr>
                  <td class="popup-label here">
                    <span>{{ $t("cost-center") }}</span>
                  </td>
                  <el-select
                    class="width-full selectButton"
                    v-model="voucherDetailsList.costCenterID"
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

                  <td class="visibility-collapse w-60" style="width: 36%">
                    <el-input w-60>
                      <template slot="append">%</template>
                    </el-input>
                  </td>
                </tr>
                <tr>
                  <td class="popup-label here">
                    <span>{{ $t("delegate-name") }}</span>
                  </td>
                  <td class="w-60">
                    <el-select v-model="form.salesManCode" class="width-full">
                      <el-option :value="null" :label="$t('without')"> </el-option>
                      <el-option
                        v-for="salesMen in salesMenList"
                        :key="salesMen.salesManCode"
                        :value="salesMen.salesManCode"
                        :label="salesMen.salName + '---' + salesMen.accId"
                      >
                      </el-option>
                    </el-select>
                  </td>
                </tr>
                <tr>
                  <td class="popup-label here">
                    <span>{{ $t("number-of-the-delegate-is-document") }}</span>
                  </td>
                  <td class="w-60">
                    <el-input v-model="form.refDocNo" w-60 />
                  </td>
                </tr>
                <tr>
                  <td class="popup-label here">
                    <span>{{ $t("date-of-the-delegate-is-document") }}</span>
                  </td>

                  <td class="w-60">
                    <el-date-picker
                      type="date"
                      placeholder="2020/10/15"
                      format="yyyy/MM/dd"
                      v-model="form.refDocDate"
                      class="width-full"
                    ></el-date-picker>
                  </td>
                </tr>
                <tr :hidden="voucherDetailsList.payTypeId == 0">
                  <td class="popup-label here">
                    <span>{{ $t("bank") }}</span>
                  </td>

                  <td class="w-60">
                    <el-select
                      class=" width-full selectButton"
                      v-model.number="voucherDetailsList.bankId"
                    >
                      <el-option :label="$t('without')" :value="0"> </el-option>
                      <el-option
                        v-for="item in banksList"
                        :key="item.bankID"
                        :label="item.bankName"
                        :value="item.bankID"
                      >
                      </el-option>
                    </el-select>
                  </td>
                </tr>
                <tr :hidden="voucherDetailsList.payTypeId == 0">
                  <td class="popup-label here">
                    <span>{{ $t("check-date") }}</span>
                  </td>
                  <td class="w-60">
                    <el-date-picker
                      type="date"
                      placeholder="2020/10/15"
                      format="yyyy/MM/dd"
                      v-model="voucherDetailsList.checkDate"
                      class="width-full"
                    ></el-date-picker>
                  </td>
                </tr>
                <tr :hidden="voucherDetailsList.payTypeId == 0">
                  <td class="popup-label here">
                    <span>{{ $t("check-number") }}</span>
                  </td>
                  <td class="w-60">
                    <el-input v-model="voucherDetailsList.checkNo" w-60 />
                  </td>
                </tr>
              </tbody>
            </table>
          </el-form>
        </el-col>
        <!-- first dialog -->
        <addcostcenter />
      </el-row>
    </section>
  </div>
</template>
<script>
import Addcostcenter from "~/components/dialogs/add-cost-center";
import { mapState, mapMutations } from "vuex";
import Tafgeet from "tafgeetjs";

export default {
  components: {
    Addcostcenter
  },
  data() {
    return {
      loading: false,
      amountInLetters: "",
      form: {
        voucherCode: 0,
        date: new Date(),
        fromAccId: "", // الصندوق و البنوك
        details: "",
        voucherDetails: "",
        refDocNo: null, // رقم سند المندوب
        refDocDate: null, // تاريخ سند المندوب
        salesManCode: null, // اسم المندوبو
        balance: 0
      },
      voucherDetailsList: {
        toAccId: "", // رقم الحساب
        invoiceNo: 0, // رقم الفاتورة
        payTypeId: 0, // طريقه الدفع
        bankId: 0, // البنك
        checkDate: new Date(), // تاريخ المستند
        costCenterID: 0, // مركز التكلفه
        voucherDescription: "", //البيان
        voucherAmount: "", // ألمبلغ
        taxState: false, // ضريبة
        checkNo: "", // رقم المستند
        total: "0", // الإجمالي// not required in data request
        taxValue: 0 //  not required in data request
      },
      dialogOne: false,
      balance: 0,
      lastValue: 0,
      enableTax: true
    };
  },
  computed: {
    ...mapState({
      fundsList: state => state.lists.fundsList,
      salesMenList: state => state.lists.salesMenList,
      banksAndFundsList: state => state.lists.banksAndFundsList,
      accountList: state => state.Accounting.accountingDailyJournal.accountList,
      costCentersList: state => state.lists.costCentersList,
      voucherPaymentTypesList: state => state.lists.voucherPaymentTypesList,
      invoiceList: state =>state.Accounting.receiptCompoundVouchers.listInvoices,
      banksOrFundsSelected: state =>state.Accounting.receiptCompoundVouchers.banksOrFundsSelected,
      banksList: state => state.lists.banksList
    })
  },
  methods: {
    handleInvoiceSelectFocus() {
      if (!this.voucherDetailsList.toAccId) {
        return;
      } else {
        this.$store.dispatch(
          "Accounting/receiptCompoundVouchers/getInvoiceNumber",
          {
            id: this.voucherDetailsList.toAccId.toString()
          }
        );
      }
    },
    handleChangeInvoiceNumber() {
      if (this.voucherDetailsList.invoiceNo == "0") {
        this.voucherDetailsList.voucherAmount = "";
        this.voucherDetailsList.total = "";
        this.voucherDetailsList.taxValue = 0;
        this.enableTax = true;
      } else {
        // Assign remainAmount to voucherAmount if invoiceNo is not 0
        // when user select invoiceNo => taxValue = 0
        // this.notExistInvoiceNumber = false;
        this.voucherDetailsList.voucherAmount = this.invoiceList
          .find(item => item.invoiceID === this.voucherDetailsList.invoiceNo)
          .remainAmount.toString();
        this.voucherDetailsList.taxState = false;
        this.voucherDetailsList.total = this.voucherDetailsList.voucherAmount;
        this.voucherDetailsList.taxValue = 0;
        this.convertNumberToWord(this.voucherDetailsList.voucherAmount);
        this.enableTax = false;
      }
    },
    ...mapMutations({
      setRecordDetails: "Accounting/receiptCompoundVouchers/setRecordDetails",
      changeBanksOrFunds:
        "Accounting/receiptCompoundVouchers/banksOrFundsSelected"
    }),
    remoteMethod(query) {
      this.loading = true;
      this.$store
        .dispatch("Accounting/accountingDailyJournal/fetchSubAccountsList", {
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
    toggleAddTax() {
      this.voucherDetailsList.taxState = !this.voucherDetailsList.taxState;
      if (this.voucherDetailsList.taxState) {
        // cache last value => if disable tax => set last value to voucherAmount
        this.lastValue = this.voucherDetailsList.voucherAmount;
        let scope = {
          row: {
            taxState: this.voucherDetailsList.taxState,
            voucherAmount: this.voucherDetailsList.voucherAmount
          }
        };
        this.$calculateTax(scope);
        this.voucherDetailsList.voucherAmount = scope.row.voucherAmount;
        this.voucherDetailsList.total = scope.row.total;
        this.voucherDetailsList.taxValue = scope.row.taxValue;
      } else {
        this.voucherDetailsList.taxValue = 0;
        this.voucherDetailsList.voucherAmount = this.lastValue;
        this.voucherDetailsList.total = this.voucherDetailsList.voucherAmount;
      }
      this.convertNumberToWord(this.voucherDetailsList.voucherAmount);
    },
    convertNumberToWord(number) {
      if (!isNaN(Number(number))) {
        if (number == 0) {
          this.amountInLetters = "صفر";
        } else {
          let word = new Tafgeet(number, "SAR").parse().split(" ");
          word.splice(0, 1);
          this.amountInLetters = word.join(" ");
        }
      } else {
        return;
      }
    },

    openDialogOne(state) {
      this.$store.commit("addcostcenter/updateDialogState", state);
    },

    getBalance() {
      // mnotes = 1 ==>  user select bank ==> on invioceTable (grid) -> Enable voucher type payment and banks list
      // mnote = 2  ==>  user select fund => on invioceTable (grid) -> Disable voucher type payment and banks list
      // let BanksOrFund =
      //   this.banksAndFundsList.find(el => el.maccId === this.form.fromAccId)
      //     ?.mnotes ?? "1";
      // if (BanksOrFund === "1") {
      //   this.changeBanksOrFunds("banks");
      // } else {
      //   this.changeBanksOrFunds("funds");
      // }
      // get balance which user setected
      this.$store
        .dispatch("Accounting/receiptCompoundVouchers/getBalance", {
          Id: this.voucherDetailsList.toAccId
        })
        .then(response => {
          let data = response.data.data;
          this.balance = data;
          // this.balance = this.$convertToValidNumber(this.balance);

        })
        .catch(() => {
          this.$notify.error({
            title: "خطا",
            message: "حدث خطا اثناء جلب الرصيد"
          });
        });
    }
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
  },
  watch: {
    voucherDetailsList: {
      handler: function(newValue, oldValue) {
        this.setRecordDetails({
          voucherDetailsList: [
            {
              ...newValue,
              checkDate: new Date(newValue.checkDate).toISOString()
            }
          ]
        });
      },
      deep: true,
      immediate: true
    },
    form: {
      handler: function(newValue, oldValue) {
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
      deep: true,
      immediate: true
    },
    banksOrFundsSelected(after, before) {
      // reset payTypeId and bankId to 0 if fund is selected
      if (before !== after) {
        this.voucherDetailsList.bankId = 0;
        if (after == "funds") {
          this.voucherDetailsList.payTypeId = 0;
        } else {
          this.voucherDetailsList.payTypeId = "";
        }
      }
    },
    banksAndFundsList(newVal) {
      if(newVal.length > 0) this.form.fromAccId = newVal[0].maccId
      else this.form.fromAccId = null
    }
  }
};
</script>
<style scoped>
.popup-label.here {
  width: 30%;
}
.w-60 {
  width: 50%;
}
</style>