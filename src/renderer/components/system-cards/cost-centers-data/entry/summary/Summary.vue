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
        @click="openDialogAddCenter(true)"
        >{{ $t("new-f2") }}</el-button
      >
      <el-button size="mini" class="mb-1 btn-grey">{{
        $t("print-f4")
      }}</el-button>

      <!-- start addCostCenter dialog -->
      <AddCostCenter :costCenterCode="costCenterCode" />
    </div>
  </div>
</template>
<script>
import { mapMutations } from "vuex";
import AddCostCenter from "~/components/dialogs/add-cost-center";
export default {
  name: "summary-section",
  data() {
    return {
      costCenterCode: 0
    };
  },
  components: { AddCostCenter },
  methods: {
    ...mapMutations({
      updateDialogState: "addcostcenter/updateDialogState"
    }),
    // open dialog to add cost center
    openDialogAddCenter() {
      // reset maxCode to aviod child cmp conflict and render old code
      this.costCenterCode = 0;
      this.updateDialogState(true);
      this.$store
        .dispatch("systemCards/costCenterData/maxCostCenterCode")
        .then(({ data }) => {
          this.costCenterCode = data.data;
        });
    }
  }
};
</script>
