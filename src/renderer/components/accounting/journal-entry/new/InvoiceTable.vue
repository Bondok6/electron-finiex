<template>
  <div>
    <el-container class="container ma-4 mt-0 mb-0 invoice-table editable-table">
      <el-table
        :data="tableData"
        style="width: 100%"
        stripe
        border
        max-height="250"
        :current-row-key="Math.random()*20"
      >
        <el-table-column width="40" :label="$t('id')" align="center">
          <template slot-scope="scope">
            <el-input
              :ref="'id_' + scope.$index"
              class="index-input caret-transparent"
              style="text-align: center;"
              :placeholder="scope.$index + 1"
            ></el-input>
          </template>
        </el-table-column>
        <el-table-column
          width="280"
          align="center"
          prop="account_name"
          :label="$t('account-name')"
        >
          <template slot-scope="scope">
            <el-select
              v-model="scope.row.accID"
              filterable
              remote
              :placeholder="$t('search')"
              :remote-method="remoteMethod"
              :loading="loading"
              class="width-full"
            >
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
          prop="costـcenter"
          :label="$t('cost-center')"
        >
          <template slot-scope="scope">
            <el-select
              v-model="scope.row.costCenterID"
              :placeholder="$t('choose')"
              :loading="loading"
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
          prop="documentID"
          :label="$t('document-number')"
        >
          <template slot-scope="scope">
            <el-input
              size="small"
              class="number"
              v-model="scope.row.documentID"
             
            ></el-input>
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          prop="moveDate"
          :label="$t('document-date')"
        >
          <template slot-scope="scope">
            <el-date-picker
              v-model="scope.row.moveDate"
              type="date"
              placeholder="2020-10-15"
              format="yyyy/MM/dd"
              style="text-align: center"
              @input="handleDateChange(scope.$index, $event, scope.row)"
            ></el-date-picker>
          </template>
        </el-table-column>
        <el-table-column align="center" prop="details" :label="$t('statement')">
          <template slot-scope="scope">
            <el-input
              size="small"
              style="text-align: center"
              v-model="scope.row.details"
              @focus="openDialog(scope)"
            ></el-input>
            <el-dialog
              :title="$t('statement')"
              :visible.sync="scope.row.showDialog"
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
                          :ref="'dialogDetails_' + scope.$index"
                          @blur="closeDialog(scope)"
                          @keydown="
                            scope.row.details = dialogValue;
                            dialogValue =
                              dialogValue.length >= 150 ? dialogValue.slice(0, 150) : dialogValue;
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
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          prop="localDebit"
          :label="$t('debitor')"
        >
          <template slot-scope="scope">
            <el-input
            :ref="'debitor_' + scope.$index"
              size="small"
              class="number"
              style="text-align: center"
              v-model="scope.row.localDebit"
              @blur="
                scope.row.localDebit = $convertToValidNumber(
                  +scope.row.localDebit
                )
              "
            ></el-input>
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          prop="localCredit"
          :label="$t('creditor')"
        >
          <template slot-scope="scope">
            <el-input
              size="small"
              style="text-align: center"
              v-model="scope.row.localCredit"
              @blur="
                scope.row.localCredit = $convertToValidNumber(
                  +scope.row.localCredit
                )
              "
              @keyup.enter.native="newRow()"
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
              @confirm="deleteRow(scope.$index)"
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
    <!-- start addCostCenter dialog-->
    <el-dialog title="" :visible.sync="addCostCenter" width="70%">
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
                    <el-select v-model="form.main_center" class="width-full">
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
            @click="addCostCenter = false"
            class="mb-1 btn-blue"
            >{{ $t("save-f5") }}</el-button
          >
          <el-button
            size="mini"
            @click="addCostCenter = false"
            class="mb-1"
            type="danger"
            >{{ $t("delete-f8") }}</el-button
          >
          <el-button
            size="mini"
            @click="addCostCenter = false"
            class="mb-1 btn-violet"
            >{{ $t("back-f6") }}</el-button
          >
          <el-button
            size="mini"
            @click="addCostCenter = false"
            class="mb-1 btn-grey"
            >{{ $t("print-f4") }}</el-button
          >
          <el-button
            size="mini"
            @click="addCostCenter = false"
            class="mb-1"
            type="warning"
            >{{ $t("tree-show") }}</el-button
          >
        </div>
      </span>
    </el-dialog>

    <!-- end addCostCenter dialog-->
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "invoice",

  data: function() {
    return {
      loading: false,
      dialogValue: "",

      tableData: [
        {
          accID: "", // accountName
          costCenterID: 0,
          documentID: "",
          moveDate: new Date(), // default date today
          details: "",
          localDebit: 0,
          localCredit: 0,
          showDialog: false
        },
        {
          accID: "", // accountName
          costCenterID: 0,
          documentID: "",
          moveDate: new Date(), // default date today
          details: "",
          localDebit: 0,
          localCredit: 0,
          showDialog: false
        }
      ],

      appenedTableData: {
        accID: "", // accountName
        costCenterID: 0,
        documentID: "",
        moveDate: new Date(),
        details: "",
        localDebit: 0,
        localCredit: 0,
        showDialog :false
      },
      form: {
        adjustment_number: "1"
      },
      addCostCenter: false
    };
  },
  mounted() {
    setTimeout(x => {
      this.$nextTick(() => {
        this.$refs["id_0"].focus();
      });
    }, 1000);
  },
  methods: {
    ...mapMutations({
      setRecordDetails: "Accounting/accountingDailyJournal/setRecordDetails"
    }),
    handleDateChange(idnex, event, row) {
      row.moveDate = new Date(row.moveDate).toISOString();
    },
    newRow() {
      this.tableData.push({ ...this.appenedTableData });
      this.setRecordDetails({
        totalRows: this.tableData.length
      });
    },
    // method to search for account pn custom search select
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
    deleteRow(index) {
      this.tableData.splice(index, 1);
      this.setRecordDetails({
        totalRows: this.tableData.length
      });
    },
    openDialog(scope) {
      scope.row.showDialog = true;
      this.dialogValue = scope.row.details;

      setTimeout(x => {
        this.$nextTick(() => {
          console.log(this.$refs)
        });
      }, 1000);
    },
    closeDialog(scope) {
      scope.row.showDialog = false;
      this.dialogValue = "";
      this.$refs["debitor_" + scope.$index].focus();
    },

  },
  computed: {
    ...mapState({
      accountList: state => state.Accounting.accountingDailyJournal.accountList,
      costCentersList: state => state.lists.costCentersList
    })
  },
  watch: {
    tableData: {
      handler(after) {
        // commbin to with one reduce return object
        let AllTotal = after.reduce((acc, cur) => {
          return {
            totalDebit: (acc?.totalDebit ?? 0) + Number(cur.localDebit),
            totalCredit: (acc?.totalCredit ?? 0) + Number(cur.localCredit)
          };
        }, {});
        // deep clone
        let data = JSON.parse(JSON.stringify(after));
        this.setRecordDetails({
          moves: data,
          totalDebit: AllTotal.totalDebit,
          totalCredit: AllTotal.totalCredit,
          totalRows: data.length
        });
        // }
      },
      deep: true
    }
  }
};
</script>
