<template>
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
        class="mb-1"
        type="primary"
        @click="openCreateDialog"
        >{{ $t("new-f2") }}</el-button
      >
      <el-button size="mini" class="mb-1 btn-grey">{{
        $t("print-f4")
      }}</el-button>
      <el-dialog :visible.sync="createDialog">
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
                      <el-input v-model="form.code" />
                    </td>
                  </tr>
                  <tr>
                    <td class="popup-label">
                      <span>{{ $t("sub-class-name") }}</span>
                    </td>
                    <td>
                      <el-input v-model="form.name" />
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
                      <span>{{ $t("classification-state") }}</span>
                    </td>
                    <td>
                      <el-select v-model="form.status" class="width-full">
                        <el-option :label="$t('active')" :value="1"></el-option>
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
              <el-button size="mini" class="mb-1 btn-violet" @click="create">{{
                $t("save-f5")
              }}</el-button>
              <!-- @click="nestedDialog(false)" -->

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
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "summary-section",
  data() {
    return {
      createDialog: false,
      loading: false,
      form: {
        code: "",
        status: 1,
        name: "",
        parentNo: ""
      }
    };
  },

  computed: {
    ...mapState({
      listItems: state => state.systemCards.itemsSubCategorys.listItems
    })
    // nestedNestedDialog: {
    //   set(state) {
    //     return this.$store.commit("subcategories_nesteddialog/nestedNestedDialog", state);
    //   },
    //   get() {
    //      return this.$store.state.subcategories_nesteddialog.nestedNestedDialog
    //   },
    // },
  },
  methods: {
    openCreateDialog() {
      this.createDialog = true;
      this.$store
        .dispatch("systemCards/itemsSubCategorys/suggestCode")
        .then(({ data }) => {
          this.form.code = data.data;
        });
    },
    async remoteMethod(query) {
      this.loading = true;
      try {
        await this.$store.dispatch(
          "systemCards/itemsSubCategorys/fetchItemsCategorys",
          { searchString: query }
        );
        this.loading = false;
      } catch (e) {
        this.$message.error(e.response.data.message);
      }
    },
    create() {
      this.$store
        .dispatch("systemCards/itemsSubCategorys/create", this.form)
        .then(() => {
          this.createDialog = false;
          this.$store.dispatch(
            "systemCards/itemsSubCategorys/fetchRecords",
            this.searchParams
          );
          this.$notify({
            title: "Success",
            message: "items Sub Categorys Created",
            type: "success"
          });
        })
        .catch(err => {
          this.$notify.error({
            message: err.response.data.message
          });
        });
    }
    // nestedDialog(state) {
    //   this.$store.commit("subcategories_nesteddialog/updateDialogState", state);
    // },

    // closeNestedDialog() {
    //   this.$store.commit(
    //     "subcategories_nesteddialog/nestedNestedDialog",
    //     false
    //   );
    // },
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
