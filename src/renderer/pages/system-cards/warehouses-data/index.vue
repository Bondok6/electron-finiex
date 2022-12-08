<template>
  <div class="mb-8">
    <invoice :total="paginationConfig.totalRecords" />
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
import { mapState } from "vuex";
import Invoice from "~/components/system-cards/warehouses-data/entry/Invoice";
import InvoiceTable from "~/components/system-cards/warehouses-data/entry/InvoiceTable";
import InvoiceSummary from "~/components/system-cards/warehouses-data/entry/summary/Summary";
export default {
  components: { Invoice, InvoiceTable, InvoiceSummary },
    computed: {
    ...mapState({
      records: (state) => state.systemCards.warehouseData.records,
      paginationConfig: (state) =>
        state.systemCards.warehouseData.paginationConfig,
      isLoading: (state) => state.isLoading,
    }),
  },
   async created() {
    // load first data on table
    await this.$store.dispatch(
       "systemCards/warehouseData/fetchRecords",
      {
        pageNumber: 1,
      }
    );
  },
  methods: {
    print() {

    },
   // handle input that user can change page number to any number
    async handleCurrentChange(val) {
      await this.$store.dispatch(
        "systemCards/warehouseData/fetchRecords",
        {
          pageNumber: val,
        }
      );
    },
    // handle select that user can change number of records per page
    async handleSizeChange(val) {
      await this.$store.dispatch(
        "systemCards/warehouseData/fetchRecords",
        {
          pageNumber: 1,
          pageSize: val,
        }
      );
    },
  },
};
</script>
