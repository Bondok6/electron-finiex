<template>
  <el-container class="container ma-4 mt-0 mb-0 invoice-table">
    <el-table :data="tableData" style="width: 100%" stripe border max-height="250">
      <el-table-column align="center" prop="statement" :label="$t('statement')" />
      <el-table-column align="center" prop="statistic" :label="$t('statistic')" />
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
          statement: 'إجمالي كميات مخزون أول المدة',
          statistic: '450450',
        },
        {
          statement: 'إجمالي كميات مخزون أول المدة',
          statistic: '450450',
        },
        {
          statement: 'إجمالي كميات مخزون أول المدة',
          statistic: '450450',
        },
        {
          statement: 'إجمالي كميات مخزون أول المدة',
          statistic: '450450',
        }
      ]
    };
  },

  methods: {
    
  }
};
</script>