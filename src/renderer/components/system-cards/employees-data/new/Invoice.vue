<template>
  <div>
    <section class="mb-0 px-2 py-3">
      <el-row>
        <el-col :xs="24" :md="12" class="px-15-lg">
          <el-form label-position="top">
            <table style="width: 100%">
              <tbody>
                <tr>
                  <td class="popup-label">
                    <span>{{ $t("employee-number") }}</span>
                  </td>
                  <td class="input-padding">
                    <el-input class="" v-model="form.empCode"> </el-input>
                  </td>
                </tr>
                <tr>
                  <td class="popup-label">
                    <span>{{ $t("account-number") }}</span>
                  </td>
                  <td class="input-padding">
                    <el-input class="" v-model="form.accID">
                      <el-button slot="append" @click="openAccountTree(true)"
                        ><i class="el-icon-search"></i
                      ></el-button>
                    </el-input>
                  </td>
                </tr>

                <tr>
                  <td class="popup-label">
                    <span>{{ $t("employee-name") }}</span>
                  </td>
                  <td class="input-padding">
                    <el-input class="" v-model="form.empName"> </el-input>
                  </td>
                </tr>

                <tr>
                  <td class="popup-label">
                    <span>{{ $t("address") }}</span>
                  </td>
                  <td class="input-padding">
                    <el-input class="" v-model="form.address"> </el-input>
                  </td>
                </tr>
                <tr>
                  <td class="popup-label">
                    <span>{{ $t("e-mail") }}</span>
                  </td>
                  <td class="input-padding">
                    <el-input class="" v-model="form.email"> </el-input>
                  </td>
                </tr>
                <tr>
                  <td class="popup-label">
                    <span>{{ $t("nationality") }}</span>
                  </td>
                  <td class="input-padding">
                    <el-input class="" v-model="form.nationality"> </el-input>
                  </td>
                </tr>
                <tr>
                  <td class="popup-label">
                    <span>{{ $t("gender") }}</span>
                  </td>
                  <td class="input-padding">
                    <el-select
                      class="text-center width-full selectButton"
                      :placeholder="$t('choose')"
                      v-model="form.gender"
                    >
                      <el-option
                        v-for="gender in genderList"
                        :key="gender.id"
                        :value="gender.id"
                        :label="gender.name"
                      >
                      </el-option>
                    </el-select>
                  </td>
                </tr>
                <tr>
                  <td class="popup-label">
                    <span>{{ $t("social-status") }}</span>
                  </td>
                  <td class="input-padding">
                    <el-select
                      class="text-center width-full selectButton"
                      :placeholder="$t('choose')"
                      v-model="form.martialStat"
                    >
                      <el-option
                        v-for="gender in maritalStatusList"
                        :key="gender.id"
                        :value="gender.id"
                        :label="gender.name"
                      >
                      </el-option>
                    </el-select>
                  </td>
                </tr>
                <tr>
                  <td class="popup-label">
                    <span>{{ $t("job") }}</span>
                  </td>
                  <td class="input-padding">
                    <el-select
                      class="text-center width-full selectButton"
                      v-model="form.job"
                      :placeholder="$t('search')"
                      :loading="loading"
                      :remote-method="remoteMethod"
                      filterable
                      remote
                    >
                      <el-option
                        v-for="item in jobsList"
                        :key="item.id"
                        :value="item.id"
                        :label="item.name"
                      >
                      </el-option>
                    </el-select>
                  </td>
                </tr>
                <tr>
                  <td class="popup-label">
                    <span>{{ $t("specialization") }}</span>
                  </td>
                  <td class="input-padding">
                    <el-input class="" v-model="form.speciality"> </el-input>
                  </td>
                </tr>
                <tr>
                  <td class="popup-label">
                    <span>{{ $t("telephone-number") }}</span>
                  </td>
                  <td class="input-padding">
                    <el-input class="" v-model="form.phone"> </el-input>
                  </td>
                </tr>
                <tr>
                  <td class="popup-label">
                    <span>{{ $t("mobile-number") }}</span>
                  </td>
                  <td class="input-padding">
                    <el-input class="" v-model="form.mobile"> </el-input>
                  </td>
                </tr>
                <tr>
                  <td class="popup-label">
                    <span>{{ $t("id-number") }}</span>
                  </td>
                  <td class="input-padding">
                    <el-input class="" v-model="form.socialID"> </el-input>
                  </td>
                </tr>
                <tr>
                  <td class="popup-label">
                    <span>{{ $t("passport-number") }}</span>
                  </td>
                  <td class="input-padding">
                    <el-input class="" v-model="form.passportCode"> </el-input>
                  </td>
                </tr>
                <tr>
                  <td class="popup-label">
                    <span>{{ $t("date-of-hiring") }}</span>
                  </td>
                  <td class="input-padding">
                    <el-date-picker
                      class="width-full"
                      placeholder="yyyy-MM-dd"
                      format="yyyy-MM-dd"
                      Value-format="yyyy-MM-dd"
                      v-model="form.dateHired"
                    ></el-date-picker>
                  </td>
                </tr>
                <tr>
                  <td class="popup-label">
                    <span>{{ $t("total-salary") }}</span>
                  </td>
                  <td class="input-padding">
                    <el-input class="" v-model="form.totalSalary"> </el-input>
                  </td>
                </tr>
              </tbody>
            </table>
          </el-form>
        </el-col>
        <el-col :xs="24" :md="12" class="px-15-lg mt-2">
          <div class="d-block mt-4">
            <div
              class="d-flex justify-center flex-direction-column align-center"
            >
              <img
                src="@/assets/images/avatar.jpg"
                alt="avatar"
                width="200"
                height="auto"
                class="border-radius-20 mt-4-lg"
              />
              {{ fileName ? fileName + " selected" : "" }}
              <div class="d-flex mt-2">
                <custom-upload
                  @file-selected="fileSelected"
                  :showPreview="false"
                  :accept="'image/*'"
                  classes="el-button btn-dark-grey px-4-lg el-button--default"
                >
                  {{ $t("add") }}
                </custom-upload>
              </div>
              <el-button
                size="mini"
                class="px-15-lg btn-navy mx-1 mt-2"
                @click="dialogTwo = true"
                >{{ $t("take-a-picture-with-the-camera") }}</el-button
              >
            </div>
          </div>
        </el-col>
      </el-row>
      <!-- start accountingtree  -->
      <AccountingTree @node-selected="accountSelected" />
      <!-- end accountingtree  -->
      <el-dialog :visible.sync="dialogTwo" width="50%">
        <el-container class="container d-block box-shadow mb-0 px-2 py-2">
          <div class="px-30-lg py-15-lg">
            <div class="d-flex flex-wrap space-between">
              <span>
                <el-button class="btn-dark-green px-4-lg">
                  {{ $t("turn-on") }}
                </el-button>
              </span>
              <span>
                <el-button class="btn-red px-4-lg">
                  {{ $t("turn-off") }}
                </el-button>
              </span>
              <span>
                <el-button class="btn-dark-grey px-4-lg">
                  {{ $t("save") }}
                </el-button>
              </span>
            </div>

            <div class="devicesConnected">
              {{ $t("no-devices-connected") }}
            </div>
            <div class="px-30-lg py-15-lg" style="text-align: center">
              <img
                src="@/assets/images/man_face.jpg"
                alt="menu image"
                width="auto"
                height="150"
                style="
                  margin-bottom: 20px;
                  border-radius: 10px;
                  border: 1px solid #bbb;
                "
              />
            </div>
          </div>
        </el-container>
        <span slot="footer" class="dialog-footer"> </span>
      </el-dialog>

      <!-- dialog three -->
    </section>
    <div class="text-center ma-4 py-2 mt-0">
      <div
        class="
          justify-center
          mt-2
          action-buttons-nonGrown
          align-center align-baseline
        "
      >
        <el-button size="mini" class="mb-1 btn-blue" @click="create">{{
          $t("save-f5")
        }}</el-button>

        <NuxtLink :to="localePath('/system-cards/employees-data')">
          <el-button size="mini" class="mb-1 btn-violet">{{
            $t("back-f6")
          }}</el-button>
        </NuxtLink>
        <el-button size="mini" class="mb-1 btn-grey">{{
          $t("print-f4")
        }}</el-button>
        <el-button size="mini" class="mb-1" type="warning">{{
          $t("print-form")
        }}</el-button>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import AccountingTree from "~/components/dialogs/accounting-tree";
import customUpload from "~/components/static/customUpload";
export default {
  components: {
    AccountingTree,
    customUpload
  },
  data() {
    return {
      loading: false,
      fileName: "",
      form: {
        empCode: "",
        accID: "",
        empName: "",
        address: "",
        email: "",
        nationality: 1,
        gender: "",
        martialStat: "",
        job: "",
        phone: "",
        speciality: "",
        mobile: "",
        socialID: "",
        passportCode: "",
        dateHired: "",
        totalSalary: 0,
        image: ""
      },
      dialogTwo: false
    };
  },
  methods: {
    async openAccountTree() {
      try {
        await this.$store.dispatch(`accountingTree/getChildren`, 0);
        this.$store.commit("accountingTree/updateDialogState", true);
      } catch (e) {
        this.$message.error(e.response.data.message);
      }
    },
    accountSelected(selected) {
      this.form.accID = selected.accID;
    },
    async remoteMethod(query) {
      this.loading = true;
      try {
        await this.$store.dispatch(
          "Accounting/accountingDailyJournal/fetchSubAccountsList",
          {
            SearchString: query,
            mainOrSub: false
          }
        );

        this.loading = false;
      } catch (e) {}
    },
    fileSelected(file) {
      this.fileName = file.name;
      this.form.image = file;
    },
    create() {
      this.$store
        .dispatch("systemCards/employeesData/create", {
          ...this.form,
          dateHired: new Date(this.form.dateHired).toISOString()
        })
        .then(res => {
          this.$notify({
            group: "actions",
            type: "success",

            message: "Employee created successfully"
          });
          this.$router.push("/system-cards/employees-data");
        });
    }
  },
  computed: {
    ...mapState({
      maritalStatusList: state => state.lists.maritalStatusList,
      genderList: state => state.lists.genderList,
      jobsList: state => state.systemCards.employeesData.jobsList,
      countriesList :state => state.lists.countriesList,
    })
  },
  created() {
    this.$store
      .dispatch("systemCards/employeesData/suggestCode")
      .then(({ data }) => {
        this.form.empCode = data.data;
      })
      .catch(err => {
        this.$message.error(err.response.data.message);
      });
  }
};
</script>
<style scoped lang="scss">
.table-header {
  background-color: #f0fbfd;
  padding: 10px;
  border: 1px solid #707070;
  margin-top: 10px;
  margin-bottom: 10px;
}

.devicesConnected {
  padding: 15px;
  margin-bottom: 20px;
  margin-top: 20px;
  border: 1px solid #ddd;
}
</style>
