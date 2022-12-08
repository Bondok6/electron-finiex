<template>
  <div>
    <section class="mb-0 py-3 px-4-lg table-append-tax">
      <el-form label-position="top">
        <table style="width: 70%">
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
                <span @click="print()">{{
                  $t("client-account-or-supplier")
                }}</span>
              </td>
              <td>
                <el-select
                  class="width-full selectButton"
                  v-model="form.toAccId"
                  @change="
                    splitAccIdAndProvider();
                    getInvoices(form.toAccId);
                    getBalance(form.toAccId);
                  "
                >
                  <el-option
                    v-for="item in allProviderList"
                    :key="item.accId + item.providerCustomerId"
                    :label="item.pcname + '---' + item.accId"
                    :value="item.accId"
                  >
                    <span style="float: left">{{ item.pcname }}</span>
                    <span
                      style="float: right; color: #8492a6; font-size: 13px"
                      >{{ item.accId }}</span
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
                <span>{{ $t("number-purchases-sales") }}</span>
              </td>
              <td>
                <el-select
                  class="width-full selectButton"
                  v-model.number="form.invoiceNo"
                  @change="handleChangeInvoiceNumber(form)"
                >
                  <el-option :label="$t('without')" :value="0"> </el-option>
                  <el-option
                    v-for="item in invoicesSupplierORCustomerList"
                    :key="item.invoiceID"
                    :label="item.voucherNumber"
                    :value="item.invoiceID"
                  >
                    <span style="float: left">{{ item.voucherNumber }} </span>
                    <span style="float: right; color: #8492a6; font-size: 13px"
                      >{{ item.remainAmount }}
                      {{
                        item.customerBranch ? "---" + item.customerBranch : ""
                      }}
                    </span>
                  </el-option>
                </el-select>
              </td>
            </tr>
            <tr>
              <td class="popup-label">
                <span>{{ $t("cost-center") }}</span>
              </td>
              <td>
                <el-select
                  class="width-full selectButton"
                  v-model="form.costCenterID"
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
                <el-input v-model="form.name" class="">
                  <template slot="append">%</template>
                </el-input>
              </td>
            </tr>
            <!-- <tr>
              <td class="popup-label">
                <span>{{ $t("delegate-name") }}</span>
              </td>
              <td>
                <el-select
                  :placeholder="$t('all')"
                  v-model="form.item_number"
                  class="width-full"
                >
                  <el-option :value="1" class="addSelect">
                    <NuxtLink :to="localePath('/accounting/delegates-data')">
                      <el-button class="width-full"
                        >{{ $t("add-delegate") }}
                        <i class="el-icon-plus mx-1"></i
                      ></el-button> </NuxtLink
                  ></el-option>
                  <el-option :label="$t('credit')" :value="2"></el-option>
                  <el-option :label="$t('debit')" :value="1"></el-option>
                </el-select>
              </td>
            </tr> -->

            <tr>
              <td class="popup-label">
                <span>{{ $t("amount-of") }}</span>
              </td>
              <td>
                <el-input
                  v-model="form.voucherAmount"
                  class="buttonAppend bg-grey"
                  :class="[form.taxState ? 'bg-red' : '']"
                  @input="
                    form.taxState = false;
                    form.taxValue = 0;
                    convertNumberToWord(form.voucherAmount);
                  "
                >
                  <button
                    slot="append"
                    @click.prevent="toggleAddTax()"
                    v-if="enableTax"
                  >
                    {{ $t("add-tax") }}
                    {{ form.taxValue }}
                  </button>
                </el-input>
              </td>
              <td
                :class="[form.taxState ? '' : 'visibility-collapse']"
                v-if="enableTax"
              >
                <el-input disabled v-model="form.total" class="">
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
            <tr>
              <td class="popup-label">
                <span>{{ $t("and-that-in-return") }}</span>
              </td>
              <td>
                <el-input v-model="form.voucherDescription" class="" />
              </td>
            </tr>
            <tr>
              <td class="popup-label">
                <span>{{ $t("amount-in-letters") }}</span>
              </td>
              <td>
                <el-input v-model="amountInLetters" class="" disabled />
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
          </tbody>
        </table>
      </el-form>
    </section>

    <!-- start dialog -->
    <el-dialog title=" " :visible.sync="dialogOne" width="50%">
      <span>
        <el-container class="d-block box-shadow mb-0 px-2 py-2">
          <br />
          <el-container class="container mt-0 mb-0 invoice-table">
            <el-table
              :data="tableOne"
              style="width: 100%"
              stripe
              border
              max-height="250"
              class="invoice-table"
            >
              <el-table-column
                align="center"
                prop="invoice_number"
                :label="$t('invoice-number')"
              />
              <el-table-column
                align="center"
                prop="amount"
                :label="$t('amount')"
              />
            </el-table>
          </el-container>

          <div class="container ma-4 py-2 mt-0 invoice-summary">
            <div class="mt-2 action-buttons-nonGrown justify-center">
              <el-button
                class="mb-1 px-4-lg btn-cyan-light"
                @click="dialogOne = false"
                >{{ $t("ok") }}</el-button
              >
              <el-button
                class="mb-1 btn-red px-4-lg"
                @click="dialogOne = false"
                >{{ $t("cancel") }}</el-button
              >
            </div>
          </div>
        </el-container>
      </span>
    </el-dialog>
    <!-- end dialog -->
  </div>
</template>
<script>
import Tafgeet from "tafgeetjs";
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      dialogOne: false,
      toAccIdAndProvider: "",
      tableOne: [
        {
          invoice_number: "-",
          amount: "-",
        },
        {
          invoice_number: "-",
          amount: "-",
        },
        {
          invoice_number: "-",
          amount: "-",
        },
        {
          invoice_number: "-",
          amount: "-",
        },
      ],
      form: {
        costCenterID: 0,
        voucherAmount: 0,
        total: 0,
        taxState: false,
        taxValue: 0,
        toAccId: "",
        voucherCode: "",
        invoiceNo: 0,
        date: new Date(),
        voucherDescription: "",
        providerId: "",
      },
      amountInLetters: "",
      balance: 0,
      enableTax: true,
      lastValue: 0,
    };
  },
  computed: {
    ...mapState({
      allProviderList: (state) => state.lists.allProviderList,

      costCentersList: (state) => state.lists.costCentersList,
      invoicesSupplierORCustomerList: (state) =>
        state.lists.invoicesSupplierORCustomerList,
    }),
    tax() {
      return this.$store.getters.getTaxInformation;
    },
  },
  methods: {
    print() {
      console.log("form", this.form);
    },
    splitAccIdAndProvider() {
      let accIdPlusProviderId = this.toAccIdAndProvider.split("-");
      this.form.accId = accIdPlusProviderId[0];
      this.form.providerId = accIdPlusProviderId[1];
    },
    ...mapMutations({
      setRecordDetails: "Accounting/discountVouchers/setRecordDetails",
    }),
    convertNumberToWord(number) {
      if (!isNaN(Number(number))) {
        if (number == 0) {
          this.amountInLetters = "صفر";
        } else {
          this.amountInLetters = new Tafgeet(number, "SAR")
            .parse()
            .replace(/فقط/g, "");
        }
      } else {
        return;
      }
    },
    getInvoices(Id, providerId) {
      // this.splitAccIdAndProvider();
      this.$store.dispatch("lists/getInvoicesSupplierORCustomer", {
        accId: Id,
        providerID: providerId,
      });
    },

    toggleAddTax() {
      this.form.taxState = !this.form.taxState;
      if (this.form.taxState) {
        this.lastValue = this.form.voucherAmount;

        let scope = {
          row: {
            taxState: this.form.taxState,
            voucherAmount: this.form.voucherAmount,
          },
        };
        this.$calculateTax(scope);
        this.form.voucherAmount = scope.row.voucherAmount;
        this.form.total = scope.row.total;
        this.form.taxValue = scope.row.taxValue;
      } else {
        this.form.taxValue = 0;
        this.form.voucherAmount = this.lastValue;
        this.form.total = this.form.voucherAmount;
      }
      this.convertNumberToWord(this.form.voucherAmount);
    },
    handleChangeInvoiceNumber(form) {
      if (form.invoiceNo == "0") {
        form.voucherAmount = "";
        this.enableTax = true;
      } else {
        // Assign remainAmount to voucherAmount if invoiceNo is not 0
        // when user select invoiceNo => taxValue = 0
        this.form.voucherAmount = this.invoicesSupplierORCustomerList
          .find((item) => item.invoiceID === form.invoiceNo)
          .remainAmount.toString();
        this.convertNumberToWord(this.form.voucherAmount);
        this.enableTax = false;
      }
    },
    getBalance(id) {
      this.$store
        .dispatch("Accounting/discountVouchers/getBalance", {
          Id: id,
        })
        .then((response) => {
          let data = response.data.data;
          this.balance = data;
        })
        .catch(() => {
          this.$notify.error({
            title: "خطا",
            message: "حدث خطا اثناء جلب الرصيد",
          });
        });
    },
  },
  created() {
    this.$store
      .dispatch("Accounting/discountVouchers/suggestVoucher")
      .then((response) => {
        let data = response.data.data;
        this.form.voucherCode = data.code;
      })
      .catch((error) => {
        this.$notify.error({
          title: "خطا",
          message: "حدث خطا اثناء جلب رقم القيد",
        });
      });
  },
  watch: {
    form: {
      handler: function (newValue, oldValue) {
        this.setRecordDetails({
          ...newValue,
          // must convert format date before send prop to server (ios format)
          date: new Date(newValue.date).toISOString(),
        });
      },
      deep: true,
    },
  },
};
</script>
<style scoped>
.popup-label {
  width: 30%;
}
</style>
