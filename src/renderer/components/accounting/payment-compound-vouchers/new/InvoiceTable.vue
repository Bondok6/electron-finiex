<template>
  <div>
    <el-container
      class="container ma-4 mt-0 mb-0 invoice-table new-record-table"
    >
      <el-table
        :data="tableData"
        style="width: 100%"
        stripe
        border
        max-height="250"
      >
        <el-table-column
          align="center"
          prop="item_number"
          width="30"
          :label="$t('id')"
        >
          <template slot-scope="scope">
            <el-input
              ref="id"
              size="small"
              style="text-align: center"
              :placeholder="scope.$index + 1"
            ></el-input>
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          prop="account_name"
          :label="$t('account-name')"
          width="280"
        >
          <template slot-scope="scope">
            <el-select
              v-model="scope.row.toAccId"
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
                <span style="float: right; color: #8492a6; font-size: 13px"
                  >{{ item.accID }} -- {{ item.customerBranch }}</span
                >
              </el-option>
            </el-select>
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          prop="invoice_number"
          :label="$t('purchases-number')"
        >
          <template slot-scope="scope">
            <el-select
              v-model.number="scope.row.invoiceNo"
              @focus="handleInvoiveSelectFocus(scope.row)"
              @change="handleChange(scope)"
            >
              <el-option :label="$t('without')" :value="0"> </el-option>
              <el-option
                v-for="item in purchasesList"
                :key="item.invoiceID"
                :label="item.voucherNumber"
                :value="item.invoiceID"
              >
                <span style="float: left">{{ item.voucherNumber }}  </span>
                <span style="float: right; color: #8492a6; font-size: 13px"
                  >{{ item.remainAmount }}  {{
                            item.customerBranch
                              ? "---" + item.customerBranch
                              : ""
                          }}
                </span>
              </el-option>
            </el-select>
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          prop="pay_by"
          :label="$t('payment-method')"
        >
          <template slot-scope="scope">
            <el-select
              class="text-center mobile-width-full selectButton"
              v-model="scope.row.payTypeId"
            >
              <el-option
                v-for="item in banksOrFundsSelected == 'banks'
                  ? voucherPaymentTypesList.slice(1)
                  : voucherPaymentTypesList"
                :key="item.mddvalueNo"
                :label="item.mddname"
                :value="item.mddvalueNo"
              >
              </el-option>
            </el-select>
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          prop="invoice_number"
          :label="$t('bank')"
        >
          <template slot-scope="scope">
            <!-- 
                            :disabled="
                banksOrFundsSelected == 'funds' || banksOrFundsSelected == ''
              "
             -->
            <el-select
              class="text-center mobile-width-full selectButton"
              v-model="scope.row.bankId"
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
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          prop="document_number"
          :label="$t('document-number')"
        >
          <template slot-scope="scope">
            <el-input size="small" v-model="scope.row.checkNo"></el-input>
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          prop="document_date"
          :label="$t('document-date')"
        >
          <template slot-scope="scope">
            <el-date-picker
              v-model="scope.row.checkDate"
              type="date"
              placeholder="2020-10-15"
              format="yyyy/MM/dd"
              style="text-align: center"
            ></el-date-picker>
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          prop="cost_center"
          :label="$t('cost-center')"
        >
          <template slot-scope="scope">
            <el-select
              class="text-center mobile-width-full selectButton"
              v-model="scope.row.costCenterID"
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
          </template>
        </el-table-column>
        <el-table-column align="center" prop="data" :label="$t('statement')">
          <template slot-scope="scope">
            <!--  -->
            <el-input
              size="small"
              v-model="scope.row.voucherDescription"
              @focus="openDialog(scope)"
            ></el-input>
            <!--  -->
            <el-dialog
              :title="$t('statement')"
              :visible.sync="dialogDetails"
              width="50%"
            >
              <el-container class="d-block box-shadow pb-2">
                <span>
                  <div class="width-full mt-4">
                    <el-form class="" label-position="top">
                      <el-form-item
                        class="form-item-with-right-label width-full"
                      >
                        <el-input
                          class="notes-input width-full"
                          type="textarea"
                          :rows="7"
                          v-model="dialogValue"
                          ref="dialogDetails"
                          @input="
                            scope.row.voucherDescription = dialogValue;
                            dialogValue =
                              dialogValue.length >= 150
                                ? dialogValue.slice(0, 150)
                                : dialogValue;
                          "
                        >
                        </el-input>
                      </el-form-item>
                      <span v-if="dialogValue.length == 150" style="color: #f03"
                        >Limit 150 character</span
                      >
                    </el-form>
                  </div>
                </span>
              </el-container>
              <span slot="footer" class="dialog-footer">
                <!-- @click="attachFile = false" -->
                <el-button
                  class="btn-cyan-light px-4-lg"
                  @click="closeDialog()"
                  >{{ $t("ok") }}</el-button
                >
              </span>
            </el-dialog>

            <!--  -->
          </template>
        </el-table-column>

        <el-table-column align="center" prop="amount" :label="$t('amount')">
          <template slot-scope="scope">
            <el-input
              size="small"
              v-model="scope.row.voucherAmount"
              @keyup.native.enter="$calculateTax(scope)"
              @input="
                scope.row.total = 0;
                scope.row.taxValue = 0;
              "
                 @blur="handleLeaveWithoutPressEnter(scope)"
            ></el-input>
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          prop="tax"
          :label="$t('tax')"
          v-if="tax.voucher.taxType"
        >
          <template slot-scope="scope">
            <div class="d-flex justify-center align-center">
              <el-checkbox
                style="padding-inline-end: 7px"
                v-if="scope.row.voucherAmount > 0 &&  scope.row.invoiceNo == 0"
                v-model="scope.row.taxState"
               @change="handleTax(scope)"
              ></el-checkbox>
              <el-input
                size="small"
                :value="scope.row.taxValue ? scope.row.taxValue : 0"
                readonly="readonly"
              >
              </el-input>
            </div>
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          prop="total"
          :label="$t('total')"
          v-if="tax.voucher.taxType"
        >
          <template slot-scope="scope">
            <el-input
              size="small"
              :readonly="true"
              v-model="scope.row.total"
              @keyup.enter.native="newRow(scope.row)"
            ></el-input>
          </template>
        </el-table-column>
        <el-table-column align="center" width="60">
          <template slot-scope="scope">
            <el-popconfirm
              icon="el-icon-info"
              icon-color="red"
              title="تأكيد حذف الصنف ؟"
              @confirm="tableData.splice(scope.index, 1)"
            >
              <i
                slot="reference"
                class="setting-button danger-color el-icon-delete-solid"
              ></i>
            </el-popconfirm>
          </template>
        </el-table-column>
      </el-table>
    </el-container>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
export default {
  name: "invoice",

  data: function() {
    return {
      loading: false,
      notExistInvoiceNumber: false,
      dialogDetails: false,
      dialogValue: "",
      tableData: [
        {
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
        }
      ],

      appenedTableData: {
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
        total: "0",
        taxValue: 0
      },

      form: {
        adjustment_number: "1"
      }
    };
  },
  computed: {
    ...mapState({
      accountList: state => state.Accounting.accountingDailyJournal.accountList,
      costCentersList: state => state.lists.costCentersList,
      voucherPaymentTypesList: state => state.lists.voucherPaymentTypesList,
      purchasesList: state =>
        state.Accounting.paymentCompoundVouchers.purchasesList,
      banksOrFundsSelected: state =>
        state.Accounting.paymentCompoundVouchers.banksOrFundsSelected,
      banksList: state => state.lists.banksList
    }),
    tax() {
      return this.$store.getters.getTaxInformation;
    }
  },
  mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
        this.$refs.id.focus();
      }, 10);
    });
  },

  methods: {
       handleTax(scope){
      if (scope.row.taxState) {
         this.lastValue = scope.row.voucherAmount;
         
        this.$calculateTax(scope);

      } else {
       scope.row.taxValue = 0;
        scope.row.voucherAmount = this.lastValue;
         scope.row.total = scope.row.voucherAmount
      }
    },
 
    handleLeaveWithoutPressEnter(scope){
        scope.row.voucherAmount = this.$convertToValidNumber(scope.row.voucherAmount);
        if( scope.row.total != 0 ){
            return;
        }else{
          this.$calculateTax(scope);this.lastValue = scope.row.total
        }
    },
    ...mapMutations({
      setRecordDetails: "Accounting/paymentCompoundVouchers/setRecordDetails"
    }),
    handleChange(scope) {
      if (scope.row.invoiceNo == "0") {
        scope.row.voucherAmount = "";
        scope.row.total = "";
        scope.row.taxValue = 0;
      } else {
        // Assign remainAmount to voucherAmount if invoiceNo is not 0
        // when user select invoiceNo => taxValue = 0
        this.notExistInvoiceNumber = false;
        scope.row.voucherAmount = this.purchasesList
          .find(item => item.invoiceID === scope.row.invoiceNo)
          .remainAmount.toString();
        scope.row.taxState = false;
        scope.row.total = scope.row.voucherAmount;
        scope.row.taxValue = 0;
      }
    },
    // get invoice number depend on accound selected
    handleInvoiveSelectFocus(row) {
      if (!row.toAccId) {
        return;
      } else {
        this.$store.dispatch(
          "Accounting/paymentCompoundVouchers/getPurchasesList",
          {
            id: row.toAccId
          }
        );
      }
    },
    newRow(row) {
      let valid = true
      let messegeList = []
      
      if(row.toAccId == "") {
        messegeList = [...messegeList, this.$t("account-name") ]
        valid = false
      }
      if(row.voucherAmount == "") {
        messegeList = [...messegeList, this.$t("amount") ]
        valid = false
      }
      if(row.payTypeId != 0) {
        if(row.bankId == 0) {
          messegeList = [...messegeList, this.$t("bank") ]
          valid = false
        }
        if(row.checkDate == "") {
          messegeList = [...messegeList, this.$t("check-date") ]
          valid = false
        }
        if(row.payTypeId == 2 && row.checkNo == "") {
          messegeList = [...messegeList, this.$t("check-number") ]
          valid = false
        }
      }
      if(valid) {
        console.log("test")
        this.tableData.push({ ...this.appenedTableData });
        setTimeout(() => {
          this.$nextTick(() => this.$refs.id.focus());
        }, 20);
      } else {
        this.$notify({
          title: "Error",
          dangerouslyUseHTMLString: true,
          message: `
            <p><strong>${this.$t("these-fields-are-required")}:</strong></p>
            <p>${messegeList.join(' - ')}</p>
          `,
          type: "error"
        });
      }
    },
    async remoteMethod(query) {
      this.loading = true;
      try {
        await this.$store.dispatch(
          "Accounting/accountingDailyJournal/fetchSubAccountsList",
          {
            SearchString: query
          }
        );

        this.loading = false;
      } catch (e) {
         
      }
    },

    openDialog(scope) {
      this.dialogDetails = true;
      this.dialogValue = scope.row.voucherDescription;
      this.$nextTick(() => this.$refs.dialogDetails.focus());
    },
    closeDialog() {
      this.dialogDetails = false;
      this.dialogValue = "";
    }
  },
  watch: {
    tableData: {
      handler(after) {
        let total = after.reduce((acc, cur) => {
          return acc + Number(cur.total);
        }, 0);
        let setVoucherAmountOnAllRows = after.map(el => {
          return this.tax.voucher.taxType == "ttc"
            ? { ...el, voucherAmount: el.total.toString() }
            : el;
        });
        let data = JSON.parse(JSON.stringify(setVoucherAmountOnAllRows));

        this.setRecordDetails({
          voucherDetailsList: data,
          total
        });
      },
      deep: true,
      immediate: true
    },
    banksOrFundsSelected(after, before) {
      if (before !== after) {
        this.tableData.forEach(item => {
           
          item.bankId = 0;
          if (after == "funds") {
            item.payTypeId = 0;
          } else {
            item.payTypeId = "";
          }
        });
      }
    }
  }
};
</script>
