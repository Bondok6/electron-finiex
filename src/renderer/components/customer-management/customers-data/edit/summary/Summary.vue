<template>
  <div class="text-center ma-4 py-2 mt-0">
    <div
      class="
      justify-center
      mt-2
      action-buttons-nonGrown
      align-center align-baseline
    "
    >
      <el-button size="mini" class="mb-1 btn-violet-faded">{{
          $t("print-client-card")
        }}</el-button>

        <el-button size="mini" class="mb-1 btn-blue" @click="update">{{
            $t("save-f5")
          }}</el-button>
      <el-button size="mini" class="mb-1 btn-red"
      @click="deleteRecord"
      >{{
          $t("delete-f8")
        }}</el-button>

      <NuxtLink :to="localePath('/customer-management/customers-data/')">
        <el-button size="mini" class="mb-1 btn-violet">{{
            $t("back-f6")
          }}</el-button>
      </NuxtLink>
      <el-button size="mini" class="mb-1 btn-grey">{{
          $t("print-f4")
        }}</el-button>
      <el-button size="mini" class="mb-1 btn-orange">{{
          $t("customer-branches")
        }}</el-button>
    </div>
  </div>
</template>
<script>
export default {
  name: "summary-section",
  methods:{
    update() {
      this.$store
        .dispatch("customerManagement/customer/update")
        .then(() => {
          this.$notify({
            title: "Success",
            message: "customer Update",
            type: "success"
          });
          this.$router.push("/customer-management/customers-data/");
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
           this.$store.dispatch(
            "customerManagement/customer/delete",
            {
              id: this.$route.params.id
            }
          ) .then(() => {
             this.$router.push("/customer-management/customers-data/");
             this.$message({
               type: "success",
               message: "Delete completed"
             });
           }).catch(e=>{
             this.$message({
               type: "info",
               message: e.response.data.message
             });
           })
        })
        .catch(_ => {
          this.$message({
            type: "info",
            message: "Delete canceled"
          });
        });
    }
  }
};
</script>
