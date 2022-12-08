<template>
  <div
    class="
      justify-center
      mt-4
      action-buttons-nonGrown
      align-center align-baseline
    "
  >
    <el-button size="mini" class="mb-1 btn-blue" @click="create">
      {{ $t("save-f5") }}</el-button
    >

    <NuxtLink :to="localePath('/accounting/journal-entry')">
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
        .dispatch("Accounting/accountingDailyJournal/create")
        .then(res => {
          this.$router.push({
            path: "/accounting/journal-entry"
          });
          this.$notify({
            title: "Success",
            message: "Journal Entry Created",
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
