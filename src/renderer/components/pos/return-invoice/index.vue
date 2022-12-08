<template>
  <div style="margin: 15px">
    <el-row class="mb-1">
      <div class="width-full header">{{$t('pos-invoice-return')}}</div>
    </el-row>

    <el-row>
      <el-col :xs="24" :md="14" class="mb-2">
        <search-order-table v-on:openTableNumberSelect="openSelectTableNumberDialog()"
                            v-on:openOrderChoice="openChooseOrderDialog()"/>

        <el-row>
          <el-col :xs="24">
            <div class="offer-order-container mt-1">
              <el-button  round plain class="mt-2 mb-2 plain-primary-button"
                          @click="openSelectTableNumberDialog()">
                <span>{{$t("more")}}</span>
                <span>{{$t("arrow")}}</span>
              </el-button>
            </div>
          </el-col>
        </el-row>

        <el-row>
          <order-table-footer v-on:openPayment="openPaymentDialog()"/>
        </el-row>
      </el-col>

      
      <el-col :xs="24" :md="10">
        <el-row class="mb-2 gap-ar gap-en">
          <search-item />

          <el-row>
            <div class="mb-2 mt-1 item-search-container">
              <item-search-table />
            </div>
          </el-row>

          <el-row>
            <search-item-footer />
          </el-row>
        </el-row>
      </el-col>
    </el-row>

    <!--return method dialog-->
    <el-dialog class="dialog-padding-0-all" title=" " :visible.sync="showReturnMethodDialog" width="25%">
      <el-row class="mb-1">
        <div class="cancel-btn" @click="closeReturnMethodsDialog()">
          <i class="el-icon-close"></i>
        </div>
      </el-row>

      <el-row class="return-container mb-4">
        <div>{{$t('please-choose-return-method')}}</div>
      </el-row>

      <el-row class="return-container mb-2">
        <div class="return-btn" @click="goToByOrderDialog()">
          {{$t('return-by-order-number')}}
        </div>
      </el-row>

      <el-row class="return-container mb-2">
        <div class="return-btn" @click="goToByTableDialog()">
          {{$t('return-by-table-number')}}
        </div>
      </el-row>

      <el-row></el-row>
    </el-dialog>

    <!--return by order dialog-->
    <el-dialog class="dialog-padding-0-all" title=" " :visible.sync="showReturnByOrderDialog" width="25%">
      <el-row class="mb-1">
        <div class="cancel-btn" @click="closeReturnByOrderDialog()">
          <i class="el-icon-close"></i>
        </div>
      </el-row>

      <el-row class="return-container mb-4">
        <div>{{$t('please-enter-order-number')}}</div>
      </el-row>

      <el-row class="return-container mb-2">
        <el-input
          class="text-color bl-none"
          style="border-radius: 4px; width: 70%;"
          placeholder=""
          @focus="openKeypadDialog()"
        >
          <template slot="append">
            <div  class="search-icon-container"
                  @click="openChooseOrderDialog()">
              <i
                class="el-icon-search"
                style="font-size: large; font-weight: bold"
              ></i>
            </div>
          </template>
        </el-input>
      </el-row>

      <el-row class="return-container mb-2">
        <div class="return-btn" @click="closeReturnByOrderDialog()">
          {{$t('agree')}}
        </div>
      </el-row>

      <el-row></el-row>
    </el-dialog>

    <!--return by table dialog-->
    <el-dialog class="dialog-padding-0-all" title=" " :visible.sync="showReturnByTableDialog" width="25%">
      <el-row class="mb-1">
        <div class="cancel-btn" @click="closeReturnByTableDialog()">
          <i class="el-icon-close"></i>
        </div>
      </el-row>

      <el-row class="return-container mb-4">
        <div>{{$t('please-enter-table-number')}}</div>
      </el-row>

      <el-row class="return-container mb-2">
        <el-input
          class="text-color bl-none"
          style="border-radius: 4px; width: 70%;"
          placeholder=""
          @focus="openKeypadDialog()"
        >
          <template slot="append">
            <div  class="search-icon-container"
                  @click="openSelectTableNumberDialog()">
              <i
                class="el-icon-search"
                style="font-size: large; font-weight: bold"
              ></i>
            </div>
          </template>
        </el-input>
      </el-row>

      <el-row class="return-container mb-2">
        <div class="return-btn" @click="closeReturnByTableDialog()">
          {{$t('agree')}}
        </div>
      </el-row>

      <el-row></el-row>
    </el-dialog>
    
    <keypad />
    <SalesInvoicesSelectTable />
    <ChooseOrder />
    <Payment />
  </div>
</template>

<script>
import SearchOrderTable from "./search-order-table.vue"
import OrderTableFooter from "./order-table-footer.vue"
import SearchItem from "./search-item.vue"
import ItemSearchTable from "./item-search-table.vue"
import SearchItemFooter from "./search-item-footer.vue"
import Keypad from "~/components/pos/dialogs/keypad"
import SalesInvoicesSelectTable from "~/components/pos/dialogs/sales-invoices-select-table"
import ChooseOrder from "~/components/pos/dialogs/choose-order"
import Payment from "~/components/pos/dialogs/payment/payment"

export default {
  components: {
    SearchOrderTable, OrderTableFooter, 
    SearchItem, ItemSearchTable, SearchItemFooter,
    Keypad, SalesInvoicesSelectTable, ChooseOrder,
    Payment
  },

  data: function () {
    return {

    };
  },

  methods: {
    // plusOne() {
    //    
    // },
    // minusOne() {
    //   this.searchTable -= 1;
    // },

    closeReturnByOrderDialog() {
      this.showReturnByOrderDialog = false;
    },
    closeReturnByTableDialog() {
      this.showReturnByTableDialog = false;
    },
    openKeypadDialog() {
      this.$store.commit("pos/keypad/updateDialogState", true);
    },
    openSelectTableNumberDialog() {
      this.$store.commit("pos/salesInvoicesSelectTable/updateDialogState", true);
    },
    openChooseOrderDialog() {
      this.$store.commit("pos/chooseOrder/updateDialogState", true);
    },
    openPaymentDialog() {
      this.$store.commit("pos/payment/updateDialogState", true);
    },
    goToByOrderDialog() {
      this.closeReturnMethodsDialog();
      this.showReturnByOrderDialog = true;
    },
    goToByTableDialog() {
      this.closeReturnMethodsDialog();
      this.showReturnByTableDialog = true;
    },
    closeReturnMethodsDialog() {
      this.showReturnMethodDialog = false;
    }
  },

  computed: {
    showReturnMethodDialog: {
      set(state) {
        return this.$store.commit("pos/returnInvoice/updateShowReturnMethodDialog", state);
      },

      get() {
        return this.$store.state.pos.returnInvoice.showReturnMethodDialog;
      },
    },
    showReturnByOrderDialog: {
      set(state) {
        return this.$store.commit("pos/returnInvoice/updateShowReturnByOrderDialog", state);
      },

      get() {
        return this.$store.state.pos.returnInvoice.showReturnByOrderDialog;
      },
    },
    showReturnByTableDialog: {
      set(state) {
        return this.$store.commit("pos/returnInvoice/updateShowReturnByTableDialog", state);
      },

      get() {
        return this.$store.state.pos.returnInvoice.showReturnByTableDialog;
      },
    },
  },
};
</script>

<style scoped lang="scss">
.header {
  color: white;
  background-color: #6DD1CF;
  height: 2.5rem;
  text-align: center;
  line-height: 2.5rem;
  border-radius: 4px;
}

.offer-order-container {
  background-color: #fff;
  box-shadow: 0 0 5px rgba(112, 112, 112, 0.45);
  padding: 10px;
  height: 32rem;
  border-radius: 0.7rem;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

.item-search-container {
  background-color: #fff;
  box-shadow: 0 0 5px rgba(112, 112, 112, 0.45);
  padding: 10px;
  height: 32rem;
  border-radius: 0.7rem;
}

.plain-primary-button {
  display: block;
  margin-left: 0;
  margin-right: auto;
  background-color: #fff;
  color: #21798d;
  border-color: #21798d;
  box-shadow: 0 0 3px rgba(112, 112, 112, 0.45);
  
  &:hover{
    background-color: rgba(0, 102, 255, 0.212);
    color: #21798d;
    border-color: #21798d;
  }
  &:active {
    background-color: #fff;
    color: #21798d;
    border-color: #21798d;
  }
}

[dir = 'rtl'] {
  .gap-ar {
    margin-right: 20px;
    margin-left: 0;
  }
}

.gap-en {
  margin-right: 0;
  margin-left: 20px;
}

.return-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
.return-btn {
  width: 13rem;
  height: 2.5rem;
  color: white;
  text-align: center;
  line-height: 2.5rem;
  background-color: #6DD1CF;
  border-radius: 0.5rem;
  cursor: pointer;
}

.cancel-btn {
  color: black;
  font-size: x-large;
  cursor: pointer;
  margin: 0.4rem 0.4rem;
}
</style>
