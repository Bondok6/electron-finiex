<template>
  <div class="text-center container ma-4 py-2 mt-0">
    <div
      class="
      justify-center
      mt-2
      action-buttons-nonGrown
      align-center align-baseline
    "
    >
      <el-button size="mini" class="mb-1 btn-orange">{{
          $t("print-client-card")
        }}</el-button>

        <el-button size="mini" class="mb-1 btn-blue" @click="update">{{
            $t("save-f5")
          }}</el-button>

      <el-button size="mini" class="mb-1 btn-red" @click="deleteRecord">{{
          $t("delete-f8")
        }}</el-button>
      <NuxtLink :to="localePath('/customer-management/qitaf-customers-data')">
        <el-button size="mini" class="btn-violet">{{ $t("back-f6") }}</el-button>
      </NuxtLink>
    </div>
  </div>
</template>


<script>

export default {
  name: "summary-section",
methods:{
  update(){
      this.$store.dispatch("customerManagement/qitafCustomers/update").then(() => {
        this.$notify({
          title: "Success",
          message: "qitafCustomers updated",
          type: "success"
        });
        this.$router.push("/customer-management/qitaf-customers-data");
      }).catch(error => {
        this.$notify({
          title: "Error",
          message: error.response.data.message,
          type: "error"
        });
      });
    },
  deleteRecord(){
    this.$confirm(this.$t("message-when-delete-record"), "Warning", {
      confirmButtonText: this.$t("delete"),
      cancelButtonText: this.$t("cancel"),
      type: "warning",
      center: true,
      customClass: "confirmBox"
    }).then(()=>{

   return   this.$store.dispatch("customerManagement/qitafCustomers/deleteRecord")
    }).then(() => {
      this.$message({
        type: "success",
        message: "Delete completed"
      });
      this.$router.push("/customer-management/qitaf-customers-data");
    }).catch(error => {
      this.$message({
        type: "info",
        message: "Delete canceled"
      });
    });

  }
}
};
</script>
