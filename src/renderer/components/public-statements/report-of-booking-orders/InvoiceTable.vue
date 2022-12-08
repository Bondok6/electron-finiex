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
        "reservation-number",
        "reservation-date",
        "delivery-date",
        "client-name",
        "total-cost",
        "tax-value",
        "insurance-amount",
        "paid-amount",
        "remaining-amount",
      ],
      tableData: [
        {
          id: '1',
          reservation_number: ' ',
          reservation_date: ' ',
          delivery_date: ' ',
          client_name: ' ',
          total_amount: ' ',
          tax_value: ' ',   
          insurance_amount: ' ',
          paid_amount: ' ',
          remaining_amount: ' '  
        },
        {
          id: '2',
          reservation_number: ' ',
          reservation_date: ' ',
          delivery_date: ' ',
          client_name: ' ',
          total_amount: ' ',
          tax_value: ' ',   
          insurance_amount: ' ',
          paid_amount: ' ',
          remaining_amount: ' '  
        },
        {
          id: '3',
          reservation_number: ' ',
          reservation_date: ' ',
          delivery_date: ' ',
          client_name: ' ',
          total_amount: ' ',
          tax_value: ' ',   
          insurance_amount: ' ',
          paid_amount: ' ',
          remaining_amount: ' '  
        },
        {
          id: '4',
          reservation_number: ' ',
          reservation_date: ' ',
          delivery_date: ' ',
          client_name: ' ',
          total_amount: ' ',
          tax_value: ' ',   
          insurance_amount: ' ',
          paid_amount: ' ',
          remaining_amount: ' '  
        },
      ],

      summaryTable: [
        {
          id: this.$t("total"),
          reservation_number: ' ',
          reservation_date: ' ',
          delivery_date: ' ',
          client_name: ' ',
          total_amount: ' ',
          tax_value: ' ',   
          insurance_amount: ' ',
          paid_amount: ' ',
          remaining_amount: ' '  
        },
        {
          id: "-",
          reservation_number: ' ',
          reservation_date: ' ',
          delivery_date: ' ',
          client_name: ' ',
          total_amount: ' ',
          tax_value: ' ',   
          insurance_amount: ' ',
          paid_amount: ' ',
          remaining_amount: ' '  
        },
      ],
    };
  }, 
};
</script>