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

  export default {
    name: "invoice",
  
    data() {
        return {
            dialogValue: "",
            loading: false,
            tableData: [
                {
                    toAccId: "",
                    voucherDescription: "",
                    voucherAmount: "",
                    invoiceNo: 0,
                    costCenterId: 0,
                    showDialog: false
                }
            ],
            costCentersList: [{
            mname:0 ,
            mdcode:0,
            }],
            purchasesList: [
            {
                voucherNumber:0 ,
                invoiceID:0 ,
                customerBranch: ""
            }
            ],
            accountList:[{
                accID: 0,
                accName :""
            }]
        }
    }
  };
  </script>
  