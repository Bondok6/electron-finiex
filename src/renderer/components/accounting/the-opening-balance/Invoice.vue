<template>
  <el-container class="container box-shadow ma-4 mb-0 px-2 py-3">
    <el-form class="invoice-form width-full" label-position="top" :model="form">
      <el-row :gutter="6" class="width-full">
        <el-col :xs="24" :sm="6" :md="5" :lg="4">
          <el-form-item :label="$t('branch-name')">
            <el-select v-model="form.brID" :placeholder="$t('select-branch')">
              <el-option :label="$t('all')" :value="null"> </el-option>
              <el-option
                v-for="item in branchesList"
                :label="item.name"
                :value="item.id"
                :key="item.id"
              ></el-option>
            </el-select>
            
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="6" :md="5" :lg="4">
          <el-form-item :label="$t('grade-type')">
            <el-select v-model="form.rpType">
              <el-option :label="$t('all')" :value="null"></el-option>
              <el-option :label="$t('main')" :value="0"></el-option>
              <el-option :label="$t('sub')" :value="1"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="6" :md="5" :lg="4">
          <el-form-item :label="$t('account-type')">
            <el-select v-model="form.accType" class="width-full">
              <el-option
                v-for="item in accountNatures"
                :key="item.mddCode"
                :label="item.mddname"
                :value="item.mddvalueNo"
              ></el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="6" class="width-full">
        <el-col :xs="24" :sm="6" :md="5" :lg="4">
          <el-form-item :label="$t('level')">
            <el-select v-model="form.accLvl">
              <el-option :label="$t('all')" :value="null"></el-option>
              <el-option
                v-for="level in maxLevel ? maxLevel - 1 : maxLevel"
                :key="level"
                :label="level"
                :value="level"
              ></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="6" :md="5" :lg="4">
          <el-form-item :label="$t('account-name')">
            <el-select
              class="width-full"
              v-model="form.accName"
              :placeholder="$t('search')"
              filterable
              remote
              :remote-method="remoteMethod"
              :loading="loading"
            >
              <el-option
                v-for="item in accountList"
                :key="item.accID"
                :label="item.accName + ' --- ' + item.accID"
                :value="item.accID"
              >
                <span style="float: left">{{ item.accName }}</span>
                <span style="float: right; color: #8492a6; font-size: 13px">{{
                  item.accID
                }}</span>
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="24" :md="16" :lg="16" :xl="16" class="mt-2">
          <div class="inline-button-container d-flex">
            <div class="spacer"></div>
            <el-select
              v-model="form.orderBy"
              class="color-blue text-center placeHolderColor w-250 selectButton"
              :placeholder="$t('order-by')"
            >
              <el-option
                :label="$t('account-number')"
                :value="1"
                class="selectButton"
              >
                <el-button class="width-full">
                  {{ $t("account-number") }}
                </el-button>
              </el-option>
              <el-option
                :label="$t('account-name')"
                :value="1"
                class="selectButton"
              >
                <el-button class="width-full">
                  {{ $t("account-name") }}
                </el-button>
              </el-option>
            </el-select>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="6" class="width-full">
        <el-col :xs="24" :sm="6" :md="6" :lg="6">
          <el-checkbox
            class="padding-label arround-checkbox inner-checkbox"
            @change="form.showZeros = !form.showZeros"
          >
            <span v-if="form.showZeros">
              {{ $t("not-showing-accounts-with-a-zero-balance") }}
            </span>
            <span v-else>
              {{ $t("showing-accounts-with-a-zero-balance") }}
            </span>
          </el-checkbox>
        </el-col>
      </el-row>
      <!-- controls btns -->
      <el-row class="width-full">
        <div class="text-center container">
          <div class="text-center mt-2 action-buttons-nonGrown justify-center">
            <el-button
              size="medium"
              class="mb-1 btn-teal"
              @click="toggleEdit()"
              >{{ enableEdit ? $t("back-f6") : $t("edit-f3") }}</el-button
            >
            <el-button
              size="medium"
              @click="displayRecord"
              class="mb-1 px-3 btn-teal"
              >{{ $t("display") }}</el-button
            >
            <el-button size="medium" class="mb-1 btn-teal">{{
              $t("balances-mentanance")
            }}</el-button>
            <NuxtLink to="../../report-management">

              <el-button
              size="medium" class="mb-1 btn-teal"
              @click="$refs.reportInstance.openReport(reportData);"
              >{{ $t("print-f4") }}</el-button>
            </NuxtLink>
            <el-button size="medium" class="mb-1 btn-teal" @click="update()">{{
              $t("save-f5")
            }}</el-button>
            <report ref="reportInstance"></report>
          </div>
        </div>
      </el-row>
    </el-form>
  </el-container>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import reportsPaths from "~/paths.json";
import report from "~/components/report-managment/report-managment";

export default {
  components: {
    report,
  },
  name: "Invoice",
  data() {
    return {
      loading: false,
      form: {
        rpType: 0,
        accLvl: 1,
        brID: "",
        accName: "",
        accType: "",
        showZeros: false,
        orderBy: "",
        pageSize: null,
      },
      data: null,
      token: "bearer " + localStorage.getItem("accessToken"),
    };
  },
  computed: {
    ...mapState({
      accountList: state => state.Accounting.accountingDailyJournal.accountList,
      accountNatures: state => state.lists.accountNatures,
      branchesList: state => state.lists.branchesList,
      maxLevel: state => state.lists.maxLevel,
      enableEdit: state => state.Accounting.openingBalance.enableEdit,
      recordsWillEdit: state => state.Accounting.openingBalance.recordsWillEdit,
      paginationConfig: state =>
        state.Accounting.openingBalance.paginationConfig
    }),
    reportData(){
      let filter =this.$store.state.Accounting.openingBalance.RecordDetails;
      let branchName = null;
      if(filter.brID){
        let branchesList = this.$store.state.lists.branchesList;
        let branch = branchesList.find((item) => {
          return item.id === filter.brID
        })
        branchName = branch.name
      }
      return {
        reportPath: reportsPaths["the-opening-balance"],
        headerPath: reportsPaths["headerCompany"],
        dataSet: `uri=${this.$config.axios.baseURL}accounting/opening-balances/details-list?pageSize=${this.$store.state.Accounting.openingBalance.paginationConfig.pageSize};jpath=$;Header$Authorization=bearer${" "+localStorage.getItem("accessToken")};Header$Accept-Language=ar-SA`,
        connString:this.data!= null ? "jsondata=" + JSON.stringify(this.data.data) : JSON.stringify(this.$store.state.Accounting.openingBalance.records),
        branchName : branchName,  
      }
    }
  },
  methods: {
    ...mapMutations({
      setEdit: "Accounting/openingBalance/setEdit",
      setRecordsWillEdit: "Accounting/openingBalance/setRecordsWillEdit"
    }),
    async update() {
      // if user trigger save Update button without any changes
      if (this.recordsWillEdit.length > 0) {
        event.preventDefault();
        // alert avoid user loss changes
        // id confirm => save date and load new data
        this.$confirm(
          "you will lose changes , Do you want to save the changes ?",
          {
            confirmButtonText: this.$t("ok"),
            showCancelButton: true,
            type: "warning",
            center: true,
            customClass: "confirmBox"
          }
        )
          .then(() => {
            if (
              this.recordsWillEdit.every(el => el.startCredit == el.startDebit)
            ) {
              this.$store
                .dispatch("Accounting/openingBalance/update")
                .then(() => {
                  this.$notify({
                    group: "actions",
                    type: "scuccess",
                    title: "Done"
                  });
                  this.$store.dispatch(
                    "Accounting/openingBalance/fetchRecords",
                    {
                      pageNumber: 1
                    }
                  );
                  this.setRecordsWillEdit({});
                  this.setEdit(false);
                })
                .catch(e => {

                  this.$notify({
                    group: "actions",
                    type: "error",
                    title: e.response.data.message
                  });
                });
            } else {
              this.$confirm("debit not equal cedit Review your changes", {
                confirmButtonText: this.$t("ok"),
                showCancelButton: true,
                type: "warning",
                center: true,
                customClass: "confirmBox"
              })
                .then(() => {
                  this.$store
                    .dispatch("Accounting/openingBalance/update")
                    .then(() => {
                      this.$notify({
                        group: "actions",
                        type: "scuccess",
                        title: "Done"
                      });
                      this.$store.dispatch(
                        "Accounting/openingBalance/fetchRecords",
                        {
                          pageNumber: this.paginationConfig.pageNumber,
                          pageSize: this.paginationConfig.pageSize,
                          ...this.form
                        }
                      );
                    })
                    .catch(e => {

                      this.$notify({
                        group: "actions",
                        type: "error",
                        title: e.response.data.message
                      });
                    });
                  this.$store.dispatch("Accounting/openingBalance/update");
                  this.setRecordsWillEdit({});
                  this.setEdit(false);
                  this.$store.dispatch(
                    "Accounting/openingBalance/fetchRecords",
                    {
                      pageNumber: this.paginationConfig.pageNumber,
                      pageSize: this.paginationConfig.pageSize,
                      ...this.form
                    }
                  );
                })
                .catch(() => {
                  this.$store.dispatch(
                    "Accounting/openingBalance/fetchRecords",
                    {
                      pageNumber: this.paginationConfig.pageNumber,
                      pageSize: this.paginationConfig.pageSize,
                      ...this.form
                    }
                  );
                });
            }
          })
          .catch(() => {
            this.$store.dispatch("Accounting/openingBalance/fetchRecords", {
              pageSize: 10,
              pageNumber: 1,
              ...this.form
            });
            this.setRecordsWillEdit({});
            this.setEdit(false);
          });
      } else {
        this.setEdit(false);
      }
    },
    toggleEdit() {
      this.setEdit(!this.enableEdit);
      // if user back from edit mode
      if (!this.enableEdit) {
        this.setRecordsWillEdit({});
        this.$store.dispatch("Accounting/openingBalance/fetchRecords", {
          pageSize: this.paginationConfig.pageSize,
          pageNumber: this.paginationConfig.pageNumber,
          ...this.form
        });
      } else {
        // when user click edit button
        //user can edit on only sub accounts
        // this.form.rpType = 1;
        this.$store.dispatch("Accounting/openingBalance/fetchRecords", {
          pageSize: this.paginationConfig.pageSize,
          pageNumber: this.paginationConfig.pageNumber,
          ...this.form
        });
      }
    },
    async displayRecord() {
      
      if (this.recordsWillEdit.length > 0) {
        event.preventDefault();
        // alert avoid user loss changes
        // id confirm => save date and load new data
        this.$confirm(
          "you will lose changes, Do you want to save the changes?",
          {
            confirmButtonText: this.$t("ok"),
            showCancelButton: true,
            type: "warning",
            center: true,
            customClass: "confirmBox"
          }
        )
          .then(() => {
            if (
              this.recordsWillEdit.every(el => el.startCredit == el.startDebit)
            ) {
               this.$store
                .dispatch("Accounting/openingBalance/update")
                .then(() => {
                  this.$notify({
                    group: "actions",
                    type: "scuccess",
                    title: "Done"
                  });
                  this.$store.dispatch(
                    "Accounting/openingBalance/fetchRecords",
                    {
                      ...this.form,
                      pageNumber: 1
                    }
                  );
                  this.setRecordsWillEdit({});
                  this.setEdit(false);
                })
                .catch(e => {

                  this.$notify({
                    group: "actions",
                    type: "error",
                    title: e.response.data.message
                  });
                });
            } else {
              this.$confirm("debit not equal cedit Review your changes", {
                confirmButtonText: this.$t("ok"),
                showCancelButton: true,
                type: "warning",
                center: true,
                customClass: "confirmBox"
              })
                .then(() => {
                  this.$store
                    .dispatch("Accounting/openingBalance/update")
                    .then(() => {
                      this.$notify({
                        group: "actions",
                        type: "scuccess",
                        title: "Done"
                      });
                      this.$store.dispatch(
                        "Accounting/openingBalance/fetchRecords"
                      );
                    })
                    .catch(e => {

                      this.$notify({
                        group: "actions",
                        type: "error",
                        title: e.response.data.message
                      });
                    });
                  this.$store.dispatch("Accounting/openingBalance/update");
                  this.setRecordsWillEdit({});
                  this.setEdit(false);
                  this.$store.dispatch(
                    "Accounting/openingBalance/fetchRecords",
                    this.form
                  );
                })
                .catch(() => {
                  this.$store.dispatch(
                    "Accounting/openingBalance/fetchRecords",
                    this.form
                  );
                });
            }
          })
          .catch(() => {
            this.$store.dispatch(
              "Accounting/openingBalance/fetchRecords",
              this.form
            );
            this.setRecordsWillEdit({});
            this.setEdit(false);
          });
      } else {
        if (this.form.rpType != 1) {
          this.setEdit(false);
          await this.$store.dispatch("Accounting/openingBalance/fetchRecords", {
            ...this.form,
            pageNumber: 1,
            pageSize: this.paginationConfig.pageSize
          });
        } else {
          await this.$store.dispatch("Accounting/openingBalance/fetchRecords", {
            ...this.form,
            pageNumber: 1,
            pageSize: this.paginationConfig.pageSize
          });
        }
      }
    },
    async remoteMethod(query) {
      this.loading = true;
      try {
        await this.$store.dispatch(
          "Accounting/accountingDailyJournal/fetchSubAccountsList",
          {
            SearchString: query
          }
        );

        this.loading = false;
      } catch (e) {

      }
    },
    ...mapMutations({
      setRecordDetails: "Accounting/openingBalance/setRecordDetails"
    })
  },
  watch: {
    form: {
      handler: function(newVal, oldVal) {
        this.setRecordDetails({
          ...newVal
        });
      },
      deep: true,
      immediate: true
    }
  }
};
</script>
