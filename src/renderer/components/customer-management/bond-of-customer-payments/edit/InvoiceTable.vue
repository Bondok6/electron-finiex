<template>
  <el-container class="container ma-4 mt-0 mb-0 invoice-table editable-table">
    <el-table
      :data="tableData"
      style="width: 100%"
      stripe
      border
      max-height="500"
    >
      <el-table-column align="center" prop="id" :label="$t('id')" width="40">
        <template slot-scope="scope">
          <el-input
            ref="id"
            size="small"
            style="text-align: center"
            v-model="scope.row.id"
          ></el-input>
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        prop="invoice_number"
        :label="$t('invoice-number')"
      >
        <template slot-scope="scope">
          <el-input
            size="small"
            style="text-align: center"
            v-model="scope.row.invoice_number"
          ></el-input>
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        prop="bond_number"
        :label="$t('bond-number')"
      >
        <template slot-scope="scope">
          <el-input
            size="small"
            style="text-align: center"
            v-model="scope.row.bond_number"
          ></el-input>
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        prop="invoice_date"
        :label="$t('invoice-date')"
      >
        <template slot-scope="scope">
          <el-input
            size="small"
            style="text-align: center"
            v-model="scope.row.invoice_date"
          ></el-input>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="due_date" :label="$t('due-date')">
        <template slot-scope="scope">
          <el-input
            size="small"
            style="text-align: center"
            v-model="scope.row.due_date"
          ></el-input>
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        prop="invoice_amount"
        :label="$t('invoice-amount')"
      >
        <template slot-scope="scope">
          <el-input
            size="small"
            style="text-align: center"
            v-model="scope.row.invoice_amount"
          ></el-input>
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        prop="remaining_amount"
        :label="$t('remaining-amount')"
      >
        <template slot-scope="scope">
          <el-input
            size="small"
            style="text-align: center"
            v-model="scope.row.remaining_amount"
          ></el-input>
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        prop="amount_paid"
        :label="$t('amount-paid')"
      >
        <template slot-scope="scope">
          <el-input
            size="small"
            style="text-align: center"
            v-model="scope.row.amount_paid"
          ></el-input>
        </template>
      </el-table-column>
      <el-table-column align="center" width="60">
        <template>
          <el-popconfirm
            icon="el-icon-info"
            icon-color="red"
            title="تأكيد حذف الصنف ؟"
          >
            <i
              slot="reference"
              class="setting-button danger-color el-icon-delete-solid"
            ></i>
          </el-popconfirm>
        </template>
      </el-table-column>
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
          invoice_number: "44",
          bond_number: "2014-02-08",
          invoice_date: "بدون",
          due_date: "-",
          invoice_amount: "211",
          remaining_amount: "211",
          amount_paid: "211",
        },
        {
          id: "2",
          invoice_number: "44",
          bond_number: "2014-02-08",
          invoice_date: "بدون",
          due_date: "-",
          invoice_amount: "211",
          remaining_amount: "211",
          amount_paid: "211",
        },
        {
          id: "3",
          invoice_number: "44",
          bond_number: "2014-02-08",
          invoice_date: "بدون",
          due_date: "-",
          invoice_amount: "211",
          remaining_amount: "211",
          amount_paid: "211",
        },
      ],
    };
  },
};
</script>
