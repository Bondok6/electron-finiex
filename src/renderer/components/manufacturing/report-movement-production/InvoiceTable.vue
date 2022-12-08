<template>
  <el-container class="container ma-4 mt-0 mb-0 invoice-table">
    <el-table
      :data="tableData"
      style="width: 100%"
      stripe
      border
      max-height="500"
    >
      <el-table-column align="center" prop="id" :label="$t('id')" width="40" />
      <el-table-column
        align="center"
        prop="production_number"
        :label="$t('production-number')"
      />
      <el-table-column
        align="center"
        prop="production_date"
        :label="$t('production-date')"
      />
      <el-table-column
        align="center"
        prop="operation_number"
        :label="$t('batch-number')"
      />
      <el-table-column
        align="center"
        prop="item_name"
        :label="$t('name-of-class-product')"
      />
      <el-table-column align="center" prop="unit" :label="$t('unit')" />
      <el-table-column
        align="center"
        prop="production_quantity"
        :label="$t('production-quantities')"
      />
      <el-table-column
        align="center"
        prop="receipt_quantity"
        :label="$t('receipt-quantity')"
      />
      <el-table-column
        align="center"
        prop="perishable_quantity"
        :label="$t('amount-of-waste')"
      />
      <el-table-column
        align="center"
        prop="remaining_quantity"
        :label="$t('remaining-quantity')"
      />
      <template #append>
        <el-table
          :data="totalAmount"
          class="width-full summaryTable"
          :span-method="arraySapnMethod"
          stripe
          border
          max-height="500"
        >
          <el-table-column
            align="center"
            prop="id"
            :label="$t('id')"
            width="40"
          />
          <el-table-column
            align="center"
            prop="production_number"
            :label="$t('production-number')"
          />
          <el-table-column
            align="center"
            prop="production_date"
            :label="$t('production-date')"
          />
          <el-table-column
            align="center"
            prop="operation_number"
            :label="$t('batch-number')"
          />
          <el-table-column
            align="center"
            prop="item_name"
            :label="$t('name-of-class-product')"
          />
          <el-table-column align="center" prop="unit" :label="$t('unit')" />
          <el-table-column
            align="center"
            prop="production_quantity"
            :label="$t('production-quantities')"
          />
          <el-table-column
            align="center"
            prop="receipt_quantity"
            :label="$t('receipt-quantity')"
          />
          <el-table-column
            align="center"
            prop="perishable_quantity"
            :label="$t('amount-of-waste')"
          />
          <el-table-column
            align="center"
            prop="remaining_quantity"
            :label="$t('remaining-quantity')"
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
          id: "1",
          production_number: "44",
          production_date: "2014-02-18",
          operation_number: "44",
          item_number: "7",
          item_name: "211",
          unit: "حبة",
          production_quantity: "33",
          receipt_quantity: "44",
          perishable_quantity: "11",
          remaining_quantity: "22",
        },
        {
          id: "2",
          production_number: "44",
          production_date: "2014-02-18",
          operation_number: "44",
          item_number: "7",
          item_name: "211",
          unit: "حبة",
          production_quantity: "33",
          receipt_quantity: "44",
          perishable_quantity: "11",
          remaining_quantity: "22",
        },
        {
          id: "3",
          production_number: "44",
          production_date: "2014-02-18",
          operation_number: "44",
          item_number: "7",
          item_name: "211",
          unit: "حبة",
          production_quantity: "33",
          receipt_quantity: "44",
          perishable_quantity: "11",
          remaining_quantity: "22",
        },
        {
          id: "4",
          production_number: "44",
          production_date: "2014-02-18",
          operation_number: "44",
          item_number: "7",
          item_name: "211",
          unit: "حبة",
          production_quantity: "33",
          receipt_quantity: "44",
          perishable_quantity: "11",
          remaining_quantity: "22",
        },
      ],
      totalAmount: [
        {
          id: this.$t("total"),
          production_number: "",
          production_date: "",
          operation_number: "",
          item_number: "",
          item_name: "",
          unit: "",
          production_quantity: "44",
          receipt_quantity: "44",
          perishable_quantity: "11",
          remaining_quantity: "22",
        },
        {
          id: "-",
          production_number: "",
          production_date: "",
          operation_number: "",
          item_number: "",
          item_name: "",
          unit: "",
          production_quantity: "",
          receipt_quantity: "",
          perishable_quantity: "",
          remaining_quantity: "",
        },
      ],
    };
  },

  methods: {
    arraySapnMethod({ row, column, rowIndex, columnIndex }) {
      if (rowIndex === 0) {
        if (columnIndex === 0) {
          return [1, 6];
        } else if (columnIndex < 6) {
          return [0, 0];
        }
      }
    },
  },
};
</script>