<template>
    <el-dialog title=" " :visible.sync="showDialog" width="70%">
      <span>
        <el-form
          class="
            width-99
            d-flex
            justify-center
          "
          label-position="top"
        >
          <el-form-item>
            <div class="side-label-container">
              <div class="side-label">{{$t('search-type')}}</div>
              <el-input
                class="text-color mb-1 mt-2 w-150 ml-2 dialogInput dialog-input-modifier"
              ></el-input>
            </div>
          </el-form-item>
          <el-form-item>
            <el-input
              class=" text-color bl-none mb-1 mt-2 w-300 ml-2 
                      dialogInput dialog-search-input-modifier-ar
                      dialog-search-input-modifier-en"
              v-model="search_target"
              :placeholder="$t('search-here')"
            >
              <template slot="append"><i class="el-icon-search"></i></template>
            </el-input>
          </el-form-item>
        </el-form>
        <el-container
          class="container mt-0 mb-0 invoice-table contaier-modifier"
        >
          <el-table
            :data="searchTable"
            style="width: 100%"
            stripe
            border
            max-height="250"
           >
            <el-table-column
              align="center"
              prop="id"
              :label="$t('id')"
              width="40"
            />
            <el-table-column
              align="center"
              prop="search_by_number"
              :label="$t('search-by-number')"
            />
          </el-table>
        </el-container>
      </span>
      <span slot="footer" class="dialog-footer">
        <el-button class="btn-cyan-light px-3" @click="closeDialog()">{{
          $t("ok")
        }}</el-button>
      </span>
    </el-dialog>
</template>


<script>
export default {
  name: "SearchInvoiceCategories",

  data: function () {
    return {
      searchTable: [
        {
          id: "-",
          search_by_number: "-",
        },
        {
          id: "-",
          search_by_number: "-",
        },
        {
          id: "-",
          search_by_number: "-",
        },
        {
          id: "-",
          search_by_number: "-",
        },
      ],
    };
  },

  methods: {
    closeDialog() {
      this.$store.commit("searchInvoiceCategories/updateDialogState", false);
    },
  },

  computed: {
    showDialog: {
      set(state) {
        return this.$store.commit("searchInvoiceCategories/updateDialogState", state);
      },

      get() {
        return this.$store.state.searchInvoiceCategories.showDialog;
      },
    },

    search_target: {
      set(state) {
        return this.$store.commit("searchInvoiceCategories/updateSearchTarget", state);
      },

      get() {
        return this.$store.state.searchInvoiceCategories.search_target;
      },
    },
  },
};
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

.el-dialog .dialogInput {
  border-radius: 0 !important;
}

.side-label-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
.side-label {
  padding-top: 0.65rem;
  padding-bottom: 0;
  padding-left: 1rem;
  color: #21798d;
}
</style>