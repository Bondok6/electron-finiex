<template>
    <el-dialog title=" " :visible.sync="dialog" width="70%">
      <span>
        <el-container class="d-block box-shadow mb-0 px-2 py-2">
          <el-form
            class="
              invoice-form
              width-99
              d-flex
              justify-center
              inventory-increase-form
            "
            label-position="top"
            :model="form"
          >
            <el-input
              class="text-color mb-1 mt-2 w-150 ml-2 dialogInput"
              :placeholder="$t('search-type')"
              readonly=""
            ></el-input>

            <el-input
              class="text-color bl-none mb-1 mt-2 w-300 ml-2 dialogInput"
              v-model="form.transfer_number"
              :placeholder="$t('search-here')"
            >
              <template slot="append"><i class="el-icon-search"></i></template>
            </el-input>
          </el-form>
          <el-container
            class="container mt-0 mb-0 invoice-table inventory-increase-table"
          >
            <el-table
              :data="tableOne"
              style="width: 100%"
              stripe
              border
              max-height="250"
              class="invoice-table header"
            >
              <el-table-column
                align="center"
                prop="item_number_available"
                label=" "
                width="40"
              />
              <el-table-column
                align="center"
                prop="quantity_available"
                label=" "
              />
              <el-table-column
                align="center"
                prop="item_number_not_available"
                label=" "
              />
            </el-table>
          </el-container>
        </el-container>
      </span>
      <span slot="footer" class="dialog-footer">
        <el-button class="btn-cyan-light px-3" @click="closeDialog(false)">{{
          $t("ok")
        }}</el-button>
      </span>
    </el-dialog>
</template>


<script>
export default {
  name: "costcenterone",

  data: function () {
    return {
      tableOne: [
        {
          item_number_available: "-",
          quantity_available: "-",
          item_number_not_available: "-",
        },
        {
          item_number_available: "-",
          quantity_available: "-",
          item_number_not_available: "-",
        },
        {
          item_number_available: "-",
          quantity_available: "-",
          item_number_not_available: "-",
        },
        {
          item_number_available: "-",
          quantity_available: "-",
          item_number_not_available: "-",
        },
        {
          item_number_available: "-",
          quantity_available: "-",
          item_number_not_available: "-",
        },
        {
          item_number_available: "-",
          quantity_available: "-",
          item_number_not_available: "-",
        },
      ],
      form: {
        adjustment_number: 1,
        cost: 1,
        main_center: 1,
      },
    };
  },

  methods: {
    closeDialog(state) {
      this.$store.commit("costcenterone/updateDialogState", state);
    },
  },

  computed: {
    dialog: {
      set(state) {
             return this.$store.commit("costcenterone/updateDialogState", state);
      },

      get() {
        return this.$store.state.costcenterone.dialog;
      },
    },
  },
};
</script>