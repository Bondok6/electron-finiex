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
      />
      <el-table-column
        align="center"
        prop="invoice_date"
        :label="$t('invoice-date')"
      />
      <el-table-column
        align="center"
        prop="client_name"
        :label="$t('client-name')"
        width="200"
      />
      <el-table-column
        align="center"
        prop="branch_customer"
        :label="$t('customer-branch')"
      />
      <el-table-column
        align="center"
        prop="original_invoice_number"
        :label="$t('original-invoice-number')"
      />
      <el-table-column align="center" prop="sum" :label="$t('sum')" />
      <el-table-column align="center" prop="discount" :label="$t('discount')" />
      <el-table-column align="center" prop="tax" :label="$t('tax%')" />
      <el-table-column align="center" prop="total" :label="$t('total')" />
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
          branch_customer: "3",
          sum: "300",
          tax: "3",
          discount: "3",
          total: "66",
        },
        {
          id: 2,
          invoice_no: "2",
          invoice_date: "20/12/2020",
          client_name: "بدون",
          original_invoice_number: "123123",
          branch_customer: "3",
          sum: "300",
          tax: "3",
          discount: "3",
          total: "66",
        },
        {
          id: 3,
          invoice_no: "3",
          invoice_date: "20/12/2020",
          client_name: "بدون",
          original_invoice_number: "123123",
          branch_customer: "3",
          sum: "300",
          tax: "3",
          discount: "3",
          total: "66",
        },
        {
          id: 4,
          invoice_no: "4",
          invoice_date: "20/12/2020",
          client_name: "بدون",
          original_invoice_number: "123123",
          branch_customer: "3",
          sum: "300",
          tax: "3",
          discount: "3",
          total: "66",
        },
        {
          id: 5,
          invoice_no: "5",
          invoice_date: "20/12/2020",
          client_name: "بدون",
          original_invoice_number: "123123",
          branch_customer: "3",
          sum: "300",
          tax: "3",
          discount: "3",
          total: "66",
        },
      ],
    };
  },

  methods: {},
};
</script>