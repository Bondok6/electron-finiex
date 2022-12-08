<template>
  <div class="mb-8">
    <invoice />
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
import { mapState } from "vuex";
import Invoice from "~/components/accounting/details-of-daily-movement/Invoice";
import InvoiceTable from "~/components/accounting/details-of-daily-movement/InvoiceTable";
import InvoiceSummary from "~/components/accounting/details-of-daily-movement/summary/Summary";
export default {
  components: {
    Invoice,
    InvoiceTable,
    InvoiceSummary
  },
  computed: {
    ...mapState({
      records: state => state.Accounting.detailsOfDailyMovement.records,
      paginationConfig: state =>
        state.Accounting.detailsOfDailyMovement.paginationConfig,
      isLoading: state => state.isLoading
    })
  },
  async created() {
    await Promise.all([
      this.$store.dispatch("lists/getBranchesList"),
      this.$store.dispatch("lists/getMovementTypesList"),
      this.$store.dispatch("lists/getCostCentersList"),
      this.$store.dispatch(
        "Accounting/accountingDailyJournal/fetchSubAccountsList",
        {
          mainOrSub: false
        }
      ),
      this.$store.dispatch("Accounting/detailsOfDailyMovement/fetchRecords", {
        pageNumber: 1
      }),
      this.$store.dispatch("General/getFinancialYear")
    ]).catch(err => {
      this.$message.error(err.message);
    });
  },
  methods: {
    // handle input that user can change page number to any number
    async handleCurrentChange(val) {
      await this.$store.dispatch(
        "Accounting/detailsOfDailyMovement/fetchRecords",
        {
          pageNumber: val
        }
      );
    },
    // handle select that user can change number of records per page
    async handleSizeChange(val) {
      await this.$store.dispatch(
        "Accounting/detailsOfDailyMovement/fetchRecords",
        {
          pageNumber: 1,
          pageSize: val
        }
      );
    }
  }
};
</script>
