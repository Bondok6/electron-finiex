<template>
  <div class="text-center py-2 mt-0 invoice-summary container">
    <div
      class="justify-center mt-2 action-buttons-nonGrown align-center align-baseline"
    >
      <el-button size="mini" class="mb-1 btn-violet" @click="create()">{{
        $t("save-f5")
      }}</el-button>
      <el-button size="mini" class="mb-1 btn-violet">{{
        $t("back-f6")
      }}</el-button>
      <el-button size="mini" class="mb-1 btn-grey">{{
        $t("print-f4")
      }}</el-button>
      <el-button size="mini" class="mb-1 btn-grey">{{
        $t("print-pdf")
      }}</el-button>
    </div>
  </div>
</template>
<script>
export default {
  name: "summary-section",
  methods: {
    create() {
      this.$store.dispatch("Accounting/assetsGroup/create").then(() => {
        this.$notify({
          title: "Success",
          message: "asset Groups  discount Created",
          type: "success"
        });
        this.$store.dispatch("Accounting/assetsGroup/fetchRecords", {
          pageNumber: 1
        });
        this.$emit("closeDialog");
      });
    }
  }
};
</script>
