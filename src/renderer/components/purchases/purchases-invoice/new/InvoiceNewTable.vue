<template>
  <el-container class="container ma-4 mt-0 mb-0 invoice-table new-record-table">
    <el-table
      :data="tableData"
      style="width: 100%"
      stripe
      border
      max-height="750"
    >
      <el-table-column align="center" :label="$t('id')" width="60">
        <template slot-scope="scope">
          <el-input
            readonly
            size="small"
            class="text-center"
            :value="scope.$index + 1"
          ></el-input>
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        prop="itemID"
        :label="$t('item-name')"
        :min-width="120"
      >
        <template slot-scope="scope">
          <el-select
            v-model="scope.row.itemID"
            filterable
            remote
            class="width-full"
            @change="selectItem(scope.row)"
            :placeholder="$t('search')"
            :remote-method="remoteItemsCard"
            :loading="loadingItemName"
            @focus="handleFocusItem(scope.row)"
            clearable
          >
            <el-option
              v-for="item in itemsCardList"
              :key="item.itemId"
              :label="item.itemName + ' --- ' + item.itemId"
              :value="item.itemId"
            >
              <span style="float: left">{{ item.itemName }}</span>
              <span style="float: right; color: #8492a6; font-size: 13px">
                {{ item.itemId }}</span
              >
            </el-option>
          </el-select>
        </template>
      </el-table-column>
      <el-table-column
        v-if="showSerialColum"
        align="center"
        prop="item_category"
        label="/"
        width="60"
      >
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
                  @clear="clearSerialNumber(scope)"
                  @keyup.enter.native="
                    scope.row.serialNumber.push({
                      number: 0,
                      id: new Date().toISOString()
                    })
                  "
                ></el-input>
                <div class="horizontal-line-text">
                  <span>{{ $t("item-specification") }}</span>
                </div>
                <div class="form-item-with-right-label width-full">
                  <el-input
                    class="notes-input width-full"
                    type="textarea"
                    :rows="7"
                    v-model="dialogSerialNote"
                    maxlength="150"
                  >
                  </el-input>
                </div>
              </el-container>
            </span>
            <span slot="footer" class="dialog-footer">
              <el-button
                class="btn-cyan-light"
                @click="closeSerialDialog(scope)"
                >{{ $t("ok") }}</el-button
              >
            </span>
          </el-dialog>
        </template>
      </el-table-column>

      <el-table-column
        v-if="showBatchColum"
        align="center"
        prop="expireDateBatch"
        :label="$t('expire-date')"
      >
        <template slot-scope="scope">
          <el-date-picker
            class="width-full"
            type="date"
            placeholder="2020-10-15"
            v-model="scope.row.expireDateBatch"
          ></el-date-picker>
        </template>
      </el-table-column>

      <el-table-column
        v-if="showBatchColum"
        align="center"
        prop="batchNumber"
        :label="$t('patch-number')"
      >
        <template slot-scope="scope">
          <el-input
            size="small"
            class="text-center"
            v-model="scope.row.batchNumber"
          ></el-input>
        </template>
      </el-table-column>

      <el-table-column
        v-if="showAttrsColum"
        align="center"
        prop="personality"
        :label="$t('attrs-and-colors')"
        :min-width="80"
      >
        <template slot-scope="scope">
          <el-select
            v-model="scope.row.personality"
            filterable
            :placeholder="$t('search')"
            :disabled="scope.row.typeStock != typeStock.Attrs"
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

      <el-table-column align="center" prop="unitID" :label="$t('unit')">
        <template slot-scope="scope">
          <el-select
            v-model="scope.row.unitID"
            filterable
            :placeholder="$t('search')"
            :loading="loadingUnits"
            @change="selectUnit(scope.row)"
          >
            <el-option
              v-for="item in scope.row.units"
              :key="item.unit"
              :label="item.unitName"
              :value="item.unit"
            >
            </el-option>
          </el-select>
        </template>
      </el-table-column>

      <el-table-column
        align="center"
        prop="warehouseID"
        :label="$t('warehouse')"
      >
        <template slot-scope="scope">
          <el-select
            v-model="scope.row.warehouseID"
            filterable
            :placeholder="$t('search')"
            :loading="loadingWarehouse"
            clearable
          >
            <el-option
              v-for="item in scope.row.warehouse"
              :key="item.warehouseID"
              :label="item.warehouseName"
              :value="item.warehouseID"
            >
            </el-option>
          </el-select>
        </template>
      </el-table-column>

      <el-table-column
        align="center"
        prop="statement"
        :label="$t('statement')"
        :min-width="100"
      >
        <template slot-scope="scope">
          <el-input
            size="small"
            class="text-center"
            @focus="openDetailsDialog(scope)"
            v-model="scope.row.itemNote"
          ></el-input>
          <el-dialog
            :title="$t('statement')"
            :visible.sync="scope.row.showDialogDetails"
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
                        v-model="dialogDetailsValue"
                        :ref="'dialogDetails' + scope.$index"
                        @input="
                          scope.row.itemNote = dialogDetailsValue;
                          dialogDetailsValue =
                            dialogDetailsValue.length >= 150
                              ? dialogDetailsValue.slice(0, 150)
                              : dialogDetailsValue;
                        "
                      >
                      </el-input>
                    </el-form-item>
                  </el-form>
                </div>
              </span>
            </el-container>
            <span slot="footer" class="dialog-footer">
              <!-- @click="attachFile = false" -->
              <el-button
                class="btn-cyan-light px-4-lg"
                @click="closeDetailsDialog(scope)"
                >{{ $t("ok") }}</el-button
              >
            </span>
          </el-dialog>
        </template>
      </el-table-column>

      <el-table-column align="center" prop="quantity" :label="$t('stock')">
        <template slot-scope="scope">
          <el-input
            size="small"
            class="text-center"
            :ref="'quantity' + scope.$index"
            v-model="scope.row.quantity"
            @blur="calculateTotalsAndTaxPerItem( scope.row, scope)"
            @input="
              scope.row.quantity = scope.row.quantity.replaceAll(/[^\d]/gi, '')
            "
          ></el-input>
        </template>
      </el-table-column>

      <el-table-column
        align="center"
        prop="quantityBouns"
        :label="$t('bonus-amount')"
      >
        // TODO : when leave check if quantity > 0
        <template slot-scope="scope">
          <el-input
            size="small"
            class="text-center"
            v-model="scope.row.quantityBouns"
            @input="
              scope.row.quantityBouns = scope.row.quantityBouns.replaceAll(
                /[^\d.]/gi,
                ''
              )
            "
          ></el-input>
        </template>
      </el-table-column>

      <el-table-column align="center" prop="price" :label="$t('price')">
        <template slot-scope="scope">
          <el-input
            size="small"
            class="text-center"
            :value="$convertToValidNumber(scope.row.price)"
            @input="handleInputPrice($event , scope.row);
              scope.row.priceBeforeTax = scope.row.price;
            "
            @blur="calculateTotalsAndTaxPerItem( scope.row, scope)"
          ></el-input>
        </template>
      </el-table-column>

      <el-table-column
        v-if="showCurrencyColumn.status"
        align="center"
        prop="foreignPrice"
        :label="$t('foreign-price')"
      >
        <template slot-scope="scope">
          <el-input
            size="small"
            class="text-center"
            :value="$convertToValidNumber(scope.row.foreignPrice)"
            @input="handleInputForeginPrice($event ,scope.row)"

            @blur="calculateTotalsAndTaxPerItem( scope.row, scope); "
          ></el-input>
        </template>
      </el-table-column>

      <el-table-column
        align="center"
        prop="discountDetails"
        :label="$t('discount')"
      >
        <template slot-scope="scope">
          <el-input
            size="small"
            class="text-center"
            :ref="'discountDetails'  + scope.$index"
            v-model="scope.row.discountDetails"
            @input="
              scope.row.discountDetails = +scope.row.discountDetails.replaceAll(/[^\d.]/gi,'')"
            @blur=" checkMaxDiscount(scope.row,scope)"
          ></el-input>
        </template>
      </el-table-column>

      <el-table-column
        v-if="allowedDiscountValue > 0"
        align="center"
        prop="otherDiscount"
        :label="$t('allowed-discount')"
      >
        <template slot-scope="scope">
          <el-input
            size="small"
            class="text-center"
            :value="$convertToValidNumber(scope.row.otherDiscount)"
            disabled
          ></el-input>
        </template>
      </el-table-column>

      <el-table-column align="center" prop="taxPerItem" :label="$t('tax')">
        <template slot-scope="scope">

          <el-input
            size="small"
            class="text-center"
            :value="$convertToValidNumber(scope.row.taxPerItem)"
            disabled
          ></el-input>
        </template>
      </el-table-column>

      <el-table-column align="center" prop="netDetails" :label="$t('total')">
        <template slot-scope="scope">
          <el-input
            size="small"
            class="text-center"
            :readonly="true"
            :value="$convertToValidNumber(scope.row.netDetails)"
            @keyup.enter.native="newRow(scope.row)"
          ></el-input>
        </template>
      </el-table-column>

      <el-table-column v-if="tableData.length > 1" align="center" width="60">
        <template slot-scope="scope">
          <el-popconfirm
            icon="el-icon-info"
            icon-color="red"
            :title="$t('confirm')"
            @confirm="deleteRow(scope.row)"
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
import { mapState, mapMutations, mapGetters } from "vuex";
import itemDetailVue from "../../../../pages/inventory/store-exchange-order/item-detail.vue";
export default {
  name: "invoiceTable",
  data: function() {
    return {
      tableData: [
        {
          id: 1,
          itemID: "",
          item_category: "",
          unitID: "",
          warehouseID: "",
          itemNote: "",
          quantityBouns: 0,
          foreignPrice: 0,
          showDialogDetails: false,
          showDialogSerial: false,
          serialNote: "",
          serialNumber: [{ number: "", id: new Date().toISOString() }],
          batchNumber: "",
          expireDateBatch: new Date().toISOString(),
          personality: "",
          typeStock: 0,
          typeItems: 0,
          units: [],
          warehouse: [],
          purchasePersonality: [],
          taxDetails: 0,
          quantity: 0,
          taxPerItem: 0,
          price: 0,
          netDetails: 0, // الاجمالي
          otherDiscount: 0, //  خصومات اخري
          discountDetails: 0, // الخصم
          totalDetails: 0, // المجموع
          priceBeforeTax: 0, // السعر قبل الضريبه
          totalDetailsBeforeTax: 0,
        }
      ],
      appenedTableData: {
        id: 1,
        itemID: "",
        item_category: "",
        unitID: null,
        warehouseID: null,
        itemNote: null,
        quantityBouns: 0,
        foreignPrice: 0,
        showDialogDetails: false,
        showDialogSerial: false,
        serialNote: "",
        serialNumber: [{ number: "", id: new Date().toISOString() }],
        batchNumber: "",
        expireDateBatch: new Date().toISOString(),
        personality: "",
        typeStock: 0,
        typeItems: 0,
        units: [],
        warehouse: [],
        purchasePersonality: [],
        taxDetails: 0,
        quantity: 0,
        taxPerItem: 0,
        price: 0,
        netDetails: 0, // الاجمالي
        otherDiscount: 0, //  خصومات اخري
        discountDetails: 0, // الخصم
        totalDetails: 0, // المجموع
        priceBeforeTax: 0, // السعر قبل الضريبه
        totalDetailsBeforeTax: 0,
      },
      loadingItemName: false,
      loadingWarehouse: false,
      loadingUnits: false,
      dialogDetailsValue: "",
      dialogSerialNote: "",
    };
  },
  computed: {
    showAttrsColum() {
      return this.tableData.some(el => el.typeStock == this.typeStock.Attrs);
    },
    showSerialColum() {
      return this.tableData.some(el => el.typeItems == this.typeItems.serialItem);
    },
    showBatchColum() {
      return this.tableData.some(el => el.typeStock == this.typeStock.Patch);
    },
    taxInformation() {
      return this.$store.getters.getTaxInformation;
    },
    ...mapState({
      itemsCardList: state => state.systemCards.globalList.itemsCardList,
      showCurrencyColumn: state =>
        state.purchases.purchasesInvoice.showCurrencyColumn,
      secondCurrency: state => state.purchases.purchasesInvoice.secondCurrency,
      typeStock: state => state.systemCards.globalList.typeStock,
      typeItems: state => state.systemCards.globalList.typeItems,
      itemSelectedDetails: state =>
        state.purchases.purchasesInvoice.itemSelectedDetails,
      providerTaxable: state => state.purchases.purchasesInvoice.providerTaxable,
      allowedDiscountValue : state => state.purchases.purchasesInvoice.allowedDiscountValue
    }),
  },
  methods: {
    handleInputForeginPrice(value , itemRow){
      itemRow.foreignPrice = value
      itemRow.price =  itemRow.foreignPrice * this.showCurrencyColumn.rate
    },
    // handle user input price in table
    handleInputPrice(value , itemRow){
      itemRow.price = value
      itemRow.foreignPrice = value / this.showCurrencyColumn.rate
    },
    enableTax(itemRow) {
      let taxInfo = {};
      console.log(this.taxInformation.purchase.taxType);
      if (
        this.taxInformation.purchase.taxType &&
        this.providerTaxable &&
        itemRow.taxDetails
      ) {
        taxInfo.taxType = this.taxInformation.purchase.taxType;
      }
      taxInfo.taxValue = itemRow.taxDetails;
      console.log(taxInfo)
      return taxInfo;
    },
    selectItem(itemRow) {
      itemRow.unitID = null;
      itemRow.warehouseID = null;
      itemRow.totalDetails  = 0 ;
      itemRow.netDetails = 0 ;
      itemRow.warehouse = [];
      itemRow.purchasePersonality = [];
      itemRow.taxDetails =0;
      itemRow.units = [];
      itemRow.discountDetails = 0
      itemRow.otherDiscount = 0;
      itemRow.taxPerItem =0 ;
      itemRow.quantityBouns = 0;
      if(!itemRow.itemID){
        return
      }
      this.loadingWarehouse = true;
      this.loadingUnits = true;
      this.$store
        .dispatch("purchases/purchasesInvoice/getItemDetails", itemRow.itemID)
        .then(response => {
          // you need units and warehouses and personaltity  and quantityBatches
          itemRow.warehouse = response.warehouse;
          itemRow.batches = response.batches;
          itemRow.purchasePersonality = response.personalities;
          itemRow.taxDetails = response.taxValue;
          itemRow.units = response.units;
          itemRow.typeItems = response.typeItems;
          itemRow.typeStock = response.typeStock;
          itemRow.unitID = response.defaultUnit;
          itemRow.price = +response.units.find(
            unit => unit.unit == response.defaultUnit
          ).unitPriceCost;
           itemRow.quantity = 1
          itemRow.priceBeforeTax = itemRow.price;
          itemRow.warehouseID =
            response.warehouse.find(warehouse => warehouse.isDefault)
              ?.warehouseID ?? response.warehouse[0]?.warehouseID;
          this.calculateTotalsAndTaxPerItem(itemRow)
          this.loadingWarehouse = false;
          this.loadingUnits = false;
        })
        .catch(e => {
          console.log(e)
          this.$message(e);
        });
    },
    selectUnit(itemRow) {
      let unitSelected = itemRow.units.find(unit => unit.unit == itemRow.unitID);
      itemRow.price = unitSelected.unitPriceCost;
    },
    checkMaxDiscount( itemRow,scope){
      if(itemRow.discountDetails > itemRow.netDetails){
      // TODO : lang
       return this.$confirm("الرجاء ادخال خصم اقل من اجمالي الصنف", "Warning", {
        confirmButtonText: this.$t("ok"),
        showCancelButton: false,
        type: "warning",
        customClass: "confirmBox"
      }).catch(err=>{
        console.log(err)
      }).finally(() => {
        console.log(scope.$index);
        this.$refs["discountDetails" + scope.$index].focus();
      });
      }else{
        this.calculateTotalsAndTaxPerItem(itemRow, scope)
      }
    },
    calculateTotalsAndTaxPerItem( itemRow, scope) {
      // CHECK QUANTITY
      if (itemRow.quantity <= 0) {

        // TODO : lang
        return this.$confirm("الرجاء ادخال كميه اكبر من الصفر", "Warning", {
          confirmButtonText: this.$t("ok"),
          showCancelButton: false,
          type: "warning",
          center: true,
          customClass: "confirmBox"
        }).catch(err=>{
          console.log(err)
        }).finally(() => {
          console.log(scope.$index);
          this.$refs["quantity" + scope.$index].focus();
        });
      }
      let taxInfo = this.enableTax(itemRow);
      if (taxInfo.taxType == "vat") {
          // price
          itemRow.priceBeforeTax = itemRow.price;
          //  totals
          itemRow.totalDetails = itemRow.price * itemRow.quantity;
          itemRow.totalDetailsBeforeTax = itemRow.totalDetails;
          console.log(itemRow.totalDetailsBeforeTax);
          //tax
          itemRow.taxPerItem =
            (taxInfo.taxValue / 100) *
            (itemRow.totalDetails -
              (itemRow.discountDetails + itemRow.otherDiscount));
          // net
          itemRow.netDetails =
            itemRow.taxPerItem +
            itemRow.totalDetails -
            (itemRow.discountDetails + itemRow.otherDiscount);
          console.log(itemRow.netDetails);
        }
      else if(taxInfo.taxType == "ttc") {
          // TTC
          // totalDetailsBeforeTax
          itemRow.totalDetailsBeforeTax =
            itemRow.priceBeforeTax * itemRow.quantity;
          itemRow.taxPerItem =
            ((itemRow.totalDetailsBeforeTax -
              (itemRow.otherDiscount + itemRow.discountDetails)) /
              (100 + taxInfo.taxValue)) *
            taxInfo.taxValue;
          itemRow.price =
            itemRow.priceBeforeTax - itemRow.taxPerItem / itemRow.quantity;
          itemRow.totalDetails = itemRow.price * itemRow.quantity;
          itemRow.netDetails =
            itemRow.totalDetails -
            (itemRow.discountDetails + itemRow.otherDiscount) +
            itemRow.taxPerItem;
        }
        else {
          itemRow.taxPerItem = 0;
          itemRow.totalDetails = itemRow.price * itemRow.quantity;
          itemRow.netDetails =
            itemRow.totalDetails -
            (itemRow.discountDetails + itemRow.otherDiscount);
        }
    },
    ...mapMutations({
      setRecordDetails: "purchases/purchasesInvoice/setRecordDetails",
    }),
    async handleFocusItem(x) {
      if (x.itemID !== "") {
        await this.$store.dispatch("purchases/purchasesInvoice/fetchLastFive", {
          ItemID: x.itemID
        });
      }
    },
    newRow() {
      this.tableData.push({ ...this.appenedTableData });
    },
    deleteRow(row) {
      this.tableData = this.tableData.filter(x => x.id != row.id);
    },
    openSerialDialog(scope) {
      scope.row.showDialogSerial = true;
    },
    closeSerialDialog(scope) {
      scope.row.showDialogSerial = false;
    },
    clearSerialNumber(scope) {
      scope.row.serialNumber = scope.row.serialNumber.filter(el => el.number);
    },
    openDetailsDialog(scope) {
      scope.row.showDialogDetails = true;
      this.dialogDetailsValue = scope.row.itemNote;
      this.$nextTick(() => {
        this.$refs["dialogDetails" + scope.$index].focus();
      });
    },
    closeDetailsDialog(scope) {
      scope.row.showDialogDetails = false;
      this.dialogDetailsValue = "";
    },
    async remoteItemsCard(query) {
      try {
        this.loadingItemName = true;
        await this.$store.dispatch(
          "systemCards/globalList/fetchItemsCardList",
          {
            searchString: query
          }
        );
      } catch (e) {
        this.$message(e.response.error.message);
      } finally {
        this.loadingItemName = false;
      }
    },
    calcWhenChnageProvider(itemRow){
      let taxInfo = this.enableTax(itemRow);
      if (taxInfo.taxType == "vat") {
        // price
        itemRow.priceBeforeTax = itemRow.price;
        console.log(itemRow.priceBeforeTax);
        //  totals
        itemRow.totalDetails = itemRow.price * itemRow.quantity;
        itemRow.totalDetailsBeforeTax = itemRow.totalDetails;
        console.log(itemRow.totalDetailsBeforeTax);
        //tax
        itemRow.taxPerItem =
          (taxInfo.taxValue / 100) *
          (itemRow.totalDetails -
            (itemRow.discountDetails + itemRow.otherDiscount));
        console.log(itemRow.taxPerItem);
        // net
        itemRow.netDetails =
          itemRow.taxPerItem +
          itemRow.totalDetails -
          (itemRow.discountDetails + itemRow.otherDiscount);
        console.log(itemRow.netDetails);
      }
      else if(taxInfo.taxType == "ttc") {
        // TTC
        // totalDetailsBeforeTax
        itemRow.totalDetailsBeforeTax =
          itemRow.priceBeforeTax * itemRow.quantity;
        itemRow.taxPerItem =
          ((itemRow.totalDetailsBeforeTax -
              (itemRow.otherDiscount + itemRow.discountDetails)) /
            (100 + taxInfo.taxValue)) *
          taxInfo.taxValue;
        itemRow.price =
          itemRow.priceBeforeTax - itemRow.taxPerItem / itemRow.quantity;

        itemRow.totalDetails = itemRow.price * itemRow.quantity;
        itemRow.netDetails =
          itemRow.totalDetails -
          (itemRow.discountDetails + itemRow.otherDiscount) +
          itemRow.taxPerItem;
      }
      else {
        itemRow.taxPerItem = 0;
        itemRow.totalDetails = itemRow.price * itemRow.quantity;
        itemRow.netDetails =
          itemRow.totalDetails -
          (itemRow.discountDetails + itemRow.otherDiscount);
      }
    }
  },
  watch: {
    providerTaxable :{
      handler(_){
          this.tableData.forEach((itemRow)=>{
            this.calcWhenChnageProvider(itemRow)
          })
      },
      deep : true
    },
    tableData: {
      handler(newVal) {
        let totals = newVal.reduce((acc, curr)=> acc + +curr.netDetails ,0)
        let payload = newVal.map(val=> ({...val , serialNumber:val.serialNumber.map(el=>el.name).join("-")}))
        let DeepClone = structuredClone({ addInvoicesDetails :  payload , netinv : totals })
        this.setRecordDetails(DeepClone);
      },
      deep: true,
      immediate : true
    },
    allowedDiscountValue(value) {
      console.log('allowedDiscountValue')
     let totals = this.tableData.reduce((acc, curr)=> {
         acc.totalsDetailsBeforetax += curr.totalDetailsBeforeTax ;
         acc.totalsDiscount += curr.discountDetails
        return acc
      } , {totalsDiscount : 0, totalsDetailsBeforetax : 0});
      this.tableData.forEach((itemRow)=>{
         itemRow.otherDiscount = (value/(totals.totalsDetailsBeforetax - totals.totalsDiscount)) *((itemRow.priceBeforeTax * itemRow.quantity)-itemRow.discountDetails);
         this.calculateTotalsAndTaxPerItem(itemRow)
      })

    }
  }
};
</script>
