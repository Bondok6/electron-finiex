<template>
  <el-dialog :visible.sync="showDialog" width="70%" @close="closeDialog">
    <div>
      <section
        class="mb-0 box-shadow px-2 py-3 invoice-table container"
        style="border-radius: 10px"
      >
        <el-row>
          <el-col :xs="24" :md="18" class="px-15-lg">
            <el-form label-position="top">
              <table style="width: 100%">
                <tbody>
                <tr>
                  <td class="popup-label">
                    <span>{{ $t("group-number") }}</span>
                  </td>
                  <td class="input-padding">
                    <el-input class="" v-model="form.code"></el-input>
                  </td>
                </tr>

                <tr>
                  <td class="popup-label">
                    <span>{{ $t("group-name") }}</span>
                  </td>
                  <td class="input-padding">
                    <el-input class="" v-model="form.name"></el-input>
                  </td>
                </tr>
                <tr>
                  <td class="popup-label">
                    <span>{{ $t("customer-type") }}</span>
                  </td>
                  <td class="input-padding">
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
          </el-col>
        </el-row>
      </section>
      <div class="text-center container py-2 mt-0 invoice-summary">
        <div
          class="
            justify-center
            action-buttons-nonGrown
            align-center align-baseline
          "
        >
          <el-button size="mini" class="mb-1 btn-blue" @click="save">{{
              $t("save-f5")
            }}</el-button>
          <el-button size="mini" class="mb-1 btn-red" v-if="editMode" @click="deleteRecord">{{
              $t("delete-f8")
            }}</el-button>
          <el-button
            size="mini"
            class="mb-1 btn-violet"
            @click="closeDialog()"
          >{{ $t("back-f6") }}</el-button
          >
          <el-button size="mini" class="mb-1 btn-grey">{{
              $t("print-f4")
            }}</el-button>
        </div>
      </div>
    </div>
  </el-dialog>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "supplierGroup",
  props: {
    singleRecord: Object
  },
  data() {
    return {
      form: {
        name: "",
        code: "",
        status: "",
      }
    };
  },

  methods: {
    ...mapMutations({
      updateDialogState: "suppliersManagement/supplierGroup/updateDialogState",
      setEditMode: "suppliersManagement/supplierGroup/setEditMode"
    }),
    closeDialog() {
      this.updateDialogState(false);
      this.setEditMode(false);
      this.form = {
        name: "",
        code: "",
        status: "",
      };
    },
    save() {
      if (this.editMode) {
        //  Edit Mode
        this.$store
          .dispatch("suppliersManagement/supplierGroup/update", this.form)
          .then(() => {
            this.closeDialog();
            this.$message.success("Group Updated Successfully");
            this.$store.dispatch("suppliersManagement/supplierGroup/fetchRecords" , this.searchParams);
          });
      } else {
        // Create Mode
        this.$store
          .dispatch("suppliersManagement/supplierGroup/create", this.form)
          .then(() => {
            this.closeDialog();
            this.$message.success("Group Created Successfully");
            this.$store.dispatch("suppliersManagement/supplierGroup/fetchRecords" , this.searchParams);
          });
      }
    },
    deleteRecord() {
      this.$store
        .dispatch("suppliersManagement/supplierGroup/delete",{id : this.form.id})
        .then(() => {
          this.closeDialog();
          this.$message.success("Group Deleted Successfully");
          this.$store.dispatch("suppliersManagement/supplierGroup/fetchRecords" , this.searchParams);
        });
    }
  },

  computed: {
    inCreationMode() {
      return this.showDialog && !this.editMode;
    },
    ...mapState({
      editMode: state => state.suppliersManagement.supplierGroup.editMode,
      dialogState: state => state.suppliersManagement.supplierGroup.dialogState,
      searchParams : state => state.suppliersManagement.supplierGroup.searchParams
    }),
    showDialog: {
      set(state) {
        return this.updateDialogState(state);
      },
      get() {
        return this.dialogState;
      }
    }
  },

  watch: {
    singleRecord: {
      handler(newVal) {
        if (this.editMode) {
          this.form = { ...this.form, ...newVal };
        } else {
        }
      },
      immediate: true,
      deep: true
    },
    inCreationMode(newVal) {
      if (newVal) {
        this.$store
          .dispatch("suppliersManagement/supplierGroup/fetchMaxCode")
          .then(response => {
            console.log("response", response);
            this.form.code = response.data.data;
          })
          .catch(error => {
            this.$message.error(error.response.data.message);
          });
      }
    }
  }
};
</script>
