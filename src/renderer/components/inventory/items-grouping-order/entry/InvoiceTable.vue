<template>
  <el-container class="container ma-4 mt-0 mb-0 invoice-table">
    <el-table :data="tableData" style="width: 100%" stripe border  max-height="250">
      <el-table-column align="center" prop="id" width="40" :label="$t('id')"  />
      <el-table-column align="center" prop="order_number" :label="$t('order-number')">
      <template>
        <NuxtLink :to="localePath('/inventory/items-grouping-order/edit')">
          <span>1</span>
        </NuxtLink>
        </template>
      </el-table-column> 
      <el-table-column align="center" prop="order_date" :label="$t('order-date')"  />
      <el-table-column align="center" prop="notes" :label="$t('notes')"  />
      <el-table-column align="center" prop="total_quantities" :label="$t('total-quantities')"  />

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
          order_number: '1',
          order_date: '01/04/2020',
          notes: 'بدون',
          total_quantities : '500050',
        },
        {
          id: '2',
          order_number: '1',
          order_date: '01/04/2020',
          notes: 'بدون',
          total_quantities : '500050',
        },
        {
          id: '3',
          order_number: '1',
          order_date: '01/04/2020',
          notes: 'بدون',
          total_quantities : '500050',
        },
        {
          id: '4',
          order_number: '1',
          order_date: '01/04/2020',
          notes: 'بدون',
          total_quantities : '500050',
        },
      ]
    };
  },

  methods: {

  }
};
</script>
