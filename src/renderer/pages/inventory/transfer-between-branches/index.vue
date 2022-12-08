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
import Pagination from "~/components/static/pagination";
import Invoice from "~/components/inventory/transfer-between-branches/entry/Invoice";
import InvoiceTable from "~/components/inventory/transfer-between-branches/entry/InvoiceTable";
import InvoiceSummary from "~/components/inventory/transfer-between-branches/entry/summary/Summary";
import { mapState } from "vuex";

export default {
  name: "TransferBetweenBranches",
  components: {
    Invoice,
    InvoiceTable,
    InvoiceSummary,
    Pagination
  },
  computed: {
    ...mapState({
      records: state => state.inventory.transferBetweenBranches.records,
      paginationConfig: state =>
        state.inventory.transferBetweenBranches.paginationConfig,
      isLoading: state => state.isLoading
    })
  },
  async created() {
    await Promise.all([
      this.$store.dispatch("inventory/transferBetweenBranches/fetchRecords", {
        pageNumber: 1
      }),
      this.$store.dispatch(
        "inventory/transferBetweenBranches/fetchPriceTransfer"
      )
    ]);
  },
  methods: {
    async handleSizeChange(val) {
      await this.$store.dispatch(
        "inventory/transferBetweenBranches/fetchRecords",
        {
          pageNumber: 1,
          pageSize: val
        }
      );
    },
    handleCurrentChange(val) {
      this.$store.dispatch("inventory/transferBetweenBranches/fetchRecords", {
        pageNumber: val
      });
    }
  }
};
</script>
