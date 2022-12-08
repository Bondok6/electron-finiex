<template>
  <div class="mb-8">
    <invoice :total="paginationConfig.totalfirstTermInvoices" />
    <Loading v-if="isLoading"></Loading>
    <invoice-table v-else :data="firstTermInvoiceList" />
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
import { mapState } from "vuex";

import Pagination from "~/components/static/pagination";
import Invoice from "~/components/inventory/invoice-inventory-first-term/entry/InventoryInvoice";
import InvoiceTable from "~/components/inventory/invoice-inventory-first-term/entry/InventoryInvoiceTable";
import InvoiceSummary from "~/components/inventory/invoice-inventory-first-term/entry/summary/Summary";

export default {
  name: "Home",
  components: {
    Invoice,
    InvoiceTable,
    InvoiceSummary,
    Pagination
  },
  computed: {
    ...mapState({
      firstTermInvoiceList: state =>
        state.inventory.invoiceInventoryFirstTerm.firstTermInvoiceList,
      paginationConfig: state =>
        state.inventory.invoiceInventoryFirstTerm.paginationConfig,
      isLoading: state => state.isLoading
    })
  },
  methods: {
    handleCurrentChange(val) {
      this.$store.dispatch(
        "inventory/invoiceInventoryFirstTerm/fetchfirstTermInvoiceList",
        {
          pageNumber: val
        }
      );
    },
    handleSizeChange(val) {
      this.$store.dispatch(
        "inventory/invoiceInventoryFirstTerm/fetchfirstTermInvoiceList",
        {
          pageNumber: 1,
          pageSize: val
        }
      );
    }
  },
  asyncData({ store }) {
    store.dispatch(
      "inventory/invoiceInventoryFirstTerm/fetchfirstTermInvoiceList",
      {
        pageNumber: 1
      }
    );
  }
};
</script>
