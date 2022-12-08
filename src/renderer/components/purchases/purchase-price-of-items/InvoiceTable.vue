<template>
  <el-container class="container ma-4 mt-0 mb-0 invoice-table">
    <el-table
      :data="tableData"
      style="width: 100%"
      stripe
      border
      max-height="250"
    >
      <el-table-column align="center" prop="id" :label="$t('number')" width="60" />
      <el-table-column
        align="center"
        prop="invoice_number"
        :label="$t('invoice-number')"
      />
      <el-table-column
        align="center"
        prop="invoice_date"
        :label="$t('invoice-date')"
      />
      <el-table-column
        align="center"
        prop="supplier_name"
        :label="$t('supplier-name')"
      />
      <el-table-column
        align="center"
        prop="item_name"
        :label="$t('item-name')"
        :width="250"
      >
      <template>
        <span>3302120</span>
        {{ '-'  + $t('item-name')}}
      </template>
      </el-table-column>
      <el-table-column align="center" prop="unit" :label="$t('unit')" />
      <el-table-column
        align="center"
        prop="purchase_quantity"
        :label="$t('purchase-quantity')"
      />
      <el-table-column
        align="center"
        prop="bonus_amount"
        :label="$t('bonus-amount')"
      />
      <el-table-column align="center" prop="price" :label="$t('price')" />
      <el-table-column align="center" prop="total" :label="$t('total')" />

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
            prop="id"
            :label="$t('number')"
            width="60"
          />
          <el-table-column
            align="center"
            prop="invoice_number"
            :label="$t('invoice-number')"
          />
          <el-table-column
            align="center"
            prop="supplier_name"
            :label="$t('client-name')"
          />
          <el-table-column
            align="center"
            prop="invoice_date"
            :label="$t('invoice-date')"
          />
          <el-table-column
            align="center"
            prop="item_name"
            :label="$t('item-name')"
            :width="250"
          />
          <el-table-column align="center" prop="unit" :label="$t('unit')" />
          <el-table-column
            align="center"
            prop="purchase_quantity"
            :label="$t('sale-quantity')"
          />
          <el-table-column
            align="center"
            prop="bonus_amount"
            :label="$t('bonus-amount')"
          />
          <el-table-column align="center" prop="price" :label="$t('price')" />
          <el-table-column align="center" prop="total" :label="$t('total')" />
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
          invoice_number: "100",
          supplier_name: "عميل نقدي",
          invoice_date: "02 / 06 / 2021",
          item_name: "مجموعة ثلاث قطع دكتايل",
          unit: "حبة",
          purchase_quantity: "1",
          bonus_amount: "0",
          price: "100",
          total: "150",
        },
        {
          id: "2",
          invoice_number: "100",
          supplier_name: "عميل نقدي",
          invoice_date: "02 / 06 / 2021",
          item_name: "مجموعة ثلاث قطع دكتايل",
          unit: "حبة",
          purchase_quantity: "1",
          bonus_amount: "0",
          price: "100",
          total: "150",
        },
        {
          id: "3",
          invoice_number: "100",
          supplier_name: "عميل نقدي",
          invoice_date: "02 / 06 / 2021",
          item_name: "مجموعة ثلاث قطع دكتايل",
          unit: "حبة",
          purchase_quantity: "1",
          bonus_amount: "0",
          price: "100",
          total: "150",
        },
      ],

      summaryTable: [
        {
          id: this.$t("total"),
          invoice_number: "",
          supplier_name: "",
          invoice_date: "",
          item_name: "",
          unit: "",
          purchase_quantity: "",
          bonus_amount: "",
          price: "",
          total: "",
        },
        {
          id: "-",
          invoice_number: "-",
          supplier_name: "-",
          invoice_date: "-",
          item_name: "-",
          unit: "-",
          purchase_quantity: "-",
          bonus_amount: "-",
          price: "-",
          total: "-",
        },
      ],
    };
  },

  methods: {
    arraySpanMethod({ row, column, rowIndex, columnIndex }) {
      if (rowIndex === 0) {
        if (columnIndex === 0) {
          return [1, 4];
        } else if (columnIndex > 0 && columnIndex < 4) {
          return [0, 0];
        }
      }
    },
  },
};
</script>