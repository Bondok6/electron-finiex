<template>
  <el-container class="container ma-4 mt-0 mb-0 invoice-table">
    <el-table :data="data" style="width: 100%" stripe border max-height="250">
      <el-table-column
        align="center"
        type="index'"
        width="40"
        :label="$t('id')"
      />
      <el-table-column align="center" :label="$t('currency-number')">
        <template slot-scope="scope">
          <button
            @click="openEditDialog(scope.row.currencyId)"
            style="background: transparent; border: none;"
          >
            <span>{{ scope.row.currencyId }}</span>
          </button>
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        prop="currencyName"
        :label="$t('currency-name')"
      />
      <el-table-column
        align="center"
        prop="currencyCode"
        :label="$t('currency-symbol')"
      />
    </el-table>
    <el-dialog :visible.sync="editDialog" width="70%">
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
                          <el-option :value="0" :label="$t('local')">
                          </el-option>
                          <el-option :value="1" :label="$t('foreign')">
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
            <el-button size="mini" class="mb-1 btn-blue" @click="edit">{{
              $t("save-f5")
            }}</el-button>
            <el-button size="mini" class="mb-1 btn-red" @click="deleteRecord">{{
              $t("delete-f8")
            }}</el-button>
            <el-button
              size="mini"
              class="mb-1 btn-violet"
              @click="dialogTableVisible = false"
              >{{ $t("back-f6") }}</el-button
            >
          </div>
        </div>
      </div>
    </el-dialog>
  </el-container>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "invoice",
  props: {
    data: {
      type: Array,
      default: () => []
    }
  },
  data: function() {
    return {
      form: {
        currencyId: "",
        currencyName: "",
        currencyCode: "",
        currencyPart: "",
        transferRateGeneral: "",
        localOrForiegn: 1
      },
      editDialog: false
    };
  },
  computed: {
    ...mapState({
      searchParams: state => state.systemCards.currencyData.searchParams
    })
  },
  methods: {
    openEditDialog(id) {
      this.editDialog = true;
      this.$store
        .dispatch("systemCards/currencyData/fetchSingleRecord", {
          id
        })
        .then(res => {
          this.form = res.data.data;
          this.editDialog = true;
        })
        .catch(err => {
          this.$message.error(err.response.data.message);
        });
    },
    deleteRecord() {
      this.$store
        .dispatch("systemCards/currencyData/delete", {
          id: this.form.currencyId
        })
        .then(_ => {
          this.$message.success("deleted Successfully");
          this.$store.dispatch(
            "systemCards/currencyData/fetchRecords",
            this.searchParams
          );
        })
        .catch(err => {
          console.log(err.response);
          this.$message.error(err.response.data.Message);
        })
        .finally(() => {
          this.editDialog = false;
        });
    },
    edit() {
      this.$store
        .dispatch("systemCards/currencyData/update", this.form)
        .then(res => {
          this.$message.success("Updated Successfully");
          this.$store.dispatch(
            "systemCards/currencyData/fetchRecords",
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
