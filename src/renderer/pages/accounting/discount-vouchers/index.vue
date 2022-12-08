<template>
  <div class="mb-8">
    <invoice :total="paginationConfig.totalRecords" />
    <Loading v-if="isLoading"></Loading>
    <invoice-table :data="[...records]" v-else />
    <invoice-summary />
    <div class="text-center">
      <!-- @size-change="handleSizeChange"
        @current-change="handleCurrentChange" -->
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
import Invoice from "~/components/accounting/discount-vouchers/entry/Invoice";
import InvoiceTable from "~/components/accounting/discount-vouchers/entry/InvoiceTable";
import InvoiceSummary from "~/components/accounting/discount-vouchers/entry/summary/Summary";
import { mapState } from "vuex";

export default {
  components: { Invoice, InvoiceTable, InvoiceSummary },
 
  computed: {
    ...mapState({
      records: (state) => state.Accounting.discountVouchers.records,
      paginationConfig: (state) =>
        state.Accounting.discountVouchers.paginationConfig,
      isLoading: (state) => state.isLoading,
    }),
  },
  async created() {
    await this.$store.dispatch("Accounting/discountVouchers/fetchRecords", {
      pageNumber: 1,
    });
  },
  methods: {
    // handle input that user can change page number to any number
    async handleCurrentChange(val) {
      await this.$store.dispatch("Accounting/discountVouchers/fetchRecords", {
        pageNumber: val,
      });
    },
    // handle select that user can change number of records per page
    async handleSizeChange(val) {
      await this.$store.dispatch("Accounting/discountVouchers/fetchRecords", {
        pageNumber: 1,
        pageSize: val,
      });
    },
  },
};
</script>
