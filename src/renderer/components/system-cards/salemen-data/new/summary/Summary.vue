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
        <el-button size="mini" class="mb-1 btn-blue" @click="create">{{
          $t("save-f5")
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
  </div>
</template>
<script>
export default {
  name: "summary-section",
  components: {},
  methods: {
    create() {
      this.$store
        .dispatch("systemCards/salesmenData/create")
        .then(() => {
          this.$notify({
            title: "Success",
            message: "salemen Data Created",
            type: "success"
          });
          this.$router.push("/system-cards/salemen-data");
        })
        .catch(err => {
          this.$notify.error({
            message: err.response.data.message
          });
        });
    }
  }
};
</script>
