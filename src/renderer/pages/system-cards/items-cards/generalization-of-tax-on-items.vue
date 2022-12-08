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
      :page-size="paginationConfig.pageSize"
    >
    </el-pagination>
  </div>
</template>
<script>
import Invoice from "~/components/system-cards/items-cards/generalization-of-tax-on-items/Invoice";
import InvoiceTable from "~/components/system-cards/items-cards/generalization-of-tax-on-items/InvoiceTable";

import { mapState } from "vuex";
export default {
  name: "items-cards",
  components: { Invoice, InvoiceTable },
  async created() {
    console.log("items-cards created");
    await Promise.all([
      this.$store.dispatch("systemCards/generalization/fetchGeneralizationRecords"),
      this.$store.dispatch("systemCards/globalList/fetchCompaniesList"),
      this.$store.dispatch("systemCards/globalList/fetchItemsCardList"),
      this.$store.dispatch("systemCards/globalList/fetchItemsCategorysList"),
      this.$store.dispatch("systemCards/globalList/fetchItemsTypeList")
    ]);
  },
  computed: {
    ...mapState({
      records: state => state.systemCards.generalization.generalizationRecords,
      paginationConfig: state =>
        state.systemCards.generalization.paginationConfigGeneralization
    })
  },
  methods: {
    // handle input that user can change page number to any number
    async handleCurrentChange(val) {
      await this.$store.dispatch(
        "systemCards/generalization/fetchGeneralizationRecords",
        {
          pageNumber: val
        }
      );
    },
    // handle select that user can change number of records per page
    async handleSizeChange(val) {
      await this.$store.dispatch(
        "systemCards/generalization/fetchGeneralizationRecords",
        {
          pageNumber: 1,
          pageSize: val
        }
      );
    }
  }
};
</script>
