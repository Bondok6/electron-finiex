<template>
  <div class="mb-8 mt-40 background-form">
    <el-tabs
      class="border-none invoice-tab ma-0-sm"
      type="border-card"
      stretch
      style="margin-bottom: 40px"
      @tab-click="handleClick"
    >
      <el-tab-pane :label="$t('fixed-origin-information')"
        ><fixed-aditation-form
      /></el-tab-pane>
      <el-tab-pane :label="$t('fixed-origin-additions')"
        ><fixed-aditations-table
      /></el-tab-pane>
      <el-tab-pane
        :label="$t('stages-depletion-original-fixed')"
        name="depletion"
        ><stages-depreciation-table
      /></el-tab-pane>
    </el-tabs>
    <invoice-summary />
  </div>
</template>
<script>
import FixedAditationsTable from "~/components/accounting/card-fixed-assets/edit/FixedAditationsTable";
import StagesDepreciationTable from "~/components/accounting/card-fixed-assets/edit/StagesDepreciationTable.vue";
import FixedAditationForm from "~/components/accounting/card-fixed-assets/edit/FixedAditationForm";
import InvoiceSummary from "~/components/accounting/card-fixed-assets/edit/summary/Summary";
import { mapMutations } from "vuex";
export default {
  components: {
    FixedAditationsTable,
    StagesDepreciationTable,
    FixedAditationForm,
    InvoiceSummary
  },

  async created() {
    await Promise.all([
      this.$store.dispatch("Accounting/assetsGroup/fetchRecords", {
        pageNumber: 1
      }),
      this.$store.dispatch("lists/getCostCentersList"),
      this.$store.dispatch("lists/getProviderSupplierList"),
      this.$store.dispatch(
        "Accounting/cardFixedAssets/fetchSingleRecord",
        this.$route.params.id
      )
    ]);
  },
  methods: {
    ...mapMutations({
      calculateNow: "Accounting/cardFixedAssets/calculateNow"
    }),
    handleClick(tab) {
      if (tab.name == "depletion") {
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
