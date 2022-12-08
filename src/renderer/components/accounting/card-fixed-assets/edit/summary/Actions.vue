<template>
  <div class="
      justify-center
      mt-2
      action-buttons-nonGrown
      align-center align-baseline
    ">
    <el-button v-if="!disable" size="mini" class="mb-1 btn-blue" @click="update()">{{ $t("save-f5") }}</el-button>
    <NuxtLink :to="
      localePath(
        '/reports-and-statements/public-statements/report-of-fixed-assets'
      )
    ">
      <el-button size="mini" class="mb-1 btn-violet-faded">{{
      $t("search-f7")
      }}</el-button>
    </NuxtLink>
    <el-button size="mini" class="mb-1 btn-red" @click="deleteRecord()">{{
    $t("delete-f8")
    }}</el-button>
    <NuxtLink :to="localePath('/accounting/card-fixed-assets')">
      <el-button size="mini" class="mb-1 btn-violet">{{
      $t("back-f6")
      }}</el-button>
    </NuxtLink>
    <NuxtLink to="../../report-management">
      <el-button size="mini" class="mb-1 btn-grey" @click="$refs.reportInstance.openReport(reportData);">
        {{ $t("print-f4") }}</el-button>
      </NuxtLink>
    <report ref="reportInstance"></report>
  </div>
</template>


<script>
import reportsPaths from "~/paths.json";
import report from "~/components/report-managment/report-managment";
import { mapState } from "vuex";
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
    reportData() {
      return {
        reportPath: reportsPaths["card-fixed-assets-edit"],
        headerPath: reportsPaths["headerCompany"],
        dataSet: `uri=${this.$config.axios.baseURL}accounting/card-fixed-assets/${this.$route.params.id};jpath=$;Header$Authorization=bearer${" " + localStorage.getItem("accessToken")}`,
        connString: `endpoint=${this.$config.axios.baseURL}accounting/card-fixed-assets/${this.$route.params.id};Header$Authorization=bearer${" " + localStorage.getItem("accessToken")}`,
      };
    },
    ...mapState({
      disable: state => state.Accounting.cardFixedAssets.disable
    }),
  },
  methods: {
    deleteRecord() {
      this.$confirm(this.$t("message-when-delete-record"), "Warning", {
        confirmButtonText: this.$t("delete"),
        cancelButtonText: this.$t("cancel"),
        type: "warning",
        center: true,
        customClass: "confirmBox"
      })
        .then(() => {
          return this.$store.dispatch(
            "Accounting/cardFixedAssets/delete",
            this.$route.params.id
          );
        })
        .then(() => {
          this.$message({
            type: "success",
            message: "Delete completed"
          });
          this.$router.push("/accounting/card-fixed-assets");
        })
        .catch(er => {

          this.$message({
            type: "info",
            message: "Delete canceled"
          });
        });
    },
    update() {
      this.$store
        .dispatch("Accounting/cardFixedAssets/update")
        .then(() => {
          this.$notify({
            title: "Success",
            message: "cardFixedAssetsUpdate",
            type: "success"
          });
          this.$router.push("/accounting/card-fixed-assets");
        })
        .catch(er => {
          this.$notify({
            title: "Error",
            message: "Error NOT Update",
            type: "error"
          });
        });
    }
  }
};
</script>