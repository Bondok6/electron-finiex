<template>
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
    <el-dialog :visible.sync="createDialog" class="p-0 m-0"
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
            <el-button size="mini" class="mb-1 btn-violet" @click="create">{{
              $t("save-f5")
            }}</el-button>

            <el-button
              size="mini"
              class="mb-1 btn-violet"
              @click="createDialog = false"
              >{{ $t("back-f6") }}</el-button
            >
            <el-button size="mini" class="mb-1 btn-grey">{{
              $t("print-f4")
            }}</el-button>
          </div>
        </div>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      form: {
        code: "",
        name: "",
        parentID: "",
        status: ""
      },
      loading: false,
      createDialog: false
    };
  },
  computed: {
    ...mapState({
      listItems: state => state.systemCards.subItemsAttributes.listItems,
      searchParams: state => state.systemCards.subItemsAttributes.searchParams
    })
  },
  methods: {
    openCreateDialog() {
      this.createDialog = true;
      this.$store
        .dispatch("systemCards/subItemsAttributes/suggestCode")
        .then(({ data }) => {
          this.form.code = data.data;
        });
    },
    create() {
      this.$store
        .dispatch("systemCards/subItemsAttributes/create", this.form)
        .then(() => {
          this.createDialog = false;
          this.$store.dispatch(
            "systemCards/subItemsAttributes/fetchRecords",
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
            message: err.response.data.Message
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
        status: ""
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
