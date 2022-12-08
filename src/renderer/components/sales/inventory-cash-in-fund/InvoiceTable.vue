<template>
  <el-container class="container ma-4 mt-0 mb-0 invoice-table">
    <el-table :data="tableData" style="width: 100%" stripe border max-height="250">
      <el-table-column align="center" prop="amount_category" :label="$t('amount-category')" />
      <el-table-column align="center" prop="amount" :label="$t('amount')" />
      <el-table-column align="center" prop="the_number" :label="$t('the-number')" />
      <el-table-column align="center" prop="details" :label="$t('details')" />
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
          amount_category: '-',
          amount: '',
          the_number: '',
          details: '',                   
        },
        {
          amount_category: '-',
          amount: '',
          the_number: '',
          details: '',                   
        },
        {
          amount_category: '-',
          amount: '',
          the_number: '',
          details: '',                   
        },    
      ]
    };
  },
};
</script>