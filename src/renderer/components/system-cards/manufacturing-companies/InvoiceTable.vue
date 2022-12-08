<template>
  <el-container class="container ma-4 mt-0 mb-0 invoice-table">
    <el-table :data="data" style="width: 100%" stripe border max-height="250">
      <el-table-column
        align="center"
        tupe="index"
        width="40"
        :label="$t('id')"
      />
      <el-table-column align="center" prop="code" :label="$t('company-number')">
        <template slot-scope="scope">
          <button
            @click="openEditDialog(scope.row.id)"
            style="background: transparent; border: none"
          >
            <span>{{ scope.row.code }}</span>
          </button>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="name" :label="$t('company-name')" />
    </el-table>

    <el-dialog :visible.sync="editDialog">
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
                    <span>{{ $t("company-number") }}</span>
                  </td>
                  <td>
                    <el-input v-model="form.code" class="" />
                  </td>
                </tr>
                <tr>
                  <td class="popup-label">
                    <span>{{ $t("company-name") }}</span>
                  </td>
                  <td>
                    <el-input v-model="form.name" class="" />
                  </td>
                </tr>
                <tr>
                  <div class="popup-label notes-label">
                    <span>{{ $t("notes") }}</span>
                  </div>
                  <td>
                    <el-input
                      class="notes-input"
                      type="textarea"
                      v-model="form.details"
                      :rows="7"
                      :placeholder="$t('notes')"
                    >
                    </el-input>
                  </td>
                </tr>
              </tbody>
            </table>
          </el-form>
        </el-container>
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
            <el-button size="mini" class="mb-1 btn-violet" @click="editDialog = false">{{
              $t("back-f6")
            }}</el-button>
            <el-button size="mini" class="mb-1 btn-grey">{{
              $t("print-f4")
            }}</el-button>
          </div>
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
  data: function() {
    return {
      editDialog: false,

      form: {
        code: "",
        name: "",
        details: "",
        id: ""
      }
    };
  },

  methods: {
    openEditDialog(id) {
      this.editDialog = true;
      this.$store
        .dispatch("systemCards/manuFacturing/fetchSingleRecord", {
          id
        })
        .then(res => {
          this.form = res.data.data;
          this.editDialog = true;
        })
        .catch(err => {
          this.$message.error(err.response.data.message);
        });
    },
    edit() {
      this.$store
        .dispatch("systemCards/manuFacturing/update", this.form)
        .then(res => {
          this.$message.success("manuFacturing Updated Successfully");
          this.$store.dispatch(
            "systemCards/manuFacturing/fetchRecords",
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
      this.$confirm(this.$t("message-when-delete-record"), "Warning", {
        confirmButtonText: this.$t("delete"),
        cancelButtonText: this.$t("cancel"),
        type: "warning",
        center: true,
        customClass: "confirmBox"
      })
        // after trigger confirm btn
        .then(() => {
          this.$store
            .dispatch("systemCards/manuFacturing/delete", {
              id: this.form.id
            })
            .then(_ => {
              this.$message.success("deleted Successfully");
              this.$store.dispatch(
                "systemCards/manuFacturing/fetchRecords",
                this.searchParams
              );
            })
            .catch(err => {
              this.$message.error(err.response.data.message);
            }) .finally(() => {
            this.editDialog = false;
          });
        })
        // after trigger cancel btn
        .catch(er => {
          this.$message({
            type: "info",
            message: "Delete canceled"
          });
        });




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
.notes-label {
  margin: 0;
  width: 100%;
  padding: 5px 0;
}
</style>
