<template>
  <div class="mb-8">
    <invoice />
    <Loading v-if="isLoading"></Loading>
    <invoice-table v-else :data="records" />
    <div class="text-center mt-4">
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
import Pagination from "~/components/static/pagination";
import Invoice from "~/components/inventory/inventory-store-pages/Invoice";
import InvoiceTable from "~/components/inventory/inventory-store-pages/InvoiceTable";
import { mapState } from "vuex";

export default {
  name: "InventoryStorePages",
  components: {
    Invoice,
    InvoiceTable,
    Pagination
  },

  computed: {
    ...mapState({
      isLoading: state => state.isLoading,
      paginationConfig: state =>
        state.inventory.inventoryStorePages.paginationConfig,
      records: state => state.inventory.inventoryStorePages.records
    })
  },

  async created() {
    await Promise.all([
      this.$store.dispatch("inventory/inventoryStorePages/fetchRecords", {
        pageNumber: 1
      }),
      this.$store.dispatch("systemCards/globalList/fetchItemsCardList"),
      this.$store.dispatch("systemCards/globalList/fetchUnitsList"),
      this.$store.dispatch("systemCards/globalList/fetchCompaniesList"),
      this.$store.dispatch("systemCards/globalList/fetchWarehousesList"),
      this.$store.dispatch("systemCards/globalList/fetchItemsCategoryiesList"),
      this.$store.dispatch(
        "systemCards/globalList/fetchItemsSubCategoryiesList"
      )
    ]).catch(err => {
      this.$message.error(err.message);
    });
  },

  methods: {
    async handleSizeChange(val) {
      await this.$store.dispatch("inventory/inventoryStorePages/fetchRecords", {
        pageNumber: 1,
        pageSize: val
      });
    },
    handleCurrentChange(val) {
      this.$store.dispatch("inventory/inventoryStorePages/fetchRecords", {
        pageNumber: val
      });
    }
  }
};
</script>
