<template>
  <el-container class="container ma-4 mt-0 mb-0 invoice-table">
    <el-table :data="data" style="width: 100%" stripe border max-height="750">
      <el-table-column
        align="center"
        type="index"
        width="40"
        :label="$t('id')"
      />
      <el-table-column
        align="center"
        prop="code"
        :label="$t('category-number')"
      >
        <template slot-scope="scope">
          <button
            @click="openEditDialog(scope.row.id)"
            style="background: transparent; border: none;"
          >
            <span>{{ scope.row.code }}</span>
          </button>
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        prop="name"
        :label="$t('category-name')"
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
              @click="editDialog = false"
              >{{ $t("back-f6") }}</el-button
            >
            <el-button
              size="mini"
              class="mb-1 btn-grey"
              @click="editDialog = false"
              >{{ $t("print-f4") }}</el-button
            >
          </div>
        </div>
      </div>
    </el-dialog>
  </el-container>
</template>

<script>
export default {
  name: "invoice",

  props: {
    data: {
      type: Array,
      default: []
    }
  },
  data: function() {
    return {
      form: {
        name: "",
        code: "",
        status: "",
        id: ""
      },
      editDialog: false
    };
  },
  methods: {
    openEditDialog(id) {
      this.editDialog = true;
      this.$store
        .dispatch("systemCards/itemsCategorys/fetchSingleRecord", {
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
    edit() {
      this.$store
        .dispatch("systemCards/itemsCategorys/update", this.form)
        .then(res => {
          this.$message.success("itemsCategorys Updated Successfully");
          this.$store.dispatch(
            "systemCards/itemsCategorys/fetchRecords",
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
      this.$store
        .dispatch("systemCards/itemsCategorys/delete", {
          id: this.form.id
        })
        .then(_ => {
          this.$message.success("deleted Successfully");
          this.$store.dispatch(
            "systemCards/itemsCategorys/fetchRecords",
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
