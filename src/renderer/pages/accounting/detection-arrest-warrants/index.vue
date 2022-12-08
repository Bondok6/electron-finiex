<template>
  <div class="mb-8">
    <invoice />
    <invoice-table />
    <invoice-summary />
    <div class="text-center mt-2">

      <el-pagination
        :background="true"
        :current-page.sync="page"
        :page-sizes="[10, 20, 30, 40]"
        :page-size="10"
        layout="jumper, prev, pager, next, total ,sizes"
        :total="40"
      >
      </el-pagination>
    </div>
  </div>
</template>
<script>
import Invoice from "~/components/accounting/detection-arrest-warrants/Invoice.vue";
import InvoiceTable from "~/components/accounting/detection-arrest-warrants/InvoiceTable.vue";
import InvoiceSummary from "~/components/accounting/detection-arrest-warrants/summary/Summary.vue";
export default {
  components : {Invoice, InvoiceTable, InvoiceSummary}
}
</script>
