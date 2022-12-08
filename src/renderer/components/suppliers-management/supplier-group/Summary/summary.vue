<template>
  <div class="text-center container ma-4 py-2 mt-0 invoice-summary">

    <div
      class="
      justify-center
      mt-2
      action-buttons-nonGrown
      align-center align-baseline
    "
    >
      <el-button
        size="mini"
        class="mb-1"
        type="primary"
        @click="OpenDialog(true)"
      >{{ $t("new-f2") }}</el-button
      >
      <el-button size="mini" class="mb-1 btn-grey">{{
          $t("print-f4")
        }}</el-button>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
export default {
  name: "summary-section",
  components: {

  },
  methods: {
    ...mapMutations({
      updateDialogState: "suppliersManagement/supplierGroup/updateDialogState",
    }),
    OpenDialog(state) {
      this.updateDialogState(state);
    },
  },
};
</script>
