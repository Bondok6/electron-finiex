<template>
  <el-container class="container ma-4 mt-3 mb-4 invoice-table" style="margin-top: 0 !important; margin-bottom: 0 !important">
    <el-table :data="tableData" style="width: 100%" stripe border  max-height="250">
      <el-table-column align="center" prop="id" :label="$t('id')" width="40"/>
      <el-table-column align="center" prop="manufacturing_number" :label="$t('manufacturing-number')" />
      <el-table-column align="center" prop="patch_number" :label="$t('patch-number')" />
      <el-table-column align="center" prop="patch_date" :label="$t('patch-date')" />
      <el-table-column align="center" prop="expiration_date" :label="$t('expiration-date')" />
      <el-table-column align="center" prop="quantity" :label="$t('quantity')" />
      <el-table-column align="center" prop="selling_price" :label="$t('selling-price')" />
      <el-table-column align="center" prop="cost_price" :label="$t('cost-price')" />
      <el-table-column align="center" prop="notes" :label="$t('notes')" />
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
          manufacturing_number: '-',
          patch_number: '-',
          patch_date: '-',
          expiration_date: '-',
          quantity: '-',
          selling_price: '-',
          cost_price: '-',
          notes: '-',
        },
         {
          id: '-',
          manufacturing_number: '-',
          patch_number: '-',
          patch_date: '-',
          expiration_date: '-',
          quantity: '-',
          selling_price: '-',
          cost_price: '-',
          notes: '-',
        },
         {
          id: '-',
          manufacturing_number: '-',
          patch_number: '-',
          patch_date: '-',
          expiration_date: '-',
          quantity: '-',
          selling_price: '-',
          cost_price: '-',
          notes: '-',
        },
         {
          id: '-',
          manufacturing_number: '-',
          patch_number: '-',
          patch_date: '-',
          expiration_date: '-',
          quantity: '-',
          selling_price: '-',
          cost_price: '-',
          notes: '-',
        },
         {
          id: '-',
          manufacturing_number: '-',
          patch_number: '-',
          patch_date: '-',
          expiration_date: '-',
          quantity: '-',
          selling_price: '-',
          cost_price: '-',
          notes: '-',
        },
         {
          id: '-',
          manufacturing_number: '-',
          patch_number: '-',
          patch_date: '-',
          expiration_date: '-',
          quantity: '-',
          selling_price: '-',
          cost_price: '-',
          notes: '-',
        }
      ],
   };
  },

  methods: {
  
  }
};
</script>