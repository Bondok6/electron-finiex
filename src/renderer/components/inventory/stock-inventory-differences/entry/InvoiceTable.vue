<template>
  <el-container class="container ma-4 mt-0 mb-0 invoice-table">
    <el-table :data="tableData" style="width: 100%" stripe border  max-height="250">
      <el-table-column align="center" prop="id" width="40" :label="$t('id')"  />
      <el-table-column align="center" prop="inventory_number" :label="$t('inventory-number')" >
      <template>
        <NuxtLink :to="localePath('/inventory/stock-inventory-differences/edit')">
          <span>2154254128</span>
        </NuxtLink>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="inventory_date" :label="$t('inventory-date')"  />
      <el-table-column align="center" prop="notes" :label="$t('notes')"  />
      <el-table-column align="center" prop="total" :label="$t('total')"  />

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
          inventory_number: '2154254128',
          inventory_date: 'بدون',
          notes : 'ارباح و خسائر',
          total : 'مدين',
        },
        {

          id: '2',
          inventory_number: '2154254128',
          inventory_date: 'بدون',
          notes : 'ارباح و خسائر',
          total : 'مدين',
        },
        {

          id: '3',
          inventory_number: '2154254128',
          inventory_date: 'بدون',
          notes : 'ارباح و خسائر',
          total : 'مدين',
        },
        {

          id: '4',
          inventory_number: '2154254128',
          inventory_date: 'بدون',
          notes : 'ارباح و خسائر',
          total : 'مدين',
        },

      ]
    };
  },

  methods: {

  }
};
</script>
