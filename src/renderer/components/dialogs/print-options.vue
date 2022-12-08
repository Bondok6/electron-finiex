<template>
  <el-dialog title="" :visible.sync="showDialog" width="35%">
      <span>
        <el-container class="d-block box-shadow mb-0 px-2 py-2">
          <el-form
            class="invoice-form width-full"
            label-position="top"
          >
            <el-row :gutter="6" class="width-full">
              <el-col :xs="24" :sm="24" :md="24" :lg="24">
                <el-form-item>
                  <label class="label">{{$t('invoice-print-selection')}}</label>
                  <el-select v-model="invoice_print_selection">
                    <el-option label="طباعة فاتورة أصل" :value="1"></el-option>
                    <el-option label="طباعة فاتورة أصل" :value="2"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row :gutter="6" class="width-full">
              <el-col :xs="24" :sm="24" :md="24" :lg="24">
                <el-form-item>
                  <label class="label">{{$t('expense-print-selection')}}</label>
                  <el-select v-model="expense_print_selection">
                    <el-option label="طباعة فاتورة المصروف" :value="1"></el-option>
                    <el-option label="طباعة فاتورة المصروف" :value="2"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
        </el-container>
      </span>
      <span slot="footer" class="dialog-footer">
        <el-button
          class="btn-cyan-light px-4-lg"
          @click="closeDialog()"
          >{{ $t("ok") }}</el-button
        >
      </span>
  </el-dialog>
</template>

<script>
export default {
  name: 'PrintOptions',

  methods: {
    closeDialog() {
      this.$store.commit("printOptions/updateDialogState", false);
    },
  },

  computed: {
    showDialog: {
      set(state) {
        return this.$store.commit("printOptions/updateDialogState", state);
      },

      get() {
        return this.$store.state.printOptions.showDialog;
      },
    },

    invoice_print_selection: {
      set(state) {
        return this.$store.commit("printOptions/updateInvoicePrintSelection", state);
      },

      get() {
        return this.$store.state.printOptions.invoice_print_selection;
      },
    },

    expense_print_selection: {
      set(state) {
        return this.$store.commit("printOptions/updateExpensePrintSelection", state);
      },

      get() {
        return this.$store.state.printOptions.expense_print_selection;
      },
    },
  },
}
</script>