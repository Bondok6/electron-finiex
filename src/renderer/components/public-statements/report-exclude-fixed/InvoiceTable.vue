<template>
  <el-container class="container ma-4 mt-0 mb-0 invoice-table">
    <el-table
      :data="tableData"
      style="width: 100%"
      stripe
      border
      max-height="500"
    >
      <el-table-column
        align="center"
        prop="item_number"
        width="40"
        :label="$t('id')"
      />
      <el-table-column
        align="center"
        prop="asset_name"
        :label="$t('asset-name')"
        width="250"
      />
      <el-table-column
        align="center"
        prop="amount_asset"
        :label="$t('amount-asset')"
      />
      <el-table-column
        align="center"
        prop="depreciation_ratio"
        :label="$t('depreciation-ratio')"
      />
      <el-table-column
        align="center"
        prop="date_start_depreciation"
        :label="$t('date-start-depreciation')"
      />
      <el-table-column
        align="center"
        prop="date_exclusion_original"
        :label="$t('date-exclusion-original')"
      />
      <el-table-column
        align="center"
        prop="current_depreciation_complex"
        :label="$t('current-depreciation-complex')"
      />
      <el-table-column
        align="center"
        prop="booking_value"
        :label="$t('booking-value')"
      />
      <el-table-column
        align="center"
        prop="original_exclusion_value"
        :label="$t('original-exclusion-value')"
      />
      <el-table-column
        align="center"
        prop="net_profit_Loss"
        :label="$t('net-profit-loss')"
      />
      <template #append>
        <el-table
          :data="summaryTable"
          class="width-full summaryTable"
          stripe
          border
          :span-method="arraySpanMethod"
          max-height="250"
        >
          <el-table-column
            align="center"
            prop="item_number"
            width="40"
            :label="$t('id')"
          />
          <el-table-column
            align="center"
            prop="asset_name"
            :label="$t('asset-name')"
            width="250"
          />
          <el-table-column
            align="center"
            prop="amount_asset"
            :label="$t('amount-asset')"
          />
          <el-table-column
            align="center"
            prop="depreciation_ratio"
            :label="$t('depreciation-ratio')"
          />
          <el-table-column
            align="center"
            prop="date_start_depreciation"
            :label="$t('date-start-depreciation')"
          />
          <el-table-column
            align="center"
            prop="date_exclusion_original"
            :label="$t('date-exclusion-original')"
          />
          <el-table-column
            align="center"
            prop="current_depreciation_complex"
            :label="$t('current-depreciation-complex')"
          />
          <el-table-column
            align="center"
            prop="booking_value"
            :label="$t('booking-value')"
          />
          <el-table-column
            align="center"
            prop="original_exclusion_value"
            :label="$t('original-exclusion-value')"
          />
          <el-table-column
            align="center"
            prop="net_profit_Loss"
            :label="$t('net-profit-loss')"
          />
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
          item_number: "1",
          asset_name: "بدون",
          amount_asset: "",
          depreciation_ratio: "10%",
          date_start_depreciation: "",
          date_exclusion_original: "",
          current_depreciation_complex: "",
          booking_value: "",
          original_exclusion_value: "",
          net_profit_Loss: "",
        },
        {
          item_number: "2",
          asset_name: "بدون",
          amount_asset: "",
          depreciation_ratio: "10%",
          date_start_depreciation: "",
          date_exclusion_original: "",
          current_depreciation_complex: "",
          booking_value: "",
          original_exclusion_value: "",
          net_profit_Loss: "",
        },
      ],
      summaryTable: [
        {
          item_number: this.$t("total"),
          asset_name: "",
          amount_asset: "",
          depreciation_ratio: "",
          date_start_depreciation: "",
          date_exclusion_original: "",
          current_depreciation_complex: "",
          booking_value: "",
          original_exclusion_value: "",
          net_profit_Loss: "",
        },
        {
          item_number: "-",
          asset_name: "",
          amount_asset: "",
          depreciation_ratio: "",
          date_start_depreciation: "",
          date_exclusion_original: "",
          current_depreciation_complex: "",
          booking_value: "",
          original_exclusion_value: "",
          net_profit_Loss: "",
        },
      ],
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
  },
};
</script>
