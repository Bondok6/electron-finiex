<template>
  <div>
		<invoice-table
      :colsHeaders="colsHeaders"
      :totalWidth="6"
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
        "customer-branch",
        "original-invoice-number",
        "sum",
        "discount",
        "tax",
        "total",
      ],

      tableData: [
        {
          id: '1',
          invoice_number: ' ',
          invoice_date: ' ',
          client_name: ' ',
          ccustomer_branch: ' ',
          originalـinvoiceـnumber: ' ',
          sum: ' ',
          discount: ' ',
          tax: ' ',
          total: ' ',
        },
        {
          id: '2',
          invoice_number: ' ',
          invoice_date: ' ',
          client_name: ' ',
          ccustomer_branch: ' ',
          originalـinvoiceـnumber: ' ',
          sum: ' ',
          discount: ' ',
          tax: ' ',
          total: ' ',
        },
        {
          id: '3',
          invoice_number: ' ',
          invoice_date: ' ',
          client_name: ' ',
          ccustomer_branch: ' ',
          originalـinvoiceـnumber: ' ',
          sum: ' ',
          discount: ' ',
          tax: ' ',
          total: ' ',
        },
        {
          id: '4',
          invoice_number: ' ',
          invoice_date: ' ',
          client_name: ' ',
          ccustomer_branch: ' ',
          originalـinvoiceـnumber: ' ',
          sum: ' ',
          discount: ' ',
          tax: ' ',
          total: ' ',
        },
      ],

      summaryTable: [
        {
          id: this.$t("total"),
          invoice_number: ' ',
          invoice_date: ' ',
          client_name: ' ',
          ccustomer_branch: ' ',
          originalـinvoiceـnumber: ' ',
          sum: ' ',
          discount: ' ',
          tax: ' ',
          total: ' ',
        },
        {
          id: "-",
          invoice_number: ' ',
          invoice_date: ' ',
          client_name: ' ',
          ccustomer_branch: ' ',
          originalـinvoiceـnumber: ' ',
          sum: ' ',
          discount: ' ',
          tax: ' ',
          total: ' ',
        },
      ],
    };
  },
};
</script>