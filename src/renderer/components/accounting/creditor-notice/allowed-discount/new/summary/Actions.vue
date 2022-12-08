<template>
  <div
    class="justify-center mt-2 action-buttons-nonGrown ml-6 align-center align-baseline"
  >
    <el-button size="mini" class="mb-1" type="primary" @click="create()">{{
      $t("save-f5")
    }}</el-button>
    <!-- <el-button size="mini" class="mb-1 btn-grey">{{
      $t("print-f4")
    }}</el-button> -->
     <NuxtLink :to="localePath('/accounting/creditor-notice')">
      <el-button size="mini" class="mb-1 btn-violet">{{
        $t("back-f6")
      }}</el-button>
    </NuxtLink>
  </div>
</template>

<script>
export default {
  methods: {
    create() {
      this.$store
        .dispatch("Accounting/creditorNotice/allowedDiscount/create")
        .then(() => {
          this.$notify({
            title: "Success",
            message: "creditor notice allowed discount Created",
            type: "success"
          });
          this.$router.push("/accounting/creditor-notice/allowed-discount");
        });
    }
  }
};
</script>
