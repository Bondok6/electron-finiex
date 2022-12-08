<template>
  <div>
    <invoice-table
      :colsHeaders="colsHeaders"
      :totalWidth="5"
      :tableData="tableData"
      :summaryTable="summaryTable"
    />
  </div>
</template>


<script>
import invoiceTable from '~/components/table/invoice_table.vue';

export default {
  name: "invoice",
  components: {invoiceTable},

  data: function () {
    return {
      colsHeaders: [
        "invoice-number",
        "invoice-date",
        "client-name",
        "original-invoice-number",
        "sum",
        "tax",
        "insurance-cost",
        "total",
      ],

      tableData: [
        {
          id: '1',
          invoice_number: ' ',
          invoice_date: ' ',
          client_name: ' ',
          original_invoice_number: ' ',
          sum: ' ',
          tax: ' ',   
          insurance_amount: ' ',
          total: ' ',
        },
        {
          id: '2',
          invoice_number: ' ',
          invoice_date: ' ',
          client_name: ' ',
          original_invoice_number: ' ',
          sum: ' ',
          tax: ' ',   
          insurance_amount: ' ',
          total: ' ',
        },
        {
          id: '3',
          invoice_number: ' ',
          invoice_date: ' ',
          client_name: ' ',
          original_invoice_number: ' ',
          sum: ' ',
          tax: ' ',   
          insurance_amount: ' ',
          total: ' ',
        },
        {
          id: '4',
          invoice_number: ' ',
          invoice_date: ' ',
          client_name: ' ',
          original_invoice_number: ' ',
          sum: ' ',
          tax: ' ',   
          insurance_amount: ' ',
          total: ' ',
        },
      ],

      summaryTable: [
        {
          id: this.$t("total"),
          invoice_number: ' ',
          invoice_date: ' ',
          client_name: ' ',
          original_invoice_number: ' ',
          sum: ' ',
          tax: ' ',   
          insurance_amount: ' ',
          total: ' ', 
        },
        {
          id: "-",
          invoice_number: ' ',
          invoice_date: ' ',
          client_name: ' ',
          original_invoice_number: ' ',
          sum: ' ',
          tax: ' ',   
          insurance_amount: ' ',
          total: ' ',
        },
      ],
    };
  },
};
</script>