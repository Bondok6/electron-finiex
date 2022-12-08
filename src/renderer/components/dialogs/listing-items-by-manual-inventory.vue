<template>
  <el-dialog title=" " :visible.sync="dialog" width="50%">
    <span>
      <el-container class="d-block box-shadow mb-0 px-2 py-2">
        <el-form
          class="totals-form dialog-form"
          label-position="top"
          :model="form"
        >
          <table style="width: 100%">
            <tbody>
              <tr>
                <td style="width: 35%">
                  <span>{{ $t("item-number") }}</span>
                </td>
                <td>
                  <el-select v-model="form.inventory_name" class="width-full">
                    <el-option :value="2"></el-option>
                    <el-option :value="1"></el-option>
                  </el-select>
                </td>
              </tr>

              <tr>
                <td>
                  <span>{{ $t("item-name") }}</span>
                </td>
                <td>
                  <el-select v-model="form.inventory_name" class="width-full">
                    <el-option :value="2"></el-option>
                    <el-option :value="1"></el-option>
                  </el-select>
                </td>
              </tr>

              <tr>
                <td>
                  <span>{{ $t("category") }}</span>
                </td>
                <td>
                  <el-select v-model="form.inventory_name" class="width-full">
                    <el-option :label="$t('all')" :value="2"></el-option>
                    <el-option :label="$t('all')" :value="1"></el-option>
                  </el-select>
                </td>
              </tr>

              <tr>
                <td>
                  <span>{{ $t("unit") }}</span>
                </td>
                <td>
                  <el-select v-model="form.inventory_name" class="width-full">
                    <el-option :label="$t('all')" :value="2"></el-option>
                    <el-option :label="$t('all')" :value="1"></el-option>
                  </el-select>
                </td>
              </tr>

              <tr>
                <td>
                  <span>{{ $t("item-type") }}</span>
                </td>
                <td>
                  <el-select v-model="form.inventory_name" class="width-full">
                    <el-option :label="$t('all')" :value="2"></el-option>
                    <el-option :label="$t('all')" :value="1"></el-option>
                  </el-select>
                </td>
              </tr>

              <tr>
                <td>
                  <span>{{ $t("company-name") }}</span>
                </td>
                <td>
                  <el-select v-model="form.inventory_name" class="width-full">
                    <el-option :label="$t('all')" :value="2"></el-option>
                    <el-option :label="$t('all')" :value="1"></el-option>
                  </el-select>
                </td>
              </tr>

              <tr>
                <td>
                  <span>{{ $t("warehouse") }}</span>
                </td>
                <td>
                  <el-select v-model="form.inventory_name" class="width-full">
                    <el-option :label="$t('all')" :value="2"></el-option>
                    <el-option :label="$t('all')" :value="1"></el-option>
                  </el-select>
                </td>
              </tr>

              <tr>
                <td>
                  <span>{{ $t("item-status") }}</span>
                </td>
                <td>
                  <el-select v-model="form.inventory_name" class="width-full">
                    <el-option :label="$t('all')" :value="2"></el-option>
                    <el-option :label="$t('all')" :value="1"></el-option>
                  </el-select>
                </td>
              </tr>

              <tr>
                <td>
                  <span>{{ $t("available-quantity") }}</span>
                </td>
                <td>
                  <el-select v-model="form.inventory_name" class="width-full">
                    <el-option :label="$t('all')" :value="2"></el-option>
                    <el-option :label="$t('all')" :value="1"></el-option>
                  </el-select>
                </td>
              </tr>

              <tr>
                <td>
                  <span>{{ $t("opening-quantity") }}</span>
                </td>
                <td>
                  <el-select v-model="form.inventory_name" class="width-full">
                    <el-option :label="$t('all')" :value="2"></el-option>
                    <el-option :label="$t('all')" :value="1"></el-option>
                  </el-select>
                </td>
              </tr>

              <tr>
                <td>
                  <span>{{ $t("order-by") }}</span>
                </td>
                <td>
                  <el-select v-model="form.inventory_name" class="width-full">
                    <el-option :label="$t('item-name')" :value="2"></el-option>
                    <el-option :label="$t('item-name')" :value="1"></el-option>
                  </el-select>
                </td>
              </tr>
            </tbody>
          </table>
        </el-form>
      </el-container>
    </span>
    <span slot="footer" class="dialog-footer">
      <el-button class="btn-cyan-light" @click="closeDialog(false)">{{
        $t("insert-items")
      }}</el-button>

      <el-button type="primary" plain @click="closeDialog(false)">{{
        $t("exit")
      }}</el-button>
    </span>
  </el-dialog>
</template>

   <script>
export default {
  name: "list-items-manual",

  data: function () {
    return {
      form: {
        inventory_number: 1,
        inventory_name: 1,
      },
    };
  },

  methods: {
    closeDialog(state) {
      this.$store.commit("listitemsmanual/updateDialogState", state);
    },
  },

  computed: {
    dialog: {
      set(state) {
        return this.$store.commit("listitemsmanual/updateDialogState", state);
      },

      get() {
        return this.$store.state.listitemsmanual.dialog;
      },
    },
  },
};
</script>