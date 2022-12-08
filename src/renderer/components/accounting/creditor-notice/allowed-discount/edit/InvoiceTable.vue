<template>
  <el-container class="container ma-4 mt-0 mb-0 invoice-table">
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
            class="index-input text-center"
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
              v-if="initialOption"
              :label="scope.row.toAccId + '---' + scope.row.toAccName"
              :value="scope.row.toAccId"
              selected
            >
              <span style="float: left">{{ scope.row.toAccName }}</span>
              <span style="float: right; color: #8492a6; font-size: 13px">{{
                scope.row.toAccId
              }}</span>
            </el-option>
            <el-option
              v-for="item in accountList"
              :key="item.accID"
              :label="item.accName + ' --- ' + item.accID"
              :value="item.accID"
            >
              <span style="float: left">{{ item.accName }}</span>
              <span style="float: right; color: #8492a6; font-size: 13px">{{
                item.accID
              }}</span>
            </el-option>
          </el-select>
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        prop="invoice_number"
        :label="$t('sales-invoice-number')"
      >
        <template slot-scope="scope">
          <el-select
            v-model.number="scope.row.invoiceNo"
            @focus="handleInvoiceSelectFocus(scope.row)"
            class="width-full"
          >
            <el-option :label="$t('without')" :value="0"> </el-option>
            <el-option
              v-for="item in purchasesList"
              :key="item.invoiceID"
              :label="item.voucherNumber"
              :value="item.invoiceID"
            >
              <span style="float: left">{{ item.voucherNumber }} </span>
              <span style="float: right; color: #8492a6; font-size: 13px"
                >{{ item.remainAmount }}
                {{ item.customerBranch ? "--" + item.customerBranch : "" }}
              </span>
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
      <!-- <el-table-column
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
      </el-table-column> -->
      <el-table-column
        align="center"
        prop="costـcenter"
        :label="$t('cost-center')"
      >
        <template slot-scope="scope">
          <el-select
            v-model="scope.row.costCenterId"
            :placeholder="$t('choose')"
            :loading="loading"
            class="width-full"
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
      <el-table-column align="center" prop="amount" :label="$t('amount')">
        <template slot-scope="scope">
          <el-input
            size="small"
            v-model="scope.row.voucherAmount"
            @keyup.native.enter="newRow()"
            class="number"
          ></el-input>
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        width="60"
        v-if="!(tableData.length == 1)"
      >
        <!--To avoid remove first row beacuse it removed cannot create new row -->
        <template slot-scope="scope">
          <el-popconfirm
            icon="el-icon-info"
            icon-color="red"
            title="تأكيد حذف الصنف ؟"
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
      loading: false,
      tableData: [],
      initialOption: true,
      appenedTableData: {
        toAccId: "",
        voucherDescription: "",
        voucherAmount: "",
        invoiceNo: 0,
        costCenterId: 0,
        showDialog: false,
      },
    };
  },
  computed: {
    ...mapState({
      accountList: (state) =>
        state.Accounting.accountingDailyJournal.accountList,
      costCentersList: (state) => state.lists.costCentersList,
      purchasesList: (state) =>
        state.Accounting.paymentCompoundVouchers.purchasesList,
      singleRecordDetails: (state) =>
        state.Accounting.creditorNotice.allowedDiscount.singleRecordDetails,
    }),
  },
  methods: {
    ...mapMutations({
      setRecordDetails:
        "Accounting/creditorNotice/allowedDiscount/setRecordDetails",
    }),
    newRow() {
      this.initialOption = false;

      this.tableData.push({ ...this.appenedTableData });
      setTimeout(() => {
        this.$nextTick(() => this.$refs.id.focus());
      }, 10);
    },
    remoteMethod(query) {
      this.loading = true;
      this.initialOption = false;

      this.$store
        .dispatch("Accounting/accountingDailyJournal/fetchSubAccountsList", {
          SearchString: query,
        })
        .then((e) => {
          this.loading = false;
        })
        .catch((e) => {
          this.loading = false;
          this.$message.error(e.message);
        });
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

    // get invoice number depend on accound selected
    handleInvoiceSelectFocus(row) {
      if (!row.toAccId) {
        return;
      } else {
        this.$store.dispatch(
          "Accounting/paymentCompoundVouchers/getPurchasesList",
          {
            id: row.toAccId,
          }
        );
      }
    },
  },
  watch: {
    tableData: {
      handler(after) {
        let data = JSON.parse(JSON.stringify(after));
        this.setRecordDetails({
          voucherDetailsList: data,
        });
      },
      deep: true,
    },
    singleRecordDetails: {
      handler(after) {
        this.tableData = after.voucherDetailsList?.map((item) => {
          return {
            toAccName: item.toAccName,
            toAccId: item.toAccId,
            voucherDescription: item.voucherDescriptions ?? "",
            voucherAmount: item.voucherAmount,
            invoiceNo: item.invoiceNo,
            costCenterId: item.costCenterId,
            showDialog: false,
            id: item.id,
            isDeleted: false,
          };
        });
      },
      deep: true,
    },
  },
};
</script>
