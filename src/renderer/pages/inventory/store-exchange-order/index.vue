<template>
  <div class="mb-8">
    <invoice :total="paginationConfig.totalRecords"/>
    <Loading v-if="isLoading"></Loading>
    <invoice-table :data="records" v-else/>
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
import Invoice from '~/components/inventory/store-exchange-order/entry/Invoice';
import InvoiceTable from '~/components/inventory/store-exchange-order/entry/InvoiceTable';
import InvoiceSummary from '~/components/inventory/store-exchange-order/entry/summary/Summary';

export default {
  name: 'Home',
  components: {
    Invoice, InvoiceTable, InvoiceSummary
  },

  computed: {
    ...mapState({
      records: state => state.inventory.storeExchangeOrder.records,
      paginationConfig: state => state.inventory.storeExchangeOrder.paginationConfig,
      isLoading: state => state.isLoading
    })
  },

  async created() {
    await this.$store.dispatch("inventory/storeExchangeOrder/fetchRecords", {
      pageNumber: 1
    });
  },
  methods: {
    async handleSizeChange(val) {
      await this.$store.dispatch("inventory/storeExchangeOrder/fetchRecords", {
        pageNumber: 1,
        pageSize: val
      });
    },
    handleCurrentChange(val) {
      this.$store.dispatch("inventory/storeExchangeOrder/fetchRecords", {
        pageNumber: val
      });
    }
  }
}
</script>
