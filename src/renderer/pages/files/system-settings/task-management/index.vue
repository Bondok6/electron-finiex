<template>
  <div class="mb-8">
    <el-tabs
      class="invoice-tab"
      type="border-card"
      stretch
      @tab-click="handleClick"
    >
      <el-tab-pane :label="$t('send-assignments')">
        <sendassignments />
        <invoice-table />
        <invoice-summary />
      </el-tab-pane>
      <el-tab-pane :label="$t('receive-assignments')">
        <receiveassignments />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import Sendassignments from "~/components/system-settings/task-management/tabs/Sendassignments";
import Receiveassignments from "~/components/system-settings/task-management/tabs/Receiveassignments";
import InvoiceTable from "~/components/system-settings/task-management/InvoiceTable";
import InvoiceSummary from "~/components/system-settings/task-management/summary/Summary";

export default {
  name: "Home",
  components: {
    Sendassignments,
    Receiveassignments,
    InvoiceSummary,
    InvoiceTable,
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
