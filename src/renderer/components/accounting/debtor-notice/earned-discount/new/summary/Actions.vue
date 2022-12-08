<template>
  <div
    class="justify-center mt-2 action-buttons-nonGrown ml-6 align-center align-baseline"
  >
    <el-button size="mini" class="mb-1" type="primary" @click="create()">{{
      $t("save-f5")
    }}</el-button>
    <NuxtLink :to="localePath('/accounting/debtor-notice/earned-discount')">
    <el-button size="mini" class="mb-1 btn-grey">{{
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
        .dispatch("Accounting/debtorNotice/earnedDiscount/create")
        .then(() => {
          this.$notify({
            title: "Success",
            message: "debtor Notice earned Discount  Created",
            type: "success"
          });
          this.$router.push("/accounting/debtor-notice/earned-discount");
        });
    }
  }
};
</script>
