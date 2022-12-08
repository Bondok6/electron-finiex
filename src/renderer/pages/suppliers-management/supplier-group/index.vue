<template>
  <div class="mb-8">
    <invoice :total="paginationConfig.totalRecords" />
    <Loading v-if="isLoading"></Loading>
    <invoice-table :data="[...records]" v-else/>
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
  import { mapState } from "vuex";
  import Invoice from "~/components/suppliers-management/supplier-group/invoice.vue";
  import InvoiceTable from "~/components/suppliers-management/supplier-group/invoiceTable.vue";
  import InvoiceSummary from "~/components/suppliers-management/supplier-group/Summary/summary.vue";
  export default {
  components: { Invoice, InvoiceTable, InvoiceSummary },
  computed: {
  ...mapState({
  records: state => state.suppliersManagement.supplierGroup.records,
  paginationConfig: state =>
  state.suppliersManagement.supplierGroup.paginationConfig,
  isLoading: state => state.isLoading
})
},
  methods: {
  // handle input that user can change page number to any number
  async handleCurrentChange(val) {
  await this.$store.dispatch(
  "suppliersManagement/supplierGroup/fetchRecords",
{
  pageNumber: val
}
  );
},
  // handle select that user can change number of records per page
  async handleSizeChange(val) {
  await this.$store.dispatch(
  "suppliersManagement/supplierGroup/fetchRecords",
{
  pageNumber: 1,
  pageSize: val
}
  );
}
},
  async created() {
  await this.$store.dispatch("suppliersManagement/supplierGroup/fetchRecords");
}
};
</script>
