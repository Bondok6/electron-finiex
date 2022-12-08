<template>
  <el-container class="container ma-4 mt-3 mb-0 invoice-table ">
    <el-table :data="tableData" class="width-full border-radius-top" stripe border >
      <el-table-column align="center" prop="id" :label="$t('id')" width="40"/>
      <el-table-column align="center" prop="item_number" :label="$t('item-number')" />
      <el-table-column align="center" prop="item_name" :label="$t('item-name')" />
      <el-table-column align="center" prop="category" :label="$t('category')" />
      <el-table-column align="center" prop="unit" :label="$t('unit')" />
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
          id: '-',
          item_number: '-',
          item_name: '-',
          category: '-',
          unit: '-'
        },
        {
          id: '-',
          item_number: '-',
          item_name: '-',
          category: '-',
          unit: '-'
        },
        {
          id: '-',
          item_number: '-',
          item_name: '-',
          category: '-',
          unit: '-'
        },
        {
          id: '-',
          item_number: '-',
          item_name: '-',
          category: '-',
          unit: '-'
        },
        {
          id: '-',
          item_number: '-',
          item_name: '-',
          category: '-',
          unit: '-'
        },
        {
          id: '-',
          item_number: '-',
          item_name: '-',
          category: '-',
          unit: '-'
        },
        {
          id: '-',
          item_number: '-',
          item_name: '-',
          category: '-',
          unit: '-'
        },
        {
          id: '-',
          item_number: '-',
          item_name: '-',
          category: '-',
          unit: '-'
        },
        {
          id: '-',
          item_number: '-',
          item_name: '-',
          category: '-',
          unit: '-'
        },
        {
          id: '-',
          item_number: '-',
          item_name: '-',
          category: '-',
          unit: '-'
        },
        {
          id: '-',
          item_number: '-',
          item_name: '-',
          category: '-',
          unit: '-'
        },
        {
          id: '-',
          item_number: '-',
          item_name: '-',
          category: '-',
          unit: '-'
        },
        {
          id: '-',
          item_number: '-',
          item_name: '-',
          category: '-',
          unit: '-'
        },
        {
          id: '-',
          item_number: '-',
          item_name: '-',
          category: '-',
          unit: '-'
        },
      ],
   };
  },

  methods: {
  
  }
};
</script>