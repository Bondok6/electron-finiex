<template>
  <div class="mb-8 mt-40 background-form">
    <el-tabs
      class="border-none invoice-tab"
      type="border-card"
      stretch
      style="margin-bottom: 40px"
      @tab-click="handleClick"
    >
      <el-tab-pane :label="$t('fixed-origin-information')" >
        <fixed-additions-form />
      </el-tab-pane>
      <el-tab-pane :label="$t('fixed-origin-additions')">
        <fixed-additions-table />
      </el-tab-pane>
      <el-tab-pane
        :label="$t('stages-depletion-original-fixed')"
        name="depletion"
        ><stages-depreciation-table />
      </el-tab-pane>
    </el-tabs>
    <invoice-summary />
  </div>
</template>
<script>
import { mapMutations } from "vuex";
import FixedAdditionsTable from "~/components/accounting/card-fixed-assets/new/FixedAdditionsTable";
import StagesDepreciationTable from "~/components/accounting/card-fixed-assets/new/StagesDepreciationTable.vue";
import FixedAdditionsForm from "~/components/accounting/card-fixed-assets/new/FixedAdditionsForm";
import InvoiceSummary from "~/components/accounting/card-fixed-assets/new/summary/Summary";
export default {
  components: {
    FixedAdditionsTable,
    StagesDepreciationTable,
    FixedAdditionsForm,
    InvoiceSummary
  },
  async created() {
    await Promise.all([
      this.$store.dispatch("Accounting/assetsGroup/fetchRecords", {
        pageNumber: 1
      }),
      this.$store.dispatch("lists/getCostCentersList"),
      this.$store.dispatch("lists/getProviderSupplierList")
    ]);
  },

  methods: {
    ...mapMutations({
      calculateNow: "Accounting/cardFixedAssets/calculateNow"
    }),
    handleClick(tab) {
      if ((tab.name == "depletion")) {
        this.calculateNow(true);
      } else {
        this.calculateNow(false);
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.invoice-tab {
  margin: 0;
}
</style>
