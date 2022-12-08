<template>
  <div>
    <el-container class="container ma-4 mt-0 mb-0 invoice-table editable-table">
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
          width="40"
          :label="$t('id')"
        >
          <template slot-scope="scope">
            <el-input
              class="index-input caret-transparent"
              style="text-align: center"
              :placeholder="scope.$index + 1"
              :ref="'id_' + scope.$index"
            ></el-input>
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          prop="accID"
          :label="$t('account-name')"
          width="280"
        >
          <template slot-scope="scope">
            <el-select
              :disabled="recordIsReadonly"
              v-model="scope.row.accID"
              filterable
              remote
              :placeholder="$t('search')"
              :remote-method="remoteMethod"
              :loading="loading"
              class="width-full"
            >
              <el-option
                v-if="initialOption"
                :label="scope.row.accName + ' --- ' + scope.row.accID"
                :value="scope.row.accID"
              >
                <span style="float: left">{{ scope.row.accName }}</span>
                <span style="float: right; color: #8492a6; font-size: 13px">{{
                  scope.row.accID
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
          prop="costCenterID"
          :label="$t('cost-center')"
        >
          <template slot-scope="scope">
            <el-select
              :disabled="recordIsReadonly"
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
              :disabled="recordIsReadonly"
              size="small"
              style="text-align: center"
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
              :disabled="recordIsReadonly"
              v-model="scope.row.moveDate"
              type="date"
              placeholder="2020-10-15"
              format="yyyy/MM/dd"
              style="text-align: center"
            ></el-date-picker>
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          prop="statement"
          :label="$t('statement')"
        >
          <template slot-scope="scope">
            <el-input
              :disabled="recordIsReadonly"
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
                          :ref="'dialogDetails' + scope.$index"
                          @input="
                            scope.row.details = dialogValue;
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
          </template>
        </el-table-column>
        <el-table-column align="center" prop="debit" :label="$t('debitor')">
          <template slot-scope="scope">
            <el-input
              :disabled="recordIsReadonly"
              size="small"
              style="text-align: center"
              v-model="scope.row.localDebit"
            ></el-input>
          </template>
        </el-table-column>
        <el-table-column align="center" prop="credit" :label="$t('creditor')">
          <template slot-scope="scope">
            <el-input
              size="small"
              :disabled="recordIsReadonly"
              style="text-align: center"
              v-model="scope.row.localCredit"
              @keyup.enter.native="newRow(scope.$index)"
            ></el-input>
          </template>
        </el-table-column>

        <el-table-column align="center" width="60" v-if="!recordIsReadonly">
          <template slot-scope="scope">
            <el-popconfirm
              icon="el-icon-info"
              icon-color="red"
              title="تأكيد حذف الصنف ؟"
              @confirm="deleteRow(scope.row.accID)"
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

    <addcostcenter />
    <!-- end addCostCenter dialog-->

    <!-- second dialog -->
    <costcenterone />
  </div>
</template>

<script>
import Addcostcenter from "~/components/dialogs/add-cost-center";
import Costcenterone from "~/components/dialogs/cost-center-one";
import { mapState, mapMutations } from "vuex";
export default {
  components: {
    Addcostcenter,
    Costcenterone
  },
  name: "invoice",

  data: function() {
    return {
      initialOption: true,
      dialogValue: "",

      loading: false,
      tableData: [],
      tableOne: [
        {
          item_number_available: "-",
          quantity_available: "-",
          item_number_not_available: "-"
        },
        {
          item_number_available: "-",
          quantity_available: "-",
          item_number_not_available: "-"
        },
        {
          item_number_available: "-",
          quantity_available: "-",
          item_number_not_available: "-"
        },
        {
          item_number_available: "-",
          quantity_available: "-",
          item_number_not_available: "-"
        },
        {
          item_number_available: "-",
          quantity_available: "-",
          item_number_not_available: "-"
        },
        {
          item_number_available: "-",
          quantity_available: "-",
          item_number_not_available: "-"
        }
      ],
      appenedTableData: {
        accID: "",
        accName: "",
        costCenterID: "",
        documentID: "",
        moveDate: new Date(),
        details: "",
        localDebit: 0,
        localCredit: 0,
        id: null,
        isDeleted: false
      },
      deletedRows: [],
      form: {
        adjustment_number: "1"
      },
      dialogOne: false,
      dialogTwo: false
    };
  },

  methods: {
    ...mapMutations({
      setRecordDetails: "Accounting/accountingDailyJournal/setRecordDetails"
    }),
    newRow(index) {
      if (this.initialOption) {
        this.removeStaticOpacity();
      }

      if (index + 1 == this.tableData.length) {
        this.tableData.push({ ...this.appenedTableData });
      }
    },

    async remoteMethod(query) {
      if (this.initialOption) {
        this.removeStaticOpacity();
      }
      this.loading = true;
      await this.$store.dispatch(
        "Accounting/accountingDailyJournal/fetchSubAccountsList",
        {
          SearchString: query
        }
      );

      this.loading = false;
    },
    openDialogOne(state) {
      this.$store.commit("addcostcenter/updateDialogState", state);
    },
    openDialogTwo(state) {
      this.$store.commit("costcenterone/updateDialogState", state);
    },
    deleteRow(id) {
      // splice return araay of deleted row (one item detelets)
      let index = this.tableData.findIndex(item => {
        return item.accID == id;
      });
      // splice return array of delete row
      let rowDeleted = this.tableData.splice(index, 1)[0];
      rowDeleted.isDeleted = true;
      // delete rowDeleted.localDebit;
      // delete rowDeleted.localCredit;
      if (rowDeleted.id) {
        this.deletedRows.push(rowDeleted);
      }
       
       
    },
    removeStaticOpacity() {
      this.initialOption = false;
    },
    openDialog(scope) {
      scope.row.showDialog = true;
      this.dialogValue = scope.row.details;
      setTimeout(x => {
        this.$nextTick(() =>
          this.$refs["dialogDetails" + scope.$index] ?  this.$refs["dialogDetails" + scope.$index].focus() : false
        );
      }, 100);
    },
    closeDialog(scope) {
      scope.row.showDialog = false;
      this.dialogValue = "";
    }
  },
  computed: {
    ...mapState({
      accountList: state => state.Accounting.accountingDailyJournal.accountList,
      costCentersList: state => state.lists.costCentersList,
      singleRecordDetails: state =>
        state.Accounting.accountingDailyJournal.singleRecordDetails,
      recordIsReadonly: state => state.Accounting.accountingDailyJournal.recordIsReadonly
    })
  },
  mounted() {
    setTimeout(x => {
      this.$nextTick(() => {
        console.log(this.$refs["id_0"]);
        this.$refs["id_1"] ?  this.$refs["id_1"].focus() : false
      });
    }, 1000);
  },
  watch: {
    singleRecordDetails: {
      handler(val) {
        // this.tableData = record;
        this.tableData =
          val?.details?.map(item => {
            return {
              ...item,
              isDeleted: false,
              moveDate: new Date(item.moveDate),
              showDialog: false
            };
          }) ?? [];
         
         
      },
      deep: true
    },
    tableData: {
      handler(after) {
        let AllTotal = after.reduce((acc, cur) => {
          return {
            totalDebit: (acc?.totalDebit ?? 0) + Number(cur.localDebit),
            totalCredit: (acc?.totalCredit ?? 0) + Number(cur.localCredit)
          };
        }, {});

        // clone shallow copy of object to prevent mutation (to prevent mutate refrence of original object)
        let data = JSON.parse(JSON.stringify([...after]));
        console.log([...data, ...this.deletedRows]);
        console.log(Number(AllTotal.totalDebit).toFixed(2));
        this.setRecordDetails({
          moves: [...data, ...this.deletedRows],
          totalDebit: Number(AllTotal.totalDebit).toFixed(2),
          totalCredit: Number(AllTotal.totalCredit).toFixed(2),
          totalRows: data.length
        });
        // }
      },
      deep: true
    }
  }
};
</script>
