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
                      placeholder="yyyy/MM/dd"
                      format="yyyy/MM/dd"
                      v-model="form.date"
                      class="width-full"
                    ></el-date-picker>
                  </td>
                </tr>
                <tr>
                  <td class="popup-label">
                    <span>{{ $t("spends-for") }}</span>
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
                        v-if="initialOption"
                        :label="
                          voucherDetailsList.toAccId +
                            '---' +
                            voucherDetailsList.toAccName
                        "
                        :value="voucherDetailsList.toAccId"
                        selected
                      >
                        <span style="float: left">{{
                          voucherDetailsList.toAccName
                        }}</span>
                        <span
                          style="float: right; color: #8492a6; font-size: 13px"
                          >{{ voucherDetailsList.toAccId }}</span
                        >
                      </el-option>
                      <!-- TODO -->
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
                  <td class="popup-label">
                    <span>{{ $t("current-balance") }}</span>
                  </td>
                  <td>
                    <el-input v-model="balance" class="" disabled/>
                  </td>
                </tr>
                <tr>
                  <td class="popup-label">
                    <span>{{ $t("purchases-number") }}</span>
                  </td>
                  <td>
                    <el-select
                      v-model.number="voucherDetailsList.invoiceNo"
                      @focus="handleInvoiveSelectFocus()"
                      @change="handleChangeInvoiceNumber()"
                      class="width-full"
                    >
                      <el-option :label="$t('without')" :value="0"> </el-option>
                      <el-option
                        v-for="item in purchasesList"
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
                      <button slot="append" @click.prevent="toggleAddTax()"       v-if="enableTax">
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
                    <el-input v-model="voucherDetailsList.total" disabled class="">
                      <template slot="append">%</template>
                    </el-input>
                  </td>
                   <td class="visibility-collapse" style="width: 36%" v-if="!enableTax">
                    <el-input  class="">
                      <template slot="append">%</template>
                    </el-input>
                  </td>
                </tr>


                <!-- <tr>
                  <td class="popup-label">
                    <span>{{ $t("and-that-in-return") }}</span>
                  </td>
                  <td>
                    <el-input v-model="form.ds" class="" />
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
                      class=" selectButton width-full"
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
                  <td class="popup-label"><span>{{ $t("amount-in-letters") }}</span></td>
                  <td><el-input v-model="amountInLetters" readonly /></td>
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
                  <td>
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
                  </td>

                  <td class="visibility-collapse" style="width: 36%">
                    <el-input  class="">
                      <template slot="append">%</template>
                    </el-input>
                  </td>
                </tr>
                <tr>
                  <td class="popup-label">
                    <span>{{ $t("bank") }}</span>
                  </td>

                  <td>
                    <el-select
                      class="width-full selectButton"
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
                <tr>
                  <td class="popup-label">
                    <span>{{ $t("check-number") }}</span>
                  </td>
                  <td>
                    <el-input v-model="voucherDetailsList.checkNo" class="" />
                  </td>
                </tr>
                <tr>
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
              </tbody>
            </table>
          </el-form>
        </el-col>
        <!-- start cost center dialog -->
        <el-dialog title=" " :visible.sync="dialogOne" width="70%">
          <span>
            <el-container class="d-block box-shadow mb-0 px-2 py-2">
              <el-form
                class="totals-form width-half"
                label-position="top"
                :model="form"
              >
                <table style="width: 100%">
                  <tbody>
                    <tr>
                      <td class="popup-label">
                        <span>{{ $t("cost-center-number") }}</span>
                      </td>
                      <td>
                        <el-input v-model="form.adjustment_number" class="">
                        </el-input>
                      </td>
                    </tr>

                    <tr>
                      <td class="popup-label">
                        <span>{{ $t("main-center") }}</span>
                      </td>
                      <td>
                        <el-select
                          v-model="form.main_center"
                          class="width-full"
                        >
                          <el-option :value="2"></el-option>
                          <el-option :value="1"></el-option>
                        </el-select>
                      </td>
                      <td>
                        <el-button
                          class="btn-dark-blue"
                          icon="el-icon-plus"
                        ></el-button>
                      </td>
                    </tr>

                    <tr>
                      <td class="popup-label">
                        <span>{{ $t("cost-center-name") }}</span>
                      </td>
                      <td>
                        <el-input v-model="form.adjustment_number" class="">
                        </el-input>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </el-form>

              <div class="d-flex justify-end">
                <el-input
                  class="notes-summary"
                  type="textarea"
                  :rows="7"
                  :placeholder="$t('notes')"
                >
                </el-input>
              </div>
            </el-container>
          </span>
          <span slot="footer" class="dialog-footer">
            <div>
              <el-button
                size="mini"
                @click="dialogOne = false"
                class="mb-1 btn-blue"
                >{{ $t("save-f5") }}</el-button
              >
              <el-button
                size="mini"
                @click="dialogOne = false"
                class="mb-1"
                type="danger"
                >{{ $t("delete-f8") }}</el-button
              >
              <el-button
                size="mini"
                @click="dialogOne = false"
                class="mb-1 btn-violet"
                >{{ $t("back-f6") }}</el-button
              >
              <el-button
                size="mini"
                @click="dialogOne = false"
                class="mb-1 btn-grey"
                >{{ $t("print-f4") }}</el-button
              >
              <el-button
                size="mini"
                @click="dialogOne = false"
                class="mb-1"
                type="warning"
                >{{ $t("tree-show") }}</el-button
              >
            </div>
          </span>
        </el-dialog>
        <!-- end cost center dialog -->
      </el-row>
    </section>
  </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";
import Tafgeet from "tafgeetjs";

export default {
  data() {
    return {
      loading: false,
      form: {},
      balance: 0,
      voucherDetailsList: {},
      dialogOne: false,
      balance: 0,
      initialOption: true,
            amountInLetters: "",
      lastValue: 0,
      enableTax : false,
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
      purchasesList: state =>
        state.Accounting.paymentCompoundVouchers.purchasesList,
      banksOrFundsSelected: state =>
        state.Accounting.paymentCompoundVouchers.banksOrFundsSelected,
      banksList: state => state.lists.banksList,
      singleRecordDetails: state =>
        state.Accounting.paymentCompoundVouchers.singleRecordDetails
    }),
    tax() {
      return this.$store.getters.getTaxInformation;
    }
  },
  methods: {
    handleInvoiveSelectFocus() {
      if (!this.voucherDetailsList.toAccId) {
        return;
      } else {
         
        this.$store.dispatch(
          "Accounting/paymentCompoundVouchers/getPurchasesList",
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
        this.voucherDetailsList.voucherAmount = this.purchasesList
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
      setRecordDetails: "Accounting/paymentCompoundVouchers/setRecordDetails",
      changeBanksOrFunds:
        "Accounting/paymentCompoundVouchers/banksOrFundsSelected"
    }),
    remoteMethod(query) {
      this.loading = true;
      this.initialOption = false;
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
      let BanksOrFund =
        this.banksAndFundsList.find(el => el.maccId === this.form.fromAccId)
          ?.mnotes ?? "1";
      
       
      if (BanksOrFund == "1") {
        this.changeBanksOrFunds("banks");
      } else {
        this.changeBanksOrFunds("funds");
      }
      // get balance which user setected
      this.$store
        .dispatch("Accounting/paymentCompoundVouchers/getBalance", {
          Id: this.form.fromAccId
        })
        .then(response => {
          let data = response.data.data;
          this.balance = data;
          this.balance = this.$convertToValidNumber(this.balance);

        })
        .catch(() => {
          this.$notify.error({
            title: "خطا",
            message: "حدث خطا اثناء جلب الرصيد"
          });
        });
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
          total: this.$convertToValidNumber(voucherDetailsList.overallTotal),
          isDelete: false
        };
        this.$nextTick(() => {
          this.getBalance();
             this.convertNumberToWord(this.voucherDetailsList.voucherAmount);
          this.voucherDetailsList.invoiceNo == "0"
            ? this.enableTax = true : this.enableTax = false;
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
              checkDate: new Date(newValue.checkDate).toISOString()
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
          voucherCode: voucherCode.toString(),
          fromAccId,
          voucherDetails,
          refDocNo,
          salesManCode,
          voucherID,
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
          this.voucherDetailsList.payTypeId = "";
        }
      }
       
    }
  },

};
</script>
<style scoped>
.popup-label {
  width: 30%;
}
</style>