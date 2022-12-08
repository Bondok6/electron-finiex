<template>
  <el-container class="container ma-4 mt-0 mb-0 invoice-table new-record-table">
    <el-table
      :data="data"
      style="width: 100%"
      stripe
      border
      max-height="260"
    >
      <el-table-column align="center" type="index" :label="$t('id')" width="40" />
      <el-table-column
        align="center"
        :label="$t('item-name')"
        width="450"
      >
      <template slot-scope="scope">
        {{ `${scope.row.itemId} --- ${scope.row.itemName}`}}
      </template>
      </el-table-column>
      
       <el-table-column align="center" v-if="itemsAttributes" :label="$t('items-attributes')">
          <template slot-scope="scope">
            {{ scope.row.personalityString }}
        </template>
      </el-table-column>

      <el-table-column align="center" v-if="patchAndExpiredDate" :label="$t('patch-number')">
        <template slot-scope="scope">
          {{ scope.row.batchNumber }}
        </template>
      </el-table-column>

      <el-table-column align="center" v-if="patchAndExpiredDate" :label="$t('expire-date')">
        <template slot-scope="scope">
          {{ scope.row.expireDateBatch }}
        </template>
      </el-table-column>

      <el-table-column align="center" v-if="itemType" label="/">
        <template slot-scope="scope">
          {{ scope.row.serialNumber }}
        </template>
      </el-table-column>

       <el-table-column align="center" prop="unit" :label="$t('unit')">
      </el-table-column>



      <el-table-column align="center" :label="$t('statement')">
          <template slot-scope="scope">
            <!--  -->
            <el-input
              size="small"
              v-model="scope.row.itemNotes"
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

                            scope.row.itemNotes = dialogValue ;
                            
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
     
          <el-table-column align="center" :label="$t('quantity')">
        <template slot-scope="scope">
          <el-input
            size="small"
            style="text-align: center"
            v-model.number="scope.row.quantity"
            @input="calculateTotal(scope)"
            @change="checkQuantity(scope)"
          ></el-input>
        </template>
      </el-table-column>


      <el-table-column align="center" :label="$t('price')">
        <template slot-scope="scope">
          <el-input
            size="small"
            style="text-align: center"
            v-model.number="scope.row.price"
            @input="calculateTotal(scope)"
          ></el-input>
        </template>
      </el-table-column>
     
      <el-table-column align="center" :label="$t('total')">
        <template slot-scope="scope">
          {{ $numberWithCommas(scope.row.total) }}
        </template>
      </el-table-column>

      <el-table-column align="center" width="60">
        <template slot-scope="scope">
          <el-popconfirm
            icon="el-icon-info"
            icon-color="red"
            title="تأكيد حذف الصنف ؟"
            @confirm="data.splice(scope.$index, 1)"
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
  data() {
    return {
      itemsAttributes: false,
      patchAndExpiredDate: false,
      itemType: false,
      dialogDetails: false,
      dialogValue: "",
      data:[]
    }
  },
  computed:{
    ...mapState({
      singleRecordDetails: state => state.inventory.receiptsBetweenBranches.singleRecordDetails,
    })
  },
  methods:{
    ...mapMutations({
      setRecordDetails: 
      "inventory/receiptsBetweenBranches/setRecordDetails"
    }),
    openDialog(scope) {
      scope.row.showDialog = true;
      if(scope.row.itemNotes) {
        this.dialogValue = scope.row.itemNotes;
      }else {
        this.dialogValue = ''
      }
      console.log("hello")
      setTimeout(x => {
        this.$nextTick(() =>
          this.$refs["dialogDetails" + scope.$index].focus()
        );
      }, 100);
    },
    closeDialog(scope) {
      scope.row.showDialog = false;
      this.dialogValue = '';
    },
    checkQuantity(scope) {
      if(scope.row.quantity > scope.row.originalQuantity) {
        this.$confirm(
         this.$t("receipts-between-branches-quantity-warning") + ` (${scope.row.originalQuantity})`,
          {
            confirmButtonText: this.$t("ok"),
            showCancelButton: false,
            type: "warning",
            center: true,
            customClass: "confirmBox"
          }
        ).then(() => {
          scope.row.quantity = scope.row.originalQuantity
        });
      }
      if(scope.row.quantity < 0) {
        this.$confirm(
          this.$t("mince-quantity-warning"),
          {
            confirmButtonText: this.$t("ok"),
            showCancelButton: false,
            type: "warning",
            center: true,
            customClass: "confirmBox"
          }
        ).then(() => {
          scope.row.quantity = scope.row.originalQuantity
        });
      }
    },
    calculateTotal(scope) {
      scope.row.total = scope.row.price * scope.row.quantity;
    },
    calculateTotalRecords(data) {
      let total = 0 ;
      for(let i = 0 ; i < data.length ; i++) {
        total += data[i].price * data[i].quantity
      }
      return total ;
    }
  },
  watch:{
    singleRecordDetails: {
      handler(newVal){
        this.itemsAttributes = false;
        this.patchAndExpiredDate = false;
        this.itemType = false;
        for(let i=0 ; i<newVal?.detailsItemsToReceipt?.length ;i++){
          if(newVal.detailsItemsToReceipt[i].typeStock === 1) {
            this.itemsAttributes = true;
          }
          if(newVal.detailsItemsToReceipt[i].typeStock === 2) {
            this.patchAndExpiredDate = true;
          }
          if(newVal.detailsItemsToReceipt[i].itemType === 3) {
            this.itemType = true;
          }
        }
    
        this.data = newVal?.detailsItemsToReceipt?.map(item => {
          return {
            ...item,
            showDialog: false,
            total: item.quantity * item.price,
            originalQuantity: item.quantity,
            personalityString: `${item.personality?.id ?? ""} - ${item.personality?.name ?? ""}`,
          }
        }) ?? [];
      },
      deep: true,
    },
    data: {
      handler(newVal) {
        let newval = newVal.map(item => {
          return {
            ...item,
            personality: item.personalityString,
          }
        });
        const newData = JSON.parse(JSON.stringify(newval));
        const total = this.calculateTotalRecords(newval);
        this.setRecordDetails({
          receiptBrancheDetails: newData,
          total: total,
        })
      },
      deep: true,
    },
  }
};
</script>