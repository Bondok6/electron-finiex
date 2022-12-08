<template>
  <div class="mb-8">
    <el-tabs
      class="invoice-tab"
      type="border-card"
      stretch
      @tab-click="handleClick"
    >
      <el-tab-pane :label="$t('set-main-cashier-printers')">
        <sendassignments />
        <invoice-summary />
      </el-tab-pane>
      <el-tab-pane :label="$t('set-external-cashier-printers')">
        <receiveassignments />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import Sendassignments from "~/components/system-settings/cashier-printer-settings/tabs/main";
import Receiveassignments from "~/components/system-settings/cashier-printer-settings/tabs/external";
import InvoiceSummary from "~/components/system-settings/cashier-printer-settings/summary/Summary";

export default {
  name: "Home",
  components: {
    Sendassignments,
    Receiveassignments,
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
