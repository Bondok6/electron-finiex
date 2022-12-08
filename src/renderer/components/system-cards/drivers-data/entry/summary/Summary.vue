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
        @click="openDialogCreate()"
        >{{ $t("new-f2") }}</el-button
      >
      <el-button size="mini" class="mb-1 btn-grey">{{
        $t("print-f4")
      }}</el-button>
      <el-dialog
        :visible.sync="dialogCreateDriver"
        width="70%"
        @close="closeDialog"
      >
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
                          <span>{{ $t("vehicle-owner") }}</span>
                        </td>
                        <td>
                          <el-input
                            class=""
                            v-model="form.ownerName"
                          ></el-input>
                        </td>
                      </tr>
                      <tr>
                        <td class="popup-label">
                          <span>{{ $t("employee") }}/{{ $t("driver") }}</span>
                        </td>
                        <td>
                          <el-select
                            class="width-full"
                            v-model="form.empID"
                            :placeholder="$t('search')"
                            :loading="loading"
                            :remote-method="remoteMethod"
                            filterable
                            remote
                          >
                            <el-option
                              v-for="item in records"
                              :key="item.id"
                              :value="item.employeeCode"
                              :label="item.employeeName"
                            >
                              <span style="float: left">{{
                                item.employeeName
                              }}</span>
                              <span
                                style="
                                  float: right;
                                  color: #8492a6;
                                  font-size: 13px;
                                "
                                >{{ item.accId }}</span
                              >
                            </el-option>
                          </el-select>
                        </td>
                      </tr>
                      <tr>
                        <td class="popup-label">
                          <span>{{ $t("vehicle-type") }}</span>
                        </td>
                        <td>
                          <el-input class="" v-model="form.type"></el-input>
                        </td>
                      </tr>
                      <tr>
                        <td class="popup-label">
                          <span>{{ $t("vehicle-color") }}</span>
                        </td>
                        <td>
                          <el-input v-model="form.color" class="" />
                        </td>
                      </tr>
                      <tr>
                        <td class="popup-label">
                          <span>{{ $t("vehicle-model") }}</span>
                        </td>
                        <td>
                          <el-input v-model="form.model" class="" />
                        </td>
                      </tr>
                      <tr>
                        <td class="popup-label">
                          <span>{{ $t("structure-No") }}</span>
                        </td>
                        <td>
                          <el-input v-model="form.shasehNo" class="" />
                        </td>
                      </tr>
                      <tr>
                        <td class="popup-label">
                          <span>{{ $t("bord-number") }}</span>
                        </td>
                        <td>
                          <el-input v-model="form.plateNo" class="" />
                        </td>
                      </tr>
                      <tr>
                        <td class="popup-label">
                          <span>{{ $t("license-date") }}</span>
                        </td>
                        <td>
                          <el-date-picker
                            class="width-full"
                            placeholder="YYYY-MM-DD"
                            v-model="form.licenseDate"
                            type="date"
                            value-format="yyyy-MM-dd"
                          ></el-date-picker>
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
              <el-button
                size="mini"
                class="mb-1 btn-blue"
                @click="createDriver"
                >{{ $t("save-f5") }}</el-button
              >

              <el-button
                size="mini"
                class="mb-1 btn-violet"
                @click="dialogCreateDriver = false"
                >{{ $t("back-f6") }}</el-button
              >
            </div>
          </div>
        </div>
      </el-dialog>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "summary-section",
  data: function() {
    return {
      loading: false,
      form: {
        ownerName: "",
        empID: "",
        type: "",
        color: "",
        model: "",
        shasehNo: "",
        plateNo: "",
        licenseDate: ""
      },
      dialogCreateDriver: false
    };
  },
  computed: {
    ...mapState({
      records: state => state.systemCards.employeesData.records,
      searchParams : state => state.systemCards.employeesData.searchParams
    })
  },
  methods: {
    createDriver() {
      this.$store
        .dispatch("systemCards/driversData/create", this.form)
        .then(() => {
          this.dialogCreateDriver = false;
          this.$notify({
            type: "success",
            message: "Created successfully"
          });
         this.$store.dispatch("systemCards/driversData/fetchRecords", this.searchParams);
        })
        .catch(err => {
          this.$message.error(err.response.data.message);
        });
    },
    async openDialogCreate() {
      console.log("openDialogCreate");
      this.dialogCreateDriver = true;
      await this.$store.dispatch("systemCards/employeesData/fetchRecords");
    },
    closeDialog() {
      // reset form
      this.form = {
        ownerName: "",
        empID: "",
        type: "",
        color: "",
        model: "",
        shasehNo: "",
        plateNo: "",
        licenseDate: ""
      };
    },
    async remoteMethod(query) {
      this.loading = true;
      try {
        await this.$store.dispatch("systemCards/employeesData/fetchRecords", {
          searchString: query
        });

        this.loading = false;
      } catch (e) {
        this.$message.error(e.response.data.message);
      }
    }
  }
};
</script>