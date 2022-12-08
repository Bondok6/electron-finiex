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
				"supplier-client-name",
				"box-account",
				"expenses-account",
				"expenses-amount",
			],
      tableData: [
        {
          id: '1',
          invoice_number: ' ',
          invoice_date: ' ',
          supplier_client_name: ' ',
					box_account: ' ',
          expenses_account: ' ',
          expenses_amount: ' ',
        },
				{
          id: '2',
          invoice_number: ' ',
          invoice_date: ' ',
          supplier_client_name: ' ',
					box_account: ' ',
          expenses_account: ' ',
          expenses_amount: ' ',
        },
				{
          id: '3',
          invoice_number: ' ',
          invoice_date: ' ',
          supplier_client_name: ' ',
					box_account: ' ',
          expenses_account: ' ',
          expenses_amount: ' ',
        },
				{
          id: '4',
          invoice_number: ' ',
          invoice_date: ' ',
          supplier_client_name: ' ',
					box_account: ' ',
          expenses_account: ' ',
          expenses_amount: ' ',
        },
      ],

			summaryTable: [
        {
          id: this.$t("total"),
          invoice_number: '',
          invoice_date: '',
          supplier_client_name: '',
					box_account: '',
          expenses_account: '',
          expenses_amount: '',
        },
        {
          id: "-",
          invoice_number: ' ',
          invoice_date: ' ',
          supplier_client_name: ' ',
					box_account: ' ',
          expenses_account: '',
          expenses_amount: '',
        },
      ],
    };
  }, 
};
</script>