<template>
  <el-container class="container invoice-table new-record-table table-mod">
    <el-table
      :data="tableData"
      style="width: 100%"
      border
    >
      <el-table-column align="center" prop="item_name" :label="$t('item-name')" width="200">
        <template slot-scope="scope">
          <el-input
            size="small"
            class="text-center"
            v-model="scope.row.item_name"
          ></el-input>
        </template>
      </el-table-column>

      <el-table-column align="center" prop="unit" :label="$t('unit')">
        <template slot-scope="scope">
          <el-input
            size="small"
            class="text-center"
            v-model="scope.row.unit"
          ></el-input>
        </template>
      </el-table-column>

      <el-table-column align="center" prop="quantity" :label="$t('quantity')">
        <template slot-scope="scope">
          <el-input
            size="small"
            class="text-center"
            v-model="scope.row.quantity"
          ></el-input>
       </template>                
      </el-table-column>

      <el-table-column align="center" prop="total" :label="$t('total')">
        <template slot-scope="scope">
          <el-input
            size="small"
            class="text-center"
            v-model="scope.row.total"
          ></el-input>
        </template>  
      </el-table-column>
    </el-table>
  </el-container>
</template>


<script>
export default {
  name: "AllTable",

  data: function () {
    return {
      tableData: [
        {
          item_name: '',
          unit:'',
          quantity: '',
          total: '',
        },
        {
          item_name: '',
          unit:'',
          quantity: '',
          total: '',
        },
        {
          item_name: '',
          unit:'',
          quantity: '',
          total: '',
        },
        {
          item_name: '',
          unit:'',
          quantity: '',
          total: '',
        },
        {
          item_name: '',
          unit:'',
          quantity: '',
          total: '',
        },
        {
          item_name: '',
          unit:'',
          quantity: '',
          total: '',
        },
        {
          item_name: '',
          unit:'',
          quantity: '',
          total: '',
        },
        {
          item_name: '',
          unit:'',
          quantity: '',
          total: '',
        },
        {
          item_name: '',
          unit:'',
          quantity: '',
          total: '',
        },
        {
          item_name: '',
          unit:'',
          quantity: '',
          total: '',
        },    
        {
          item_name: '',
          unit:'',
          quantity: '',
          total: '',
        },  
        {
          item_name: '',
          unit:'',
          quantity: '',
          total: '',
        },     
      ]
    };
  },
};
</script>