<template>
  <el-container class="container ma-4 mt-0 mb-0 invoice-table">
    <el-table :data="tableData" style="width: 100%" stripe border  max-height="250">
      <el-table-column align="center" prop="id" width="40" :label="$t('id')" />
      <el-table-column align="center" prop="invoice_number" :label="$t('invoice-number')">
        <template slot-scope="data">
          <NuxtLink :to="localePath('/sales/sales-invoices/edit')">
            <span>{{data.row.invoice_number}}</span>
          </NuxtLink>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="invoice_date" :label="$t('invoice-date')" />
      <el-table-column align="center" prop="client_name" :label="$t('client-name')" />
      <el-table-column align="center" prop="total" :label="$t('total')" />
      <el-table-column align="center" prop="invoice_status" :label="$t('invoice-status')" />
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
          invoice_number: '1',
          invoice_date: '10/10/2020',
          client_name : 'البنك الأهلي',
          total : '435432',
          invoice_status : 'مرحلة',
        },
        {
          id: '2',
          invoice_number: '2',
          invoice_date: '10/10/2020',
          client_name : 'البنك الأهلي',
          total : '435432',
          invoice_status : 'مرحلة',
        },
        {
          id: '3',
          invoice_number: '3',
          invoice_date: '10/10/2020',
          client_name : 'البنك الأهلي',
          total : '435432',
          invoice_status : 'مرحلة',
        },
        {
          id: '4',
          invoice_number: '4',
          invoice_date: '10/10/2020',
          client_name : 'البنك الأهلي',
          total : '435432',
          invoice_status : 'مرحلة',
        },
      ]
    };
  },

  methods: {

  }
};
</script>
