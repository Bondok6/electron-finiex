<template>
  <el-container class="container ma-4 mt-0 mb-0 invoice-table new-record-table">
    <el-table
      :data="tableData"
      style="width: 100%"
      stripe
      border
      max-height="250"
    >
      <el-table-column align="center" type="index" :label="$t('id')" width="40">
</el-table-column>

      <el-table-column
        align="center"
        prop="item_name"
        :label="$t('item-name')"
        width="450"
      >
        <template slot-scope="scope">
          <el-select
                ref="itemName"
                class="width-full"
                v-model="scope.row.itemId"
                @change="getItemDetails(scope)"
                :loading="loadingItems"
                :remote-method="remoteItems"
                :placeholder="$t('search')"
                filterable
                remote
              >
                <el-option
                  v-for="item in items"
                  :key="item.itemId"
                  :value="item.itemId"
                  :label="`${item.itemName} - ${item.itemId}`"
                >
                <span style="float: left">{{ item.itemName }}</span>
                <span style="float: right; color: #8492a6; font-size: 13px">{{
                  item.itemId
                }}</span>
                </el-option>
              </el-select>
        </template>
      </el-table-column>

      <el-table-column align="center" v-if="itemsAttributes" :label="$t('items-attributes')">
          <template slot-scope="scope">
          <el-select
            v-model="scope.row.personalitySelected"
            filterable
            :placeholder="$t('search')"
            clearable
            :disabled="singleRecordDetails.receiptNumber === 0 && 'disabled'"
          >
            <el-option
              v-for="item in scope.row.personality"
              :key="item.id"
              :label="item.name"
              :value="item.id"
            />
          </el-select>
        </template>
      </el-table-column>

      <el-table-column align="center" v-if="patchAndExpiredDate" :label="$t('patch-number')">
        <template slot-scope="scope">
          <el-select
            v-model="scope.row.batchNumber"
            filterable
            :placeholder="$t('search')"
            @input="getBatchDetails(scope)"
            clearable
          >
            <el-option
              v-for="item in scope.row.batch"
              :key="item.batchNumber"
              :label="item.batchNumber"
              :value="item.batchNumber"
            />
          </el-select>
        </template>
      </el-table-column>

      <el-table-column align="center" v-if="patchAndExpiredDate" :label="$t('expire-date')">
        <template slot-scope="scope">
          <el-select
            v-model="scope.row.expireDateBatch"
            filterable
            :placeholder="$t('search')"
            @input="getBatchDetails(scope)"
            clearable
          >
            <el-option
              v-for="item in scope.row.batch"
              :key="item.expireDateBatch"
              :label="item.expireDateBatch"
              :value="item.expireDateBatch"
            />
          </el-select>
        </template>
      </el-table-column>

      <el-table-column align="center" prop="unit" :label="$t('unit')">
        <template slot-scope="scope">
          <el-select
            class="width-full"
            v-model.number="scope.row.unitId"
            @input="selectUnit(scope)"
          >
            <el-option
              v-for="item in scope.row.itemstUnit"
              :key="item.unitId"
              :value="item.unitId"
              :label="item.unitName"
            >
            </el-option>
          </el-select>
        </template>
      </el-table-column>

      <el-table-column align="center" :label="$t('statement')">
          <template slot-scope="scope">
            <!--  -->
            <el-input
              size="small"
              v-model="scope.row.notesItem"
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
                            scope.row.notesItem = dialogValue;
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

     
      <el-table-column align="center" prop="quantity" :label="$t('quantity')">
        <template slot-scope="scope">
          <el-input
            size="small"
            style="text-align: center"
            ref="quantity"
            v-model.number="scope.row.newQuantity"
            @input="calculateTotal(scope)"
            @change="checkQuantity(scope)"
          ></el-input>
        </template>
      </el-table-column>

      <el-table-column v-if="itemType" align="center" prop="item_category" label="/" width="60">
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
                        v-for="serial in scope.row.serialNum"
                        v-model.number="serial.number"
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

      <el-table-column v-if="priceTransfer === false" align="center" prop="price" :label="$t('price')">
        <template slot-scope="scope">
          <el-input
            size="small"
            style="text-align: center"
            v-model.number="scope.row.price"
            @input="calculateTotal(scope)"
          ></el-input>
        </template>
      </el-table-column>
     
      <el-table-column v-if="priceTransfer === false" align="center" prop="total" :label="$t('total')">
        <template slot-scope="scope">
          <el-input
            size="small"
            style="text-align: center"
            readonly="readonly"
            v-model.number="scope.row.total"
            @keyup.enter.native="newRow(scope)"
          ></el-input>
        </template>
      </el-table-column>

      <el-table-column align="center" width="60">
        <template slot-scope="scope">
          <el-popconfirm
            icon="el-icon-info"
            icon-color="red"
            title="?????????? ?????? ?????????? ??"
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
import { mapState, mapMutations} from "vuex";

export default {
  name: "invoice",

  data: function () {
    return {
      itemsAttributes:false,
      patchAndExpiredDate:false,
      itemType:false,
      authenticated: true,
      loadingItems: false,
      dialogDetails: false,
      dialogValue: "",
      tableData: [
        {
          itemId: "",
          showDialog: false,
          notesItem: "",
          price: null,
          unitId: null,
          personalitySelected: "",
          showDialogDetails: false,
          showDialogSerial: false,
          serialNum: [{number : "" , id : new Date().toISOString()}],
        }
      ],
      appenedTableData:
        {
          itemId: "",
          showDialog: false,
          notesItem: "",
          price: null,
          unitId: null,
          personalitySelected: "",
          showDialogDetails: false,
          showDialogSerial: false,
          serialNum: [{number : "" , id : new Date().toISOString()}],
        }
    };
  },
  computed: {
    ...mapState({
      items: state => state.inventory.transferBetweenBranches.items,
      priceTransfer: state =>  state.inventory.transferBetweenBranches.priceTransfer,
      recordDetails: state => state.inventory.transferBetweenBranches.recordDetails,
    })
  },

  methods: {
    ...mapMutations({
      setRecordDetails: 
      "inventory/transferBetweenBranches/setRecordDetails",
    }),
    remoteItems(query) {
      this.loadingItems = true;
      this.$store.dispatch("inventory/transferBetweenBranches/fetchItems", {
        SearchString: query,
        BrancheId: this.recordDetails.fromBrancheId,
        WarehouseId: this.recordDetails.fromWarehouseId,
      }).then(() => {
        this.loadingItems = false;      
      });;
    },
    openDialog(scope) {
      scope.row.showDialog = true;
      this.dialogValue = scope.row.notesItem;
      setTimeout( x => {
        this.$nextTick(() =>
          this.$refs["dialogDetails" + scope.$index].focus()
        );
      }, 100);
    },
    closeDialog(scope) {
      scope.row.showDialog = false;
      this.dialogValue = "";
    },
    openSerialDialog(scope) {
      scope.row.showDialogSerial = true;
    },
    closeSerialDialog(scope) {
      scope.row.showDialogSerial = false;
    },
    clearSerialNums(scope){
      scope.row.serialNum = [{number : "" , id : new Date().toISOString()}];
    },
    checkSerialNum(scope){
      if(scope.row.newQuantity && scope.row.serialNum.length < scope.row.newQuantity) {
        scope.row.serialNum.push({number : "" , id : new Date().toISOString()})
      } 
    },
    getItemDetails(scope){
      scope.row.newQuantity = null;
      scope.row.unitId = null;
      scope.row.price = null;
      scope.row.total = null ;
      this.$store.dispatch("inventory/transferBetweenBranches/fetchItemDetails", {
        ItemId : scope.row.itemId,
        BranchId : this.recordDetails.fromBrancheId,
        WarehouseId : this.recordDetails.fromWarehouseId,
      }).then((res)=> {
        if(res.data.data.typeStock === 1) {
          this.itemsAttributes = true;
        }
        if(res.data.data.typeStock === 2) {
          this.patchAndExpiredDate = true;
        }
        if(res.data.data.itemType === 3) {
          this.itemType = true;
        }
        let serialNumsArry = res.data.data.serialNumber?.split("/");
        let serialNums = serialNumsArry?.map(item => {
          return {
            number : item, 
            id : new Date().toISOString()
          }
        });
        this.tableData = this.tableData.map(element => {
          if(element.itemId === scope.row.itemId) {
           return {
              ...element,
              serialNum: serialNums ? serialNums : element.serialNum,
              ...res.data.data,
            }
          }else {
            return {
              ...element,
            }
          }
        });
      }).catch(err => {
          this.$message.error(err.message)
      });
    },
    selectUnit(scope) {
      for(let item of scope.row.itemstUnit) {
        if(item.unitId === scope.row.unitId){
          scope.row.quantityFull = item.quantityFull;
          scope.row.price = item.price;
          scope.row.newQuantity = 0 ;
          scope.row.total = scope.row.price * scope.row.newQuantity;
        }
      }
      this.calculateTotal(scope);
    },
    calculateTotal(scope) {
      this.clearSerialNums(scope);
      if(scope.row.price >= 0 && scope.row.newQuantity >= 0) {
        scope.row.total = scope.row.price * scope.row.newQuantity;
      }
    },
    calculateTotalRecords(data) {
      let total = 0 ;
      for(let i = 0 ; i < data.length ; i++) {
        total += data[i].price * data[i].newQuantity
      }
      return total ;
    },
    getBatchDetails(scope) {
      for(let item of scope.row.batch){
        if(item.batchNumber === scope.row.batchNumber) {
          scope.row.expireDateBatch = item.expireDateBatch;
        }
        if(item.expireDateBatch === scope.row.expireDateBatch) {
          scope.row.batchNumber = item.batchNumber;
        }
      }
    },
    newRow(scope) {
      if(scope.$index === this.tableData.length - 1 &&
      this.tableData[this.tableData.length - 1].itemId){
      this.tableData.push({...this.appenedTableData});
      setTimeout((x) => {
        this.$nextTick(() => this.$refs.itemName.focus());
      }, 20);
    }
    },
    checkQuantity(scope) {
      if(scope.row.newQuantity * scope.row.quantityFull 
      > scope.row.quantity && this.authenticated) {
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
        scope.row.newQuantity = scope.row.newQuantity;
        this.calculateTotal(scope);
        setTimeout((x) => {
        this.$nextTick(() => this.$refs.quantity.focus());
      }, 20);
      }).catch(()=> {
        scope.row.newQuantity = 0;
        this.calculateTotal(scope);
        setTimeout((x) => {
        this.$nextTick(() => this.$refs.quantity.focus());
      }, 20);
      })
      }else if( scope.row.newQuantity * scope.row.quantityFull 
      > scope.row.quantity && !this.authenticated) {
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
        scope.row.newQuantity = scope.row.quantity;
        this.calculateTotal(scope);
        setTimeout((x) => {
        this.$nextTick(() => this.$refs.quantity.focus());
      }, 20);
      }).catch(() => {
        scope.row.newQuantity = 0;
        this.calculateTotal(scope);
        setTimeout((x) => {
        this.$nextTick(() => this.$refs.quantity.focus());
      }, 20);
      })
      }
      if(scope.row.newQuantity * scope.row.quantityFull < 0){
        this.$confirm(
        "???? ???????? ?????????? ???????? ?????? ???? ?????????? !",
        {
          confirmButtonText: this.$t("ok"),
          showCancelButton: false,
          type: "warning",
          center: true,
          customClass: "confirmBox"
        }
      ).then(()=>{
        scope.row.newQuantity = 0;
        this.calculateTotal(scope);
        setTimeout((x) => {
        this.$nextTick(() => this.$refs.quantity.focus());
      }, 20);
      })
      }
    }
    
  },

  watch: {
    tableData: {
      handler(newVal) {
        const newval = newVal.map(item => {
          if(item.serialNum[0].number !== ""){
            let serialNums = [];
            for(let item of item.serialNum){
              serialNums.push(item.number);
            };
            let serialNo = serialNums.join("/");
            return {
              ...item,
              quantity: item.newQuantity,
              personality: item.personalitySelected,
              serialNumber: serialNo,
            }
          }else{
          return {
            ...item,
            quantity: item.newQuantity,
            personality: item.personalitySelected,
          }
        }
        });
        const newData = JSON.parse(JSON.stringify(newval));
        const total = this.calculateTotalRecords(newval);
        this.setRecordDetails({
          transferBrancheDetails: newData,
          total: total,
        })
      },
      deep: true,
    }
  }
};
</script>