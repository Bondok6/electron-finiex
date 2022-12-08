<template>
  <div
    class="
      justify-center
      mt-4
      action-buttons-nonGrown
      align-center align-baseline
    "
  >
    <el-button
      size="mini"
      class="mb-1 btn-blue"
      @click="update()"
      v-if="!recordIsReadonly"
    >{{ $t("save-f5") }}
    </el-button
    >


    <el-button
      @click="deleteGaid()"
      size="mini"
      class="mb-1 btn-red"
      v-if="!recordIsReadonly"
    >{{ $t("delete-f8") }}
    </el-button
    >

    <NuxtLink :to="localePath('/accounting/journal-entry')">
      <el-button size="mini" class="mb-1 btn-violet">{{
          $t("back-f6")
        }}
      </el-button>
    </NuxtLink>
    <el-button size="mini" class="mb-1 btn-cyan">{{
        $t("attach-a-file")
      }}
    </el-button>
    <NuxtLink to="../../../report-management">
      <el-button
        size="mini"
        class="mb-1 btn-grey"
        @click="$refs.reportInstance.openReport(reportData);"
      >{{ $t("print-f4") }}
      </el-button>
    </NuxtLink>
    <report ref="reportInstance"></report>
  </div>
</template>

<script>
import reportsPaths from "~/paths.json";
import report from "~/components/report-managment/report-managment";

import {mapState} from "vuex";

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
      recordDetails: state => state.Accounting.accountingDailyJournal.recordDetails,
      recordIsReadonly: state => state.Accounting.accountingDailyJournal.recordIsReadonly
    }),
    reportData() {
      return {
        reportPath: reportsPaths["journal-edit"],
        headerPath: reportsPaths["headerCompany"],
        dataSet: `uri=${this.$config.axios.baseURL}accounting/journal-entry/${this.$route.params.id};jpath=$;Header$Authorization=bearer${" " + localStorage.getItem("accessToken")}`,
        connString: `endpoint=${this.$config.axios.baseURL}accounting/journal-entry/${this.$route.params.id};Header$Authorization=bearer${" " + localStorage.getItem("accessToken")}`,
      }
    },
  },
  methods: {
    update() {
      this.$store
        .dispatch("Accounting/accountingDailyJournal/update")
        .then(res => {
          this.$router.push({
            path: "/accounting/journal-entry"
          });
          this.$message({
            message: "Successfully updated",
            type: "success"
          });
        })
        .catch(err => {
          this.$notify({
            title: "Error",
            message: err,
            type: "error"
          });
        });
    },
    deleteGaid() {
      this.$confirm(this.$t("message-when-delete-record"), "Warning", {
        confirmButtonText: this.$t("delete"),
        cancelButtonText: this.$t("cancel"),
        type: "warning",
        center: true,
        customClass: "confirmBox"
      })
        .then(() => {

          return this.$store.dispatch(
            "Accounting/accountingDailyJournal/delete",

            {id: this.$route.params.id}
          );
        })
        .then(() => {
          // change route
          this.$router.push("/accounting/journal-entry");
          this.$message({
            type: "success",
            message: "Delete completed"
          });
        })
        .catch(er => {

          this.$message({
            type: "info",
            message: "Delete canceled"
          });
        });
    },

    async displayRecord() {
      this.$store.dispatch(
        "Accounting/accountingDailyJournal/fetchSingleRecord",
        this.$route.params.id
      );
    },
  }
};
</script>
