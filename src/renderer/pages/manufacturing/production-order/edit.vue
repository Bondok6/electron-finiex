<template>
  <div class="mb-8">
    <invoice />
    <el-tabs
      class="invoice-tab"
      type="border-card"
      stretch
      @tab-click="handleClick"
    >
      <el-tab-pane :label="$t('enter-the-produced-materials')"
        ><introducing-the-produced-materials />
        <invoice-summary />
      </el-tab-pane>
      <el-tab-pane :label="$t('raw-material-information')"
        ><raw-material-information />
        <invoice-summary-two />
      </el-tab-pane>
      <el-tab-pane :label="$t('other-costs-and-expenses')"
        ><other-costs-and-expenses />
        <invoice-summary-two />
      </el-tab-pane>
      <el-tab-pane :label="$t('estimated-cost-of-products')"
        ><estimated-cost-of-the-products />
        <invoice-summary-two />
      </el-tab-pane>
    </el-tabs>

    <pagination />
  </div>
</template>

<script>
import Pagination from "~/components/static/pagination";
import Invoice from "~/components/manufacturing/production-order/edit/Invoice";
import InvoiceSummary from "~/components/manufacturing/production-order/edit/summary/Summary";
import InvoiceSummaryTwo from "~/components/manufacturing/production-order/edit/summaryTwo/SummaryTwo";
import IntroducingTheProducedMaterials from "~/components/manufacturing/production-order/edit/tabs/IntroducingTheProducedMaterials.vue";
import RawMaterialInformation from "~/components/manufacturing/production-order/edit/tabs/RawMaterialInformation.vue";
import OtherCostsAndExpenses from "~/components/manufacturing/production-order/edit/tabs/OtherCostsAndExpenses.vue";
import EstimatedCostOfTheProducts from "~/components/manufacturing/production-order/edit/tabs/EstimatedCostOfTheProducts.vue";

export default {
  name: "Home",
  components: {
    Pagination,
    Invoice,
    InvoiceSummary,
    InvoiceSummaryTwo,
    IntroducingTheProducedMaterials,
    RawMaterialInformation,
    OtherCostsAndExpenses,
    EstimatedCostOfTheProducts,
  },

  data: function () {
    return {
      activeName: "first",
      page: 3,
    };
  },

  methods: {
    handleClick(tab, event) {
       
    },
  },
};
</script>