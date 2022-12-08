<template>
  <div style="margin: 30px">
    <div class="container mb-8 py-2">
      <invoice />

      <el-row :gutter="6" class="box-shadow">
        <el-col :xs="24" :lg="12">
          <table-one />
        </el-col>
        <el-col :xs="24" :lg="12">
          <table-two />
          <table-three />
        </el-col>
      </el-row>
      <actions />

      <div class="text-center">
        <el-pagination
          :background="true"
          :current-page.sync="page"
          :page-sizes="[10, 20, 30, 40]"
          :page-size="10"
          layout="jumper, prev, pager, next, total ,sizes"
          :total="40"
        >
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import Actions from "~/components/inventory/invoice-inventory-first-term/search-items/Actions";
import Invoice from "~/components/inventory/invoice-inventory-first-term/search-items/SearchItemsInvoice";
import TableOne from "~/components/inventory/invoice-inventory-first-term/search-items/TableOne";
import TableTwo from "~/components/inventory/invoice-inventory-first-term/search-items/TableTwo";
import TableThree from "~/components/inventory/invoice-inventory-first-term/search-items/TableThree";

export default {
  name: "Home",
  components: {
    TableOne,
    TableTwo,
    TableThree,
    Actions,
    Invoice,
  },

  data: function () {
    return {
      page: 3,
    };
  },

};
</script>
