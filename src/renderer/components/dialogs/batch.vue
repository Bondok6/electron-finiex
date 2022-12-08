<template>
  <el-dialog title=" " :visible.sync="showDialog" width="80%">
    <span>
      <el-container class="container ma-4 mt-3 mb-0 invoice-table contaier-modifier">
        <el-table :data="serialItemTableData" style="width: 100%" stripe border  max-height="250">
          <el-table-column align="center" prop="id" :label="$t('id')" width="40"/>
          <el-table-column align="center" prop="patch_number" :label="$t('patch-number')" />
          <el-table-column align="center" prop="production_date" :label="$t('production-date')" />
          <el-table-column align="center" prop="expiration_date" :label="$t('expiration-date')" />
          <el-table-column align="center" prop="actual_quantity" :label="$t('actual-quantity')" />
          <el-table-column align="center" prop="quantity" :label="$t('quantity')" />
          <el-table-column align="center" prop="bonus_amount" :label="$t('bonus-amount')" />
          <el-table-column align="center" prop="selling_price" :label="$t('selling-price')" />
        </el-table>
      </el-container>
    </span>

    <span slot="footer" class="dialog-footer footer-modifier-ar footer-modifier-en">
      <div class="mt-2 action-buttons-nonGrown ml-4">
        <el-button @click="closeDialog()" size="mini" class="mb-1 btn-blue">{{$t("save-f5")}}</el-button>
        <el-button @click="closeDialog()" size="mini" class="mb-1" type="warning">{{ $t("esc")}}</el-button>
      </div>
    </span>
  </el-dialog>
</template>

<script>
export default {
  name: 'AddSerialItem',

  data() {
    return {
      serialItemTableData: [
        {
          id: "-",
          serial_number: "-",
        },
        {
          id: "-",
          serial_number: "-",
        },
        {
          id: "-",
          serial_number: "-",
        },
        {
          id: "-",
          serial_number: "-",
        },
        {
          id: "-",
          serial_number: "-",
        },
      ],
    }
  },

  methods: {
    closeDialog() {
      this.$store.commit("batch/updateDialogState", false);
    },
  },

  computed: {
    showDialog: {
      set(state) {
        return this.$store.commit("batch/updateDialogState", state);
      },

      get() {
        return this.$store.state.batch.showDialog;
      },
    },
  },
}
</script>

<style lang="scss" scoped>
.contaier-modifier {
  border-radius: 1rem;
  height: 30rem;
  .el-table {
    border-radius: 1rem 1rem 0 0;
    border-bottom: none;
  }

  .el-table--border::after, .el-table--group::after, .el-table::before {
    background-color: white;
  }
}

[dir='rtl'] {
  .footer-modifier-ar {
    text-align: left;
  }
}

.footer-modifier-en {
  text-align: right;
}
</style>