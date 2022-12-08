<template>
  <el-container class="container ma-4 mt-0 mb-0 invoice-table">
    <el-table :data="tableData" style="width: 100%" stripe border  max-height="250">
      <el-table-column align="center" prop="id" width="40" :label="$t('id')" />
      <el-table-column align="center" prop="reservation_number" :label="$t('reservation-number')">
        <template slot-scope="data">
          <NuxtLink :to="localePath('/sales/bookings-order/edit')">
            <span>{{data.row.reservation_number}}</span>
          </NuxtLink>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="reservation_date" :label="$t('reservation-date')" />
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
          reservation_number: 1,
          reservation_date: '01 / 04/ 2021',
          client_name : 'البنك الأهلي',
          total : '435432',
          invoice_status: 'مرحلة',
        },
        {
          id: '2',
          reservation_number: 2,
          reservation_date: '01 / 04/ 2021',
          client_name : 'البنك الأهلي',
          total : '435432',
          invoice_status: 'مرحلة',
        },
        {
          id: '3',
          reservation_number: 3,
          reservation_date: '01 / 04/ 2021',
          client_name : 'البنك الأهلي',
          total : '435432',
          invoice_status: 'مرحلة',
        },
        {
          id: '4',
          reservation_number: 4,
          reservation_date: '01 / 04/ 2021',
          client_name : 'البنك الأهلي',
          total : '435432',
          invoice_status: 'مرحلة',
        },
      ]
    };
  },

  methods: {

  }
};
</script>
