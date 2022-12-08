<template>
  <el-container class="container ma-4 mt-0 mb-0 invoice-table">
    <el-table :data="tableData" style="width: 100%" stripe border  max-height="250">
      <el-table-column align="center" prop="item_number" width="40" :label="$t('id')" />
      <el-table-column align="center" prop="asset_number" :label="$t('asset-number')" />
      <el-table-column align="center" prop="asset_name" :label="$t('asset-name')" />
      <el-table-column align="center" prop="structure_No" :label="$t('structure-No')" />
      <el-table-column align="center" prop="supplier_name" :label="$t('supplier-name')" />
      <el-table-column align="center" prop="depreciation_ratio" :label="$t('depreciation-ratio')" />
      <el-table-column align="center" prop="depreciation_date" :label="$t('depreciation-date')" />
      <el-table-column align="center" prop="purchase_date" :label="$t('purchase-date')" />
      <el-table-column align="center" prop="purchasing_price" :label="$t('purchasing-price')" />
      <el-table-column align="center" prop="addition_value" :label="$t('addition-value')" />
      <template #append>

    <el-table :data="summaryTable" class="width-full summaryTable lastSummaryCell" stripe border :span-method="arraySpanMethod" max-height="250">

      <el-table-column align="center" prop="item_number" width="40" :label="$t('id')" />
      <el-table-column align="center" prop="asset_number" :label="$t('asset-number')" />
      <el-table-column align="center" prop="asset_name" :label="$t('asset-name')" />
      <el-table-column align="center" prop="structure_No" :label="$t('structure-No')" />
      <el-table-column align="center" prop="supplier_name" :label="$t('supplier-name')" />
      <el-table-column align="center" prop="depreciation_ratio" :label="$t('depreciation-ratio')" />
      <el-table-column align="center" prop="depreciation_date" :label="$t('depreciation-date')" />
      <el-table-column align="center" prop="purchase_date" :label="$t('purchase-date')" />
      <el-table-column align="center" prop="purchasing_price" :label="$t('purchasing-price')" />
      <el-table-column align="center" prop="addition_value" :label="$t('addition-value')" />
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

          item_number: '1',
          asset_number: '2154254128',
          asset_name: 'بدون',
          structure_No : '10002',
          supplier_name : 'محمد',
          depreciation_ratio : '10%',
          depreciation_date : '10/10/2020',
          purchase_date : '10/10/2020',
          purchasing_price : '200202',
          addition_value  : '20000'

        },
        {

          item_number: '2',
          asset_number: '2154254128',
          asset_name: 'بدون',
          structure_No : '10002',
          supplier_name : 'محمد',
          depreciation_ratio : '10%',
          depreciation_date : '10/10/2020',
          purchase_date : '10/10/2020',
          purchasing_price : '200202',
          addition_value  : '20000'

        },
      ],
      summaryTable : [
        {
          item_number: '2',
          asset_number: '2154254128',
          asset_name: 'بدون',
          structure_No : '10002',
          supplier_name : 'محمد',
          depreciation_ratio : '10%',
          depreciation_date : '10/10/2020',
          purchase_date : 'الاجمالى',
          purchasing_price : '200202',
          addition_value  : '20000'
      },
      {
         item_number: '-',
          asset_number: '-',
          asset_name: '-',
          structure_No : '-',
          supplier_name : '-',
          depreciation_ratio : '-',
          depreciation_date : '-',
         purchase_date : '-',
          purchasing_price : '-',
          addition_value  : '-'
      }
      ]
    };
  },

  methods: {
    arraySpanMethod({ row, column, rowIndex, columnIndex }) {
      if (rowIndex === 0) {
        if (columnIndex === 7) {
          return [1, 1];
        }
      //   else if (columnIndex == 9) {
      //         return [0, 0];
      //  }

      }
    },
  }
};
</script>
