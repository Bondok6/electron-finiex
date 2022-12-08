<template>
  <div
    class="justify-center mt-2 action-buttons-nonGrown align-center align-baseline"
  >
    <el-button size="mini" class="mb-1 btn-blue" @click="createAccount">{{
      $t("save-f5")
    }}</el-button>

    <NuxtLink :to="localePath('/accounting/accounts-card')">
      <el-button size="mini" class="mb-1 btn-violet">{{
        $t("back-f6")
      }}</el-button>
    </NuxtLink>
  </div>
</template>

<script>
export default {
  methods: {
    createAccount() {
      this.$store
        .dispatch("Accounting/accountingCard/createAccount")
        .then((res) => {
          this.$notify({
            title: "Success",
            message: "created successfully",
            type: "success",
          });
          this.$router.push("/accounting/accounts-card");
        })
        .catch(({ response }) => {
          this.$notify({
            title: "Error",
            message: response.data.Message,
            type: "error",
          });
        });
    },
  },
};
</script>
