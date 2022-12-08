<template>
  <el-container class="container ma-4 mt-0 mb-0 invoice-table min-height-250">
    <el-table :data="tableData" style="width: 100%" stripe border max-height="750">
      <el-table-column align="center" type="index" :label="$t('id')"  width="40"/> 
      <el-table-column align="center" prop="itemName" :label="$t('item-name-item-barcode')" width="500">
        <template slot-scope="scope">
          <el-select
              v-if="!scope.row.edit && !scope.row.barCodeItem"
              v-model="scope.row.itemId"
              filterable
              remote
              ref="name"
              :placeholder="$t('search')"
              :remote-method="remoteItems"
              @change="getItemDetails(scope)"
              :loading="loadingItems"
              class="account-name width-full"
            >
              <el-option
                v-for="item in items"
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
            <span v-else-if="(scope.row.barCodeItem && !scope.row.edit) || scope.row.edit">
              {{ `${scope.row.itemName} --- ${scope.row.itemId}`}}
            </span>
        </template>
      </el-table-column>

      <el-table-column align="center" v-if="itemsAttributes" :label="$t('items-attributes')">
          <template slot-scope="scope">
          <el-select
            v-model="scope.row.personalityId"
            filterable
            :placeholder="$t('search')"
            clearable
          >
            <el-option
              v-for="item in scope.row.itemPersonalities"
              :key="item.personalityId"
              :label="item.personalityName"
              :value="item.personalityId"
            />
          </el-select>
        </template>
      </el-table-column>
      
      <el-table-column align="center" v-if="patchAndExpiredDate" :label="$t('patch-number')">
        <template slot-scope="scope">
          <el-select
            v-model="scope.row.batch"
            filterable
            :placeholder="$t('search')"
            @input="getBatchDetails(scope)"
            clearable
          >
            <el-option
              v-for="item in scope.row.itemBatches"
              :key="item.batch"
              :label="item.batch"
              :value="item.batch"
            />
          </el-select>
        </template>
      </el-table-column>

      <el-table-column align="center" v-if="patchAndExpiredDate" :label="$t('expire-date')">
        <template slot-scope="scope">
          <el-select
            v-model="scope.row.expireDate"
            filterable
            :placeholder="$t('search')"
            @input="getBatchDetails(scope)"
            clearable
          >
            <el-option
              v-for="item in scope.row.batch"
              :key="item.expireDate"
              :label="item.expireDate"
              :value="item.expireDate"
            />
          </el-select>
        </template>
      </el-table-column>

      <el-table-column align="center" prop="unitName" :label="$t('unit')">
        <template slot-scope="scope">
          <!-- <span v-if="!scope.row.edit">{{ scope.row.unit }}</span> -->
          <el-select
            class="width-full"
            v-model.number="scope.row.mdcode"
            @change="selectUnit(scope)"
          >
            <el-option
              v-for="item in scope.row.itemUnits"
              :key="item.unitId"
              :value="item.unitId"
              :label="item.unitName"
            >
            </el-option>
          </el-select>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="inventoryQuantity" :label="$t('inventory-quantity')">
        <template slot-scope="scope">
          <el-input
            size="small"
            style="text-align: center"
            type="number"
            :ref="'quantity' + scope.$index"
            v-model.number="scope.row.inventoryQuantity"
            @keyup.native.enter="newRow(scope)"
          ></el-input>
        </template>
      </el-table-column>
      <el-table-column align="center" width="60">
        <template slot-scope="scope">
          <i
            slot="reference"
            class="setting-button danger-color el-icon-refresh"
            v-if="scope.row.edit"
            @click="setTableRowData(scope)"
          ></i>
        </template>
      </el-table-column>
      
      <el-table-column align="center" width="60">
        <template slot-scope="scope">
          <el-popconfirm
            icon="el-icon-info"
            icon-color="red"
            title="تأكيد حذف الصنف ؟"
            :disabled="scope.$index === 0 && 'disabled'"
            @confirm="deleteItem(scope)"
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
export default {
  name: "invoice",
  props: ['data'],
  data: function () {
    return { 
      loadingItems: false,
      itemsAttributes: false,
      patchAndExpiredDate: false,
      itemType: false,
      tableRowData: {},
      tableData: [ ...this.data ],
      appendTable: {
        itemId: null,
        itemName: '',
        mdcode: null,
        inventoryQuantity: 0,
        expireDate: "",
        batch: "",
        edit: false,
      }
    };
  },
  computed: {
    ...mapState({
      items: state => state.inventory.inventoryStoreBarcode.items,
      invoiceForm: state => state.inventory.inventoryStoreBarcode.invoiceForm,
      recordDetails: state => state.inventory.inventoryStoreBarcode.recordDetails,
    })
  },
  methods: {    
    ...mapMutations({
      setEditInventoryNumber: 
      "inventory/inventoryStoreBarcode/setEditInventoryNumber",
      setRecordDetails: 
      "inventory/inventoryStoreBarcode/setRecordDetails",
    }),
    newRow(scope) {
      if(scope.$index === 0 && scope.row.itemId){
        this.tableData.unshift({ ...this.appendTable });
        this.setTableRowData(scope);
      }
    },
    setTableRowData(scope){
      this.tableRowData = { ...scope.row };
    },
    remoteItems(query) {
      this.loadingItems = true;
      this.$store.dispatch("inventory/inventoryStoreBarcode/fetchItems", {
        WarehouseId: this.invoiceForm.warehouseId,
        SearchString: query,
      }).then(() => {
        this.loadingItems = false;      
      });
      if(this.items.length === 1) {
        this.itemsAttributes = false;
        this.patchAndExpiredDate = false;
        this.itemType = false;
        this.$store.dispatch("inventory/inventoryStoreBarcode/fetchItemDetails", {
          ItemId : query,
          WareHouseID : this.invoiceForm.warehouseId,
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
          this.tableData = this.tableData.map((element,index) => {
            if(index === 0) {
            return {
                ...element,
                barCodeItem: true,
                ...res.data.data,
              }
            }else {
              return {
                ...element,
              }
            }
          });
          for(let item of res.data.data.itemUnits) {
            if(item.unitId === this.tableData[0].mdcode){
              this.tableData[0].quantityFull = item.qty;
            }
          }
        }).catch(err => {
            this.$message.error(err.message)
        });
        }
    },
    deleteItem(scope){
      if(scope.row.edit){
        this.$confirm(this.$t("message-when-delete-record"), "Warning", {
        confirmButtonText: this.$t("delete"),
        cancelButtonText: this.$t("cancel"),
        type: "warning",
        center: true,
        customClass: "confirmBox"
      })
        .then(() => {
          return this.$store.dispatch("inventory/inventoryStoreBarcode/delete", 
          scope.row.pageNoId);
        })
        .then(() => {
          this.$message({
            type: "success",
            message: "Delete completed",
          });
          this.$store.dispatch("inventory/inventoryStoreBarcode/fetchRecords", {
            InventoryId: this.invoiceForm.inventory_number,
            WarehouseId: this.invoiceForm.warehouseId,
          });
        })
        .catch(er => {
          this.$message({
            type: "info",
            message: "Delete canceled"
          });
        }); 
      }else {
        this.tableData.splice(scope.$index, 1)
      }
      
    },
    getItemDetails(scope){
      this.itemsAttributes = false;
      this.patchAndExpiredDate = false;
      this.itemType = false;
      this.$store.dispatch("inventory/inventoryStoreBarcode/fetchItemDetails", {
        ItemId : scope.row.itemId,
        WareHouseID : this.invoiceForm.warehouseId,
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
        this.tableData = this.tableData.map(element => {
          if(element.itemId === scope.row.itemId) {
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
        for(let item of res.data.data.itemUnits) {
          if(item.unitId === scope.row.mdcode){
            scope.row.quantityFull = item.qty;
          }
        }
      }).catch(err => {
          this.$message.error(err.message)
      });
    },
    getBatchDetails(scope) {
      for(let item of scope.row.itemBatches){
        if(item.batch === scope.row.batch) {
          scope.row.expireDate = item.expireDate;
        }
        if(item.expireDate === scope.row.expireDate) {
          scope.row.batch = item.batch;
        }
      }
    },
    selectUnit(scope) {
      for(let item of scope.row.itemUnits) {
        if(item.unitId === scope.row.mdcode){
          scope.row.quantityFull = item.qty;
        }
      }
    },
  },
  created(){
    this.itemsAttributes = false;
    this.patchAndExpiredDate = false;
    this.itemType = false;
    for(let item of this.tableData){
      if(item.typeStock === 1) {
        this.itemsAttributes = true;
      }
      if(item.typeStock === 2) {
        this.patchAndExpiredDate = true;
      }
      if(item.itemType === 3) {
        this.itemType = true;
      }
    }
  },
  watch: {
    tableRowData: {
      handler(newVal){
        this.setRecordDetails({
          ...newVal,
          wareHouseId: this.invoiceForm.warehouseId,
          inventoryId: this.invoiceForm.inventory_number,
          personality: newVal.personalityId,
        })
      },
      deep: true,
    },
    recordDetails: {
      handler(newVal){
        if(newVal.edit){
          this.$store.dispatch("inventory/inventoryStoreBarcode/update"
          ).then((res)=>{
            this.$notify({
              title: "success",
              type: "success",
              message: "item updated"
            });
            this.$store.dispatch("inventory/inventoryStoreBarcode/fetchRecords", {
              InventoryId: this.invoiceForm.inventory_number,
              WarehouseId: this.invoiceForm.warehouseId,
            });
          }).catch(()=>{
            this.$notify({
              title: "Error",
              type: "error",
              message: "item Didn't update"
            });
          });
        }else{
          this.$store.dispatch("inventory/inventoryStoreBarcode/create"
          ).then((res)=>{
            this.$notify({
              title: "success",
              type: "success",
              message: "item created"
            });
            this.$store.dispatch("inventory/inventoryStoreBarcode/fetchRecords", {
            InventoryId: this.invoiceForm.inventory_number,
            WarehouseId: this.invoiceForm.warehouseId,
            });
          }).catch(()=>{
            this.$notify({
              title: "Error",
              type: "error",
              message: "item Didn't create"
            });
          });
        }
        
      },
      deep: true,
    }
  }
};
</script>