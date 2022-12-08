<template>
  <div class="mb-8">
    <invoice :total="paginationConfig.totalRecords" />
    <Loading v-if="isLoading"></Loading>
    <invoice-table :data="records" v-else />
    <invoice-summary />
    <div class="text-center">
      <el-pagination
        :background="true"
        :current-page="paginationConfig.pageNumber"
        layout="jumper, prev, pager, next, total ,sizes"
        :total="paginationConfig.totalRecords"
        :page-sizes="[10, 20, 30, 40]"
        @current-change="handleCurrentChange"
        @size-change="handleSizeChange"
        :page-size="paginationConfig.pageSize"
      >
      </el-pagination>
    </div>
  </div>
</template>
<script>
import Invoice from "~/components/purchases/purchase-returns-invoice/entry/Invoice.vue";
import InvoiceTable from "~/components/purchases/purchase-returns-invoice/entry/InvoiceTable.vue";
import InvoiceSummary from "~/components/purchases/purchase-returns-invoice/entry/summary/Summary";
import { mapState } from "vuex";
export default {
  components : {
    Invoice,
    InvoiceTable,
    InvoiceSummary
  },
  data: function () {
    return {};
  },
  computed: {
    ...mapState({
      records: state => state.purchases.purchaseReturnsInvoice.records,
      paginationConfig: state => state.purchases.purchaseReturnsInvoice.paginationConfig,
      isLoading: state => state.isLoading
    })
  },
  async created() {
    await this.$store.dispatch("purchases/purchaseReturnsInvoice/fetchRecords", {
      pageNumber: 1
    });
  },
  methods: {
    async handleSizeChange(val) {
      await this.$store.dispatch("purchases/purchaseReturnsInvoice/fetchRecords", {
        pageNumber: 1,
        pageSize: val
      });
    },
    handleCurrentChange(val) {
      this.$store.dispatch("purchases/purchaseReturnsInvoice/fetchRecords", {
        pageNumber: val
      });
    }
  }
}
</script>
