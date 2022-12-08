<template>
  <el-container class="container ma-4 mt-0 mb-0 invoice-table">
    <el-table
      :data="tableData"
      style="width: 100%"
      stripe
      border
      max-height="250"
    >
      <el-table-column
        align="center"
        prop="item_name"
        :label="$t('item-name')"
        width="300"
      />
      <el-table-column
        align="center"
        prop="opening_quantity"
        :label="$t('opening-quantity')"
      />
      <el-table-column
        align="center"
        prop="net_purchases_quantity"
        :label="$t('net-purchases-quantity')"
        width="100"
      />
      <el-table-column
        align="center"
        prop="recieved_quantity"
        :label="$t('recieved-quantity')"
        width="100"
      />
      <el-table-column
        align="center"
        prop="increase_modification_quantity"
        :label="$t('increase-modification-quantity')"
      />
      <el-table-column
        align="center"
        prop="supply_quantity"
        :label="$t('supply-quantity')"
      />
      <el-table-column
        align="center"
        prop="net_sales_quantity"
        :label="$t('net-sales-quantity')"
      />
      <el-table-column
        align="center"
        prop="transfers_quantity"
        :label="$t('transfers-quantity')"
      />
      <el-table-column
        align="center"
        prop="decrease_modification_quantity"
        :label="$t('decrease-modification-quantity')"
      />
      <el-table-column
        align="center"
        prop="exchange_quantity"
        :label="$t('exchange-quantity')"
      />
      <el-table-column
        align="center"
        prop="remaining_quantity"
        :label="$t('remaining-quantity')"
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
        prop="item_name"
        :label="$t('item-name')"
        width="300"
      />
      <el-table-column
        align="center"
        prop="opening_quantity"
        :label="$t('opening-quantity')"
      />
      <el-table-column
        align="center"
        prop="net_purchases_quantity"
        :label="$t('net-purchases-quantity')"
        width="100"
      />
      <el-table-column
        align="center"
        prop="recieved_quantity"
        :label="$t('recieved-quantity')"
        width="100"
      />
      <el-table-column
        align="center"
        prop="increase_modification_quantity"
        :label="$t('increase-modification-quantity')"
      />
      <el-table-column
        align="center"
        prop="supply_quantity"
        :label="$t('supply-quantity')"
      />
      <el-table-column
        align="center"
        prop="net_sales_quantity"
        :label="$t('net-sales-quantity')"
      />
      <el-table-column
        align="center"
        prop="transfers_quantity"
        :label="$t('transfers-quantity')"
      />
      <el-table-column
        align="center"
        prop="decrease_modification_quantity"
        :label="$t('decrease-modification-quantity')"
      />
      <el-table-column
        align="center"
        prop="exchange_quantity"
        :label="$t('exchange-quantity')"
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
          item_name: "1000 - الأصول",
          opening_quantity: "dummy data",
          net_purchases_quantity: "dummy data",
          recieved_quantity: "dummy data",
          increase_modification_quantity: "dummy data",
          supply_quantity: "dummy data",
          net_sales_quantity: "dummy data",
          transfers_quantity: "dummy data",
          decrease_modification_quantity: "dummy data",
          exchange_quantity: "dummy data",
          remaining_quantity: "dummy data",
        },
        {
          item_name: "1000 - الأصول",
          opening_quantity: "dummy data",
          net_purchases_quantity: "dummy data",
          recieved_quantity: "dummy data",
          increase_modification_quantity: "dummy data",
          supply_quantity: "dummy data",
          net_sales_quantity: "dummy data",
          transfers_quantity: "dummy data",
          decrease_modification_quantity: "dummy data",
          exchange_quantity: "dummy data",
          remaining_quantity: "dummy data",
        },
      ],
      summaryTable: [
        {
          item_name: this.$t('total'),
          opening_quantity: "",
          net_purchases_quantity: "",
          recieved_quantity: "",
          increase_modification_quantity: "",
          supply_quantity: "",
          net_sales_quantity: "",
          transfers_quantity: "",
          decrease_modification_quantity: "",
          exchange_quantity: "",
          remaining_quantity: "",
        },
        {
          item_name: "",
          opening_quantity: "",
          net_purchases_quantity: "",
          recieved_quantity: "",
          increase_modification_quantity: "",
          supply_quantity: "",
          net_sales_quantity: "",
          transfers_quantity: "",
          decrease_modification_quantity: "",
          exchange_quantity: "",
          remaining_quantity: "",
        },
      ],
    };
  },

  methods: {
    arraySpanMethod({ row, column, rowIndex, columnIndex }) {
      if (rowIndex === 0) {
        if (columnIndex === 0) {
          return [1, 1];
        } else if (columnIndex > 0 && columnIndex < 1) {
          return [0, 0];
        }
      }
    },
  },
};
</script>