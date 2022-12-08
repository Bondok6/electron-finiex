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
      <el-table-column
        align="center"
        prop="invoice_date"
        :label="$t('invoice-date')"
      />
      <el-table-column
        align="center"
        prop="client_name"
        :label="$t('client-name')"
        width="400"
      />
      <el-table-column align="center" prop="due_date" :label="$t('due-date')" />
      <el-table-column
        align="center"
        prop="remaining"
        :label="$t('remaining')"
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
          />
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
            prop="client_name"
            :label="$t('client-name')"
            width="400"
          />
          <el-table-column
            align="center"
            prop="due_date"
            :label="$t('due-date')"
          />
          <el-table-column
            align="center"
            prop="remaining"
            :label="$t('remaining')"
          />
        </el-table>
      </template>
    </el-table>
  </el-container>
</template>


<script>
export default {
  data: function () {
    return {
      tableData: [
        {
          id: "1",
          invoice_number: " ",
          invoice_date: " ",
          client_name: " ",
          due_date: " ",
          remaining: " ",
        },
        {
          id: "2",
          invoice_number: " ",
          invoice_date: " ",
          client_name: " ",
          due_date: " ",
          remaining: " ",
        },
        {
          id: "3",
          invoice_number: " ",
          invoice_date: " ",
          client_name: " ",
          due_date: " ",
          remaining: " ",
        },
        {
          id: "4",
          invoice_number: " ",
          invoice_date: " ",
          client_name: " ",
          due_date: " ",
          remaining: " ",
        },
      ],
      totalAmount: [
        {
          id: this.$t("total"),
          invoice_number: " ",
          invoice_date: " ",
          client_name: " ",
          due_date: " ",
          remaining: "10 ",
        },
        {
          id: "-",
          invoice_number: " ",
          invoice_date: " ",
          client_name: " ",
          due_date: " ",
          remaining: " ",
        },
      ],
    };
  },
  methods: {
    arraySpanMethod({ row, column, rowIndex, columnIndex }) {
      if (rowIndex === 0) {
        if (columnIndex === 0) {
          return [1, 5];
        } else if (columnIndex < 5) {
          return [0, 0];
        }
      }
    },
  },
};
</script>