<template>
  <div>
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
import Invoice from "~/components/suppliers-management/supplier-Classification/Invoice";
import InvoiceTable from "~/components/suppliers-management/supplier-Classification/InvoiceTable";
import InvoiceSummary from "~/components/suppliers-management/supplier-Classification/summary/InvoiceSummary";
import { mapState } from 'vuex'

export default {
  components: { Invoice, InvoiceTable, InvoiceSummary, },
  async created() {
    await this.$store.dispatch("suppliersManagement/supplierClassification/fetchRecords");
  },
  computed: {
    ...mapState({
      records: state => state.suppliersManagement.supplierClassification.records,
      paginationConfig: state =>
        state.suppliersManagement.supplierClassification.paginationConfig,
      isLoading: state => state.isLoading
    })
  },
  methods: {
    // handle input that user can change page number to any number
    async handleCurrentChange(val) {
      await this.$store.dispatch(
        "suppliersManagement/supplierClassification/fetchRecords",
        {
          pageNumber: val
        }
      );
    },
    // handle select that user can change number of records per page
    async handleSizeChange(val) {
      await this.$store.dispatch(
        "suppliersManagement/supplierClassification/fetchRecords",
        {
          pageNumber: 1,
          pageSize: val
        }
      );
    }
  },

};
</script>
