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
      <el-button @click="create" size="mini" class="mb-1 btn-blue">{{
        $t("save-f5")
      }}</el-button>

      <NuxtLink :to="localePath('/system-cards/branches-data')">
        <el-button size="mini" class="mb-1 btn-violet">{{
          $t("back-f6")
        }}</el-button>
      </NuxtLink>
    </div>
  </div>
</template>
<script>
export default {
  name: "summary-section",

  methods: {
    create() {
      this.$store
        .dispatch("systemCards/branchData/create")
        .then(() => {
          this.$notify({
            title: "Success",
            message: "branch created",
            type: "success"
          });
          this.$router.push("/system-cards/branches-data");
        })
        .catch(e=> {
          this.$message.error(e.message);
        });
    }
  }
};
</script>
