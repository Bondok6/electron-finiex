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
import Invoice from '~/components/purchases/purchase-price-of-items/Invoice';
import InvoiceTable from '~/components/purchases/purchase-price-of-items/InvoiceTable';
import InvoiceSummary from '~/components/purchases/purchase-price-of-items/summary/Summary';

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
