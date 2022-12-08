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
    <!-- <pagination /> -->
  </div>
</template>

<script>
import { mapState } from "vuex";
// import Pagination from "~/components/static/pagination";
import Invoice from "~/components/accounting/client-payment-bond/entry/Invoice";
import InvoiceTable from "~/components/accounting/client-payment-bond/entry/InvoiceTable";
import InvoiceSummary from "~/components/accounting/client-payment-bond/entry/summary/Summary";

export default {
  name: "Home",
  components: {
    Invoice,
    InvoiceTable,
    InvoiceSummary
    // Pagination
  },

  computed: {
    ...mapState({
      records: state => state.Accounting.clientPaymentBond.records,
      paginationConfig: state =>
        state.Accounting.clientPaymentBond.paginationConfig,
      isLoading: state => state.isLoading
    })
  },
  async created() {
    // load first data on table
     
    await this.$store.dispatch("Accounting/clientPaymentBond/fetchRecords", {
      pageNumber: 1
    });
  },
  methods: {
    // handle input that user can change page number to any number
    async handleCurrentChange(val) {
      await this.$store.dispatch("Accounting/clientPaymentBond/fetchRecords", {
        pageNumber: val
      });
    },
    // handle select that user can change number of records per page
    async handleSizeChange(val) {
      await this.$store.dispatch("Accounting/clientPaymentBond/fetchRecords", {
        pageNumber: 1,
        pageSize: val
      });
    }
  }
};
</script>
