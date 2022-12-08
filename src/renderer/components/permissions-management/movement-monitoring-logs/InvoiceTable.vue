<template>
  <el-container class="container ma-4 mt-0 mb-0 invoice-table">
    <el-table :data="tableData" style="width: 100%" stripe border max-height="250">
      <el-table-column align="center" prop="id" :label="$t('id')" :width="50" />
      <el-table-column align="center" prop="item_name" :label="$t('entry-date')" :width="350">
      </el-table-column>
      <el-table-column align="center" prop="entry_date" :label="$t('input-time')" />
      <el-table-column align="center" prop="input_time" :label="$t('item/Document-No')" />
      <el-table-column align="center" prop="the_description" :label="$t('the-description')" />
    </el-table>
  </el-container>
</template>
<script>
export default {
  name: "invoice",

  data: function () {
    return {
      tableData: [
        {
          id: '1',
          item_name: '2020 / 01 / 03',
          entry_date: '08 : 05 : 01',
          input_time: '1000',
          the_description: 'دخول مستخدم ناجحة',
        },
        {
          id: '1',
          item_name: '2020 / 05 / 03',
          entry_date: '07 : 02 : 06',
          input_time: '2000',
          the_description: 'خروج المستخدم',
        },
      ],
    };
  },
};
</script>