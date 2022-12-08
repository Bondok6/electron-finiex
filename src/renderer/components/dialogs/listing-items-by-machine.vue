<template>
  <el-dialog title=" " :visible.sync="dialog" width="70%">
    <span>
      <el-container class="d-block box-shadow mb-0 px-2 py-2">
        <el-form
          class="invoice-form width-full"
          label-position="top"
          :model="form"
        >
          <el-row :gutter="6" class="width-full">
            <el-col :xs="24" :sm="24" :md="12" :lg="8">
              <el-form-item :label="$t('comma-prepare-inventory')">
                <el-select v-model="form.comma">
                  <el-option label="/" :value="2"></el-option>
                  <el-option label="/" :value="1"></el-option>
                </el-select>
              </el-form-item>
            </el-col>

            <el-col :xs="24" :sm="24" :md="12" :lg="8">
              <el-form-item :label="$t('warehouse')">
                <el-select v-model="form.warehouse">
                  <el-option :label="$t('shop')" :value="2"></el-option>
                  <el-option :label="$t('shop')" :value="1"></el-option>
                </el-select>
              </el-form-item>
            </el-col>

            <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" class="mt-40">
              <div class="inline-button-container d-flex">
                <div class="spacer"></div>
                <el-button class="text-center width-full btn-cyan-lighter">
                  {{ $t("browse-the-file-and-read-the-items") }}
                </el-button>
              </div>
            </el-col>
          </el-row>
        </el-form>
        <br />
        <div class="d-flex space-around text-blue">
          <span class="text-center">{{ $t("items-in-stock") }}</span>
          <span class="text-center">{{ $t("items-not-in-stock") }}</span>
        </div>
        <br />
        <el-container class="container mt-0 mb-0 invoice-table">
          <el-table
            :data="tableOne"
            style="width: 100%"
            stripe
            border
            max-height="250"
            class="invoice-table"
          >
            <el-table-column
              align="center"
              prop="item_number_available"
              :label="$t('item-number')"
            />
            <el-table-column
              align="center"
              prop="quantity_available"
              :label="$t('quantity')"
            />
            <el-table-column
              align="center"
              prop="item_number_not_available"
              :label="$t('item-number')"
            />
            <el-table-column
              align="center"
              prop="quantity_not_available"
              :label="$t('quantity')"
            />
          </el-table>
        </el-container>
      </el-container>
    </span>
    <span slot="footer" class="dialog-footer">
      <el-button class="btn-cyan-light" @click="closeDialog(false)">{{
        $t("insert-items")
      }}</el-button>
    </span>
  </el-dialog>
</template>

   <script>
export default {
  name: "list-items-machine",

  data: function () {
    return {
      form: {
        inventory_number: 1,
        inventory_name: 1,
      },

      tableOne: [
        {
          item_number_available: "-",
          quantity_available: "-",
          item_number_not_available: "-",
          quantity_not_available: "-",
        },
        {
          item_number_available: "-",
          quantity_available: "-",
          item_number_not_available: "-",
          quantity_not_available: "-",
        },
        {
          item_number_available: "-",
          quantity_available: "-",
          item_number_not_available: "-",
          quantity_not_available: "-",
        },
      ],
    };
  },

  methods: {
    closeDialog(state) {
      this.$store.commit("listitemsmachine/updateDialogState", state);
    },
  },

  computed: {
    dialog: {
      set(state) {
        return this.$store.commit("listitemsmachine/updateDialogState", state);
      },

      get() {
        return this.$store.state.listitemsmachine.dialog;
      },
    },
  },
};
</script>