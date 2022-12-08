<template>
  <el-container class="container">
    <el-table :data="tableData" class="interval-table" style="width: 100%" border max-height="250">
      <el-table-column align="center" prop="dateGr" :label="$t('invoice-date')" />
      <el-table-column align="center" prop="invoiceCode" :label="$t('invoice-number')" />
      <el-table-column align="center" prop="quantity" :label="$t('amount')" />
      <el-table-column align="center" prop="price" :label="$t('price')" />
    </el-table>
  </el-container>
</template>


<script>
import { mapState } from "vuex";

export default {
  name: "intervals",


  computed: {
    ...mapState({
      lastFive: state => state.purchases.purchasesInvoice.lastFive
    }),
    tableData() {
      let table = [ ...this.lastFive ]
      for(let i = this.lastFive.length; i < 5; i++){
        table.push({})
      }
      return table
    }
  }
};
</script>