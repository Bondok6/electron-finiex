<template>
  <div>
    <el-dialog title="" :visible.sync="dialog" width="60%" @close="clearData">
      <span>
        <el-container class="d-block box-shadow mb-0 px-2 py-2">
          <el-form class="width-half" label-position="top" :model="form">
            <table style="width: 100%">
              <tbody>
                <tr>
                  <td class="popup-label pt-100">
                    {{ $t("cost-center-number") }}
                  </td>
                  <td>
                    <el-input v-model="form.costCenterCode" disabled>
                    </el-input>
                  </td>
                </tr>

                <tr>
                  <td class="popup-label">
                    {{ $t("main-center") }}
                  </td>
                  <td>
                    <el-input v-model="form.parentNo" disabled> </el-input>
                  </td>
                  <td>
                    <el-button
                      @click="updateCostCenterDialog(true)"
                      class="btn-dark-blue"
                      icon="el-icon-plus"
                    ></el-button>
                  </td>
                </tr>

                <tr>
                  <td class="popup-label">
                    {{ $t("cost-center-name") }}
                  </td>
                  <td>
                    <el-input v-model="form.costCenterName" class="">
                    </el-input>
                  </td>
                </tr>
              </tbody>
            </table>
          </el-form>
        </el-container>
      </span>
      <span slot="footer" class="dialog-footer">
        <div class="d-flex justify-end mb-2">
          <el-input
            v-model="form.details"
            class="notes-summary"
            type="textarea"
            :rows="7"
            :placeholder="$t('notes')"
          >
          </el-input>
        </div>
        <div>
          <el-button
            v-if="!isDialogEdit"
            size="mini"
            @click="createCostCenter()"
            class="mb-1 btn-blue"
            >{{ $t("save-f5") }}</el-button
          >
          <el-button
            v-else
            size="mini"
            @click="updateCostCenter()"
            class="mb-1 btn-blue"
            >{{ $t("save-f5") }}</el-button
          >
          <el-button
            v-if="isDialogEdit"
            size="mini"
            class="mb-1 btn-red"
            @click="deleteRecord()"
            >{{ $t("delete-f8") }}</el-button
          >
          <el-button
            size="mini"
            class="mb-1 btn-violet"
            @click="dialog = false"
            >{{ $t("back-f6") }}</el-button
          >

          <el-button size="mini" class="mb-1" type="warning">{{
            $t("tree-show")
          }}</el-button>
        </div>
      </span>
    </el-dialog>
    <!-- cost centers tree -->
    <cost-center-tree @node-selected="centerSelected"></cost-center-tree>
  </div>
</template>


<script>
import { mapMutations, mapState } from "vuex";
import CostCenterTree from "./costCenterTree.vue";
export default {
  name: "addcostcenter",
  components: {
    CostCenterTree
  },
  props: {
    costCenterCode: {
      type: Number
    }
  },
  data: function() {
    return {
      costCentersTree: false,

      form: {
        details: "",
        parentNo: null,
        costCenterName: "",
        costCenterCode: 0
      }
    };
  },

  methods: {
    createCostCenter() {
      let payload = {
        costCenterCode: this.costCenterCode,
        ...this.form,
        parentNo: this.form.parentNo?.split("---")[0] ?? null
      };
      this.$store
        .dispatch("systemCards/costCenterData/create", payload)
        .then(res => {
          this.$notify({
            group: "actions",
            type: "success",
            message: "cost center created successfully"
          });
          this.dialog = false;
          this.$store.dispatch(
            "systemCards/costCenterData/fetchRecords",
            this.searchParams
          );
        })
        .catch(err => {
          this.$message.error(err.response?.data?.message || err.message);
        });
    },
    centerSelected(costCenter) {
      this.form.parentNo = costCenter.id + "---" + costCenter.costCenterName;
    },
    ...mapMutations({
      updateCostCenterDialog: "costCenterTree/updateDialogState"
    }),
    clearData() {
      // clear data on close dialog to prevent data from previous dialog displayed :=> this is dialog Used in create and update cost center
      this.form = {
        details: "",
        parentNo: null,
        costCenterName: "",
        costCenterCode: 0
      };
      this.$store.commit("systemCards/costCenterData/setSingleRecord", {});
    },
    updateCostCenter() {
      let payload = {
        ...this.form,
        parentNo: this.form.parentNo?.split("---")[0] ?? null
      };
      this.$store
        .dispatch("systemCards/costCenterData/update", payload)
        .then(res => {
          this.$notify({
            group: "actions",
            type: "success",
            message: "cost center updated successfully"
          });
          this.dialog = false;
          this.$store.dispatch(
            "systemCards/costCenterData/fetchRecords",
            this.searchParams
          );
        })
        .catch(err => {
          this.$message.error(err.response?.data?.message || err.message);
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
        .then(() => {
          return this.$store.dispatch("systemCards/costCenterData/delete", {
            id: this.form.id
          });
        })
        .then(() => {
          this.dialog = false;
          this.$store.dispatch(
            "systemCards/costCenterData/fetchRecords",
            this.searchParams
          );

          this.$message({
            type: "success",
            message: "Delete completed"
          });
        })
        .catch(er => {
          this.$message({
            type: "info",
            message: "Delete canceled"
          });
        });
    }
  },

  computed: {
    dialog: {
      set(state) {
        return this.$store.commit("addcostcenter/updateDialogState", state);
      },

      get() {
        return this.$store.state.addcostcenter.dialog;
      }
    },
    ...mapState({
      searchParams: state => state.systemCards.costCenterData.searchParams,
      singleRecord: state => state.systemCards.costCenterData.singleRecord,
      isDialogEdit: state => {
        return (
          Object.keys(state.systemCards.costCenterData.singleRecord).length > 0
        );
      }
    })
  },
  watch: {
    singleRecord: {
      handler(newVal) {
        console.log(newVal);
        if (Object.keys(newVal).length > 0) {
          this.form = {
            ...newVal,
            parentNo: newVal.parentNo + "---" + newVal.costCenterName
          };
        }
      },
      deep: true
    },
    costCenterCode: {
      handler(newVal) {
        this.form.costCenterCode = newVal;
      },
      immediate: true
    }
  }
};
</script>