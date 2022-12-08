<template>
  <el-dialog
    @close="closeDialog"
    title=" "
    :visible.sync="showDialog"
    width="70%"
  >
    <span>
      <el-container class="d-block box-shadow mb-0 px-2 py-2">
        <el-row>
          <el-col :xs="24" :md="18" class="px-15-lg">
            <el-form
              class="width-full mb-8 pb-170"
              label-position="top"
              :model="form"
            >
              <table style="width: 100%">
                <tbody>
                  <tr>
                    <td class="popup-label">
                      <span>{{ $t("category-number") }}</span>
                    </td>
                    <td class="input-padding">
                      <el-input v-model="form.code"> </el-input>
                    </td>
                  </tr>
                  <tr>
                    <td class="popup-label">
                      <span>{{ $t("classification-name") }}</span>
                    </td>
                    <td class="input-padding">
                      <el-input v-model="form.name"> </el-input>
                    </td>
                  </tr>
                  <tr>
                    <td class="popup-label">
                      <span>{{ $t("category-type") }}</span>
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
                  <tr>
                    <td class="popup-label">
                      <span>مجموعة العملاء</span>
                    </td>
                    <td class="input-padding">
                      <el-select
                        class="width-full"
                        v-model="form.search"
                        :placeholder="$t('search')"
                        :loading="loading"
                        :remote-method="remoteMethodsFetchCustomerGroup"
                        filterable
                        remote
                        clearable
                        @change="handleChange"
                      >
                        <el-option
                          v-for="item in customerGroup"
                          :key="item.id"
                          :value="item.id"
                          :label="item.name"
                        >
                          <span style="float: left">{{ item.name }}</span>
                          <span
                            style="
                              float: right;
                              color: #8492a6;
                              font-size: 13px;
                            "
                            >{{ item.code }}</span
                          >
                        </el-option>
                      </el-select>
                    </td>
                  </tr>
                  <tr>
                    <td class="popup-label">
                      <span>تصنيفات العملاء</span>
                    </td>
                    <td class="input-padding">
                      <el-select
                        class="width-full"
                        v-model="form.parentID"
                        :placeholder="$t('search')"
                        :loading="loading"
                        clearable
                      >
                        <el-option
                          v-for="item in childern"
                          :key="item.id"
                          :value="item.id"
                          :label="item.name"
                        >
                        </el-option>
                      </el-select>
                    </td>
                  </tr>
                </tbody>
              </table>
            </el-form>
          </el-col>
        </el-row>
      </el-container>
    </span>
    <span slot="footer" class="dialog-footer">
      <div
        class="
          justify-center
          mt-2
          action-buttons-nonGrown
          align-center align-baseline
        "
      >
        <el-button @click="save" size="mini" class="mb-1 btn-blue">{{
          $t("save-f5")
        }}</el-button>
        <el-button size="mini" class="mb-1 btn-red">{{
          $t("delete-f8")
        }}</el-button>

        <el-button size="mini" class="mb-1 btn-violet">{{
          $t("back-f6")
        }}</el-button>
        <el-button @click="closeDialog()" size="mini" class="mb-1 btn-grey">{{
          $t("print-f4")
        }}</el-button>
      </div>
    </span>
  </el-dialog>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "clienttype",
  props: {
    singleRecord: Object
  },
  data() {
    return {
      form: {
        code: "",
        name: "",
        status: "",
        search: "",
        parentID: ""
      },
      loading: false
    };
  },
  mounted() {
    this.$store.dispatch("customerManagement/globalList/fetchCustomerGroup"),
      this.$store
        .dispatch("customerManagement/customerClassification/fetchMaxCode")
        .then(res => {
          this.form.code = res.data.data;
        });
  },

  methods: {
    ...mapMutations({
      updateDialogState:
        "customerManagement/customerClassification/updateDialogState",
      setEditMode: "customerManagement/customerClassification/setEditMode"
    }),
    closeDialog() {
      this.updateDialogState(false);
      this.setEditMode(false);
      this.form = {
        code: "",
        name: "",
        status: "",
        search: "",
        parentID: ""
      };
    },
    handleChange() {
      this.$store.dispatch(
        "customerManagement/customerClassification/fetchChildern",
        this.form.search
      );
    },
    remoteMethodsFetchCustomerGroup(query) {
      this.loading = true;
      this.$store
        .dispatch("customerManagement/globalList/fetchCustomerGroup", {
          SearchString: query
        })
        .then(() => {
          this.loading = false;
        });
    },
    save() {
      if (this.editMode) {
        //  Edit Mode
        this.$store
          .dispatch(
            "customerManagement/customerClassification/update",
            this.form
          )
          .then(() => {
            this.closeDialog();
            this.$message.success("Group Updated Successfully");
            this.$store.dispatch(
              "customerManagement/customerClassification/fetchRecords",
              this.searchParams
            );
          });
      } else {
        // Create Mode
        this.$store
          .dispatch(
            "customerManagement/customerClassification/create",
            this.form
          )
          .then(() => {
            this.closeDialog();
            this.$message.success("Group Created Successfully");
            this.$store.dispatch(
              "customerManagement/customerClassification/fetchRecords",
              this.searchParams
            );
          });
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
          .dispatch("customerManagement/customerGroup/fetchMaxCode")
          .then(response => {
            this.form.code = response.data.data;
            console.log("code", this.form.code);
          })
          .catch(error => {
            this.$message.error(error.response.data.message);
          });
      }
    }
  },

  computed: {
    inCreationMode() {
      console.log("inCreationMode", this.showDialog && !this.editMode);
      return this.showDialog && !this.editMode;
    },
    ...mapState({
      editMode: state =>
        state.customerManagement.customerClassification.editMode,
      dialogState: state =>
        state.customerManagement.customerClassification.dialogState,
      searchParams: state =>
        state.customerManagement.customerClassification.searchParams,
      customerGroup: state => state.customerManagement.globalList.customerGroup,
      childern: state =>
        state.customerManagement.customerClassification.childern
    }),
    showDialog: {
      set(state) {
        return this.$store.commit(
          "customerManagement/customerClassification/updateDialogState",
          state
        );
      },
      get() {
        return this.dialogState;
      }
    }
  }
};
</script>
