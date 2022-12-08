<template>
  <div class="mb-8">
    <invoice :total="paginationConfig.totalRecords" />
    <invoice-table :data="[...records]" />
    <el-pagination
      :background="true"
      :current-page="paginationConfig.pageNumber"
      layout="jumper, prev, pager, next, total ,sizes"
      :total="paginationConfig.totalRecords"
      :page-sizes="[10, 20, 30, 40]"
      @current-change="handleCurrentChange"
      @size-change="handleSizeChange"
      :page-size="paginationConfig.pageSize">
    </el-pagination>
  </div>
</template>
<script>
import Invoice from "~/components/system-cards/items-prices/Invoice";
import InvoiceTable from "~/components/system-cards/items-prices/InvoiceTable";
import { mapState } from "vuex";
export default {
  name: "items-prices",
  components: { Invoice, InvoiceTable },
  async created() {
    await Promise.all([
      this.$store.dispatch("systemCards/itemsPrices/fetchRecords"),
      this.$store.dispatch("systemCards/itemsPrices/fetchItemsCardList"),
      this.$store.dispatch("systemCards/itemsPrices/fetchUnitsList"),
      this.$store.dispatch("systemCards/itemsPrices/fetchItemsCategorysList"),
      this.$store.dispatch("systemCards/itemsPrices/fetchCompaniesList"),
      this.$store.dispatch("systemCards/itemsPrices/fetchItemsTypeList")
    ]);
  },
  computed: {
    ...mapState({
      records: state => state.systemCards.itemsPrices.records,
      paginationConfig: state => state.systemCards.itemsPrices.paginationConfig
    })
  },
  methods: {
    // handle input that user can change page number to any number
    async handleCurrentChange(val) {
      await this.$store.dispatch("systemCards/itemsPrices/fetchRecords", {
        pageNumber: val
      });
    },
    // handle select that user can change number of records per page
    async handleSizeChange(val) {
      await this.$store.dispatch("systemCards/itemsPrices/fetchRecords", {
        pageNumber: 1,
        pageSize: val
      });
    }
  }
};
</script>
