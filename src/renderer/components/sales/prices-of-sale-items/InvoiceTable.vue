<template>
  <el-container class="container ma-4 mt-0 mb-0 invoice-table">
    <el-table
      :data="tableData"
      style="width: 100%"
      stripe
      border
      max-height="250"
    >
      <el-table-column align="center" prop="id" :label="$t('id')" width="40" />

      <el-table-column
        align="center"
        prop="invoice_number"
        :label="$t('invoice-number')"
      />

      <el-table-column
        align="center"
        prop="client_name"
        :label="$t('client-name')"
        width="150"
      />

      <el-table-column
        align="center"
        prop="invoice_date"
        :label="$t('invoice-date')"
        width="150"
      />

      <el-table-column
        align="center"
        prop="item_name"
        :label="$t('item-name')"
        width="200"
      />

      <el-table-column align="center" prop="unit" :label="$t('unit')" />

      <el-table-column
        align="center"
        prop="sale_quantity"
        :label="$t('sale-quantity')"
      />

      <el-table-column
        align="center"
        prop="bonus_amount"
        :label="$t('bonus-amount')"
      />

      <el-table-column align="center" prop="price" :label="$t('price')" width="100"/>
      <el-table-column align="center" prop="sum" :label="$t('sum')" width="100"/>
      <el-table-column align="center" prop="tax" :label="$t('tax')" width="100"/>
      <el-table-column align="center" prop="total" :label="$t('total')" width="100"/>

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
            :label="$t('id')"
            width="40"
          />
          
          <el-table-column
            align="center"
            prop="invoice_number"
            :label="$t('invoice-number')"
          />

          <el-table-column
            align="center"
            prop="client_name"
            :label="$t('client-name')"
            width="150"
          />

          <el-table-column
            align="center"
            prop="invoice_date"
            :label="$t('invoice-date')"
            width="150"
          />

          <el-table-column
            align="center"
            prop="item_name"
            :label="$t('item-name')"
            width="200"
          />

          <el-table-column align="center" prop="unit" :label="$t('unit')" />

          <el-table-column
            align="center"
            prop="sale_quantity"
            :label="$t('sale-quantity')"
          />

          <el-table-column
            align="center"
            prop="bonus_amount"
            :label="$t('bonus-amount')"
          />

          <el-table-column align="center" prop="price" :label="$t('price')" width="100"/>
          <el-table-column align="center" prop="sum" :label="$t('sum')" width="100"/>
          <el-table-column align="center" prop="tax" :label="$t('tax')" width="100"/>
          <el-table-column align="center" prop="total" :label="$t('total')" width="100"/>
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
          client_name: "عميل نقدي",
          invoice_date: "02 / 06 / 2021",
          item_name: "مجموعة ثلاث قطع دكتايل",
          unit: "حبة",
          sale_quantity: "1",
          bonus_amount: "0",
          price: "100",
          sum: "3",
          tax: "2",
          total: "150",
        },
        {
          id: "2",
          invoice_number: "100",
          client_name: "عميل نقدي",
          invoice_date: "02 / 06 / 2021",
          item_name: "مجموعة ثلاث قطع دكتايل",
          unit: "حبة",
          sale_quantity: "1",
          bonus_amount: "0",
          price: "100",
          sum: "3",
          tax: "2",
          total: "150",
        },
        {
          id: "3",
          invoice_number: "100",
          client_name: "عميل نقدي",
          invoice_date: "02 / 06 / 2021",
          item_name: "مجموعة ثلاث قطع دكتايل",
          unit: "حبة",
          sale_quantity: "1",
          bonus_amount: "0",
          price: "100",
          sum: "3",
          tax: "2",
          total: "150",
        },
      ],

      summaryTable: [
        {
          id: this.$t("total"),
          invoice_number: "100",
          client_name: "عميل نقدي",
          invoice_date: "02 / 06 / 2021",
          item_name: "مجموعة ثلاث قطع دكتايل",
          unit: "",
          sale_quantity: "1",
          bonus_amount: "0",
          price: "100",
          sum: "3",
          tax: "2",
          total: "150",
        },
        {
          id: " ",
          invoice_number: "",
          client_name: "",
          invoice_date: " ",
          item_name: " ",
          unit: " ",
          sale_quantity: " ",
          bonus_amount: " ",
          price: " ",
          tax: " ",
          group: " ",
          total: " ",
        },
      ],
    };
  },

  methods: {
    arraySpanMethod({ rowIndex, columnIndex }) {
      if (rowIndex === 0) {
        if (columnIndex === 0) {
          return [1, 5];
        } else if (columnIndex > 0 && columnIndex < 5) {
          return [0, 0];
        }
      }
    },
  },
};
</script>