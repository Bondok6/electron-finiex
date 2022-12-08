<template>
  <el-container class="container ma-4 mt-0 mb-0 invoice-table">
    <el-table :data="tableData" style="width: 100%" stripe border  max-height="250">
      <el-table-column align="center" prop="item_name" :label="$t('item-name')" width="300"/>
      <el-table-column align="center" prop="unit" :label="$t('unit')" />
      <el-table-column align="center" prop="warehouse" :label="$t('warehouse')" />
      <el-table-column align="center" prop="quantity" :label="$t('quantity')" />
 
  
  
   <el-table-column align="center" width="60">
        <template>
          <el-popconfirm
            icon="el-icon-info"
            icon-color="red"
            :title="$t('confirm')"
          >
            
            <i slot="reference" class="setting-button danger-color el-icon-delete-solid"></i>
          </el-popconfirm>

        </template>
      </el-table-column>  
   
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
         
          item_name: 'اسم الصنف',
          unit: '100',
          warehouse: '5',
          quantity: '40',
     
        },
        {
          item_name: 'اسم الصنف',
          unit: '100',
          warehouse: '5',
          quantity: '40',
        },
        {
          item_name: 'اسم الصنف',
          unit: '100',
          warehouse: '5',
          quantity: '40',
        },
      
      ]
    };
  },

  methods: {
  
  }
};
</script>