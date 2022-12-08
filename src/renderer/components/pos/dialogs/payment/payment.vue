<template>
  <span>
    <el-dialog class="payment-dialog" title=" " :visible.sync="showDialog" width="80%">
      <el-row class="d-flex cols-container">
        <el-col :md="15" :lg="15" class="d-flex"
                v-show="showPayByTotalSeg">
          <col-1-pay-total-amount class="width-full"/>
        </el-col>

        <el-col :md="5" :lg="5" class="d-flex"
                v-show="!showPayByTotalSeg">
          <div class="payment-list">
            <el-menu :default-active="activePane">
              <el-menu-item v-for="(payment_type, i) in payment_types" :key="i" :index="i.toString()" 
                            :id="`menu-item-${i}`" class="payment-type-card" @click="select_pane(i)">
                  <div>
                    <img  :src="require(`~/assets/images/pos/${payment_type.icon}.svg`)" 
                          width="24px" v-show="i != activePane">

                    <img  :src="require(`~/assets/images/pos/${payment_type.icon}_active.svg`)" 
                          width="24px" v-show="i == activePane">
                  </div>
                  <div class="px-2">{{$t(payment_type.name)}}</div>
              </el-menu-item>
            </el-menu>
          </div>
        </el-col>

        <el-col :md="10" :lg="10" class="d-flex"
                v-show="!showPayByTotalSeg">
          <col-1-cash v-show="activePane === PANES.MONEY_CASH" 
                      v-on:showKeypad="openKeypadDialog()"
                      class="width-full" />

          <col-1-postponed  v-show="activePane === PANES.POSTPONED" 
                            v-on:showKeypad="openKeypadDialog()"
                            v-on:showClientSelect="openClientSelectDialog()"
                            class="width-full" />

          <col-1-discount v-show="activePane === PANES.DISCOUNT_QITAFI" 
                          v-on:showKeypad="openKeypadDialog()"
                          class="width-full" />           
                            
          <col-1-visa v-show="activePane === PANES.PROVIDER_VISA" 
                      v-on:showKeypad="openKeypadDialog()"
                      class="width-full" />    

          <col-1-mutual v-show="activePane === PANES.MUTUAL_PAYMENT_METHODS" 
                        v-on:showKeypad="openKeypadDialog()"
                        class="width-full" />                 
        </el-col>  

        <el-col :md="9" :lg="9" class="d-flex">
          <col-2 class="width-full"/>
        </el-col>  
      </el-row>

      <el-row>
        <div class="d-flex justify-center footer">
          <el-button class="btn-navy px-3 mx-1" @click="goToDelegateOrDriverDialog()">
            {{$t("save-print")}}
          </el-button>

          <el-button class="btn-navy-bordered navy-color px-3 mx-1" @click="closeDialog()">
            {{$t("cancel")}}
          </el-button>
        </div>
      </el-row>
    </el-dialog>

    <keypad />
    <delegate-select />
    <driver-select />
    <client-select />
    <TablePartitioning />
  </span>
</template>


<script>
import Col1Cash from "./col-1/col-1-cash"
import Col1Postponed from "./col-1/col-1-postponed"
import Col1Discount from "./col-1/col-1-discount"
import Col1Visa from "./col-1/col-1-visa"
import Col1Mutual from "./col-1/col-1-mutual"
import Col1PayTotalAmount from "./col-1/col-1-pay-total-amount.vue"
import Col2 from "./col-2"

import Keypad from "~/components/pos/dialogs/keypad"
import DelegateSelect from "~/components/pos/dialogs/delegate-select"
import DriverSelect from "~/components/pos/dialogs/driver-select"
import ClientSelect from "~/components/pos/dialogs/client-select"
import TablePartitioning from "~/components/pos/dialogs/payment/table-partitioning/table-partition-by-items"

export default {
  name: "Payment",

  components: {
    Col1Cash, Col1Postponed, Col1Discount, 
    Col1Visa, Col1Mutual, Col1PayTotalAmount,
    Col2, 
    Keypad, DelegateSelect, ClientSelect,
    TablePartitioning, DriverSelect
  },

  data: function () {
    return {
      PANES: {
        MONEY_CASH: '0',
        PROVIDER_VISA: '1',
        DISCOUNT_QITAFI: '2',
        POSTPONED: '3',
        MUTUAL_PAYMENT_METHODS: '4',
        INVOICE_PARTITIONING: '5'
      },

      payment_types: [
        {
          name: 'money-cash',
          icon: 'cash',
        },
        {
          name: 'provider-visa',
          icon: 'visa',
        },
        {
          name: 'discount-qitafi',
          icon: 'discount',
        },
        {
          name: 'postponed',
          icon: 'postponed',
        },
        {
          name: 'mutual-payment-methods',
          icon: 'mutual_methods',
        },
        {
          name: 'invoice-partitioning',
          icon: 'invoice_partition',
        },
      ],
    };
  },

  methods: {
    closeDialog() {
      this.$store.commit("pos/payment/updateDialogState", false);
    },

    select_pane(index) {
      this.$store.commit("pos/payment/updateActivePane", index.toString());
      if(this.activePane == this.PANES.INVOICE_PARTITIONING) {
        this.openChooseDeliveryType();
      }
    },

    openKeypadDialog() {
      this.$store.commit("pos/keypad/updateDialogState", true);
    },

    goToDelegateOrDriverDialog() {
      if (this.$store.state.pos.payment.delivery === true) {
        this.openDriverSelectDialog();
      }
      else this.openDelegateSelectDialog();

      this.$store.commit("pos/payment/updateDelivery", false);
    },

    openDelegateSelectDialog() {
      this.$store.commit("pos/delegateSelect/updateDialogState", true);
    },

    openDriverSelectDialog() {
      this.$store.commit("pos/driverSelect/updateDialogState", true);
    },

    openClientSelectDialog() {
      this.$store.commit("pos/clientSelect/updateDialogState", true);
      this.setupClientSelectDialog();
    },

    setupClientSelectDialog() {
      this.$nextTick(() => {
        const container = document.getElementById('client-search-box');
         
        const input = container.getElementsByClassName("el-input__suffix")[0];
        input.innerHTML = `
          <i class="el-icon-search mx-1 icon-search-mod"></i>
        `;
      })
    },

    openChooseDeliveryType() {
      this.$store.commit("pos/tablePartitioning/updateDialogState", true); 
      this.$store.commit("pos/deliveryType/updateDialogState", true);    
      this.$store.commit("pos/payment/updateActivePane", this.PANES.MONEY_CASH);
      this.closeDialog();
    }
  },

  computed: {
    showDialog: {
      set(state) {
        return this.$store.commit("pos/payment/updateDialogState", state);
      },

      get() {
        return this.$store.state.pos.payment.showDialog;
      },
    },

    showPayByTotalSeg: {
      set(state) {
        return this.$store.commit("pos/payment/updateShowByTotal", state);
      },

      get() {
        return this.$store.state.pos.payment.showPayByTotalSeg;
      },      
    },

    activePane: {
      set(state) {
        return this.$store.commit("pos/payment/updateActivePane", state);
      },

      get() {
        return this.$store.state.pos.payment.activePane;
      },      
    }
  },

  mounted() {
    this.$store.commit("pos/payment/updateActivePane", this.PANES.MONEY_CASH);
    this.$store.commit("pos/payment/updateShowByTotal", false);
  },
};
</script>

<style lang="scss" scoped>
.footer {
  background-color: #E6F8FC;
  padding: 1rem 0;
}

.cols-container {
  flex-wrap: wrap;
  z-index: 3;
  box-shadow: 0 4px 3px -3px rgba(112, 112, 112, 0.45);;
}

.activeIcon {
  color: #707070;
}
</style>