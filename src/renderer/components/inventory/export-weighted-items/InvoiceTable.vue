<template>
  <el-container class="container ma-4 mt-0 mb-0 invoice-table border-radius">
    <el-table :data="tableData" class="width-full" stripe border max-height="250">
      <el-table-column align="center" prop="id" :label="$t('id')" width="40" />
      <el-table-column align="center" prop="item_name" :label="$t('item-name')" />
      <el-table-column align="center" prop="unit" :label="$t('unit')" />
      <el-table-column align="center" prop="category" :label="$t('category')" />
      <el-table-column align="center" prop="item_selling_price" :label="$t('item-selling-price')" />
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
          item_name: '',
          unit: '',
          category: '',
          item_selling_price: '',
        },
        {
          id: '2',
          item_name: '',
          unit: '',
          category: '',
          item_selling_price: '',
        },
        {
          id: '3',
          item_name: '',
          unit: '',
          category: '',
          item_selling_price: '',
        }
      ]
    };
  },

  methods: {
    
  }
};
</script>