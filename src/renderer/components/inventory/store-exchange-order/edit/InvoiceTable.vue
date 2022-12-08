<template>
  <el-container class="container ma-4 mt-0 mb-0 invoice-table new-record-table">
    <el-table
      :data="tableData"
      style="width: 100%"
      stripe
      border
      :max-height="220"
    >
      <el-table-column align="center" type="index" :label="$t('id')" width="40">
      </el-table-column>

      <el-table-column
          align="center"
          prop="item-name"
          :label="$t('item-name')"
          width="280"
        >
          <template slot-scope="scope">
            <el-select
              v-model="scope.row.itemID"
              filterable
              remote
              ref="name"
              :placeholder="$t('search')"
              :remote-method="remoteMethod"
              @change="getItemDetalis(scope)"
              @focus="editTabel(scope)"
              :loading="loading"
              class="account-name width-full"
            >
              <el-option
                v-for="item in itemsCardList"
                :key="item.itemId"
                :label="item.itemName + ' --- ' + item.itemId"
                :value="item.itemId"
              >
                <span style="float: left">{{ item.itemName }}</span>
                <span style="float: right; color: #8492a6; font-size: 13px">{{
                  item.itemId
                }}</span>
              </el-option>
            </el-select>
          </template>
        </el-table-column>

        <el-table-column align="center" v-if="showAttrsColum" :label="$t('items-attributes')">
          <template slot-scope="scope">
          <span v-if="!scope.row.edit">{{ scope.row.personalityName }}</span>
          <el-select
            v-else
            v-model="scope.row.personality"
            filterable
            :placeholder="$t('search')"
            clearable
          >
            <el-option
              v-for="item in scope.row.purchasePersonality"
              :key="item.mdCode"
              :label="item.mName"
              :value="item.mdCode"
            />
          </el-select>
        </template>
      </el-table-column>

      <el-table-column align="center" v-if="showBatchColum" :label="$t('patch-number')">

        <template slot-scope="scope">
          <span v-if="!scope.row.edit">{{ scope.row.batch }}</span>
          <el-select
            v-else
            v-model="scope.row.batch"
            filterable
            :placeholder="$t('search')"
            @input="getQuantityAv(scope)"
            clearable
          >
            <el-option
              v-for="item in scope.row.quantityBatches"
              :key="item.batch"
              :label="item.batch"
              :value="item.batch"
            />
          </el-select>
        </template>
      </el-table-column>

      <el-table-column align="center" v-if="showBatchColum" :label="$t('expire-date')">
        <template slot-scope="scope">
          <span v-if="!scope.row.edit">{{ scope.row.expireDate }}</span>
          <el-select
            v-else
            v-model="scope.row.expireDate"
            filterable
            :placeholder="$t('search')"
            @input="getQuantityAv(scope)"
            clearable
          >
            <el-option
              v-for="item in scope.row.quantityBatches"
              :key="item.expireDate"
              :label="item.expireDate"
              :value="item.expireDate"
            />
          </el-select>
        </template>
      </el-table-column>

      <el-table-column align="center" prop="item_unit" :label="$t('unit')">
        <template slot-scope="scope">
          <span v-if="!scope.row.edit">{{ scope.row.unitName }}</span>
          <el-select
            v-else
            class="width-full"
            v-model.number="scope.row.unitID"
            @input="setUnitsData(scope)"
          >
            <el-option
              v-for="item in scope.row.units"
              :key="item.unit"
              :value="item.unit"
              :label="item.unitName"
            >
            </el-option>
          </el-select>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="warehouse" :label="$t('warehouse')">
        <template slot-scope="scope">
          <span v-if="!scope.row.edit">{{ scope.row.warehouseName }}</span>
          <el-select
            v-else
            class="width-full"
            v-model.number="scope.row.warehouseID"
            @input="setQuantityWarehouseData(scope)"
          >
            <el-option
              v-for="item in scope.row.quantityWarehouse"
              :key="item.warehouseID"
              :value="item.warehouseID"
              :label="item.warehouseName"
            >
            </el-option>
          </el-select>
        </template>
      </el-table-column>
      <el-table-column align="center" :label="$t('statement')">
          <template slot-scope="scope">
            <span v-if="!scope.row.edit">{{ scope.row.itemNote.slice(0,10) }}</span>
            <el-input
              v-else
              size="small"
              v-model="scope.row.itemNote"
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
                          :ref="'dialogDetails' + scope.$index"
                          v-model="dialogValue"
                          @input="
                            scope.row.itemNote = dialogValue;
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
                <el-button
                  class="btn-cyan-light px-4-lg"
                  @click="closeDialog(scope)"
                  >{{ $t("ok") }}</el-button
                >
              </span>
            </el-dialog>
          </template>
        </el-table-column>

      <el-table-column align="center" prop="quantity" :label="$t('quantity')">
        <template slot-scope="scope">
          <span v-if="!scope.row.edit">{{ scope.row.quantity }}</span>
          <el-input
            v-else
            size="small"
            style="text-align: center"
            ref="quantity"
            v-model="scope.row.quantity"
            @input="calculateTotal(scope)"
            @change="checkQuantity(scope)"
          ></el-input>
        </template>
      </el-table-column>
      <el-table-column v-if="showSerialColum" align="center" prop="item_category" label="/" width="60">
        <template slot-scope="scope">
          <el-input
            size="small"
            class="text-center width-full"
            v-model="scope.row.item_category"
            @focus="openSerialDialog(scope)"
          ></el-input>
          <el-dialog
            :title="$t('serial-number')"
            :visible.sync="scope.row.showDialogSerial"
            width="50%"
          >
            <span>
              <el-container class="d-block box-shadow mb-0 px-2 py-2">
                <div class="horizontal-line-text mb-4 mt-2">
                  <span>{{ $t("additional-item-information") }}</span>
                </div>
                      <el-input
                        v-for="serial in scope.row.serialNumber"
                        v-model="serial.number"
                        clearable
                        style="margin-bottom: 10px"
                        :key="serial.id"
                        @keyup.enter.native="checkSerialNum(scope)"
                      ></el-input>
                    <div class="horizontal-line-text">
                      <span>{{ $t("item-specification") }}</span>
                    </div>
                <div
                  class="form-item-with-right-label width-full"
                >
                  <el-input
                    class="notes-input width-full"
                    type="textarea"
                    :rows="7"
                    v-model="scope.row.notesItem"
                    maxlength="150"
                  >
                  </el-input>
                </div>
              </el-container>
            </span>
            <span slot="footer" class="dialog-footer">
              <el-button class="btn-cyan-light" @click="closeSerialDialog(scope)">{{
                $t("ok")
              }}</el-button>
            </span>
          </el-dialog>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="price" :label="$t('sell-price')">
        <template slot-scope="scope">
          <span v-if="!scope.row.edit">{{ scope.row.price }}</span>
          <el-input
            v-else
            size="small"
            style="text-align: center"
            v-model="scope.row.price"
            @input="calculateTotal(scope)"
          ></el-input>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="total" :label="$t('total')">
        <template slot-scope="scope">
          <span v-if="!scope.row.edit">{{ scope.row.totalDetails }}</span>
          <el-input
            v-else
            size="small"
            style="text-align: center"
            v-model="scope.row.totalDetails"
            @keyup.enter.native="newRow(scope)"
            readonly
          ></el-input>
        </template>
      </el-table-column>

      <el-table-column align="center" width="60">
        <template slot-scope="scope">
          <el-popconfirm
            icon="el-icon-info"
            icon-color="red"
            :title="$t('confirm')"
            @confirm="tableData.splice(scope.$index, 1)"
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
import { mapState, mapMutations } from 'vuex';
import AddSerialItem from '~/components/dialogs/add-serial-item';
export default {
  name: "invoice",
  components : {
      AddSerialItem
    },

  data: function () {
    return {
      loading: false,
      dialogDetails: false,
      dialogValue: "",
      authenticated: true,
      tableData: [
        {
          itemID: "",
          unitID: null,
          warehouseID: null,
          quantityFull: null,
          quantity: null,
          price: null,
          totalDetails: null,
          netDetails: null,
          costPrice: null,
          showDialog: false,
          showDialogDetails: false,
          showDialogSerial: false,
          serialNumber: [{number : '' , id : new Date().toISOString()}],
          serialNo: "",
          notesItem: "",
          priceBeforeTax: 0,
          personality: "",
          batch: "",
          expireDate: "",
          itemNote: "",
          mdCodeSubGroup: null
        }
      ],

      appenedTableData:
        {
          itemID: "",
          unitID: null,
          warehouseID: null,
          quantityFull: null,
          quantity: null,
          price: null,
          totalDetails: null,
          netDetails: null,
          costPrice: null,
          showDialog: false,
          showDialogDetails: false,
          showDialogSerial: false,
          serialNumber: [{number : '' , id : new Date().toISOString()}],
          serialNo: "",
          notesItem: "",
          priceBeforeTax: 0,
          personality: "",
          batch: "",
          expireDate: "",
          itemNote: "",
          mdCodeSubGroup: null
        }
    };
  },

  computed:{
    showAttrsColum(){
      return this.tableData.some((el)=> el.typeStock == 1);
    },
    showSerialColum(){
      return this.tableData.some((el)=> el.itemType == 3)
    },
    showBatchColum(){
      return this.tableData.some((el)=> el.typeStock == 2)
    },
    ...mapState({
      singleRecordDetails: state => state.inventory.storeExchangeOrder.singleRecordDetails,
      itemsCardList: state => state.systemCards.globalList.itemsCardList,
      recordDetails: state => state.inventory.storeExchangeOrder.recordDetails,
    })
  },

  methods : {
    ...mapMutations({
      setRecordDetails: 
      "inventory/storeExchangeOrder/setRecordDetails",
    }),
    remoteMethod(query) {
      this.loading = true;
      this.$store
        .dispatch("systemCards/globalList/fetchItemsCardList", {
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
    getItemDetalis(scope){
      this.$store.dispatch("inventory/storeExchangeOrder/fetchItemDetails",
        scope.row.itemID
      ).then(res => {
        if(scope.row.originalQuantity){
          scope.row.originalQuantity = null;
        }
        scope.row.quantity = null ;
        scope.row.totalDetails = null ;
        scope.row.serialNumber = [{number : '' , id : new Date().toISOString()}];
        scope.row.notesItem = "" ;
        scope.row.mdCodeSubGroup = res.data.data.mdcodeSubGroup;
        scope.row.unitID = res.data.data.units[0].unit;
        for(let item of res.data.data.units) {
          if(item.unit === scope.row.unitID) {
            scope.row.quantityFull = item.quantityFill;
            scope.row.costPrice = item.unitPriceAverage;
            if(this.recordDetails.priceID === 0){
            scope.row.price = item.unitPriceCostOpen;
            }
            if(this.recordDetails.priceID === 1){
              scope.row.price = item.unitPriceCost;
            }
            if(this.recordDetails.priceID === 2){
              scope.row.price = item.unitPriceAverage;
            }
            if(this.recordDetails.priceID === 3){
              scope.row.price = item.unitWholePrice;
            }
            if(this.recordDetails.priceID === 4){
              scope.row.price = item.unitMinSalesPrice;
            }
            if(this.recordDetails.priceID === 5){
              scope.row.price = item.unitSalesPrice;
            }
          }
          
        }
        for(let item of res.data.data.quantityWarehouse){
          if(item.isDefault){
            scope.row.warehouseID = item.warehouseID;
            scope.row.actualQuantity = item.actualQuantity;
            scope.row.itemNote = item.notes;
          }
        }
        if(!scope.row.warehouseID){
          scope.row.warehouseID = res.data.data.quantityWarehouse[0].warehouseID;
          scope.row.actualQuantity = res.data.data.quantityWarehouse[0].actualQuantity;
          scope.row.itemNote = res.data.data.quantityWarehouse[0].notes;
        }
        this.tableData = this.tableData.map(element => {
          if(element.itemID === scope.row.itemID) {
           return {
              ...element,
              ...res.data.data,
            }
          }else {
            return {
              ...element,
            }
          } 
        });
      }).catch(e => {
        this.$message.error(e.message);
      });

    },
    setUnitsData(scope){
      for(let item of scope.row.units) {
        if(item.unit === scope.row.unitID) {
          scope.row.quantityFull = item.quantityFill;
          if(this.recordDetails.priceID === 0){
          scope.row.price = item.unitPriceCostOpen;
          }
          if(this.recordDetails.priceID === 1){
            scope.row.price = item.unitPriceCost;
          }
          if(this.recordDetails.priceID === 2){
            scope.row.price = item.unitPriceAverage;
          }
          if(this.recordDetails.priceID === 3){
            scope.row.price = item.unitWholePrice;
          }
          if(this.recordDetails.priceID === 4){
            scope.row.price = item.unitMinSalesPrice;
          }
          if(this.recordDetails.priceID === 5){
            scope.row.price = item.unitSalesPrice;
          }
        }
      }
    },
    setQuantityWarehouseData(scope){
      for(let item of scope.row.quantityWarehouse) {
        if(item.warehouseID === scope.row.warehouseID){
          scope.row.actualQuantity = item.actualQuantity;
          scope.row.itemNote = item.notes;
        }
      }
    },
    openSerialDialog(scope) {
      scope.row.showDialogSerial = true;
    },
    closeSerialDialog(scope) {
      scope.row.showDialogSerial = false;

    },
    openDialog(scope) {
      scope.row.showDialog = true;
      if(scope.row.itemNote) {
        this.dialogValue = scope.row.itemNote;
      }else {
        this.dialogValue = ''
      }
      this.$nextTick(() =>
        this.$refs['dialogDetails' + scope.$index].focus()
      );
    },
    closeDialog(scope) {
      scope.row.showDialog = false;
      this.dialogValue = "";
    },
    getQuantityAv(scope) {
      for(let item of scope.row.quantityBatches){
        if(item.expireDate === scope.row.expireDate || 
        item.batch === scope.row.batch) {
          scope.row.quantityAv = item.quantityAv;
        }
        if(item.expireDate === scope.row.expireDate) {
          scope.row.batch = item.batch;
        }
        if(item.batch === scope.row.batch) {
          scope.row.expireDate = item.expireDate;
        }
      }
    },
    clearSerialNums(scope){
      scope.row.serialNumber = [{number : '' , id : new Date().toISOString()}];
    },
    calculateTotal(scope) {
      this.clearSerialNums(scope);
      if(scope.row.price >= 0 && scope.row.quantity >= 0) {
        scope.row.totalDetails = scope.row.price * scope.row.quantity;
      }
    },
    calculateTotalRecords(data) {
      let total = 0 ;
      for(let i = 0 ; i < data.length ; i++) {
        total += data[i].price * data[i].quantity
      }
      return total ;
    },
    checkSerialNum(scope){
      if(scope.row.quantity && scope.row.serialNumber.length < scope.row.quantity) {
        scope.row.serialNumber.push({number : '' , id : new Date().toISOString()})
      } 
    },
    checkQuantity(scope) {
      let originalQuantity = scope.row.originalQuantity;
      let comparedQuantity = scope.row.actualQuantity;
      if(!scope.row.originalQuantity) {
        originalQuantity = 0;
      }
      if(scope.row.typeStock === 2) {
        comparedQuantity = scope.row.quantityAv ; 
      }
      if(scope.row.quantity * scope.row.quantityFull 
      > (originalQuantity  + comparedQuantity) 
      && this.authenticated) {
      this.$confirm(
        this.$t("transfer-between-branches-quantity-warning") + ` (${scope.row.quantity}) ` + this.$t("ask-for-continue"),
        {
          confirmButtonText: this.$t("ok"),
          cancelButtonText: this.$t("cancel"),
          type: "warning",
          center: true,
          customClass: "confirmBox"
        }
      ).then(()=>{
        this.calculateTotal(scope);
        setTimeout((x) => {
        this.$nextTick(() => this.$refs.quantity.focus());
      }, 20);
      }).catch(()=> {
        scope.row.quantity = originalQuantity;
        this.calculateTotal(scope);
        setTimeout((x) => {
        this.$nextTick(() => this.$refs.quantity.focus());
      }, 20);
      })
      }else if( scope.row.quantity * scope.row.quantityFull 
      > (originalQuantity  + comparedQuantity)  
      && !this.authenticated) {
        this.$confirm(
          this.$t("transfer-between-branches-quantity-warning") + ` (${scope.row.quantity}) ` + this.$t("ask-for-continue"),
        {
          confirmButtonText: this.$t("ok"),
          cancelButtonText: this.$t("cancel"),
          type: "warning",
          center: true,
          customClass: "confirmBox"
        }
      ).then(()=>{
        scope.row.quantity = comparedQuantity;
        this.calculateTotal(scope);
        setTimeout((x) => {
        this.$nextTick(() => this.$refs.quantity.focus());
      }, 20);
      }).catch(() => {
        scope.row.quantity = originalQuantity;
        this.calculateTotal(scope);
        setTimeout((x) => {
        this.$nextTick(() => this.$refs.quantity.focus());
      }, 20);
      })
      }
      if(scope.row.quantity * scope.row.quantityFull < 0){
        this.$confirm(
        "لا يمكن ادخال كمية اقل من الصفر !",
        {
          confirmButtonText: this.$t("ok"),
          showCancelButton: false,
          type: "warning",
          center: true,
          customClass: "confirmBox"
        }
      ).then(()=>{
        scope.row.quantity = originalQuantity;
        this.calculateTotal(scope);
        setTimeout((x) => {
        this.$nextTick(() => this.$refs.quantity.focus());
      }, 20);
      })
      }
    },
    editTabel(scope){
      scope.row.edit = true;
      if(scope.row.itemID) {
        this.$store.dispatch("inventory/storeExchangeOrder/fetchItemDetails",
        scope.row.itemID
      ).then(res => {
        for(let item of res.data.data.quantityWarehouse){
            if(scope.row.warehouseID === item.warehouseID){
              scope.row.actualQuantity = item.actualQuantity;
            }
        }
        if(res.data.data.typeStock === 2){
          for(let item of res.data.data.quantityBatches){
          if(item.expireDate === scope.row.expireDate || 
          item.batch === scope.row.batch) {
            scope.row.quantityAv = item.quantityAv;
          }
        }
        }
        this.tableData = this.tableData.map(element => {
          if(element.itemID === scope.row.itemID) {
           return {
              ...element,
              ...res.data.data,
            }
          }else {
            return {
              ...element,
            }
          } 
        });
        console.log(this.tableData)
      }).catch(e => {
        this.$message.error(e.message);
      });
      }
    },
    newRow(scope) {
      if(scope.$index === this.tableData.length - 1 &&
      this.tableData[this.tableData.length - 1].itemID){
        this.tableData.push({ ...this.appenedTableData });
        setTimeout((x) => {
          this.$nextTick(() => this.$refs.name.focus());
        }, 20);
      }
    },
  },
  watch: {
    singleRecordDetails: {
      handler(newVal) {
        this.tableData = newVal?.allInvoicesDetails?.map(item => {
          return {
            ...item,
            originalQuantity: item.quantity,
            edit: false,
            showDialog: false,
            showDialogDetails: false,
            showDialogSerial: false,
            serialNumber: [{number : '' , id : new Date().toISOString()}],
          }
        }) ?? [];
      },
      deep: true,
    },
    tableData: {
      handler(newVal) {
        const newval = newVal.map(item => {
          if(item.serialNumber[0].number !== ''){
            let serialNums = [];
            for(let item of item.serialNumber){
              serialNums.push(item.number);
            };
            let serialNum = serialNums.join("/");
            return {
              ...item,
              netDetails: item.totalDetails,
              priceBeforeTax: item.price,
              serialNo: serialNum,
              expireDate: item.expireDate ? new Date(item.expireDate).toISOString() : "",
            }
          }else{
            return {
              ...item,
              netDetails: item.totalDetails,
              priceBeforeTax: item.price,
              expireDate: item.expireDate ? new Date(item.expireDate).toISOString() : "",
            }
          }
        });
        const newData = JSON.parse(JSON.stringify(newval));
        const total = this.calculateTotalRecords(newval);
        this.setRecordDetails({
          allInvoicesDetails: newData,
          total: total,
        })
      },
      deep: true,
    }
  }
};
</script>