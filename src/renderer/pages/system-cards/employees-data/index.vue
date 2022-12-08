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
import Pagination from "~/components/static/pagination";
import Invoice from "~/components/system-cards/employees-data/entry/Invoice.vue";
import InvoiceTable from "~/components/system-cards/employees-data/entry/InvoiceTable.vue";
import InvoiceSummary from "~/components/system-cards/employees-data/entry/summary/Summary.vue";
import { mapState } from "vuex";
export default {
  components: { Invoice, InvoiceTable, InvoiceSummary, Pagination },
  computed: {
    ...mapState({
      records: state => state.systemCards.employeesData.records,
      paginationConfig: state =>
        state.systemCards.employeesData.paginationConfig,
      isLoading: state => state.isLoading
    })
  },
  methods: {
    // handle input that user can change page number to any number
    async handleCurrentChange(val) {
      await this.$store.dispatch("systemCards/employeesData/fetchRecords", {
        pageNumber: val
      });
    },
    // handle select that user can change number of records per page
    async handleSizeChange(val) {
      await this.$store.dispatch("systemCards/employeesData/fetchRecords", {
        pageNumber: 1,
        pageSize: val
      });
    }
  },
  async created() {
    await this.$store.dispatch("systemCards/employeesData/fetchRecords");
  }
};
</script>


