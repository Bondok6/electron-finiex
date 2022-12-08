<template>
  <div class="mb-8">
    <el-row class="width-full">
      <invoice />
    </el-row>  

    <el-row class="wrapper">
      <el-col :sm="22" :lg="6">
        <informations />
      </el-col>

      <el-col :sm="22" :lg="18">
        <invoice-table />
        <invoice-summary />
      </el-col>
    </el-row>
    <pagination />
  </div>
</template>

<script>
import Invoice from "~/components/sales/invoice-cashier/Invoice";
import InvoiceTable from "~/components/sales/invoice-cashier/InvoiceTable";
import InvoiceSummary from "~/components/sales/invoice-cashier/summary/Summary";
import Informations from "~/components/sales/invoice-cashier/Informations";
import Pagination from "~/components/static/pagination";

export default {
  name: "Home",
  components: {
    Invoice,
    InvoiceTable,
    InvoiceSummary,
    Informations,
    Pagination
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  margin-left: 2rem;
  margin-right: 2rem;
  background-image: linear-gradient(rgb(243, 252, 254), rgb(230, 248, 252));
}
</style>
