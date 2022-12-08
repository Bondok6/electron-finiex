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
        'invoice-number',
        'offer-date',
        'offer-end',
        'client-name',
        'sum',
        'discount',
        'tax',
        'total',
      ],

      tableData: [
        {
          id: '1',
          invoice_number: ' ',
          offer_date: ' ',
          client_name: ' ',
          sum: ' ',
          tax: ' ',
          total: ' ',     
        },
        {
          id: '2',
          invoice_number: ' ',
          offer_date: ' ',
          client_name: ' ',
          sum: ' ',
          tax: ' ',
          total: ' ',     
        },
        {
          id: '3',
          invoice_number: ' ',
          offer_date: ' ',
          client_name: ' ',
          sum: ' ',
          tax: ' ',
          total: ' ',     
        },
        {
          id: '4',
          invoice_number: ' ',
          offer_date: ' ',
          client_name: ' ',
          sum: ' ',
          tax: ' ',
          total: ' ',     
        },
      ],

      summaryTable: [
        {
          id: this.$t("total"),
          invoice_number: ' ',
          offer_date: ' ',
          client_name: ' ',
          sum: ' ',
          tax: ' ',
          total: ' ',   
        },
        {
          id: "-",
          invoice_number: ' ',
          offer_date: ' ',
          client_name: ' ',
          sum: ' ',
          tax: ' ',
          total: ' ',   
        },
      ],
    };
  },
};
</script>