<template>
  <div class="mb-8">
    <invoice :total="paginationConfig.totalRecords" />
    <Loading v-if="isLoading"></Loading>
    <invoice-table :data="[...records]" />
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
import { mapState } from 'vuex'
import Invoice from "~/components/customer-management/customer-classification/Invoice.vue";
import InvoiceTable from "~/components/customer-management/customer-classification/InvoiceTable.vue";
import InvoiceSummary from "~/components/customer-management/customer-classification/summary/Summary.vue";
export default {
  components: { Invoice, InvoiceTable, InvoiceSummary, },
    async created() {
    await this.$store.dispatch("customerManagement/customerClassification/fetchRecords");
  },
    computed: {
    ...mapState({
      records: state => state.customerManagement.customerClassification.records,
      paginationConfig: state =>
        state.customerManagement.customerClassification.paginationConfig,
      isLoading: state => state.isLoading
    })
  },
   methods: {
    // handle input that user can change page number to any number
    async handleCurrentChange(val) {
      await this.$store.dispatch(
        "customerManagement/customerClassification/fetchRecords",
        {
          pageNumber: val
        }
      );
    },
    // handle select that user can change number of records per page
    async handleSizeChange(val) {
      await this.$store.dispatch(
        "customerManagement/customerClassification/fetchRecords",
        {
          pageNumber: 1,
          pageSize: val
        }
      );
    }
  },
}
</script>
