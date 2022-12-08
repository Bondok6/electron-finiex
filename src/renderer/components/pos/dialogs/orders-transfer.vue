<template>
    <el-dialog class="pd-0-dialog" title=" " :visible.sync="showDialog" width="70%">
      <div class="cancel-btn" @click="closeDialog()">
        <i class="el-icon-close"></i>
      </div>

      <span>
        <el-row class="width-full info-row">
          <el-col :xs="24" :md="10" :lg="10">
            <el-row class="info-input bordered-ar  bordered-en">
              <el-col :span="12">
                <div class="info-label">{{$t('invoice-number')}}</div>
              </el-col>
              <el-col :span="12">
                <el-input v-model="invoice_number"></el-input>
              </el-col>
            </el-row>
          </el-col>

          <el-col :xs="0" :md="2" :lg="2"></el-col>

          <el-col :xs="24" :md="10" :lg="10">
            <el-row class="info-input bordered-ar  bordered-en">
              <el-col :span="12">
                <div class="info-label">{{$t('order-number')}}</div>
              </el-col>
              <el-col :span="12">
                <el-input v-model="order_number"></el-input>
              </el-col>
            </el-row>
          </el-col>
        </el-row>

        <el-row class="width-full info-row">
          <el-col :md="10" :lg="10">
            <el-row class="info-input bordered-ar  bordered-en">
              <el-col :span="12">
                <div class="info-label">{{$t('table-number-transfered-from')}}</div>
              </el-col>
              <el-col :span="12">
                <el-input v-model="table_number_transfered_from"></el-input>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </span>
      <span>
        <el-container
          class="mt-1 mb-1 pos-container orders-table" 
        >
          <el-table
            :data="searchTable"
            style="width: 100%"
            border
            max-height="250"
           >
            <el-table-column
              align="center"
              prop="id"
              :label="$t('id')"
              width="40"
            />
            <el-table-column
              align="center"
              prop="item_number"
              :label="$t('item-number')"
              width="250"
            />
            <el-table-column
              align="center"
              prop="item_name"
              :label="$t('item-name')"
              width="300"
            />
            <el-table-column
              align="center"
              prop="unit"
              :label="$t('unit')"
            />            
            <el-table-column
              align="center"
              prop="quantity"
              :label="$t('quantity')"
            />            
            <el-table-column
              align="center"
              prop="item_transfer"
              :label="$t('item-transfer')"
            />            
          </el-table>
        </el-container>
      </span>

      <div class="mt-4 width-full d-flex justify-center">
        <el-button  class="btn-pastal-blue px-3 mx-1"
                    @click="openTableTransitionDialog()">
          {{$t("transfer")}}
        </el-button>

        <el-button class="btn-pastal-red px-3 mx-1" @click="closeDialog()">{{
          $t("back-exit")
        }}</el-button>
      </div>
    </el-dialog>
</template>


<script>
export default {
  name: "OrdersTransfer",

  data: function () {
    return {
      searchTable: [
        {
          id: "-",
          item_number: "",
          item_name: "",
          unit: "",
          quantity: "",
          item_transfer: "",
        },
        {
          id: "-",
          item_number: "",
          item_name: "",
          unit: "",
          quantity: "",
          item_transfer: "",
        },
        {
          id: "-",
          item_number: "",
          item_name: "",
          unit: "",
          quantity: "",
          item_transfer: "",
        },
        {
          id: "-",
          item_number: "",
          item_name: "",
          unit: "",
          quantity: "",
          item_transfer: "",
        },
        {
          id: "-",
          item_number: "",
          item_name: "",
          unit: "",
          quantity: "",
          item_transfer: "",
        },
        {
          id: "-",
          item_number: "",
          item_name: "",
          unit: "",
          quantity: "",
          item_transfer: "",
        },
        {
          id: "-",
          item_number: "",
          item_name: "",
          unit: "",
          quantity: "",
          item_transfer: "",
        },
      ],
    };
  },

  methods: {
    closeDialog() {
      this.$store.commit("pos/ordersTransfer/updateDialogState", false);
    },

    openTableTransitionDialog() {
      this.$store.commit("pos/tableTransition/updateDialogState", true);
      this.closeDialog();
    },
  },

  computed: {
    showDialog: {
      set(state) {
        return this.$store.commit("pos/ordersTransfer/updateDialogState", state);
      },

      get() {
        return this.$store.state.pos.ordersTransfer.showDialog;
      },
    },
    
    invoice_number: {
      set(state) {
        return this.$store.commit("pos/ordersTransfer/updateInvoiceNumber", state);
      },

      get() {
        return this.$store.state.pos.ordersTransfer.updateInvoiceNumber;
      },
    },    
    order_number: {
      set(state) {
        return this.$store.commit("pos/ordersTransfer/updateOrderNumber", state);
      },

      get() {
        return this.$store.state.pos.ordersTransfer.updateOrderNumber;
      },
    },    
    table_number_transfered_from: {
      set(state) {
        return this.$store.commit("pos/ordersTransfer/updateTableNumberTransferedFrom", state);
      },

      get() {
        return this.$store.state.pos.ordersTransfer.updateTableNumberTransferedFrom;
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.info-row {
  display: flex;
  flex-wrap: wrap;
  padding: 0 30px;
}

.info-input {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}

.info-label {
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}

.cancel-btn {
  position: absolute;
  top: 0;
  color: black;
  font-size: x-large;
  cursor: pointer;
  padding: 0 20px;
}

[dir = 'rtl'] {
  .bordered-ar {
    border-left: none;
    border-right: 0.3rem solid #21798d;
  }
}

.bordered-en {
  border-left: 0.3rem solid #21798d;
  border-right: none;
}
</style>