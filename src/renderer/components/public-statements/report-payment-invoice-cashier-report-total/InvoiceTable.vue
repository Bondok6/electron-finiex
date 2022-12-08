<template>
  <el-container class="container ma-4 mt-0 mb-0 invoice-table">
    <el-table :data="tableData" style="width: 100%" stripe border max-height="250">
      <el-table-column 
        align="center" 
        prop="id"  
        :label="$t('id')" 
        width="40"
      />
      <el-table-column 
        align="center" 
        prop="details" 
        :label="$t('details')" 
      />
      <el-table-column 
        align="center" 
        prop="total" 
        :label="$t('total')" 
      />
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
          details: 'المبيعات النقدية',
          total: '450450',
        },
        {
          id: '2',
          details: 'المبيعات النقدية',
          total: '450450',
        },
        {
          id: '3',
          details: 'المبيعات النقدية',
          total: '450450',
        },
        {
          id: '4',
          details: 'المبيعات النقدية',
          total: '450450',
        }
      ]
    };
  },

  methods: {
    
  }
};
</script>