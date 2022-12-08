<template>
  <el-container class="container ma-4 mt-0 mb-0 invoice-table">
    <el-table :data="tableData" style="width: 100%" stripe border  max-height="250">
      <el-table-column align="center" prop="id" width="40" :label="$t('id')" />
      <el-table-column align="center" prop="invoice_date" :label="$t('invoice-date')">
        <template slot-scope="data">
          <NuxtLink :to="localePath('/sales/special-offers-sales/edit')">
            <span>{{data.row.invoice_date}}</span>
          </NuxtLink>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="invoice_number" :label="$t('invoice-number')" />
      <el-table-column align="center" prop="offer_end" :label="$t('offer-end-date')" />
    </el-table>
  </el-container>
</template>


<script>
export default {
  name: "invoice",

  data: function () {
    return {
      tableData: [
        {
          id: '1',
          invoice_date: '1',
          invoice_number: 'بدون',
          offer_end : '10/10/2020',
        },
        {
          id: '2',
          invoice_date: '2',
          invoice_number: 'بدون',
          offer_end : '10/10/2020',
        },
        {
          id: '3',
          invoice_date: '3',
          invoice_number: 'بدون',
          offer_end : '10/10/2020',
        },
        {
          id: '4',
          invoice_date: '4',
          invoice_number: 'بدون',
          offer_end : '10/10/2020',
        },
      ]
    };
  },

  methods: {

  }
};
</script>
