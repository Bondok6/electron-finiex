<template>
  <el-container class="container ma-4 mt-0 mb-0 invoice-table">
    <el-table :data="tableData" style="width: 100%" stripe border  max-height="250">
      <el-table-column align="center" prop="id" width="40" :label="$t('id')"  />
      <el-table-column align="center" prop="adjustment_number" :label="$t('adjustment-number')" >
      <template>
        <NuxtLink :to="localePath('/inventory/stock-adjustment-increase/edit')">
          <span>2154254128</span>
        </NuxtLink>
        </template>
      </el-table-column>  
      <el-table-column align="center" prop="adjustment_date" :label="$t('adjustment-date')"  />
      <el-table-column align="center" prop="notes" :label="$t('notes')"  />
      <el-table-column align="center" prop="total" :label="$t('total')"  />
      <el-table-column align="center" prop="invoice_status" :label="$t('invoice-status')" />

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
          adjustment_number: '2154254128',
          adjustment_date: '01 / 04 / 2021',
          notes : 'بدون',
          total : '131331',
          invoice_status : 'مرحل',
        },
        {

          id: '2',
          adjustment_number: '2154254128',
          adjustment_date: '01 / 04 / 2021',
          notes : 'بدون',
          total : '131331',
          invoice_status : 'مرحل',
        },
        {

          id: '3',
          adjustment_number: '2154254128',
          adjustment_date: '01 / 04 / 2021',
          notes : 'بدون',
          total : '131331',
          invoice_status : 'مرحل',
        },
        {

          id: '4',
          adjustment_number: '2154254128',
          adjustment_date: '01 / 04 / 2021',
          notes : 'بدون',
          total : '131331',
          invoice_status : 'مرحل',
        },

      ]
    };
  },

  methods: {

  }
};
</script>
