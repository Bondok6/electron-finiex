<template>
  <el-container class="container ma-4 mt-0 mb-0 invoice-table">
    <el-table :data="tableData" style="width: 100%" stripe border  max-height="250">
      <el-table-column align="center" prop="id" width="40" :label="$t('id')"  />
      <el-table-column align="center" prop="pattern_type" :label="$t('pattern-type')" />
      <el-table-column align="center" prop="item_account" :label="$t('item-account')"  />
      <el-table-column align="center" prop="discount_count" :label="$t('discount-account')"  />
      <el-table-column align="center" prop="calculation_of_sales_cost" :label="$t('calculation-of-sales-cost')"  />
      <el-table-column align="center" prop="inventory_account" :label="$t('inventory-account')"  />
      <el-table-column align="center" prop="vat_calculation" :label="$t('vat-calculation')"  />

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
          pattern_type: 'مخزون أول المدة',
          item_account: '',
          discount_count: '',
          calculation_of_sales_cost: '',
          inventory_account: '',
          vat_calculation: '',
        },
        {
          id: '2',
          pattern_type: 'مخزون أخر المدة',
          item_account: '',
          discount_count: '',
          calculation_of_sales_cost: '',
          inventory_account: '',
          vat_calculation: '',
        },
        {
          id: '3',
          pattern_type: 'مبيعات',
          item_account: '',
          discount_count: '',
          calculation_of_sales_cost: '',
          inventory_account: '',
          vat_calculation: '',
        },
        {
          id: '4',
          pattern_type: 'مرتجع مبيعات',
          item_account: '',
          discount_count: '',
          calculation_of_sales_cost: '',
          inventory_account: '',
          vat_calculation: '',
        },
      ]
    };
  },

  methods: {

  }
};
</script>
