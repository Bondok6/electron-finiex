<template>
  <el-container class="container ma-4 mt-3 mb-0 invoice-table border-radius">
    <el-table :data="tableData" class="width-full border-radius" stripe border max-height="250">
      <el-table-column align="center" prop="id" :label="$t('id')" width="40" />
      <el-table-column align="center" prop="item_name" :label="$t('item-name')" />
      <el-table-column align="center" prop="warehouse" :label="$t('warehouse')" />
      <el-table-column align="center" prop="opening_quantity" :label="$t('opening-quantity')" />
      <el-table-column align="center" prop="imported_quantity" :label="$t('imported-quantity')" />
      <el-table-column align="center" prop="exported_quantity" :label="$t('exported-quantity')" />
      <el-table-column align="center" prop="current_quantity" :label="$t('current-quantity')" />
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
          item_name: 'نقاص 225*250 كلاس -5 ',
          warehouse: 'مستودع المعرض',
          opening_quantity: '0',
          imported_quantity: '0',
          exported_quantity: '0',
          current_quantity: '0',
        },
        {
          id: '2',
          item_name: 'نقاص 225*250 كلاس -5 ',
          warehouse: 'مستودع المعرض',
          opening_quantity: '0',
          imported_quantity: '0',
          exported_quantity: '0',
          current_quantity: '0',
        },
        {
          id: '3',
          item_name: 'نقاص 225*250 كلاس -5 ',
          warehouse: 'مستودع المعرض',
          opening_quantity: '0',
          imported_quantity: '0',
          exported_quantity: '0',
          current_quantity: '0',
        }
      ]
    };
  },

  methods: {
    
  }
};
</script>