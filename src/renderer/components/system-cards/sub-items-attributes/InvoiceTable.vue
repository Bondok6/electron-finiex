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
        prop="sub_category_number"
        :label="$t('sub-category-number')"
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
      <el-table-column
        align="center"
        prop="name"
        :label="$t('sub-category-name')"
      >
      </el-table-column>
    </el-table>
    <el-dialog :visible.sync="editDialog"
        @close="closeDialog"

    >
      <div>
        <el-container class="container box-shadow mb-0 py-3 invoice-table">
          <el-form
            label-position="left"
            label-width="100px"
            class="popup-fixed-asset"
            style=""
          >
            <table style="width: 100%; padding-bottom: 40px">
              <tbody>
                <tr>
                  <td class="popup-label">
                    <span>{{ $t("sub-category-number") }}</span>
                  </td>
                  <td>
                    <el-input v-model="form.code" class="" />
                  </td>
                </tr>
                <tr>
                  <td class="popup-label">
                    <span>{{ $t("sub-category-name") }}</span>
                  </td>
                  <td>
                    <el-input v-model="form.name" class="" />
                  </td>
                </tr>
                <tr>
                  <td class="popup-label">
                    <span>{{ $t("attribute-name") }}</span>
                  </td>
                  <td>
                    <el-select
                      class="width-full"
                      v-model="form.parentID"
                      :placeholder="$t('search')"
                      :loading="loading"
                      :remote-method="remoteMethod"
                      filterable
                      remote
                    >
                      <el-option
                        v-for="item in listItems"
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
import { mapState } from "vuex";
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
      loading: false,
      form: {
        code: "",
        name: "",
        parentID: "",
        status: "",
        id: ""
      }
    };
  },
  computed: {
    ...mapState({
      listItems: state => state.systemCards.subItemsAttributes.listItems,
      searchParams: state => state.systemCards.subItemsAttributes.searchParams
    })
  },
  methods: {
    openEditDialog(id) {
      this.editDialog = true;
      this.$store
        .dispatch("systemCards/subItemsAttributes/fetchSingleRecord", {
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
        .dispatch("systemCards/subItemsAttributes/update", this.form)
        .then(res => {
          this.$message.success("subItemsAttributes Updated Successfully");
          this.$store.dispatch(
            "systemCards/subItemsAttributes/fetchRecords",
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
          return this.$store
            .dispatch("systemCards/subItemsAttributes/delete", {
              id: this.form.id
            })
            .then(_ => {
              this.$message.success("deleted Successfully");
              this.$store.dispatch(
                "systemCards/subItemsAttributes/fetchRecords",
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
        // after trigger cancel btn
        .catch(er => {
          this.$message({
            type: "info",
            message: "Delete canceled"
          });
        });
    },
    async remoteMethod(query) {
      this.loading = true;
      try {
        await this.$store.dispatch(
          "systemCards/subItemsAttributes/fetchItemsCategorys",
          {
            searchString: query
          }
        );

        this.loading = false;
      } catch (e) {
        this.$message.error(e.response.data.Message);
      }
    },
    closeDialog() {
      this.form = {
        code: "",
        name: "",
        parentID: "",
        status: "",
        id: ""
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
