<template>
  <span>
    <el-dialog title="" :visible.sync="showDialog" width="70%">
      <template slot="title">
        <div class="title width-full">{{$t('please-choose-the-table-to-transition-from')}}</div>
      </template>

      <div class="list mt-1">
        <div  v-for="(table, index) in tables" :key="index"
              class="item-block box-shadow"
              @click="goToDialog()">
          {{$t(table)}}
        </div>
      </div>
    </el-dialog>

    <TableTransition />
    <OrdersTransfer />
  </span>
</template>


<script>
import TableTransition from "~/components/pos/dialogs/table-transition"
import OrdersTransfer from "~/components/pos/dialogs/orders-transfer"

export default {
  name: "TableSelect",

  components: {
    TableTransition,
    OrdersTransfer
  },

  data: function () {
    return {
      tables: [
        'table-1',
      ]
    };
  },

  methods: {
    closeDialog() {
      this.$store.commit("pos/tableSelect/updateDialogState", false);
    },

    goToDialog() {
      if(this.$store.state.pos.tables.transferSomeItems === true) {
        this.openOrdersTransferDialog();
      }
      else {
        this.openTableTransitionDialog();
      }
      this.closeDialog();
    },

    openTableTransitionDialog() {
      this.$store.commit("pos/tableTransition/updateDialogState", true);
    },
    openOrdersTransferDialog() {
      this.$store.commit("pos/ordersTransfer/updateDialogState", true);
    }
  },

  computed: {
    showDialog: {
      set(state) {
        return this.$store.commit("pos/tableSelect/updateDialogState", state);
      },

      get() {
        return this.$store.state.pos.tableSelect.showDialog;
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.list {
  display: flex;
  justify-content: flex-start;
  align-content: flex-start;
  flex-wrap: wrap;
  min-height: 25rem;
}

.item-block {
  height: 5rem;
  width: 6rem;
  background-color: #F5DFD4;
  text-align: center;
  line-height: 5rem;
  margin: 0.3rem;
  border-radius: 0.5rem;
  color: #707070;
  cursor: pointer;
}

.cancel-btn {
  position: absolute;
  top: 0;
  color: black;
  font-size: x-large;
  cursor: pointer;
}

.title { 
  text-align: center;
  color: #21798d;
}
</style>