<template>
  <div>
    <el-dialog title=" " :visible.sync="showDialog" width="40%">
      <span>
        <el-container class="d-block mb-0 px-2">
          <el-form
            class="invoice-form width-full"
            label-position="top"
          >
            <el-row class="width-full">
              <el-col :span="24" class="mb-2">
                <h1 class="dialog-title">
                  {{ $t("please-insert-invoice-number") }}
                </h1>
              </el-col>
            </el-row>

            <el-row class="width-full input-row">
              <el-col :span="22">
                <el-form-item>
                  <el-input v-model="invoice_number"></el-input>
                </el-form-item>
              </el-col>

              <el-col :span="2" class="text-center">
                <i
                  class="el-icon-search"
                  style="color: black; font-size: 2rem;"
                ></i>
              </el-col>
            </el-row>
          </el-form>
        </el-container>
      </span>
      <div class="d-flex justify-center width-full">
        <span class="mx-2">
          <el-button class="btn-cyan-light px-4-lg mt-4" @click="closePrimaryDialog()">{{
            $t("agree")
          }}</el-button>
        </span>
      </div>
    </el-dialog>

    <!-- secondary dialog -->
    <el-dialog title=" " :visible.sync="showRetrunAllItemsConfirmDialog" width="40%">
      <span>
        <el-container class="d-block mb-0 px-2">
          <el-form
            class="invoice-form width-full"
            label-position="top"
          >
            <el-row class="width-full">
              <el-col :span="24" style="margin-bottom: 30px">
                <h1 class="dialog-title">
                  {{ $t("do-you-want-to-return-all-items") }}
                </h1>
              </el-col>
            </el-row>
            <div class="d-flex justify-center width-full">
              <span class="mx-2">
                <el-button
                  class="btn-cyan-light px-4-lg"
                  style="width: 6rem;"
                  @click="closeSecondaryDialog(), returnAllItems = true"
                  >
                  {{ $t("yes") }}
                </el-button>
              </span>
              <span class="mx-2">
                <el-button
                  class="btn-cyan-light px-4-lg"
                  style="width: 6rem;"
                  @click="closeSecondaryDialog(), returnAllItems = false"
                  >
                  {{ $t("no") }}
                </el-button
                >
              </span>
            </div>
          </el-form>
        </el-container>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'IvoiceNumberEntry',

  data() {
    return {
      showRetrunAllItemsConfirmDialog: false,
      returnAllItems: false,
    }
  },

  methods: {
    closePrimaryDialog() {
      this.$store.commit("invoiceNumberEntry/updateDialogState", false);
      this.showRetrunAllItemsConfirmDialog = true;
    },

    closeSecondaryDialog() {
      this.showRetrunAllItemsConfirmDialog = false;
    }
  },

  computed: {
    showDialog: {
      set(state) {
        return this.$store.commit("invoiceNumberEntry/updateDialogState", state);
      },

      get() {
        return this.$store.state.invoiceNumberEntry.showDialog;
      },
    },

    invoice_number: {
      set(state) {
        return this.$store.commit("invoiceNumberEntry/updateInvoiceNumber", state);
      },

      get() {
        return this.$store.state.invoiceNumberEntry.invoice_number;
      },
    }
  },
}
</script>

<style lang="scss" scoped>
.dialog-title {
  text-align: center; 
  font-size: 2rem; 
  color: black;
}

.input-row {
  padding: 0px 2rem; 
  display:flex; 
  align-items: center;
}
</style>