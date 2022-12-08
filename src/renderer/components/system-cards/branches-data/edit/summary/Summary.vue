<template>
  <div class="text-center ma-4 py-2 mt-0">
    <div
      class="justify-center mt-2 action-buttons-nonGrown align-center align-baseline"
    >
      <el-button @click="update" size="mini" class="mb-1 btn-blue">{{
        $t("save-f5")
      }}</el-button>
      <el-button size="mini" class="mb-1 btn-red" @click="deleteRecord()">{{
        $t("delete-f8")
      }}</el-button>
      <el-button size="mini" class="mb-1 btn-red">{{
        $t("delete-notice")
      }}</el-button>
      <NuxtLink :to="localePath('/system-cards/branches-data')">
        <el-button size="mini" class="mb-1 btn-violet">{{
          $t("back-f6")
        }}</el-button>
      </NuxtLink>
      <el-button size="mini" class="mb-1 btn-grey">{{
        $t("print-f4")
      }}</el-button>
    </div>
  </div>
</template>
<script>
export default {
  name: "summary-section",
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
            "systemCards/branchData/delete",
            this.$route.params.id
          );
        })
        .then(() => {
          this.$router.push("/system-cards/branches-data");
          this.$message({
            type: "success",
            message: "Delete completed"
          });
        })
        .catch(e => {
          this.$message.error(e?.message ?? "Deletes Canceled");
        });
    },

    update() {
      this.$store
        .dispatch("systemCards/branchData/update")
        .then(() => {
          this.$notify({
            title: "Success",
            message: "updated",
            type: "success"
          });
          this.$router.push("/system-cards/branches-data");
        })
        .catch(er => {
          this.$notify({
            title: "Error",
            message: "Error",
            type: "error"
          });
        });
    }
  }
};
</script>
