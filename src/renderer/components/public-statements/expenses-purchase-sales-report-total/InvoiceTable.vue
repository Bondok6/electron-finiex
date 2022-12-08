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
        'date',
        'supplier-client-name',
        'invoice-type',
        'total-quantities',
        'total-invoice',
        'total-expenses',
      ],
      tableData: [
        {
          id: '1',
          invoice_number: ' ',
          date: ' ',
          supplier_client_name: ' ',
          invoice_type: ' ',
          total_quantities: ' ',
          total_invoice: ' ',
          total_expenses: ' ',
     
        },
        {
        id: '2',
        invoice_number: ' ',
        date: ' ',
        supplier_client_name: ' ',
        invoice_type: ' ',
        total_quantities: ' ',
        total_invoice: ' ',
        total_expenses: ' ',
        },
        {
        id: '3',
        invoice_number: ' ',
        date: ' ',
        supplier_client_name: ' ',
        invoice_type: ' ',
        total_quantities: ' ',
        total_invoice: ' ',
        total_expenses: ' ',
      },
      {
        id: '4',
        invoice_number: ' ',
        date: ' ',
        supplier_client_name: ' ',
        invoice_type: ' ',
        total_quantities: ' ',
        total_invoice: ' ',
        total_expenses: ' ',
        },
      ],

      summaryTable: [
        {
          id: this.$t("total"),
          invoice_number: '',
          date: '',
          supplier_client_name: '',
          invoice_type: '',
          total_quantities: '',
          total_invoice: '',
          total_expenses: '',
        },
        {
          id: "-",
          invoice_number: ' ',
          date: ' ',
          supplier_client_names: ' ',
          invoice_type: ' ',
          total_quantities: ' ',
          total_invoice: ' ',
          total_expenses: ' ',
        },
      ],
    };
  },
};
</script>