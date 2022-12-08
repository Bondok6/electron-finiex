<template>
  <div class="container ma-4 py-2 mt-0 invoice-summary display-center">
    <el-row :gutter="20" class="px-2">
      <div>
        <div class="mt-2 action-buttons-nonGrown-center align-baseline">
          <el-button
            @click="OpenDialog(true)"

            size="mini"
            class="mb-1 btn-primary"
          >{{ $t("new-f2") }}</el-button
          >

          <el-button size="mini" class="mb-1 btn-grey">{{
              $t("print-f4")
            }}</el-button>
        </div>

  </div>
    </el-row>
  </div>

</template>
<script>
import { mapMutations } from "vuex";

export default {


  methods: {
    ...mapMutations({
      updateDialogState: "suppliersManagement/supplierClassification/updateDialogState",
    }),
    OpenDialog(state) {
      this.updateDialogState(state);
    },
  }
}
</script>
