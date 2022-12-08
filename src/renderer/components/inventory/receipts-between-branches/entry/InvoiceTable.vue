<template>
  <el-container class="container ma-4 mt-0 mb-0 invoice-table">
    <el-table :data="data" style="width: 100%" stripe border  max-height="750">
      <el-table-column align="center" type="index" width="40" :label="$t('id')"  />
      <el-table-column align="center" :label="$t('receipt-number')">
      <template slot-scope="scope">
        <NuxtLink :to="localePath('/inventory/receipts-between-branches/edit/' + scope.row.invoiceCode)">
          <span>{{ scope.row.invoiceId }}</span>
        </NuxtLink>
        </template>
      </el-table-column> 
      <el-table-column align="center" :label="$t('receipt-date')">
        <template slot-scope="scope">
          {{ scope.row.invoiceDate.slice(0, 10) }}
        </template>
      </el-table-column> 
      <el-table-column align="center" prop="toBrancheName" :label="$t('receiving-branch')"  />
      <el-table-column align="center" prop="fromBrancheName" :label="$t('branch-transferred-from')"  />
      <el-table-column v-if="hidePrice === false" align="center" prop="total" :label="$t('total')" />
    </el-table>
  </el-container>
</template>


<script>
import { mapState } from "vuex";
export default {
  name: "invoice",
  props: {
    data: {
      required: true,
      default: [],
    }
  },
  computed: {
    ...mapState({
      hidePrice: state => state.inventory.receiptsBetweenBranches.hidePrice,
    })
  },
};
</script>
