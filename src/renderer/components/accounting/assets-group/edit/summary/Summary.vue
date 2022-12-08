<template>
  <div class="text-center py-2 mt-0 container invoice-summary">
    <div
      class="justify-center mt-2 action-buttons-nonGrown align-center align-baseline"
    >
      <el-button size="mini" class="mb-1 btn-violet" @click="update()">{{
        $t("save-f5")
      }}</el-button>
      <el-button size="mini" class="mb-1 btn-red" @click="deleteRecord()">{{
        $t("delete-f8")
      }}</el-button>
      <el-button size="mini" class="mb-1 btn-violet">{{
        $t("back-f6")
      }}</el-button>
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
    update() {
      this.$store
        .dispatch("Accounting/assetsGroup/update")
        .then(() => {
          this.$notify({
            title: "Success",
            message: "assets Group Successfully",
            type: "success"
          });
          this.$store.dispatch("Accounting/assetsGroup/fetchRecords", {
            pageNumber: 1
          });
          this.$emit("closeDialog");
        })
        .catch(er => {
          this.$notify({
            title: "Error",
            message: "assets Group  NOT Update",
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
          return this.$store.dispatch("Accounting/assetsGroup/delete");
        })
        .then(() => {
          this.$message({
            type: "success",
            message: "Delete completed"
          });
          this.$store.dispatch("Accounting/assetsGroup/fetchRecords", {
            pageNumber: 1
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
