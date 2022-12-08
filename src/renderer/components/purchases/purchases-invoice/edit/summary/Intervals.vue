<template>
  <el-container class="container">
    <el-table :data="tableData" class="interval-table" style="width: 100%" border max-height="250">
      <el-table-column align="center" prop="id" :label="$t('invoice-date')" />
      <el-table-column align="center" prop="item_id" :label="$t('invoice-number')" />
      <el-table-column align="center" prop="quantity" :label="$t('amount')" />
      <el-table-column align="center" prop="price" :label="$t('price')" />
    </el-table>
  </el-container>
</template>


<script>
export default {
  name: "intervals",

  data: function () {
    return {
      tableData: [
        {},
        {},
        {},
        {},
        {},
        {}
      ]
    };
  }
};
</script>