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
        "bond-number",
        "bond-date",
        "box-bank",
        "account-name",
        "payment-method",
        "statement",
        "tax-value",
        "bond-amount",
      ],
      tableData: [
        {
          id: '1',
          bond_number: ' ',
          bond_date: ' ',
          box_bank: ' ',
          account_name: ' ',
          payment_method: ' ',
          statement: ' ',
          tax_value: ' ',
          bond_amount: ' ',
        },
        {
          id: '2',
          bond_number: ' ',
          bond_date: ' ',
          box_bank: ' ',
          account_name: ' ',
          payment_method: ' ',
          statement: ' ',
          tax_value: ' ',
          bond_amount: ' ',
        },
        {
          id: '3',
          bond_number: ' ',
          bond_date: ' ',
          box_bank: ' ',
          account_name: ' ',
          payment_method: ' ',
          statement: ' ',
          tax_value: ' ',
          bond_amount: ' ',
        },
        {
          id: '4',
          bond_number: ' ',
          bond_date: ' ',
          box_bank: ' ',
          account_name: ' ',
          payment_method: ' ',
          statement: ' ',
          tax_value: ' ',
          bond_amount: ' ',
        },
      ],

      summaryTable: [
        {
          id: this.$t("total"),
          bond_number: ' ',
          bond_date: ' ',
          box_bank: ' ',
          account_name: ' ',
          payment_method: ' ',
          statement: ' ',
          tax_value: '',
          bond_amount: '',
        },
        {
          id: "-",
          bond_number: ' ',
          bond_date: ' ',
          box_bank: ' ',
          account_name: ' ',
          payment_method: ' ',
          statement: ' ',
          tax_value: ' ',
          bond_amount: ' ',
        },
      ],
    };
  },
};
</script>