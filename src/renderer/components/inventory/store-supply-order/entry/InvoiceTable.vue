<template>
  <el-container class="container ma-4 mt-0 mb-0 invoice-table">
    <el-table :data="data" style="width: 100%" stripe border  max-height="250">
      <el-table-column align="center" type="index" width="40" :label="$t('id')" />
      <el-table-column align="center" :label="$t('invoice-number')">
      <template slot-scope="scope">
        <NuxtLink :to="localePath('/inventory/store-supply-order/edit/' + scope.row.invoiceCode)">
          <span>{{ scope.row.invoiceID }}</span>
        </NuxtLink>
        </template>
      </el-table-column> 
      <el-table-column align="center" :label="$t('invoice-date')">
        <template slot-scope="scope">
          {{scope.row.dateGr.slice(0,10)}}
        </template>
      </el-table-column> 
      <el-table-column align="center" prop="salesManName" :label="$t('delegate-name-operating-account')" />
      <el-table-column align="center" prop="netInv" :label="$t('total')"  />

    </el-table>
  </el-container>
</template>


<script>
export default {
  name: "invoice",
  props: {
    data: {
      required: true,
      default: [],
    }
  },
};
</script>
