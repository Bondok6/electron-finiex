<template>
  <div>
    <el-dialog class="delivery-type-dialog" :visible.sync="showDialog" width="25%">
      <el-row class="mb-1">
        <div class="cancel-btn" @click="closeAndReturn()">
          <i class="el-icon-close"></i>
        </div>
      </el-row>
      
      <div style="padding: 2rem 1.5rem;">
        <el-row class="d-flex-center">
          <el-radio-group v-model="deliveryChoice" class="radio-mod">
            <el-radio :label="1" class="px-2">{{$t('total')}}</el-radio>
            <el-radio :label="2" class="px-2">{{$t('items')}}</el-radio>
          </el-radio-group>
        </el-row>

        <el-row class="d-flex-center" style="margin-top: 4rem; margin-bottom: 4rem;">
          <el-col :span="10">
            <div style="text-align: center;">{{$t('departments-number')}}</div>
          </el-col>
        
          <el-col :span="14">
            <el-input />
          </el-col>
        </el-row>

        <el-row class="d-flex-center">
          <div class="ok-btn" @click="openPaymentDialog()">
            {{$t('ok')}}
          </div>
        </el-row>
      </div>
    </el-dialog>

    <table-partition-form />
  </div>
</template>


<script>
import TablePartitionForm from "~/components/pos/dialogs/payment/dialogs/table-partition-form"

export default {
  name: "DeliveryType",

  components: {
    TablePartitionForm
  },

  data: function () {
    return {
      deliveryChoice: 2,
    };
  },

  methods: {
    closeAndReturn() {
      this.closeDialog();
      this.$store.commit("pos/tablePartitioning/updateDialogState", false);
      this.$store.commit("pos/payment/updateDialogState", true);
    },

    closeDialog() {
      this.$store.commit("pos/deliveryType/updateDialogState", false);
    },

    openPaymentDialog() {
      if (this.deliveryChoice === 1) this.byTotal();
      else if (this.deliveryChoice === 2) this.byItems();
    },

    byTotal() {
      this.$store.commit("pos/payment/updateDialogState", true);
      this.$store.commit("pos/payment/updateShowByTotal", true);
      this.$store.commit("pos/tablePartitioning/updateDialogState", false);
      this.closeDialog();
    },

    byItems() {
      this.$store.commit("pos/tablePartitionForm/updateDialogState", true);  
      this.closeDialog();  
    }
  },

  computed: {
    showDialog: {
      set(state) {
        return this.$store.commit("pos/deliveryType/updateDialogState", state);
      },

      get() {
        return this.$store.state.pos.deliveryType.showDialog;
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.cancel-btn {
  color: black;
  font-size: x-large;
  cursor: pointer;
}

.d-flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.ok-btn {
  width: 10rem;
  height: 1.8rem;
  color: white;
  background-color: #6DD1CF;
  text-align: center;
  line-height: 1.8rem;
  border-radius: 4px;
  cursor: pointer;
}
</style>