<template>
  <div class="text-center container ma-4 py-2 mt-0 invoice-summary">
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
        @click="openCreateDialog(true)"
        >{{ $t("new-f2") }}</el-button
      >
      <el-button size="mini" class="mb-1 btn-grey">{{
        $t("print-f4")
      }}</el-button>
      <el-dialog :visible.sync="createDialog" width="70%">
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
                          <span>{{ $t("category-number") }}</span>
                        </td>
                        <td>
                          <el-input class="" v-model="form.code"></el-input>
                        </td>
                      </tr>
                      <tr>
                        <td class="popup-label">
                          <span>{{ $t("category-name") }}</span>
                        </td>
                        <td>
                          <el-input class="" v-model="form.name"></el-input>
                        </td>
                      </tr>
                      <tr>
                        <td class="popup-label">
                          <span>{{ $t("category-status") }}</span>
                        </td>
                        <td>
                          <el-input class="" v-model="form.status"></el-input>
                          <el-select
                            v-model="form.status"
                            class="width-full">
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
              </el-col>
            </el-row>
          </section>
          <div class="text-center container ma-4 py-2 mt-0 invoice-summary">
            <div
              class="
                justify-center
                mt-2
                action-buttons-nonGrown
                align-center align-baseline
              "
            >
              <el-button size="mini" class="mb-1 btn-blue" @click="create()">{{
                $t("save-f5")
              }}</el-button>
              <el-button
                size="mini"
                class="mb-1 btn-violet"
                @click="createDialog = false"
                >{{ $t("back-f6") }}</el-button
              >
              <el-button
                size="mini"
                class="mb-1 btn-grey"
                @click="createDialog = false"
                >{{ $t("print-f4") }}</el-button
              >
            </div>
          </div>
        </div>
      </el-dialog>
    </div>
  </div>
</template>
<script>
export default {
  name: "summary-section",
  data() {
    return {
      form: {
        status: "1",
        name: "",
        code: ""
      },
      createDialog: false
    };
  },
  methods: {
    openCreateDialog(visible) {
      this.createDialog = visible;
      this.$store
        .dispatch("systemCards/itemsCategorys/suggestCode")
        .then(res => {
          this.form.code = res.data.data;
        });
    },
    create() {
      this.$store
        .dispatch("systemCards/itemsCategorys/create", this.form)
        .then(() => {
          this.createDialog = false;
          this.$store.dispatch(
            "systemCards/itemsCategorys/fetchRecords",
            this.searchParams
          );
          this.$notify({
            title: "Success",
            message: "itemsCategorys Created",
            type: "success"
          });
        })
        .catch(err => {
          this.$notify.error({
            message: err.response.data.message
          });
        });
    }
  }
};
</script>
