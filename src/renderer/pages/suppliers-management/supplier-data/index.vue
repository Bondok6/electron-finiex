<template>
  <div>
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
import Invoice from "~/components/suppliers-management/supplier-data/entry/Invoice";
import InvoiceTable from "~/components/suppliers-management/supplier-data/entry/InvoiceTable";
import InvoiceSummary from "~/components/suppliers-management/supplier-data/entry/summary/InvoiceSummary";
import { mapState } from "vuex";

export default {
  name: 'SupplierData',
  components: { Invoice, InvoiceTable, InvoiceSummary },
  computed: {
    ...mapState({
      records: state => state.suppliersManagement.supplierData.records,
      paginationConfig: state => state.suppliersManagement.supplierData.paginationConfig,
      isLoading: state => state.isLoading
    })
  },
  async created() {
    await this.$store.dispatch("suppliersManagement/supplierData/fetchRecords", {
      pageNumber: 1
    });
  },
  methods: {
    async handleSizeChange(val) {
      await this.$store.dispatch("suppliersManagement/supplierData/fetchRecords", {
        pageNumber: 1,
        pageSize: val
      });
    },
    handleCurrentChange(val) {
      this.$store.dispatch("suppliersManagement/supplierData/fetchRecords", {
        pageNumber: val
      });
    }
  }
};
</script>
