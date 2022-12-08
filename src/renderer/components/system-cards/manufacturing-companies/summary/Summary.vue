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
      <el-dialog :visible.sync="createDialog" class="p-0 m-0">
        <div>
          <el-container
            class="container box-shadow ma-4 mb-0 py-3 invoice-table"
          >
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
                        :rows="7"
                        v-model="form.details"
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
        details: ""
      }
    };
  },
  methods: {
    openCreateDialog() {
      this.createDialog = true;
      this.$store
        .dispatch("systemCards/manuFacturing/suggestCode")
        .then(res => {
          this.form.code = res.data.data;
        });
    },
    create() {
      this.$store
        .dispatch("systemCards/manuFacturing/create", this.form)
        .then(() => {
          this.createDialog = false;
          this.$store.dispatch(
            "systemCards/manuFacturing/fetchRecords",
            this.searchParams
          );
          this.$notify({
            title: "Success",
            message: "manuFacturing Created",
            type: "success"
          });
        })
        .catch(err => {
          this.$notify.error({
            message: err.response.data.Message
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
