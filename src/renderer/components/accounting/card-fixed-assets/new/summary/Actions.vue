<template>
  <div
    class="
      justify-center
      mt-2
      action-buttons-nonGrown
      align-center align-baseline
    "
  >
    <el-button size="mini" class="mb-1 btn-blue" @click="create()">{{
      $t("save-f5")
    }}</el-button>

    <NuxtLink
      :to="
        localePath(
          '/reports-and-statements/public-statements/report-of-fixed-assets'
        )
      "
    >
      <el-button size="mini" class="mb-1 btn-violet-faded">{{
        $t("search-f7")
      }}</el-button>
    </NuxtLink>
    <NuxtLink :to="localePath('/accounting/card-fixed-assets')">
      <el-button size="mini" class="mb-1 btn-violet">{{
        $t("back-f6")
      }}</el-button>
    </NuxtLink>
    <el-button size="mini" class="mb-1 btn-grey">{{
      $t("print-f4")
    }}</el-button>
    <el-button size="mini" class="mb-1 btn-grey">{{
      $t("print-pdf")
    }}</el-button>
  </div>
</template>


<script>
export default {
  methods: {
    create() {
      this.$store
        .dispatch("Accounting/cardFixedAssets/create")
        .then(res => {
          this.$router.push({
            path: "/accounting/card-fixed-assets"
          });
          this.$notify({
            title: "Success",
            message: "cardFixedAssets Created",
            type: "success"
          });
        })
        .catch(err => {
          this.$notify({
            title: "Error",
            message: err,
            type: "error"
          });
        });
    }
  }
};
</script>