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
import Invoice from "~/components/customer-management/customers-data/entry/Invoice.vue";
import InvoiceTable from "~/components/customer-management/customers-data/entry/InvoiceTable.vue";
import InvoiceSummary from "~/components/customer-management/customers-data/entry/summary/Summary.vue";
import{ mapState} from "vuex";
export default {
  components: { Invoice, InvoiceTable, InvoiceSummary,  },
  computed: {
    ...mapState({
      records: state => state.customerManagement.customer.records,
      paginationConfig: state =>
        state.customerManagement.customer.paginationConfig,
      isLoading: state => state.isLoading
    })
  },  methods: {
    // handle input that user can change page number to any number
    async handleCurrentChange(val) {
      await this.$store.dispatch(
        "customerManagement/customer/fetchRecords",
        {
          pageNumber: val
        }
      );
    },
    // handle select that user can change number of records per page
    async handleSizeChange(val) {
      await this.$store.dispatch(
        "customerManagement/customer/fetchRecords",
        {
          pageNumber: 1,
          pageSize: val
        }
      );
    }
  },
  async created() {
    await this.$store.dispatch("customerManagement/customer/fetchRecords");
  }
};
</script>
