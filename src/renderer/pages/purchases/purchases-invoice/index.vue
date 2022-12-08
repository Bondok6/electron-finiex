<template>
  <div class="mb-8">
    <invoice :total="paginationConfig.totalPurchases" />
    <Loading v-if="isLoading"></Loading>
    <invoice-table v-else :data="purchasesInvoiceList" />
    <invoice-summary />
    <div class="text-center">
      <el-pagination
        :background="true"
        :current-page="paginationConfig.pageNumber"
        layout="jumper, prev, pager, next, total ,sizes"
        :total="paginationConfig.totalPurchases"
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
import { mapState } from "vuex";
import Invoice from "~/components/purchases/purchases-invoice/entry/Invoice.vue";
import InvoiceTable from "~/components/purchases/purchases-invoice/entry/InvoiceTable.vue";
import InvoiceSummary from "~/components/purchases/purchases-invoice/entry/summary/Summary.vue";
export default {
  components: {
    Invoice,
    InvoiceTable,
    InvoiceSummary
  },
  computed: {
    ...mapState({
      purchasesInvoiceList: state =>
        state.purchases.purchasesInvoice.purchasesInvoiceList,
      paginationConfig: state =>
        state.purchases.purchasesInvoice.paginationConfig,
      isLoading: state => state.isLoading
    })
  },
  methods: {
    handleCurrentChange(val) {
      this.$store.dispatch(
        "purchases/purchasesInvoice/fetchPurchasesInvoiceList",
        {
          pageNumber: val
        }
      );
    },
    handleSizeChange(val) {
      this.$store.dispatch(
        "purchases/purchasesInvoice/fetchPurchasesInvoiceList",
        {
          pageNumber: 1,
          pageSize: val
        }
      );
    }
  },
  asyncData({ store }) {
    return store.dispatch(
      "purchases/purchasesInvoice/fetchPurchasesInvoiceList",
      {
        pageNumber: 1
      }
    );
  }
};
</script>
