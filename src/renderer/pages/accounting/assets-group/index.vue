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
// import Pagination from "~/components/static/pagination";
import Invoice from "~/components/accounting/assets-group/entry/Invoice";
import InvoiceTable from "~/components/accounting/assets-group/entry/InvoiceTable";
import InvoiceSummary from "~/components/accounting/assets-group/entry/summary/Summary";
import { mapState, mapMutations } from "vuex";
export default {
  name: "Home",
  components: {
    Invoice,
    InvoiceTable,
    InvoiceSummary
    // Pagination
  },
  data: function() {
    return {
      page: 3
    };
  },
  computed: {
    ...mapState({
      records: state => state.Accounting.assetsGroup.records,
      paginationConfig: state => state.Accounting.assetsGroup.paginationConfig,
      isLoading: state => state.isLoading
    })
  },
  async created() {
    await this.$store.dispatch("Accounting/assetsGroup/fetchRecords", {
      pageNumber: 1
    });
  },
  methods: {
    // handle input that user can change page number to any number
    async handleCurrentChange(val) {
      await this.$store.dispatch("Accounting/assetsGroup/fetchRecords", {
        pageNumber: val
      });
    },
    // handle select that user can change number of records per page
    async handleSizeChange(val) {
      await this.$store.dispatch("Accounting/assetsGroup/fetchRecords", {
        pageSize: val
      });
    }
  }
};
</script>
