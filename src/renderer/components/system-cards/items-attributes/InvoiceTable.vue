<template>
  <el-container class="container ma-4 mt-0 mb-0 invoice-table">
    <el-table :data="data" style="width: 100%" stripe border max-height="750">
      <el-table-column
        align="center"
        type="index"
        width="40"
        :label="$t('id')"
      />
      <el-table-column
        align="center"
        prop="attribute_number"
        :label="$t('attribute-number')"
      >
        <template slot-scope="scope">
          <button
            @click="openEditDialog(scope.row.id)"
            style="background: transparent; border: none"
          >
            <span>{{ scope.row.code }}</span>
          </button>
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        prop="name"
        :label="$t('attribute-name')"
      />
    </el-table>
    <el-dialog :visible.sync="editDialog" @close="closeDialog">
      <div>
        <el-container class="container box-shadow mb-0 py-3 invoice-table">
          <el-form
            label-position="left"
            label-width="100px"
            class="popup-fixed-asset"
            style=""
          >
            <table style="width: 100%">
              <tbody>
                <tr>
                  <td class="popup-label">
                    <span>{{ $t("attribute-number") }}</span>
                  </td>
                  <td>
                    <el-input v-model="form.code" class="" disabled />
                  </td>
                </tr>
                <tr>
                  <td class="popup-label">
                    <span>{{ $t("attribute-name") }}</span>
                  </td>
                  <td>
                    <el-input v-model="form.name" class="" />
                  </td>
                </tr>
                <tr>
                  <td class="popup-label">
                    <span>{{ $t("attribute-case") }}</span>
                  </td>
                  <td>
                    <el-select v-model="form.status" class="width-full">
                      <el-option
                        :label="$t('activated')"
                        :value="1"
                      ></el-option>
                      <el-option
                        :label="$t('deactivated')"
                        :value="0"
                      ></el-option>
                    </el-select>
                  </td>
                </tr>
              </tbody>
            </table>
          </el-form>
        </el-container>
      </div>
      <div class="text-center py-2 mt-0 container invoice-summary">
        <div
          class="
      justify-center
      mt-2
      action-buttons-nonGrown
      align-center align-baseline
    "
        >
          <el-button size="mini" class="mb-1 btn-violet" @click="edit">{{
            $t("save-f5")
          }}</el-button>
          <el-button size="mini" class="mb-1 btn-red" @click="deleteRecord">{{
            $t("delete-f8")
          }}</el-button>
          <el-button
            size="mini"
            class="mb-1 btn-violet"
            @click="editDialog = false"
            >{{ $t("back-f6") }}</el-button
          >
          <el-button size="mini" class="mb-1 btn-grey">{{
            $t("print-f4")
          }}</el-button>
        </div>
      </div>
    </el-dialog>
  </el-container>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      editDialog: false,
      form: {
        code: "",
        name: "",
        status: null,
        id: null
      }
    };
  },
  methods: {
    openEditDialog(id) {
      this.editDialog = true;
      this.$store
        .dispatch("systemCards/itemsAttributes/fetchSingleRecord", {
          id
        })
        .then(res => {
          this.form = res.data.data;
          this.editDialog = true;
        })
        .catch(err => {
          this.$message.error(err.response.data.Message);
        });
    },
    edit() {
      this.$store
        .dispatch("systemCards/itemsAttributes/update", this.form)
        .then(res => {
          this.$message.success("itemsAttributes Updated Successfully");
          this.$store.dispatch(
            "systemCards/itemsAttributes/fetchRecords",
            this.searchParams
          );
        })
        .catch(err => {
          this.$message.error(err.response.data.Message);
        })
        .finally(() => {
          this.editDialog = false;
        });
    },
    deleteRecord() {
      this.$store
        .dispatch("systemCards/itemsAttributes/delete", {
          id: this.form.id
        })
        .then(_ => {
          this.$message.success("deleted Successfully");
          this.$store.dispatch(
            "systemCards/itemsAttributes/fetchRecords",
            this.searchParams
          );
        })
        .catch(err => {
          this.$message.error(err.response.data.message);
        })
        .finally(() => {
          this.editDialog = false;
        });
    },
    closeDialog() {
      this.form = {
        code: "",
        name: "",
        status: null,
        id: null
      };
    }
  }
};
</script>
<style lang="scss" scoped>
.popup-fixed-asset {
  margin-right: 10px;
  width: 65%;
}
@media (max-width: 768px) {
  .popup-fixed-asset {
    width: 100%;
  }
}
</style>
