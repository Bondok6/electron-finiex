
<template>
  <div class="mb-8">
    <el-tabs
      class="invoice-tab"
      type="border-card"
      stretch
      @tab-click="handleClick"
    >
      <el-tab-pane :label="$t('other-settings')">
        <othersettings />
      </el-tab-pane>
      <el-tab-pane :label="$t('invice-settings')">
        <invoicesettings />
      </el-tab-pane>
      <el-tab-pane :label="$t('accountant-settings')">
        <accountantsettings />
      </el-tab-pane>
      <el-tab-pane :label="$t('subscription-card')">
        <subscriptioncards />
      </el-tab-pane>
      <el-tab-pane :label="$t('cashier-display')">
        <cashierdesplay />
      </el-tab-pane>
      <el-tab-pane :label="$t('tax-settings')">
        <taxsettings />
      </el-tab-pane>
      <el-tab-pane :label="$t('inventory-movement-settings')">
        <inventorysettings />
      </el-tab-pane>
      <el-tab-pane :label="$t('point-of-sale-settings')">
        <pointofsale />
      </el-tab-pane>
    </el-tabs>

    <invoice-summary />
  </div>
</template>
<script>
import Othersettings from "~/components/system-settings/system-options/tabs/Othersettings.vue";
import Invoicesettings from "~/components/system-settings/system-options/tabs/Invoice-settings";
import Accountantsettings from "~/components/system-settings/system-options/tabs/accountant-settings";
import Subscriptioncards from "~/components/system-settings/system-options/tabs/subscription-cards.vue";
import Cashierdesplay from "~/components/system-settings/system-options/tabs/cashier-desplay";
import Taxsettings from "~/components/system-settings/system-options/tabs/tax-settings.vue";
import Inventorysettings from "~/components/system-settings/system-options/tabs/inventorysettings";
import Pointofsale from "~/components/system-settings/system-options/tabs/pointofsale.vue";
import InvoiceSummary from "~/components/system-settings/system-options/summary/Summary";
export default {
  name: "Home",
  components: {
    Othersettings,
    Invoicesettings,
    Accountantsettings,
    Subscriptioncards,
    Cashierdesplay,
    Taxsettings,
    Inventorysettings,
    Pointofsale,
    InvoiceSummary,
  },

  data: function () {
    return {
      page: 3,
    };
  },
  methods: {
    handleClick(tab, event) {
       
    },
  },
};
</script>
