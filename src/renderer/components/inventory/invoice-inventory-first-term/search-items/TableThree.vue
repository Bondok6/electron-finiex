<template>
  <el-container class="container ma-4 mt-3 mb-0 invoice-table">
    <el-table :data="tableData" class="width-full border-radius-top" stripe border  max-height="350">
      <el-table-column align="center" prop="branch_name" :label="$t('branch-name')" />
      <el-table-column align="center" prop="opening_quantity" :label="$t('opening-quantity')" />
      <el-table-column align="center" prop="actual_quantity" :label="$t('actual-quantity')" />
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
          branch_name: '-',
          opening_quantity: '-',
          actual_quantity: '-',
        },
        {
          branch_name: '-',
          opening_quantity: '-',
          actual_quantity: '-',
        },
        {
          branch_name: '-',
          opening_quantity: '-',
          actual_quantity: '-',
        },
        {
          branch_name: '-',
          opening_quantity: '-',
          actual_quantity: '-',
        },
        {
          branch_name: '-',
          opening_quantity: '-',
          actual_quantity: '-',
        },
        {
          branch_name: '-',
          opening_quantity: '-',
          actual_quantity: '-',
        },
        {
          branch_name: '-',
          opening_quantity: '-',
          actual_quantity: '-',
        },
      ],
   };
  },

  methods: {
  
  }
};
</script>