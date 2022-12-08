<template>
  <div class="mb-8">
    <invoice :total="paginationConfig.totalRecords" />
    <Loading v-if="isLoading"></Loading>
    <invoice-table :data="[...records]" v-else />
    <invoice-summary />
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
</template>
<script>
import { mapState, mapMutations } from "vuex";
import Invoice from "~/components/accounting/receipt-compound-vouchers/entry/Invoice";
import InvoiceTable from "~/components/accounting/receipt-compound-vouchers/entry/InvoiceTable";
import InvoiceSummary from "~/components/accounting/receipt-compound-vouchers/entry/summary/Summary";
export default {
  components: { Invoice, InvoiceTable, InvoiceSummary },

  computed: {
    ...mapState({
      records: state => state.Accounting.receiptCompoundVouchers.records,
      paginationConfig: state =>
        state.Accounting.receiptCompoundVouchers.paginationConfig,
      isLoading: state => state.isLoading
    })
  },

  async created() {
    await this.$store.dispatch(
      "Accounting/receiptCompoundVouchers/fetchRecords",
      {
        pageNumber: 1
      }
    );
  },
  methods: {
    // handle input that user can change pageNumber
    async handleCurrentChange(val) {
      await this.$store.dispatch(
        "Accounting/receiptCompoundVouchers/fetchRecords",
        {
          pageNumber: val
        }
      );
    },

    async handleSizeChange(val) {
      await this.$store.dispatch(
        "Accounting/receiptCompoundVouchers/fetchRecords",
        {
          pageNumber: 1,
          pageSize: val
        }
      );
    }
  }
};
</script>
