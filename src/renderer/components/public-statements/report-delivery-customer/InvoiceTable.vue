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
        "order-number",
        "order-date",
        "client-name",
        "sales-invoice-number",
        "sum",
        "discount",
        "tax",
        "total"
      ],

      tableData: [
        {
          id: '1',
          order_name: ' ',
          order_date: ' ',
          client_name: ' ',
          sales_invoice_number: ' ',
          sum: ' ',
          discount: ' ',
          tax: ' ',
          total: ' ',
        },
        {
          id: '2',
          order_name: ' ',
          order_date: ' ',
          client_name: ' ',
          sales_invoice_number: ' ',
          sum: ' ',
          discount: ' ',
          tax: ' ',
          total: ' ',
        },
        {
          id: '3',
          order_name: ' ',
          order_date: ' ',
          client_name: ' ',
          sales_invoice_number: ' ',
          sum: ' ',
          discount: ' ',
          tax: ' ',
          total: ' ',
        },
        {
          id: '4',
          order_name: ' ',
          order_date: ' ',
          client_name: ' ',
          sales_invoice_number: ' ',
          sum: ' ',
          discount: ' ',
          tax: ' ',
          total: ' ',
        },
      ],

      summaryTable: [
        {
          id: this.$t("total"),
          order_name: ' ',
          order_date: ' ',
          client_name: ' ',
          sales_invoice_number: ' ',
          sum: ' ',
          discount: ' ',
          tax: ' ',
          total: ' ',
        },
        {
          id: "-",
          order_name: ' ',
          order_date: ' ',
          client_name: ' ',
          sales_invoice_number: ' ',
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