<template>
  <div class="width-full">
    <el-button class="mb-1 btn-teal" @click="update">{{ $t('save-f5') }}</el-button>
    <el-button
      class="mb-1 btn-teal"
      @click="toggleEdit()"
      >{{ enableEdit ? $t("back-f6") : $t("edit-f3") }}</el-button
    >
    <el-button class="mb-1 btn-teal" @click="displayRecord">{{ $t('display') }}</el-button>
    <NuxtLink to="../../report-management">
      <el-button
        class="mb-1 btn-teal"
        @click="$refs.reportInstance.openReport(reportData);"
        >{{ $t("print-f4") }}
      </el-button>
    </NuxtLink>
    <report ref="reportInstance"></report>
  </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";
  import reportsPaths from "~/paths.json";
  import report from "~/components/report-managment/report-managment";
  
  export default {
    components: {
      report,
    },
    data() {
      return {
        data: null,
        token: "bearer " + localStorage.getItem("accessToken"),
        form: {
          pageSize: null,
        },
      };
    },
    computed: {
      ...mapState({
        enableEdit: state => state.debitLimitCustomers.enableEdit,
        recordsWillEdit: state => state.debitLimitCustomers.recordsWillEdit,
        searchForm: state => state.debitLimitCustomers.searchForm
      }),
      reportData(){
        return {
          reportPath: reportsPaths["debit-limit-customers"],
          headerPath: reportsPaths["headerCompany"],
          dataSet: `uri=${this.$config.axios.baseURL}general/br-wh/list-branches?pageSize=${this.$store.state.debitLimitCustomers.paginationConfig.pageSize};jpath=$;Header$Authorization=bearer${" "+localStorage.getItem("accessToken")}`,
          connString: `endpoint=${this.$config.axios.baseURL}general/br-wh/list-branches?pageSize=${this.$store.state.debitLimitCustomers.paginationConfig.pageSize};Header$Authorization=bearer${" "+localStorage.getItem("accessToken")}`,
        }
      }
    },
    methods: {
      ...mapMutations({
        setEdit: "debitLimitCustomers/setEdit",
        setRecordsWillEdit: "debitLimitCustomers/setRecordsWillEdit",
      }),
      toggleEdit() {
        this.setEdit(!this.enableEdit);
        // if user back from edit mode
        if (!this.enableEdit) {
          this.setRecordsWillEdit({});
        }
        this.$store.dispatch("debitLimitCustomers/fetchRecords", {
          pageSize: 10,
          pageNumber: 1,
          ...this.searchForm
        });
      },
      update() {
        this.$store
          .dispatch("debitLimitCustomers/update")
          .then(() => {
            this.$notify({
              group: "actions",
              type: "scuccess",
              title: "Done"
            });
            this.$store.dispatch(
              "debitLimitCustomers/fetchRecords",
              {
                pageSize: 10,
                pageNumber: 1,
                ...this.searchForm
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
      },
      async displayRecord() {
        // this.$store
        //   .dispatch("debitLimitCustomers/fetchRecords", {
        //     pageSize: 10,
        //     pageNumber: 1,
        //     ...this.searchForm
        //   })
        //   .catch(err => {
        //     this.$message.error(err.message);
        //   });
        
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
            .then(() => { // if ok => save edited data and load table again
              // save
              this.$store
                .dispatch("debitLimitCustomers/update")
                .then(() => {
                  this.$notify({
                    group: "actions",
                    type: "scuccess",
                    title: "Done"
                  });
                  // load
                  this.$store.dispatch(
                    "debitLimitCustomers/fetchRecords",
                    {
                      pageSize: 10,
                      pageNumber: 1,
                      ...this.searchForm
                    }
                  );
                  this.setRecordsWillEdit({});
                  this.setEdit(false);
                })
                .catch(e => {
                  this.$notify({
                    group: "actions",
                    type: "error",
                    title: e.response.data.Message
                  });
                });
            })
            .catch(() => {
              this.$store.dispatch("debitLimitCustomers/fetchRecords", {
                pageNumber: 1,
                pageSize: 10,
                ...this.searchForm
              });
              this.setRecordsWillEdit({});
              this.setEdit(false);
            });
        } else {
          await this.$store.dispatch("debitLimitCustomers/fetchRecords", {
            pageNumber: 1,
            pageSize: 10,
            ...this.searchForm
          });
        }
      },
    }
  };
  </script>