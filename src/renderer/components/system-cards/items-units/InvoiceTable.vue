<template>
  <el-container class="container ma-4 mt-0 mb-0 invoice-table">
    <el-table :data="data" style="width: 100%" border stripe max-height="750">
      <el-table-column
        align="center"
        type="index"
        width="40"
        :label="$t('id')"
      />
      <el-table-column
        align="center"
        prop="unit_number"
        :label="$t('unit-number')"
      >
        <template slot-scope="scope">
          <button
            @click="openEditDialog(scope.row.id)"
            style="background: transparent; border: none"
          >
            {{ scope.row.code }}
          </button>
        </template>
      </el-table-column>

      <el-table-column align="center" prop="name" :label="$t('unit-name')">
      </el-table-column>
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
            <table style="width: 100%; padding-bottom: 40px ">
              <tbody>
                <tr>
                  <td class="popup-label">
                    <span>{{ $t("unit-number") }}</span>
                  </td>
                  <td>
                    <el-input v-model="form.unitId" disabled class="" />
                  </td>
                </tr>
                <tr>
                  <td class="popup-label">
                    <span>{{ $t("unit-name") }}</span>
                  </td>
                  <td>
                    <el-input v-model="form.unitName" class="" />
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
                      :rows="7"
                      v-model="form.notes"
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
            class="justify-center
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
            <el-button size="mini" class="mb-1 btn-violet">{{
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
  data() {
    return {
      editDialog: false,
      form: {
        unitName: "",
        notes: "",
        id: "",
        unitId: ""
      }
    };
  },
  methods: {
    openEditDialog(id) {
      this.editDialog = true;
      this.$store
        .dispatch("systemCards/units/fetchSingleRecord", {
          id
        })
        .then(({ data }) => {
          let { mdcode, mdcodeId, mname, mnotes } = data.data;
          this.form = {
            unitName: mname,
            notes: mnotes,
            id: mdcode,
            unitId: mdcodeId
          };
          this.editDialog = true;
        })
        .catch(err => {
          this.$message.error(err.response.data.message);
        });
    },
    edit() {
      this.$store
        .dispatch("systemCards/units/update", this.form)
        .then(res => {
          this.$message.success("units Updated Successfully");
          this.$store.dispatch(
            "systemCards/units/fetchRecords",
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
            .dispatch("systemCards/units/delete", {
              id: this.form.unitId
            })
            .then(_ => {
              this.$message.success("deleted Successfully");
              this.$store.dispatch(
                "systemCards/units/fetchRecords",
                this.searchParams
              );
            })
            .catch(err => {
              this.$message.error(err.response.data.message);
            })
            .finally(() => {
              this.editDialog = false;
            });
        })
        // after trigger cancal btn
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
.notes-label {
  margin: 0 !important;
  width: 100%;
  padding: 5px 0;
}

.invisible-tr {
  visibility: hidden;
}
.extra-writing-space {
  el-input {
    height: max-content;
  }
}
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
