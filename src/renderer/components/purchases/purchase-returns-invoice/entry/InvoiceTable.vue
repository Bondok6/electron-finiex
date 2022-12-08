<template>
  <el-container class="container ma-4 mt-0 mb-0 invoice-table">
    <el-table
      :data="data"
      style="width: 100%"
      stripe
      border
      max-height="750"
      id="mytab1"
    >
      <el-table-column
        align="center"
        width="40"
        :label="$t('id')"
        type="index"
      />
      <el-table-column
        align="center"
        :label="$t('invoice-number')"
      >
        <template slot-scope="scope">
          <NuxtLink :to="localePath('/purchases/purchase-returns-invoice/edit' + scope.row.voucherID)">
            <span>{{ scope.row.invoiceCode }}</span>
          </NuxtLink>
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        prop="dateGr"
        :label="$t('invoice-date')"
      />
      <el-table-column
        align="center"
        prop="customerName"
        :label="$t('supplier-name')"
      />
      <el-table-column
        align="center"
        prop="netDetails"
        :label="$t('total')"
      />
      <el-table-column
        align="center"
        :label="$t('invoice-status')"
      >
        <template slot-scope="scope">
          {{ scope.row.done ? $t("delayed") : $t("not-delayed") }}
        </template>
      </el-table-column>
        
    </el-table>
  </el-container>
</template>


<script>
export default {
  name: "invoice",

  props:['data'],

};
</script>
