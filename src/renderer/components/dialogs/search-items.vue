<template>
  <el-dialog title=" " :visible.sync="showDialog" width="80%">
    <span>
      <el-container class=" container ma-4 mt-3 mb-0 invoice-table 
                            container-modifier container-extra-height">
        <el-table :data="tableOne" style="width: 100%" stripe border  max-height="250">
          <el-table-column align="center" prop="id" :label="$t('id')" width="40"/>
          <el-table-column align="center" prop="item_name" :label="$t('item-name')" width="400"/>
          <el-table-column align="center" prop="warehouse" :label="$t('warehouse')" />
          <el-table-column align="center" prop="unit" :label="$t('unit')" />
          <el-table-column align="center" prop="actual_quantity" :label="$t('actual-quantity')" />
        </el-table>
      </el-container>
    </span>
    <div class="divider" style="height: 2rem;"></div>
    <span>
      <el-container class="container ma-4 mt-3 mb-0 invoice-table container-modifier rounded-bottom-corners">
        <el-table :data="tableTwo" style="width: 100%" stripe border  max-height="250">
          <el-table-column align="center" prop="id" :label="$t('id')" width="40"/>
          <el-table-column align="center" prop="unit_name" :label="$t('unit-name')" />
          <el-table-column align="center" prop="packing_quantity" :label="$t('packing-quantity')" />
          <el-table-column align="center" prop="last_purchase_price" :label="$t('last-purchase-price')" />
          <el-table-column align="center" prop="cost_price" :label="$t('cost-price')" />
          <el-table-column align="center" prop="wholesale_price" :label="$t('wholesale-price')" />
          <el-table-column align="center" prop="lowest_selling_price" :label="$t('lowest-selling-price')" />
          <el-table-column align="center" prop="selling_price" :label="$t('selling-price')" />
        </el-table>
      </el-container>
    </span>

    <span slot="footer" class="dialog-footer">
      <el-button class="btn-cyan-light px-4-lg" @click="closeDialog()">
        {{$t("ok")}}
        </el-button>
    </span>
  </el-dialog>
</template>

<script>
export default {
  name: 'SearchItems',

  data() {
    return {
      tableOne: [
        {
          id: "-",
          item_name: "-",
          warehouse: "_",
          unit: "_",
          actual_quantity: "_",
        },
        {
          id: "-",
          item_name: "-",
          warehouse: "_",
          unit: "_",
          actual_quantity: "_",
        },
        {
          id: "-",
          item_name: "-",
          warehouse: "_",
          unit: "_",
          actual_quantity: "_",
        },
        {
          id: "-",
          item_name: "-",
          warehouse: "_",
          unit: "_",
          actual_quantity: "_",
        },
        {
          id: "-",
          item_name: "-",
          warehouse: "_",
          unit: "_",
          actual_quantity: "_",
        },
      ],

      tableTwo: [
        {
          id: "-",
          unit_name: "-",
          packing_quantity: "_",
          last_purchase_price: "_",
          cost_price: "_",
          wholesale_price: "_",
          lowest_selling_price: "_",
          selling_price: "_",
        },
        {
          id: "-",
          unit_name: "-",
          packing_quantity: "_",
          last_purchase_price: "_",
          cost_price: "_",
          wholesale_price: "_",
          lowest_selling_price: "_",
          selling_price: "_",
        },
        {
          id: "-",
          unit_name: "-",
          packing_quantity: "_",
          last_purchase_price: "_",
          cost_price: "_",
          wholesale_price: "_",
          lowest_selling_price: "_",
          selling_price: "_",
        },
        {
          id: "-",
          unit_name: "-",
          packing_quantity: "_",
          last_purchase_price: "_",
          cost_price: "_",
          wholesale_price: "_",
          lowest_selling_price: "_",
          selling_price: "_",
        },
      ]
    }
  },

  methods: {
    closeDialog() {
      this.$store.commit("searchItems/updateDialogState", false);
    },
  },

  computed: {
    showDialog: {
      set(state) {
        return this.$store.commit("searchItems/updateDialogState", state);
      },

      get() {
        return this.$store.state.searchItems.showDialog;
      },
    },
  },
}
</script>

<style lang="scss" scoped>
.container-modifier {
  border-radius: 1rem;
  .el-table {
    border-radius: 1rem 1rem 0 0;
    border-bottom: none;
  }

  .el-table--border::after, .el-table--group::after, .el-table::before {
    background-color: white;
  }
}

.container-extra-height {
  height: 30rem;
}

.rounded-bottom-corners {
  .el-table {
    border-radius: 1rem;
  }
}
</style>