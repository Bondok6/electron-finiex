<template>
  <div
    class="
      justify-center
      mt-2
      action-buttons-nonGrown
      align-center align-baseline
    "
  >
    <el-button size="mini" class="mb-1 btn-blue px-2" @click="update">{{
      $t("save-f5")
    }}</el-button>
    <el-button size="mini" class="mb-1 btn-red" @click="deleteRecord">{{
      $t("delete-f8")
    }}</el-button>
    <NuxtLink :to="localePath('/system-cards/salemen-data')">
      <el-button size="mini" class="mb-1 btn-violet">{{
        $t("back-f6")
      }}</el-button>
    </NuxtLink>
    <el-button size="mini" class="mb-1 btn-grey">{{
      $t("print-f4")
    }}</el-button>
  </div>
</template>

<script>
export default {
  methods: {
    update() {
      this.$store
        .dispatch("systemCards/salesmenData/update")
        .then(() => {
          this.$notify({
            title: "Success",
            message: "updated",
            type: "success"
          });
          this.$router.push("/system-cards/salemen-data");
        })
        .catch(er => {
          this.$notify({
            title: "Error",
            message: "Error",
            type: "error"
          });
        });
    },
    deleteRecord() {
      this.$confirm(this.$t("message-when-delete-record"), "Warning", {
        confirmButtonText: this.$t("delete"),
        cancelButtonText: this.$t("cancel"),
        type: "warning",
        center: true,
        customClass: "confirmBox"
      })
        .then(() => {
          return this.$store.dispatch("systemCards/salesmenData/delete", {
            id: this.$route.params.id
          });
        })
        .then(() => {
          this.$router.push("/system-cards/salemen-data");
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
    }
  }
};
</script>