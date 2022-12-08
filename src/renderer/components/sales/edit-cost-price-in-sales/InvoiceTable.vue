<template>
  <el-container class="container ma-4 mt-0 mb-0 invoice-table">
    <el-table :data="tableData" style="width: 100%" stripe border max-height="250">
      <el-table-column align="center" prop="id" :label="$t('id')"  width="40"/>
      <el-table-column align="center" prop="item_name" :label="$t('item-name')" />
      <el-table-column align="center" prop="unit" :label="$t('unit')" />
      <el-table-column align="center" prop="last_purchase_price" :label="$t('last-purchase-price')" />
      <el-table-column align="center" prop="cost_price" :label="$t('cost-price')" />
      <el-table-column align="center" prop="delegate-cost" :label="$t('delegate-cost')" />
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
          item_number: '',
          item_name: '',
          unit: '',
          last_purchase_price: '',
          cost_price: '',
          delegate_cost: '',   
        },
        {
          id: '2',
          item_number: '',
          item_name: '',
          unit: '',
          last_purchase_price: '',
          cost_price: '',
          delegate_cost: '',   
        },
        {
          id: '3',
          item_number: '',
          item_name: '',
          unit: '',
          last_purchase_price: '',
          cost_price: '',
          delegate_cost: '',   
        },  
      ]
    };
  },

  methods: {    
  }
};
</script>