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
        prop="invoice_number"
        :label="$t('invoice-number')"
      />
      <el-table-column align="center" prop="date" :label="$t('invoice-date')" />
      <el-table-column
        align="center"
        prop="supplier_name"
        :label="$t('supplier-name')"
        width="350"
      />
      <el-table-column align="center" prop="sum" :label="$t('sum')" />
      <el-table-column align="center" prop="discount" :label="$t('discount')" />
      <el-table-column align="center" prop="tax" :label="$t('tax%')" />
      <el-table-column
        align="center"
        prop="total"
        :label="$t('total')"
        width="200"
      />

      <template #append>
        <el-table
          :data="totalAmount"
          class="width-full summaryTable"
          stripe
          border
          :span-method="arraySpanMethod"
          max-height="250"
        >
          <el-table-column
            align="center"
            prop="id"
            :label="$t('id')"
            width="40"
          />A
          <el-table-column
            align="center"
            prop="invoice_number"
            :label="$t('invoice-number')"
          />
          <el-table-column
            align="center"
            prop="date"
            :label="$t('invoice-date')"
          />
          <el-table-column
            align="center"
            prop="supplier_name"
            :label="$t('supplier-name')"
            width="350"
          />
          <el-table-column align="center" prop="sum" :label="$t('sum')" />
          <el-table-column
            align="center"
            prop="discount"
            :label="$t('discount')"
          />
          <el-table-column align="center" prop="tax" :label="$t('tax%')" />
          <el-table-column
            align="center"
            prop="total"
            :label="$t('total')"
            width="200"
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
          invice_number: " ",
          data: " ",
          supplier_name: " ",
          total: " ",
          discount: " ",
          tax: " ",
          sum: " ",
        },
        {
          id: "2",
          invice_number: " ",
          data: " ",
          supplier_name: " ",
          total: " ",
          discount: " ",
          tax: " ",
          sum: " ",
        },
        {
          id: "3",
          invice_number: " ",
          data: " ",
          supplier_name: " ",
          total: " ",
          discount: " ",
          tax: " ",
          sum: " ",
        },
        {
          id: "4",
          invice_number: " ",
          data: " ",
          supplier_name: " ",
          total: " ",
          discount: " ",
          tax: " ",
          sum: " ",
        },
      ],

      totalAmount: [
        {
          id: this.$t("total"),
          invice_number: " ",
          data: " ",
          supplier_name: " ",
          total: " 10",
          discount: "10",
          tax: " 11",
          sum: "11 ",
        },
        {
          id: "-",
          invice_number: " ",
          data: " ",
          supplier_name: " ",
          total: " ",
          discount: "",
          tax: " ",
          sum: " ",
        },
      ],
    };
  },

  methods: {
    arraySpanMethod({ row, column, rowIndex, columnIndex }) {
      if (rowIndex === 0) {
        if (columnIndex === 0) {
          return [1, 4];
        } else if (columnIndex < 4) {
          return [0, 0];
        }
      }
    },
  },
};
</script>