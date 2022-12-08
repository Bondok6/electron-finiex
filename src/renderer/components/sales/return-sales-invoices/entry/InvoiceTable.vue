<template>
  <el-container class="container ma-4 mt-0 mb-0 invoice-table">
    <el-table
      :data="tableData"
      style="width: 100%"
      stripe
      border
      max-height="250"
    >
      <el-table-column align="center" prop="id" :label="$t('id')" width="40" />
      <el-table-column
        align="center"
        prop="invoice_no"
        :label="$t('invoice-number')"
      >
        <NuxtLink :to="localePath('/sales/return-sales-invoices/edit')">
          <span>2154254128</span>
        </NuxtLink>
      </el-table-column>
      <el-table-column
        align="center"
        prop="invoice_date"
        :label="$t('invoice-date')"
      />
      <el-table-column
        align="center"
        prop="client_name"
        :label="$t('client-name')"
      />
      <el-table-column
        align="center"
        prop="original_invoice_number"
        :label="$t('invoice-original-number')"
      />
      <el-table-column
        align="center"
        prop="total"
        :label="$t('total')"
        width="100"
      />
      <el-table-column
        align="center"
        prop="invoice_status"
        :label="$t('invoice-status')"
        width="100"
      />
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
          id: 1,
          invoice_no: "1",
          invoice_date: "20/12/2020",
          client_name: "بدون",
          original_invoice_number: "123123",
          total: "66",
          invoice_status: 8,
        },
        {
          id: 2,
          invoice_no: "2",
          invoice_date: "20/12/2020",
          client_name: "بدون",
          original_invoice_number: "123",
          total: "888",
          invoice_status: 8,
        },
        {
          id: 3,
          invoice_no: "3",
          invoice_date: "20/12/2020",
          client_name: "بدون",
          original_invoice_number: "312",
          total: "88",
          invoice_status: 8,
        },
        {
          id: 4,
          invoice_no: "4",
          invoice_date: "20/12/2020",
          client_name: "بدون",
          original_invoice_number: "1232",
          total: "99",
          invoice_status: 8,
        },
        {
          id: 5,
          invoice_no: "5",
          invoice_date: "20/12/2020",
          client_name: "بدون",
          original_invoice_number: "123",
          total: " 9",
          invoice_status: 8,
        },
      ],
    };
  },

  methods: {},
};
</script>