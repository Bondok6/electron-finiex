<template>
  <div class="mb-8">
    <invoice :total="paginationConfig.totalRecords" />
    <Loading v-if="isLoading"></Loading>
    <invoice-table :data="[...records]" v-else />
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
import Invoice from "~/components/accounting/payment-compound-vouchers/entry/Invoice";
import InvoiceTable from "~/components/accounting/payment-compound-vouchers/entry/InvoiceTable";
import InvoiceSummary from "~/components/accounting/payment-compound-vouchers/entry/summary/Summary";
export default {
  components: { Invoice, InvoiceTable, InvoiceSummary },
  data: function () {
    return {};
  },
  computed: {
    ...mapState({
      records: (state) => state.Accounting.paymentCompoundVouchers.records,
      paginationConfig: (state) =>
        state.Accounting.paymentCompoundVouchers.paginationConfig,
      isLoading: (state) => state.isLoading,
    }),
  },
  async created() {
    // load first data on table
     
    await this.$store.dispatch(
      "Accounting/paymentCompoundVouchers/fetchRecords",
      {
        pageNumber: 1,
      }
    );
  },
  methods: {
    // handle input that user can change page number to any number
    async handleCurrentChange(val) {
      await this.$store.dispatch(
        "Accounting/paymentCompoundVouchers/fetchRecords",
        {
          pageNumber: val,
        }
      );
    },
    // handle select that user can change number of records per page
    async handleSizeChange(val) {
      await this.$store.dispatch(
        "Accounting/paymentCompoundVouchers/fetchRecords",
        {
          pageNumber: 1,
          pageSize: val,
        }
      );
    },
  },
};
</script>
