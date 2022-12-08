<template>
  <el-container class="container ma-4 mt-0 mb-0 invoice-table">
    <el-table :data="data" style="width: 100%" stripe border max-height="750">
      <el-table-column
        align="center"
        width="40"
        type="index"
        :label="$t('id')"
      />
      <el-table-column align="center" :label="$t('employee-number')">
        <template slot-scope="scope">
          <button
            @click="getSingleDirver(scope.row.id)"
            style="background: transparent; border: none"
          >
            <span>{{ scope.row.empNo }}</span>
          </button>
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        prop="empName"
        :label="$t('employee-name')"
      />
      <el-table-column
        align="center"
        prop="carType"
        :label="$t('vehicle-type')"
      />
    </el-table>
    <el-dialog
      :visible.sync="dialogEditDriver"
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
                        <el-input class="" v-model="form.ownerName"></el-input>
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
                          type="date"
                          placeholder="2020-10-15"
                          format="yyyy-MM-dd"
                          Value-format="yyyy-MM-dd"
                          v-model="form.licenseDate"
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
            <el-button size="mini" class="mb-1 btn-blue" @click="editDriver">{{
              $t("save-f5")
            }}</el-button>
            <el-button size="mini" class="mb-1 btn-red" @click="deleteDriver">{{
              $t("delete-f8")
            }}</el-button>
            <el-button
              size="mini"
              class="mb-1 btn-violet"
              @click="dialogEditDriver = false"
              >{{ $t("back-f6") }}</el-button
            >
            <el-button size="mini" class="mb-1 btn-grey">{{
              $t("print-f4")
            }}</el-button>
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
      default: []
    }
  },
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
        licenseDate: "",
        id: ""
      },
      dialogEditDriver: false
    };
  },
  computed: {
    ...mapState({
      searchParams: state => state.systemCards.driversData.searchParams,
      records: state => state.systemCards.employeesData.records
    })
  },
  methods: {
    getSingleDirver(driverID) {
      this.$store
        .dispatch("systemCards/driversData/fetchSingleRecord", {
          id: driverID
        })
        .then(res => {
          this.form = res.data.data;
          this.dialogEditDriver = true;
          this.$store.dispatch("systemCards/employeesData/fetchRecords");
        })
        .catch(err => {
          this.$message.error(err.response.data.message);
        });
    },
    deleteDriver() {
      this.$store
        .dispatch("systemCards/driversData/delete", {
          id: this.form.id
        })
        .then(_ => {
          this.$message.success("deleted Successfully");
          this.$store.dispatch(
            "systemCards/driversData/fetchRecords",
            this.searchParams
          );
        })
        .catch(err => {
          this.$message.error(err.response.data.message);
        })
        .finally(() => {
          this.dialogEditDriver = false;
        });
    },
    editDriver() {
      this.$store
        .dispatch("systemCards/driversData/update", this.form)
        .then(res => {
          this.$message.success("Updated Successfully");
          this.$store.dispatch(
            "systemCards/driversData/fetchRecords",
            this.searchParams
          );
        })
        .catch(err => {
          this.$message.error(err.response.data.message);
        })
        .finally(() => {
          this.dialogEditDriver = false;
        });
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
        licenseDate: "",
        id: ""
      };
    }
  }
};
</script>
