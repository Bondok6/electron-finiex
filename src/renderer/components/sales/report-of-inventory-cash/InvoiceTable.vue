<template>
  <el-container class="container ma-4 mt-0 mb-0 invoice-table">
    <el-table :data="tableData" style="width: 100%" stripe border max-height="250">
      <el-table-column align="center" prop="user_name" :label="$t('user-name')" />
      <el-table-column align="center" prop="box-inventory-amount" :label="$t('box-inventory-amount')" />
      <el-table-column align="center" prop="transfer_status" :label="$t('transfer-status')" />
      <el-table-column align="center" prop="equal" :label="$t('=')"  width="150"/>
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
          user_name: '-',
          box_inventory_amount: '',
          transfer_status: '',
          equal: '',                   
        },
        {
          user_name: '-',
          box_inventory_amount: '',
          transfer_status: '',
          equal: '',                   
        },
        {
          user_name: '-',
          box_inventory_amount: '',
          transfer_status: '',
          equal: '',                   
        },   
      ]
    };
  },
};
</script>