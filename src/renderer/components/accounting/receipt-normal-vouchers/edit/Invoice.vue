<template>
  <div>
    <section class="mb-0 px-4-lg table-append-tax py-3">
      <el-row>
        <el-col :xs="24" :md="12">
          <el-form label-position="top">
            <table style="width: 100%">
              <tbody>
                <tr>
                  <td class="popup-label">
                    <span>{{ $t("bond-number") }}</span>
                  </td>
                  <td>
                    <el-input class="" v-model="form.voucherCode" disabled>
                    </el-input>
                  </td>
                </tr>
                <tr>
                  <td class="popup-label">
                    <span>{{ $t("bond-date") }}</span>
                  </td>
                  <td>
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
                  <td class="popup-label">
                    <span>{{ $t("received-from") }}</span>
                  </td>
                  <td>
                    <el-select
                      v-model="voucherDetailsList.toAccId"
                      filterable
                      remote
                      :placeholder="$t('search')"
                      :remote-method="remoteMethod"
                      :loading="loading"
                      class="account-name width-full"
                    >
                      <el-option
                        v-for="item in accountList"
                        :key="item.accID + Math.random()"
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
                  <td class="popup-label">
                    <span>{{ $t("current-balance") }}</span>
                  </td>
                  <td>
                    <el-input v-model="balance" class="" disabled />
                  </td>
                </tr>
                <tr>
                  <td class="popup-label">
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
                  <td class="popup-label">
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
                    <el-input
                      v-model="voucherDetailsList.total"
                      disabled
                      class=""
                    >
                      <template slot="append">%</template>
                    </el-input>
                  </td>
                  <td
                    class="visibility-collapse"
                    style="width: 36%"
                    v-if="!enableTax"
                  >
                    <el-input class="">
                      <template slot="append">%</template>
                    </el-input>
                  </td>
                </tr>

                <!-- <tr>
                  <td class="popup-label">
                    <span>{{ $t("and-that-in-return") }}</span>
                  </td>
                  <td>
                    <el-input v-model="form.name" class="" />
                  </td>
                </tr> -->
                <tr>
                  <td class="popup-label">
                    <span>{{ $t("box-bank") }}</span>
                  </td>
                  <td>
                    <el-select
                      v-model="form.fromAccId"
                      @change="getBalance"
                      class="width-full"
                    >
                      <el-option
                        v-for="fund in banksAndFundsList"
                        :key="fund.maccId"
                        :value="fund.maccId"
                        :label="fund.mname"
                      >
                      </el-option>
                    </el-select>
                  </td>
                </tr>
                <tr>
                  <td class="popup-label">
                    <span>{{ $t("payment-method") }}</span>
                  </td>
                  <td>
                    <el-select
                      class="selectButton width-full"
                      v-model.number="voucherDetailsList.payTypeId"
                    >
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
                  <td class="popup-label">
                    <span>{{ $t("and-that-in-return") }}</span>
                  </td>
                  <td>
                    <el-input v-model="form.voucherDetails" class="" />
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
                  <td class="popup-label">
                    <span>{{ $t("cost-center") }}</span>
                  </td>

                  <el-select
                    class="width-full selectButton"
                    v-model="voucherDetailsList.costCenterId"
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

                  <td class="visibility-collapse" style="width: 36%">
                    <el-input v-model="form.name" class="">
                      <template slot="append">%</template>
                    </el-input>
                  </td>
                </tr>
                <tr>
                  <td class="popup-label">
                    <span>{{ $t("delegate-name") }}</span>
                  </td>
                  <td>
                    <el-select v-model="form.salesManCode" class="width-full">
                      <el-option :value="0" :label="$t('without')"> </el-option>
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
                  <td class="popup-label">
                    <span>{{ $t("number-of-the-delegate-is-document") }}</span>
                  </td>
                  <td>
                    <el-input v-model="form.refDocNo" class="" />
                  </td>
                </tr>
                <tr>
                  <td class="popup-label">
                    <span>{{ $t("date-of-the-delegate-is-document") }}</span>
                  </td>

                  <td>
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
                  <td class="popup-label">
                    <span>{{ $t("bank") }}</span>
                  </td>

                  <td>
                    <el-select
                      class="width-full selectButton"
                      v-model.number="voucherDetailsList.bankId"
                      :disabled="
                        banksOrFundsSelected == 'funds' ||
                          banksOrFundsSelected == ''
                      "
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
                  <td class="popup-label">
                    <span>{{ $t("check-date") }}</span>
                  </td>

                  <td>
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
                  <td class="popup-label">
                    <span>{{ $t("check-number") }}</span>
                  </td>

                  <td>
                    <el-input v-model="voucherDetailsList.checkNo" class="" />
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
import { mapState, mapMutations } from "vuex";
import Addcostcenter from "~/components/dialogs/add-cost-center";
import Tafgeet from "tafgeetjs";
export default {
  components: {
    Addcostcenter
  },
  data() {
    return {
      amountInLetters: "",

      loading: false,
      balance: 0,
      voucherDetailsList: {},
      form: {},
      dialogOne: false,
      amountInLetters: "",
      lastValue: 0,
      enableTax: true
    };
  },
  computed: {
    ...mapState({
      singleRecordDetails: state =>
        state.Accounting.receiptCompoundVouchers.singleRecordDetails,
      banksAndFundsList: state => state.lists.banksAndFundsList,
      salesMenList: state => state.lists.salesMenList,
      banksAndFundsList: state => state.lists.banksAndFundsList,
      accountList: state => state.Accounting.accountingDailyJournal.accountList,
      costCentersList: state => state.lists.costCentersList,
      banksList: state => state.lists.banksList,
      voucherPaymentTypesList: state => state.lists.voucherPaymentTypesList,

      invoiceList: state =>
        state.Accounting.receiptCompoundVouchers.listInvoices,
      banksOrFundsSelected: state =>
        state.Accounting.receiptCompoundVouchers.banksOrFundsSelected
    }),
    tax() {
      return this.$store.getters.getTaxInformation;
    }
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
        this.voucherDetailsList.voucherAmount =
          this.invoiceList
            .find(item => item.invoiceID === this.voucherDetailsList.invoiceNo)
            .remainAmount?.toString() ?? "";
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
      if (this.form.fromAccId) {
        let BanksOrFund =
          this.banksAndFundsList.find(el => el.maccId === this.form.fromAccId)
            ?.mnotes ?? "1";
        if (BanksOrFund === "1") {
          this.changeBanksOrFunds("banks");
        } else {
          this.changeBanksOrFunds("funds");
        }
        // get balance which user setected
        this.$store
          .dispatch("Accounting/receiptCompoundVouchers/getBalance", {
            Id: this.form.fromAccId
          })
          .then(response => {
            let data = response.data.data;
            this.balance = data;
            this.balance = this.$convertToValidNumber(this.balance);
            console.log("balance", this.balance);
          })
          .catch(() => {
            this.$notify.error({
              title: "خطا",
              message: "حدث خطا اثناء جلب الرصيد"
            });
          });
      }
    }
  },
  watch: {
    singleRecordDetails: {
      handler({ voucherDetailsList: [voucherDetailsList], ...values }) {
        this.form = {
          ...values,
          data: new Date(values.date),
          // ===== invalid date
          refDocDate: new Date()
        };
        this.voucherDetailsList = {
          ...voucherDetailsList,
          checkDate: new Date(voucherDetailsList.checkDate),
          taxValue: this.$convertToValidNumber(voucherDetailsList.taxAomunt),
          voucherAmount: this.$convertToValidNumber(
            voucherDetailsList.voucherAmount
          ),
          total: this.$convertToValidNumber(voucherDetailsList.overallTotal),
          isDelete: false
        };
        this.$nextTick(() => {
          this.getBalance();
          this.convertNumberToWord(this.voucherDetailsList.voucherAmount);
          this.voucherDetailsList.invoiceNo == "0"
            ? (this.enableTax = true)
            : (this.enableTax = false);
        });
        // this.voucherDetailsList = voucherDetailsList[0];
      },
      deep: true
    },
    voucherDetailsList: {
      handler: function(newValue, oldValue) {
        this.setRecordDetails({
          voucherDetailsList: [
            {
              ...newValue,
              checkDate: new Date(newValue.checkDate).toISOString(),
              voucherAmount: newValue.total
            }
          ]
        });
      },
      deep: true
    },
    form: {
      handler: function(newValue, oldValue) {
        let {
          voucherCode,
          date,
          fromAccId,
          voucherDetails,
          refDocNo,
          refDocDate,
          salesManCode,
          voucherID
        } = newValue;
        this.setRecordDetails({
          voucherCode,
          fromAccId,
          voucherDetails,
          refDocNo,
          salesManCode,
          voucherId: voucherID,
          // must convert format date before send prop to server (ios format)
          refDocDate: new Date(refDocDate).toISOString(),
          date: new Date(date).toISOString()
        });
      },
      deep: true
    },
    banksOrFundsSelected(after, before) {
      // reset payTypeId and bankId to 0 if fund is selected
      if (before !== after) {
        this.voucherDetailsList.bankId = 0;
        if (after == "funds") {
          this.voucherDetailsList.payTypeId = 0;
        } else {
          this.voucherDetailsList.payTypeId = null;
        }
      }
    }
  }
};
</script>
