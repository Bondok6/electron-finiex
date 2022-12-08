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
    </div>
  </div>
</template>

<script>
import Actions from "~/components/system-cards/items-cards/search-items/Actions";
import Invoice from "~/components/system-cards/items-cards/search-items/SearchItemsInvoice";
import TableOne from "~/components/system-cards/items-cards/search-items/TableOne";
import TableTwo from "~/components/system-cards/items-cards/search-items/TableTwo";
import TableThree from "~/components/system-cards/items-cards/search-items/TableThree";

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
