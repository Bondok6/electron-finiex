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
import Invoice from "~/components/system-cards/items-units/Invoice";
import InvoiceTable from "~/components/system-cards/items-units/InvoiceTable";
import InvoiceSummary from "~/components/system-cards/items-units/summary/Summary";
import { mapState } from "vuex";
export default {
  name: "items-cards",
  components: { Invoice, InvoiceTable, InvoiceSummary,  },
  async created() {
    await this.$store.dispatch("systemCards/units/fetchRecords");
  },
  computed: {
    ...mapState({
      records: state => state.systemCards.units.records,
      paginationConfig: state => state.systemCards.units.paginationConfig,
      isLoading: state => state.isLoading
    })
  },
  methods: {
    // handle input that user can change page number to any number
    async handleCurrentChange(val) {
      await this.$store.dispatch("systemCards/units/fetchRecords", {
        pageNumber: val
      });
    },
    // handle select that user can change number of records per page
    async handleSizeChange(val) {
      await this.$store.dispatch("systemCards/units/fetchRecords", {
        pageNumber: 1,
        pageSize: val
      });
    }
  }
};
</script>
