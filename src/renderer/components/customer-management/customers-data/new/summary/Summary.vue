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
<!--      <NuxtLink :to="localePath('/customer-management/customers-data/')">-->
        <el-button size="mini" class="mb-1 btn-blue"
          @click="create"
        >{{
            $t("save-f5")
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
  methods: {
    create(){
      this.$store.dispatch("customerManagement/customer/create").then(() => {
        this.$notify({
          title: "Success",
          message: "Created",
          type: "success"
        });
        this.$router.push("/customer-management/customers-data/");
      }).catch(er => {
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
