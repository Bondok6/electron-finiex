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
        prop="code"
        :label="$t('classification-number')"
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
        :label="$t('classification-name')"
      >
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
            <table style="width: 100%; padding-bottom: 40px">
              <tbody>
                <tr>
                  <td class="popup-label">
                    <span>{{ $t("classification-number") }}</span>
                  </td>
                  <td>
                    <el-input v-model="form.code" class="" />
                  </td>
                </tr>
                <tr>
                  <td class="popup-label">
                    <span>{{ $t("sub-class-name") }}</span>
                  </td>
                  <td>
                    <el-input v-model="form.name" class="" />
                  </td>
                </tr>
                <tr>
                  <td class="popup-label">
                    <span>{{ $t("classification-name") }}</span>
                  </td>
                  <td>
                    <el-select
                      class="width-full"
                      v-model="form.parentNo"
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
                          style="float: right;
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
                    <span>{{ $t("classification-state") }}</span>
                  </td>
                  <td>
                    <el-select
                      :placeholder="$t('without')"
                      v-model="form.status"
                      class="width-full"
                    >
                      <el-option
                        :label="$t('active')"
                        :value="1"
                      ></el-option>
                      <el-option
                        :label="$t('not-active')"
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

    <!-- nested dialog -->
    <!-- <el-dialog :visible.sync="nestedNestedDialog" class="p-0 m-0">
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
                    <span>{{ $t("classification-number") }}</span>
                  </td>
                  <td>
                    <el-input v-model="form.number" class="" />
                  </td>
                </tr>
                <tr>
                  <td class="popup-label">
                    <span>{{ $t("classification-name") }}</span>
                  </td>
                  <td>
                    <el-input v-model="form.name" class="" />
                  </td>
                </tr>
                <tr>
                  <td class="popup-label">
                    <span>{{ $t("classification-state") }}</span>
                  </td>
                  <td>
                    <el-input v-model="form.name" class="" />
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
            <el-button
              size="mini"
              class="mb-1 btn-violet"
              @click="closeNestedDialog()"
              >{{ $t("save-f5") }}</el-button
            >
            <el-button
              size="mini"
              class="mb-1 btn-red"
              @click="closeNestedDialog()"
              >{{ $t("delete-f8") }}</el-button
            >
            <el-button
              size="mini"
              class="mb-1 btn-violet"
              @click="closeNestedDialog()"
              >{{ $t("back-f6") }}</el-button
            >
            <el-button
              size="mini"
              class="mb-1 btn-grey"
              @click="closeNestedDialog()"
              >{{ $t("print-f4") }}</el-button
            >
          </div>
        </div>
      </div>
    </el-dialog> -->
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
        name: "",
        code: "",
        status: "",
        id: "",
        parentNo: ""
      }
    };
  },

  computed: {
    ...mapState({
      listItems: state => state.systemCards.itemsSubCategorys.listItems
    })
  },

  methods: {
    async remoteMethod(query) {
      this.loading = true;
      try {
        await this.$store.dispatch(
          "systemCards/itemsSubCategorys/fetchItemsCategorys",
          {
            searchString: query
          }
        );

        this.loading = false;
      } catch (e) {
        this.$message.error(e.response.data.message);
      }
    },
    openEditDialog(id) {
      this.editDialog = true;
      this.$store
        .dispatch("systemCards/itemsSubCategorys/fetchSingleRecord", {
          id
        })
        .then(res => {
          this.form = {...res.data.data , status : +res.data.data.status};
          this.editDialog = true;
        })
        .catch(err => {
          this.$message.error(err.response.data.message);
        });
    },
    edit() {
      this.$store
        .dispatch("systemCards/itemsSubCategorys/update", this.form)
        .then(res => {
          this.$message.success("itemsSubCategorys Updated Successfully");
          this.$store.dispatch(
            "systemCards/itemsSubCategorys/fetchRecords",
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
    deleteRecord() {
      this.$store
        .dispatch("systemCards/itemsSubCategorys/delete", {
          id: this.form.id
        })
        .then(_ => {
          this.$message.success("deleted Successfully");
          this.$store.dispatch(
            "systemCards/itemsSubCategorys/fetchRecords",
            this.searchParams
          );
        })
        .catch(err => {
          this.$message.error(err.response.data.message);
        })
        .finally(() => {
          this.editDialog = false;
        });
    }
  }
};
</script>
<style scoped lang="scss">
.hidden-table {
  height: 0px;
}

.popup-fixed-asset {
  margin-right: 10px;
  width: 65%;
}
.class-name-add {
  color: red;
}
.list {
  width: 100%;
  justify-self: right;
}
@media (max-width: 768px) {
  .popup-fixed-asset {
    width: 100%;
  }
}
</style>
