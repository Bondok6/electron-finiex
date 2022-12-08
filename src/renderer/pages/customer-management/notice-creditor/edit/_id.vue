<template>
    <div class="mb-8">
      <invoice />
      <invoice-table />
      <invoice-summary />
  
      <!-- <pagination /> -->
    </div>
  </template>
  
  <script>
  // import Pagination from "~/components/static/pagination";
  import Invoice from "~/components/customer-management/notice-creditor/edit/Invoice";
  import InvoiceTable from "~/components/customer-management/notice-creditor/edit/InvoiceTable";
  import InvoiceSummary from "~/components/customer-management/notice-creditor/edit/summary/Summary";
  
  export default {
    name: "Home",
    components: {
      Invoice,
      InvoiceTable,
      InvoiceSummary
      // Pagination
    },
  };
  </script>
  