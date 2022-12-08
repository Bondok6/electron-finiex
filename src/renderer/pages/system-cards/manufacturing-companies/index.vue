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
import Invoice from "~/components/system-cards/manufacturing-companies/Invoice";
import InvoiceTable from "~/components/system-cards/manufacturing-companies/InvoiceTable";
import InvoiceSummary from "~/components/system-cards/manufacturing-companies/summary/Summary";
import {mapState} from "vuex";
export default {
  name : "manufacturing-companies",
  components: { Invoice, InvoiceTable, InvoiceSummary },

  computed: {
    ...mapState({
      records: state => state.systemCards.manuFacturing.records,
      paginationConfig: state =>
        state.systemCards.manuFacturing.paginationConfig,
      isLoading: state => state.isLoading
    })
  },
  async created() {
    await this.$store.dispatch("systemCards/manuFacturing/fetchRecords", {
      pageNumber: 1
    });
  },
  methods: {
    // handle input that user can change page number to any number
    async handleCurrentChange(val) {
      await this.$store.dispatch("systemCards/manuFacturing/fetchRecords", {
        pageNumber: val
      });
    },
    // handle select that user can change number of records per page
    async handleSizeChange(val) {
      await this.$store.dispatch("systemCards/manuFacturing/fetchRecords", {
        pageNumber: 1,
        pageSize: val
      });
    }
  }
};
</script>

