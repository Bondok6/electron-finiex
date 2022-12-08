<template>
  <el-container class="container ma-4 mt-0 mb-0 invoice-table min-height-250">
    <el-table :data="tableData" style="width: 100%" stripe border max-height="250">
      <el-table-column align="center" prop="id" :label="$t('id')"  width="50"/>
      <el-table-column align="center" prop="item_name" :label="$t('item-name')" :width="350">
        <template>
          <span>2154254128</span>
          {{' - ' + $t('item-name')}}
        </template>
      </el-table-column>
      <el-table-column align="center" prop="start_quantity" :label="$t('starting-quantity')" />
      <el-table-column align="center" prop="start_cost" :label="$t('opening-cost')" />
      <el-table-column align="center" prop="net_purchases_quantity" :label="$t('net-purchases-quantity')" />
      <el-table-column align="center" prop="net_purchases_cost" :label="$t('net-purchase-value')" />
      <el-table-column align="center" prop="purchases_cost" :label="$t('purchase-expenses')" />
      <el-table-column align="center" prop="average_purchase_cost" :label="$t('average-purchase-price')" />
      <el-table-column align="center" prop="last_purchase_cost" :label="$t('last-purchase-price')" />
      <el-table-column align="center" prop="current_cost" :label="$t('current-cost')" />
      <template #append>
    <el-table :data="summaryTable" class="width-full summaryTable" stripe border :span-method="arraySpanMethod" max-height="250">
            <el-table-column align="center" prop="id" :label="$t('id')"  width="50"/>
            <el-table-column align="center" prop="item_name" :label="$t('item-name')" :width="350"/>
            <el-table-column align="center" prop="start_quantity" :label="$t('starting-quantity')" />
            <el-table-column align="center" prop="start_cost" :label="$t('opening-cost')" />
            <el-table-column align="center" prop="net_purchases_quantity" :label="$t('net-purchases-quantity')" />
            <el-table-column align="center" prop="net_purchases_cost" :label="$t('net-purchase-value')" />
            <el-table-column align="center" prop="purchases_cost" :label="$t('purchase-expenses')" />
            <el-table-column align="center" prop="average_purchase_cost" :label="$t('average-purchase-price')" />
            <el-table-column align="center" prop="last_purchase_cost" :label="$t('last-purchase-price')" />
            <el-table-column align="center" prop="current_cost" :label="$t('current-cost')" />
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
          id: '1',
          item_name: '33621205',
          start_quantity: '125235632',
          start_cost: '10000',
          net_purchases_quantity: '10',
          net_purchases_cost: '10',
          average_purchase_cost: '20000',
          last_purchase_cost: '30000',
          current_cost: '30000',
          purchases_cost: '30000',
                   
        },
        {
          id: '2',
          item_name: '33621205',
          start_quantity: '125235632',
          start_cost: '10000',
          net_purchases_quantity: '10',
          net_purchases_cost: '10',
          average_purchase_cost: '20000',
          last_purchase_cost: '30000',
          current_cost: '30000',
          purchases_cost: '30000',
                   
        },
        {
          id: '2',
          item_name: '33621205',
          start_quantity: '125235632',
          start_cost: '10000',
          net_purchases_quantity: '10',
          net_purchases_cost: '10',
          average_purchase_cost: '20000',
          last_purchase_cost: '30000',
          current_cost: '30000',
          purchases_cost: '30000',
                   
        },
      ],
      summaryTable : [
        {
          id: this.$t('total'),
          item_name: '',
          start_quantity: '',
          start_cost: '',
          net_purchases_quantity: '',
          net_purchases_cost: '',
          average_purchase_cost: '',
          last_purchase_cost: '',
          current_cost: '',
          purchases_cost: '',
                   
        },
        {
          id: '-',
          item_name: '-',
          start_quantity: '-',
          start_cost: '-',
          net_purchases_quantity: '-',
          net_purchases_cost: '-',
          average_purchase_cost: '-',
          last_purchase_cost: '-',
          current_cost: '-',
          purchases_cost: '-',
                   
        },
      ]

    };
  },

  methods: {    
    arraySpanMethod({ row, column, rowIndex, columnIndex }) {
      if (rowIndex === 0) {
        if (columnIndex === 0) {
          return [1, 2];
        } else if (columnIndex > 0 && columnIndex < 2) {
          return [0, 0];
        }
      }
    },
  }
};
</script>