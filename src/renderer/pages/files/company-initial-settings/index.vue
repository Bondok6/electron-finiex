<template>
  <div class="mb-8 mt-40 background-form">
    <el-tabs
      class="border-none invoice-tab ma-0-sm"
      type="border-card"
      stretch
      style="margin-bottom: 40px;"
    >
    <el-tab-pane :label="$t('sales-and-purchases')">
        <!-- <div class="width-full" style="background-color:#f00; text-align-right"> </div> -->
        <sales-and-purchases />
    </el-tab-pane>
    <el-tab-pane :label="$t('inventory')">
        <inventory />
    </el-tab-pane>
    <el-tab-pane :label="$t('accounting')">
        accounting
    </el-tab-pane>
    <el-tab-pane :label="$t('human-resources')">
        human-resources
    </el-tab-pane>
    <el-tab-pane :label="$t('tax')">
        tax
    </el-tab-pane>
    </el-tabs>
    <invoice-summary />
  </div>
</template>
<script>
import SalesAndPurchases from "~/components/files/company-initial-settings/sales-and-purchases.vue"
import Inventory from "~/components/files/company-initial-settings/inventory.vue"
import InvoiceSummary from "~/components/files/company-initial-settings/summary/Summary.vue"
export default {
    name : "invoice",
    components : {
        SalesAndPurchases,
        Inventory,
        InvoiceSummary
    }
}
</script>
<style lang="scss" scoped>
.invoice-tab{
  margin: 0;
}
</style>