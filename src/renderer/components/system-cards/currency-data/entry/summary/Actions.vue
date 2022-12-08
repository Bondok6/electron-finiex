<template>
  <div
    class="justify-center mt-2 action-buttons-nonGrown align-center align-baseline"
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
          style="border-radius:10px;"
        >
          <el-row>
            <el-col :xs="24" :md="18" class="px-15-lg">
              <el-form label-position="top">
                <table style="width: 100%">
                  <tbody>
                    <tr>
                      <td class="popup-label">
                        <span>{{ $t("currency-number") }}</span>
                      </td>
                      <td>
                        <el-input class="" v-model="form.currencyId"></el-input>
                      </td>
                    </tr>
                    <tr>
                      <td class="popup-label">
                        <span>{{ $t("currency-name") }}</span>
                      </td>
                      <td>
                        <el-input
                          class=""
                          v-model="form.currencyName"
                        ></el-input>
                      </td>
                    </tr>
                    <tr>
                      <td class="popup-label">
                        <span>{{ $t("change-currency") }}</span>
                      </td>
                      <td>
                        <el-input
                          class=""
                          v-model="form.currencyPart"
                        ></el-input>
                      </td>
                    </tr>
                    <tr>
                      <td class="popup-label">
                        <span>{{ $t("currency-symbol") }}</span>
                      </td>
                      <td>
                        <el-input v-model="form.currencyCode" class="" />
                      </td>
                    </tr>
                    <tr>
                      <td class="popup-label">
                        <span>{{ $t("currency-type") }}</span>
                      </td>
                      <td>
                        <el-select
                          class="width-full"
                          v-model="form.localOrForiegn"
                        >
                          <el-option value="0" :label="$t('local')">
                          </el-option>
                          <el-option value="1" :label="$t('foreign')">
                          </el-option>
                        </el-select>
                      </td>
                    </tr>
                    <tr>
                      <td class="popup-label">
                        <span>{{ $t("transfer-price") }}</span>
                      </td>
                      <td>
                        <el-input v-model="form.transferRateGeneral" class="" />
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
            class="justify-center mt-2 action-buttons-nonGrown align-center align-baseline"
          >
            <el-button size="mini" class="mb-1 btn-blue" @click="create">{{
              $t("save-f5")
            }}</el-button>

            <el-button
              size="mini"
              class="mb-1 btn-violet"
              @click="dialogTableVisible = false"
              >{{ $t("back-f6") }}</el-button
            >
            <el-button
              size="mini"
              class="mb-1 btn-grey"
              @click="dialogTableVisible = false"
              >{{ $t("print-f4") }}</el-button
            >
          </div>
        </div>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";
export default {
  data: function() {
    return {
      createDialog: false,
      form: {
        currencyId: "",
        currencyName: "",
        currencyCode: "",
        currencyPart: "",
        transferRateGeneral: "",
        localOrForiegn: null
      }
    };
  },
  methods: {
    openCreateDialog(visible) {
      this.createDialog = visible;
      this.$store.dispatch("systemCards/currencyData/suggestCode").then(res => {
        this.form.currencyId = res.data.data;
      });
    },
    create() {
      this.$store
        .dispatch("systemCards/currencyData/create", this.form)
        .then(() => {
          this.createDialog = false;
          this.$store.dispatch(
            "systemCards/currencyData/fetchRecords",
            this.searchParams
          );
          this.$notify({
            title: "Success",
            message: "currencyData  Created",
            type: "success"
          });
        })
        .catch(err => {
          this.$notify.error({
            message: err.response.data.message
          });
        });
    }
  },
  computed: {}
};
</script>
