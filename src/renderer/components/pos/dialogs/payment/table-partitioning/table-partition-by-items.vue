<template>
  <div>
    <el-dialog class="pt-0-dialog" title=" " :visible.sync="showDialog" width="80%">
      <el-row class="mb-1">
        <div class="cancel-btn" @click="closeDialog()">
          <i class="el-icon-close"></i>
        </div>
      </el-row>
        
      <el-row class="d-flex flex-wrap">
        <el-col :md="12" :lg="12" style="margin-top: 1.5rem">
          <all-table />
        </el-col>

        <el-col :md="1" :lg="1" />

        <el-col :md="11" :lg="11">
          <customer-table v-for="(customer, index) in customers" :key="index"
                          :customerId="index +1"/>
        </el-col>
      </el-row>
    </el-dialog>

    <delivery-type />
  </div>
</template>


<script>
import AllTable from './all-table'
import CustomerTable from './customer-table'
import DeliveryType from "~/components/pos/dialogs/payment/dialogs/delivery-type"

export default {
  name: "tablePartitioning",

  components: {
    AllTable,
    CustomerTable,
    DeliveryType
  },

  data: function () {
    return {
      customers: [
        'customer-1',
        'customer-2',
        'customer-3'
      ]
    };
  },

  methods: {
    closeDialog() {
      this.$store.commit("pos/tablePartitioning/updateDialogState", false);
    },
  },

  computed: {
    showDialog: {
      set(state) {
        return this.$store.commit("pos/tablePartitioning/updateDialogState", state);
      },

      get() {
        return this.$store.state.pos.tablePartitioning.showDialog;
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

.flex-wrap {
  flex-wrap: wrap;
}

.table-mod {
  border-radius: 0.5rem !important;

  .el-table {
    border-radius: 0.5rem !important;
  }
}
</style>