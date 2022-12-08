<template>
  <div class="mb-8">
    <invoice />
    <invoice-table />
    <invoice-summary />

    <div class="text-center">
        
      <el-pagination
        :background="true"
        :current-page.sync="page"
        :page-sizes="[10, 20, 30, 40]"
        :page-size="10"
        layout="jumper, prev, pager, next, total ,sizes"
        :total="40">
      </el-pagination>
    </div>

  </div>
</template>

<script>
import Invoice from './Invoice';
import InvoiceTable from './InvoiceTable';
import InvoiceSummary from './summary/Summary';

export default {
  name: 'Home',
  components: {
    Invoice, InvoiceTable, InvoiceSummary
  },

  data: function () {
    return {
      page: 3
    };
  }
}
</script>
