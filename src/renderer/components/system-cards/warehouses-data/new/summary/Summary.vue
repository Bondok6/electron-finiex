<template>
  <div class="text-center ma-4 py-2 mt-0">
    <div
      class="justify-center mt-2 action-buttons-nonGrown align-center align-baseline"
    >

      <el-button @click="create" size="mini" class="mb-1 btn-blue">{{
          $t("save-f5")
          }}</el-button>

      <NuxtLink :to="localePath('/system-cards/warehouses-data')">
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
  methods:{
    create() {
      ///accounting/receipt-compound-vouchers
      this.$store
        .dispatch("systemCards/warehouseData/create")
        .then(() => {
          this.$notify({
            title: "Success",
            message: "warehouse Data Created",
            type: "success"
          });
          this.$router.push("/system-cards/warehouses-data");
        });
    }
  }
};
</script>
