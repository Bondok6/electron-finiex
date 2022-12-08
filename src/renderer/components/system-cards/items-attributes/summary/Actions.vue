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
        <el-container class="container box-shadow ma-4 mb-0 py-3 invoice-table">
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
                    <el-input v-model="form.code" class="" />
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
                  <el-select v-model="form.status" class="width-full">
                    <el-option :label="$t('activated')" :value="1"></el-option>
                    <el-option
                      :label="$t('deactivated')"
                      :value="0"
                    ></el-option>
                  </el-select>
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
export default {
  data() {
    return {
      createDialog: false,
      form: {
        code: "",
        name: "",
        status: ""
      }
    }; 
  },
  methods: {
    openCreateDialog() {
      this.createDialog = true;
      this.$store
        .dispatch("systemCards/itemsAttributes/suggestCode")
        .then(res => {
          this.form.code = res.data.data;
        });
    },
    create() {
      this.$store
        .dispatch("systemCards/itemsAttributes/create", this.form)
        .then(() => {
          this.createDialog = false;
          this.$store.dispatch(
            "systemCards/itemsAttributes/fetchRecords",
            this.searchParams
          );
          this.$notify({
            title: "Success",
            message: "itemsAttributes Created",
            type: "success"
          });
        })
        .catch(err => {
          this.$notify.error({
            message: err.response.data.Message
          });
        });
    },
    closeDialog() {
      this.form = {
        code: "",
        name: "",
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
