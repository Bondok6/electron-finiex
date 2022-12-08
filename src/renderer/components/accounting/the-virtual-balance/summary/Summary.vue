<template>
  <div class="text-center container ma-4 mx-8 py-2 mt-0 invoice-summary">
    <div class="text-center mt-2 action-buttons-nonGrown justify-center">
      <el-button
        size="mini"
        class="mb-1 btn-green-faded"
        @click="toggleEdit()"
        >{{ enableEdit ? $t("back-f6") : $t("edit-f3") }}</el-button
      >
      <el-button size="mini" class="mb-1 btn-blue" @click="update()">{{
        $t("save-f5")
      }}</el-button>
      <el-button
        size="mini"
        class="mb-1 px-3 btn-primary"
        @click="displayRecord"
        >{{ $t("display") }}</el-button
      >
      <el-button size="mini" class="mb-1 btn-cyan">{{
        $t("balances-mentanance")
      }}</el-button>
      <NuxtLink to="../../report-management">
        <el-button
          size="mini"
          class="btn-grey"
          @click="$refs.reportInstance.openReport(reportData)"
          >{{ $t("print-f4") }}</el-button
        >
      </NuxtLink>

      <report ref="reportInstance"></report>
    </div>
  </div>
</template>
<script>
import reportsPaths from "~/paths.json";
import report from "~/components/report-managment/report-managment";
import { mapMutations, mapState } from "vuex";
export default {
  components: {
    report
  },
  data() {
    return {
      data: null,
      token: "bearer " + localStorage.getItem("accessToken"),
      form: {
        pageSize: null
      }
    };
  },
  computed: {
    ...mapState({
      enableEdit: state => state.Accounting.virtualBalance.enableEdit
    }),
    reportData() {
      let filter = this.$store.state.Accounting.virtualBalance.RecordDetails;
      let branchName = null;
      console.log(filter);
      if (filter.branchID) {
        let branchesList = this.$store.state.lists.branchesList;
        let branch = branchesList.find(item => {
          return item.id === filter.branchID;
        });
        branchName = branch.name;
      }
      return {
        reportPath: reportsPaths["the-virtual-balance"],
        headerPath: reportsPaths["headerCompany"],
        dataSet: `uri=${
          this.$config.axios.baseURL
        }accounting/virual-balance/list?pageSize=${
          this.$store.state.Accounting.virtualBalance.paginationConfig.pageSize
        };jpath=$;Header$Authorization=bearer${" " +
          localStorage.getItem("accessToken")};Header$Accept-Language=ar-SA`,
        connString:
          this.data != null
            ? "jsondata=" + JSON.stringify(this.data.data)
            : JSON.stringify(
                this.$store.state.Accounting.virtualBalance.records
              ),
        branchName: branchName
      };
    }
  },
  methods: {
    ...mapMutations({
      setEdit: "Accounting/virtualBalance/setEdit",
      setRecordDetails: "Accounting/virtualBalance/setRecordDetails"
    }),
    toggleEdit() {
      this.setEdit(!this.enableEdit);
      if (!this.enableEdit) {
        this.setRecordDetails({});
        this.$store.dispatch("Accounting/virtualBalance/fetchRecords", {
          pageNumber: 1
        });
      }
    },
    update() {
      this.$store.dispatch("Accounting/virtualBalance/update").then(() => {
        this.setEdit(false);
        this.$notify({
          title: "Success",
          message: "Update Success",
          type: "success"
        });
      });
    },
    async displayRecord() {
      const response = this.$store
        .dispatch("Accounting/virtualBalance/fetchRecords")
        .catch(err => {
          this.$message.error(err.message);
        });
      const data = await response;
      this.data = data;
    }
  }
};
</script>
