<template>
  <el-container class="container ma-4 mt-0 mb-0 invoice-table new-record-table">
    <el-table
      :data="tableData"
      style="width: 100%"
      stripe
      border
      max-height="400"
    >
      <el-table-column align="center" prop="id" :label="$t('id')" width="30">
        <template slot-scope="scope">
          <el-input
            :ref="'id_' + scope.$index"
            size="small"
            style="text-align: center"
            :placeholder="scope.$index + 1"
          ></el-input>
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        prop="invoice_number"
        :label="$t('invoice-number')"
      >
        <template slot-scope="scope">
          <el-input
            size="small"
            style="text-align: center"
            v-model="scope.row.invoiceNo"
            disabled
          ></el-input>
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        prop="bond_number"
        :label="$t('document-number')"
      >
        <template slot-scope="scope">
          <el-input
            size="small"
            style="text-align: center"
            v-model="scope.row.checkNo"
          ></el-input>
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
        prop="pay_by"
        :label="$t('payment-method')"
      >
        <template slot-scope="scope">
          <el-select
            class="text-center mobile-width-full selectButton"
            v-model="scope.row.payTypeId"
            :disabled="
              banksOrFundsSelected == 'funds' || banksOrFundsSelected == ''
            "
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
      <el-table-column align="center" prop="invoice_number" :label="$t('bank')">
        <template slot-scope="scope">
          <el-select
            class="text-center mobile-width-full selectButton"
            v-model="scope.row.bankId"
            :disabled="
              banksOrFundsSelected == 'funds' || banksOrFundsSelected == ''
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
            v-model="scope.row.costCenterId"
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
      <el-table-column
        align="center"
        prop="invoice_date"
        :label="$t('invoice-date')"
      >
        <template slot-scope="scope">
          <el-date-picker
            v-model="scope.row.invoiceDate"
            type="date"
            placeholder="2020-10-15"
            format="yyyy/MM/dd"
            style="text-align: center"
          ></el-date-picker>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="due_date" :label="$t('due-date')">
        <template slot-scope="scope">
          <el-date-picker
            v-model="scope.row.dueDate"
            type="date"
            placeholder="2020-10-15"
            format="yyyy/MM/dd"
            style="text-align: center"
          ></el-date-picker>
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
            :visible.sync="scope.row.showDialog"
            width="50%"
          >
            <el-container class="d-block box-shadow pb-2">
              <span>
                <div class="width-full mt-4">
                  <el-form class="" label-position="top">
                    <el-form-item class="form-item-with-right-label width-full">
                      <el-input
                        class="notes-input width-full"
                        type="textarea"
                        :rows="7"
                        v-model="dialogValue"
                        :ref="'dialogDetails' + scope.$index"
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
                @click="closeDialog(scope)"
                >{{ $t("ok") }}</el-button
              >
            </span>
          </el-dialog>

          <!--  -->
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        prop="invoice_amount"
        :label="$t('invoice-amount')"
      >
        <template slot-scope="scope">
          <el-input
            size="small"
            style="text-align: center"
            v-model="scope.row.invoiceAmount"
            disabled
          ></el-input>
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        prop="remaining_amount"
        :label="$t('remaining-amount')"
      >
        <template slot-scope="scope">
          <el-input
            size="small"
            style="text-align: center"
            v-model="scope.row.remainAmount"
            disabled
          ></el-input>
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        prop="amount_paid"
        :label="$t('amount-paid')"
      >
        <template slot-scope="scope">
          <el-input
            size="small"
            style="text-align: center"
            v-model="scope.row.voucherAmount"
            @input="
              scope.row.voucherAmount = $convertToValidNumber(
                scope.row.voucherAmount
              );
              scope.row.remainAmount =
                $convertToValidNumber(scope.row.invoiceAmount) -
                $convertToValidNumber(scope.row.voucherAmount);
            "
            @keyup.native.enter="
              scope.row.remainAmount =
                scope.row.remainAmount < 0 ? 0 : scope.row.remainAmount;
              scope.row.voucherAmount =
                scope.row.remainAmount == 0
                  ? scope.row.invoiceAmount
                  : scope.row.voucherAmount;
            "
          ></el-input>
          <!-- @keyup.enter.native="newRow()" -->
        </template>
      </el-table-column>

      <el-table-column align="center" width="60">
        <template>
          <el-popconfirm
            icon="el-icon-info"
            icon-color="red"
            :title="$t('confirm')"
            @confirm="this.tableData.splice(scope.$index, 1)"
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
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "invoice",

  data: function () {
    return {
      dialogValue: "",
      total_paid_amount: 0,
      total_invoices_amount: 0,
      tableData: [
        {
          //invoiceAmount: 0, //???????? ????????????????
          //invoiceDate: new Date(), //?????????? ????????????????
          //dueDate: new Date(), //?????????? ??????????????????
          invoiceNo: 0, //?????? ????????????????
          costCenterId: 0, //???????? ??????????????
          payTypeId: 0, //?????????? ??????????
          bankId: 0, //??????????
          checkNo: 0, //?????? ??????????
          checkDate: new Date(), //?????????? ??????????
          voucherDescription: "", //??????,
          voucherAmount: 0, //???????????? ??????????????
          //remainAmount: 0, // ???????????? ?????????????? ?????????? ???? ????????
          showDialog: false,
        }
      ],
      appenedTableData: {
        //invoiceAmount: 0, //???????? ????????????????
        //invoiceDate: new Date(), //?????????? ????????????????
        //dueDate: new Date(), //?????????? ??????????????????
        invoiceNo: 0, //?????? ????????????????
        costCenterId: 0, //???????? ??????????????
        payTypeId: 0, //?????????? ??????????
        bankId: 0, //??????????
        checkNo: 0, //?????? ??????????
        checkDate: new Date(), //?????????? ??????????
        voucherDescription: "", //??????,
        voucherAmount: 0, //???????????? ??????????????
        //remainAmount: 0, // ???????????? ?????????????? ?????????? ???? ????????
        showDialog: false,
      },
    };
  },
  computed: {
    ...mapState({
      costCentersList: (state) => state.lists.costCentersList,
      voucherPaymentTypesList: (state) => state.lists.voucherPaymentTypesList,

      banksOrFundsSelected: (state) =>
        state.Accounting.supplierPaymentBond.banksOrFundsSelected,
      banksList: (state) => state.lists.banksList,
      invoicesList: (state) =>
        state.Accounting.supplierPaymentBond.invoicesList,
      distributionStatus: (state) =>
        state.Accounting.supplierPaymentBond.distributionStatus,
    }),
  },


  methods: {
    newRow() {
      this.tableData.push({ ...this.appenedTableData });

      setTimeout(x => {
        this.$nextTick(() => this.$refs.id.focus());
      }, 100);
    },
    openDialog(scope) {
      scope.row.showDialog = true;
      this.dialogValue = scope.row.voucherDescription;
      setTimeout((x) => {
        this.$nextTick(() =>
          this.$refs["dialogDetails" + scope.$index].focus()
        );
      }, 100);
    },
    closeDialog(scope) {
      scope.row.showDialog = false;
      this.dialogValue = "";
    },
    ...mapMutations({
      setRecordDetails: "Accounting/supplierPaymentBond/setRecordDetails",
    }),
  },
  watch: {
    invoicesList: {
      handler: function (val, oldVal) {
        this.tableData = val.map(
          ({ remainAmount, dateToPay, dateCreated, voucherNumber }) => {
            return {
              invoiceAmount: remainAmount, //???????? ????????????????
              invoiceDate: dateCreated, //?????????? ????????????????
              dueDate: dateToPay, //?????????? ??????????????????
              invoiceNo: voucherNumber, //?????? ????????????????
              costCenterId: 0, //???????? ??????????????
              payTypeId: 0, //?????????? ??????????
              bankId: 0, //??????????
              checkNo: 0, //?????? ??????????
              checkDate: new Date(), //?????????? ??????????
              voucherDescription: "", //??????,
              voucherAmount: 0, //???????????? ??????????????
              remainAmount: remainAmount, // ???????????? ?????????????? ?????????? ???? ????????
              showDialog: false,
            };
          }
        );
        if (this.tableData.length > 0) {
        this.$nextTick(() => this.$refs["id_0"].focus());
        }
      },     

    },
    distributionStatus: {
      handler: function (val, oldVal) {
        // check if user enter number and check button is clicked
        if (val.status && val.amount > 0) {
          // reduce all invoices amount
          this.total_invoices_amount = this.$convertToValidNumber(
            this.tableData.reduce((prev, { invoiceAmount }) => {
              return prev + invoiceAmount;
            }, 0)
          );
          // number that user entered
          this.total_paid_amount = val.amount;
          let remainderOfDistribute = 0;
          // if number that user entered is > than total invoices amount Pay all invoices and reset all invoice remain to ZERO
          if (this.total_paid_amount >= this.total_invoices_amount) {
            this.tableData.forEach(({ invoiceAmount }, index) => {
              this.tableData[index].voucherAmount = invoiceAmount;
              this.tableData[index].remainAmount = 0;
            });
          } else {
            // main condition to distribute total_paid_amount on all invoices by equal
            while (
              this.total_paid_amount > 0 &&
              this.total_invoices_amount > 0
            ) {
              let divideEqual = parseInt(
                this.total_paid_amount / this.tableData.length
              );
              remainderOfDistribute =
                this.total_paid_amount == remainderOfDistribute
                  ? remainderOfDistribute
                  : remainderOfDistribute +
                    this.total_paid_amount -
                    divideEqual * this.tableData.length;

       
              // this codition to break When be divideEqual = 0 and still there invoice remain not equal zero and still there paid amount to paid this invoice
              // EX => total_paid_amount == 0.000001111
              // when divider this number on length Be zero although there paid amount
              if (
                divideEqual == 0 &&
                this.total_paid_amount > 0 &&
                remainderOfDistribute > 0
              ) {
                for (let i = 1; i <= this.tableData.length; i++) {
                  if (
                    this.tableData[this.tableData.length - i].remainAmount >
                    remainderOfDistribute
                  ) {
                    this.tableData[this.tableData.length - i].voucherAmount =
                      this.$convertToValidNumber(
                        this.tableData[this.tableData.length - i]
                          .voucherAmount + remainderOfDistribute
                      );
                    this.total_invoices_amount = this.$convertToValidNumber(
                      this.total_invoices_amount - remainderOfDistribute
                    );
                    this.tableData[this.tableData.length - i].remainAmount =
                      this.$convertToValidNumber(
                        this.tableData[this.tableData.length - i].remainAmount -
                          remainderOfDistribute
                      );
                    this.total_paid_amount = 0;
                    remainderOfDistribute = 0;
                    break;
                  } else {
                    this.tableData[this.tableData.length - i].voucherAmount =
                      this.$convertToValidNumber(
                        this.tableData[this.tableData.length - i]
                          .voucherAmount +
                          this.tableData[this.tableData.length - i].remainAmount
                      );
                    this.total_invoices_amount = this.$convertToValidNumber(
                      this.total_invoices_amount -
                        this.tableData[this.tableData.length - i].remainAmount
                    );
                    this.tableData[this.tableData.length - i].remainAmount = 0;
                    this.total_paid_amount = this.$convertToValidNumber(
                      this.total_paid_amount -
                        this.tableData[this.tableData.length - i].remainAmount
                    );
                    remainderOfDistribute =
                      remainderOfDistribute -
                      this.tableData[this.tableData.length - i].remainAmount;
                  }
                }
                break;
              }

              for (let i = 1; i <= this.tableData.length; i++) {
                // invoiceAmount => ???????? ????????????????
                // voucherAmount => ???????????? ??????????????
                // remainAmount => ???????????? ??????????????
                if (
                  this.tableData[this.tableData.length - i].remainAmount > 0
                ) {
                  if (
                    divideEqual >
                    this.tableData[this.tableData.length - i].remainAmount
                  ) {
                    let value =
                      this.tableData[this.tableData.length - i].voucherAmount +
                      this.tableData[this.tableData.length - i].remainAmount;
                    this.tableData[this.tableData.length - i].voucherAmount =
                      this.$convertToValidNumber(value);
                    this.total_paid_amount -= this.$convertToValidNumber(
                      this.tableData[this.tableData.length - i].remainAmount
                    );
                    this.total_invoices_amount -= this.$convertToValidNumber(
                      this.tableData[this.tableData.length - i].remainAmount
                    );
                    this.tableData[this.tableData.length - i].remainAmount = 0;
                  } else {
                    this.tableData[this.tableData.length - i].voucherAmount =
                      this.$convertToValidNumber(
                        this.tableData[this.tableData.length - i]
                          .voucherAmount + divideEqual
                      );

                    this.total_paid_amount = this.$convertToValidNumber(
                      this.total_paid_amount - divideEqual
                    );

                    this.total_invoices_amount = this.$convertToValidNumber(
                      this.total_invoices_amount - divideEqual
                    );
                    this.tableData[this.tableData.length - i].remainAmount =
                      this.$convertToValidNumber(
                        this.tableData[this.tableData.length - i].remainAmount -
                          divideEqual
                      );
                  }
                }
              }
            }
          }
        } else {
          this.tableData.forEach(({ invoiceAmount }, index) => {
            this.tableData[index].voucherAmount = 0;
            this.tableData[index].remainAmount = invoiceAmount;
          });
          this.total_paid_amount = 0;
          this.total_invoices_amount = this.$convertToValidNumber(
            this.tableData.reduce((prev, { invoiceAmount }) => {
              return prev + invoiceAmount;
            }, 0)
          );
        }
      },
      deep: true,
    },
    tableData: {
      handler: function (val, oldVal) {
        //deep Clone
        let data = JSON.parse(JSON.stringify([...val]));
        let { total_remain_amount, total_voucher_amount } =
          this.tableData.reduce(
            (prev, { remainAmount, voucherAmount }) => {
              return {
                total_remain_amount:
                  prev.total_remain_amount + Number(remainAmount),
                total_voucher_amount:
                  prev.total_voucher_amount + Number(voucherAmount),
              };
            },
            { total_remain_amount: 0, total_voucher_amount: 0 }
          );
        this.setRecordDetails({
          voucherDetailsList: data,
          total_remain_amount: total_remain_amount,
          total_voucher_amount: total_voucher_amount,
        });
      },
      deep: true,
    },
    banksOrFundsSelected(after, before) {
      // reset payTypeId and bankId to 0 if fund is selected
      if (before !== after) {
        this.tableData.forEach((item) => {
           
          item.bankId = 0;
          if (after == "funds") {
            item.payTypeId = 0;
          } else {
            item.payTypeId = "";
          }
        });
      }
    },
  },
};
</script>
