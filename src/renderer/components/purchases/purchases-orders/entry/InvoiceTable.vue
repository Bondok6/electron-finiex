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
        type="index"
        width="40"
        :label="$t('id')"
      />
      <el-table-column
        align="center"
        prop="invoice_number"
        :label="$t('invoice-number')"
      >
        <template slot-scope="scope">
          <NuxtLink :to="localePath('/purchases/purchases-orders/edit')">
            <span>{{scope.row.invoiceCode}}</span>
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
      >
      <template slot-scope="scope">
          {{ scope.row.netDetails ? scope.row.netDetails : 0 }}
        </template>
      </el-table-column>
    </el-table>
  </el-container>
</template>


<script>
export default {
  name: "invoice",
  props: {
    data: {
      default: [],
      required: true
    }
  },
};
</script>
