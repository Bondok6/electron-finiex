<template>
  <el-container class="container ma-4 mt-0 mb-0 invoice-table">
    <el-table
      :data="tableData"
      style="width: 100%"
      stripe
      border
      max-height="400"
    >
      <el-table-column align="center" prop="item_number" width="40" :label="$t('id')" />
      <el-table-column align="center" prop="asset_number" :label="$t('asset-number')" />
      <el-table-column align="center" prop="asset_name" :label="$t('asset-name')" />
      <el-table-column
        align="center"
        prop="structure_number"
        :label="$t('structure-No')"
      />
      <el-table-column align="center" prop="supplier_name" :label="$t('supplier-name')" />
      <el-table-column
        align="center"
        prop="depreciation_percentage"
        :label="$t('depreciation-ratio')"
      />
      <el-table-column
        align="center"
        prop="depreciation_date"
        :label="$t('depreciation-date')"
      />
      <el-table-column
        align="center"
        prop="purshase_date"
        slot-scope=""
        :label="$t('purchase-date')"
      />
      <el-table-column
        align="center"
        prop="purshase_price"
        :label="$t('purchasing-price')"
      />
      <el-table-column
        align="center"
        prop="addition_values"
        :label="$t('addition-value')"
      />
      <template #append>

    <el-table :data="summaryTable" class="width-full summaryTable lastSummaryCell" stripe border :span-method="arraySpanMethod" max-height="250">
      <el-table-column align="center" prop="item_number" width="40" :label="$t('id')" />
      <el-table-column align="center" prop="asset_number" :label="$t('asset-number')" />
      <el-table-column align="center" prop="asset_name" :label="$t('asset-name')" />
      <el-table-column
        align="center"
        prop="structure_number"
        :label="$t('structure-No')"
      />
      <el-table-column align="center" prop="supplier_name" :label="$t('supplier-name')" />
      <el-table-column
        align="center"
        prop="depreciation_percentage"
        :label="$t('depreciation-ratio')"
      />
      <el-table-column
        align="center"
        prop="depreciation_date"
        :label="$t('depreciation-date')"
      />
      <el-table-column
        align="center"
        prop="purshase_date"
        slot-scope=""
        :label="$t('purchase-date')"
      />
      <el-table-column
        align="center"
        prop="purshase_price"
        :label="$t('purchasing-price')"
      />
      <el-table-column
        align="center"
        prop="addition_values"
        :label="$t('addition-value')"
      />
    </el-table>
      </template>
    </el-table>

  </el-container>
</template>

<script>
export default {
  name: "invoice",

  data: function() {
    return {
      tableData: [
        {
          item_number: "1",
          asset_number: "2154254128",
          asset_name: "بدون",
          structure_number: "0215485929",
          supplier_name: "محمد",
          depreciation_percentage: "50%",
          depreciation_date: "01/01/2021",
          purshase_date: "01/01/2021",
          purshase_price: "20520000",
          addition_values: "10253020"
        },

        {
          item_number: "1",
          asset_number: "2154254128",
          asset_name: "بدون",
          structure_number: "0215485929",
          supplier_name: "محمد",
          depreciation_percentage: "50%",
          depreciation_date: "01/01/2021",
          purshase_date: "01/01/2021",
          purshase_price: "20520000",
          addition_values: "10253020"
        },
        {
          item_number: "1",
          asset_number: "2154254128",
          asset_name: "بدون",
          structure_number: "0215485929",
          supplier_name: "محمد",
          depreciation_percentage: "50%",
          depreciation_date: "01/01/2021",
          purshase_date: "01/01/2021",
          purshase_price: "20520000",
          addition_values: "10253020"
        },
        {
          item_number: "1",
          asset_number: "2154254128",
          asset_name: "بدون",
          structure_number: "0215485929",
          supplier_name: "محمد",
          depreciation_percentage: "50%",
          depreciation_date: "01/01/2021",
          purshase_date: "01/01/2021",
          purshase_price: "20520000",
          addition_values: "10253020"
        },
        {
          item_number: "1",
          asset_number: "2154254128",
          asset_name: "بدون",
          structure_number: "0215485929",
          supplier_name: "محمد",
          depreciation_percentage: "50%",
          depreciation_date: "01/01/2021",
          purshase_date: "01/01/2021",
          purshase_price: "20520000",
          addition_values: "10253020"
        }
      ],
      summaryTable : [
        {

          item_number : "1",
          asset_number : "012532531",
          asset_name   : "بدون",
          structure_number : "023532636636",
          supplier_name    : "محمد",
          depreciation_percentage : "50%",
          depreciation_date: "01/01/2021",
          purshase_date: "الاجمالى",
          purshase_price: "20520000",
          addition_values: "10253020"
        },
        {
          item_number : '-',
          asset_number : '-',
          asset_name   : '-',
          structure_number : '-',
          supplier_name    : '-',
          depreciation_percentage : '-',
          depreciation_date: '-',
          purshase_date: '-',
          purshase_price: '-',
          addition_values: '-',
        },
        ]
    };
  },
  methods: {
    arraySpanMethod({ row, column, rowIndex, columnIndex }) {
      if (rowIndex === 0) {
        if (columnIndex === 7) {
          return [1, 1];
        }else if (columnIndex == 8) {
              return [0, 0];
       }

      }
    },
  },
};
</script>
