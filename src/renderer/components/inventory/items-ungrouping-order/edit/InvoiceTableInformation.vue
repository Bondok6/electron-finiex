<template>
  <el-container class="container mt-0 mb-0 invoice-table editable-table">
    <el-table :data="tableData" style="width: 100%" stripe border max-height="250">
      <el-table-column align="center" prop="id" :label="$t('id')" width="40" >
        <template slot-scope="scope">
          <el-input
            ref="id"
            size="small"
            style="text-align: center"
            v-model="scope.row.id"
          ></el-input>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="item_name" :label="$t('item-name')" width="450" >
        <template slot-scope="scope">
          <el-input
            size="small"
            style="text-align: center"
            v-model="scope.row.item_name"
          ></el-input>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="item_unit" :label="$t('unit')" >
        <template slot-scope="scope">
          <el-input
            size="small"
            style="text-align: center"
            v-model="scope.row.item_unit"
          ></el-input>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="warehouse" :label="$t('warehouse')" >
        <template slot-scope="scope">
          <el-input
            size="small"
            style="text-align: center"
            v-model="scope.row.warehouse"
          ></el-input>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="quantity" :label="$t('scale-quantity')" >
        <template slot-scope="scope">
          <el-input
            size="small"
            style="text-align: center"
            v-model="scope.row.quantity"
          ></el-input>
        </template>
      </el-table-column>


  <template #append>
    <el-table :data="summaryTable" class="width-full summaryTable" stripe border :span-method="arraySpanMethod" max-height="250">
      <el-table-column align="center" prop="id" :label="$t('id')" width="40" />
      <el-table-column align="center" prop="item_name" :label="$t('item-name')" width="450" />
      <el-table-column align="center" prop="item_unit" :label="$t('unit')" />
      <el-table-column align="center" prop="warehouse" :label="$t('warehouse')" />
      <el-table-column align="center" prop="quantity" :label="$t('scale-quantity')" />
    </el-table>
  </template>

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
          id: 1,
          item_name: '2000 - كوع زاوية 225*250 كلاس',
          item_unit: 'حبة',
          warehouse: 'المستودع',
          quantity: 8,
        },
        {
          id: 2,
          item_name: '2000 - كوع زاوية 225*250 كلاس',
          item_unit: 'حبة',
          warehouse: 'المستودع',
          quantity: 9,
        }
      ],


    summaryTable: [

        {
          id: this.$t('total'),
          item_name: '22',
          item_unit: '22',
          warehouse: '444',
          quantity: '11',
        },
        {
          id: '-',
          item_name: '22',
          item_unit: '22',
          warehouse: '444',
          quantity: '11',
        },
      ]
   };
  },

 
    methods: {
    arraySpanMethod({ row, column, rowIndex, columnIndex }) {
      if (rowIndex === 0) {
        if (columnIndex === 0) {
          return [1, 4];
        }  else if (columnIndex > 0 && columnIndex < 4) {
          return [0, 0];
       }
      }
    },
  },
};
</script>